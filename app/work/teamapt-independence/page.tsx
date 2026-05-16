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
            Concepting and art directing the "Work From Home Independence" campaign — turning Nigerian Independence Day into a cultural moment for the remote work generation, with zero budget and organic international reach.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">My Role</p>
              <p className="text-sm text-gray-700 leading-relaxed">Sole conceptual lead and art director — cultural insight, campaign concept, creative direction across photo shoot, design execution, and launch strategy. Internal team only, no agency support.</p>
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
          <h2 className="text-3xl md:text-4xl font-light mb-8">Find the cultural intersection between national independence and the freedom a generation just discovered it had earned</h2>

          <div className="space-y-5 mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Business problem</p>
              <p className="text-gray-600 leading-relaxed">
                October 1st — Nigerian Independence Day. Every brand runs the same playbook: green-white-green color palette, generic patriotic messaging, "Happy Independence Day Nigeria!" posts with the flag. The result is a sea of indistinguishable content that earns goodwill with no one. For TeamApt — a B2B fintech brand with a product rooted in enabling digital business — this moment was an opportunity to say something real, or say nothing interesting. The business needed organic reach among the exact demographic that uses its products: young, mobile-first Nigerian professionals working outside traditional structures.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Audience tension</p>
              <p className="text-gray-600 leading-relaxed">
                2022 was the year remote work shifted from survival mode to identity. COVID forced the transition; by Independence Day 2022 it had become permanent for millions of young Nigerian professionals — and they were proud of it. But brands weren't reflecting that back to them. Every Independence Day campaign spoke to a Nigeria of flags and civic pride. No one was speaking to the Nigeria of balconies, video calls, and reclaimed mornings. That gap was the creative opportunity.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Creative challenge</p>
              <p className="text-gray-600 leading-relaxed">
                Create a campaign that felt culturally resonant rather than generic, celebrated remote workers (TeamApt's core user base), connected the product's value proposition without being salesy, and — critically — did all of this with no external agency, no paid media budget, and a 4-week timeline built around an immovable calendar date.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-sm mb-6">
            <p className="text-sm font-medium mb-3">The cultural insight that unlocked everything</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Nigerian Independence Day celebrates freedom from colonial rule — reclaiming autonomy over your own future. Remote work represents a parallel kind of freedom: from commutes, dress codes, rigid schedules, managers who equate presence with performance. Both are about reclaiming time and agency. That parallel wasn't a stretch — it was the most honest thing we could say. <em>Independence isn't just political. It's personal.</em>
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed">
            <strong>The constraint:</strong> 4-week timeline, limited budget, internal team only — no external agency support, no paid promotion. Whatever reach this earned, it had to earn through relevance.
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
                The campaign idea arrived from one observation: <em>Independence isn't just political — it's personal.</em> The moment that framing landed, everything else followed logically.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                "Work From Home Independence": a series of split-screen visuals showing "traditional office expectation" vs. "WFH reality." Each image celebrates a specific freedom that remote work gave back — morning time, commute time, dress code. The split-screen format was deliberate: it made the contrast undeniable without requiring a single word of explanation.
              </p>

              <div className="bg-black text-white p-5 rounded-sm mb-5">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Key creative decision</p>
                <p className="text-sm leading-relaxed">Make the format inherently shareable by design — not as an afterthought. The split-screen gave audiences an obvious template to recreate with their own setups. Virality was baked into the structure, not bolted on as a hashtag strategy.</p>
              </div>

              <div className="bg-white p-5 rounded-sm">
                <p className="text-sm font-medium mb-3">The three hero assets:</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li><strong>"The Morning Meeting"</strong> — Empty conference room vs. person on video call from bed, coffee in hand.<br /><em className="text-gray-500">"Independence is taking your 9 AM from bed."</em></li>
                  <li><strong>"The Commute"</strong> — Lagos traffic jam vs. person working from balcony overlooking the city.<br /><em className="text-gray-500">"Independence is reclaiming 3 hours from traffic."</em></li>
                  <li><strong>"The Dress Code"</strong> — Corporate suit hanging on a door vs. casual WFH setup.<br /><em className="text-gray-500">"Independence is dressing for productivity, not performance."</em></li>
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
                I cast 6 real TeamApt remote workers — not models, not actors. Their actual setups. Their actual hours. Their actual coffee mugs. I was on-set for every shoot, directing compositions and protecting the one thing that would make or break the campaign: authenticity.
              </p>
              <div className="bg-white p-5 rounded-sm mb-5">
                <p className="text-sm font-medium mb-3">Art direction rules I set for the photographer — and held to:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Natural light only — no studio setups, no ring lights, no diffusion</li>
                  <li>✓ Wide shots showing the full environment and its context</li>
                  <li>✓ Capture candid working moments — never posing, always doing</li>
                  <li>✓ Include personal touches: plants, art, coffee mugs, mess, real life</li>
                  <li>✓ Mix wide and close-up in every setup for layout flexibility in post</li>
                </ul>
              </div>

              <div className="bg-black text-white p-5 rounded-sm mb-5">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Key creative decision</p>
                <p className="text-sm leading-relaxed">One rule for the entire shoot: <em>"If it looks like it could be a stock photo, we reshoot."</em> Stock photo aesthetics would have killed the campaign's credibility instantly. The audience knows what authentic WFH looks like — they live it. You can't fake your way through that.</p>
              </div>

              <div className="bg-white p-5 rounded-sm">
                <p className="text-sm font-medium mb-3">What I killed on shoot day:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Killed 3 planned setups that felt too "managed" — clean desks, curated backgrounds, subjects too aware of the camera</li>
                  <li>• Killed posed "happy at laptop" shots in favor of subjects mid-task, mid-thought, mid-coffee</li>
                  <li>• Killed the "office" side of the split-screen being recreated in a studio — found a real Lagos office instead</li>
                </ul>
              </div>
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
                I designed the split-screen layouts using Figma and Adobe Photoshop, with Lightroom for photo treatment. Nigeria's green-white-green palette was integrated subtly — as borders and accents, never heavy-handed flag imagery. Clean, minimal type. The brand mark present but not dominating. The work earns the logo placement; the logo doesn't demand attention.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                The product connection was kept implicit and honest: TeamApt enables digital payments, which enables remote business. You can't collect cash anymore if your customers are remote — digital tools made the WFH economy possible. We didn't say it. We showed it by being there.
              </p>

              <div className="bg-black text-white p-5 rounded-sm mb-5">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Key creative decision</p>
                <p className="text-sm leading-relaxed">Keep the product connection implicit, not explicit. The brand earns attention through the story it tells — not through the logo's size or a product shot in the final frame. Every time we were tempted to explain what TeamApt does, we cut it. Explanation is the enemy of emotion.</p>
              </div>

              <div className="bg-white p-5 rounded-sm">
                <p className="text-sm font-medium mb-3">Distribution — all organic, zero paid media:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Instagram carousel (3 images, sequenced for scroll pacing)</li>
                  <li>• Twitter/X thread with individual images released over the morning</li>
                  <li>• LinkedIn company page + coordinated employee advocacy push</li>
                  <li>• Internal Slack for employee sharing — the team became the first distribution channel</li>
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
              <p className="text-sm text-gray-500 mb-2">Organic impressions</p>
              <p className="text-xs text-green-600 mb-1">Target: 50K ✓</p>
              <p className="text-xs text-gray-400">154% above target; zero paid media</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-sm">
              <p className="text-3xl font-light mb-1">3.2K</p>
              <p className="text-sm text-gray-500 mb-2">Shares and retweets</p>
              <p className="text-xs text-gray-400 mb-1">Zero paid promotion</p>
              <p className="text-xs text-gray-400">40+ users recreated the format themselves</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-sm">
              <p className="text-3xl font-light mb-1">89%</p>
              <p className="text-sm text-gray-500 mb-2">Positive sentiment</p>
              <p className="text-xs text-gray-400 mb-1">Comments analysis</p>
              <p className="text-xs text-gray-400">800+ comments; majority personal WFH stories</p>
            </div>
          </div>

          <ul className="space-y-3 mb-12 text-sm text-gray-600">
            <li>📰 Featured on Ads of the World — one of the few Nigerian campaigns selected that month, placing the work in an international creative reference library</li>
            <li>💬 800+ comments and replies, mostly people sharing their own WFH stories — the campaign became a conversation, not a broadcast</li>
            <li>📸 40+ users recreated the split-screen format with their own setups — organic UGC generated by the design structure itself</li>
            <li>🏆 Set the creative benchmark for subsequent TeamApt and Moniepoint campaigns — "make it feel this real" became the internal brief standard</li>
          </ul>

          <div className="bg-gray-50 p-6 rounded-sm mb-10">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Business impact beyond the brief</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Beyond the metrics: this campaign shifted how TeamApt was perceived. Before it, the brand was known as a fintech product. After it, the brand had a point of view. That shift — from product company to brand with a perspective — is what made the subsequent Moniepoint rebrand credible rather than cosmetic.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Culture-first campaign thinking is increasingly what separates memorable Canadian brand work from forgettable executions. Canadian brands — especially those reaching multicultural or globally-connected audiences — need designers who understand how to connect global cultural shifts to local moments without being generic. That's exactly what this campaign demonstrates.
            </p>
          </div>

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

      {/* Skills */}
      <section className="px-6 md:px-16 lg:px-24 mb-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">Skills & Tools</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-3">Design</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Adobe Photoshop</li>
                <li>Adobe Lightroom</li>
                <li>Figma</li>
                <li>Adobe Illustrator</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-3">Creative Direction</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Campaign concepting</li>
                <li>Photography direction</li>
                <li>Art direction on-set</li>
                <li>Copy direction</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-3">Strategy</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Cultural insight research</li>
                <li>Organic distribution strategy</li>
                <li>Brand voice development</li>
                <li>UGC-first design thinking</li>
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
                <li>✓ Cultural insight (WFH = independence) drove every downstream decision</li>
                <li>✓ Real people beat stock photos — authenticity is not a style choice, it's a strategic one</li>
                <li>✓ Shareable-by-design format drove organic UGC without a hashtag campaign</li>
                <li>✓ Light product touch created higher trust and higher engagement — less selling, more believing</li>
                <li>✓ Timing the launch to the exact date maximized organic discovery in a crowded feed</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-4 text-orange-500 uppercase tracking-wider">What I'd change</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>⚡ Create video versions upfront — static images capped reach on platforms rewarding motion</li>
                <li>⚡ Build a UGC toolkit — 40+ people recreated the format without any guidance; imagine with one</li>
                <li>⚡ Seed with 3–4 influencers on launch day to extend the opening window</li>
                <li>⚡ Document the shoot process — the behind-the-scenes was a missed content multiplier</li>
                <li>⚡ Extend the campaign beyond one day — the momentum warranted at least a week</li>
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
            <Link href="/work/moniepoint-fundraise" className="text-sm text-gray-500 hover:text-black transition-colors">
              ← Still Day One — Fundraise
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
