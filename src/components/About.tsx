import { Briefcase, GraduationCap, Code2, Award } from 'lucide-react';

const About = () => {
  const skills = [
    'Python', 'Excel', 'Java', 'SQL', 'C',
    'Racket', 'OCaml', 'R'
  ];

  const experience = [
    {
      title: 'Summer Intern',
      company: 'Susan G. Komen Tissue Bank',
      period: 'May 2024 - August 2025',
      description: 'Completed data-cleanup projects and initiated a text-reminder for donor appointments through RedCap',
    },
    {
      title: 'Computer Science Tutor',
      company: 'Wellesley College Computer Science Department',
      period: 'January 2024 - December 2025',
      description: 'Peer-tutored in weekly office hours and created study materials for review sessions',
    },
    {
      title: 'Crew Member',
      company: 'LiftOff Creamery',
      period: 'May 2025 - August 2025',
      description: 'Served patrons with warm greetings, implemented new workflows, and trained several new employees',
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">About Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My Journey & Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A little about myself, in the academic world I love STEM, and I am a Physics-CS double major. 
            Outside of school, I love to read, crochet, and watch sit/rom coms. 
            I have two pets--a black cat (Rainy) and another black cat (River) and I've grown up in Indianapolis, IN. 
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills */}
          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Technical Skills</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Education</p>
                    <p className="font-medium"> CS & Physics Degree</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-medium">2+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Experience</h3>
            </div>

            <div className="space-y-6">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary border-2 border-border" />
                  <p className="text-xs text-primary font-medium mb-1">{job.period}</p>
                  <h4 className="font-semibold mb-1">{job.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{job.company}</p>
                  <p className="text-sm text-muted-foreground">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
