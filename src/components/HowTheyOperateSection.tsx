import { UserPlus, Target, TrendingUp, Image, ArrowDown } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: 1,
    title: "Create Fake Accounts",
    description: "They create fake Instagram accounts using female names and stolen profile pictures from Pinterest or Google Images.",
    detail: "Common DP types: girls from behind, iPhone mirror selfies, heavily filtered faces",
  },
  {
    icon: Target,
    step: 2,
    title: "Find Easy Targets",
    description: "They target accounts with high follower counts or those who accept any follow requests without verification.",
    detail: "Public accounts with open DMs are prime targets",
  },
  {
    icon: TrendingUp,
    step: 3,
    title: "Grow Stealthily",
    description: "They blend into your follower list quietly. You won't notice the rapid buildup among hundreds of followers.",
    detail: "They often follow many accounts to appear legitimate",
  },
  {
    icon: Image,
    step: 4,
    title: "Use Stolen Images",
    description: "Beginners use faceless photos—girls from back views, iPhone mirror pics—often from Pinterest or Google Images, sometimes edited.",
    detail: "Reverse image search can reveal original sources",
  },
];

export const HowTheyOperateSection = () => {
  return (
    <section id="how-they-operate" className="py-20">
      <div className="container px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-6">
            <TrendingUp className="h-4 w-4" />
            Their Playbook
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How Social Stalkers Operate
          </h2>
          <p className="text-lg text-muted-foreground">
            Understanding their tactics is the first step to protecting yourself. Here's how fake accounts infiltrate your social circle.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-0.5" />

            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step Number */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-lg">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="p-6 rounded-2xl bg-card border border-border shadow-md hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary mb-2">
                      Step {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <div className="p-3 rounded-lg bg-muted/50 text-sm text-muted-foreground">
                      💡 {step.detail}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Examples Box */}
        <div className="max-w-3xl mx-auto mt-16">
          <div className="p-6 rounded-2xl bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Image className="h-5 w-5 text-primary" />
              Common Fake Profile Signs
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-muted/30 border border-border">
                <div className="text-sm font-medium text-foreground mb-2">🖼️ Profile Picture Red Flags</div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Girl facing away from camera</li>
                  <li>• iPhone mirror selfie</li>
                  <li>• Heavily filtered or blurry face</li>
                  <li>• Stock photo appearance</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-muted/30 border border-border">
                <div className="text-sm font-medium text-foreground mb-2">📊 Account Red Flags</div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Very few posts (0-3)</li>
                  <li>• Following thousands, few followers</li>
                  <li>• Generic or empty bio</li>
                  <li>• Recent account creation date</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
