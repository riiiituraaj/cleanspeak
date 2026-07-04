import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, MapPin, Users, FileText, Phone, MessageCircle, Globe, ChevronDown, Droplets, CheckCircle, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const HomePage = () => {
  const { language, setLanguage, t } = useLanguage();
  
  const features = [{
    icon: Shield,
    title: t('anonymousReporting'),
    description: t('anonymousReportingDesc')
  }, {
    icon: MapPin,
    title: t('locationMapping'),
    description: t('locationMappingDesc')
  }, {
    icon: Users,
    title: t('communityForum'),
    description: t('communityForumDesc')
  }, {
    icon: FileText,
    title: t('knowLaws'),
    description: t('knowLawsDesc')
  }, {
    icon: Phone,
    title: t('contactAuthorities'),
    description: t('contactAuthoritiesDesc')
  }, {
    icon: MessageCircle,
    title: t('support247'),
    description: t('support247Desc')
  }];
  return <div className="min-h-screen">
      {/* Navigation */}
      <nav className="w-full py-4 px-6 lg:px-12 border-b border-border/50 bg-background/90 backdrop-blur-md sticky top-0 z-50 soft-shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 smooth-hover">
            <Shield className="h-8 w-8 text-accent floating-animation" />
            <span className={`text-2xl font-bold text-foreground ${language === 'as' ? 'assamese-font' : ''}`}>
              {t('heroTitle')}
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-foreground hover:text-accent smooth-hover font-medium ${language === 'as' ? 'assamese-font' : ''}`}>
              {t('home')}
            </Link>
            <Link to="/report" className={`text-foreground hover:text-accent smooth-hover font-medium ${language === 'as' ? 'assamese-font' : ''}`}>
              {t('report')}
            </Link>
            <Link to="/forum" className={`text-foreground hover:text-accent smooth-hover font-medium ${language === 'as' ? 'assamese-font' : ''}`}>
              {t('forum')}
            </Link>
            <Link to="/laws" className={`text-foreground hover:text-accent smooth-hover font-medium ${language === 'as' ? 'assamese-font' : ''}`}>
              {t('laws')}
            </Link>
            <Link to="/contacts" className={`text-foreground hover:text-accent smooth-hover font-medium ${language === 'as' ? 'assamese-font' : ''}`}>
              {t('contact')}
            </Link>
            <Link to="/water-quality" className={`text-foreground hover:text-accent smooth-hover font-medium ${language === 'as' ? 'assamese-font' : ''}`}>
              {t('waterQuality')}
            </Link>
            <Link to="/help" className={`text-foreground hover:text-accent smooth-hover font-medium ${language === 'as' ? 'assamese-font' : ''}`}>
              {language === 'en' ? 'Help' : 'সহায়'}
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  <span className={language === 'as' ? 'assamese-font' : ''}>{t('language')}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  {t('english')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('as')} className="assamese-font">
                  {t('assamese')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/login">
              <Button variant="outline" size="sm" className={language === 'as' ? 'assamese-font' : ''}>
                {t('signIn')}
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="gold" size="sm" className={language === 'as' ? 'assamese-font' : ''}>
                {t('signUp')}
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="slide-up">
            <h1 className={`text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight ${language === 'as' ? 'assamese-font' : ''}`}>
              {t('heroTitle')}
            </h1>
            <p className={`text-xl lg:text-2xl text-accent mb-4 max-w-3xl mx-auto font-semibold ${language === 'as' ? 'assamese-font' : ''}`}>
              {t('heroSubtitle')}
            </p>
            <p className={`text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed ${language === 'as' ? 'assamese-font' : ''}`}>
              {t('heroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/report">
                <Button variant="hero" className={`w-full sm:w-auto pulse-glow ${language === 'as' ? 'assamese-font' : ''}`}>
                  {t('reportNow')}
                </Button>
              </Link>
              <Link to="/water-quality">
                <Button variant="secondary" size="lg" className={`w-full sm:w-auto ${language === 'as' ? 'assamese-font' : ''}`}>
                  {t('waterQuality')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Water Quality Section - Prominent Feature */}
      <section className="py-20 bg-gradient-to-br from-blue-50/50 to-accent/5 border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-br from-blue-500/10 to-accent/10 soft-shadow">
                  <Droplets className="h-8 w-8 text-accent floating-animation" />
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                  {language === 'en' ? 'NEW FEATURE' : 'নতুন বৈশিষ্ট্য'}
                </span>
              </div>
              <h2 className={`text-3xl lg:text-4xl font-bold text-foreground mb-6 ${language === 'as' ? 'assamese-font' : ''}`}>
                {language === 'en' ? 'AI-Powered Water Quality Prediction' : 'AI-চালিত পানীৰ গুণগত মান পূৰ্বাভাস'}
              </h2>
              <p className={`text-lg text-muted-foreground mb-8 leading-relaxed ${language === 'as' ? 'assamese-font' : ''}`}>
                {language === 'en' 
                  ? 'Test water quality parameters and get instant AI-powered predictions about water safety. Protect your community with advanced water analysis technology.'
                  : 'পানীৰ গুণগত মানৰ পেৰামিটাৰ পৰীক্ষা কৰক আৰু পানীৰ সুৰক্ষাৰ বিষয়ে তাৎক্ষণিক AI-চালিত পূৰ্বাভাস লাভ কৰক। উন্নত পানী বিশ্লেষণ প্ৰযুক্তিৰ সৈতে আপোনাৰ সমাজক সুৰক্ষিত কৰক।'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/water-quality">
                  <Button variant="hero" className={`w-full sm:w-auto pulse-glow ${language === 'as' ? 'assamese-font' : ''}`}>
                    {language === 'en' ? 'Test Water Quality' : 'পানীৰ গুণগত মান পৰীক্ষা কৰক'}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100/50 to-accent/10 rounded-2xl soft-shadow flex items-center justify-center">
                <div className="relative">
                  <Droplets className="h-32 w-32 text-accent/60 floating-animation" />
                  <div className="absolute -top-4 -right-4 p-2 bg-emerald-100 rounded-full">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 p-2 bg-blue-100 rounded-full">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 slide-up">
            <h2 className={`text-3xl lg:text-4xl font-bold text-foreground mb-4 ${language === 'as' ? 'assamese-font' : ''}`}>
              {t('featuresTitle')}
            </h2>
            <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${language === 'as' ? 'assamese-font' : ''}`}>
              {t('featuresSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => <Card key={index} className="gradient-card border-border/50 soft-shadow hover:soft-shadow-lg smooth-hover group">
                <CardContent className="p-8 text-center">
                  <feature.icon className="h-12 w-12 text-accent mx-auto mb-4 group-hover:scale-110 smooth-hover" />
                  <h3 className={`text-xl font-semibold text-foreground mb-3 ${language === 'as' ? 'assamese-font' : ''}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-muted-foreground leading-relaxed ${language === 'as' ? 'assamese-font' : ''}`}>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 gamosa-pattern opacity-30"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className={`text-3xl lg:text-4xl font-bold text-foreground mb-6 ${language === 'as' ? 'assamese-font' : ''}`}>
            {t('ctaTitle')}
          </h2>
          <p className={`text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed ${language === 'as' ? 'assamese-font' : ''}`}>
            {t('ctaDescription')}
          </p>
          <Link to="/report">
            <Button variant="hero" className={`pulse-glow ${language === 'as' ? 'assamese-font' : ''}`}>
              {t('startReporting')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer with Gamosa Pattern */}
      <footer className="gamosa-pattern border-t border-accent/30 bg-gradient-to-b from-background to-muted/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-4 smooth-hover">
                <Shield className="h-8 w-8 text-accent floating-animation" />
                <span className={`text-2xl font-bold text-foreground ${language === 'as' ? 'assamese-font' : ''}`}>
                  {t('heroTitle')}
                </span>
              </Link>
              <p className={`text-muted-foreground mb-4 max-w-md leading-relaxed ${language === 'as' ? 'assamese-font' : ''}`}>
                {t('footerDescription')}
              </p>
              <p className={`text-sm text-accent font-medium ${language === 'as' ? 'assamese-font' : ''}`}>
                {t('footerInspired')}
              </p>
            </div>
            
            <div>
              <h4 className={`font-semibold text-foreground mb-4 ${language === 'as' ? 'assamese-font' : ''}`}>
                {t('quickLinks')}
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/report" className={`hover:text-accent smooth-hover ${language === 'as' ? 'assamese-font' : ''}`}>{t('reportDumping')}</Link></li>
                <li><Link to="/forum" className={`hover:text-accent smooth-hover ${language === 'as' ? 'assamese-font' : ''}`}>{t('communityForum')}</Link></li>
                <li><Link to="/laws" className={`hover:text-accent smooth-hover ${language === 'as' ? 'assamese-font' : ''}`}>{t('laws')}</Link></li>
                <li><Link to="/contacts" className={`hover:text-accent smooth-hover ${language === 'as' ? 'assamese-font' : ''}`}>{t('contactAuthorities')}</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className={`font-semibold text-foreground mb-4 ${language === 'as' ? 'assamese-font' : ''}`}>
                {t('support')}
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/about" className={`hover:text-accent smooth-hover ${language === 'as' ? 'assamese-font' : ''}`}>{t('aboutUs')}</Link></li>
                <li><Link to="/privacy" className={`hover:text-accent smooth-hover ${language === 'as' ? 'assamese-font' : ''}`}>{t('privacyPolicy')}</Link></li>
                <li><Link to="/terms" className={`hover:text-accent smooth-hover ${language === 'as' ? 'assamese-font' : ''}`}>{t('termsOfService')}</Link></li>
                <li><Link to="/help" className={`hover:text-accent smooth-hover ${language === 'as' ? 'assamese-font' : ''}`}>{t('helpCenter')}</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-accent/20 mt-12 pt-8 text-center">
            <p className={`text-muted-foreground ${language === 'as' ? 'assamese-font' : ''}`}>
              {t('copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default HomePage;