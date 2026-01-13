import { Heart, Eye, Users, AlertCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const stalkerTypes = [
  {
    icon: Heart,
    title: "Ex-Partners",
    description: "Driven by control and jealousy, they monitor your new relationships and social activities to maintain power over your life.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Eye,
    title: "Strangers",
    description: "Motivated by obsession, they fixate on public profiles, building parasocial relationships and crossing boundaries.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Users,
    title: "Acquaintances",
    description: "Fueled by envy or rivalry, they track your achievements and personal life to compare or gather information.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

export const WhatAreTheySection = () => {
  return (
    <section id="what-are-they" className="py-20 bg-muted/30">
      <div className="container px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <AlertCircle className="h-4 w-4" />
            Understanding the Threat
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Are Social Stalkers?
          </h2>
          <p className="text-lg text-muted-foreground">
            Social stalkers, also known as cyberstalkers, are individuals who anonymously monitor, harass, or intimidate others through social media platforms, emails, and other digital channels.
          </p>
        </div>

        {/* Types Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {stalkerTypes.map((type, index) => (
            <Card 
              key={type.title} 
              className="group border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`inline-flex p-3 rounded-xl ${type.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <type.icon className={`h-6 w-6 ${type.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{type.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Warning Box */}
        <div className="max-w-3xl mx-auto">
          <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-destructive/10 shrink-0">
                <AlertCircle className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">The Risks Are Real</h4>
                <p className="text-muted-foreground text-sm">
                  Cyberstalking can cause severe emotional distress, anxiety, and fear. It often escalates from online monitoring to real-world harassment. Understanding the signs early is crucial for your safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
