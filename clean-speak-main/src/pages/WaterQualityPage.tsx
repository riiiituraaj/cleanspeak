import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Shield, Droplets, AlertTriangle, CheckCircle, ArrowLeft, MapPin, Calendar, Thermometer, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const WaterQualityPage = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    location: "",
    waterSource: "",
    ph: "",
    temperature: "",
    turbidity: "",
    dissolvedOxygen: "",
    conductivity: "",
    totalDissolvedSolids: "",
    alkalinity: "",
    hardness: "",
    chlorine: "",
    fluoride: "",
    nitrates: "",
    phosphates: "",
    bacteria: "",
    coliform: "",
    sulfates: "",
    ammonia: "",
    iron: "",
    manganese: "",
    chlorophyll: "",
    salinity: "",
    suspendedSolids: "",
    biologicalOxygenDemand: "",
    chemicalOxygenDemand: "",
    waterUsage: "",
    nearbyActivities: "",
    seasonalFactors: "",
    additionalNotes: ""
  });
  const [prediction, setPrediction] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const score = Math.floor(Math.random() * 100);
      const quality = score >= 80 ? 'excellent' : score >= 60 ? 'good' : score >= 40 ? 'fair' : 'poor';
      
      setPrediction({
        score,
        quality,
        recommendations: [
          "Consider boiling water before consumption",
          "Test for bacterial contamination",
          "Check nearby pollution sources",
          "Monitor regularly for changes"
        ]
      });
      setIsAnalyzing(false);
      
      toast({
        title: language === 'en' ? "Water Quality Analysis Complete" : "পানীৰ গুণগত মান বিশ্লেষণ সম্পূৰ্ণ",
        description: language === 'en' ? "Your water quality report is ready" : "আপোনাৰ পানীৰ গুণগত মানৰ প্ৰতিবেদন প্ৰস্তুত"
      });
    }, 3000);
  };

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'excellent': return 'text-emerald-600';
      case 'good': return 'text-green-600';
      case 'fair': return 'text-yellow-600';
      default: return 'text-red-600';
    }
  };

  const getQualityBadge = (quality: string) => {
    switch (quality) {
      case 'excellent': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'good': return 'bg-green-100 text-green-800 border-green-200';
      case 'fair': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-red-100 text-red-800 border-red-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Navigation */}
      <nav className="w-full py-4 px-6 lg:px-12 border-b border-border/50 bg-background/90 backdrop-blur-md sticky top-0 z-50 soft-shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 smooth-hover">
            <Shield className="h-8 w-8 text-accent floating-animation" />
            <span className={`text-2xl font-bold text-foreground ${language === 'as' ? 'assamese-font' : ''}`}>
              {t('heroTitle')}
            </span>
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span className={language === 'as' ? 'assamese-font' : ''}>
                {language === 'en' ? 'Back to Home' : 'ঘৰলৈ ঘূৰি যাওক'}
              </span>
            </Button>
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
        {/* Header */}
        <div className="text-center mb-12 slide-up">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-to-br from-blue-500/10 to-accent/10 soft-shadow">
              <Droplets className="h-12 w-12 text-accent floating-animation" />
            </div>
          </div>
          <h1 className={`text-4xl lg:text-5xl font-bold text-foreground mb-4 ${language === 'as' ? 'assamese-font' : ''}`}>
            {language === 'en' ? 'Water Quality Predictor' : 'পানীৰ গুণগত মান পূৰ্বাভাস'}
          </h1>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed ${language === 'as' ? 'assamese-font' : ''}`}>
            {language === 'en' 
              ? 'Analyze water quality parameters and get AI-powered predictions about water safety and recommendations'
              : 'পানীৰ গুণগত মানৰ পেৰামিটাৰ বিশ্লেষণ কৰক আৰু পানীৰ সুৰক্ষা আৰু পৰামৰ্শৰ বিষয়ে AI-চালিত পূৰ্বাভাস লাভ কৰক'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="gradient-card border-border/50 soft-shadow">
            <CardHeader>
              <CardTitle className={`flex items-center gap-2 ${language === 'as' ? 'assamese-font' : ''}`}>
                <MapPin className="h-5 w-5 text-accent" />
                {language === 'en' ? 'Water Sample Details' : 'পানীৰ নমুনাৰ বিৱৰণ'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className={language === 'as' ? 'assamese-font' : ''}>
                      {language === 'en' ? 'Location' : 'স্থান'}
                    </Label>
                    <Input
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      placeholder={language === 'en' ? 'Enter location' : 'স্থান প্ৰবিষ্ট কৰক'}
                      className={language === 'as' ? 'assamese-font' : ''}
                    />
                  </div>
                  <div>
                    <Label className={language === 'as' ? 'assamese-font' : ''}>
                      {language === 'en' ? 'Water Source' : 'পানীৰ উৎস'}
                    </Label>
                    <Select value={formData.waterSource} onValueChange={(value) => setFormData({...formData, waterSource: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder={language === 'en' ? 'Select source' : 'উৎস বাছনি কৰক'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="river">{language === 'en' ? 'River' : 'নদী'}</SelectItem>
                        <SelectItem value="well">{language === 'en' ? 'Well' : 'নলীনাদ'}</SelectItem>
                        <SelectItem value="tap">{language === 'en' ? 'Tap Water' : 'নলৰ পানী'}</SelectItem>
                        <SelectItem value="lake">{language === 'en' ? 'Lake/Pond' : 'হ্ৰদ/পুখুৰী'}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Physical Parameters */}
                <div className="space-y-4">
                  <h3 className={`text-lg font-semibold text-foreground border-b pb-2 ${language === 'as' ? 'assamese-font' : ''}`}>
                    {language === 'en' ? 'Physical Parameters' : 'ভৌতিক পেৰামিটাৰ'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className={`flex items-center gap-2 ${language === 'as' ? 'assamese-font' : ''}`}>
                        <Zap className="h-4 w-4" />
                        pH Level (0-14)
                      </Label>
                      <Input
                        type="number"
                        step="0.1"
                        min="0"
                        max="14"
                        value={formData.ph}
                        onChange={(e) => setFormData({...formData, ph: e.target.value})}
                        placeholder="7.0"
                      />
                    </div>
                    <div>
                      <Label className={`flex items-center gap-2 ${language === 'as' ? 'assamese-font' : ''}`}>
                        <Thermometer className="h-4 w-4" />
                        {language === 'en' ? 'Temperature (°C)' : 'তাপমাত্ৰা (°C)'}
                      </Label>
                      <Input
                        type="number"
                        value={formData.temperature}
                        onChange={(e) => setFormData({...formData, temperature: e.target.value})}
                        placeholder="25"
                      />
                    </div>
                    <div>
                      <Label className={language === 'as' ? 'assamese-font' : ''}>
                        {language === 'en' ? 'Turbidity (NTU)' : 'ঘোলাত্ব (NTU)'}
                      </Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={formData.turbidity}
                        onChange={(e) => setFormData({...formData, turbidity: e.target.value})}
                        placeholder="1.0"
                      />
                    </div>
                    <div>
                      <Label className={language === 'as' ? 'assamese-font' : ''}>
                        {language === 'en' ? 'Total Dissolved Solids (mg/L)' : 'মুঠ দ্ৰৱীভূত কঠিন পদাৰ্থ (mg/L)'}
                      </Label>
                      <Input
                        type="number"
                        value={formData.totalDissolvedSolids}
                        onChange={(e) => setFormData({...formData, totalDissolvedSolids: e.target.value})}
                        placeholder="300"
                      />
                    </div>
                    <div>
                      <Label className={language === 'as' ? 'assamese-font' : ''}>
                        {language === 'en' ? 'Conductivity (μS/cm)' : 'পৰিবাহিতা (μS/cm)'}
                      </Label>
                      <Input
                        type="number"
                        value={formData.conductivity}
                        onChange={(e) => setFormData({...formData, conductivity: e.target.value})}
                        placeholder="500"
                      />
                    </div>
                    <div>
                      <Label className={language === 'as' ? 'assamese-font' : ''}>
                        {language === 'en' ? 'Suspended Solids (mg/L)' : 'ভাসমান কঠিন পদাৰ্থ (mg/L)'}
                      </Label>
                      <Input
                        type="number"
                        value={formData.suspendedSolids}
                        onChange={(e) => setFormData({...formData, suspendedSolids: e.target.value})}
                        placeholder="10"
                      />
                    </div>
                  </div>
                </div>

                {/* Chemical Parameters */}
                <div className="space-y-4">
                  <h3 className={`text-lg font-semibold text-foreground border-b pb-2 ${language === 'as' ? 'assamese-font' : ''}`}>
                    {language === 'en' ? 'Chemical Parameters' : 'ৰাসায়নিক পেৰামিটাৰ'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className={language === 'as' ? 'assamese-font' : ''}>
                        {language === 'en' ? 'Dissolved Oxygen (mg/L)' : 'দ্ৰৱীভূত অক্সিজেন (mg/L)'}
                      </Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={formData.dissolvedOxygen}
                        onChange={(e) => setFormData({...formData, dissolvedOxygen: e.target.value})}
                        placeholder="8.0"
                      />
                    </div>
                    <div>
                      <Label className={language === 'as' ? 'assamese-font' : ''}>
                        {language === 'en' ? 'BOD (mg/L)' : 'BOD (mg/L)'}
                      </Label>
                      <Input
                        type="number"
                        value={formData.biologicalOxygenDemand}
                        onChange={(e) => setFormData({...formData, biologicalOxygenDemand: e.target.value})}
                        placeholder="3"
                      />
                    </div>
                    <div>
                      <Label className={language === 'as' ? 'assamese-font' : ''}>
                        {language === 'en' ? 'COD (mg/L)' : 'COD (mg/L)'}
                      </Label>
                      <Input
                        type="number"
                        value={formData.chemicalOxygenDemand}
                        onChange={(e) => setFormData({...formData, chemicalOxygenDemand: e.target.value})}
                        placeholder="10"
                      />
                    </div>
                    <div>
                      <Label className={language === 'as' ? 'assamese-font' : ''}>
                        {language === 'en' ? 'Alkalinity (mg/L)' : 'ক্ষাৰত্ব (mg/L)'}
                      </Label>
                      <Input
                        type="number"
                        value={formData.alkalinity}
                        onChange={(e) => setFormData({...formData, alkalinity: e.target.value})}
                        placeholder="120"
                      />
                    </div>
                    <div>
                      <Label className={language === 'as' ? 'assamese-font' : ''}>
                        {language === 'en' ? 'Hardness (mg/L CaCO3)' : 'কঠিনত্ব (mg/L CaCO3)'}
                      </Label>
                      <Input
                        type="number"
                        value={formData.hardness}
                        onChange={(e) => setFormData({...formData, hardness: e.target.value})}
                        placeholder="150"
                      />
                    </div>
                    <div>
                      <Label className={language === 'as' ? 'assamese-font' : ''}>
                        {language === 'en' ? 'Chlorine (mg/L)' : 'ক্লোৰিন (mg/L)'}
                      </Label>
                      <Input
                        type="number"
                        step="0.01"
                        value={formData.chlorine}
                        onChange={(e) => setFormData({...formData, chlorine: e.target.value})}
                        placeholder="0.5"
                      />
                    </div>
                  </div>
                </div>

                {/* Mineral Content */}
                <div className="space-y-4">
                  <h3 className={`text-lg font-semibold text-foreground border-b pb-2 ${language === 'as' ? 'assamese-font' : ''}`}>
                    {language === 'en' ? 'Mineral Content' : 'খনিজ পদাৰ্থৰ পৰিমাণ'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className={language === 'as' ? 'assamese-font' : ''}>
                        {language === 'en' ? 'Fluoride (mg/L)' : 'ফ্লোৰাইড (mg/L)'}
                      </Label>
                      <Input
                        type="number"
                        step="0.01"
                        value={formData.fluoride}
                        onChange={(e) => setFormData({...formData, fluoride: e.target.value})}
                        placeholder="0.7"
                      />
                    </div>
                    <div>
                      <Label className={language === 'as' ? 'assamese-font' : ''}>
                        {language === 'en' ? 'Nitrates (mg/L)' : 'নাইট্ৰেট (mg/L)'}
                      </Label>
                      <Input
                        type="number"
                        value={formData.nitrates}
                        onChange={(e) => setFormData({...formData, nitrates: e.target.value})}
                        placeholder="5"
                      />
                    </div>
                    <div>
                      <Label className={language === 'as' ? 'assamese-font' : ''}>
                        {language === 'en' ? 'Phosphates (mg/L)' : 'ফচফেট (mg/L)'}
                      </Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={formData.phosphates}
                        onChange={(e) => setFormData({...formData, phosphates: e.target.value})}
                        placeholder="0.1"
                      />
                    </div>
                    <div>
                      <Label className={language === 'as' ? 'assamese-font' : ''}>
                        {language === 'en' ? 'Sulfates (mg/L)' : 'ছালফেট (mg/L)'}
                      </Label>
                      <Input
                        type="number"
                        value={formData.sulfates}
                        onChange={(e) => setFormData({...formData, sulfates: e.target.value})}
                        placeholder="250"
                      />
                    </div>
                    <div>
                      <Label className={language === 'as' ? 'assamese-font' : ''}>
                        {language === 'en' ? 'Iron (mg/L)' : 'লো (mg/L)'}
                      </Label>
                      <Input
                        type="number"
                        step="0.01"
                        value={formData.iron}
                        onChange={(e) => setFormData({...formData, iron: e.target.value})}
                        placeholder="0.3"
                      />
                    </div>
                    <div>
                      <Label className={language === 'as' ? 'assamese-font' : ''}>
                        {language === 'en' ? 'Manganese (mg/L)' : 'মেংগানিজ (mg/L)'}
                      </Label>
                      <Input
                        type="number"
                        step="0.01"
                        value={formData.manganese}
                        onChange={(e) => setFormData({...formData, manganese: e.target.value})}
                        placeholder="0.05"
                      />
                    </div>
                    <div>
                      <Label className={language === 'as' ? 'assamese-font' : ''}>
                        {language === 'en' ? 'Ammonia (mg/L)' : 'এমোনিয়া (mg/L)'}
                      </Label>
                      <Input
                        type="number"
                        step="0.01"
                        value={formData.ammonia}
                        onChange={(e) => setFormData({...formData, ammonia: e.target.value})}
                        placeholder="0.5"
                      />
                    </div>
                    <div>
                      <Label className={language === 'as' ? 'assamese-font' : ''}>
                        {language === 'en' ? 'Salinity (‰)' : 'লৱণত্ব (‰)'}
                      </Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={formData.salinity}
                        onChange={(e) => setFormData({...formData, salinity: e.target.value})}
                        placeholder="0.5"
                      />
                    </div>
                  </div>
                </div>

                {/* Biological Parameters */}
                <div className="space-y-4">
                  <h3 className={`text-lg font-semibold text-foreground border-b pb-2 ${language === 'as' ? 'assamese-font' : ''}`}>
                    {language === 'en' ? 'Biological Parameters' : 'জৈৱিক পেৰামিটাৰ'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className={language === 'as' ? 'assamese-font' : ''}>
                        {language === 'en' ? 'E. Coli (CFU/100ml)' : 'ই. কলাই (CFU/100ml)'}
                      </Label>
                      <Input
                        type="number"
                        value={formData.bacteria}
                        onChange={(e) => setFormData({...formData, bacteria: e.target.value})}
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <Label className={language === 'as' ? 'assamese-font' : ''}>
                        {language === 'en' ? 'Total Coliform (CFU/100ml)' : 'মুঠ কলিফৰ্ম (CFU/100ml)'}
                      </Label>
                      <Input
                        type="number"
                        value={formData.coliform}
                        onChange={(e) => setFormData({...formData, coliform: e.target.value})}
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <Label className={language === 'as' ? 'assamese-font' : ''}>
                        {language === 'en' ? 'Chlorophyll-a (μg/L)' : 'ক্লোৰোফিল-a (μg/L)'}
                      </Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={formData.chlorophyll}
                        onChange={(e) => setFormData({...formData, chlorophyll: e.target.value})}
                        placeholder="2.0"
                      />
                    </div>
                  </div>
                </div>

                {/* Environmental Context */}
                <div className="space-y-4">
                  <h3 className={`text-lg font-semibold text-foreground border-b pb-2 ${language === 'as' ? 'assamese-font' : ''}`}>
                    {language === 'en' ? 'Environmental Context' : 'পৰিবেশগত প্ৰসংগ'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className={language === 'as' ? 'assamese-font' : ''}>
                        {language === 'en' ? 'Water Usage Type' : 'পানীৰ ব্যৱহাৰৰ ধৰণ'}
                      </Label>
                      <Select value={formData.waterUsage} onValueChange={(value) => setFormData({...formData, waterUsage: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder={language === 'en' ? 'Select usage' : 'ব্যৱহাৰ বাছনি কৰক'} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="drinking">{language === 'en' ? 'Drinking' : 'খোৱা'}</SelectItem>
                          <SelectItem value="irrigation">{language === 'en' ? 'Irrigation' : 'জলসিঞ্চন'}</SelectItem>
                          <SelectItem value="industrial">{language === 'en' ? 'Industrial' : 'ঔদ্যোগিক'}</SelectItem>
                          <SelectItem value="recreational">{language === 'en' ? 'Recreational' : 'বিনোদনৰ বাবে'}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className={language === 'as' ? 'assamese-font' : ''}>
                        {language === 'en' ? 'Seasonal Factors' : 'ঋতুগত কাৰক'}
                      </Label>
                      <Select value={formData.seasonalFactors} onValueChange={(value) => setFormData({...formData, seasonalFactors: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder={language === 'en' ? 'Select season' : 'ঋতু বাছনি কৰক'} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="monsoon">{language === 'en' ? 'Monsoon' : 'বৰষুণ'}</SelectItem>
                          <SelectItem value="winter">{language === 'en' ? 'Winter' : 'শীতকাল'}</SelectItem>
                          <SelectItem value="summer">{language === 'en' ? 'Summer' : 'গ্ৰীষ্মকাল'}</SelectItem>
                          <SelectItem value="post-monsoon">{language === 'en' ? 'Post-Monsoon' : 'বৰষুণৰ পিছত'}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label className={language === 'as' ? 'assamese-font' : ''}>
                      {language === 'en' ? 'Nearby Activities/Pollution Sources' : 'ওচৰৰ কাৰ্যকলাপ/প্ৰদূষণৰ উৎস'}
                    </Label>
                    <Textarea
                      value={formData.nearbyActivities}
                      onChange={(e) => setFormData({...formData, nearbyActivities: e.target.value})}
                      placeholder={language === 'en' ? 'Industries, agriculture, sewage discharge, etc.' : 'উদ্যোগ, কৃষি, নৰ্দমা নিষ্কাশন আদি'}
                      className={language === 'as' ? 'assamese-font' : ''}
                    />
                  </div>
                </div>

                <div>
                  <Label className={language === 'as' ? 'assamese-font' : ''}>
                    {language === 'en' ? 'Additional Notes' : 'অতিৰিক্ত টোকা'}
                  </Label>
                  <Textarea
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
                    placeholder={language === 'en' ? 'Any additional observations...' : 'যিকোনো অতিৰিক্ত পৰ্যবেক্ষণ...'}
                    className={language === 'as' ? 'assamese-font' : ''}
                  />
                </div>

                <Button 
                  type="submit" 
                  className={`w-full pulse-glow ${language === 'as' ? 'assamese-font' : ''}`}
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? (
                    <>
                      <Droplets className="h-4 w-4 mr-2 animate-spin" />
                      {language === 'en' ? 'Analyzing...' : 'বিশ্লেষণ কৰি আছে...'}
                    </>
                  ) : (
                    <>
                      <Zap className="h-4 w-4 mr-2" />
                      {language === 'en' ? 'Analyze Water Quality' : 'পানীৰ গুণগত মান বিশ্লেষণ কৰক'}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            {prediction ? (
              <>
                <Card className="gradient-card border-border/50 soft-shadow">
                  <CardHeader>
                    <CardTitle className={`flex items-center gap-2 ${language === 'as' ? 'assamese-font' : ''}`}>
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                      {language === 'en' ? 'Quality Assessment' : 'গুণগত মান মূল্যায়ন'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-6">
                      <div className={`text-6xl font-bold mb-2 ${getQualityColor(prediction.quality)}`}>
                        {prediction.score}%
                      </div>
                      <Badge className={getQualityBadge(prediction.quality)}>
                        {prediction.quality.toUpperCase()}
                      </Badge>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className={`font-semibold text-foreground ${language === 'as' ? 'assamese-font' : ''}`}>
                        {language === 'en' ? 'Recommendations:' : 'পৰামৰ্শসমূহ:'}
                      </h4>
                      <ul className="space-y-2">
                        {prediction.recommendations.map((rec: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span className={`text-sm text-muted-foreground ${language === 'as' ? 'assamese-font' : ''}`}>
                              {rec}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="gradient-card border-border/50 soft-shadow">
                <CardContent className="p-12 text-center">
                  <Droplets className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
                  <p className={`text-muted-foreground ${language === 'as' ? 'assamese-font' : ''}`}>
                    {language === 'en' 
                      ? 'Enter water quality parameters to get your analysis'
                      : 'আপোনাৰ বিশ্লেষণ পাবলৈ পানীৰ গুণগত মানৰ পেৰামিটাৰ প্ৰবিষ্ট কৰক'
                    }
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Info Card */}
            <Card className="gradient-card border-border/50 soft-shadow">
              <CardHeader>
                <CardTitle className={`flex items-center gap-2 text-accent ${language === 'as' ? 'assamese-font' : ''}`}>
                  <Shield className="h-5 w-5" />
                  {language === 'en' ? 'About Water Quality' : 'পানীৰ গুণগত মানৰ বিষয়ে'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p className={language === 'as' ? 'assamese-font' : ''}>
                  {language === 'en'
                    ? 'Our AI-powered system analyzes multiple water quality parameters to provide comprehensive assessments.'
                    : 'আমাৰ AI-চালিত ব্যৱস্থাই একাধিক পানীৰ গুণগত মানৰ পেৰামিটাৰ বিশ্লেষণ কৰি সামগ্ৰিক মূল্যায়ন প্ৰদান কৰে।'
                  }
                </p>
                <p className={language === 'as' ? 'assamese-font' : ''}>
                  {language === 'en'
                    ? 'Always consult local authorities for official water safety testing and certification.'
                    : 'চৰকাৰী পানীৰ সুৰক্ষা পৰীক্ষা আৰু প্ৰমাণপত্ৰৰ বাবে সদায় স্থানীয় কৰ্তৃপক্ষৰ সৈতে পৰামৰ্শ কৰক।'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterQualityPage;