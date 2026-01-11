import { ArrowDown, FileText, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Ambient glow */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p 
          className="text-primary font-medium mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          Hello, I'm
        </p>
        
        <h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          Rachel Claire Henry
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          A student trying to get a job
        </p>

        {/* Social links */}
        <div 
          className="flex items-center justify-center gap-4 mb-12 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href="https://github.com/rchenryy"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-all hover-lift"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/rachel-claire-henry"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-all hover-lift"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:rh107@wellesley.edu"
            className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-all hover-lift"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover-lift"
            aria-label="Resume"
          >
            <FileText className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="opacity-0 animate-fade-up"
          style={{ animationDelay: '0.5s' }}
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
