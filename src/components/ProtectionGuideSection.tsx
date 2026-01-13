import { Shield, Lock, Users, FileText, Instagram, Facebook, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Card, CardContent } from "./ui/card";

const protectionTips = [
  {
    icon: Lock,
    title: "Tighten Privacy Settings",
    tips: [
      "Switch your account to private mode",
      "Enable 'Accounts You Don't Follow' message filter",
      "Turn off activity status visibility",
      "Limit who can see your Stories",
      "Disable location tagging on posts",
    ],
  },
  {
    icon: Users,
    title: "Audit Your Followers",
    tips: [
      "Review your followers list monthly",
      "Remove accounts with suspicious profiles",
      "Block fake or inactive accounts",
      "Report accounts that make you uncomfortable",
      "Don't accept requests from unfamiliar faces",
    ],
  },
  {
    icon: FileText,
    title: "Document & Report",
    tips: [
      "Screenshot suspicious messages and profiles",
      "Keep a log of harassment incidents with dates",
      "Use platform reporting tools",
      "File a police report if threats escalate",
      "Consult with a cybersecurity expert if needed",
    ],
  },
];

const platformGuides = [
  {
    platform: "Instagram",
    icon: Instagram,
    steps: [
      "Go to Settings → Privacy → Account Privacy → Toggle Private Account",
      "Settings → Privacy → Messages → 'Others on Instagram' → Don't Receive Requests",
      "Settings → Privacy → Activity Status → Hide Activity Status",
      "Remove followers: Profile → Followers → Three dots → Remove",
      "Block users: Profile → Three dots → Block → Block Account",
    ],
  },
  {
    platform: "Facebook",
    icon: Facebook,
    steps: [
      "Settings → Privacy → Who can see your posts → Friends or Only Me",
      "Settings → Privacy → Profile Locking → Lock Profile (if available)",
      "Settings → Privacy → How people find you → Limit friend requests",
      "Review tagged photos before they appear on your profile",
      "Block users: Profile → Three dots → Block → Confirm",
    ],
  },
];

export const ProtectionGuideSection = () => {
  return (
    <section id="protection-guide" className="py-20">
      <div className="container px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            Your Defense Plan
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Protection Guide
          </h2>
          <p className="text-lg text-muted-foreground">
            Take control of your digital safety with these actionable steps to protect yourself from stalkers.
          </p>
        </div>

        {/* Protection Tips Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {protectionTips.map((tip, index) => (
            <Card
              key={tip.title}
              className="border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                  <tip.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">{tip.title}</h3>
                <ul className="space-y-2">
                  {tip.tips.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Platform-Specific Guides */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Platform-Specific Settings
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            {platformGuides.map((guide) => (
              <AccordionItem
                key={guide.platform}
                value={guide.platform}
                className="border border-border rounded-xl overflow-hidden bg-card"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <guide.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-semibold">{guide.platform} Privacy Settings</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <ol className="space-y-3">
                    {guide.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-sm text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
