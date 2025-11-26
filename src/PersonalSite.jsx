import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, Code, Award, Star, Terminal, MapPin, Calendar, Target, Cpu, Activity, FileCode, Package, Sparkles, Coffee, Rocket, BookOpen, Trophy, Lightbulb, Zap, Home, User, FolderOpen, CircuitBoard, Wrench } from 'lucide-react';

const PersonalBentoSite = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [time, setTime] = useState(new Date());
  const [stats, setStats] = useState({ commits: 0, projects: 0, awards: 0 });
  const [typedText, setTypedText] = useState('');
  // Use PUBLIC_URL so the image works in dev and when served from a subpath
  const selectedImage = (process.env.PUBLIC_URL || '') + '/profile.jpeg';
  const [hoveredDock, setHoveredDock] = useState(null);
  const [sparkles, setSparkles] = useState([]);
  const canvasRef = useRef(null);

  const fullText = "Engineering Student | AI/ML & Embedded Systems | Hardware Design";
  
  useEffect(() => {
    // Show full text immediately for professional appearance
    setTypedText(fullText);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < 100) {
        setStats({
          commits: Math.floor((1500 * count) / 100),
          projects: Math.floor((15 * count) / 100),
          awards: Math.floor((20 * count) / 100)
        });
        count++;
      } else {
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // If the page is loaded with a hash (e.g. /#about), scroll to that element
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.startsWith('#') ? hash.slice(1) : hash;
    // Delay slightly so React has time to render the element
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
    return () => clearTimeout(t);
  }, []);



  const awards = [
    { title: "Schulich Leader Nominee", org: "Schulich Foundation - 2025", icon: Award },
    { title: "CAP Physics Prize", org: "Canada-Wide Science Fair 2025", icon: Award },
    { title: "Bronze Medal", org: "Canada-Wide Science Fair 2025", icon: Award },
    { title: "Gold Medal", org: "Toronto Science Fair 2025", icon: Trophy },
    { title: "RASC Award", org: "Royal Astronomical Society - 2024", icon: Rocket },
    { title: "Skills Ontario Coding Award", org: "1st TCDSB, Finalist Provincial", icon: Code },
    { title: "Principal's Award", org: "Francis Libermann CHS - 2025", icon: Star },
    { title: "Achievement Award", org: "Francis Libermann CHS - 2025", icon: Star },
    { title: "Top Subject Awards", org: "Grade 12 Excellence - 5 Awards", icon: BookOpen },
    { title: "Canadian Senior Math Contest Medal", org: "UWaterloo", icon: Lightbulb },
    { title: "Isaac Newton Distinction", org: "UWaterloo Physics Contest", icon: Zap },
    { title: "McMaster Award of Excellence", org: "$3,000 Scholarship", icon: Award }
  ];

  const projects = [
    { 
      name: "Electromagnetic Hybrid Space Launch System", 
      tech: "Arduino • PCB Design • MOSFETs • Hall-effect Sensors • Li-ion Power Supply • Oscilloscopes",
      status: "Award-Winning",
      icon: Rocket,
      date: "September 2024 - February 2025",
      description: "Designed and developed a cost-effective functional linear electromagnetic hybrid launcher that achieved a projectile velocity of 65km/h by integrating solenoids, MOSFETs, and a li-ion power supply.",
      achievements: [
        "Achieved 65km/h projectile velocity",
        "Synchronization error of less than 50μs",
        "Minimized power loss to 5% in switching system",
        "Controlled 16 coil pairs with modular high-current switching"
      ],
      technicalDetails: [
        "Programmed Arduino PWM for precise magnetic pulse timing and control",
        "Utilized Hall-effect sensor feedback for real-time monitoring",
        "Designed custom PCB circuitry with RJ-45 signal routing",
        "Implemented safety interlocking logic for system protection",
        "Validated circuit integrity using oscilloscopes and high-current soldering",
        "Optimized power delivery by transitioning from capacitors to lithium-ion batteries"
      ],
      awards: "Canada-Wide Science Fair Bronze Medal, Toronto Science Fair Gold Medal, CAP Physics Prize"
    },
    { 
      name: "MirroMind - Smart Interactive Mirror", 
      tech: "Raspberry Pi • Firebase • Google Tasks API • Python • Sensors (Temperature, Humidity, Motion, Light) • Gesture Recognition • Voice Recognition • TTS",
      status: "In Development",
      icon: Cpu,
      date: "August 2025 - Present",
      description: "Developed an intelligent Smart Mirror system using Raspberry Pi and multiple sensors, integrating gesture-based navigation, voice recognition, and TTS feedback for hands-free module control, interactive reminders, and environmental monitoring.",
      achievements: [
        "Integrated cloud services for real-time data synchronization",
        "Implemented AI-assisted predictive features",
        "Multi-device coordination and remote access",
        "Hands-free operation through gesture and voice control"
      ],
      technicalDetails: [
        "Integrated Firebase for cloud data storage and real-time synchronization",
        "Connected Google Tasks API for task management and reminders",
        "Implemented sensor fusion for temperature, humidity, motion, and light detection",
        "Developed gesture-based navigation system for touchless interaction",
        "Built voice recognition and TTS (Text-to-Speech) feedback system",
        "Created historical analytics and smart notification system",
        "Demonstrated embedded systems design with real-time processing capabilities"
      ],
      awards: null
    }
  ];

  const skills = [
    { name: "PCB Design & Prototyping", level: 92, color: "from-blue-500 to-cyan-500", icon: CircuitBoard },
    { name: "Soldering & Thermal Management", level: 90, color: "from-blue-600 to-blue-400", icon: Wrench },
    { name: "Instrumentation & Testing", level: 95, color: "from-cyan-500 to-blue-500", icon: Activity },
    { name: "Microcontrollers (ARM/AVR)", level: 93, color: "from-blue-500 to-teal-500", icon: Cpu },
    { name: "High-Current Systems Design", level: 88, color: "from-indigo-500 to-blue-500", icon: Rocket },
    { name: "Circuit Design & Analysis", level: 88, color: "from-blue-500 to-cyan-500", icon: Activity },
    { name: "Altium Designer & LTspice", level: 90, color: "from-cyan-500 to-blue-500", icon: FileCode },
    { name: "Sensor Integration & IoT", level: 87, color: "from-blue-500 to-indigo-500", icon: Rocket },
    { name: "Signal Processing & Power Management", level: 84, color: "from-indigo-500 to-blue-500", icon: Wrench }
  ];

  const languages = [
    { name: "C++", proficiency: "Advanced" },
    { name: "Embedded C", proficiency: "Advanced" },
    { name: "Python", proficiency: "Advanced" },
    { name: "Java", proficiency: "Intermediate" },
    { name: "MATLAB", proficiency: "Advanced" },
    { name: "HTML", proficiency: "Intermediate" },
    { name: "CSS", proficiency: "Intermediate" },
    { name: "JavaScript", proficiency: "Intermediate" }
  ];

  const apisAndProtocols = [
    { name: "AWS", type: "Platform", description: "Amazon Web Services cloud platform" },
    { name: "Firebase", type: "API", description: "Cloud services & real-time database" },
    { name: "Google Tasks API", type: "API", description: "Task management integration" },
    { name: "REST API", type: "Protocol", description: "HTTP-based web services" },
    { name: "HTTP/HTTPS", type: "Protocol", description: "Web communication protocols" },
    { name: "MQTT", type: "Protocol", description: "IoT messaging protocol" },
    { name: "I2C/SPI", type: "Protocol", description: "Sensor communication protocols" },
    { name: "WebSocket", type: "Protocol", description: "Real-time bidirectional communication" }
  ];

  const dockItems = [
    { icon: Home, label: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { icon: User, label: 'About', action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: FolderOpen, label: 'Projects', action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: Trophy, label: 'Awards', action: () => document.getElementById('awards')?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: Mail, label: 'Contact', action: () => window.location.href = 'mailto:alankgabriel2007@gmail.com' },
  { icon: Github, label: 'GitHub', action: () => window.open('https://github.com/AlanGabriel-CS', '_blank') },
    { icon: Linkedin, label: 'LinkedIn', action: () => window.open('https://linkedin.com/in/alan-gabriel-ce', '_blank') }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8 relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-30" />
      
      {/* Header Background with Microcontrollers + Circuitry + Rocket Image */}
      <div className="absolute top-0 left-0 right-0 h-96 md:h-[500px] overflow-hidden z-0">
        {/* Background Image - Microcontrollers, Circuitry, and Rocket */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1639322537504-6427a16b0a5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`,
            opacity: 0.15
          }}
        />
        {/* Additional overlay image for rocket/space elements */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-screen"
          style={{
            backgroundImage: `url("https://cdn.prod.website-files.com/601d9af1ac96921333a10827/669eacd21fd0da4c9b6cd5e8_Career-Spotlight_Computer_Hardware_Engineer_Blog.jpg")`,
            opacity: 0.50
          }}
        />
        {/* Subtle Color Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/15 to-cyan-600/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-transparent to-cyan-500/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/50 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 pb-32">
        <div className="mb-12 text-center relative pt-20 md:pt-28">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 relative tracking-tight">
            <span className="text-blue-400">Alan</span>{' '}
            <span className="text-blue-400">Gabriel</span>
          </h1>
          <div className="mb-6">
            <p className="text-base md:text-lg text-gray-400 flex items-center justify-center gap-2 font-mono">
              <Terminal size={16} className="text-blue-400" />
              <span className="text-gray-300">{typedText}</span>
              <span className="text-blue-400">|</span>
            </p>
          </div>
          <div className="flex justify-center gap-3 flex-wrap mb-6">
            <div className="px-6 py-2.5 rounded-lg bg-slate-800/80 backdrop-blur-sm border border-blue-800/40 shadow-lg">
              <BookOpen className="inline mr-2 text-blue-500" size={16} />
              <span className="text-white font-medium text-sm">McMaster Engineering</span>
              <span className="text-gray-400 ml-2 text-sm">Level I</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div
            className="relative overflow-hidden rounded-3xl p-6 transition-all duration-500 group"
            style={{
              background: hoveredCard === 'photo' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(15, 23, 42, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              boxShadow: hoveredCard === 'photo' ? '0 20px 60px rgba(59, 130, 246, 0.2), inset 0 0 20px rgba(59, 130, 246, 0.1)' : 'none'
            }}
            onMouseEnter={() => setHoveredCard('photo')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {hoveredCard === 'photo' && (
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" 
                     style={{
                       backgroundSize: '200% 100%',
                       animation: 'shimmer 2s infinite'
                     }}
                />
              </div>
            )}
            <div className="flex flex-col items-center justify-center h-full">
                <img 
                  src={selectedImage} 
                  alt="Alan Gabriel" 
                  className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-800/50 shadow-2xl mb-4"
                  onError={(e) => {
                    // Fallback to initials if image doesn't load
                    e.target.style.display = 'none';
                    const fallback = e.target.nextElementSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-800 via-slate-800 to-blue-900 flex items-center justify-center text-5xl font-bold text-white shadow-2xl border-4 border-white/10 mb-4 hidden">
                  AG
                </div>
            </div>
          </div>

          <div
            id="about"
            className="md:col-span-3 relative overflow-hidden rounded-3xl p-8 transition-all duration-500 group cursor-pointer"
            style={{
              background: hoveredCard === 'bio' ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(14, 165, 233, 0.2))' : 'rgba(15, 23, 42, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              transform: hoveredCard === 'bio' ? 'translateY(-2px)' : 'translateY(0)',
              boxShadow: hoveredCard === 'bio' ? '0 20px 60px rgba(59, 130, 246, 0.2), inset 0 0 30px rgba(59, 130, 246, 0.1)' : 'none'
            }}
            onMouseEnter={() => setHoveredCard('bio')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {hoveredCard === 'bio' && (
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div 
                  className="absolute w-full h-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    animation: 'glare 3s infinite'
                  }}
                />
              </div>
            )}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-blue-800/30">
                  <Sparkles className="text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">About Me</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                My name is Alan Gabriel and I am an <span className="text-blue-400 font-semibold">Engineering</span> student at McMaster University specializing in the intersection of <span className="text-blue-400 font-semibold">AI/ML algorithms</span> and <span className="text-blue-400 font-semibold">hardware/PCB design</span>. I focus on developing intelligent embedded systems that integrate machine learning with physical circuitry, from custom PCB prototyping to sensor fusion and real-time processing.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                With award-winning projects in electromagnetic systems and IoT devices, I have hands-on expertise in <span className="text-teal-300 font-semibold">microcontrollers, PCB design (Altium), circuit analysis, and embedded C/C++</span>. Currently seeking <span className="text-teal-300 font-semibold">Summer 2026 internships</span> to further develop my skills in engineering, embedded AI, and hardware-software integration.
              </p>
              <div className="flex gap-4 mb-4">
                <a href="mailto:alankgabriel2007@gmail.com" className="p-3 rounded-full bg-blue-800/30 hover:bg-blue-800/40 transition-all duration-300 text-blue-400 hover:scale-110 border border-blue-800/40">
                  <Mail size={20} />
                </a>
                <a href="https://github.com/AlanGabriel-CS" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-blue-800/30 hover:bg-blue-800/40 transition-all duration-300 text-blue-400 hover:scale-110 border border-blue-800/40">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/alan-gabriel-ce" className="p-3 rounded-full bg-blue-800/30 hover:bg-blue-800/40 transition-all duration-300 text-blue-400 hover:scale-110 border border-blue-800/40">
                  <Linkedin size={20} />
                </a>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <div className="relative">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping absolute" />
                  <div className="w-3 h-3 bg-emerald-400 rounded-full" />
                </div>
                <span className="text-sm font-semibold">Available for Summer 2026 Internships</span>
              </div>
            </div>
          </div>

          {/* Expanded Specializations */}
          <div
            className="md:col-span-4 relative overflow-hidden rounded-3xl p-6 transition-all duration-500 group cursor-pointer"
            style={{
              background: hoveredCard === 'skills' ? 'rgba(59, 130, 246, 0.18)' : 'rgba(15, 23, 42, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              boxShadow: hoveredCard === 'skills' ? '0 20px 60px rgba(59, 130, 246, 0.2)' : 'none'
            }}
            onMouseEnter={() => setHoveredCard('skills')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-blue-800/30">
                <Package className="text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Technical Skills & Specializations</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <div key={i} className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-10 blur transition duration-500" />
                    <div className="relative p-5 rounded-xl bg-gradient-to-br from-blue-800/15 to-slate-800/15 border border-blue-800/30 hover:border-blue-800/50 hover:bg-blue-800/20 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-blue-800/30">
                          <Icon className="text-blue-500" size={24} />
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-bold text-sm">{skill.name}</p>
                          <p className="text-gray-400 text-xs">{skill.level}% Proficiency</p>
                        </div>
                      </div>
                      <div className="h-2 bg-slate-800/60 rounded-full overflow-hidden border border-slate-400/50">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 shadow-lg`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Programming Languages */}
          <div
            id="languages"
            className="md:col-span-4 relative overflow-hidden rounded-3xl p-6 transition-all duration-500 group cursor-pointer"
            style={{
              background: hoveredCard === 'languages' ? 'rgba(59, 130, 246, 0.18)' : 'rgba(15, 23, 42, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              boxShadow: hoveredCard === 'languages' ? '0 20px 60px rgba(59, 130, 246, 0.2)' : 'none'
            }}
            onMouseEnter={() => setHoveredCard('languages')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-blue-800/30">
                <Code className="text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Programming Languages</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {languages.map((lang, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-gradient-to-br from-blue-800/15 to-slate-800/15 border border-blue-800/30 hover:border-blue-800/50 hover:bg-blue-800/20 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg text-center"
                >
                  <p className="text-white font-bold text-lg mb-2">{lang.name}</p>
                  <p className="text-gray-400 text-sm">{lang.proficiency}</p>
                </div>
              ))}
            </div>
          </div>

          {/* APIs & Protocols */}
          <div
            id="apis"
            className="md:col-span-4 relative overflow-hidden rounded-3xl p-6 transition-all duration-500 group cursor-pointer"
            style={{
              background: hoveredCard === 'apis' ? 'rgba(59, 130, 246, 0.18)' : 'rgba(15, 23, 42, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              boxShadow: hoveredCard === 'apis' ? '0 20px 60px rgba(59, 130, 246, 0.2)' : 'none'
            }}
            onMouseEnter={() => setHoveredCard('apis')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-blue-800/30">
                <Activity className="text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">APIs & Protocols</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {apisAndProtocols.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-gradient-to-br from-blue-800/15 to-slate-800/15 border border-blue-800/30 hover:border-blue-800/50 hover:bg-blue-800/20 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white font-bold text-lg">{item.name}</p>
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-800/30 text-blue-400 border border-blue-800/40">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Card */}
          <div
            id="projects"
            className="md:col-span-4 relative overflow-hidden rounded-3xl p-6 transition-all duration-500 group cursor-pointer"
            style={{
              background: hoveredCard === 'projects' ? 'rgba(59, 130, 246, 0.18)' : 'rgba(15, 23, 42, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              boxShadow: hoveredCard === 'projects' ? '0 20px 60px rgba(59, 130, 246, 0.2)' : 'none'
            }}
            onMouseEnter={() => setHoveredCard('projects')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-blue-800/30">
                <FileCode className="text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Featured Projects</h3>
            </div>
            <div className="grid gap-6">
              {projects.map((project, i) => {
                const Icon = project.icon;
                return (
                  <div key={i} className="relative group overflow-hidden">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition duration-700" />
                    <div className="relative p-6 rounded-xl bg-gradient-to-r from-blue-800/15 to-slate-800/15 border border-blue-800/30 hover:border-blue-800/50 transition-all duration-300 hover:scale-[1.01] cursor-pointer shadow-lg overflow-hidden">
                      {hoveredCard === `project-${i}` && (
                        <div className="absolute inset-0 opacity-30 pointer-events-none">
                          <div 
                            className="absolute w-1/3 h-full bg-gradient-to-r from-transparent via-white to-transparent"
                            style={{
                              animation: 'glare 2s infinite',
                              transform: 'skewX(-20deg)'
                            }}
                          />
                        </div>
                      )}
                      <div 
                        className="relative z-10"
                        onMouseEnter={() => setHoveredCard(`project-${i}`)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="p-2 rounded-lg bg-blue-800/30 border border-blue-800/40">
                              <Icon className="text-blue-400" size={28} />
                            </div>
                            <div className="flex-1">
                              <p className="text-white font-bold text-xl mb-1">{project.name}</p>
                              <p className="text-gray-400 text-sm mb-1">{project.date}</p>
                              <p className="text-gray-500 text-xs">{project.tech}</p>
                          </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap h-fit ${
                          project.status === 'Award-Winning'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-400/50' 
                            : project.status === 'Active'
                            ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                            : 'bg-blue-800/30 text-blue-400 border border-blue-800/50'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                        
                        <p className="text-gray-300 leading-relaxed mb-4 text-base">{project.description}</p>
                        
                        {project.achievements && project.achievements.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                              <Trophy className="text-amber-400" size={16} />
                              Key Achievements
                            </h4>
                            <ul className="space-y-1.5">
                              {project.achievements.map((achievement, idx) => (
                                <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                                  <span className="text-blue-400 mt-1.5">•</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {project.technicalDetails && project.technicalDetails.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                              <Code className="text-blue-400" size={16} />
                              Technical Implementation
                            </h4>
                            <ul className="space-y-1.5">
                              {project.technicalDetails.map((detail, idx) => (
                                <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                                  <span className="text-blue-400 mt-1.5">▸</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {project.awards && (
                          <div className="mt-4 pt-4 border-t border-blue-800/30">
                            <p className="text-gray-400 text-sm">
                              <span className="text-amber-300 font-semibold">Awards: </span>
                              <span>{project.awards}</span>
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            id="awards"
            className="md:col-span-4 relative overflow-hidden rounded-3xl p-6 transition-all duration-500 group cursor-pointer"
            style={{
              background: hoveredCard === 'awards' ? 'rgba(59, 130, 246, 0.18)' : 'rgba(15, 23, 42, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              boxShadow: hoveredCard === 'awards' ? '0 20px 60px rgba(59, 130, 246, 0.2)' : 'none'
            }}
            onMouseEnter={() => setHoveredCard('awards')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-blue-800/30">
                <Trophy className="text-blue-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">Awards & Recognition</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-h-96 overflow-y-auto pr-2">
              {awards.map((award, i) => {
                const Icon = award.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-gradient-to-br from-blue-800/15 to-slate-800/15 border border-blue-800/30 hover:border-blue-800/50 hover:bg-blue-800/20 transition-all duration-300 hover:scale-105 cursor-pointer shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-blue-800/30 border border-blue-800/40 flex-shrink-0">
                        <Icon className="text-blue-400" size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-bold text-sm leading-tight mb-1">{award.title}</p>
                        <p className="text-gray-400 text-xs">{award.org}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-3xl p-6 transition-all duration-500 group cursor-pointer"
            style={{
              background: hoveredCard === 'location' ? 'rgba(59, 130, 246, 0.18)' : 'rgba(15, 23, 42, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              boxShadow: hoveredCard === 'location' ? '0 20px 60px rgba(59, 130, 246, 0.2)' : 'none'
            }}
            onMouseEnter={() => setHoveredCard('location')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-blue-800/30">
                <MapPin className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Location</h3>
            </div>
            <p className="text-gray-300 text-lg font-semibold">Toronto, ON</p>
            <p className="text-gray-500 text-sm mt-2 flex items-center gap-1">
              <Target size={14} className="text-emerald-400" />
              Open to relocation
            </p>
          </div>

          <div
            className="relative overflow-hidden rounded-3xl p-6 transition-all duration-500 group cursor-pointer"
            style={{
              background: hoveredCard === 'time' ? 'rgba(59, 130, 246, 0.18)' : 'rgba(15, 23, 42, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              boxShadow: hoveredCard === 'time' ? '0 20px 60px rgba(59, 130, 246, 0.2)' : 'none'
            }}
            onMouseEnter={() => setHoveredCard('time')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-blue-800/30">
                <Calendar className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Local Time</h3>
            </div>
            <p className="text-4xl font-bold text-white">
              {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
            </p>
            <p className="text-gray-500 text-sm mt-2">EST (UTC-5)</p>
          </div>

          <div
            className="md:col-span-2 relative overflow-hidden rounded-3xl p-6 transition-all duration-500 group cursor-pointer"
            style={{
              background: hoveredCard === 'cta' ? 'rgba(59, 130, 246, 0.18)' : 'rgba(15, 23, 42, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              boxShadow: hoveredCard === 'cta' ? '0 20px 60px rgba(59, 130, 246, 0.2)' : 'none'
            }}
            onMouseEnter={() => setHoveredCard('cta')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-blue-800/30">
                <Coffee className="text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Interested in AI/ML hardware integration or seeking a dedicated engineering intern? I'd welcome the opportunity to discuss how we can collaborate on innovative projects.
            </p>
            <button
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-800 to-slate-800 text-white font-bold hover:shadow-2xl hover:shadow-blue-800/40 transition-all duration-300 hover:scale-105 border border-blue-800/50"
              onClick={() => window.location.href = 'mailto:alankgabriel2007@gmail.com'}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-end gap-2 px-4 py-3 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 shadow-2xl">
          {dockItems.map((item, i) => {
            const Icon = item.icon;
            const isHovered = hoveredDock === i;
            return (
              <div
                key={i}
                className="relative group"
                onMouseEnter={() => setHoveredDock(i)}
                onMouseLeave={() => setHoveredDock(null)}
              >
                {isHovered && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg whitespace-nowrap border border-slate-700 shadow-lg">
                    {item.label}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-slate-800 border-r border-b border-slate-700" />
                  </div>
                )}
                <button
                  onClick={item.action}
                  className={`p-3 rounded-xl bg-gradient-to-br from-blue-400/30 to-slate-400/30 hover:from-blue-400/40 hover:to-slate-400/40 border border-blue-400/40 hover:border-blue-800/60 transition-all duration-300 ${
                    isHovered ? 'scale-125 -translate-y-2' : 'scale-100'
                  }`}
                  style={{
                    boxShadow: isHovered ? '0 10px 30px rgba(30, 58, 138, 0.4)' : 'none'
                  }}
                >
                  <Icon className="text-blue-400" size={20} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes glare {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(200%) skewX(-20deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes starRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes shine {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
};

export default PersonalBentoSite;
