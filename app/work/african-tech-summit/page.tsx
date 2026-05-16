'use client';
import Link from 'next/link';

export default function AfricanTechSummit() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Nav override — sits above layout nav */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="flex justify-between items-center px-6 md:px-16 lg:px-24 py-5">
          <Link href="/" className="text-sm font-medium hover:opacity-60 transition-opacity">← Olympio Abdul Razak</Link>
          <a href="/#contact" className="text-sm text-gray-500 hover:text-black transition-colors">Get in touch</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-3 items-center mb-6">
            <span className="px-3 py-1 bg-black text-white text-xs font-medium">🏆 Best Booth 2025-2026</span>
            <span className="text-xs text-gray-400">Experiential Design · 2025</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-tight">
            African Tech Summit Booth
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-12 max-w-3xl">
            Designing Africa's most awarded tech conference booth — from concept to execution in 6 weeks.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Role</p>
              <p className="text-sm text-gray-700 leading-relaxed">Brand Design Lead<br />3D Visualization<br />On-ground Creative Direction</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Timeline</p>
              <p className="text-sm text-gray-700">6 weeks<br />Jan — Feb 2025</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Team</p>
              <p className="text-sm text-gray-700">2 Designers · 1 3D Artist<br />3 Fabricators<br />+ Event coordination</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero images */}
      <section className="px-6 md:px-16 lg:px-24 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[16/9] bg-gray-50 rounded-sm overflow-hidden mb-4">
            <img src="/images/booth2.png" alt="African Tech Summit Booth — Moniepoint" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/3] bg-gray-50 rounded-sm overflow-hidden">
              <img src="/images/booth1.png" alt="Booth — front elevation" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] bg-gray-50 rounded-sm overflow-hidden">
              <img src="/images/booth3.png" alt="Booth — interior angle" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="px-6 md:px-16 lg:px-24 mb-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">The Challenge</p>
          <h2 className="text-3xl md:text-4xl font-light mb-8">Stand out among 200+ exhibitors at Africa's largest tech conference</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The African Tech Summit attracts 5,000+ attendees and 200+ exhibitors. Every company fights for attention with screens, demos, and free merch. Moniepoint, fresh off a major funding round, needed a booth that would do something different — not just capture attention, but hold it.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Most booths tell you about the product. Ours needed to tell you about the possibility. Moniepoint powers 20M+ businesses — the booth had to make people feel that scale without saying it outright.
          </p>
          <div className="bg-gray-50 p-6 rounded-sm mb-8">
            <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest">Constraints</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 6-week timeline from brief to event day (most exhibitors plan 3–6 months out)</li>
              <li>• Budget-conscious execution — maximum visual impact per naira spent</li>
              <li>• Must travel to Nairobi, Kenya — no local fabrication on-site</li>
              <li>• New brand identity (Moniepoint rebrand was 3 months old at the time)</li>
            </ul>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 bg-gray-50 p-6 rounded-sm">
            <div className="text-center">
              <p className="text-3xl font-light mb-1">500+</p>
              <p className="text-xs text-gray-500">Target booth visitors (Day 1)</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-light mb-1">50+</p>
              <p className="text-xs text-gray-500">Qualified enterprise leads</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-light mb-1">1M+</p>
              <p className="text-xs text-gray-500">Target social impressions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 md:px-16 lg:px-24 mb-24 bg-gray-50 py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">The Process</p>
          <h2 className="text-3xl md:text-4xl font-light mb-16">From concept to award-winning execution</h2>

          <div className="space-y-20">
            <div>
              <div className="flex items-baseline gap-4 mb-5">
                <span className="text-4xl font-light text-gray-200">01</span>
                <div>
                  <h3 className="text-xl font-light">Research & Conceptual Direction</h3>
                  <p className="text-xs text-gray-400 mt-1">Week 1–2</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                I started by analyzing previous summit winners. The pattern was clear: most booths were either tech-heavy (VR demos, giant screens) or product-focused (download CTAs, giveaways). Almost none told a brand story.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                <strong>Key insight:</strong> Moniepoint's real story isn't our app — it's the 20 million businesses we power. The booth needed to feel like <em>their</em> success, not ours.
              </p>
              <div className="bg-white p-5 rounded-sm">
                <p className="text-sm font-medium mb-3">Concept directions explored:</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li><strong>Direction A: "The Engine Room"</strong> — Exposed infrastructure aesthetic, celebrating payments technology → <span className="text-gray-400">Rejected: too internal-facing</span></li>
                  <li><strong>Direction B: "20 Million Stories"</strong> — Gallery walls with business owner portraits → <span className="text-gray-400">Rejected: too static, no interaction</span></li>
                  <li><strong>Direction C: "Dream Bigger"</strong> — Aspirational space with interactive zones + photo moments → <span className="text-green-600 font-medium">Selected</span></li>
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-4 mb-5">
                <span className="text-4xl font-light text-gray-200">02</span>
                <div>
                  <h3 className="text-xl font-light">3D Visualization & Iteration</h3>
                  <p className="text-xs text-gray-400 mt-1">Week 2–3</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                Working in Cinema 4D, I created 3 major iterations before the approved design. The rejected versions taught me something: enclosed = corporate, open = accessible. Every iteration pushed further toward openness.
              </p>
              <div className="bg-white p-5 rounded-sm mb-5">
                <p className="text-sm font-medium mb-3">Iteration decisions:</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li><strong>V1:</strong> Fully enclosed booth → Rejected (felt corporate, didn't invite foot traffic)</li>
                  <li><strong>V2:</strong> Open-sided with hanging elements → Client concern about sight lines from overhead</li>
                  <li><strong>V3:</strong> Semi-enclosed with elevated platform + transparent panels → Approved</li>
                </ul>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The final design featured a 4m × 6m footprint with a 3m elevated platform. That elevation created a natural "stage" effect — passersby would see activity above the crowd, creating curiosity that pulled people in.
              </p>
            </div>

            <div>
              <div className="flex items-baseline gap-4 mb-5">
                <span className="text-4xl font-light text-gray-200">03</span>
                <div>
                  <h3 className="text-xl font-light">Fabrication Oversight</h3>
                  <p className="text-xs text-gray-400 mt-1">Week 4–5</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                I worked directly with fabricators in Lagos, making daily site visits. The renders were detailed enough that fabricators could work from them — but physical realities always bring surprises.
              </p>
              <div className="bg-white p-5 rounded-sm">
                <p className="text-sm font-medium mb-3">Challenges solved in production:</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>• Acrylic panels delayed 1 week → Switched to polycarbonate with custom tint (same visual result)</li>
                  <li>• Platform weight concerns → Added reinforced steel subframe</li>
                  <li>• LED strips created glare → Repositioned to indirect uplighting behind panels</li>
                  <li>• Branding vinyl misalignment → Created installation jigs for precision placement</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-4 mb-5">
                <span className="text-4xl font-light text-gray-200">04</span>
                <div>
                  <h3 className="text-xl font-light">On-Ground Activation</h3>
                  <p className="text-xs text-gray-400 mt-1">Event Week</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                I directed on-site through the 3-day event: briefing the 8-person booth team on engagement flows (greet → qualify → demo/meeting → capture lead), coordinating content capture, and making real-time adjustments based on foot traffic patterns.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The most important call: insisting on a full dress rehearsal 2 days before. We discovered the demo tablets weren't secured and the photo backdrop needed height adjustment. Both fixed before a single attendee arrived.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 md:px-16 lg:px-24 mb-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">The Results</p>
          <h2 className="text-3xl md:text-4xl font-light mb-12">Exceeded every metric. Won Best Booth.</h2>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-sm">
              <p className="text-3xl font-light mb-1">847</p>
              <p className="text-sm text-gray-500 mb-3">Booth visitors (Day 1)</p>
              <p className="text-xs text-green-600">Target: 500+ ✓</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-sm">
              <p className="text-3xl font-light mb-1">73</p>
              <p className="text-sm text-gray-500 mb-3">Qualified enterprise leads</p>
              <p className="text-xs text-green-600">Target: 50+ ✓</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-sm">
              <p className="text-3xl font-light mb-1">2.4M</p>
              <p className="text-sm text-gray-500 mb-3">Social impressions</p>
              <p className="text-xs text-green-600">Target: 1M+ ✓</p>
            </div>
          </div>

          <ul className="space-y-3 mb-12 text-sm text-gray-600">
            <li>🏆 Best Booth — voted by exhibitors and event organizers</li>
            <li>📰 Featured in 15+ tech publications including TechCabal, Techpoint Africa, and Business Day</li>
            <li>🤝 12 enterprise partnership meetings scheduled during the event</li>
            <li>📸 400+ organic social posts featuring the booth</li>
          </ul>

          <div className="border-l-4 border-black pl-6 mb-8">
            <p className="text-gray-700 leading-relaxed italic mb-3">
              "This wasn't just a booth — it was a statement. Olympio turned a 6-week timeline into our most impactful brand moment of 2025. The attention to detail, from the 3D renders to the on-ground execution, showed why he's leading our brand design."
            </p>
            <p className="text-sm text-gray-500">— Tosin Eniolorunda, CEO & Co-founder, Moniepoint Inc.</p>
          </div>

          <div className="border-l-4 border-black pl-6">
            <p className="text-gray-700 leading-relaxed italic mb-3">
              "I've attended African Tech Summit for 4 years. This was the first booth I actually wanted to spend time in. The design made Moniepoint feel like the biggest player in the room."
            </p>
            <p className="text-sm text-gray-500">— Enterprise Partner, Tech Industry</p>
          </div>
        </div>
      </section>

      {/* Learnings */}
      <section className="px-6 md:px-16 lg:px-24 mb-24 bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-8">Key Learnings</p>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-medium mb-4 text-green-600 uppercase tracking-wider">What I'd keep</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>✓ Dress rehearsal — it will always catch something critical</li>
                <li>✓ Elevated platform creates natural stage/audience dynamic</li>
                <li>✓ Photo moments drive massive organic social reach</li>
                <li>✓ Staff choreography brief ensures consistent experience</li>
                <li>✓ Transparent materials maintain visibility without losing space definition</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-4 text-orange-500 uppercase tracking-wider">What I'd change</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>⚡ Start fabricator sourcing earlier (material delays cost 4 days)</li>
                <li>⚡ Build 10% budget buffer for last-minute fixes</li>
                <li>⚡ Brief PR team earlier for coordinated media coverage</li>
                <li>⚡ Photograph more process work for documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next project + CTA */}
      <section className="px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mb-16 pb-16 border-b border-gray-100">
            <div>
              <p className="text-xs text-gray-400 mb-2">Next case study</p>
              <Link href="/work/moniepoint-fundraise" className="text-2xl font-light hover:opacity-60 transition-opacity">
                Still Day One — Fundraise →
              </Link>
            </div>
            <Link href="/" className="text-sm text-gray-500 hover:text-black transition-colors">
              ← All projects
            </Link>
          </div>
          <div className="text-center bg-gray-50 py-16 px-8 rounded-sm">
            <h3 className="text-2xl font-light mb-4">Need experiential design or 3D visualization?</h3>
            <p className="text-gray-500 text-sm mb-8">Currently booking Q3 2026 projects. Open to opportunities in Toronto, Vancouver, and Montreal.</p>
            <a href="/#contact" className="inline-block px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors">
              Start a conversation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
