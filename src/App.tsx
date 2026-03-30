import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronRight, ArrowRight, BarChart3, Globe, Search, 
  Smartphone, MonitorPlay, CheckCircle2, TrendingUp, Users, 
  Target, Zap, Shield, MessageSquare, Star, PlayCircle,
  Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin
} from 'lucide-react';

// --- Components ---

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`text-2xl font-bold tracking-tighter ${scrolled ? 'text-primary' : 'text-white'}`}>
              Nova<span className="text-accent">Growth</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Services', 'Results', 'Process', 'Pricing', 'FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm font-medium hover:text-accent transition-colors ${scrolled ? 'text-gray-600' : 'text-gray-300'}`}>
                {item}
              </a>
            ))}
            <a href="#contact" className="bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-accent/30">
              Get a Proposal
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-primary' : 'text-white'}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-xl">
              {['Services', 'Results', 'Process', 'Pricing', 'FAQ'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  {item}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 bg-accent text-white px-6 py-3 rounded-md font-medium"
              >
                Get a Proposal
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-900/30 blur-[100px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            Voted #1 Growth Agency 2026
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight"
          >
            Scale Your Revenue, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
              Not Your Workload.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We help SMEs, startups, and service businesses dominate their market with data-driven paid ads, SEO, and high-converting web experiences.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#contact" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-accent/30 flex items-center justify-center gap-2">
              Book a Free Strategy Call <ArrowRight size={20} />
            </a>
            <a href="#services" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2">
              View Our Services
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 pt-10 border-t border-white/10"
          >
            <p className="text-sm text-gray-400 mb-6 uppercase tracking-wider font-semibold">Trusted by innovative companies</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
              {/* Placeholder Logos */}
              {['TechFlow', 'EduSmart', 'BuildPro', 'HealthPlus', 'FinServe'].map((logo) => (
                <div key={logo} className="text-xl font-bold text-white flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-white/20"></div>
                  {logo}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Stop Wasting Money on Marketing That Doesn't Convert</h2>
          <p className="text-lg text-gray-600">You have a great product or service, but if your ideal customers can't find you, or your website doesn't convert them, you're leaving money on the table.</p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn delay={0.2} className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <X className="text-red-500" /> The Problem
              </h3>
              <ul className="space-y-4">
                {[
                  "Low quality leads that waste your sales team's time",
                  "Poor online visibility while competitors steal market share",
                  "Wasted ad spend with negative ROI",
                  "An outdated website that drives prospects away"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-red-400"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} className="space-y-8">
            <div className="bg-primary p-6 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-accent" /> The NovaGrowth Solution
              </h3>
              <ul className="space-y-4">
                {[
                  "Targeted campaigns that attract high-intent buyers",
                  "Data-driven SEO strategies for long-term organic dominance",
                  "Optimized ad funnels that maximize your return on ad spend",
                  "High-converting web experiences designed to turn clicks into clients"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-accent"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <BarChart3 size={32} />,
      title: "Paid Advertising",
      desc: "Data-driven Meta & Google Ads campaigns designed for maximum ROI.",
      bullets: ["Lower Cost Per Acquisition", "High-intent lead generation", "Advanced retargeting funnels"]
    },
    {
      icon: <Globe size={32} />,
      title: "Web Development",
      desc: "Lightning-fast, conversion-optimized websites that act as your 24/7 salesperson.",
      bullets: ["Mobile-first responsive design", "Conversion Rate Optimization (CRO)", "Seamless CRM integration"]
    },
    {
      icon: <Search size={32} />,
      title: "SEO Optimization",
      desc: "Dominate search results and capture high-quality organic traffic.",
      bullets: ["Technical SEO audits", "Content strategy & creation", "High-authority link building"]
    },
    {
      icon: <Smartphone size={32} />,
      title: "Social Media Management",
      desc: "Build brand authority and engage your audience where they spend their time.",
      bullets: ["Strategic content calendars", "Community engagement", "Brand voice development"]
    },
    {
      icon: <MonitorPlay size={32} />,
      title: "VR / EdTech Solutions",
      desc: "Immersive marketing experiences specifically tailored for modern education and tech.",
      bullets: ["Virtual campus tours", "Interactive product demos", "Student enrollment campaigns"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-accent font-semibold tracking-wide uppercase mb-3">Our Expertise</h2>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Everything You Need to Scale</h2>
            <p className="text-lg text-gray-600">We don't just offer services; we build comprehensive growth engines tailored to your specific business goals.</p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                <div className="w-14 h-14 bg-orange-50 text-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.desc}</p>
                <ul className="space-y-2 mb-8">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                      <CheckCircle2 size={16} className="text-accent" /> {bullet}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors mt-auto">
                  Learn More <ChevronRight size={18} className="ml-1" />
                </a>
              </div>
            </FadeIn>
          ))}
          
          <FadeIn delay={0.5}>
            <div className="bg-primary p-8 rounded-2xl shadow-sm h-full flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Not sure what you need?</h3>
              <p className="text-gray-300 mb-8 relative z-10">Let's audit your current marketing and build a custom roadmap.</p>
              <a href="#contact" className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-medium transition-all w-full relative z-10">
                Get a Free Audit
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Results = () => {
  return (
    <section id="results" className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <FadeIn className="max-w-2xl">
            <h2 className="text-accent font-semibold tracking-wide uppercase mb-3">Proven Results</h2>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">We Measure Success by Your Revenue Growth</h2>
            <p className="text-lg text-gray-300">Don't just take our word for it. See how we've helped businesses like yours achieve explosive growth.</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors">
              Get Similar Results <ArrowRight size={18} />
            </a>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn delay={0.1}>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">B2B SaaS Startup</p>
                  <h3 className="text-2xl font-bold text-white">TechFlow Solutions</h3>
                </div>
                <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <TrendingUp size={14} /> +215%
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 p-4 rounded-xl">
                  <p className="text-gray-400 text-sm mb-1">Before</p>
                  <p className="text-xl font-bold">R850 CPA</p>
                </div>
                <div className="bg-accent/10 p-4 rounded-xl border border-accent/20">
                  <p className="text-accent text-sm mb-1">After (90 Days)</p>
                  <p className="text-xl font-bold">R320 CPA</p>
                </div>
              </div>
              
              <p className="text-gray-300 italic mb-6">"NovaGrowth completely overhauled our Google Ads strategy. We're now acquiring customers at less than half the cost, allowing us to scale our ad spend aggressively."</p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden">
                  <img src="https://picsum.photos/seed/sarah/100/100" alt="Client" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Sarah Jenkins</p>
                  <p className="text-xs text-gray-400">CMO, TechFlow</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">Education Sector</p>
                  <h3 className="text-2xl font-bold text-white">Pinnacle Academy</h3>
                </div>
                <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <TrendingUp size={14} /> +300%
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 p-4 rounded-xl">
                  <p className="text-gray-400 text-sm mb-1">Previous Year</p>
                  <p className="text-xl font-bold">120 Enrollments</p>
                </div>
                <div className="bg-accent/10 p-4 rounded-xl border border-accent/20">
                  <p className="text-accent text-sm mb-1">With NovaGrowth</p>
                  <p className="text-xl font-bold">480 Enrollments</p>
                </div>
              </div>
              
              <p className="text-gray-300 italic mb-6">"Their VR campus tour combined with targeted social ads completely transformed our enrollment season. Best marketing investment we've ever made."</p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden">
                  <img src="https://picsum.photos/seed/david/100/100" alt="Client" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Dr. David Chen</p>
                  <p className="text-xs text-gray-400">Director of Admissions</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { num: "01", title: "Deep-Dive Audit", desc: "We analyze your current marketing, competitors, and market gaps to find immediate opportunities." },
    { num: "02", title: "Custom Strategy", desc: "No cookie-cutter plans. We build a bespoke roadmap tailored to your specific revenue goals." },
    { num: "03", title: "Flawless Execution", desc: "Our team of specialists implements the strategy across ads, web, and content." },
    { num: "04", title: "Data Optimization", desc: "We continuously monitor, A/B test, and refine campaigns to improve conversion rates." },
    { num: "05", title: "Aggressive Scaling", desc: "Once we hit profitable metrics, we pour fuel on the fire to scale your growth." }
  ];

  return (
    <section id="process" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-accent font-semibold tracking-wide uppercase mb-3">Our Methodology</h2>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">A Predictable System for Growth</h2>
            <p className="text-lg text-gray-600">We leave nothing to chance. Our 5-step framework ensures consistent, scalable results.</p>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1} className="relative">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full relative group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-accent transition-colors shadow-lg">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        
        <FadeIn delay={0.6} className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg">
            Start Step 01 Today
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

const USP = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl transform -rotate-3"></div>
              <img 
                src="https://picsum.photos/seed/agency/800/600" 
                alt="NovaGrowth Team" 
                className="relative rounded-2xl shadow-2xl object-cover w-full h-[500px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <img key={i} src={`https://picsum.photos/seed/user${i}/40/40`} className="w-10 h-10 rounded-full border-2 border-white" alt="User" referrerPolicy="no-referrer" />
                    ))}
                  </div>
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                </div>
                <p className="text-sm font-bold text-primary">"The only agency that actually delivered on their promises."</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-accent font-semibold tracking-wide uppercase mb-3">Why Choose Us</h2>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">We Are Your Growth Partners, Not Just Vendors</h2>
            <p className="text-lg text-gray-600 mb-8">Most agencies care about clicks and impressions. We only care about one metric: your bottom-line revenue.</p>
            
            <div className="space-y-6">
              {[
                { icon: <Target className="text-accent" size={24} />, title: "Data-Driven Decisions", desc: "No guesswork. Every campaign is backed by hard data and continuous testing." },
                { icon: <Shield className="text-accent" size={24} />, title: "No Long-Term Contracts", desc: "We earn your business every single month through performance, not legal bindings." },
                { icon: <Users className="text-accent" size={24} />, title: "Done-For-You Service", desc: "You run your business. We handle 100% of the marketing execution." },
                { icon: <MessageSquare className="text-accent" size={24} />, title: "Transparent Reporting", desc: "24/7 access to live dashboards so you always know exactly where your money is going." }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 bg-orange-50 p-2 rounded-lg h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-accent font-semibold tracking-wide uppercase mb-3">Transparent Pricing</h2>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Invest in Growth</h2>
            <p className="text-lg text-gray-600">Simple, straightforward packages designed to scale with your business.</p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter */}
          <FadeIn delay={0.1}>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full">
              <h3 className="text-xl font-bold text-primary mb-2">Starter</h3>
              <p className="text-gray-500 text-sm mb-6">Perfect for small businesses establishing their presence.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">R2,999</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Google OR Meta Ads Management', 'Basic SEO Setup', 'Monthly Reporting', 'Email Support', 'Up to R10k Ad Spend'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                    <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="w-full block text-center bg-gray-100 hover:bg-gray-200 text-primary font-semibold py-3 rounded-xl transition-colors">
                Choose Starter
              </a>
            </div>
          </FadeIn>

          {/* Growth - Highlighted */}
          <FadeIn delay={0.2}>
            <div className="bg-primary p-8 rounded-3xl shadow-xl border border-primary relative flex flex-col h-full transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
              <p className="text-gray-400 text-sm mb-6">For businesses ready to aggressively scale revenue.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">R6,999</span>
                <span className="text-gray-400">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Omnichannel Ads (Google + Meta)', 'Comprehensive SEO Strategy', 'Landing Page Optimization', 'Bi-weekly Strategy Calls', 'Custom Dashboard', 'Up to R50k Ad Spend'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <CheckCircle2 size={18} className="text-accent flex-shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="w-full block text-center bg-accent hover:bg-accent/90 text-white font-semibold py-3 rounded-xl transition-colors shadow-lg shadow-accent/20">
                Choose Growth
              </a>
            </div>
          </FadeIn>

          {/* Scale */}
          <FadeIn delay={0.3}>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full">
              <h3 className="text-xl font-bold text-primary mb-2">Scale</h3>
              <p className="text-gray-500 text-sm mb-6">Enterprise-grade marketing department on demand.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">Custom</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Full-Funnel Marketing Strategy', 'Custom Web Development', 'VR/EdTech Integrations', 'Dedicated Account Director', 'Weekly Syncs', 'Unlimited Ad Spend'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                    <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="w-full block text-center bg-gray-100 hover:bg-gray-200 text-primary font-semibold py-3 rounded-xl transition-colors">
                Contact Sales
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "How long does it take to see results?", a: "For paid ads, we typically see initial results within the first 14-30 days. SEO is a longer-term strategy, usually showing significant traction in 3-6 months. We set clear expectations during our strategy call." },
    { q: "Do you require long-term contracts?", a: "No. We believe in earning your business every month. Our services are month-to-month, though we recommend a minimum 3-month commitment to allow strategies to fully optimize." },
    { q: "What industries do you specialize in?", a: "While our methodologies work across sectors, we have deep expertise in B2B SaaS, Education (EdTech/Schools), Professional Services, and E-commerce." },
    { q: "Who will be managing my account?", a: "You will be assigned a dedicated Account Manager who acts as your strategic lead, supported by a team of specialists (media buyers, SEO experts, developers) executing the work." }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Everything you need to know about working with NovaGrowth.</p>
        </FadeIn>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-muted p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-primary mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.4} className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a href="#contact" className="text-accent font-semibold hover:underline">Chat with our team</a>
        </FadeIn>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section id="contact" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Dominate Your Market?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Stop losing customers to competitors with inferior products but better marketing. Let's build your growth engine today.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="text-accent" /> Free 30-Minute Strategy Session
                </div>
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="text-accent" /> Custom Marketing Audit
                </div>
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="text-accent" /> No Obligation Proposal
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <form className="bg-white p-8 rounded-2xl shadow-2xl" onSubmit={(e) => e.preventDefault()}>
                <h3 className="text-2xl font-bold text-primary mb-6">Request Your Free Audit</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="John Doe" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="john@company.com" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Website URL</label>
                    <input type="url" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="https://yourwebsite.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Marketing Budget</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all">
                      <option>Under R5,000</option>
                      <option>R5,000 - R15,000</option>
                      <option>R15,000 - R30,000</option>
                      <option>R30,000+</option>
                    </select>
                  </div>
                  
                  <button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg mt-4">
                    Get My Free Proposal
                  </button>
                  <p className="text-xs text-center text-gray-500 mt-4">We respect your privacy. No spam, ever.</p>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#05080f] text-gray-400 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <span className="text-2xl font-bold tracking-tighter text-white mb-6 block">
              Nova<span className="text-accent">Growth</span>
            </span>
            <p className="mb-6">The performance marketing agency for ambitious brands ready to scale.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-accent transition-colors">Paid Advertising</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Social Media</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">VR/EdTech Marketing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent flex-shrink-0 mt-1" />
                <span>113 Bellairs Drive<br/>Northriding</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-accent flex-shrink-0" />
                <span>066 299 3548</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-accent flex-shrink-0" />
                <span>lwethutshabalala262@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} NovaGrowth Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ExitIntentModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden relative"
          >
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full p-1"
            >
              <X size={20} />
            </button>
            
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Wait! Before you go...</h3>
              <p className="text-gray-600 mb-6">
                Get our free "2026 Growth Marketing Playbook" showing exactly how we scaled 3 clients past R10M ARR this year.
              </p>
              
              <form onSubmit={(e) => { e.preventDefault(); setIsVisible(false); }} className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-accent outline-none"
                  required
                />
                <button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 rounded-xl transition-colors shadow-lg">
                  Send Me The Playbook
                </button>
              </form>
              <button onClick={() => setIsVisible(false)} className="text-sm text-gray-400 mt-4 hover:text-gray-600">
                No thanks, I don't want to grow my business
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden mb-4"
          >
            <div className="bg-primary p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src="https://picsum.photos/seed/agent/40/40" alt="Agent" className="w-10 h-10 rounded-full border-2 border-white/20" referrerPolicy="no-referrer" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-primary rounded-full"></div>
                </div>
                <div>
                  <p className="font-bold text-sm">Alex from NovaGrowth</p>
                  <p className="text-xs text-gray-300">Typically replies in minutes</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
                <X size={20} />
              </button>
            </div>
            
            <div className="h-64 bg-gray-50 p-4 flex flex-col gap-4 overflow-y-auto">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 max-w-[85%]">
                Hi there! 👋 Looking to scale your revenue? I can help answer any questions about our services.
              </div>
            </div>
            
            <div className="p-3 border-t bg-white">
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Type a message..." 
                  className="flex-grow px-3 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-accent text-sm"
                />
                <button type="submit" className="bg-accent text-white p-2 rounded-full hover:bg-accent/90 transition-colors">
                  <PlayCircle size={20} className="rotate-0" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent/30">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Services />
      <Results />
      <Process />
      <USP />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <ExitIntentModal />
      <LiveChat />
    </div>
  );
}
