import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageCircle, Camera, MapPin, Shield, Users, BookOpen, Phone, Search, ChevronRight } from "lucide-react";

const HelpPage = () => {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");

  const faqData = [
    {
      question: language === 'en' ? 'How do I report illegal dumping?' : 'বেআইনি ডাম্পিং কেনেকৈ রিপোৰ্ট কৰিব?',
      answer: language === 'en' 
        ? 'Simply click the "Report Now" button, capture a photo or video with GPS location, and submit your report. You can choose to remain anonymous.'
        : 'কেৱল "এতিয়াই ৰিপোৰ্ট কৰক" বুটামত ক্লিক কৰক, GPS অৱস্থানৰ সৈতে এটা ফটো বা ভিডিঅ লওক, আৰু আপোনাৰ ৰিপোৰ্ট জমা দিয়ক। আপুনি বেনামী থাকিব পাৰে।',
      category: 'reporting'
    },
    {
      question: language === 'en' ? 'Is my report anonymous?' : 'মোৰ ৰিপোৰ্ট বেনামী নেকি?',
      answer: language === 'en'
        ? 'Yes, you can choose to submit reports anonymously. We prioritize your privacy and safety.'
        : 'হয়, আপুনি বেনামীভাৱে ৰিপোৰ্ট জমা দিব পাৰে। আমি আপোনাৰ গোপনীয়তা আৰু নিৰাপত্তাক অগ্ৰাধিকাৰ দিওঁ।',
      category: 'privacy'
    },
    {
      question: language === 'en' ? 'What happens after I submit a report?' : 'মই ৰিপোৰ্ট জমা দিয়াৰ পিছত কি হয়?',
      answer: language === 'en'
        ? 'Your report is reviewed and forwarded to the appropriate authorities. You can track the status if you provided contact details.'
        : 'আপোনাৰ ৰিপোৰ্ট পৰ্যালোচনা কৰা হয় আৰু উপযুক্ত কৰ্তৃপক্ষৰ ওচৰলৈ পঠিওৱা হয়। যদি আপুনি যোগাযোগৰ বিৱৰণ প্ৰদান কৰিছে তেন্তে আপুনি স্থিতি ট্ৰেক কৰিব পাৰে।',
      category: 'process'
    },
    {
      question: language === 'en' ? 'Can I upload photos from my gallery?' : 'মই মোৰ গেলাৰীৰ পৰা ফটো আপলোড কৰিব পাৰোনে?',
      answer: language === 'en'
        ? 'Yes, you can either capture photos/videos directly or upload existing files from your device gallery.'
        : 'হয়, আপুনি হয় ফটো/ভিডিঅ প্ৰত্যক্ষভাৱে তুলিব পাৰে বা আপোনাৰ ডিভাইচ গেলাৰীৰ পৰা বিদ্যমান ফাইল আপলোড কৰিব পাৰে।',
      category: 'technical'
    },
    {
      question: language === 'en' ? 'How accurate is the GPS location?' : 'GPS অৱস্থান কিমান নিখুঁত?',
      answer: language === 'en'
        ? 'GPS location is accurate within 3-5 meters. You can also manually adjust the location on the map if needed.'
        : 'GPS অৱস্থান ৩-৫ মিটাৰৰ ভিতৰত নিখুঁত। প্ৰয়োজন হলে আপুনি মেপত অৱস্থান হস্তচালিতভাৱে সামঞ্জস্য কৰিব পাৰে।',
      category: 'technical'
    },
    {
      question: language === 'en' ? 'What are the penalties for illegal dumping?' : 'বেআইনি ডাম্পিংৰ বাবে কি শাস্তি?',
      answer: language === 'en'
        ? 'Penalties range from ₹500 to ₹5000 for first-time offenders. Repeat offenders may face legal action and higher fines.'
        : 'প্ৰথমবাৰ অপৰাধীৰ বাবে শাস্তি ₹৫০০ৰ পৰা ₹৫০০০ পৰ্যন্ত। পুনৰাবৃত্তি অপৰাধীয়ে আইনী ব্যৱস্থা আৰু অধিক জৰিমানাৰ সন্মুখীন হব পাৰে।',
      category: 'legal'
    }
  ];

  const quickActions = [
    {
      title: language === 'en' ? 'Report Now' : 'এতিয়াই ৰিপোৰ্ট কৰক',
      description: language === 'en' ? 'Start reporting illegal dumping' : 'বেআইনি ডাম্পিং ৰিপোৰ্ট কৰা আৰম্ভ কৰক',
      icon: Camera,
      link: '/report',
      color: 'bg-accent text-accent-foreground'
    },
    {
      title: language === 'en' ? 'Join Forum' : 'ফৰামত যোগদান কৰক',
      description: language === 'en' ? 'Discuss with community' : 'সম্প্ৰদায়ৰ সৈতে আলোচনা কৰক',
      icon: Users,
      link: '/forum',
      color: 'bg-primary text-primary-foreground'
    },
    {
      title: language === 'en' ? 'Know the Laws' : 'আইন জানক',
      description: language === 'en' ? 'Learn about waste management laws' : 'আৱৰ্জনা ব্যৱস্থাপনা আইনৰ বিষয়ে জানক',
      icon: BookOpen,
      link: '/laws',
      color: 'bg-secondary text-secondary-foreground'
    },
    {
      title: language === 'en' ? 'Contact Authorities' : 'কৰ্তৃপক্ষৰ সৈতে যোগাযোগ',
      description: language === 'en' ? 'Find local contact information' : 'স্থানীয় যোগাযোগৰ তথ্য বিচাৰক',
      icon: Phone,
      link: '/contacts',
      color: 'bg-gold text-gold-foreground'
    }
  ];

  const filteredFAQs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8 slide-up">
          <Link to="/">
            <Button variant="ghost" size="sm" className="smooth-hover">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === 'en' ? 'Back to Home' : 'ঘৰলৈ ঘূৰি যাওক'}
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-foreground">
              {language === 'en' ? 'Help Center' : 'সহায় কেন্দ্ৰ'}
            </h1>
            <p className="text-muted-foreground mt-2">
              {language === 'en' 
                ? 'Find answers to common questions and get support'
                : 'সাধাৰণ প্ৰশ্নৰ উত্তৰ বিচাৰক আৰু সহায় লওক'
              }
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <Card className="mb-8 soft-shadow slide-up">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder={language === 'en' ? 'Search help articles...' : 'সহায় প্ৰবন্ধ অনুসন্ধান কৰক...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring smooth-hover"
              />
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickActions.map((action, index) => (
            <Link key={index} to={action.link} className="group">
              <Card className="h-full smooth-hover hover:soft-shadow-lg slide-up floating-animation" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full ${action.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 smooth-hover`}>
                    <action.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{action.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{action.description}</p>
                  <ChevronRight className="w-5 h-5 mx-auto text-muted-foreground group-hover:text-foreground smooth-hover" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* FAQ Section */}
        <Card className="soft-shadow slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-primary" />
              {language === 'en' ? 'Frequently Asked Questions' : 'সঘনাই সোধা প্ৰশ্ন'}
            </CardTitle>
            <CardDescription>
              {language === 'en' 
                ? 'Find quick answers to common questions about CleanSpeak'
                : 'CleanSpeak ৰ বিষয়ে সাধাৰণ প্ৰশ্নৰ দ্ৰুত উত্তৰ বিচাৰক'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {filteredFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-primary smooth-hover">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="shrink-0">
                        {faq.category}
                      </Badge>
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            {filteredFAQs.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">
                  {language === 'en' 
                    ? 'No results found. Try a different search term.'
                    : 'কোনো ফলাফল পোৱা নগল। অন্য অনুসন্ধান শব্দ ব্যৱহাৰ কৰি চেষ্টা কৰক।'
                  }
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Contact Support */}
        <Card className="mt-8 gradient-card soft-shadow slide-up">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Still need help?' : 'এতিয়াও সহায়ৰ প্ৰয়োজন?'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === 'en' 
                ? 'Our chatbot is available 24/7 to assist you with any questions or concerns.'
                : 'আমাৰ চেটবট যিকোনো প্ৰশ্ন বা চিন্তাত সহায় কৰিবলৈ ২ৄ/৭ উপলব্ধ।'
              }
            </p>
            <Button className="hover:scale-105 smooth-hover">
              <MessageCircle className="w-4 h-4 mr-2" />
              {language === 'en' ? 'Chat with Support' : 'সহায়ৰ সৈতে চেট কৰক'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HelpPage;