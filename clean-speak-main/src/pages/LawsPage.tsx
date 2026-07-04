import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Scale, AlertTriangle, IndianRupee, FileText, ArrowLeft } from "lucide-react";

const LawsPage = () => {
  const laws = [
    {
      title: "Environment Protection Act, 1986",
      description: "The umbrella legislation for environmental protection in India, covering prevention and control of environmental pollution.",
      sections: ["Section 15: Penalty for contravention of provisions", "Section 16: Offences by companies"],
      penalties: "Imprisonment up to 5 years or fine up to ₹1,00,000 or both"
    },
    {
      title: "Municipal Solid Wastes Rules, 2000",
      description: "Rules for proper collection, segregation, storage, transportation, processing and disposal of municipal solid wastes.",
      sections: ["Rule 4: Responsibility of municipal authorities", "Rule 6: Authorization for setting up facilities"],
      penalties: "Fine ranging from ₹500 to ₹5,000 depending on severity"
    },
    {
      title: "Solid Waste Management Rules, 2016",
      description: "Updated comprehensive rules replacing the 2000 rules, with stricter provisions for waste management.",
      sections: ["Rule 15: Duties of waste generators", "Rule 23: Compliance and monitoring"],
      penalties: "Fine up to ₹25,000 for individuals, ₹1,00,000 for institutions"
    }
  ];

  const penalties = [
    {
      violation: "First-time illegal dumping",
      fine: "₹500 - ₹2,000",
      severity: "minor"
    },
    {
      violation: "Repeat offender",
      fine: "₹2,000 - ₹5,000",
      severity: "moderate"
    },
    {
      violation: "Hazardous waste dumping",
      fine: "₹10,000 - ₹50,000",
      severity: "severe"
    },
    {
      violation: "Commercial illegal dumping",
      fine: "₹25,000 - ₹1,00,000",
      severity: "severe"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="w-full py-4 px-6 lg:px-12 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold text-foreground">CleanSpeak</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/forum">
              <Button variant="ghost">Forum</Button>
            </Link>
            <Link to="/contacts">
              <Button variant="ghost">Contacts</Button>
            </Link>
            <Link to="/report">
              <Button variant="hero">Report Now</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="py-12 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent mb-6 smooth-hover">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Waste Management Laws & Penalties
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Understanding India's environmental laws and penalties for illegal waste disposal
            </p>
          </div>

          {/* Laws Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Scale className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-bold text-foreground">Environmental Laws</h2>
            </div>
            
            <div className="grid gap-6">
              {laws.map((law, index) => (
                <Card key={index} className="soft-shadow border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl text-foreground">{law.title}</h3>
                        <p className="text-muted-foreground text-base font-normal mt-2">
                          {law.description}
                        </p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Key Sections:</h4>
                      <ul className="space-y-1">
                        {law.sections.map((section, idx) => (
                          <li key={idx} className="text-muted-foreground text-sm">
                            • {section}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium text-foreground">Penalties: </span>
                          <span className="text-muted-foreground">{law.penalties}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Penalties Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <IndianRupee className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-bold text-foreground">Common Penalties</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {penalties.map((penalty, index) => (
                <Card key={index} className="soft-shadow border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-medium text-foreground">{penalty.violation}</h3>
                      <Badge 
                        variant={penalty.severity === 'severe' ? 'destructive' : penalty.severity === 'moderate' ? 'secondary' : 'outline'}
                        className="text-xs"
                      >
                        {penalty.severity}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <IndianRupee className="h-4 w-4 text-accent" />
                      <span className="text-lg font-semibold text-foreground">{penalty.fine}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="soft-shadow border-border/50 bg-muted/30">
              <CardContent className="p-8">
                <AlertTriangle className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Seen Illegal Dumping?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Report it safely and anonymously. Your actions help enforce these laws and protect our environment.
                </p>
                <Link to="/report">
                  <Button variant="hero" size="lg">
                    Report Illegal Dumping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawsPage;