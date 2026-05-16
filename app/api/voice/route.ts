import type { NextRequest } from 'next/server';

// In-memory rate limiting: IP -> { count, resetAt }
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute

const VOICE_ID = 'eamrbjnQswTxPZakN4gh';

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'
  );
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now >= entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count += 1;
  return true;
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (!checkRateLimit(ip)) {
    return new Response(
      JSON.stringify({ error: 'Rate limit exceeded. Please try again in a minute.' }),
      { status: 429, headers: { 'Content-Type': 'application/json' } }
    );
  }

  let body: { text?: string; sectionKey?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ error: 'Invalid request body.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const { text, sectionKey } = body;

  if (!text || typeof text !== 'string' || text.trim().length === 0) {
    return new Response(
      JSON.stringify({ error: 'Missing or invalid "text" field.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  if (!sectionKey || typeof sectionKey !== 'string') {
    return new Response(
      JSON.stringify({ error: 'Missing or invalid "sectionKey" field.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'Voice service is not configured.' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const elevenLabsResponse = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      {
        method: 'POST',
        headers: {
          Accept: 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': apiKey,
        },
        body: JSON.stringify({
          text: text.trim(),
          model_id: 'eleven_monolingual_v1',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
            style: 0.5,
          },
        }),
      }
    );

    if (!elevenLabsResponse.ok) {
      const errorText = await elevenLabsResponse.text();
      console.error('ElevenLabs error:', elevenLabsResponse.status, errorText);
      return new Response(
        JSON.stringify({ error: 'Voice generation failed.' }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const audioBuffer = await elevenLabsResponse.arrayBuffer();

    return new Response(audioBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'no-store',
      },
    });
  } catch (err) {
    console.error('Voice proxy error:', err);
    return new Response(
      JSON.stringify({ error: 'Internal server error.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
