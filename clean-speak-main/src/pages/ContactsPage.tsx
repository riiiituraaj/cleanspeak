import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Shield, Phone, Mail, MapPin, Search, Building, Users, ArrowLeft, ExternalLink } from "lucide-react";

const ContactsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const contacts = [
    {
      id: 1,
      name: "Assam Pollution Control Board (APCB)",
      type: "State Authority",
      address: "Hengrabari Road, Guwahati - 781036, Assam",
      phone: "+91-361-2540041",
      email: "apcb@assampcb.gov.in",
      website: "www.assampcb.nic.in",
      services: ["Pollution Control", "Environmental Monitoring", "Industrial Waste"],
      priority: "high"
    },
    {
      id: 2,
      name: "Guwahati Municipal Corporation",
      type: "Municipal Authority",
      address: "Town Hall, Guwahati - 781001, Assam",
      phone: "+91-361-2540285",
      email: "mayor@gmc.gov.in",
      website: "www.gmc.gov.in",
      services: ["Solid Waste Management", "Street Cleaning", "Public Sanitation"],
      priority: "high"
    },
    {
      id: 3,
      name: "Dibrugarh Municipal Board",
      type: "Municipal Authority",
      address: "A.T. Road, Dibrugarh - 786001, Assam",
      phone: "+91-373-2300234",
      email: "dmb@dibrugarh.gov.in",
      website: "www.dibrugarh.gov.in",
      services: ["Municipal Waste", "Public Health", "Urban Planning"],
      priority: "medium"
    },
    {
      id: 4,
      name: "Jorhat Municipal Board",
      type: "Municipal Authority",
      address: "Garali Road, Jorhat - 785001, Assam",
      phone: "+91-376-2300567",
      email: "jmb@jorhat.gov.in",
      website: "www.jorhat.gov.in",
      services: ["Waste Collection", "Environmental Health", "City Planning"],
      priority: "medium"
    },
    {
      id: 5,
      name: "Silchar Municipal Board",
      type: "Municipal Authority",
      address: "Central Road, Silchar - 788001, Assam",
      phone: "+91-3842-231456",
      email: "smb@silchar.gov.in",
      website: "www.silchar.gov.in",
      services: ["Solid Waste", "Public Sanitation", "Environmental Services"],
      priority: "medium"
    },
    {
      id: 6,
      name: "Central Pollution Control Board (CPCB)",
      type: "Central Authority",
      address: "Parivesh Bhawan, East Arjun Nagar, Delhi - 110032",
      phone: "+91-11-43102030",
      email: "cpcb@nic.in",
      website: "www.cpcb.nic.in",
      services: ["National Pollution Control", "Environmental Standards", "Monitoring"],
      priority: "medium"
    },
    {
      id: 7,
      name: "National Green Tribunal (NGT)",
      type: "Judicial Authority",
      address: "Faridkot House, Copernicus Marg, New Delhi - 110001",
      phone: "+91-11-23352021",
      email: "registrar.ngt@gov.in",
      website: "www.greentribunal.gov.in",
      services: ["Environmental Justice", "Legal Remedies", "Appeals"],
      priority: "low"
    }
  ];

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const priorityColors = {
    high: "destructive" as const,
    medium: "secondary" as const,
    low: "outline" as const
  };

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
            <Link to="/laws">
              <Button variant="ghost">Laws</Button>
            </Link>
            <Link to="/forum">
              <Button variant="ghost">Forum</Button>
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
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent mb-6 smooth-hover">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Contact Authorities
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Directory of environmental authorities and municipal corporations across Assam and India
            </p>
          </div>

          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search by name, location, or services..." 
              className="pl-10 max-w-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <Card className="text-center p-4">
              <Building className="h-8 w-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{contacts.filter(c => c.type.includes('Municipal')).length}</div>
              <div className="text-sm text-muted-foreground">Municipal Bodies</div>
            </Card>
            <Card className="text-center p-4">
              <Shield className="h-8 w-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{contacts.filter(c => c.type.includes('State')).length}</div>
              <div className="text-sm text-muted-foreground">State Authorities</div>
            </Card>
            <Card className="text-center p-4">
              <Users className="h-8 w-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{contacts.filter(c => c.type.includes('Central')).length}</div>
              <div className="text-sm text-muted-foreground">Central Bodies</div>
            </Card>
          </div>

          {/* Contacts Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredContacts.map((contact) => (
              <Card key={contact.id} className="soft-shadow border-border/50 hover:border-primary/20 smooth-hover">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg text-foreground mb-2">
                        {contact.name}
                      </CardTitle>
                      <Badge variant={priorityColors[contact.priority as keyof typeof priorityColors]} className="text-xs">
                        {contact.type}
                      </Badge>
                    </div>
                    {contact.website && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                    <span className="text-sm text-muted-foreground">{contact.address}</span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-accent" />
                    <a 
                      href={`tel:${contact.phone}`} 
                      className="text-sm text-foreground hover:text-accent smooth-hover"
                    >
                      {contact.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-accent" />
                    <a 
                      href={`mailto:${contact.email}`} 
                      className="text-sm text-foreground hover:text-accent smooth-hover"
                    >
                      {contact.email}
                    </a>
                  </div>

                  {/* Services */}
                  <div className="pt-2 border-t border-border">
                    <div className="text-xs text-muted-foreground mb-2">Services:</div>
                    <div className="flex flex-wrap gap-1">
                      {contact.services.map((service, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Emergency Section */}
          <div className="mt-16">
            <Card className="soft-shadow border-border/50 bg-muted/30">
              <CardContent className="p-8 text-center">
                <Phone className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Emergency Environmental Hazard?
                </h3>
                <p className="text-muted-foreground mb-6">
                  For immediate environmental emergencies involving hazardous materials or public health risks
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="destructive" size="lg" asChild>
                    <a href="tel:112">Emergency: 112</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:+91-11-43102030">CPCB Helpline</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;