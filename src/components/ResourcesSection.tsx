import { useState } from "react";
import { Phone, ExternalLink, Scale, MessageSquare, Send, CheckCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const hotlines = [
  {
    name: "National Domestic Violence Hotline",
    number: "1-800-799-7233",
    description: "24/7 support for domestic violence including cyberstalking",
  },
  {
    name: "Cyber Civil Rights Initiative",
    number: "844-878-2274",
    description: "Crisis helpline for victims of online abuse",
  },
  {
    name: "StopBullying.gov",
    number: "stopbullying.gov",
    description: "Resources and reporting for online harassment",
  },
];

const resources = [
  {
    name: "Stalking Prevention, Awareness, and Resource Center (SPARC)",
    url: "https://www.stalkingawareness.org",
    description: "Comprehensive stalking awareness resources",
  },
  {
    name: "Without My Consent",
    url: "https://withoutmyconsent.org",
    description: "Legal resources for online harassment victims",
  },
  {
    name: "Electronic Frontier Foundation",
    url: "https://www.eff.org",
    description: "Digital privacy rights and protection guides",
  },
];

export const ResourcesSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="resources" className="py-20 bg-muted/30">
      <div className="container px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-6">
            <Phone className="h-4 w-4" />
            Help & Support
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Resources & Support
          </h2>
          <p className="text-lg text-muted-foreground">
            You're not alone. Access hotlines, legal resources, and connect with organizations that can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Hotlines & Resources */}
          <div className="space-y-6">
            {/* Hotlines */}
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Emergency Hotlines
                </h3>
                <div className="space-y-4">
                  {hotlines.map((hotline) => (
                    <div key={hotline.name} className="p-4 rounded-xl bg-muted/30 border border-border">
                      <div className="font-medium text-foreground mb-1">{hotline.name}</div>
                      <div className="text-primary font-semibold mb-1">{hotline.number}</div>
                      <div className="text-sm text-muted-foreground">{hotline.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Legal Resources */}
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" />
                  Legal & Educational Resources
                </h3>
                <div className="space-y-3">
                  {resources.map((resource) => (
                    <a
                      key={resource.name}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <ExternalLink className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {resource.name}
                        </div>
                        <div className="text-sm text-muted-foreground">{resource.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-border">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Share Your Story (Anonymous)
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Your experience matters. Share anonymously to help others and contribute to our awareness efforts.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="p-4 rounded-full bg-primary/10 mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Thank You</h4>
                  <p className="text-sm text-muted-foreground">
                    Your story has been submitted. We appreciate your courage in sharing.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Name (optional)
                    </label>
                    <Input
                      placeholder="Anonymous"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email (optional, for follow-up)
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Your Experience
                    </label>
                    <Textarea
                      placeholder="Share what happened (your story will remain confidential)..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background resize-none"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground">
                    <Send className="h-4 w-4 mr-2" />
                    Submit Anonymously
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
