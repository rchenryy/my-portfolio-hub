import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Yahtzee!',
      description: 'Terminal based interactive Yahtzee! game',
      tags: ['Python', 'OOP'],
      github: 'https://github.com/rchenryy/yahtzee-game',
      featured: true,
    },
    {
      title: 'Book Data',
      description: 'Database of the books I have read since 2021',
      tags: ['SQL', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'JSON', 'A touch of insanity'],
      github: 'https://github.com/rchenryy/book_data',
      live: 'https://rchenryy.github.io/book_data/',
      featured: true,
    },
  ];

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've worked on. Each represents different challenges 
            and solutions in software development and data management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group glass-card rounded-2xl p-6 md:p-8 hover-lift"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Folder className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="View source code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View live site"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-secondary/50 rounded-full text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/rchenryy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            <span>View All Projects on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
