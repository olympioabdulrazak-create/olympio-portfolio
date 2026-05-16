'use client';
import Link from 'next/link';

export default function TeamAptIndependence() {
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
            <span className="px-3 py-1 bg-gray-100 text-black text-xs font-medium">Featured on Ads of the World</span>
            <span className="text-xs text-gray-400">Print Campaign · 2022</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-tight">
            Independence Day — TeamApt
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-12 max-w-3xl">
            Art directing the "Work From Home Independence" campaign — turning Nigerian Independence Day into a cultural moment for the remote work generation.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Role</p>
              <p className="text-sm text-gray-700 leading-relaxed">Senior Brand Designer<br />Art Director<br />Conceptual Lead</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Timeline</p>
              <p className="text-sm text-gray-700">4 weeks<br />Sep 2022</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Context</p>
              <p className="text-sm text-gray-700">Internal team (TeamApt)<br />Pre-Moniepoint rebrand</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero images */}
      <section className="px-6 md:px-16 lg:px-24 mb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="/images/Ads-48.png" alt="Independence Day Campaign — Asset 1" className="w-full rounded-sm aspect-[4/3] object-cover bg-gray-50" />
            <img src="/images/Ads-49.png" alt="Independence Day Campaign — Asset 2" className="w-full rounded-sm aspect-[4/3] object-cover bg-gray-50" />
            <img src="/images/Ads-50.png" alt="Independence Day Campaign — Asset 3" className="w-full rounded-sm aspect-[4/3] object-cover bg-gray-50" />
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="px-6 md:px-16 lg:px-24 mb-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">The Challenge</p>
          <h2 className="text-3xl md:text-4xl font-light mb-8">Make Independence Day relevant to the remote work generation</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            October 1st — Nigerian Independence Day. Every brand runs the same playbook: green-white-green flags, generic patriotic messaging, "Happy Independence Day Nigeria!" posts. Forgettable. Zero cultural friction.
          </p>
          <div className="bg-gray-50 p-6 rounded-sm mb-6">
            <p className="text-sm font-medium mb-3">The cultural insight</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              2022 was the year remote work went mainstream in Nigeria. COVID forced the shift, but by Independence Day 2022 it had become permanent for millions of young professionals. Nigerian Independence Day celebrates freedom from colonial rule. Remote work represents a different kind of freedom — from commutes, dress codes, rigid schedules. Both are about reclaiming autonomy. That parallel became our creative territory.
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            The brief: create a campaign that felt culturally resonant (not generic), celebrated remote workers (our core audience), and connected TeamApt's product (digital payments enabling remote business) without being salesy.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>The constraint:</strong> 4-week timeline, limited budget, internal team only — no external agency support.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 md:px-16 lg:px-24 mb-24 bg-gray-50 py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">The Process</p>
          <h2 className="text-3xl md:text-4xl font-light mb-16">From insight to execution in 4 weeks</h2>

          <div className="space-y-20">
            <div>
              <div className="flex items-baseline gap-4 mb-5">
                <span className="text-4xl font-light text-gray-200">01</span>
                <div>
                  <h3 className="text-xl font-light">Concept Development</h3>
                  <p className="text-xs text-gray-400 mt-1">Week 1</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                The campaign idea arrived from one observation: <em>Independence isn't just political — it's personal.</em>
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                The "Work From Home Independence" concept: a series of split-screen visuals showing "traditional office expectation" vs. "WFH reality." Each image celebrates a specific freedom that remote work gave back — morning time, commute time, dress code.
              </p>
              <div className="bg-white p-5 rounded-sm">
                <p className="text-sm font-medium mb-3">The three hero assets:</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li><strong>"The Morning Meeting"</strong> — Empty conference room vs. person on video call from bed, coffee in hand. Copy: <em>"Independence is taking your 9 AM from bed."</em></li>
                  <li><strong>"The Commute"</strong> — Lagos traffic jam vs. person working from balcony overlooking the city. Copy: <em>"Independence is reclaiming 3 hours from traffic."</em></li>
                  <li><strong>"The Dress Code"</strong> — Corporate suit hanging on door vs. casual WFH setup. Copy: <em>"Independence is dressing for productivity, not performance."</em></li>
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-4 mb-5">
                <span className="text-4xl font-light text-gray-200">02</span>
                <div>
                  <h3 className="text-xl font-light">Photography & Art Direction</h3>
                  <p className="text-xs text-gray-400 mt-1">Week 2</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                I cast 6 real TeamApt remote workers — not models. Their actual setups. Their actual hours. I was on-set for every shoot, directing compositions and protecting the authenticity.
              </p>
              <div className="bg-white p-5 rounded-sm mb-5">
                <p className="text-sm font-medium mb-3">Art direction rules for the photographer:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Natural light only — no studio setups</li>
                  <li>✓ Wide shots showing the full environment context</li>
                  <li>✓ Capture candid moments — working, not posing</li>
                  <li>✓ Include personal touches: plants, art, coffee mugs, mess</li>
                  <li>✓ Mix wide + close-up for layout flexibility in post</li>
                </ul>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The rule I kept repeating: <em>"If it looks like it could be a stock photo, we reshoot."</em>
              </p>
            </div>

            <div>
              <div className="flex items-baseline gap-4 mb-5">
                <span className="text-4xl font-light text-gray-200">03</span>
                <div>
                  <h3 className="text-xl font-light">Design & Launch</h3>
                  <p className="text-xs text-gray-400 mt-1">Week 3–4</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                I designed the split-screen layouts with Nigeria's green-white-green color palette integrated subtly — as borders and accents, not heavy-handed flags. Clean, minimal type. The brand mark present but not dominating.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                The product connection was implicit: TeamApt enables digital payments, which enables remote business. You can't show up to collect cash anymore — digital tools made remote work possible. The brand earns attention through the story, not through logo size.
              </p>
              <div className="bg-white p-5 rounded-sm">
                <p className="text-sm font-medium mb-3">Distribution (all organic — zero paid media):</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Instagram carousel (3 images)</li>
                  <li>• Twitter/X thread with individual images</li>
                  <li>• LinkedIn company page + employee advocacy push</li>
                  <li>• Internal Slack for employee sharing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 md:px-16 lg:px-24 mb-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">The Results</p>
          <h2 className="text-3xl md:text-4xl font-light mb-12">Featured internationally. Shared organically. No budget spent.</h2>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-sm">
              <p className="text-3xl font-light mb-1">127K</p>
              <p className="text-sm text-gray-500 mb-3">Organic impressions</p>
              <p className="text-xs text-green-600">Target: 50K ✓</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-sm">
              <p className="text-3xl font-light mb-1">3.2K</p>
              <p className="text-sm text-gray-500 mb-3">Shares and retweets</p>
              <p className="text-xs text-gray-400">Zero paid promotion</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-sm">
              <p className="text-3xl font-light mb-1">89%</p>
              <p className="text-sm text-gray-500 mb-3">Positive sentiment</p>
              <p className="text-xs text-gray-400">Comments analysis</p>
            </div>
          </div>

          <ul className="space-y-3 mb-12 text-sm text-gray-600">
            <li>📰 Featured on Ads of the World — one of the few Nigerian campaigns selected that month</li>
            <li>💬 800+ comments and replies, mostly people sharing their own WFH stories</li>
            <li>📸 40+ users recreated the split-screen format with their own setups (organic UGC)</li>
            <li>🏆 Set the creative benchmark for subsequent TeamApt and Moniepoint campaigns</li>
          </ul>

          <div className="space-y-8">
            <div className="border-l-4 border-black pl-6">
              <p className="text-gray-700 leading-relaxed italic mb-3">
                "Finally, an Independence Day campaign that doesn't feel like it was made by a brand. This feels like it was made by someone who actually works from home."
              </p>
              <p className="text-sm text-gray-500">— User comment, Twitter/X</p>
            </div>
            <div className="border-l-4 border-black pl-6">
              <p className="text-gray-700 leading-relaxed italic mb-3">
                "This campaign put TeamApt on the map creatively. Before this, we were known as a fintech product. After this, we were known as a brand with a point of view."
              </p>
              <p className="text-sm text-gray-500">— Marketing Lead, TeamApt (2022)</p>
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
                <li>✓ Cultural insight (WFH = independence) drove everything</li>
                <li>✓ Real people beat stock photos — authenticity always wins</li>
                <li>✓ Split-screen format was instantly shareable and replicable</li>
                <li>✓ Light product touch = higher engagement (less salesy = more trusted)</li>
                <li>✓ Timing the launch to Oct 1 maximized organic discovery</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-4 text-orange-500 uppercase tracking-wider">What I'd change</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>⚡ Create video versions upfront (static images capped reach)</li>
                <li>⚡ Build UGC toolkit — many people wanted to participate</li>
                <li>⚡ Seed with 3–4 influencers on launch day</li>
                <li>⚡ Document shoot BTS — missed a huge content opportunity</li>
                <li>⚡ Extend campaign beyond one day — momentum warranted a week</li>
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
              <p className="text-xs text-gray-400 mb-2">View more</p>
              <Link href="/" className="text-2xl font-light hover:opacity-60 transition-opacity">
                Back to all projects →
              </Link>
            </div>
            <Link href="/work/african-tech-summit" className="text-sm text-gray-500 hover:text-black transition-colors">
              ← African Tech Summit
            </Link>
          </div>
          <div className="text-center bg-gray-50 py-16 px-8 rounded-sm">
            <h3 className="text-2xl font-light mb-4">Need campaign concepting or art direction?</h3>
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
