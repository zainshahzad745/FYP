import React, { createContext, useContext, useState } from "react";
// import Signin from '../screens/Signin';

// Define translation data
const translations = {
  en: {
    // Signin Page
    Login: "Login",
    Email: "Enter email",
    EnterPass: "Enter your password",
    Remember: "Remember Me",
    Pass: "Forgot your password?",
    Signin: "Login",
    loginAccount: "Do you have an account?",
    success: "Success",
    loginSuccess: "Login Successful",
    fail: "Login Failed",
    verify: "Please, verify your email before signing in.",
    notVerify: "Email Not Verified",
    ok: "OK",
    // Signup Page
    Register: "Register",
    registerAccount: "Already have an account?",
    Signup: "Create Account",
    Language: "Select Language",
    Logout: "Log out",
    sure: "Are you sure?",
    query: "Enter your query !",
    // SettingModal2 Component
    en: "English",
    ur: "Urdu",
    ps: "Pashto",
    pn: "Punjabi",
    sn: "Sindhi",
    bl: "Balochi",
    ConfirmPass: "Confirm your password",
    Next: "Next",
    Back: "Back to Login",
    passChanged: "Your password have been changed",
    expertOpinion: "Get Expert AI Opinion",
    greeting: "Hi There",
    //date: all general dates,
    //day: all days in a week,
    mainScan: "Recently Scanned",
    wheat: "Wheat",
    peas: "Peas",
    flax: "Flax",
    mustard: "Mustard",
    garlic: "Garlic",
    tomato: "Tomato",
    navbarHome: "Home",
    navbarAskAI: "Ask AI",
    navbarDiagnose: "Contribute",
    navbarScan: "Scan Now",
    headCalculator: "Water Calculator",
    waterText: "Elevating Plant Health with Tailored Watering Guidelines",
    calculate: "Calculate Now!",
    holdTxt: "Hold Tight!",
    waterModaltxt: "Fetching Temperature and Humidity Levels",
    waterData: "Data",
    waterTemp: "Temperature",
    waterHumidity: "Humidity",
    waterLoc: "Location",
    waterDiameter: "Pot Diameter",
    diameter: "Enter here",
    plantType: "Plant Type",
    ap: "Apple",
    bp: "Bell Pepper",
    bb: "Blueberry",
    ch: "Cherry",
    co: "Corn",
    gr: "Grape",
    pe: "Peach",
    po: "Potato",
    rb: "Raspberry",
    sb: "Soyabean",
    sq: "Squash",
    st: "Strawberry",
    to: "Tomato",
    //settingFactor function txt
    waterResult: "Result",
    waterModaltxt1: "Your Plant needs ",
    waterModaltxt2: " of Water Per Day!",
    ml: "ml",
    chatbot: "AI Chatbot",
    chatbox: "I am your Chatbot, how can I help you?",
    response: "botResponse",
    msg1: "hello",
    reply1: "Hi there! How can I assist you today?",
    msg2: "how are you",
    reply2: "I am just a chatbot, but thanks for asking.",
    msg3: "bye",
    reply3: "Goodbye! If you have any more questions, feel free to ask",
    defaultMsg: "I'm sorry, I didn't understand that. Can you please rephrase?",
    uploadImg: "Upload Image",
    saveImg: "Save Image",
    plantName: "Choose Plant Name",
    chooseDisease: "Choose Disease Type",
    item: "Select Item",
    uploadData: "Upload Data",
    analyzeImg: "Analyzing Image",
    detailScreen: "This is the new screen!",
    proposedSol: "Proposed Solution",
    disease: "Disease",
    diseaseType: "DiseaseType:",
    wheatRust: "Wheat Rust",
    mainScantxt: "Your Plant is",
    scanDisease: "Recognized Disease: ",
    crop: "Crop Type: ",
    rabi: "Rabi Crop",
    solution: "Get Solution",
    analyze: "Analyzing.....",
    possibleSol: "Possible Solutions",
    pastScan: "Past Scans",
    title: "Crop Check",
    test: "Have a great day ! 🌱",
    // AddPlantScreen
    Pepper: "Pepper",
    Pomegranate: "Pomegranate",
    Cotton: "Cotton",
    AloeVera: "Aloe Vera",
    Cantaloupe: "Cantaloupe",
    ChickPea: "Chick Pea",
    Mango: "Mango",
    CurryLeaf: "Curry Leaf",
    Disease1_1: "Damping off",
    Disease1_2: "Powdery mildew",
    Disease1_3: "Phytophthora root rot",
    Disease1_4: "Fusarium wilt",
    Disease1_5: "Anthracnose",
    Disease2_1: "Bacterial blight",
    Disease2_2: "Anthracnose",
    Disease2_3: "Pomegranate wilt",
    Disease3_1: "Asochyta blight",
    Disease3_2: "Cercospora leaf spot",
    Disease3_3: "Fusarium wilt",
    Disease3_4: "Bacterial blight",
    Disease4_1: "Leaf spot",
    Disease4_2: "Leaf blight ",
    Disease5_1: "Alternaria leaf blight",
    Disease5_2: "Anthracnose",
    Disease5_3: "Manganese toxicity",
    Disease6_1: "Ascochyta blight",
    Disease6_2: "Bacterial wilt",
    Disease6_3: "Root rot",
    Disease6_4: "Bacterial leaf spot",
    Disease7_1: "Malformation",
    Disease7_2: "Quick decline",
    Disease7_3: "Anthracnose",
    Disease8_1: "Leaf rot",
    Disease8_2: "Yellow edges",
  },

  ur: {
    // Signin
    Login: "لاگ ان",
    Email: "ایمیل درج کریں",
    EnterPass: "پاسورڈ درج کریں",
    Remember: "مجھے یاد رکھیں",
    Pass: "پاسورڈ بھول گئے؟",
    Signin: "سائن ان کریں",
    loginAccount: "کیا آپ کا اکاؤنٹ ہے؟",
    success: "کامیابی",
    loginSuccess: "لاگ ان کامیاب ہوگیا",
    fail: "لاگ ان ناکام",
    verify: "براہ کرم، لاگ ان سے پہلے اپنے ای میل کی تصدیق کریں۔",
    notVerify: "ای میل تصدیق نہیں ہوا",
    ok: "ٹھیک ہے",
    sure: "کیا آپکو منظور ہے؟",
    // Signup Page
    Register: "رجسٹر کریں",
    registerAccount: "پہلے سے اکاؤنٹ ہے؟",
    Signup: "اکاؤنٹ بنائیں",
    Language: "زبان منتخب کریں",
    Logout: "لاگ آوٹ",
    query: "اپنا سوال درج کریں!",
    // SettingModal2 Component
    en: "انگریزی",
    ur: "اردو",
    ps: "پشتو",
    pn: "پنجابی",
    sn: "سندھی",
    bl: "بلوچی",
    // ForgetPassword Page
    ConfirmPass: "اپنا پاسورڈ تصدیق کریں",
    Next: "اگلا",
    Back: "واپس لاگ ان",
    passChanged: "آپ کا پاسورڈ تبدیل کر دیا گیا ہے",
    expertOpinion: "ماہر AI رائے حاصل کریں",
    greeting: "سلام",
    Signup: "اکاؤنٹ بناؤ",
    Logout: "لاگ آؤٹ",
    Next: "اگلا",
    Back: "لاگ ان تے واپس جاو",
    mainScan: "حالیہ اسکین",
    wheat: "گندم",
    peas: "مٹر",
    flax: "السی",
    mustard: "سرسوں",
    garlic: "لہسن",
    tomato: "ٹماٹر",
    navbarHome: "ہوم",
    navbarAskAI: "سے پوچھیں AI",
    navbarDiagnose: "مدد کریں",
    navbarScan: "اسکین کریں",
    headCalculator: "پانی کیلکولیٹر",
    waterText: "مناسب پانی دینے کے رہنما خطوط کے ساتھ پودوں کی صحت کو بڑھانا",
    calculate: "ابھی حساب لگائیں!",
    holdTxt: "!انتظار فرمائیں",
    waterModaltxt: "درجہ حرارت اور گیلاپن کی سطح حاصل کر رہا ہے",
    waterData: "ڈیٹا",
    waterTemp: "درجہ حرارت",
    waterHumidity: "گیلاپن",
    waterLoc: "مقام",
    waterDiameter: "پانی کی گولائی",
    diameter: "یہاں درج کریں",
    plantType: "پلانٹ کی قسم",
    ap: "سیب",
    bp: "شملہ مرچ",
    bb: "بلیوبری",
    ch: "چیری",
    co: "مکئی",
    gr: "انگور",
    po: "آلو",
    pe: "آڑو",
    po: "آلو",
    rb: "رسبری",
    sb: "سویا",
    sq: "کدو",
    st: "سٹرابیری",
    to: "ٹماٹر",
    //settingFactor function txt
    waterResult: "نتیجہ",
    waterModaltxt1: "آپ کی پلانٹ کو",
    waterModaltxt2: "ہر دن پانی کی ضرورت ہے!",
    ml: "ملی لیٹر",
    chatbot: "AI چیٹ بوٹ",
    chatbox: "میں آپ کا چیٹ بوٹ ہوں، آپ کیا مدد کر سکتا ہوں؟",
    response: "بوٹ کی توجہ",
    msg1: "سلام",
    reply1: "ہیلو! آپ کو آج کیسے مدد کر سکتا ہوں؟",
    msg2: "آپ کیسے ہیں",
    reply2: "میں بس ایک چیٹ بوٹ ہوں، لیکن سوال کرنے کے لئے شکریہ.",
    msg3: "خدا حافظ",
    reply3: "خدا حافظ! اگر آپ کے پاس مزید سوالات ہیں تو براہ کرم پوچھیں",
    defaultMsg: "معاف کیجئے، میں نے سمجھا نہیں۔ کیا آپ دوبارہ فرما سکتے ہیں؟",
    uploadImg: "تصویر اپ لوڈ کریں",
    saveImg: "تصویر محفوظ کریں",
    plantName: "پلانٹ نام منتخب کریں",
    chooseDisease: "بیماری کی قسم منتخب کریں",
    item: "آئٹم منتخب کریں",
    uploadData: "ڈیٹا اپ لوڈ کریں",
    analyzeImg: "تصویر کی تجزیہ کرنا",
    detailScreen: "یہ نیا اسکرین ہے!",
    proposedSol: "پیشنگوئی شدہ حل",
    disease: "بیماری",
    diseaseType: "بیماری کی قسم:",
    wheatRust: "گندم کا زنگ",
    mainScantxt: "آپ کا پودا ہے",
    scanDisease: " :تشخیص شدہ بیماری",
    crop: " :فصل کی قسم",
    rabi: "ربی فصل",
    solution: "حل حاصل کریں",
    analyze: "تجزیہ ہو رہا ہے۔۔۔۔",
    possibleSol: "ممکنہ حل",
    pastScan: "گزشتہ اسکینز",
    title: "فصل کی چیک کریں",
    test: "آپ کا دن اچھا گزرے! 🌱",
    // AddPlantScreen
    Pepper: "مرچ",
    Pomegranate: "انار",
    Cotton: "روئی",
    AloeVera: "گھیکوار",
    Cantaloupe: "خربوزہ",
    ChickPea: "چنا",
    Mango: "آم",
    CurryLeaf: "کری پتہ",
    Disease1_1: "ڈیمپنگ آف",
    Disease1_2: "پاؤڈری پھپھوندی",
    Disease1_3: "فائٹوفتھورا جڑ گلنا",
    Disease1_4: "فیوزیریم مرجھاؤ",
    Disease1_5: "انتھراکنوز",
    Disease2_1: "بیکٹیریل بلائٹ",
    Disease2_2: "انتھراکنوز",
    Disease2_3: "انار مرجھاؤ",
    Disease3_1: "ایسوکائٹا بلائٹ",
    Disease3_2: "سرکوسپورا پتہ دھبہ",
    Disease3_3: "فیوزیریم مرجھاؤ",
    Disease3_4: "بیکٹیریل بلائٹ",
    Disease4_1: "پتہ دھب",
    Disease4_2: "پتہ بلائٹ",
    Disease5_1: "الٹرناریا پتہ بلائٹ",
    Disease5_2: "انتھراکنوز",
    Disease5_3: "میگنیز زہریت",
    Disease6_1: "ایسکوکائٹا بلائٹ",
    Disease6_2: "بیکٹیریل مرجھاؤ",
    Disease6_3: "جڑ گلنا",
    Disease6_4: "بیکٹیریل پتہ دھبہ",
    Disease7_1: "بگاڑ",
    Disease7_2: "تیز زوال",
    Disease7_3: "انتھراکنوز",
    Disease8_1: "پتہ سڑن",
    Disease8_2: "پیلے کنارے",
  },

  ps: {
    // Signin Page
    Login: "لاگ ان",
    Email: "ای میل داخل کړئ",
    EnterPass: "خپل پاسورډ داخل کړئ",
    Remember: "یاد ساتئ م",
    Pass: "ستاسو پاسورډ هیر شو؟",
    Signin: "لاگ ان",
    loginAccount: "آیا لرئ اکاؤنټ لرلای سره؟",
    success: "کامیابی",
    loginSuccess: "ننوتل شوې داخله",
    fail: "ناکام شوې داخله",
    verify: "مهرباني وکړئ، خپل برېښنالیک تصدیق کړئ چې ننوتل شوئ",
    notVerify: "برېښنالیک تصدیق نه کړل شوی",
    ok: "ټه خو",
    sure: "کيا ته منظور دی؟",
    query: "د خپلوالی شته ورکړئ!",
    // Signup Page
    Register: "راجسټر کړئ",
    registerAccount: "مخلصې اکاونټ لرل",
    Signup: "اکاونټ جوړول",
    Language: "ژبه غوره کړئ",
    Logout: "پرېږدول",
    // SettingModal2 Component
    en: "انګریزي",
    ur: "اردو",
    ps: "پښتو",
    pn: "پنجابي",
    sn: "سنڌي",
    bl: "بلوچي",
    ConfirmPass: "خپله پاسورډ تصدیق کړئ",
    Next: "بل",
    Back: "پلورل کول",
    passChanged: "ستاسو پاسورډ بدل شول شوی دی",
    expertOpinion: "د اصلاحي هنر منظريه",
    greeting: "سلام",
    mainScan: "نوې پوښتنل شوي",
    wheat: "گندم",
    peas: "مټر",
    flax: "السي",
    mustard: "سرسوں",
    garlic: "لہسن",
    tomato: "ټماټر",
    navbarHome: "کورپاڼه",
    navbarAskAI: "د AI پوښتل",
    navbarDiagnose: "مرضي خوښول",
    navbarScan: "هم زما د پوښتنل",
    headCalculator: "پوښتنل ماشین",
    waterText: "پلانټ صحت پر اوبېندې خبرې",
    calculate: "اوبېندې حساب",
    holdTxt: "انتظار فرمایئ!",
    waterModaltxt: "د دما او ګرمي پیژندل",
    waterData: "معلومات",
    waterTemp: "دما",
    waterHumidity: "ګرمي",
    waterLoc: "ځای",
    waterDiameter: "سره غوښتنې په ډولر",
    diameter: "دلته په دلته",
    plantType: "پلانټ ډول",
    ap: "سیب",
    bp: "شمله مرچ",
    bb: "آبي",
    ch: "چیری",
    co: "کورن",
    gr: "انگور",
    pe: "شفتالو",
    po: "آلو",
    rb: "رسبری",
    sb: "سویا",
    sq: "کدو",
    st: "توت فرنگی",
    to: "ټماټر",
    waterResult: "نتيجه",
    waterModaltxt1: "ستاسو پلانټ د",
    waterModaltxt2: "په ورځ کې اوبه دی اړه!",
    ml: "ملي ليټر",
    chatbot: "AI چټ بټ",
    chatbox: "زه تاسو پر چټ بوټم، زه څنګه مرسته کولای شم؟",
    response: "بوټ جواب",
    msg1: "سلام",
    reply1: "سلام! ستاسو پرېږدولو مخې څه کولای شم؟",
    msg2: "څه مخې؟",
    reply2: "زه څه چټ بوټم، ولی شکریه چې پوښتنه کړی.",
    msg3: "خدا حافظ",
    reply3: "خداحافظ! که تاسو تر څنګه سوالات لرئ، بېخچه پوښتنې چا وکړئ",
    defaultMsg: "بخښنه، زه خوندي نه یې پوهېدلای شم. آیا ممکن ده انعامات د پو",
    uploadImg: "عکس اپلوډ کړئ",
    saveImg: "عکس زماخیږ کړئ",
    plantName: "پودونکی نوم ټاکل",
    chooseDisease: "ناوټي ډول ټاکل",
    item: "توکي ټاکل",
    uploadData: "داډا اپلوډ کړئ",
    analyzeImg: "عکس تجزیہ کول",
    detailScreen: "دا نوی سکرین دی!",
    proposedSol: "پیشنهاد شوی حل",
    disease: "بیماری",
    diseaseType: "بیماری ډول:",
    wheatRust: "وېټ رسټ",
    mainScantxt: "ستاسو پودونکی دی",
    scanDisease: " :شناخت شوی بیماری",
    crop: " :کرپ قسم",
    rabi: "ربی کرپ",
    solution: "حلول ملاتړ شوی",
    analyze: "تجزیه کول...",
    possibleSol: "ممکن حلونه",
    pastScan: "گذشتې څلورنه",
    title: "کرپ چیک",
    test: "زه یوه ښه ورځ لرم! 🌱",
    // AddPlantScreen
    Pepper: "مرچ",
    Pomegranate: "انار",
    Cotton: "پنبې",
    AloeVera: "الوېرا",
    Cantaloupe: "خربوزه",
    ChickPea: "نخود",
    Mango: "ام",
    CurryLeaf: "کري پاڼه",
    Disease1_1: "رېبلو ناروغي",
    Disease1_2: "پوډري خړه",
    Disease1_3: "د فيټوفتورا ريښې ګنده کېدل",
    Disease1_4: "فوزاريم اوبلن کېدل",
    Disease1_5: "انتراکوز",
    Disease2_1: "باکتريايي ناروغي",
    Disease2_2: "انتراکوز",
    Disease2_3: "د انار اوبلن کېدل",
    Disease3_1: "آسکايټا ناروغي",
    Disease3_2: "سيرکوسپورا د پاڼو داغونه",
    Disease3_3: "فوزاريم اوبلن کېدل",
    Disease3_4: "باکتريايي ناروغي",
    Disease4_1: "د پاڼو داغونه",
    Disease4_2: "د پاڼو ناروغي",
    Disease5_1: "آلترناريا د پاڼو ناروغي",
    Disease5_2: "انتراکوز",
    Disease5_3: "د مينګانيزه زهري کېدل",
    Disease6_1: "آسکايټا ناروغي",
    Disease6_2: "باکتريايي اوبلن کېدل",
    Disease6_3: "د ريښې ګنده کېدل",
    Disease6_4: "د پاڼو باکتريايي داغونه",
    Disease7_1: "د ام وده خرابېدل",
    Disease7_2: "چټک وچوالی",
    Disease7_3: "انتراکوز",
    Disease8_1: "د پاڼو ګنده کېدل",
    Disease8_2: "ژېړ څنډې",
  },

  pn: {
    // Signin Page
    Login: "لاگ ان",
    Email: "ای میل داخل کریں",
    EnterPass: "اپنا پاسورڈ داخل کریں",
    Remember: "میں توں یاد رکھوں",
    Pass: "پاسورڈ بھول گئے؟",
    Signin: "لاگ ان",
    loginAccount: "کیا تسیں دا اکاؤنٹ ہے؟",
    success: " کامیابی",
    loginSuccess: "لاگ ان کامیاب",
    fail: "لاگ ان ناکام",
    verify: "براہ کرم، سائن ان کرن توں پہلے اپنا ای میل تصدیق کریں۔",
    notVerify: " ای میل تصدیق نہیں ہوئی",
    ok: "ٹھیک اے",
    sure: "کیا تسیں نوں منظور اے؟",
    query: "اپنا سوال درج کریں!",
    // Signup Page
    Register: "رجسٹر",
    registerAccount: "کیا تسیں دا اکاؤنٹ پہلے ہے؟",
    Signup: "اکاؤنٹ بناؤ",
    Language: "زبان منتخب کرو",
    Logout: "لاگ آؤٹ",
    // SettingModal2 Component
    en: "انگریزی",
    ur: "اردو",
    ps: "پشتو",
    pn: "پنجابی",
    sn: "سندھی",
    bl: "بلوچی",
    ConfirmPass: "اپنا پاسورڈ تصدیق کریں",
    Next: "اگلا",
    Back: "لاگ ان تائید کریں",
    passChanged: "تمہارا پاسورڈ تبدیل کر دیا گیا ہے",
    expertOpinion: "ماہر نظریہ حاصل کریں",
    greeting: "سلام",
    mainScan: "حال ہی میں اسکین ہوئی ہے",
    wheat: "گندم",
    peas: "مٹر",
    flax: "السی",
    mustard: "سرسوں",
    garlic: "لہسن",
    tomato: "ٹماٹر",
    navbarHome: "ہوم",
    navbarAskAI: "AI سے سوال کریں",
    navbarDiagnose: "شراکت دار کریں",
    navbarScan: "ابھی اسکین کریں",
    headCalculator: "پانی کی معیاری ناپ",
    waterText:
      "ترقی یافتہ پلانٹ صحت کو مخصوص پانی کی راہنمائی کے ساتھ بلند کرنا",
    calculate: "ابھی حساب لگائیں!",
    holdTxt: "ٹائٹ رہو!",
    waterModaltxt: "درجہ حرارت اور نمی کی سطح حاصل ہو رہی ہے",
    waterData: "ڈیٹا",
    waterTemp: "درجہ حرارت",
    waterHumidity: "نمی",
    waterLoc: "مقام",
    waterDiameter: "گیند کا قطر",
    diameter: "یہاں درج کریں",
    plantType: "پودے کی قسم",
    ap: "سیب",
    bp: "بیل پیپر",
    bb: "بلیو بیری",
    ch: "چیری",
    co: "مکئی",
    gr: "انگور",
    po: "آلو",
    pe: "آڑو",
    rb: "ریسبری",
    sb: "سویابین",
    sq: "اکرا",
    st: "سٹرابیری",
    to: "ٹماٹر",
    waterResult: "نتیجہ",
    waterModaltxt1: "آپ کے پلانٹ کو",
    waterModaltxt2: "روزانہ پانی کی ضرورت ہے!",
    ml: "ملی لیٹر",
    chatbot: "AI چیٹ بوٹ",
    chatbox: "میں آپ کا چیٹ بوٹ ہوں، آپ کی کیسے مدد کرسکتا ہوں؟",
    response: "بوٹ کی جواب",
    msg1: "ہیلو",
    reply1: "ہائے! آپ کیا مدد کرسکتا ہوں آج؟",
    msg2: "آپ کیسے ہیں",
    reply2: "میں صرف ایک چیٹ بوٹ ہوں، لیکن سوال کرنے کا شکریہ۔",
    msg3: "خدا حافظ",
    reply3: "خدا حافظ! اگر آپ کو کوئی اور سوالات ہوں تو بہتر ہوگا۔",
    defaultMsg: "معاف کریں، میں نے سمجھا نہیں۔ کیا آپ دوبارہ فرما سکتے ہیں؟",
    uploadImg: "تصویر اپ لوڈ کریں",
    saveImg: "تصویر محفوظ کریں",
    plantName: "پلانٹ کا نام منتخب کریں",
    chooseDisease: "بیماری کی قسم منتخب کریں",
    item: "آئٹم منتخب کریں",
    uploadData: "ڈیٹا اپ لوڈ کریں",
    analyzeImg: "تصویر کی تجزیہ کر رہا ہے",
    detailScreen: "یہ نیا اسکرین ہے!",
    proposedSol: "پیشنگوئی شدہ حل",
    disease: "بیماری",
    diseaseType: "بیماری کی قسم:",
    wheatRust: "گندم کا زنگ",
    mainScantxt: "آپ کا پودا ہے",
    scanDisease: " :تشخیص شدہ بیماری",
    crop: " :فصل کی قسم",
    rabi: "ربی کی فصل",
    solution: "حل حاصل کریں",
    analyze: "تجزیہ ہو رہا ہے۔۔۔۔",
    possibleSol: "ممکنہ حل",
    pastScan: "گزشتہ اسکینز",
    title: "فصل کی چیک",
    test : "تسیں اچھا دن گزارو!",
    // AddPlantScreen
    Pepper: "مرچ",
    Pomegranate: "انار",
    Cotton: "روئی",
    AloeVera: "کوار گندل",
    Cantaloupe: "خرپوزہ",
    ChickPea: "چنا",
    Mango: "آم",
    CurryLeaf: "کری پتہ",
    Disease1_1: "دمپنگ آف",
    Disease1_2: "پاؤڈری میلڈو",
    Disease1_3: "فائٹوفتھورا جڑ سڑن",
    Disease1_4: "فوسیریم ولٹ",
    Disease1_5: "انترکنوس",
    Disease2_1: "بیکٹیریل بلائیٹ",
    Disease2_2: "انترکنوس",
    Disease2_3: "انار ولٹ",
    Disease3_1: "ایسوکائیٹا بلائیٹ",
    Disease3_2: "ایسوکائیٹا بلائیٹ",
    Disease3_3: "فوسیریم ولٹ",
    Disease3_4: "بیکٹیریل بلائیٹ",
    Disease4_1: "پتا داغ",
    Disease4_2: "پتا بلائیٹ",
    Disease5_1: "آلٹرناریا پتا بلائیٹ",
    Disease5_2: "انترکنوس",
    Disease5_3: "مینگنیز زہریلا پن",
    Disease6_1: "ایسوکائیٹا بلائیٹ",
    Disease6_2: "بیکٹیریل ولٹ",
    Disease6_3: "جڑ سڑن",
    Disease6_4: "بیکٹیریل پتا داغ",
    Disease7_1: "بگاڑ",
    Disease7_2: "جلدی زوال",
    Disease7_3: "جلدی زوال",
    Disease8_1: "پتا سڑن",
    Disease8_2: "پیلے کنارے",
  },

  sn: {
    // Sigin Page
    Login: "لاگ ان",
    Email: "ايميل دراڪ ڪريو",
    EnterPass: "توهان جو پاس ورڊ دراڪ ڪريو",
    Remember: "مون کي ياد رکيو",
    Pass: "توهان جو پاس ورڊ ڪيو آهيو؟",
    Signin: "لاگ ان",
    loginAccount: "توهان جيڪا اڪائونٽ آهي؟",
    success: "کامیابي",
    loginSuccess: " لاگ ان کامیاب ٿيو",
    fail: " لاگ ان ناکام ٿيو",
    verify: "براه کريو، سائين ٻاڻ کان پهرين توهان جي اي ميل جو تصديق ڪريو",
    notVerify: " اي ميل جو تصديق نه ٿيو",
    ok: "ٽيڪ آهي",
    sure: "ڪيا توهان کي منظور آهي؟",
    query: "توهان جي سوال ٿايلو!",
    // Signup Page
    Register: "رجسٽر",
    registerAccount: "پهرين اڪائونٽ آهي؟",
    Signup: "اڪائونٽ بناو",
    Language: "زبان منتخب ڪريو",
    Logout: "لاگ آئوٽ",
    // SettingModal2 Component
    en: "انگريزي",
    ur: "اردو",
    ps: "پشتو",
    pn: "پنجابي",
    sn: "سنڌي",
    bl: "بلوچي",
    ConfirmPass: "توهان جو پاس ورڊ تصديق ڪريو",
    Next: "اگهيندي",
    Back: "لاگ ان تائيد ڪريو",
    passChanged: "توهان جو پاس ورڊ بدل ڪريو",
    expertOpinion: "ماهر سلڪو",
    greeting: "سلام",
    mainScan: "حال ۾ اسڪين ٿيل",
    wheat: "گندو",
    peas: "مٿي",
    flax: "الس",
    mustard: "راي",
    garlic: "لسن",
    tomato: "ٽماٽر",
    navbarHome: "گهري",
    navbarAskAI: "اي اي سان سوال ڪيو",
    navbarDiagnose: "شراڪت",
    navbarScan: "هل ٿيل اسڪين",
    headCalculator: "پاڻي ڪئلڪيوليٽر",
    waterText: "ٻوٽن جي صحت کي مناسب پاڻي ڏيڻ جي هدايتن سان بلند ڪرڻ",
    calculate: "هاڻي حساب لاڳو!",
    holdTxt: "انتظار ڪريو",
    waterModaltxt: "ڪمي ۽ نمي جي سطحون کي ڳولڻ ۾",
    waterData: "ڊيٽا",
    waterTemp: "درجه حرارت",
    waterHumidity: "نمي",
    waterLoc: "مقام",
    waterDiameter: "گمھو ڊايا ميٽر",
    diameter: "ھتان ڏانھن",
    plantType: "پلانٽ جي قسم",
    ap: "سيب",
    bp: "بيل ٽوڪري",
    bb: "بلو بيري",
    ch: "چيري",
    co: "ميڪائي",
    gr: "انگور",
    po: "آلو",
    pe: "آڑو",
    rb: "راسبري",
    sb: "سویا",
    sq: "انھار",
    st: "اسٽرابيري",
    to: "ٽماٽو",
    waterResult: "نتيجو",
    waterModaltxt1: "توهان جي پلانٽ کي",
    waterModaltxt2: "پر دن مان پاڻي جي ضرورت آهي!",
    ml: "ميلي ليٽر",
    chatbot: "AI چيٽ بوٽ",
    chatbox: "مان توهان جي چيٽ بوٽ آهن؟",
    response: "بوٽ جو جواب",
    msg1: "هيلو",
    reply1: "هيلو! توهان کان کيا مدد ملي سگهو؟",
    msg2: "توهان ڪيئن آهيو",
    reply2: "مونکي صرف ايچ اي چيٽ بوٽ آهي, ليڪن شكريا",
    msg3: "الوداع",
    reply3: "الوداع! جيڪو توهان کان ايه مڪ سوال آهي, اوھان جو سوال ڪريو",
    defaultMsg: "معاف ڪريو, مونکي سمجھي نه آهي. توهان براه ريپريز ڪري سگهو؟",
    uploadImg: "تصوير اپ لوڊ ڪريو",
    saveImg: "تصوير محفوظ ڪريو",
    plantName: "پلانٽ جو نالو چونو",
    chooseDisease: "بيماري جي قسم چونو",
    item: "آئٽم چونو",
    uploadData: "ڊيٽا اپ لوڊ ڪريو",
    analyzeImg: "تصوير جو تجزيو",
    detailScreen: "هي نوين اسڪرين آهي!",
    proposedSol: "پيشڪش شدھ حل",
    disease: "بيماري",
    diseaseType: "بيماري جي قسم",
    wheatRust: "گندم جو رسٽ",
    mainScantxt: "توهان جي پلانٽ آهي",
    scanDisease: " :شناختيل بيماري",
    crop: " :فصل جو قسم",
    rabi: "ربي کي فصل",
    solution: "حل",
    analyze: "تجزيو ۾ آهي.....",
    possibleSol: "ممڪنه حلن",
    pastScan: "گذشتي اسڪين",
    title: "فصل جي جاچ",
    test : "توهان کي اڏو چو تنوهار ٿا!",
    // AddPlantScreen
    Pepper: "مرچ",
    Pomegranate: "انار",
    Cotton: "ڪپهه",
    AloeVera: "ڪنوار گندلو",
    Cantaloupe: "سردا",
    ChickPea: "چڻا",
    Mango: "آم",
    CurryLeaf: "وڻ جي ٻوڙي",
    Disease1_1: "بوٽن جي سڙي وڃڻ",
    Disease1_2: "فائيٽوفتھورا پاڙ سڙڻ",
    Disease1_3: "فائيٽوفتھورا پاڙ سڙڻ",
    Disease1_4: "فيوسيريم ڪانڊارڻ",
    Disease1_5: "انتراڪنوز",
    Disease2_1: "بيڪٽيريل بلايٽ",
    Disease2_2: "انتراڪنوز",
    Disease2_3: "انار جو ڪانڊارڻ",
    Disease3_1: "اسوڪيٽا بلايٽ",
    Disease3_2: "سرڪوپورا پن جو داغ",
    Disease3_3: " فيوسيريم ڪانڊارڻ",
    Disease3_4: "بيڪٽيريل بلايٽ",
    Disease4_1: "پنن جو داغ",
    Disease4_2: "پنن جو داغ",
    Disease5_1: "الٽرنيريا پنن جو سڙڻ",
    Disease5_2: "انتراڪنوز",
    Disease5_3: "مينگنيز زهريت",
    Disease6_1: "اسڪوچيتا بلايٽ",
    Disease6_2: "بيڪٽيريل ڪانڊارڻ",
    Disease6_3: "پاڙ سڙڻ",
    Disease6_4: "بيڪٽيريل پنن جو داغ",
    Disease7_1: "خراب شڪل",
    Disease7_2: "جلدي سُرڻ",
    Disease7_3: "انتراڪنوز",
    Disease8_1: "پنن جو سڙڻ",
    Disease8_2: "پيلا ڪنارا",
  },

  bl: {
    // Signin Page
    Login: "لاگ ان",
    Email: "ای میل داخل کنگ",
    EnterPass: "پاسورڈ داخل کنگ",
    Remember: "منے یاد رکھنگ",
    Pass: "پاسورڈ بُھلگئے آہن؟",
    Signin: "لاگ ان",
    loginAccount: "کیا توں دی اکاؤنٹ آھی؟",
    success: "کامیابي",
    loginSuccess: "لاگ ان کامیاب شد",
    fail: "لاگ ان ناکام شد ",
    verify: " مہربانی کریں، داخلہ کرن توں پہلے آپنی ای میل تصدیق کریں۔",
    notVerify: " ای میل تصدیق نہیں شد",
    ok: " ٹھیک آہی",
    sure: "توھان مانزور آھی؟",
    query: "آپنی سوال داخل کریں!",
    // Signup Page
    Register: "رجسٹر",
    registerAccount: "پهرين اکاؤنٹ آھی؟",
    Signup: "رجسٹر",
    Language: "زبان منتخب کن",
    Logout: "لاگ آؤٹ",
    // SettingModal2 Component
    en: "انگریزی",
    ur: "اردو",
    ps: "پشتو",
    pn: "پنجابی",
    sn: "سنڌي",
    bl: "بلوچی",
    ConfirmPass: "تصدیق کن پاسورڈ",
    Next: "اگهی",
    Back: "لاگ ان تائید کن",
    passChanged: "توھان جو پاسورڈ تبدیل ڪیو آهی",
    expertOpinion: "ماہر رائے",
    greeting: "سلام",
    mainScan: "حال ۾ اسکین ٿيل",
    wheat: "گندم",
    peas: "مٹر",
    flax: "الس",
    mustard: "رائی",
    garlic: "لسن",
    tomato: "ٹماٹر",
    navbarHome: "اڳيو",
    navbarAskAI: "اي اي کي سوال ڪيو",
    navbarDiagnose: "شراڪت",
    navbarScan: "هل ٿيل اسکین",
    headCalculator: "پاڻي ڪئلڪوليٽر",
    waterText: "پلانٽ صحت کي بنيادي پاڻي جي رہنمائي سان بلند ڪريو",
    calculate: "اوهان کي حساب لاڳو!",
    holdTxt: "انتظار فرمائی",
    waterModaltxt: "درجه حرارت ۽ نمي جي سطحون کي ڳولڻ",
    waterData: "ڊيٽا",
    waterTemp: "درجه حرارت",
    waterHumidity: "نمي",
    waterLoc: "مقام",
    waterDiameter: "گمھو ڊايا ميٽر",
    diameter: "هتان ڏانهن",
    plantType: "پلانٽ جو قسم",
    ap: "سیب",
    bp: "بيل ٽوڪري",
    bb: "بلو بيري",
    ch: "چيري",
    co: "ميڪائي",
    gr: "انگور",
    po: "آلو",
    pe: "چئام",
    rb: "ریسبیری",
    sb: "سویا",
    sq: "چپرکچیں",
    st: "سٹرابیری",
    to: "ٹماٹر",
    waterResult: "نتيجو",
    waterModaltxt1: "توهان جو پلانٽ",
    waterModaltxt2: "پر دن مان پاڻي جي ضرورت آهي!",
    ml: "ميلي ليٽر",
    chatbot: "اي اي چيٽ بوٽ",
    chatbox: "مان توهان جو چيٽ بوٽ آهي؟",
    response: "بوٽ جو جواب",
    msg1: "هيلو",
    reply1: "هيلو! توهان کان کيا مدد ملي سگهو؟",
    msg2: "توهان ڪيئن آهيو",
    reply2: "مونکي صرف ايچ اي چيٽ بوٽ آهي, ليڪن شكريا",
    msg3: "الوداع",
    reply3: "الوداع! جيڪو توهان کان ايه مڪ سوال آهي, اوھان جو سوال ڪريو",
    defaultMsg: "معاف ڪريو, مونکي سمجھي نه آهي. توهان براه ريپريز ڪري سگهو؟",
    uploadImg: "تصوير اپ لوڊ ڪريو",
    saveImg: "تصوير محفوظ ڪريو",
    plantName: "پلانٽ جو نالو چونو",
    chooseDisease: "بيماري جي قسم چونو",
    item: "آئٽم چونو",
    uploadData: "ڊيٽا اپ لوڊ ڪريو",
    analyzeImg: "تصوير جو تجزيو",
    detailScreen: "هي نوين اسڪرين آهي!",
    proposedSol: "پيشڪش شدھ حل",
    disease: "بيماري",
    diseaseType: "بيماري جي قسم",
    wheatRust: "گندم جو رسٽ",
    mainScantxt: "توهان جي پلانٽ آهي",
    scanDisease: " :شناختيل بيماري",
    crop: " :فصل جو قسم",
    rabi: "ربي کي فصل",
    solution: "حل",
    analyze: "تجزيو ۾ آهي.....",
    possibleSol: "ممڪنه حلن",
    pastScan: "گذشتي اسکين",
    title: "فصل جي جاچ",
    test: "تاسو مضبوط دن اوتو!",
    // AddPlantScreen
    Pepper: "مرچ",
    Pomegranate: "انار",
    Cotton: "انار",
    AloeVera: "کوار گندل",
    Cantaloupe: "گرما",
    ChickPea: "چھولے",
    Mango: "آم",
    CurryLeaf: "کری پتہ",
    Disease1_1: "ڈیمپنگ آف",
    Disease1_2: "پاؤڈری میلی ڈیو",
    Disease1_3: "فائیٹوفتھرا روٹ روٹ",
    Disease1_4: "فیوزیریم ولٹ",
    Disease1_5: "انتھراکنوز",
    Disease2_1: "بیکٹیریا بلیٹ",
    Disease2_2: "انتھراکنوز",
    Disease2_3: "انار کا ولٹ",
    Disease3_1: "آسکوکائیٹا بلیٹ",
    Disease3_2: "سرکوسپورا لیف سپاٹ",
    Disease3_3: "فیوزیریم ولٹ",
    Disease3_4: "بیکٹیریا بلیٹ",
    Disease4_1: "لیف سپاٹ",
    Disease4_2: "لیف بلیٹ",
    Disease5_1: "الٹرنیریا لیف بلیٹ",
    Disease5_2: "انتھراکنوز",
    Disease5_3: "مینگنیز زہریلاپن",
    Disease6_1: "آسکوکائیٹا بلیٹ",
    Disease6_2: "بیکٹیریا ولٹ",
    Disease6_3: "روٹ روٹ",
    Disease6_4: "بیکٹیریل لیف سپاٹ",
    Disease7_1: "مالفارمیشن",
    Disease7_2: "جلدی کمزوری",
    Disease7_3: "لیف روٹ",
    Disease8_1: "لیف روٹ",
    Disease8_2: "پیلے کنارے",
  },
};
// Create a translation context
const TranslationContext = createContext();

const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // default to English

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
