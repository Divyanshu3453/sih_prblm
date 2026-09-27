import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  // ============================================================
  // ENGLISH
  // ============================================================
  en: {
    translation: {
      // =========================
      // COMMON / NAVBAR
      // =========================
      welcome: "Welcome",
      dashboard: "Dashboard",
      myCows: "My Cows",
      profile: "Profile",
      logout: "Logout",

      // =========================
      // DASHBOARD
      // =========================
      farmDashboard: "Farm dashboard",
      dashboardSubtitle:
        "Monitor your herd health and recent activity.",

      refresh: "Refresh",
      manageCows: "Manage cows",

      totalCows: "Total cows",
      activeCows: "Active cows",
      attentionRequired: "Attention required",
      avgRiskScore: "Average risk score",

      tests: "Tests",
      last30Days: "Last 30 days",
      loadingFarmHealth: "Loading farm health...",
      riskDistribution: "Risk distribution",
      cowsRequiringAttention:
        "Cows requiring attention",
      noHighRiskCows:
        "No high-risk cows currently.",

      pen: "Pen",

      // =========================
      // MY COWS
      // =========================
      cowsSubtitle:
        "View, register and manage your cows.",

      registerCow: "Register cow",
      registerACow: "Register a cow",

      cowId: "Cow ID",
      name: "Name",
      breed: "Breed",
      age: "Age",
      lactationNumber: "Lactation number",
      lactationCycle: "Lactation cycle",
      penNumber: "Pen number",

      cancel: "Cancel",
      saving: "Saving...",
      saveCow: "Save cow",

      searchCow: "Search cows...",
      loadingCows: "Loading cows...",
      noCowsFound: "No cows found.",
      breedNotSet: "Breed not set",

      // =========================
      // RISK LEVELS
      // =========================
      untested: "Untested",
      riskLow: "Low",
      riskMedium: "Medium",
      riskHigh: "High",
      riskCritical: "Critical",

      // =========================
      // COW DETAILS
      // =========================
      loadingCow: "Loading cow...",
      cowNotFound: "Cow not found",

      delete: "Delete",
      back: "Back",

      cowProfile: "Cow profile",
      edit: "Edit",
      saveChanges: "Save changes",

      status: "Status",
      active: "Active",
      inactive: "Inactive",

      currentAssessment: "Current assessment",
      lastTest: "Last test",
      notAssessedYet:
        "This cow has not been assessed yet.",

      startMilkTest: "Start milk test",

      // =========================
      // NEW TEST
      // =========================
      preparingTest: "Preparing test...",

      milkHealthAssessment:
        "Milk health assessment",

      completeObservations:
        "Complete the physical observations before connecting the sensor.",

      startNewTest: "Start a new test",

      testSessionDescription:
        "A test session will be created for this cow and will move through the backend state machine.",

      starting: "Starting...",
      startTest: "Start test",

      // =========================
      // TEST STEPS
      // =========================
      observations: "Observations",
      sensor: "Sensor",
      result: "Result",

      clinicalObservations:
        "Clinical observations",

      observationInstruction:
        "Answer YES only when the abnormal sign is present.",

      yes: "YES",
      no: "NO",

      submitting: "Submitting...",

      continueSensorTest:
        "Continue to sensor test",

      answerEveryQuestion:
        "Please answer every observation question.",

      // =========================
      // OBSERVATION QUESTIONS
      // =========================
      questionOBS001:
        "Is there any swelling in the udder?",

      questionOBS002:
        "Is there any abnormality in the milk?",

      questionOBS003:
        "Is the udder warm or painful to touch?",

      questionOBS004:
        "Does the cow show any signs of discomfort during milking?",

      // =========================
      // TEST PROGRESS / SENSOR
      // =========================
      test: "Test",

      connectingTestSession:
        "Connecting to test session...",

      waitingForDeviceTelemetry:
        "Waiting for device telemetry...",

      waitingForSensorData:
        "Waiting for sensor data...",

      sendingToML:
        "Sending measurements to ML model...",

      calculatingRisk:
        "Calculating clinical risk...",

      assessmentComplete:
        "Assessment complete.",

      assessmentFailed:
        "Assessment failed.",

      assessmentCancelled:
        "Assessment cancelled.",

      processing:
        "Processing...",

      backendState: "Backend state",

      viewResult: "View result",

      returnToDashboard:
        "Return to dashboard",

      hardwareIntegration:
        "Hardware integration",

      hardwareIntegrationDescription:
        "The Bluetooth/IoT device should POST telemetry to",

      usingTestId:
        "using the test ID.",
      welcomeBack: "Welcome back",
loginSubtitle: "Sign in to manage your farm and run assessments.",
language: "Language",
email: "Email",
password: "Password",
signingIn: "Signing in...",
signIn: "Sign in",
newFarmer: "New farmer?",
createAccount: "Create an account",
loadingAssessmentResult: "Loading assessment result...",
assessmentResult: "Assessment result",
cow: "Cow",
finalRiskScore: "Final risk score",
riskLevel: "Risk level",
trend: "Trend",
sensorMeasurements: "Sensor measurements",
temperature: "Temperature",
conductivity: "Conductivity",
aiAnalysis: "AI analysis",
probability: "Probability",
confidence: "Confidence",
model: "Model",
contributingFactors: "Contributing factors",
recommendedActions: "Recommended actions",
priority: "Priority",
clinicalDisclaimer: "Clinical disclaimer",
reportEndpointNote: "Report endpoint is wired in",
mount: "mount",
beforeUsingIt: "in the backend before using it.",
trendImproving: "Improving",
trendStable: "Stable",
trendWorsening: "Worsening",
unknown: "Unknown",
phone: "Phone",
farm: "Farm",
role: "Role",
authenticatedFarmerAccount: "Authenticated farmer account.",
testHistory: "Test History",
previousAssessments: "Previous Assessments",
test: "test",
tests: "tests",
loadingTestHistory: "Loading test history...",
noCompletedTests: "No completed tests found for this cow.",
    },
  },

  // ============================================================
  // HINDI
  // ============================================================
  hi: {
    translation: {
      // =========================
      // COMMON / NAVBAR
      // =========================
      welcome: "स्वागत है",
      dashboard: "डैशबोर्ड",
      myCows: "मेरी गायें",
      profile: "प्रोफ़ाइल",
      logout: "लॉग आउट",

      // =========================
      // DASHBOARD
      // =========================
      farmDashboard: "फार्म डैशबोर्ड",

      dashboardSubtitle:
        "अपने पशुओं के स्वास्थ्य और हाल की गतिविधियों पर नज़र रखें।",

      refresh: "रिफ्रेश",
      manageCows: "गायों का प्रबंधन करें",

      totalCows: "कुल गायें",
      activeCows: "सक्रिय गायें",
      attentionRequired:
        "ध्यान देने की आवश्यकता",

      avgRiskScore:
        "औसत जोखिम स्कोर",

      tests: "जांच",
      last30Days: "पिछले 30 दिन",

      loadingFarmHealth:
        "फार्म स्वास्थ्य लोड हो रहा है...",

      riskDistribution:
        "जोखिम वितरण",

      cowsRequiringAttention:
        "ध्यान देने की आवश्यकता वाली गायें",

      noHighRiskCows:
        "वर्तमान में कोई उच्च जोखिम वाली गाय नहीं है।",

      pen: "पेन",

      // =========================
      // MY COWS
      // =========================
      cowsSubtitle:
        "अपनी गायों को देखें, पंजीकृत करें और प्रबंधित करें।",

      registerCow:
        "गाय पंजीकृत करें",

      registerACow:
        "एक गाय पंजीकृत करें",

      cowId: "गाय आईडी",
      name: "नाम",
      breed: "नस्ल",
      age: "उम्र",

      lactationNumber:
        "दुग्धस्रवण संख्या",

      lactationCycle:
        "दुग्धस्रवण चक्र",

      penNumber:
        "पेन नंबर",

      cancel: "रद्द करें",

      saving:
        "सहेजा जा रहा है...",

      saveCow:
        "गाय सहेजें",

      searchCow:
        "गाय खोजें...",

      loadingCows:
        "गायें लोड हो रही हैं...",

      noCowsFound:
        "कोई गाय नहीं मिली।",

      breedNotSet:
        "नस्ल निर्धारित नहीं है",

      // =========================
      // RISK LEVELS
      // =========================
      untested:
        "जांच नहीं हुई",

      riskLow:
        "कम",

      riskMedium:
        "मध्यम",

      riskHigh:
        "उच्च",

      riskCritical:
        "गंभीर",

      // =========================
      // COW DETAILS
      // =========================
      loadingCow:
        "गाय की जानकारी लोड हो रही है...",

      cowNotFound:
        "गाय नहीं मिली",

      delete:
        "हटाएं",

      back:
        "वापस",

      cowProfile:
        "गाय की प्रोफ़ाइल",

      edit:
        "संपादित करें",

      saveChanges:
        "बदलाव सहेजें",

      status:
        "स्थिति",

      active:
        "सक्रिय",

      inactive:
        "निष्क्रिय",

      currentAssessment:
        "वर्तमान आकलन",

      lastTest:
        "अंतिम जांच",

      notAssessedYet:
        "इस गाय का अभी तक आकलन नहीं किया गया है।",

      startMilkTest:
        "दूध जांच शुरू करें",

      // =========================
      // NEW TEST
      // =========================
      preparingTest:
        "जांच की तैयारी हो रही है...",

      milkHealthAssessment:
        "दूध स्वास्थ्य आकलन",

      completeObservations:
        "सेंसर जोड़ने से पहले शारीरिक निरीक्षण पूरा करें।",

      startNewTest:
        "नई जांच शुरू करें",

      testSessionDescription:
        "इस गाय के लिए एक जांच सत्र बनाया जाएगा और यह बैकएंड प्रक्रिया के अनुसार आगे बढ़ेगा।",

      starting:
        "शुरू हो रहा है...",

      startTest:
        "जांच शुरू करें",

      // =========================
      // TEST STEPS
      // =========================
      observations:
        "निरीक्षण",

      sensor:
        "सेंसर",

      result:
        "परिणाम",

      clinicalObservations:
        "नैदानिक निरीक्षण",

      observationInstruction:
        "केवल तभी हाँ चुनें जब असामान्य लक्षण मौजूद हो।",

      yes:
        "हाँ",

      no:
        "नहीं",

      submitting:
        "जमा किया जा रहा है...",

      continueSensorTest:
        "सेंसर जांच पर जाएं",

      answerEveryQuestion:
        "कृपया प्रत्येक निरीक्षण प्रश्न का उत्तर दें।",

      // =========================
      // OBSERVATION QUESTIONS
      // =========================
      questionOBS001:
        "क्या थन में कोई सूजन है?",

      questionOBS002:
        "क्या दूध में कोई असामान्यता है?",

      questionOBS003:
        "क्या थन छूने पर गर्म या दर्दनाक है?",

      questionOBS004:
        "क्या दूध निकालने के दौरान गाय असहजता के कोई लक्षण दिखाती है?",

      // =========================
      // TEST PROGRESS / SENSOR
      // =========================
      test:
        "जांच",

      connectingTestSession:
        "जांच सत्र से कनेक्ट हो रहा है...",

      waitingForDeviceTelemetry:
        "डिवाइस टेलीमेट्री की प्रतीक्षा हो रही है...",

      waitingForSensorData:
        "सेंसर डेटा की प्रतीक्षा हो रही है...",

      sendingToML:
        "माप ML मॉडल को भेजे जा रहे हैं...",

      calculatingRisk:
        "नैदानिक जोखिम की गणना हो रही है...",

      assessmentComplete:
        "आकलन पूरा हो गया।",

      assessmentFailed:
        "आकलन विफल रहा।",

      assessmentCancelled:
        "आकलन रद्द कर दिया गया।",

      processing:
        "प्रक्रिया जारी है...",

      backendState:
        "बैकएंड स्थिति",

      viewResult:
        "परिणाम देखें",

      returnToDashboard:
        "डैशबोर्ड पर वापस जाएं",

      hardwareIntegration:
        "हार्डवेयर एकीकरण",

      hardwareIntegrationDescription:
        "Bluetooth/IoT डिवाइस को टेलीमेट्री इस पते पर POST करनी चाहिए",

      usingTestId:
        "टेस्ट आईडी का उपयोग करके।",
        welcomeBack: "वापसी पर स्वागत है",
loginSubtitle: "अपने फार्म को प्रबंधित करने और आकलन करने के लिए साइन इन करें।",
language: "भाषा",
email: "ईमेल",
password: "पासवर्ड",
signingIn: "साइन इन हो रहा है...",
signIn: "साइन इन करें",
newFarmer: "नए किसान हैं?",
createAccount: "खाता बनाएँ",
loadingAssessmentResult: "आकलन परिणाम लोड हो रहा है...",
assessmentResult: "आकलन परिणाम",
cow: "गाय",
finalRiskScore: "अंतिम जोखिम स्कोर",
riskLevel: "जोखिम स्तर",
trend: "रुझान",
sensorMeasurements: "सेंसर माप",
temperature: "तापमान",
conductivity: "चालकता",
aiAnalysis: "AI विश्लेषण",
probability: "संभाव्यता",
confidence: "विश्वास स्तर",
model: "मॉडल",
contributingFactors: "योगदान करने वाले कारक",
recommendedActions: "अनुशंसित कार्य",
priority: "प्राथमिकता",
clinicalDisclaimer: "चिकित्सीय अस्वीकरण",
reportEndpointNote: "रिपोर्ट एंडपॉइंट जुड़ा हुआ है",
mount: "माउंट करें",
beforeUsingIt: "इसे उपयोग करने से पहले बैकएंड में।",
trendImproving: "सुधार रहा है",
trendStable: "स्थिर",
trendWorsening: "बिगड़ रहा है",
unknown: "अज्ञात",
phone: "फ़ोन",
farm: "फार्म",
role: "भूमिका",
authenticatedFarmerAccount: "प्रमाणित किसान खाता।",
testHistory: "टेस्ट इतिहास",
previousAssessments: "पिछले परीक्षण",
test: "परीक्षण",
tests: "परीक्षण",
loadingTestHistory: "टेस्ट इतिहास लोड हो रहा है...",
noCompletedTests: "इस गाय के लिए कोई पूर्ण परीक्षण नहीं मिला।",
    },
  },

  // ============================================================
  // BENGALI
  // ============================================================
  bn: {
    translation: {
      // =========================
      // COMMON / NAVBAR
      // =========================
      welcome: "স্বাগতম",
      dashboard: "ড্যাশবোর্ড",
      myCows: "আমার গরু",
      profile: "প্রোফাইল",
      logout: "লগ আউট",

      // =========================
      // DASHBOARD
      // =========================
      farmDashboard:
        "খামার ড্যাশবোর্ড",

      dashboardSubtitle:
        "আপনার গরুগুলোর স্বাস্থ্য এবং সাম্প্রতিক কার্যকলাপ পর্যবেক্ষণ করুন।",

      refresh:
        "রিফ্রেশ",

      manageCows:
        "গরু পরিচালনা করুন",

      totalCows:
        "মোট গরু",

      activeCows:
        "সক্রিয় গরু",

      attentionRequired:
        "মনোযোগ প্রয়োজন",

      avgRiskScore:
        "গড় ঝুঁকি স্কোর",

      tests:
        "পরীক্ষা",

      last30Days:
        "গত ৩০ দিন",

      loadingFarmHealth:
        "খামারের স্বাস্থ্য লোড হচ্ছে...",

      riskDistribution:
        "ঝুঁকির বণ্টন",

      cowsRequiringAttention:
        "যেসব গরুর প্রতি মনোযোগ প্রয়োজন",

      noHighRiskCows:
        "বর্তমানে কোনো উচ্চ ঝুঁকির গরু নেই।",

      pen:
        "পেন",

      // =========================
      // MY COWS
      // =========================
      cowsSubtitle:
        "আপনার গরু দেখুন, নিবন্ধন করুন এবং পরিচালনা করুন।",

      registerCow:
        "গরু নিবন্ধন করুন",

      registerACow:
        "একটি গরু নিবন্ধন করুন",

      cowId:
        "গরু আইডি",

      name:
        "নাম",

      breed:
        "জাত",

      age:
        "বয়স",

      lactationNumber:
        "দুগ্ধদান সংখ্যা",

      lactationCycle:
        "দুগ্ধদান চক্র",

      penNumber:
        "পেন নম্বর",

      cancel:
        "বাতিল করুন",

      saving:
        "সংরক্ষণ করা হচ্ছে...",

      saveCow:
        "গরু সংরক্ষণ করুন",

      searchCow:
        "গরু খুঁজুন...",

      loadingCows:
        "গরু লোড হচ্ছে...",

      noCowsFound:
        "কোনো গরু পাওয়া যায়নি।",

      breedNotSet:
        "জাত নির্ধারণ করা হয়নি",

      // =========================
      // RISK LEVELS
      // =========================
      untested:
        "পরীক্ষা করা হয়নি",

      riskLow:
        "কম",

      riskMedium:
        "মাঝারি",

      riskHigh:
        "উচ্চ",

      riskCritical:
        "গুরুতর",

      // =========================
      // COW DETAILS
      // =========================
      loadingCow:
        "গরুর তথ্য লোড হচ্ছে...",

      cowNotFound:
        "গরু পাওয়া যায়নি",

      delete:
        "মুছে ফেলুন",

      back:
        "পিছনে",

      cowProfile:
        "গরুর প্রোফাইল",

      edit:
        "সম্পাদনা করুন",

      saveChanges:
        "পরিবর্তন সংরক্ষণ করুন",

      status:
        "অবস্থা",

      active:
        "সক্রিয়",

      inactive:
        "নিষ্ক্রিয়",

      currentAssessment:
        "বর্তমান মূল্যায়ন",

      lastTest:
        "শেষ পরীক্ষা",

      notAssessedYet:
        "এই গরুটির এখনও মূল্যায়ন করা হয়নি।",

      startMilkTest:
        "দুধ পরীক্ষা শুরু করুন",

      // =========================
      // NEW TEST
      // =========================
      preparingTest:
        "পরীক্ষার প্রস্তুতি চলছে...",

      milkHealthAssessment:
        "দুধের স্বাস্থ্য মূল্যায়ন",

      completeObservations:
        "সেন্সর সংযোগ করার আগে শারীরিক পর্যবেক্ষণ সম্পূর্ণ করুন।",

      startNewTest:
        "নতুন পরীক্ষা শুরু করুন",

      testSessionDescription:
        "এই গরুর জন্য একটি পরীক্ষা সেশন তৈরি করা হবে এবং এটি ব্যাকএন্ড প্রক্রিয়া অনুযায়ী এগিয়ে যাবে।",

      starting:
        "শুরু হচ্ছে...",

      startTest:
        "পরীক্ষা শুরু করুন",

      // =========================
      // TEST STEPS
      // =========================
      observations:
        "পর্যবেক্ষণ",

      sensor:
        "সেন্সর",

      result:
        "ফলাফল",

      clinicalObservations:
        "ক্লিনিক্যাল পর্যবেক্ষণ",

      observationInstruction:
        "শুধুমাত্র অস্বাভাবিক লক্ষণ উপস্থিত থাকলে হ্যাঁ নির্বাচন করুন।",

      yes:
        "হ্যাঁ",

      no:
        "না",

      submitting:
        "জমা দেওয়া হচ্ছে...",

      continueSensorTest:
        "সেন্সর পরীক্ষায় যান",

      answerEveryQuestion:
        "অনুগ্রহ করে প্রতিটি পর্যবেক্ষণ প্রশ্নের উত্তর দিন।",

      // =========================
      // OBSERVATION QUESTIONS
      // =========================
      questionOBS001:
        "গাভীর বাঁটে কি কোনো ফোলা আছে?",

      questionOBS002:
        "দুধে কি কোনো অস্বাভাবিকতা আছে?",

      questionOBS003:
        "বাঁট স্পর্শ করলে কি গরম বা ব্যথাযুক্ত মনে হয়?",

      questionOBS004:
        "দুধ দোহনের সময় গরুটি কি অস্বস্তির কোনো লক্ষণ দেখায়?",

      // =========================
      // TEST PROGRESS / SENSOR
      // =========================
      test:
        "পরীক্ষা",

      connectingTestSession:
        "পরীক্ষা সেশনে সংযোগ করা হচ্ছে...",

      waitingForDeviceTelemetry:
        "ডিভাইস টেলিমেট্রির জন্য অপেক্ষা করা হচ্ছে...",

      waitingForSensorData:
        "সেন্সর ডেটার জন্য অপেক্ষা করা হচ্ছে...",

      sendingToML:
        "পরিমাপ ML মডেলে পাঠানো হচ্ছে...",

      calculatingRisk:
        "ক্লিনিক্যাল ঝুঁকি গণনা করা হচ্ছে...",

      assessmentComplete:
        "মূল্যায়ন সম্পন্ন হয়েছে।",

      assessmentFailed:
        "মূল্যায়ন ব্যর্থ হয়েছে।",

      assessmentCancelled:
        "মূল্যায়ন বাতিল করা হয়েছে।",

      processing:
        "প্রক্রিয়া চলছে...",

      backendState:
        "ব্যাকএন্ড অবস্থা",

      viewResult:
        "ফলাফল দেখুন",

      returnToDashboard:
        "ড্যাশবোর্ডে ফিরে যান",

      hardwareIntegration:
        "হার্ডওয়্যার ইন্টিগ্রেশন",

      hardwareIntegrationDescription:
        "Bluetooth/IoT ডিভাইসের টেলিমেট্রি এই ঠিকানায় POST করা উচিত",

      usingTestId:
        "পরীক্ষা আইডি ব্যবহার করে।",
        welcomeBack: "আবার স্বাগতম",
loginSubtitle: "আপনার খামার পরিচালনা এবং মূল্যায়ন চালানোর জন্য সাইন ইন করুন।",
language: "ভাষা",
email: "ইমেইল",
password: "পাসওয়ার্ড",
signingIn: "সাইন ইন হচ্ছে...",
signIn: "সাইন ইন করুন",
newFarmer: "নতুন কৃষক?",
createAccount: "অ্যাকাউন্ট তৈরি করুন",
loadingAssessmentResult: "মূল্যায়নের ফলাফল লোড হচ্ছে...",
assessmentResult: "মূল্যায়নের ফলাফল",
cow: "গরু",
finalRiskScore: "চূড়ান্ত ঝুঁকি স্কোর",
riskLevel: "ঝুঁকির স্তর",
trend: "প্রবণতা",
sensorMeasurements: "সেন্সর পরিমাপ",
temperature: "তাপমাত্রা",
conductivity: "পরিবাহিতা",
aiAnalysis: "AI বিশ্লেষণ",
probability: "সম্ভাবনা",
confidence: "নির্ভরযোগ্যতা",
model: "মডেল",
contributingFactors: "অবদানকারী কারণ",
recommendedActions: "প্রস্তাবিত পদক্ষেপ",
priority: "অগ্রাধিকার",
clinicalDisclaimer: "ক্লিনিক্যাল দাবিত্যাগ",
reportEndpointNote: "রিপোর্ট এন্ডপয়েন্ট সংযুক্ত আছে",
mount: "মাউন্ট করুন",
beforeUsingIt: "ব্যবহারের আগে ব্যাকএন্ডে।",
trendImproving: "উন্নতি হচ্ছে",
trendStable: "স্থিতিশীল",
trendWorsening: "অবনতি হচ্ছে",
unknown: "অজানা",
phone: "ফোন",
farm: "খামার",
role: "ভূমিকা",
authenticatedFarmerAccount: "প্রমাণীকৃত কৃষক অ্যাকাউন্ট।",
testHistory: "পরীক্ষার ইতিহাস",
previousAssessments: "পূর্ববর্তী মূল্যায়ন",
test: "পরীক্ষা",
tests: "পরীক্ষা",
loadingTestHistory: "পরীক্ষার ইতিহাস লোড হচ্ছে...",
noCompletedTests: "এই গরুর জন্য কোনো সম্পন্ন পরীক্ষা পাওয়া যায়নি।",
    },
  },

  // ============================================================
  // ASSAMESE
  // ============================================================
  as: {
    translation: {
      // =========================
      // COMMON / NAVBAR
      // =========================
      welcome: "স্বাগতম",
      dashboard: "ডেশ্বব'ৰ্ড",
      myCows: "মোৰ গৰুবোৰ",
      profile: "প্ৰ'ফাইল",
      logout: "লগ আউট",

      // =========================
      // DASHBOARD
      // =========================
      farmDashboard:
        "ফাৰ্ম ডেশ্বব'ৰ্ড",

      dashboardSubtitle:
        "আপোনাৰ গৰুবোৰৰ স্বাস্থ্য আৰু শেহতীয়া কাৰ্যকলাপ নিৰীক্ষণ কৰক।",

      refresh:
        "ৰিফ্ৰেছ",

      manageCows:
        "গৰু পৰিচালনা কৰক",

      totalCows:
        "মুঠ গৰু",

      activeCows:
        "সক্ৰিয় গৰু",

      attentionRequired:
        "মনোযোগৰ প্ৰয়োজন",

      avgRiskScore:
        "গড় বিপদাশংকা স্ক'ৰ",

      tests:
        "পৰীক্ষা",

      last30Days:
        "যোৱা ৩০ দিন",

      loadingFarmHealth:
        "ফাৰ্মৰ স্বাস্থ্য লোড হৈ আছে...",

      riskDistribution:
        "বিপদাশংকাৰ বিতৰণ",

      cowsRequiringAttention:
        "মনোযোগৰ প্ৰয়োজন হোৱা গৰু",

      noHighRiskCows:
        "বৰ্তমান কোনো উচ্চ বিপদাশংকাৰ গৰু নাই।",

      pen:
        "পেন",

      // =========================
      // MY COWS
      // =========================
      cowsSubtitle:
        "আপোনাৰ গৰুবোৰ চাওক, পঞ্জীয়ন কৰক আৰু পৰিচালনা কৰক।",

      registerCow:
        "গৰু পঞ্জীয়ন কৰক",

      registerACow:
        "এটা গৰু পঞ্জীয়ন কৰক",

      cowId:
        "গৰু আইডি",

      name:
        "নাম",

      breed:
        "জাত",

      age:
        "বয়স",

      lactationNumber:
        "দুগ্ধদান সংখ্যা",

      lactationCycle:
        "দুগ্ধদান চক্ৰ",

      penNumber:
        "পেন নম্বৰ",

      cancel:
        "বাতিল কৰক",

      saving:
        "সংৰক্ষণ হৈ আছে...",

      saveCow:
        "গৰু সংৰক্ষণ কৰক",

      searchCow:
        "গৰু বিচাৰক...",

      loadingCows:
        "গৰুবোৰ লোড হৈ আছে...",

      noCowsFound:
        "কোনো গৰু পোৱা নগ'ল।",

      breedNotSet:
        "জাত নিৰ্ধাৰণ কৰা হোৱা নাই",

      // =========================
      // RISK LEVELS
      // =========================
      untested:
        "পৰীক্ষা কৰা হোৱা নাই",

      riskLow:
        "কম",

      riskMedium:
        "মধ্যম",

      riskHigh:
        "উচ্চ",

      riskCritical:
        "গুৰুতৰ",

      // =========================
      // COW DETAILS
      // =========================
      loadingCow:
        "গৰুৰ তথ্য লোড হৈ আছে...",

      cowNotFound:
        "গৰু পোৱা নগ'ল",

      delete:
        "মচি পেলাওক",

      back:
        "পিছলৈ",

      cowProfile:
        "গৰুৰ প্ৰ'ফাইল",

      edit:
        "সম্পাদনা কৰক",

      saveChanges:
        "পৰিৱৰ্তন সংৰক্ষণ কৰক",

      status:
        "অৱস্থা",

      active:
        "সক্ৰিয়",

      inactive:
        "নিষ্ক্ৰিয়",

      currentAssessment:
        "বৰ্তমান মূল্যায়ন",

      lastTest:
        "শেষ পৰীক্ষা",

      notAssessedYet:
        "এই গৰুটোৰ এতিয়ালৈকে মূল্যায়ন কৰা হোৱা নাই।",

      startMilkTest:
        "গাখীৰ পৰীক্ষা আৰম্ভ কৰক",

      // =========================
      // NEW TEST
      // =========================
      preparingTest:
        "পৰীক্ষাৰ বাবে প্ৰস্তুতি চলি আছে...",

      milkHealthAssessment:
        "গাখীৰৰ স্বাস্থ্য মূল্যায়ন",

      completeObservations:
        "চেন্সৰ সংযোগ কৰাৰ আগতে শাৰীৰিক পৰ্যবেক্ষণ সম্পূৰ্ণ কৰক।",

      startNewTest:
        "নতুন পৰীক্ষা আৰম্ভ কৰক",

      testSessionDescription:
        "এই গৰুটোৰ বাবে এটা পৰীক্ষা ছেছন সৃষ্টি কৰা হ'ব আৰু ই বেকএণ্ড প্ৰক্ৰিয়া অনুসৰি আগবাঢ়িব।",

      starting:
        "আৰম্ভ হৈ আছে...",

      startTest:
        "পৰীক্ষা আৰম্ভ কৰক",

      // =========================
      // TEST STEPS
      // =========================
      observations:
        "পৰ্যবেক্ষণ",

      sensor:
        "চেন্সৰ",

      result:
        "ফলাফল",

      clinicalObservations:
        "ক্লিনিকেল পৰ্যবেক্ষণ",

      observationInstruction:
        "অস্বাভাৱিক লক্ষণ থাকিলেহে হয় বাছনি কৰক।",

      yes:
        "হয়",

      no:
        "নহয়",

      submitting:
        "জমা দিয়া হৈ আছে...",

      continueSensorTest:
        "চেন্সৰ পৰীক্ষালৈ আগবাঢ়ক",

      answerEveryQuestion:
        "অনুগ্ৰহ কৰি প্ৰতিটো পৰ্যবেক্ষণ প্ৰশ্নৰ উত্তৰ দিয়ক।",

      // =========================
      // OBSERVATION QUESTIONS
      // =========================
      questionOBS001:
        "গৰুৰ ওহাৰত কোনো ফুলি উঠা আছে নেকি?",

      questionOBS002:
        "গাখীৰত কোনো অস্বাভাৱিকতা আছে নেকি?",

      questionOBS003:
        "ওহাৰ স্পৰ্শ কৰিলে গৰম বা বিষ অনুভৱ হয় নেকি?",

      questionOBS004:
        "গাখীৰ খীৰোৱাৰ সময়ত গৰুটোৱে অস্বস্তিৰ কোনো লক্ষণ দেখুৱায় নেকি?",

      // =========================
      // TEST PROGRESS / SENSOR
      // =========================
      test:
        "পৰীক্ষা",

      connectingTestSession:
        "পৰীক্ষা ছেছনৰ সৈতে সংযোগ কৰা হৈছে...",

      waitingForDeviceTelemetry:
        "ডিভাইচ টেলিমেট্ৰিৰ বাবে অপেক্ষা কৰা হৈছে...",

      waitingForSensorData:
        "চেন্সৰ ডাটাৰ বাবে অপেক্ষা কৰা হৈছে...",

      sendingToML:
        "মাপসমূহ ML মডেললৈ পঠিওৱা হৈছে...",

      calculatingRisk:
        "ক্লিনিকেল বিপদাশংকা গণনা কৰা হৈছে...",

      assessmentComplete:
        "মূল্যায়ন সম্পূৰ্ণ হৈছে।",

      assessmentFailed:
        "মূল্যায়ন বিফল হৈছে।",

      assessmentCancelled:
        "মূল্যায়ন বাতিল কৰা হৈছে।",

      processing:
        "প্ৰক্ৰিয়া চলি আছে...",

      backendState:
        "বেকএণ্ড অৱস্থা",

      viewResult:
        "ফলাফল চাওক",

      returnToDashboard:
        "ডেশ্বব'ৰ্ডলৈ উভতি যাওক",

      hardwareIntegration:
        "হাৰ্ডৱেৰ সংযোগ",

      hardwareIntegrationDescription:
        "Bluetooth/IoT ডিভাইচে টেলিমেট্ৰী এই ঠিকনালৈ POST কৰিব লাগে",

      usingTestId:
        "পৰীক্ষা আইডি ব্যৱহাৰ কৰি।",
        welcomeBack: "পুনৰ স্বাগতম",
loginSubtitle: "আপোনাৰ ফাৰ্ম পৰিচালনা আৰু মূল্যায়ন চলাবলৈ ছাইন ইন কৰক।",
language: "ভাষা",
email: "ইমেইল",
password: "পাছৱৰ্ড",
signingIn: "ছাইন ইন হৈ আছে...",
signIn: "ছাইন ইন কৰক",
newFarmer: "নতুন কৃষক?",
createAccount: "একাউণ্ট সৃষ্টি কৰক",
loadingAssessmentResult: "মূল্যায়নৰ ফলাফল লোড হৈ আছে...",
assessmentResult: "মূল্যায়নৰ ফলাফল",
cow: "গাই",
finalRiskScore: "চূড়ান্ত বিপদ স্ক'ৰ",
riskLevel: "বিপদৰ স্তৰ",
trend: "প্ৰৱণতা",
sensorMeasurements: "চেন্সৰ জোখ",
temperature: "উষ্ণতা",
conductivity: "পৰিবাহিতা",
aiAnalysis: "AI বিশ্লেষণ",
probability: "সম্ভাৱনা",
confidence: "বিশ্বাসযোগ্যতা",
model: "মডেল",
contributingFactors: "অৱদানকাৰী কাৰকসমূহ",
recommendedActions: "পৰামৰ্শ দিয়া কাৰ্যসমূহ",
priority: "অগ্ৰাধিকাৰ",
clinicalDisclaimer: "ক্লিনিকেল দাবিত্যাগ",
reportEndpointNote: "ৰিপ'ৰ্ট এণ্ডপইণ্ট সংযুক্ত আছে",
mount: "মাউণ্ট কৰক",
beforeUsingIt: "ব্যৱহাৰ কৰাৰ আগতে বেকএণ্ডত।",
trendImproving: "উন্নতি হৈ আছে",
trendStable: "স্থিতিশীল",
trendWorsening: "অৱনতি হৈ আছে",
unknown: "অজ্ঞাত",
phone: "ফোন",
farm: "ফাৰ্ম",
role: "ভূমিকা",
authenticatedFarmerAccount: "প্ৰমাণিত কৃষকৰ একাউণ্ট।",
testHistory: "পৰীক্ষাৰ ইতিহাস",
previousAssessments: "পূৰ্বৱৰ্তী মূল্যায়ন",
test: "পৰীক্ষা",
tests: "পৰীক্ষা",
loadingTestHistory: "পৰীক্ষাৰ ইতিহাস লোড হৈ আছে...",
noCompletedTests: "এই গৰুজনীৰ বাবে কোনো সম্পূৰ্ণ পৰীক্ষা পোৱা নগ'ল।",
    },
  },
};
const savedLanguage = localStorage.getItem("language") || "en";

i18n
  .use(initReactI18next)
  .init({
    resources,

    lng: savedLanguage,

    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });

i18n.on("languageChanged", (language) => {
  localStorage.setItem("language", language);
});
export default i18n;