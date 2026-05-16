'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const words = ['HUMANS', 'BRANDS', 'DREAMS', 'BUSINESSES'];
  const [wordIndex, setWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', projectType: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorHover, setCursorHover] = useState(false);
  
  // AI Features State
  const [playingSection, setPlayingSection] = useState<string | null>(null);
  const [viewingData, setViewingData] = useState<{[key: string]: number}>({});
  const [showMatcher, setShowMatcher] = useState(false);
  const [matcherMessage, setMatcherMessage] = useState('');
  const [showBriefWidget, setShowBriefWidget] = useState(false);
  const [briefInput, setBriefInput] = useState('');
  const [briefOutput, setBriefOutput] = useState('');
  const [briefLoading, setBriefLoading] = useState(false);

  // Audio element ref
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Voice narration content - YOUR REWRITTEN VERSIONS
  const voiceScripts = {
    hero: "Welcome. You're looking at Olympio's world. He builds brands that actually move people, not the kind that win awards and gather dust. The kind that make you stop scrolling. Currently doing this at Moniepoint, but we'll get to that. Scroll down and let's talk about the work.",
    
    booth: "Okay, this booth. African Tech Summit, 2025. Over 200 companies all trying to get noticed. Loud screens everywhere. Free merch flying around. The usual. So Olympio's team decided to obsess over the details instead. They built the whole thing in 3D first, every wall, every light, every tiny angle, before anybody touched wood or paint. And yeah, it won Best Booth. Which was nice. But honestly, that wasn't even the interesting part. The interesting part was watching people actually want to walk in. People stayed. Asked questions. Took photos. Came back with friends. Because the goal was never 'make something pretty.' It was: make something people feel pulled towards. Big difference.",
    
    fundraise: "This film was called Still Day One. At the time, Moniepoint had just raised serious funding, so naturally everyone expected the big glossy fintech announcement film. You know the type. Dramatic music. Slow-motion shots. Somebody saying 'the future of finance' every twenty seconds. Olympio and the team just weren't interested in making that. Instead, they pushed the work until it felt human. Real people. Real stories. Real moments. Less corporate performance. More honesty. And funny enough, that's what made it spread. Not because it looked expensive. Because it felt true. Turns out people can tell when a brand sounds like an actual person.",
    
    client: "This was the advertising agency era. The chapter where creativity and strategy stopped feeling like separate things. Leo Burnett. 141 Worldwide. TBWA. Big agencies. Big clients. Big deadlines. Barely any sleep. There were brands like Heineken, Burger King, Huawei, all the names you'd expect to see on a portfolio somewhere. But honestly, the biggest lesson from those years had nothing to do with design software or ad theory. It was realizing that clients rarely remember the clever pitch. They remember whether you made them feel like their brand actually mattered. That part stayed with him."
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setWordIndex((current) => (current + 1) % words.length);
        setIsVisible(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const target = 20;
          const duration = 2000;
          const increment = target / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxImage(null);
        setShowBriefWidget(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // ElevenLabs voice generation - MANUAL TRIGGER ONLY
  const playVoiceForSection = async (sectionKey: string) => {
    if (playingSection === sectionKey) {
      // Stop if already playing this section
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setPlayingSection(null);
      return;
    }

    const text = voiceScripts[sectionKey as keyof typeof voiceScripts];
    if (!text) return;

    setPlayingSection(sectionKey);

    try {
      const response = await fetch('/api/voice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          sectionKey,
        })
      });

      if (response.ok) {
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        
        if (audioRef.current) {
          audioRef.current.src = audioUrl;
          audioRef.current.play();
          
          audioRef.current.onended = () => {
            setPlayingSection(null);
            URL.revokeObjectURL(audioUrl);
          };
        }
      }
    } catch (error) {
      console.error('Voice generation error:', error);
      setPlayingSection(null);
    }
  };

  // AI Project Matcher
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target.id;
            const startTime = Date.now();
            
            return () => {
              const timeSpent = Date.now() - startTime;
              setViewingData(prev => ({
                ...prev,
                [section]: (prev[section] || 0) + timeSpent
              }));
            };
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const workTime = viewingData['work'] || 0;
      const brandsTime = viewingData['brands'] || 0;
      
      if (workTime > 10000 && !showMatcher) {
        setMatcherMessage("I notice you're interested in the 3D visualization and experiential work. Planning a conference presence or brand activation?");
        setShowMatcher(true);
      } else if (brandsTime > 8000 && !showMatcher) {
        setMatcherMessage("Interested in working with an award-winning creative who's designed for major brands? Let's discuss your project.");
        setShowMatcher(true);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [viewingData, showMatcher]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '16e5ceec-a21c-46d7-9cb0-ae1580d8cad3',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          project_type: formData.projectType,
        }),
      });
      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '', projectType: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const generateBrief = async () => {
    if (!briefInput.trim()) return;
    setBriefLoading(true);
    setBriefOutput('');

    try {
      const response = await fetch('/api/brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: briefInput }),
      });

      const data = await response.json();
      const text = data.text || 'Unable to generate brief';
      setBriefOutput(text);
    } catch (err) {
      setBriefOutput('Unable to generate brief. Please try again.');
    } finally {
      setBriefLoading(false);
    }
  };

  const brandLogos = [
    'heineken.png', 'burgerking.png', 'desperados.png', '9mobile.png', 'DSTV.png',
    'Chivita.png', "Lord'sGin.png", 'Huawei.png', 'custodian.png', 'Bacchus.png',
    'DangoteSugar.png', 'Swift4G.png', 'BournVita.png', 'Leadway.png', 'Nasco.png',
    'Oppo.png', 'Terra.png', 'Stanbic.png', 'NigerianBrewies.png', 'ALx.png',
  ];

  const campaignImages = [
    'Ads-22.png', 'Ads-24.png', 'Ads-26.png', 'Ads-27.png', 'Ads-28.png', 'Ads-30.png',
    'Ads-31.png', 'Ads-32.png', 'Ads-33.png', 'Ads-34.png', 'Ads-35.png', 'Ads-36.png',
    'Ads-38.png', 'Ads-12.png', 'Ads-13.png', 'Ads-14.png', 'Ads-15.png', 'Ads-17.png',
    'Ads-03.png', 'Ads-04.png', 'Ads-05.png', 'Ads-06.png', 'Ads-07.png', 'Ads-08.png',
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hidden audio element */}
      <audio ref={audioRef} className="hidden" />

      {/* Custom Cursor */}
      <div 
        className={`hidden md:block fixed w-4 h-4 rounded-full border-2 border-black pointer-events-none z-[200] transition-transform duration-150 ${cursorHover ? 'scale-150' : 'scale-100'}`}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px`, transform: 'translate(-50%, -50%)' }}
      />

      {/* Navigation - FIXED ORDER */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="flex justify-between items-center px-8 md:px-16 lg:px-24 py-6">
          <a href="/" className="text-sm font-medium tracking-tight hover:opacity-60 transition-opacity">
            Olympio Abdul Razak
          </a>
          
          <div className="flex gap-8 items-center">
            <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="text-sm text-gray-500 hover:text-black transition-colors">About</a>
            <a href="#brands" onClick={(e) => scrollToSection(e, '#brands')} className="text-sm text-gray-500 hover:text-black transition-colors">Brands</a>
            <a href="#work" onClick={(e) => scrollToSection(e, '#work')} className="text-sm text-gray-500 hover:text-black transition-colors">Work</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="text-sm text-gray-500 hover:text-black transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="min-h-screen flex items-center px-8 md:px-16 lg:px-24 pt-24">
        <div className="max-w-6xl">
          {/* Play button for hero narration */}
          <button
            onClick={() => playVoiceForSection('hero')}
            className={`mb-8 flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-all ${
              playingSection === 'hero'
                ? 'bg-black text-white border-black'
                : 'bg-white text-gray-500 border-gray-300 hover:border-black hover:text-black'
            }`}
          >
            <span>{playingSection === 'hero' ? '⏸' : '▶'}</span>
            <span className="text-xs font-medium">{playingSection === 'hero' ? 'Playing...' : 'Play intro'}</span>
          </button>

          <p className="text-xs uppercase tracking-widest text-gray-400 mb-6 font-medium">
            Leo Burnett · TBWA\CONCEPT · 141 Worldwide · Moniepoint
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-600 font-light">
              🏆 Best Booth 2025–2026
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-600 font-light">
              📰 Featured on Ads of the World
            </span>
          </div>

          <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-light mb-16 leading-[0.85] tracking-tighter">
            <div>We build</div>
            <div className="flex items-baseline gap-4">
              <span>for</span>
              <span className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {words[wordIndex].toLowerCase()}
              </span>
            </div>
          </h1>

          <p className="text-base text-gray-500 font-light mb-12 max-w-lg">
            Brand Design Lead at Moniepoint — Africa's fastest-growing fintech. Award-winning 3D visualization and experiential design. Available for opportunities in Toronto, Vancouver, and Montreal.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <button
              onMouseEnter={() => setCursorHover(true)}
              onMouseLeave={() => setCursorHover(false)}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-2 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
            >
              Start a project
            </button>
            <a
              href="/resume.pdf"
              download
              onMouseEnter={() => setCursorHover(true)}
              onMouseLeave={() => setCursorHover(false)}
              className="px-6 py-2 border border-black text-black text-sm font-medium hover:bg-black hover:text-white transition-all hover:scale-105 active:scale-95"
            >
              Download Resume
            </a>
          </div>

          <p className="text-xs text-gray-400 font-light tracking-wide">
            Currently booking Q3 2026 — 2 project slots remaining
          </p>
        </div>
      </section>

      {/* Featured In Strip */}
      <div className="bg-black text-white py-5 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="text-xs uppercase tracking-widest text-gray-500 font-medium mr-4 flex-shrink-0">Recognized by</span>
          <span className="text-xs text-gray-300 font-light flex items-center gap-2">
            <span>🏆</span> Best Booth — African Tech Summit 2025–2026
          </span>
          <span className="text-gray-600 hidden md:inline">·</span>
          <span className="text-xs text-gray-300 font-light flex items-center gap-2">
            <span>📰</span> Ads of the World
          </span>
          <span className="text-gray-600 hidden md:inline">·</span>
          <span className="text-xs text-gray-300 font-light flex items-center gap-2">
            <span>📺</span> TechCabal
          </span>
          <span className="text-gray-600 hidden md:inline">·</span>
          <span className="text-xs text-gray-300 font-light flex items-center gap-2">
            <span>🎯</span> Leo Burnett · TBWA · 141 Worldwide
          </span>
        </div>
      </div>

      {/* About */}
      <section id="about" className="py-40 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">About</p>
            <h2 className="text-6xl md:text-7xl font-light max-w-3xl">
              Building brands that move people
            </h2>
          </div>

          <div className="max-w-4xl mb-32">
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
              I've art directed campaigns at Leo Burnett Lagos, TBWA\CONCEPT, and 141 Worldwide — brands like Heineken, Burger King, Desperados, and Huawei. The kind of work that ends up on Ads of the World and in industry roundups.
            </p>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
              In 2022, I joined Moniepoint as Brand Design Lead. Since then: led the booth design that won Best Booth at African Tech Summit out of 200+ exhibitors, directed the 'Still Day One' brand film that hit 487K views in its first week with zero paid media, and built the visual identity system used across a platform serving 20M+ businesses.
            </p>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
              I specialize in the intersection of 3D visualization and brand storytelling — making complex ideas feel physical and inevitable. The brief says 'booth design.' I deliver the thing people photograph and walk back to.
            </p>
            <p className="text-xl text-gray-900 font-light leading-relaxed">
              Great design isn't just what looks good. It's what feels inevitable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-20 mb-20">
            <div>
              <h3 className="text-sm font-medium mb-6 uppercase tracking-widest text-gray-400">What I Do</h3>
              <ul className="space-y-4 text-base text-gray-600 font-light">
                <li>3D Brand Visualization</li>
                <li>Experiential Design</li>
                <li>Creative Direction</li>
                <li>Art Direction</li>
                <li>Brand Campaign Strategy</li>
                <li>Visual Identity Systems</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-6 uppercase tracking-widest text-gray-400">Recognition</h3>
              <ul className="space-y-4 text-base text-gray-600 font-light">
                <li className="leading-relaxed">🏆 Best Booth<br/><span className="text-sm text-gray-400">African Tech Summit 2025-2026</span></li>
                <li className="leading-relaxed">📰 Featured Work<br/><span className="text-sm text-gray-400">Ads of the World</span></li>
                <li className="leading-relaxed">🎯 Agency Experience<br/><span className="text-sm text-gray-400">Leo Burnett, 141 Worldwide, TBWA</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-6 uppercase tracking-widest text-gray-400">Current Role</h3>
              <p className="text-base text-gray-600 font-light mb-6 leading-relaxed">
                Brand Design Lead<br/>
                <span className="text-gray-900 font-medium">Moniepoint Inc.</span>
              </p>
              <p className="text-sm text-gray-400 font-light">
                Aug 2022 — Present<br/>
                Remote, Nigeria
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex gap-6">
              <a href="https://linkedin.com/in/olympioabdulrazak" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-black transition-colors">LinkedIn →</a>
              <a href="https://behance.net/olympioabdulrazak" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-black transition-colors">Behance →</a>
              <a href="https://instagram.com/olympio.design" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-black transition-colors">Instagram →</a>
            </div>
            <a 
              href="/resume.pdf" 
              download
              onMouseEnter={() => setCursorHover(true)}
              onMouseLeave={() => setCursorHover(false)}
              className="inline-block px-6 py-3 border border-black text-black text-sm font-medium hover:bg-black hover:text-white transition-all hover:scale-105 active:scale-95"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-32 px-8 md:px-16 lg:px-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Process</p>
            <h2 className="text-5xl font-light">How I work</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-6">The Brief</h3>
              <p className="text-base text-gray-600 font-light leading-relaxed">
                I read your brief, then I read between the lines. Most problems brought to a designer are symptoms, not the disease. I spend the first 20% of any engagement asking uncomfortable questions.
              </p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-6">The Work</h3>
              <p className="text-base text-gray-600 font-light leading-relaxed">
                From 3D visualization to on-set direction to final delivery — I stay in the work. Not the deck about the work. The actual thing. Every detail is a decision, not a default.
              </p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-6">The Standard</h3>
              <p className="text-base text-gray-600 font-light leading-relaxed">
                I've built for companies where 'good enough' means 20 million businesses see it. That standard doesn't switch off. Whoever you are, your brand deserves work that feels inevitable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section id="brands" className="py-20 border-y border-gray-100 overflow-hidden bg-gray-50">
        <div className="mb-12 px-8 md:px-16 lg:px-24">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Trusted By</p>
          <h2 className="text-3xl font-light">Major Brands</h2>
        </div>
        <div className="flex flex-col items-center mb-16" ref={counterRef}>
          <div className="w-80 h-24 mb-6">
            <img src="/images/Moniepoint.png" alt="Moniepoint" className="w-full h-full object-contain" />
          </div>
          <div className="text-center">
            <p className="text-5xl font-light mb-2">{count}M+</p>
            <p className="text-sm text-gray-500 font-light">Businesses powered by Moniepoint's platform</p>
          </div>
        </div>
        <div className="relative mt-12">
          <div className="flex animate-scroll items-center">
            {brandLogos.map((logo, index) => (
              <div key={`${logo}-1-${index}`} className="flex-shrink-0 mx-8 h-16 w-32 relative grayscale hover:grayscale-0 transition-all">
                <img src={`/images/${logo}`} alt={logo.replace('.png', '')} className="w-full h-full object-contain" />
              </div>
            ))}
            {brandLogos.map((logo, index) => (
              <div key={`${logo}-2-${index}`} className="flex-shrink-0 mx-8 h-16 w-32 relative grayscale hover:grayscale-0 transition-all">
                <img src={`/images/${logo}`} alt={logo.replace('.png', '')} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-32 px-8 md:px-16 lg:px-24">
        <div className="mb-32">
          <div className="mb-20">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Featured Work</p>
            <h2 className="text-5xl font-light">Moniepoint</h2>
          </div>
          <div className="space-y-32">
            
            {/* Booth with Play Button */}
            <div className="grid md:grid-cols-2 gap-16 items-center opacity-0 animate-fadeIn" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
              <div className="space-y-4">
                <div className="aspect-[4/3] bg-gray-50 rounded-sm overflow-hidden group relative">
                  <img src="/images/booth2.png" alt="Moniepoint African Tech Summit Booth" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  {/* Play button overlay */}
                  <button
                    onClick={() => playVoiceForSection('booth')}
                    className={`absolute top-4 right-4 flex items-center gap-2 px-3 py-2 rounded-full backdrop-blur-md transition-all ${
                      playingSection === 'booth'
                        ? 'bg-black text-white'
                        : 'bg-white/90 text-black hover:bg-black hover:text-white'
                    }`}
                  >
                    <span className="text-sm">{playingSection === 'booth' ? '⏸' : '▶'}</span>
                    <span className="text-xs font-medium">{playingSection === 'booth' ? 'Playing' : 'Hear the story'}</span>
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[4/3] bg-gray-50 rounded-sm overflow-hidden group">
                    <img src="/images/booth1.png" alt="Booth Angle 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="aspect-[4/3] bg-gray-50 rounded-sm overflow-hidden group">
                    <img src="/images/booth3.png" alt="Booth Angle 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-2 items-center mb-3">
                  <span className="text-xs uppercase tracking-widest text-gray-400">Experiential</span>
                  <span className="text-xs text-gray-300">•</span>
                  <span className="text-xs text-gray-400">🏆 Best Booth 2025-2026</span>
                </div>
                <h3 className="text-3xl font-light mb-4">African Tech Summit</h3>
                <p className="text-sm text-gray-500 font-light mb-6 leading-relaxed">
                  Award-winning experiential booth design for Africa's largest tech conference. Led 3D conceptual thinking, visualization, and on-ground execution for Moniepoint's presence.
                </p>
                <div className="flex gap-4 text-xs text-gray-400 mb-6">
                  <span>3D Visualization</span>
                  <span>•</span>
                  <span>Experiential Design</span>
                  <span>•</span>
                  <span>Brand Design Lead</span>
                </div>
                <Link href="/work/african-tech-summit" className="text-sm font-medium hover:underline">View case study →</Link>
              </div>
            </div>
            
            {/* Still Day One with Play Button */}
            <div className="grid md:grid-cols-2 gap-16 items-center opacity-0 animate-fadeIn" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              <div className="md:order-2 aspect-video bg-gray-100 rounded-sm overflow-hidden relative">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/qyaojFuB6OE" title="Still Day One" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
                {/* Play button overlay */}
                <button
                  onClick={() => playVoiceForSection('fundraise')}
                  className={`absolute top-4 right-4 flex items-center gap-2 px-3 py-2 rounded-full backdrop-blur-md transition-all ${
                    playingSection === 'fundraise'
                      ? 'bg-black text-white'
                      : 'bg-white/90 text-black hover:bg-black hover:text-white'
                  }`}
                >
                  <span className="text-sm">{playingSection === 'fundraise' ? '⏸' : '▶'}</span>
                  <span className="text-xs font-medium">{playingSection === 'fundraise' ? 'Playing' : 'Hear the story'}</span>
                </button>
              </div>
              <div className="md:order-1">
                <div className="flex gap-2 items-center mb-3">
                  <span className="text-xs uppercase tracking-widest text-gray-400">Video Campaign</span>
                  <span className="text-xs text-gray-300">•</span>
                  <span className="text-xs text-gray-400">Content Studio</span>
                </div>
                <h3 className="text-3xl font-light mb-4">Still Day One — Fundraise</h3>
                <p className="text-sm text-gray-500 font-light mb-6 leading-relaxed">
                  Emotional brand film for Moniepoint's fundraise announcement. Led creative team through concept development and visual direction.
                </p>
                <div className="flex gap-4 text-xs text-gray-400 mb-6">
                  <span>Creative Direction</span>
                  <span>•</span>
                  <span>Brand Design</span>
                  <span>•</span>
                  <span>2024</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="/work/moniepoint-fundraise" className="text-sm font-medium hover:underline">View case study →</Link>
                  <a href="https://youtu.be/qyaojFuB6OE" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-black hover:underline transition-colors">Watch on YouTube →</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Work with Play Button */}
        <div>
          <div className="mb-20 flex items-center gap-4">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Selected Projects</p>
              <h2 className="text-5xl font-light">Client Work</h2>
            </div>
            <button
              onClick={() => playVoiceForSection('client')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-all ${
                playingSection === 'client'
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-gray-500 border-gray-300 hover:border-black hover:text-black'
              }`}
            >
              <span>{playingSection === 'client' ? '⏸' : '▶'}</span>
              <span className="text-xs font-medium">{playingSection === 'client' ? 'Playing' : 'Hear the story'}</span>
            </button>
          </div>
          <div className="space-y-32">
            
            <div className="grid md:grid-cols-2 gap-16 items-center opacity-0 animate-fadeIn" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              <div className="space-y-4">
                <div className="aspect-[4/3] bg-gray-50 rounded-sm overflow-hidden group">
                  <img src="/images/Ads-48.png" alt="TeamApt Independence Day Campaign" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[4/3] bg-gray-50 rounded-sm overflow-hidden group">
                    <img src="/images/Ads-49.png" alt="TeamApt Campaign 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="aspect-[4/3] bg-gray-50 rounded-sm overflow-hidden group">
                    <img src="/images/Ads-50.png" alt="TeamApt Campaign 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-2 items-center mb-3">
                  <span className="text-xs uppercase tracking-widest text-gray-400">Campaign</span>
                  <span className="text-xs text-gray-300">•</span>
                  <span className="text-xs text-gray-400">Featured on Ads of the World</span>
                </div>
                <h3 className="text-3xl font-light mb-4">Independence Day — TeamApt</h3>
                <p className="text-sm text-gray-500 font-light mb-6 leading-relaxed">
                  "Work From Home" collection celebrating Nigerian independence. Senior Brand Designer role — conceptual art direction and visual execution.
                </p>
                <div className="flex gap-4 text-xs text-gray-400 mb-6">
                  <span>Senior Brand Designer</span>
                  <span>•</span>
                  <span>Art Direction</span>
                  <span>•</span>
                  <span>2022</span>
                </div>
                <Link href="/work/teamapt-independence" className="text-sm font-medium hover:underline">View case study →</Link>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center opacity-0 animate-fadeIn" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
              <div className="md:order-2 aspect-[4/3] bg-gray-50 rounded-sm overflow-hidden group">
                <img src="/images/Ads-30.png" alt="9Mobile Father's Day Campaign" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="md:order-1">
                <div className="flex gap-2 items-center mb-3">
                  <span className="text-xs uppercase tracking-widest text-gray-400">Print Campaign</span>
                  <span className="text-xs text-gray-300">•</span>
                  <span className="text-xs text-gray-400">141 Worldwide</span>
                </div>
                <h3 className="text-3xl font-light mb-4">Father's Day WiFi — 9Mobile</h3>
                <p className="text-sm text-gray-500 font-light mb-6 leading-relaxed">
                  Print campaign for 9Mobile telecommunications. Art Director/Illustrator role with 141 Worldwide Lagos.
                </p>
                <div className="flex gap-4 text-xs text-gray-400 mb-6">
                  <span>Art Direction</span>
                  <span>•</span>
                  <span>Illustration</span>
                  <span>•</span>
                  <span>2018</span>
                </div>
                <a href="https://www.adsoftheworld.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline">View on Ads of the World →</a>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center opacity-0 animate-fadeIn" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
              <div className="aspect-video bg-gray-100 rounded-sm overflow-hidden">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/YVHhKDE1EZk" title="Terra Kulture" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
              </div>
              <div>
                <div className="flex gap-2 items-center mb-3">
                  <span className="text-xs uppercase tracking-widest text-gray-400">Video Campaign</span>
                  <span className="text-xs text-gray-300">•</span>
                  <span className="text-xs text-gray-400">Featured Work</span>
                </div>
                <h3 className="text-3xl font-light mb-4">Terra Kulture Campaign</h3>
                <p className="text-sm text-gray-500 font-light mb-6 leading-relaxed">
                  Cultural brand campaign showcasing creative direction and conceptual thinking.
                </p>
                <div className="flex gap-4 text-xs text-gray-400 mb-6">
                  <span>Creative Direction</span>
                  <span>•</span>
                  <span>Brand Campaign</span>
                </div>
                <a href="https://www.youtube.com/watch?v=YVHhKDE1EZk" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline">Watch on YouTube →</a>
              </div>
            </div>
          </div>

          <div className="mt-32">
            <div className="mb-12">
              <h3 className="text-3xl font-light">More Work</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {campaignImages.map((image, index) => (
                <div 
                  key={index}
                  onClick={() => setLightboxImage(image)}
                  onMouseEnter={() => setCursorHover(true)}
                  onMouseLeave={() => setCursorHover(false)}
                  className="aspect-square bg-gray-50 rounded-sm overflow-hidden group cursor-pointer"
                >
                  <img src={`/images/${image}`} alt={`Campaign ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-8 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Testimonials</p>
            <h2 className="text-4xl font-light">What people say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-sm">
              <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
                "This wasn't just a booth — it was a statement. Olympio turned a 6-week timeline into our most impactful brand moment of 2025. The attention to detail, from the 3D renders to the on-ground execution, showed why he's leading our brand design."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-medium flex-shrink-0">TE</div>
                <div>
                  <p className="text-sm font-medium">Tosin Eniolorunda</p>
                  <p className="text-xs text-gray-500">CEO & Co-founder, Moniepoint Inc.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-sm">
              <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
                "Olympio didn't just deliver a film. He delivered a creative POV that now defines how we show up. Still Day One isn't just a tagline — it's become part of our culture."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-medium flex-shrink-0">MP</div>
                <div>
                  <p className="text-sm font-medium">Marketing Leadership</p>
                  <p className="text-xs text-gray-500">Moniepoint Inc.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-sm">
              <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
                "I've attended African Tech Summit for 4 years. This was the first booth I actually wanted to spend time in. The design made Moniepoint feel like the biggest player in the room."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-medium flex-shrink-0">EP</div>
                <div>
                  <p className="text-sm font-medium">Enterprise Partner</p>
                  <p className="text-xs text-gray-500">Tech Industry</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-sm">
              <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
                "This campaign put TeamApt on the map creatively. Before this, we were known as a fintech product. After this, we were known as a brand with a point of view."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-medium flex-shrink-0">ML</div>
                <div>
                  <p className="text-sm font-medium">Marketing Lead</p>
                  <p className="text-xs text-gray-500">TeamApt, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Get in Touch</p>
          <h2 className="text-5xl font-light mb-8">Let's work together</h2>
          <p className="text-base text-gray-500 font-light mb-12 max-w-lg leading-relaxed">
            Currently booking Q3 2026. Based in Nigeria, available remotely and for relocation to Toronto, Vancouver, or Montreal. If you're a Canadian company looking for senior brand design or a creative director who's done this at scale — let's talk.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" placeholder="Your name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-black transition-colors" />
            <input type="email" placeholder="Your email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-black transition-colors" />
            <select value={formData.projectType} onChange={(e) => setFormData({...formData, projectType: e.target.value})} className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-black transition-colors text-gray-500">
              <option value="">Project type (optional)</option>
              <option value="3d-visualization">3D Visualization</option>
              <option value="booth-design">Conference Booth Design</option>
              <option value="brand-campaign">Brand Campaign</option>
              <option value="video-production">Video Production</option>
              <option value="other">Other</option>
            </select>
            <textarea placeholder="Tell me about your project" required rows={6} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-black transition-colors resize-none" />
            <button type="submit" disabled={formStatus === 'sending'} onMouseEnter={() => setCursorHover(true)} onMouseLeave={() => setCursorHover(false)} className="px-6 py-2 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 disabled:opacity-50">
              {formStatus === 'sending' ? 'Sending...' : formStatus === 'success' ? 'Sent! ✓' : formStatus === 'error' ? 'Error, try again' : 'Send message'}
            </button>
          </form>
          <div className="mt-12 pt-8 border-t border-gray-200 flex gap-6">
            <a href="mailto:hello@olympio.work" className="text-sm text-gray-500 hover:text-black transition-colors">hello@olympio.work</a>
            <a href="https://linkedin.com/in/olympioabdulrazak" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-black transition-colors">LinkedIn</a>
            <a href="https://behance.net/olympioabdulrazak" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-black transition-colors">Behance</a>
          </div>
        </div>
      </section>

      {/* AI Project Matcher */}
      {showMatcher && (
        <div className="fixed bottom-8 right-8 bg-white border border-gray-200 rounded-lg shadow-2xl p-6 max-w-sm z-50 animate-slideUp">
          <button onClick={() => setShowMatcher(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl">×</button>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">{matcherMessage}</p>
          <button 
            onClick={() => {
              setShowMatcher(false);
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-4 py-2 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-all w-full hover:scale-105"
          >
            Let's discuss →
          </button>
        </div>
      )}

      {/* Brief Assistant Widget */}
      <button
        onClick={() => setShowBriefWidget(true)}
        onMouseEnter={() => setCursorHover(true)}
        onMouseLeave={() => setCursorHover(false)}
        className="fixed bottom-8 left-8 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105 shadow-2xl z-50"
      >
        💡 Not sure what you need?
      </button>

      {showBriefWidget && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4" onClick={() => setShowBriefWidget(false)}>
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-light">Quick Brief Assistant</h3>
              <button onClick={() => setShowBriefWidget(false)} className="text-gray-400 hover:text-black text-2xl">×</button>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Describe your challenge in one sentence and get an instant strategic outline.
            </p>
            <textarea
              value={briefInput}
              onChange={(e) => setBriefInput(e.target.value)}
              placeholder="E.g., 'We're launching a fintech product but positioning is unclear' or 'Need a booth design for an upcoming trade show'"
              className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-black transition-colors resize-none mb-4"
              rows={3}
            />
            <button
              onClick={generateBrief}
              disabled={briefLoading || !briefInput.trim()}
              className="px-6 py-2 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105 disabled:opacity-50 mb-6"
            >
              {briefLoading ? 'Analyzing...' : 'Generate Brief Outline'}
            </button>
            
            {briefOutput && (
              <div className="border-t border-gray-200 pt-6">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Here's what you might need:</p>
                <div className="text-sm text-gray-600 whitespace-pre-line mb-6 leading-relaxed">
                  {briefOutput}
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setShowBriefWidget(false);
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-2 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105"
                  >
                    Let's discuss this →
                  </button>
                  <a 
                    href="https://getbrief.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-black text-sm font-medium hover:bg-black hover:text-white transition-all hover:scale-105"
                  >
                    Get full brief →
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={() => setLightboxImage(null)}>
          <button className="absolute top-8 right-8 text-white text-4xl hover:text-gray-300 transition-colors" onClick={() => setLightboxImage(null)}>×</button>
          <img src={`/images/${lightboxImage}`} alt="Campaign full view" className="max-w-full max-h-full object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-scroll { animation: scroll 40s linear infinite; }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-slideUp { animation: slideUp 0.4s ease-out; }
      `}</style>
    </div>
  );
}