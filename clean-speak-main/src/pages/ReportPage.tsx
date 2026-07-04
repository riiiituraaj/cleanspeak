import { useState } from "react";
import { Button } from "@/components/ui/button";
import CameraCapture from "@/components/CameraCapture";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, Upload, MapPin, Camera, AlertCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ReportPage = () => {
  const [formData, setFormData] = useState({
    reportType: "anonymous",
    location: "",
    description: "",
    evidence: null,
    name: "",
    email: "",
    phone: "",
    isUrgent: false
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [capturedFiles, setCapturedFiles] = useState<File[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen gradient-hero flex items-center justify-center p-6">
        <Card className="max-w-lg w-full soft-shadow-lg">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Report Submitted Successfully!
            </h2>
            <p className="text-muted-foreground mb-6">
              Thank you for helping keep our communities clean. Your report has been received and will be forwarded to the appropriate authorities.
            </p>
            <div className="space-y-3">
              <Button 
                className="w-full" 
                onClick={() => setIsSubmitted(false)}
              >
                Submit Another Report
              </Button>
              <Link to="/" className="block">
                <Button variant="outline" className="w-full">
                  Return to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="w-full py-4 px-6 lg:px-12 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold text-foreground">CleanSpeak</span>
          </Link>
          <Link to="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </nav>

      {/* Report Form */}
      <div className="py-12 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Report Illegal Dumping
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Help us keep our communities clean by reporting illegal waste disposal. Your information is secure and can be kept anonymous.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Report Type */}
            <Card className="soft-shadow border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent" />
                  Report Type
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup 
                  value={formData.reportType} 
                  onValueChange={(value) => setFormData({...formData, reportType: value})}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="anonymous" id="anonymous" />
                    <Label htmlFor="anonymous" className="text-foreground">
                      Anonymous Report (Recommended)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="identified" id="identified" />
                    <Label htmlFor="identified" className="text-foreground">
                      Report with Contact Information
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="soft-shadow border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  Location Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="location">Address or Landmark</Label>
                  <Input 
                    id="location"
                    placeholder="Enter the location where illegal dumping occurred"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    required
                  />
                </div>
                <div className="p-4 border border-border rounded-lg bg-muted/30">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Interactive map integration coming soon
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    You'll be able to pin the exact location on a map for more precise reporting.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card className="soft-shadow border-border/50">
              <CardHeader>
                <CardTitle>Incident Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="description">What did you observe?</Label>
                  <Textarea 
                    id="description"
                    placeholder="Please describe the illegal dumping incident in detail..."
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    required
                  />
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="urgent"
                    checked={formData.isUrgent}
                    onCheckedChange={(checked) => setFormData({...formData, isUrgent: checked as boolean})}
                  />
                  <div>
                    <Label htmlFor="urgent" className="text-accent font-medium">
                      This is an urgent environmental hazard
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Check this if the dumping involves hazardous materials or poses immediate danger
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Evidence Upload */}
            <Card className="soft-shadow border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5 text-accent" />
                  Evidence (Optional but Recommended)
                </CardTitle>
              </CardHeader>
              <CardContent>
{showCamera ? (
                  <CameraCapture
                    onCapture={(file, location) => {
                      setCapturedFiles([...capturedFiles, file]);
                      if (location) {
                        setFormData({...formData, location: `${location.lat}, ${location.lng}`});
                      }
                      setShowCamera(false);
                    }}
                    onClose={() => setShowCamera(false)}
                  />
                ) : (
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 smooth-hover">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      Capture or Upload Evidence
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Take photos/videos with GPS tagging or upload existing files
                    </p>
                    <div className="flex gap-3 justify-center">
                      <Button variant="hero" type="button" onClick={() => setShowCamera(true)}>
                        <Camera className="h-4 w-4 mr-2" />
                        Live Capture
                      </Button>
                      <Button variant="outline" type="button">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Files
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Live capture includes GPS tagging • Supported: JPG, PNG, MP4, MOV (Max 50MB)
                    </p>
                    {capturedFiles.length > 0 && (
                      <div className="mt-4 text-sm text-accent">
                        📸 {capturedFiles.length} file(s) captured with GPS
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Contact Information (if not anonymous) */}
            {formData.reportType === "identified" && (
              <Card className="soft-shadow border-border/50">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input 
                      id="phone"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Privacy Notice */}
            <Card className="soft-shadow border-border/50 bg-muted/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Privacy & Security</h4>
                    <p className="text-sm text-muted-foreground">
                      Your report will be forwarded to relevant authorities. Anonymous reports cannot be traced back to you. 
                      If you provide contact information, it will only be used if authorities need clarification about your report.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button type="submit" variant="hero" className="flex-1">
                Submit Report
              </Button>
              <Link to="/" className="flex-1">
                <Button type="button" variant="outline" className="w-full">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;