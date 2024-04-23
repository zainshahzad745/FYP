import React, { createContext, useContext, useState } from 'react';
// import Signin from '../screens/Signin';

// Define translation data
const translations = {
    en: {
        Login: "Login", 
        Email: "Enter email",
        EnterPass: "Enter your password",
        Remember: "Remeber Me",
        Pass: "Forgot your password?",
        Signin: "Login",
    }, 
  
    ur: {
        Login: "لاگ ان",
        Email: "ایمیل درج کریں", 
        EnterPass: "پاسورڈ درج کریں",
        Remember: "مجھے یاد رکھیں", 
        Pass: "پاسورڈ بھول گئے؟", 
        Signin: "سائن ان کریں"
    }, 
  
    ps: {
        Login: "لاگ ان", 
        Email: "ای میل داخل کړئ", 
        EnterPass: "خپل پاسورډ داخل کړئ",
        Remember: "یاد ساتئ م",
        Pass: "ستاسو پاسورډ هیر شو؟",
        Signin: "لاگ ان", 
    }, 
  
    pn : {
        Login: "لاگ ان",
        Email: "ای میل داخل کرو", 
        EnterPass: "اپنا پاس ورڈ داخل کرو",
        Remember: "مینوں یاد رکھو",
        Pass: "تواڈا پاس ورڈ بھُل گیا اے؟",
        Signin: "لاگ ان",
    }, 
  
    sn : {
        Login: "لاگ ان",
        Email: "اي ميل داخل ڪريو", 
        EnterPass: "پنھنجو پاسورڊ داخل ڪريو",
        Remember: "مون کي ياد رکو",
        Pass: "ڇا اوھان جو پاسورڊ وسري ويو آھي؟",
        Signin: "لاگ ان",
    }, 
    bl: {
        Login: "لاگ ان",
        Email: "ای میل داخل کنگ", 
        EnterPass: "اپنا پاسورڈ داخل کنگ",
        Remember: "منے یاد رکھنگ",
        Pass: "تا پاسورڈ بُھلگئے آہن؟",
        Signin: "لاگ ان",
    }
  };
// Create a translation context
const TranslationContext = createContext();

const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // default to English

  const switchLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationProvider;
export { TranslationContext }; 