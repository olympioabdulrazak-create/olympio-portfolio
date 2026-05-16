import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  let body: { input?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ error: 'Invalid request body.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const { input } = body;

  if (!input || typeof input !== 'string' || input.trim().length === 0) {
    return new Response(
      JSON.stringify({ error: 'Missing or invalid "input" field.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'Brief service is not configured.' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [
          {
            role: 'user',
            content: `You are a creative strategist with personality. A visitor to Olympio Abdul Razak's portfolio (award-winning creative director specializing in 3D brand visualization) said: "${input.trim()}"\n\nGenerate a brief 3-bullet strategic outline of what they might need. Be specific, actionable, and show creative thinking. Add a touch of wit where appropriate. Format as:\n• [Point 1]\n• [Point 2]\n• [Point 3]`,
          },
        ],
      }),
    });

    if (!anthropicResponse.ok) {
      const errorText = await anthropicResponse.text();
      console.error('Anthropic error:', anthropicResponse.status, errorText);
      return new Response(
        JSON.stringify({ error: 'Brief generation failed.' }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data = await anthropicResponse.json();
    const text =
      (data.content as Array<{ type: string; text: string }>)?.find(
        (c) => c.type === 'text'
      )?.text ?? 'Unable to generate brief';

    return new Response(JSON.stringify({ text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Brief proxy error:', err);
    return new Response(
      JSON.stringify({ error: 'Internal server error.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
