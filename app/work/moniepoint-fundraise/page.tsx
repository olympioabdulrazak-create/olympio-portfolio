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
            Creative directing Moniepoint's brand film for Africa's largest Series C announcement — the film that turned a billion-dollar milestone into a story 20 million businesses recognized as their own.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">My Role</p>
              <p className="text-sm text-gray-700 leading-relaxed">Creative director and strategic lead — concept origination, creative brief, script development oversight, on-set visual direction, and post-production sign-off. The production team executed; I set the creative vision and held it.</p>
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
          <h2 className="text-3xl md:text-4xl font-light mb-8">Make the announcement that doesn't feel like an announcement</h2>

          <div className="space-y-5 mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Business problem</p>
              <p className="text-gray-600 leading-relaxed">
                October 2024: Moniepoint closed one of Africa's largest Series C rounds. The business problem wasn't communication — it was differentiation. Every fintech fundraise follows an identical playbook: press release, CEO LinkedIn post, investor logo wall, metrics slide. That playbook produces announcements that the industry acknowledges and the market ignores. Leadership wanted something the <em>market</em> would respond to, not just the trade press. The film needed to drive brand equity, not just news coverage.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Audience tension</p>
              <p className="text-gray-600 leading-relaxed">
                Moniepoint's core audience — Nigerian small and medium business owners — is sophisticated enough to know when a brand is talking at them versus with them. A fundraise announcement risks feeling like insider news: congratulations to the investors, irrelevant to the business owner. The creative challenge was making 20 million businesses feel like <em>they</em> were the reason for the announcement — because they were.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Creative challenge</p>
              <p className="text-gray-600 leading-relaxed">
                This was also Moniepoint's first major brand moment since rebranding from TeamApt 6 months prior. The film had to simultaneously answer: what does Moniepoint believe? What does it sound like when we're not selling? How do we use this milestone to define a brand voice, not just mark a moment?
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-sm mb-6">
            <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest">My role vs. team role</p>
            <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-600">
              <div>
                <p className="font-medium text-black mb-2">What I owned</p>
                <ul className="space-y-1">
                  <li>• Concept origination and strategic framing</li>
                  <li>• Creative brief writing and pitch</li>
                  <li>• Script development (6 iterations with Content Studio)</li>
                  <li>• Visual treatment and tone-of-voice direction</li>
                  <li>• On-set creative direction across all 5 shoot days</li>
                  <li>• Post-production creative sign-off (8 cut revisions)</li>
                  <li>• The fight to keep product shots out of the film</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-black mb-2">What the team executed</p>
                <ul className="space-y-1">
                  <li>• Production logistics (external team of 12)</li>
                  <li>• Cinematography and audio</li>
                  <li>• Editing and color grading</li>
                  <li>• Distribution and press coordination</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-sm mb-6">
            <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest">Success criteria</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Launch same day as press release announcement</li>
              <li>✓ 100K+ views in Week 1 (no paid media)</li>
              <li>✓ Positive sentiment from business owners, not just industry observers</li>
              <li>✓ Media pickup beyond standard tech press</li>
              <li>✓ Internal team alignment on brand voice going forward</li>
            </ul>
          </div>

          <p className="text-gray-600 leading-relaxed">
            <strong>The constraint:</strong> 8 weeks end-to-end. Leadership needed this live the same day as the press release. No room for extended creative development.
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
                I started with one question that reframed the brief entirely: <em>What does every Nigerian business owner feel after a major milestone — no matter how big?</em>
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                The answer wasn't "celebration." It was: <strong>"it's still day one."</strong> No matter how far you've come, you're still building. That's the feeling that drives every entrepreneur. And it was exactly what Moniepoint felt about this fundraise — we're not arriving, we're accelerating. That parallel made the concept both truthful and universal.
              </p>

              <div className="bg-black text-white p-5 rounded-sm mb-5">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Key creative decision</p>
                <p className="text-sm leading-relaxed">Lead with the audience's feeling, not the brand's news. The moment we made "Still Day One" about business owners and their hunger — not Moniepoint's fundraise — the film had permission to be emotional. That permission is what makes a brand film different from a PR asset.</p>
              </div>

              <div className="bg-white p-5 rounded-sm">
                <p className="text-sm font-medium mb-3">Three directions pitched — and why I killed two:</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li><strong>"The Numbers Story"</strong> — Data-driven, infographic style<br /><span className="text-gray-400 text-xs">Killed: answers "how big?" when the audience needs "why should I care?" Wrong question, wrong film.</span></li>
                  <li><strong>"Founder Testimonials"</strong> — 5–6 business owners on camera<br /><span className="text-gray-400 text-xs">Killed: testimonials prove claims; brand films create belief. These are different goals with different emotional registers.</span></li>
                  <li><strong>"Still Day One"</strong> — Philosophical POV on ambition, narrated over real footage → <span className="text-green-600 font-medium">Selected</span><br /><span className="text-gray-400 text-xs">Why: it can be simultaneously Moniepoint's story and every business owner's story. That overlap is where brand films become culture.</span></li>
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
                I worked with the Content Studio through 6 script iterations. The core tension I held throughout: poetic brand language vs. authentic business owner sentiment. Every draft had to sound like a real person, not a brand manager.
              </p>
              <div className="bg-white p-5 rounded-sm mb-5">
                <p className="text-sm font-medium mb-3">Script evolution — opening lines:</p>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Draft 1</p>
                    <p className="italic text-gray-600">"We've powered 20 million businesses. But we're just getting started."</p>
                    <p className="text-xs text-gray-400 mt-1">→ Too transactional. Leads with our achievement, not their feeling. Puts Moniepoint at the center when the audience should be.</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Final</p>
                    <p className="italic text-gray-800 font-medium">"You know that feeling when you've come so far, but you're still so hungry? That's day one. And for us, it's still day one."</p>
                    <p className="text-xs text-green-600 mt-1">✓ Starts with "you." Specific emotion. Inclusive language. Zero corporate jargon. The audience hears themselves before they hear us.</p>
                  </div>
                </div>
              </div>

              <div className="bg-black text-white p-5 rounded-sm">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Key creative decision</p>
                <p className="text-sm leading-relaxed">Set one rule for the production team that governed every visual choice: <em>"Show real work. No actors. No staged setups. If it looks like a stock photo, we're doing it wrong."</em> That single directive kept 12 people honest across 5 shoot days.</p>
              </div>
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
                We shot across 4 locations in Lagos over 5 days — Computer Village, Balogun Market, Yaba Tech Hub, and Ikorodu Road workshops. All authentic environments. No sets built, no locations dressed.
              </p>
              <div className="bg-white p-5 rounded-sm mb-5">
                <p className="text-sm font-medium mb-3">Key on-set decisions — what I killed and why:</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li><strong>Killed: featured business owners speaking to camera.</strong> Started shoot day 1 with this approach → switched to authentic B-roll only by noon. Interviews gave us information; the footage gave us truth. The difference was immediately visible in the monitor.</li>
                  <li><strong>Killed: all staged lighting setups.</strong> Natural and available light only throughout. Staged light would have made real Lagos look like a set of Lagos.</li>
                  <li><strong>Added: handheld sequences.</strong> Not in the original shot list — added on-set for intimacy. The physicality of the camera mirrors the physicality of the work being filmed.</li>
                </ul>
              </div>

              <div className="bg-black text-white p-5 rounded-sm">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Key creative decision</p>
                <p className="text-sm leading-relaxed">On day 3, the director wanted to stage a market scene for better visual control. I said no. The real market — chaos, noise, actual business happening — was the point. Staging it would have made it look like we'd never been there.</p>
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
                8 cut revisions with the editor. V1–V3 found the rhythm. V4–V6 tightened — we cut 40 seconds and I killed some of my favorite shots because the film's pacing needed them gone. V7 locked music. V8 was final delivery.
              </p>
              <div className="bg-white p-5 rounded-sm mb-5">
                <p className="text-sm font-medium mb-3">What I killed in post — and why each decision was right:</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li><strong>Cut 43 seconds of footage I loved.</strong> Beautiful market sequence — wrong emotional register for the act of the film where it appeared. Loving a shot and keeping a shot are different decisions.</li>
                  <li><strong>Cut the orchestral score.</strong> Original music felt aspirational but generic. Minimal piano was more honest — less "brand film," more "truth told simply."</li>
                  <li><strong>Cut every suggested CTA.</strong> Leadership wanted a product CTA before the end card. I argued this film was brand equity, not performance marketing. If you need a CTA, you don't trust the film. The end card is logo + "It's still day one." Nothing else.</li>
                  <li><strong>Cut all product screenshots.</strong> Leadership pushed for this. I pushed back. This film is not about features — it's about feeling. Mixing the two would have served neither. They trusted the vision. The results proved why.</li>
                </ul>
              </div>

              <div className="bg-black text-white p-5 rounded-sm">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Key creative decision</p>
                <p className="text-sm leading-relaxed">Runtime: 1:47 final, down from 2:30 original. Every second cut was a creative fight worth having. The final film works because of what's not there — the edits that kept the emotion concentrated rather than spread thin.</p>
              </div>
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
              <p className="text-sm text-gray-500 mb-2">Views in Week 1</p>
              <p className="text-xs text-green-600 mb-1">Target: 100K ✓</p>
              <p className="text-xs text-gray-400">387% above target; zero paid media</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-sm">
              <p className="text-3xl font-light mb-1">12K</p>
              <p className="text-sm text-gray-500 mb-2">Organic shares</p>
              <p className="text-xs text-gray-400 mb-1">Zero paid promotion</p>
              <p className="text-xs text-gray-400">Audience shared it because it reflected them</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-sm">
              <p className="text-3xl font-light mb-1">94%</p>
              <p className="text-sm text-gray-500 mb-2">Positive sentiment</p>
              <p className="text-xs text-gray-400 mb-1">Comments analysis</p>
              <p className="text-xs text-gray-400">1,200+ comments from business owners</p>
            </div>
          </div>

          <ul className="space-y-3 mb-12 text-sm text-gray-600">
            <li>📰 Featured in TechCabal, Techpoint, Business Day, and Nairametrics — media pickup driven by the film, not the press release</li>
            <li>🎬 "Make it feel like Still Day One" became the internal creative benchmark — a shorthand for quality that outlasted the campaign</li>
            <li>💬 1,200+ comments from business owners sharing their own day-one stories — unprompted, organic, deeply personal</li>
            <li>📈 Brand search lift: "Moniepoint" searches up 40% in launch week, measurable brand equity gain from a single piece of content</li>
          </ul>

          <div className="bg-gray-50 p-6 rounded-sm mb-10">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Business impact beyond the brief</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              "Still Day One" did something a fundraise announcement rarely does: it created a brand asset that kept generating value months after launch. The phrase became internal shorthand for creative ambition. The film was referenced in investor conversations. The tone it established shaped how Moniepoint's content team briefed every project that followed through 2025.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Fintech storytelling that cuts through noise is a craft. Toronto is Canada's fintech capital — this kind of brand film is exactly what companies like Wealthsimple, Koho, or Manulife need when they're explaining why they exist, not just what they sell. That ability to locate the human truth inside a financial milestone translates directly.
            </p>
          </div>

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

      {/* Skills */}
      <section className="px-6 md:px-16 lg:px-24 mb-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">Skills & Tools</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-3">Creative</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Creative brief writing</li>
                <li>Script development</li>
                <li>Visual treatment</li>
                <li>Brand voice development</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-3">Production</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>On-set creative direction</li>
                <li>Location casting</li>
                <li>Post-production oversight</li>
                <li>Music supervision</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-3">Leadership</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Stakeholder management</li>
                <li>Cross-functional direction</li>
                <li>Creative advocacy</li>
                <li>Campaign strategy</li>
              </ul>
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
                <li>✓ Single-slide concept pitch got faster buy-in than full decks</li>
                <li>✓ Authentic footage beat polished and staged every time</li>
                <li>✓ Fighting for creative purity — no product shots — paid off measurably</li>
                <li>✓ "Still day one" became a brand rallying cry far beyond the campaign</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-4 text-orange-500 uppercase tracking-wider">What I'd change</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>⚡ Start script earlier — 6 iterations in 2 weeks was achievable but uncomfortable</li>
                <li>⚡ Build weather buffer into shoot schedule — lost 1 day to rain, recovered by extending day 5</li>
                <li>⚡ Create 15s and 30s cutdowns upfront, not as afterthoughts following launch</li>
                <li>⚡ Document more BTS — the shoot process itself was a missed content opportunity</li>
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
