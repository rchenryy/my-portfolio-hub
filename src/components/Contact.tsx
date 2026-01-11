import { Mail, MapPin, Send, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-primary font-medium mb-2">Let's Connect</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Get In Touch
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12">
          I'm currently open to new opportunities and would love to hear from you. 
          Whether you have a question or just want to say hi, I'll get back to you!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card rounded-xl p-6 hover-lift">
            <div className="p-3 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-medium mb-1">Email</h3>
            <a
              href="mailto:rh107@wellesley.edu"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              rh107@wellesley.edu
            </a>
          </div>

          <div className="glass-card rounded-xl p-6 hover-lift">
            <div className="p-3 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-medium mb-1">Location</h3>
            <p className="text-sm text-muted-foreground">
              Indianapolis, IN
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 hover-lift">
            <div className="p-3 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-medium mb-1">Availability</h3>
            <p className="text-sm text-muted-foreground">
              Open to opportunities
            </p>
          </div>
        </div>

        <Button
          size="lg"
          className="px-8 py-6 text-base font-medium rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover-lift"
          asChild
        >
          <a href="mailto:hello@example.com">
            <Send className="w-5 h-5 mr-2" />
            Send me a message
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
