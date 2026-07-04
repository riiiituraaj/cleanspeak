import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'as';
  setLanguage: (lang: 'en' | 'as') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    home: "Home",
    report: "Report",
    forum: "Forum", 
    laws: "Laws",
    contact: "Contact",
    waterQuality: "Water Quality",
    signIn: "Sign In",
    signUp: "Sign Up",
    
    // Homepage
    heroTitle: "CleanSpeak",
    heroSubtitle: "Raise Your Voice for a Cleaner Tomorrow",
    heroDescription: "Report illegal dumping easily, safely, and anonymously. Together, we can build cleaner, healthier communities across India.",
    reportNow: "Report Now",
    learnMore: "Learn More",
    
    // Features
    featuresTitle: "How CleanSpeak Works",
    featuresSubtitle: "Simple, secure, and effective tools to help you make a difference in your community",
    anonymousReporting: "Anonymous Reporting",
    anonymousReportingDesc: "Report illegal dumping safely and anonymously with photo evidence",
    locationMapping: "Location Mapping", 
    locationMappingDesc: "Pin exact locations on interactive maps for precise reporting",
    communityForum: "Community Forum",
    communityForumDesc: "Join discussions with fellow citizens about local waste issues",
    knowLaws: "Know the Laws",
    knowLawsDesc: "Learn about waste management laws and penalties in your area",
    contactAuthorities: "Contact Authorities",
    contactAuthoritiesDesc: "Direct access to pollution control boards and municipal offices",
    support247: "24/7 Support",
    support247Desc: "Get help from our friendly chatbot anytime, anywhere",
    
    // CTA
    ctaTitle: "Ready to Make a Difference?",
    ctaDescription: "Join thousands of citizens across India who are already using CleanSpeak to report illegal dumping and create cleaner communities.",
    startReporting: "Start Reporting Today",
    
    // Footer
    footerDescription: "Empowering citizens to report illegal dumping and build cleaner, healthier communities across India.",
    footerInspired: "Inspired by the beautiful weaving traditions of Assam",
    quickLinks: "Quick Links",
    support: "Support",
    reportDumping: "Report Dumping",
    aboutUs: "About Us",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    helpCenter: "Help Center",
    copyright: "© 2025 CleanSpeak. Built with care for cleaner communities.",
    
    // Language toggle
    language: "Language",
    english: "English",
    assamese: "অসমীয়া"
  },
  as: {
    // Navigation
    home: "ঘৰ",
    report: "অভিযোগ",
    forum: "মঞ্চ",
    laws: "আইন",
    contact: "যোগাযোগ",
    waterQuality: "পানীৰ গুণগত মান",
    signIn: "প্ৰৱেশ",
    signUp: "নিবন্ধন",
    
    // Homepage
    heroTitle: "ক্লিনস্পীক",
    heroSubtitle: "পৰিষ্কাৰ কাইলৈৰ বাবে আপোনাৰ মাত উঠাওক",
    heroDescription: "অবৈধ আবৰ্জনা নিষ্কাশন সহজে, নিৰাপদে আৰু বেনামীভাৱে অভিযোগ কৰক। একেলগে আমি ভাৰতত পৰিষ্কাৰ, স্বাস্থ্যকৰ সমাজ গঢ়িব পাৰোঁ।",
    reportNow: "এতিয়াই অভিযোগ কৰক",
    learnMore: "অধিক জানক",
    
    // Features
    featuresTitle: "ক্লিনস্পীক কেনেকৈ কাম কৰে",
    featuresSubtitle: "আপোনাৰ সমাজত পৰিৱৰ্তন আনিবলৈ সহজ, সুৰক্ষিত আৰু ফলপ্ৰসূ সঁজুলি",
    anonymousReporting: "বেনামী অভিযোগ",
    anonymousReportingDesc: "ফটো প্ৰমাণৰ সৈতে অবৈধ আবৰ্জনা নিৰাপদে আৰু বেনামীভাৱে অভিযোগ কৰক",
    locationMapping: "স্থান মানচিত্ৰণ",
    locationMappingDesc: "নিখুঁত অভিযোগৰ বাবে আন্তঃক্ৰিয়াশীল মানচিত্ৰত সঠিক স্থান চিহ্নিত কৰক",
    communityForum: "সমাজ মঞ্চ",
    communityForumDesc: "স্থানীয় আবৰ্জনাৰ সমস্যাৰ বিষয়ে সহ নাগৰিকৰ সৈতে আলোচনাত যোগদান কৰক",
    knowLaws: "আইন জানক",
    knowLawsDesc: "আপোনাৰ অঞ্চলত আবৰ্জনা ব্যৱস্থাপনাৰ আইন আৰু দণ্ডৰ বিষয়ে জানক",
    contactAuthorities: "কৰ্তৃপক্ষৰ সৈতে যোগাযোগ",
    contactAuthoritiesDesc: "প্ৰদূষণ নিয়ন্ত্ৰণ বৰ্ড আৰু পৌৰসভা কাৰ্যালয়লৈ প্ৰত্যক্ষ প্ৰৱেশাধিকাৰ",
    support247: "২৪/৭ সহায়তা",
    support247Desc: "যিকোনো সময়, যিকোনো ঠাইত আমাৰ বন্ধুত্বপূৰ্ণ চেটবটৰ পৰা সহায় লওক",
    
    // CTA
    ctaTitle: "পৰিৱৰ্তন আনিবলৈ প্ৰস্তুত?",
    ctaDescription: "ভাৰতৰ হাজাৰ হাজাৰ নাগৰিকৰ সৈতে যোগদান কৰক যিসকলে ইতিমধ্যে অবৈধ আবৰ্জনা অভিযোগ কৰিবলৈ আৰু পৰিষ্কাৰ সমাজ সৃষ্টি কৰিবলৈ ক্লিনস্পীক ব্যৱহাৰ কৰি আছে।",
    startReporting: "আজেই অভিযোগ আৰম্ভ কৰক",
    
    // Footer
    footerDescription: "ভাৰতত অবৈধ আবৰ্জনা নিষ্কাশনৰ অভিযোগ কৰিবলৈ আৰু পৰিষ্কাৰ, স্বাস্থ্যকৰ সমাজ গঢ়িবলৈ নাগৰিকসকলক শক্তিশালী কৰা।",
    footerInspired: "অসমৰ সুন্দৰ বয়ন পৰম্পৰাৰ দ্বাৰা অনুপ্ৰাণিত",
    quickLinks: "দ্ৰুত লিংক",
    support: "সহায়তা",
    reportDumping: "আবৰ্জনাৰ অভিযোগ",
    aboutUs: "আমাৰ বিষয়ে",
    privacyPolicy: "গোপনীয়তা নীতি",
    termsOfService: "সেৱাৰ নিয়ম",
    helpCenter: "সহায় কেন্দ্ৰ",
    copyright: "© ২০২৫ ক্লিনস্পীক। পৰিষ্কাৰ সমাজৰ বাবে যত্নেৰে নিৰ্মিত।",
    
    // Language toggle
    language: "ভাষা",
    english: "English",
    assamese: "অসমীয়া"
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'as'>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};