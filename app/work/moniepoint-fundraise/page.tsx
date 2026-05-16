'use client';
import Link from 'next/link';

export default function MoniePointFundraise() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Nav override */}
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
            <span className="px-3 py-1 bg-gray-100 text-black text-xs font-medium">Brand Film</span>
            <span className="text-xs text-gray-400">Video Campaign · 2024</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-tight">
            Still Day One — Fundraise
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-12 max-w-3xl">
            Leading creative direction for Moniepoint's emotional brand film announcing our Series C fundraise — the story that humanized a billion-dollar milestone.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Role</p>
              <p className="text-sm text-gray-700 leading-relaxed">Creative Director<br />Brand Design Lead<br />Visual Direction</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Timeline</p>
              <p className="text-sm text-gray-700">8 weeks<br />Sep — Oct 2024</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Team</p>
              <p className="text-sm text-gray-700">Content Studio (5)<br />External Production (12)<br />Leadership (3)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="px-6 md:px-16 lg:px-24 mb-24">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-video bg-gray-100 rounded-sm overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/qyaojFuB6OE"
              title="Still Day One — Moniepoint Fundraise"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="px-6 md:px-16 lg:px-24 mb-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">The Challenge</p>
          <h2 className="text-3xl md:text-4xl font-light mb-8">How do you announce a billion-dollar fundraise without sounding like every other fintech?</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            October 2024: Moniepoint closed one of Africa's largest Series C rounds. Every fintech fundraise follows the same playbook — press release, CEO LinkedIn post, investor logo wall. We weren't interested in making that film.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            This was also Moniepoint's first major brand moment since rebranding from TeamApt 6 months prior. The film had to answer: what does Moniepoint sound like when we're not selling a product?
          </p>
          <div className="bg-gray-50 p-6 rounded-sm mb-6">
            <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest">Success criteria</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Launch same day as press release announcement</li>
              <li>✓ 100K+ views in Week 1 (no paid media)</li>
              <li>✓ Positive sentiment from business owners</li>
              <li>✓ Media pickup beyond standard tech press</li>
              <li>✓ Internal team alignment on brand voice</li>
            </ul>
          </div>
          <p className="text-gray-600 leading-relaxed">
            <strong>The constraint:</strong> 8 weeks end-to-end. Leadership wanted this live same day as the press release. No room for extended creative development.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 md:px-16 lg:px-24 mb-24 bg-gray-50 py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">The Process</p>
          <h2 className="text-3xl md:text-4xl font-light mb-16">From concept to film in 8 weeks</h2>

          <div className="space-y-20">
            <div>
              <div className="flex items-baseline gap-4 mb-5">
                <span className="text-4xl font-light text-gray-200">01</span>
                <div>
                  <h3 className="text-xl font-light">Concept & Narrative Strategy</h3>
                  <p className="text-xs text-gray-400 mt-1">Week 1–2</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                I started with one question: <em>What does every Nigerian business owner feel after a major milestone, no matter how big?</em>
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                The answer wasn't "celebration." It was: <strong>"it's still day one."</strong> No matter how far you've come, you're still building. That's the feeling that drives every entrepreneur — and it was exactly what Moniepoint felt about its fundraise. We're not arriving. We're accelerating.
              </p>
              <div className="bg-white p-5 rounded-sm">
                <p className="text-sm font-medium mb-3">Three directions pitched:</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li><strong>"The Numbers Story"</strong> — Data-driven, infographic style → <span className="text-gray-400">Rejected: too corporate</span></li>
                  <li><strong>"Founder Testimonials"</strong> — 5–6 business owners on camera → <span className="text-gray-400">Rejected: felt like case studies, not brand film</span></li>
                  <li><strong>"Still Day One"</strong> — Philosophical POV on ambition narrated over real footage → <span className="text-green-600 font-medium">Selected</span></li>
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-4 mb-5">
                <span className="text-4xl font-light text-gray-200">02</span>
                <div>
                  <h3 className="text-xl font-light">Script Development & Visual Treatment</h3>
                  <p className="text-xs text-gray-400 mt-1">Week 2–4</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                I worked with the Content Studio through 6 script iterations. The key tension: poetic brand language vs. authentic business owner sentiment. Every draft had to sound like a real person, not a brand manager.
              </p>
              <div className="bg-white p-5 rounded-sm mb-5">
                <p className="text-sm font-medium mb-3">Script evolution (opening lines):</p>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Draft 1</p>
                    <p className="italic text-gray-600">"We've powered 20 million businesses. But we're just getting started."</p>
                    <p className="text-xs text-gray-400 mt-1">→ Too transactional, leads with us not them</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Final</p>
                    <p className="italic text-gray-800 font-medium">"You know that feeling when you've come so far, but you're still so hungry? That's day one. And for us, it's still day one."</p>
                    <p className="text-xs text-green-600 mt-1">✓ Specific emotion, inclusive language, no corporate jargon</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Direction to the production team: <em>"Show real work. No actors. No staged setups. If it looks like a stock photo, we're doing it wrong."</em>
              </p>
            </div>

            <div>
              <div className="flex items-baseline gap-4 mb-5">
                <span className="text-4xl font-light text-gray-200">03</span>
                <div>
                  <h3 className="text-xl font-light">Production & On-Set Direction</h3>
                  <p className="text-xs text-gray-400 mt-1">Week 4–6</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                We shot across 4 locations in Lagos over 5 days — Computer Village, Balogun Market, Yaba Tech Hub, and Ikorodu Road workshops. All authentic. No sets.
              </p>
              <div className="bg-white p-5 rounded-sm">
                <p className="text-sm font-medium mb-3">Key on-set decisions:</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li><strong>Casting pivot:</strong> Started with featured business owners on camera → Switched to authentic B-roll only (interviews felt too documentary)</li>
                  <li><strong>Lighting:</strong> Rejected all staged setups → Natural/available light throughout</li>
                  <li><strong>Camera:</strong> Added handheld sequences for intimacy beyond the initially planned locked-off shots</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-4 mb-5">
                <span className="text-4xl font-light text-gray-200">04</span>
                <div>
                  <h3 className="text-xl font-light">Post-Production</h3>
                  <p className="text-xs text-gray-400 mt-1">Week 6–8</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                8 cut revisions with the editor. V1–V3 found the rhythm. V4–V6 tightened (we cut 40 seconds and killed some of my favorite shots). V7 locked music. V8 was final delivery.
              </p>
              <div className="bg-white p-5 rounded-sm mb-5">
                <p className="text-sm font-medium mb-3">Critical choices:</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li><strong>Runtime:</strong> 1:47 final (started at 2:30 — cut for social platform optimization)</li>
                  <li><strong>Color:</strong> Desaturated with lifted blacks — hopeful realism, not gritty poverty</li>
                  <li><strong>Music:</strong> Switched from orchestral to minimal piano</li>
                  <li><strong>End card:</strong> Logo + "It's still day one" — rejected every CTA that was suggested</li>
                </ul>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The biggest creative fight: leadership wanted to add product screenshots. I pushed back — this film isn't about features, it's about feeling. No product shots made it in. They trusted the vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 md:px-16 lg:px-24 mb-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">The Results</p>
          <h2 className="text-3xl md:text-4xl font-light mb-12">Beyond views — this changed how we show up as a brand</h2>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-sm">
              <p className="text-3xl font-light mb-1">487K</p>
              <p className="text-sm text-gray-500 mb-3">Views in Week 1</p>
              <p className="text-xs text-green-600">Target: 100K ✓</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-sm">
              <p className="text-3xl font-light mb-1">12K</p>
              <p className="text-sm text-gray-500 mb-3">Organic shares</p>
              <p className="text-xs text-gray-400">Zero paid promotion</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-sm">
              <p className="text-3xl font-light mb-1">94%</p>
              <p className="text-sm text-gray-500 mb-3">Positive sentiment</p>
              <p className="text-xs text-gray-400">Comments analysis</p>
            </div>
          </div>

          <ul className="space-y-3 mb-12 text-sm text-gray-600">
            <li>📰 Featured in TechCabal, Techpoint, Business Day, Nairametrics</li>
            <li>🎬 "Make it feel like Still Day One" became internal creative shorthand for quality</li>
            <li>💬 1,200+ comments from business owners sharing their own day-one stories</li>
            <li>📈 Brand search lift: "Moniepoint" searches up 40% in launch week</li>
          </ul>

          <div className="space-y-8">
            <div className="border-l-4 border-black pl-6">
              <p className="text-gray-700 leading-relaxed italic mb-3">
                "Olympio didn't just deliver a film. He delivered a creative POV that now defines how we show up. Still Day One isn't just a tagline — it's become part of our culture."
              </p>
              <p className="text-sm text-gray-500">— Marketing Leadership, Moniepoint Inc.</p>
            </div>
            <div className="border-l-4 border-black pl-6">
              <p className="text-gray-700 leading-relaxed italic mb-3">
                "Most fintech fundraise announcements feel like investor flex. This one felt like you were talking to me. I actually care that you raised this money."
              </p>
              <p className="text-sm text-gray-500">— Small business owner, Twitter/X</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learnings */}
      <section className="px-6 md:px-16 lg:px-24 mb-24 bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-8">Key Learnings</p>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-medium mb-4 text-green-600 uppercase tracking-wider">What worked</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>✓ Leading with emotion over features created real differentiation</li>
                <li>✓ Single-slide concept pitch got faster buy-in than decks</li>
                <li>✓ Authentic footage beat polished/staged every time</li>
                <li>✓ Fighting for creative purity (no product shots) paid off</li>
                <li>✓ "Still day one" became a brand rallying cry far beyond the campaign</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-4 text-orange-500 uppercase tracking-wider">What I'd change</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>⚡ Start script earlier (6 iterations was tight in 2 weeks)</li>
                <li>⚡ Build weather buffer into shoot schedule (lost 1 day to rain)</li>
                <li>⚡ Create 15s and 30s cutdowns upfront, not as afterthoughts</li>
                <li>⚡ Document more BTS — missed content opportunity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next + CTA */}
      <section className="px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mb-16 pb-16 border-b border-gray-100">
            <div>
              <p className="text-xs text-gray-400 mb-2">Next case study</p>
              <Link href="/work/teamapt-independence" className="text-2xl font-light hover:opacity-60 transition-opacity">
                Independence Day — TeamApt →
              </Link>
            </div>
            <Link href="/" className="text-sm text-gray-500 hover:text-black transition-colors">
              ← All projects
            </Link>
          </div>
          <div className="text-center bg-gray-50 py-16 px-8 rounded-sm">
            <h3 className="text-2xl font-light mb-4">Need brand film or creative direction?</h3>
            <p className="text-gray-500 text-sm mb-8">Currently booking Q3 2026. Open to opportunities in Toronto, Vancouver, and Montreal.</p>
            <a href="/#contact" className="inline-block px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors">
              Start a conversation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
