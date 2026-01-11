import { BookOpen, Rocket, Target, TrendingUp } from 'lucide-react';

const CurrentLearning = () => {
  const learningItems = [
    {
      icon: Rocket,
      title: 'JavaScript',
      description: 'Exploring frontend programming and building high-performance tools.',
      progress: 10,
      status: 'In Progress',
    },
    {
      icon: Target,
      title: 'SQL/Tableau',
      description: 'Studying databases and creating dashboards for personal projects',
      progress: 30,
      status: 'In Progress',
    },
    {
      icon: TrendingUp,
      title: 'Stanford CS221: Artificial Intelligence',
      description: 'Watching AI lectures from Stanford',
      progress: 10.5,
      status: 'Started',
    },
  ];

  const currentProjects = [
    {
      title: 'Knitting a second sock',
      description: 'Finishing a set of socks',
      tech: ['Knitting', 'Yarn', 'Sock'],
    },
    {
      title: 'Recipe Database',
      description: 'SQL database of recipes to practice creating dashboards',
      tech: ['SQL', 'Tableau', 'Excel'],
    },
  ];

  return (
    <section id="learning" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Growth Mindset</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Currently Learning
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I believe in continuous learning. Here's what I'm currently exploring 
            and working on in my spare time.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {learningItems.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover-lift"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {item.status}
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold mb-2">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4">
                {item.description}
              </p>

              {/* Progress bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-primary font-medium">{item.progress}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-amber-400 rounded-full transition-all duration-500"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Current side projects */}
        <div className="glass-card rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-semibold">Side Projects</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {currentProjects.map((project, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <h4 className="font-semibold mb-2">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-background rounded text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentLearning;
