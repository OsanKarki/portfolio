
import { ChevronDown, ExternalLink, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 

    const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const skills = [
    { title: 'Mobile Development', description: 'Flutter, Dart, Firebase' },
    { title: 'Architecture & Patterns', description: 'Clean Architecture, MVVM, MVC' },
    { title: 'State Management', description: 'Provider, Riverpod, GetX' },
    { title: 'APIs & Integration', description: 'REST, GraphQL, gRPC, SOAP' },
    { title: 'Real-time Communication', description: 'LiveKit, Video/Audio Calling' },
    { title: 'Tools & CI/CD', description: 'Git, Jira, Fastlane, Testing' }
  ];

  const projects = [
    {
      tag: 'Digital Library',
      title: "Let's Read Asia",
      description: "A comprehensive digital library app developed for The Asia Foundation, featuring new features, bug fixes, and client-requested enhancements for better reading experience.",
      gradient: 'from-[#667eea] to-[#764ba2]',
      links: [
        { type: 'android', url: 'https://play.google.com/store/apps/details?id=org.asiafoundation.letsread&hl=en', icon: '🤖' },
        { type: 'ios', url: 'https://apps.apple.com/us/app/lets-read-digital-library/id1549160869', icon: '🍎' }
      ]
    },
    {
      tag: 'Flutter Package',
      title: 'Hamro Pay Package',
      description: "Created and published a Flutter package on pub.dev enabling developers to integrate seamless checkout system for in-app purchases with Hamro Pay.",
      gradient: 'from-[#f093fb] to-[#f5576c]',
      links: [
        { type: 'package', url: 'https://pub.dev/packages/hamropay_flutter', label: 'pub.dev', icon: '📦' }
      ]
    },
    {
      tag: 'Food Delivery',
      title: 'Pokhara Food Delivery',
      description: "Developed Pokhara Food Delivery, a fast and reliable food delivery app in Nepal featuring pre-order functionality, automatic location detection, and seamless UX for local restaurant deliveries in Pokhara.",
      gradient: 'from-[#4facfe] to-[#00f2fe]',
      links: [
        { type: 'android', url: 'https://play.google.com/store/apps/details?id=pokharafooddelivery.nipuna&hl=en', icon: '🤖' },
        { type: 'ios', url: 'https://apps.apple.com/np/app/pokhara-food-delivery/id1487359029', icon: '🍎' }
      ]
    },
    {
      tag: 'E-Commerce',
      title: 'QMB Mart',
      description: "Full-featured e-commerce application for Nigerian client with seamless shopping experience, integrated payment systems, and beautiful product displays.",
      gradient: 'from-[#43e97b] to-[#38f9d7]',
      links: [
        { type: 'android', url: 'https://play.google.com/store/apps/details?id=com.ebt.qmb&hl=en', icon: '🤖' },
        { type: 'ios', url: 'https://apps.apple.com/qa/app/qmb-mart/id6447552447', icon: '🍎' }
      ]
    },
    {
      tag: 'Video Meeting',
      title: 'Hamro Chautari',
      description: "Developed a Zoom-style video meeting plugin using Flutter with host and participant views, meeting controls, and real-time interaction features.",
      gradient: 'from-[#fa709a] to-[#fee140]',
      links: [
        { type: 'web', url: 'https://chautari.hamropatro.com/', label: 'Visit Website', icon: '🌐' }
      ]
    },
    {
      tag: 'Loyalty App',
      title: 'Hi.Pro',
      description: "Loyalty application for Dubai client featuring reward systems, user engagement features, and seamless integration with business operations.",
      gradient: 'from-[#30cfd0] to-[#330867]',
      links: [
        { type: 'android', url: 'https://play.google.com/store/apps/details?id=com.nipuna.loyalty_nazih&hl=en', icon: '🤖' },
        { type: 'ios', url: 'https://apps.apple.com/ae/app/hi-pro-by-nazih/id6479173795', icon: '🍎' }
      ]
    },
    {
      tag: 'Delivery Service',
      title: 'Delexx Delivery',
      description: "Fast and reliable parcel delivery app across Mumbai, featuring real-time tracking, seamless booking, and efficient delivery management system.",
      gradient: 'from-[#a8edea] to-[#fed6e3]',
      links: [
        { type: 'android', url: 'https://play.google.com/store/apps/details?id=com.nipuna.deluxdelivery&hl=en', icon: '🤖' },
        { type: 'ios', url: 'https://apps.apple.com/us/app/delexx/id6445889926', icon: '🍎' }
      ]
    }
  ];


  return (
    <>
  
     
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 px-4 md:px-16 py-8 flex justify-between items-center bg-[rgba(245,245,240,0.95)] backdrop-blur-md z-50 border-b border-[#e0e0d8] animate-slideDown">
        <div className="font-['Crimson_Pro',serif] text-2xl font-semibold tracking-tight relative">
          Osan Karki
          <div className="absolute bottom-[-4px] left-0 w-[30%] h-[2px] bg-[#d4af37]"></div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 list-none">
          {['about', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className={`text-[0.95rem] font-medium relative transition-colors duration-300 hover:text-[#d4af37] after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[1px] after:bg-[#d4af37] after:transition-all after:duration-300 hover:after:w-full ${
                  activeSection === item ? 'text-[#d4af37]' : 'text-[#2d2d2d]'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[rgba(245,245,240,0.98)] backdrop-blur-md py-6 px-8 md:hidden border-b border-[#e0e0d8]">
            {['about', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-3 text-[#2d2d2d] hover:text-[#d4af37] transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center px-4 md:px-16 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full animate-pulse-slow -z-10" />

        <div className="grid md:grid-cols-[1fr_500px] gap-12 md:gap-20 items-center w-full max-w-[1200px] mx-auto animate-fadeInUp">
          <div className="max-w-[800px] order-2 md:order-1">
            <div className="text-[0.9rem] tracking-[3px] uppercase text-[#6b6b6b] mb-6 font-medium">
              Hello, I'm
            </div>
            <h1 className="font-['Crimson_Pro',serif] text-5xl md:text-6xl lg:text-7xl font-light leading-[1.2] mb-8 tracking-tight">
              Osan Karki
              <strong className="block font-semibold bg-gradient-to-r from-[#1a1a1a] to-[#d4af37] bg-clip-text text-transparent mt-2">
                Mobile App Developer
              </strong>
            </h1>
            <p className="text-lg md:text-xl text-[#6b6b6b] mb-8 max-w-[600px] leading-relaxed">
              I craft high-quality mobile applications using Flutter and Dart. Specializing in clean architecture, seamless integrations, and delivering exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-10 py-4 bg-[#1a1a1a] text-[#f5f5f0] font-medium border-2 border-[#1a1a1a] transition-all duration-300 hover:bg-transparent hover:text-[#1a1a1a] hover:-translate-y-0.5"
              >
                View My Work
              </button>
              <a
                href="./Osan_Karki_Resume.pdf"
                download
                className="px-10 py-4 bg-transparent text-[#1a1a1a] font-medium border-2 border-[#1a1a1a] transition-all duration-300 hover:bg-[#1a1a1a] hover:text-[#f5f5f0] hover:-translate-y-0.5 text-center"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mx-auto px-4 md:px-16 py-16 md:py-20">
        <div className="mb-12 animate-fadeInUp">
          <div className="text-[0.85rem] tracking-[2px] uppercase text-[#d4af37] mb-4 font-semibold">
            About Me
          </div>
          <h2 className="font-['Crimson_Pro',serif] text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#1a1a1a]">
            Building with Purpose
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="space-y-6">
            <p className="text-lg text-[#6b6b6b] leading-relaxed">
              I'm a mid-level Flutter developer at Hamro Patro Inc., passionate about building robust mobile applications. With experience across multiple companies and diverse projects, I've honed my skills in mobile development and architectural patterns.
            </p>
            <p className="text-lg text-[#6b6b6b] leading-relaxed">
              My journey includes contributing to major projects like Let's Read Asia, Hamro Chautari, and developing reusable packages for the Flutter community. I focus on clean code, efficient architecture, and creating solutions that make a real impact.
            </p>
            <p className="text-lg text-[#6b6b6b] leading-relaxed">
              From e-commerce platforms to real-time communication apps, I enjoy tackling complex challenges and continuously learning new technologies to deliver exceptional mobile experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 border-l-2 border-[#d4af37] transition-all duration-300 hover:bg-[rgba(212,175,55,0.05)] hover:translate-x-2"
              >
                <h4 className="text-base font-semibold mb-1">{skill.title}</h4>
                <p className="text-sm text-[#6b6b6b] m-0">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-4 md:px-16 py-16 md:py-20 bg-white">
        <div className="mb-12 animate-fadeInUp">
          <div className="text-[0.85rem] tracking-[2px] uppercase text-[#d4af37] mb-4 font-semibold">
            Portfolio
          </div>
          <h2 className="font-['Crimson_Pro',serif] text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#1a1a1a]">
            Selected Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-[#e0e0d8] bg-[#f5f5f0] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden group"
            >
              <div className={`w-full h-[250px] bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <div className="text-xs text-[#d4af37] uppercase tracking-wider mb-2 font-semibold">
                  {project.tag}
                </div>
                <h3 className="font-['Crimson_Pro',serif] text-2xl md:text-3xl mb-4 font-semibold">
                  {project.title}
                </h3>
                <p className="text-[#6b6b6b] leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f5f5f0] border border-[#e0e0d8] text-[#2d2d2d] text-sm font-medium transition-all duration-300 hover:bg-[#1a1a1a] hover:text-[#f5f5f0] hover:border-[#1a1a1a] hover:-translate-y-0.5"
                    >
                      <span className="text-base">{link.icon}</span>
                      {link.label || (link.type === 'android' ? 'Android' : link.type === 'ios' ? 'iOS' : 'Visit')}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 md:px-16 py-16 md:py-20 mx-auto flex justify-center">
        <div className="mx-auto text-center justify-center items-center w-full flex flex-col gap-4 max-w-[700px]">
          <div className="text-[0.85rem] tracking-[2px] uppercase text-[#d4af37] mb-4 font-semibold">
            Get In Touch
          </div>
          <h2 className="font-['Crimson_Pro',serif] text-4xl md:text-5xl lg:text-6xl font-light mb-8">
            Let's Create Something Amazing
          </h2>
          <p className="text-lg md:text-xl text-[#6b6b6b] mb-12 leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <a
              href="mailto:oceankarki10@gmail.com"
              className="px-12 py-5 border-2 border-[#1a1a1a] text-[#1a1a1a] font-semibold transition-all duration-300 hover:bg-[#1a1a1a] hover:text-[#f5f5f0] hover:-translate-y-1"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/osan-karki"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 border-2 border-[#1a1a1a] text-[#1a1a1a] font-semibold transition-all duration-300 hover:bg-[#1a1a1a] hover:text-[#f5f5f0] hover:-translate-y-1"
            >
              LinkedIn Profile
            </a>
            <a
              href="./Osan_Karki_Resume.pdf"
              download
              className="px-12 py-5 border-2 border-[#1a1a1a] text-[#1a1a1a] font-semibold transition-all duration-300 hover:bg-[#1a1a1a] hover:text-[#f5f5f0] hover:-translate-y-1"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
     <footer className="bg-[#1a1a1a] text-[#f5f5f0] px-4 md:px-16 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto gap-8">
          <p>&copy; 2026 Osan Karki. All rights reserved.</p>
          <div className="flex gap-8">
            <a
              href="https://www.linkedin.com/in/osan-karki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f5f5f0] font-medium transition-colors duration-300 hover:text-[#d4af37]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/osankarki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f5f5f0] font-medium transition-colors duration-300 hover:text-[#d4af37]"
            >
              GitHub
            </a>
            <a
              href="mailto:oceankarki10@gmail.com"
              className="text-[#f5f5f0] font-medium transition-colors duration-300 hover:text-[#d4af37]"
            >
              Email
            </a>
          </div>
        </div>
      </footer>

     
  

    </>
  )
}

export default App
