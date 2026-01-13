import { useState } from "react";
import { Search, Key, UserCheck, AlertTriangle, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const detectionSteps = [
  {
    icon: Search,
    title: "Google Lens on Profile Picture",
    description: "Use reverse image search to find the original source of suspicious profile pictures.",
    steps: [
      "Save or screenshot the profile picture",
      "Open Google Lens or Google Images",
      "Upload or paste the image",
      "Check if the image appears on stock photo sites or other profiles",
      "If found elsewhere, it's likely a fake account",
    ],
    tip: "Most fake accounts use images from Pinterest, WeHeartIt, or Tumblr",
  },
  {
    icon: Key,
    title: "Login Test - Forgot Password",
    description: "Use Instagram's password recovery to reveal partial contact information.",
    steps: [
      "Go to Instagram login page",
      "Enter the suspicious username",
      "Click 'Forgot Password'",
      "View the partially hidden email/phone (e.g., j***@gmail.com)",
      "Compare with known contacts or look for mismatches",
    ],
    tip: "Real accounts typically have recovery info matching their claimed identity",
  },
  {
    icon: UserCheck,
    title: "Cross-Check Information",
    description: "Verify if the account details match real contact information.",
    steps: [
      "Note the first/last letters of revealed email",
      "Check if phone digits match any known contacts",
      "Compare name to email pattern (john@... for 'John Doe')",
      "Look for inconsistencies between name, email, and phone",
      "Mismatches strongly indicate a fake account",
    ],
    tip: "Fake accounts rarely have matching identity information across all fields",
  },
];

export const DetectionTipsSection = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(0);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const toggleStep = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  const toggleCheck = (key: string) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="detection-tips" className="py-20 bg-muted/30">
      <div className="container px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Search className="h-4 w-4" />
            Interactive Toolkit
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            2-Minute Stalker Buster
          </h2>
          <p className="text-lg text-muted-foreground">
            Use these three simple techniques to quickly verify if an account is fake. Each method takes less than a minute.
          </p>
        </div>

        {/* Detection Cards */}
        <div className="max-w-3xl mx-auto space-y-4">
          {detectionSteps.map((step, index) => (
            <Card
              key={step.title}
              className={`border-border overflow-hidden transition-all duration-300 ${
                expandedStep === index ? "shadow-lg border-primary/30" : ""
              }`}
            >
              <CardHeader
                className="cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => toggleStep(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-primary mb-1">Step {index + 1}</div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    {expandedStep === index ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </CardHeader>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedStep === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <CardContent className="pt-0 pb-6">
                  <p className="text-muted-foreground mb-4">{step.description}</p>

                  {/* Steps Checklist */}
                  <div className="space-y-2 mb-4">
                    {step.steps.map((stepItem, stepIndex) => {
                      const key = `${index}-${stepIndex}`;
                      return (
                        <button
                          key={key}
                          onClick={() => toggleCheck(key)}
                          className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 text-left ${
                            checkedItems[key]
                              ? "bg-primary/10 border-primary/30"
                              : "bg-muted/30 border-border hover:border-primary/20"
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                              checkedItems[key]
                                ? "bg-primary border-primary"
                                : "border-muted-foreground/50"
                            }`}
                          >
                            {checkedItems[key] && (
                              <CheckCircle className="h-3 w-3 text-primary-foreground" />
                            )}
                          </div>
                          <span
                            className={`text-sm ${
                              checkedItems[key] ? "text-foreground" : "text-muted-foreground"
                            }`}
                          >
                            {stepItem}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Pro Tip */}
                  <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                    <div className="flex items-start gap-2">
                      <span className="text-lg">💡</span>
                      <span className="text-sm text-muted-foreground">{step.tip}</span>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Safety Warning */}
        <div className="max-w-3xl mx-auto mt-8">
          <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/20 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Safety First:</strong> If you confirm someone is stalking you, prioritize your safety. Document evidence, block the account, and report to the platform. Consider involving authorities if you feel threatened.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
