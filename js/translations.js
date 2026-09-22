/* ==========================================================================
   AGRIPULSE iROOT — BILINGUAL FARMER LANGUAGE ENGINE (ENGLISH & हिन्दी)
   Simple, respectful, farmer-friendly phrasing.
   Zero intimidating developer jargon.
   ========================================================================== */

(function () {
  'use strict';

  const translations = {
    en: {
      // Navigation & Header
      "ham_label": "Menu",
      "nav_home": "Home",
      "nav_why": "Why iRoot",
      "nav_how": "How It Works",
      "nav_products": "Products",
      "nav_solutions": "Farm Solutions",
      "nav_calculator": "Savings Calculator",
      "nav_benefits": "Benefits",
      "nav_faq": "FAQ",
      "nav_about": "About",
      "nav_contact": "Contact",
      "nav_contact_btn": "Contact Us",
      "nav_call_btn": "Call: +91 96191 71636",
      "drawer_lang_title": "Language / भाषा",

      // Hero Slider
      "hero_s1_eyebrow": "Agripulse Private Limited",
      "hero_s1_headline": "Smart Irrigation.<br><em>Complete Motor<br>Protection.</em>",
      "hero_s1_sub": "Control your motor from home, protect your pump from burning, and deliver the right water to every crop from your mobile phone.",
      "hero_s1_btn": "Explore Products",

      "hero_s2_eyebrow": "Complete Farm Control",
      "hero_s2_headline": "Your Farm.<br><em>In Your<br>Hands.</em>",
      "hero_s2_sub": "Check soil moisture, start your pump, and switch drip valves with one tap on the iRoot mobile app.",
      "hero_s2_btn1": "Explore Products",
      "hero_s2_btn2": "How It Works",

      "hero_s3_eyebrow": "Built for Indian Farmers",
      "hero_s3_headline": "Save Water.<br><em>Cut Electricity<br>Bills.</em>",
      "hero_s3_sub": "No more midnight trips to the farm. Reliable automation that protects your crop and saves up to 40% water.",
      "hero_s3_btn1": "How It Works",
      "hero_s3_btn2": "Why iRoot",

      // Farmer Trust Bar
      "trust1_title": "100% Motor Safety",
      "trust1_desc": "Protects against phase cuts, power surges & dry borewells.",
      "trust2_title": "Mobile Pump Control",
      "trust2_desc": "Turn motor ON/OFF and switch valves right from home.",
      "trust3_title": "Save 40% Water & Power",
      "trust3_desc": "Waters only when your crop needs it — lower bills.",
      "trust4_title": "15-Minute Easy Setup",
      "trust4_desc": "Connects to any existing starter. Heavy-duty & waterproof.",

      // Why Farmers Need iRoot
      "why_badge": "Real Farm Benefits",
      "why_title": "WHY FARMERS TRUST <span class=\"gradient-text\">AGRIPULSE iROOT</span>",
      "why_desc": "Engineered to solve real farming headaches — saving your precious time, preventing costly motor repairs, and maximizing harvest yield.",

      "why_card1_tag": "COMFORT & SAFETY",
      "why_card1_title": "No More Midnight Field Visits",
      "why_card1_desc": "When electricity arrives at 2 AM, start your motor from your bed with one tap. No need to walk through darkness, mud, rain, or fear of reptiles.",

      "why_card2_tag": "MOTOR PROTECTION",
      "why_card2_title": "Stop Motor Burnouts & Save ₹30,000+",
      "why_card2_desc": "iPump continuously guards against phase failure, voltage fluctuations, and dry run when the well has no water — stopping the motor before coils burn.",

      "why_card3_tag": "WATER SAVINGS",
      "why_card3_title": "Automatic Drip & Valve Switching",
      "why_card3_desc": "Open and close drip valves zone by zone from your mobile phone. Every plot gets equal water without walking miles to turn heavy iron valves.",

      // How It Works (4 Simple Steps)
      "how_badge": "Simple 4-Step Process",
      "how_title": "HOW iROOT WORKS <span class=\"gradient-text\">ON YOUR FARM</span>",
      "how_desc": "No complicated wiring or computer knowledge required. Simple, reliable, and ready to use in minutes.",

      "step1_badge": "STEP 01",
      "step1_title": "15-Minute Fitting",
      "step1_desc": "Connect iPump directly to your existing motor starter box (DOL, Star-Delta, or digital) and pipe valves without altering your current wiring.",

      "step2_badge": "STEP 02",
      "step2_title": "Check Farm on Phone",
      "step2_desc": "Open the simple iRoot app in Hindi or English to check soil moisture at root depth, power availability, and line pressure.",

      "step3_badge": "STEP 03",
      "step3_title": "One-Tap Control",
      "step3_desc": "Tap 'Start' to turn on the pump, switch drip valves between crop zones, or set an automatic timer for scheduled watering.",

      "step4_badge": "STEP 04",
      "step4_title": "Automatic Motor Protection",
      "step4_desc": "The system monitors everything 24x7. If voltage drops or water runs out, it shuts off the motor automatically to prevent damage.",

      // Products Section
      "prod_badge": "Equipment Family",
      "prod_title": "THE <span class=\"gradient-text\">iROOT PRODUCT SUITE</span>",
      "prod_desc": "Simple, rugged, and reliable equipment built specifically for Indian agricultural field conditions.",

      "tab_app": "📱 iRoot Mobile App",
      "tab_pump": "⚙️ iPump Motor Controller",
      "tab_valve": "🚰 iValve Controller",
      "tab_sense": "🌱 iSense Soil Probe",
      "tab_net": "📡 iNet Wireless Hub",
      "tab_acc": "🔩 Valves & Accessories",

      // App Tab
      "app_kicker": "Easy-to-Use Mobile App",
      "app_title": "Control Your Entire Farm from Anywhere",
      "app_lead": "Available in Hindi and English. Designed with large buttons and clear icons so any farmer can easily manage irrigation, check soil, and monitor power.",
      "app_f1_title": "One-Tap Motor Control",
      "app_f1_desc": "Start or stop your pump instantly from your home, town, or anywhere.",
      "app_f2_title": "Live Soil Moisture Level",
      "app_f2_desc": "See if the soil at your crop roots is dry, optimal, or over-watered.",
      "app_f3_title": "Automatic Water Timer",
      "app_f3_desc": "Set schedules to water specific fields for exact minutes automatically.",
      "app_f4_title": "Electricity & Voltage Status",
      "app_f4_desc": "Check live 3-phase electricity voltage before turning on the pump.",
      "app_f5_title": "Weather & Rain Forecast",
      "app_f5_desc": "Get rainfall and temperature forecasts to avoid watering before rain.",
      "app_f6_title": "Easy Family Sharing",
      "app_f6_desc": "Allow your sons, brothers, or farm workers to control pumps via the app.",

      // iPump Tab
      "pump_kicker": "Motor Safety & Automation",
      "pump_title": "iPump Smart Motor Controller",
      "pump_lead": "Turn any existing motor starter into a smart, protected pump. Protects your submersible or monoblock pump against costly coil burnouts and dry run.",
      "pump_f1_title": "Mobile Start & Stop",
      "pump_f1_desc": "Turn your motor on or off from your phone, with instant status confirmation.",
      "pump_f2_title": "Auto-Restart on Light Recovery",
      "pump_f2_desc": "Safely restarts your pump automatically when stable 3-phase power returns.",
      "pump_f3_title": "3-Phase (RYB) Protection",
      "pump_f3_desc": "Guards against single phasing, reverse phase, and high/low voltage.",
      "pump_f4_title": "Dry-Run Auto Cut-Off",
      "pump_f4_desc": "Instantly trips the pump if the borewell or pond runs out of water.",
      "pump_f5_title": "Fits Any Existing Starter",
      "pump_f5_desc": "Compatible with DOL, Star-Delta, and all standard motor starter panels.",
      "pump_f6_title": "Physical Manual Buttons",
      "pump_f6_desc": "Includes physical ON/OFF buttons on the box so anyone can operate it locally.",

      // iValve Tab
      "valve_kicker": "Automated Drip Valves",
      "valve_title": "iValve Wireless Valve Controller",
      "valve_lead": "Open and close drip and sprinkler valves from your mobile phone. No more walking in wet, muddy fields or struggling to turn tight iron valves.",
      "valve_f1_title": "Controls up to 10 Zones",
      "valve_f1_desc": "Operate up to 10 latching solenoid valves across different fields from one box.",
      "valve_f2_title": "Solar Powered",
      "valve_f2_desc": "Built-in solar panel and rechargeable battery — runs up to 3 months even without sun.",
      "valve_f3_title": "No Wiring across Fields",
      "valve_f3_desc": "Communicates wirelessly up to 3km — no digging trenches for wires.",
      "valve_f4_title": "Zone-by-Zone Scheduling",
      "valve_f4_desc": "Water field A for 45 minutes, then automatically switch to field B.",
      "valve_f5_title": "Rugged Weatherproof Casing",
      "valve_f5_desc": "IP65 sealed against heavy rain, mud, dust, and direct sunlight.",
      "valve_f6_title": "Water Flow Verification",
      "valve_f6_desc": "Confirms that water is flowing properly through the selected line.",

      // iSense Tab
      "sense_kicker": "Root Moisture Sensor",
      "sense_title": "iSense Multi-Depth Soil Moisture Probe",
      "sense_lead": "Stop guessing how wet your field is. iSense measures soil moisture directly at crop roots, telling you exactly when to water and when to stop.",
      "sense_f1_title": "Multi-Depth Root Measurement",
      "sense_f1_desc": "Reads moisture at 10cm, 25cm, 40cm, and 60cm depths where roots feed.",
      "sense_f2_title": "Prevents Root Rot & Yellowing",
      "sense_f2_desc": "Stops over-watering and nutrient leaching, keeping crops healthy and green.",
      "sense_f3_title": "Dry & Wet Mobile Alerts",
      "sense_f3_desc": "Get notified on your phone when your soil drops below healthy moisture.",
      "sense_f4_title": "Solar Powered Autonomy",
      "sense_f4_desc": "Solar charging ensures continuous readings without needing battery changes.",
      "sense_f5_title": "Calibrated for Any Soil",
      "sense_f5_desc": "Works accurately in black cotton soil, red soil, sandy, or loamy land.",
      "sense_f6_title": "Tough Field Design",
      "sense_f6_desc": "Built to withstand tractor passes, farm animals, and harsh weather.",

      // iNet Tab
      "net_kicker": "Long-Range Wireless Gateway",
      "net_title": "iNet Farm Wireless Hub",
      "net_lead": "Connects your entire farm without needing Wi-Fi or broadband. Communicates up to 3km across trees, hills, and fields, sending all data to your mobile phone.",
      "net_f1_title": "3km Long-Range Wireless",
      "net_f1_desc": "Reaches distant pump houses and boundary valves with zero cable cost.",
      "net_f2_title": "Built-in 4G SIM Slot",
      "net_f2_desc": "Connects directly to the mobile network — works anywhere with cellular signal.",
      "net_f3_title": "12V Solar Panel Powered",
      "net_f3_desc": "Autonomous solar power keeps your farm connected 24x7 without grid power.",
      "net_f4_title": "No Field Wi-Fi Needed",
      "net_f4_desc": "You do not need broadband or Wi-Fi routers in your fields.",
      "net_f5_title": "Instant Alerts Delivery",
      "net_f5_desc": "Relays pump trip alerts and power cuts to your phone in under 2 seconds.",
      "net_f6_title": "Built-in Surge Protection",
      "net_f6_desc": "Protects internal circuits from lightning strikes and voltage spikes.",

      // Accessories Tab
      "acc_kicker": "Certified Agricultural Accessories",
      "acc_title": "Heavy-Duty Valves & Electrical Protection",
      "acc_lead": "Certified agricultural fittings, latching valves, and safety boxes tested for seamless compatibility with iRoot.",

      // Real Farm Situations
      "sol_badge": "Real Farm Challenges",
      "sol_title": "HOW iROOT SOLVES <span class=\"gradient-text\">EVERYDAY FARM PROBLEMS</span>",
      "sol_desc": "Tap any scenario below to see how iRoot protects your farm and saves water automatically.",

      "sc_heat": "☀️ Midday Heatwave (42°C)",
      "sc_heat_sub": "Soil moisture drops quickly",
      "sc_phase": "⚠️ Electricity Phase Cut",
      "sc_phase_sub": "Voltage drops or phase fails",
      "sc_rain": "🌧️ Unseasonal Heavy Rain",
      "sc_rain_sub": "Soil gets fully saturated",
      "sc_night": "🌙 Late Night Power Supply",
      "sc_night_sub": "Electricity comes at 2 AM",

      // Calculator
      "calc_badge": "Savings Estimator",
      "calc_title": "CALCULATE YOUR <span class=\"gradient-text\">FARM SAVINGS</span>",
      "calc_desc": "See how much money, water, and motor repair costs you can save every year with iRoot.",
      "calc_lbl_area": "Cultivated Farm Area:",
      "calc_lbl_crop": "Primary Crop:",
      "calc_lbl_method": "Current Irrigation Method:",
      "calc_lbl_source": "Water Source:",
      "calc_res_title": "Estimated Annual Farm Savings",
      "calc_res_water": "Groundwater / Irrigation Saved:",
      "calc_res_power": "Electricity & Bill Savings:",
      "calc_res_motor": "Motor Burnout & Rewinding Saved:",
      "calc_res_labor": "Field Walking & Labor Hours Saved:",
      "calc_btn": "Book a Free Farm Assessment",

      // Comparison Table
      "comp_badge": "Direct Comparison",
      "comp_title": "TRADITIONAL FARMING VS. <span class=\"gradient-text\">THE iROOT WAY</span>",
      "comp_col_param": "Farm Challenge",
      "comp_col_trad": "Traditional Farming",
      "comp_col_iroot": "With Agripulse iRoot",
      "comp_r1_title": "Starting the Pump",
      "comp_r1_trad": "Walking to pump starter at midnight in dark, mud, and rain",
      "comp_r1_iroot": "1 tap on your mobile phone from your comfortable bed",
      "comp_r2_title": "Motor Burnout Protection",
      "comp_r2_trad": "High risk of burnt coils, costing ₹15,000 to ₹40,000 in repairs",
      "comp_r2_iroot": "Auto-cutoff in 0.1 sec on phase cut, voltage spike, or dry well",
      "comp_r3_title": "Changing Water Valves",
      "comp_r3_trad": "Walking miles across muddy fields to turn heavy iron valves",
      "comp_r3_iroot": "Switch up to 10 drip zones wirelessly from your mobile app",
      "comp_r4_title": "Knowing When to Water",
      "comp_r4_trad": "Guesswork by touching topsoil — often over or under-watering",
      "comp_r4_iroot": "Exact root-zone moisture percentage shown live on your screen",
      "comp_r5_title": "Power Cut Recovery",
      "comp_r5_trad": "Motor stays off until someone physically walks back to restart",
      "comp_r5_iroot": "Safely restarts automatically when safe 3-phase power returns",

      // FAQ
      "faq_badge": "Common Questions",
      "faq_title": "FREQUENTLY ASKED <span class=\"gradient-text\">QUESTIONS BY FARMERS</span>",
      "faq_desc": "Clear answers to the questions farmers ask us most often.",
      "faq_q1": "Will iPump work with my existing motor starter?",
      "faq_a1": "Yes, absolutely! iPump is designed to connect directly with all standard Indian motor starters, including DOL starters, Star-Delta starters, and digital electronic starter panels. Installation takes just 15 to 20 minutes without altering your existing electrical setup.",
      "faq_q2": "Do I need Wi-Fi or internet connection in my farm?",
      "faq_a2": "No, you do NOT need Wi-Fi or broadband in your field. The iNet Hub comes with its own built-in 4G SIM card slot and uses 3km long-range wireless communication to connect all field devices directly to your mobile phone.",
      "faq_q3": "How does iPump prevent my motor from burning?",
      "faq_a3": "iPump continuously monitors all 3 phases (R-Y-B), line voltage, current, and water flow. If one phase drops (single phasing), voltage fluctuates wildly, or the borewell runs out of water (dry run), iPump trips the motor in 0.1 seconds to prevent coil burning.",
      "faq_q4": "Can multiple family members use the mobile app?",
      "faq_a4": "Yes! You can easily share access with your family members, brothers, or farm workers so anyone can start or stop the pump and monitor irrigation safely.",
      "faq_q5": "Is the equipment waterproof in heavy monsoon rains and heat?",
      "faq_a5": "Yes. All iRoot field devices are housed in IP65 heavy-duty weatherproof, dust-proof, and UV-resistant enclosures engineered specifically for Indian outdoor farm conditions (-20°C to +60°C).",
      "faq_q6": "How can I see a live demo or buy iRoot for my farm?",
      "faq_a6": "You can call us directly on our farmer helpline at +91 96191 71636, message us on WhatsApp, or submit the short contact form below. Our local agricultural specialist will contact you to arrange a demonstration.",

      // Contact Form
      "cont_badge": "Helpline & Booking",
      "cont_title": "TALK TO OUR AGRI TEAM: <span class=\"gradient-text\">GET IN TOUCH</span>",
      "cont_desc": "Have questions about your motor, borewell, or drip setup? Reach our direct farmer helpline or send us a message.",
      "cont_card_title": "Agripulse Private Limited",
      "cont_card_desc": "Dedicated to empowering Indian farmers with simple, reliable, and affordable smart irrigation solutions.",
      "form_lbl_name": "Full Name *",
      "form_ph_name": "e.g. Ramesh Patel",
      "form_lbl_phone": "Mobile Number *",
      "form_ph_phone": "e.g. 98765 43210",
      "form_lbl_loc": "State & District *",
      "form_ph_loc": "e.g. Maharashtra, Nashik",
      "form_lbl_acres": "Farm Size (Acres) *",
      "form_lbl_crop": "Primary Crop",
      "form_ph_crop": "e.g. Pomegranate, Cotton, Sugarcane",
      "form_lbl_notes": "Motor HP or Starter Details",
      "form_ph_notes": "e.g. 7.5 HP Submersible with Star-Delta starter...",
      "form_btn_submit": "Request Free Call & Demo",

      // Modal
      "modal_title": "Request Confirmed!",
      "modal_text": "Thank you! Your demo request has been received. Our agri specialist will call you on your mobile number within 24 hours.",
      "modal_ref_label": "REFERENCE NO:",
      "modal_btn": "Return to Website",

      // Footer
      "foot_tagline": "Smart Irrigation • Motor Protection • Better Yield for Every Farmer."
    },

    hi: {
      // Navigation & Header
      "ham_label": "मेनू",
      "nav_home": "होम",
      "nav_why": "किसानों के फायदे",
      "nav_how": "यह कैसे काम करता है",
      "nav_products": "हमारे उपकरण",
      "nav_solutions": "समस्याओं का हल",
      "nav_calculator": "बचत कैलकुलेटर",
      "nav_benefits": "फायदे",
      "nav_faq": "अक्सर पूछे जाने वाले सवाल",
      "nav_about": "हमारे बारे में",
      "nav_contact": "संपर्क करें",
      "nav_contact_btn": "संपर्क करें",
      "nav_call_btn": "हेल्पलाइन: +91 96191 71636",
      "drawer_lang_title": "भाषा / Language",

      // Hero Slider
      "hero_s1_eyebrow": "Agripulse Private Limited",
      "hero_s1_headline": "स्मार्ट सिंचाई।<br><em>मोटर की पूरी<br>सुरक्षा।</em>",
      "hero_s1_sub": "घर बैठे मोबाइल से मोटर चालू-बंद करें, मोटर को जलने से बचाएं, और हर फसल को सही समय पर सही पानी दें।",
      "hero_s1_btn": "उपकरण देखें",

      "hero_s2_eyebrow": "पूरा खेत आपके मोबाइल में",
      "hero_s2_headline": "आपका खेत।<br><em>आपकी मुट्ठी<br>में।</em>",
      "hero_s2_sub": "मिट्टी की नमी देखें, मोटर चालू करें, और क्यारियों के वाल्व खोलें — सब कुछ iRoot मोबाइल ऐप से, एक ही टच में।",
      "hero_s2_btn1": "उपकरण देखें",
      "hero_s2_btn2": "कैसे काम करता है",

      "hero_s3_eyebrow": "भारतीय किसानों के लिए खास",
      "hero_s3_headline": "पानी बचाएं।<br><em>बिजली बिल में<br>भारी बचत।</em>",
      "hero_s3_sub": "रात के अंधेरे में खेत जाने की ज़रूरत नहीं। आसान ऑटोमेशन जो फसल को सुरक्षित रखे और 40% तक पानी बचाए।",
      "hero_s3_btn1": "कैसे काम करता है",
      "hero_s3_btn2": "फायदे जानें",

      // Farmer Trust Bar
      "trust1_title": "मोटर जलने से 100% सुरक्षा",
      "trust1_desc": "फेज कट, वोल्टेज उतार-चढ़ाव और बोरवेल सूखने पर तुरंत मोटर बंद।",
      "trust2_title": "मोबाइल से मोटर कंट्रोल",
      "trust2_desc": "घर बैठे बिस्तर से मोटर चालू/बंद करें और ड्रिप वाल्व बदलें।",
      "trust3_title": "40% पानी व बिजली की बचत",
      "trust3_desc": "फसल को केवल तभी पानी दें जब ज़रूरत हो — बिजली बिल में कमी।",
      "trust4_title": "15 मिनट में आसान फिटिंग",
      "trust4_desc": "किसी भी स्टार्टर के साथ लग जाता है। पूरी तरह वाटरप्रूफ व मजबूत।",

      // Why Farmers Need iRoot
      "why_badge": "किसानों की असली ज़रूरत",
      "why_title": "किसान क्यों चुनते हैं <span class=\"gradient-text\">AGRIPULSE iROOT</span>",
      "why_desc": "खेती की असली समस्याओं को हल करने के लिए बनाया गया — समय की बचत, मोटर रिपेयर के भारी खर्च से मुक्ति, और बेहतर पैदावार।",

      "why_card1_tag": "आराम और सुरक्षा",
      "why_card1_title": "रात के अंधेरे में खेत जाने से मुक्ति",
      "why_card1_desc": "रात 2 बजे बिजली आने पर भी खेत जाने की ज़रूरत नहीं। घर बैठे बिस्तर से एक टच में मोटर चालू करें — बारिश, कीचड़ और सांप-बिच्छू के डर से छुटकारा।",

      "why_card2_tag": "मोटर सुरक्षा",
      "why_card2_title": "मोटर जलने से बचाएं, ₹30,000+ बचाएं",
      "why_card2_desc": "iPump लगातार 3-फेज, वोल्टेज और पानी के फ्लो की निगरानी करता है। अगर बोरवेल में पानी खत्म हो या फेज कट हो, तो मोटर तुरंत बंद हो जाती है।",

      "why_card3_tag": "पानी की बचत",
      "why_card3_title": "ऑटोमैटिक ड्रिप और वाल्व कंट्रोल",
      "why_card3_desc": "मोबाइल से ही क्यारी दर क्यारी ड्रिप वाल्व खोलें और बंद करें। बिना कीचड़ में घूमे हर पौधे को बराबर पानी मिलता है।",

      // How It Works (4 Simple Steps)
      "how_badge": "4 आसान चरण",
      "how_title": "iROOT खेत में <span class=\"gradient-text\">कैसे काम करता है</span>",
      "how_desc": "कोई जटिल वायरिंग या कंप्यूटर की ज़रूरत नहीं। बिल्कुल आसान और 15 मिनट में चालू।",

      "step1_badge": "चरण 01",
      "step1_title": "15 मिनट में स्टार्टर फिटिंग",
      "step1_desc": "iPump को अपने मौजूदा मोटर स्टार्टर (DOL, स्टार-डेल्टा या डिजिटल) के साथ बिना किसी तार काटे आसानी से जोड़ें।",

      "step2_badge": "चरण 02",
      "step2_title": "मोबाइल पर खेत देखें",
      "step2_desc": "हिंदी या इंग्लिश में iRoot ऐप खोलें और मिट्टी की नमी, 3-फेज बिजली वोल्टेज और पानी की स्थिति देखें।",

      "step3_badge": "चरण 03",
      "step3_title": "एक बटन दबाकर मोटर चालू",
      "step3_desc": "घर या बाज़ार कहीं से भी एक टच में मोटर चालू करें, वाल्व बदलें, या टाइमर सेट करें ताकि तय समय पर मोटर अपने आप बंद हो जाए।",

      "step4_badge": "चरण 04",
      "step4_title": "ऑटोमैटिक मोटर सुरक्षा",
      "step4_desc": "सिस्टम 24 घंटे खेत की निगरानी करता है। वोल्टेज बिगड़ने या बोरवेल सूखने पर मोटर अपने आप बंद हो जाती है।",

      // Products Section
      "prod_badge": "हमारे उपकरण",
      "prod_title": "संपूर्ण <span class=\"gradient-text\">iROOT उपकरण परिवार</span>",
      "prod_desc": "भारतीय खेतों और ग्रामीण परिस्थितियों के लिए खास तौर पर तैयार किए गए मजबूत और टिकाऊ उत्पाद।",

      "tab_app": "📱 iRoot मोबाइल ऐप",
      "tab_pump": "⚙️ iPump मोटर कंट्रोलर",
      "tab_valve": "🚰 iValve वाल्व कंट्रोलर",
      "tab_sense": "🌱 iSense नमी सेंसर",
      "tab_net": "📡 iNet वायरलेस हब",
      "tab_acc": "🔩 वाल्व एवं फिटिंग्स",

      // App Tab
      "app_kicker": "आसान मोबाइल ऐप",
      "app_title": "दुनिया के किसी भी कोने से पूरा खेत संभालें",
      "app_lead": "हिंदी और अंग्रेजी में उपलब्ध। बड़े बटन और स्पष्ट चित्रों के साथ बनाया गया ताकि हर किसान आसानी से मोटर चला सके और खेत देख सके।",
      "app_f1_title": "एक बटन से मोटर चालू/बंद",
      "app_f1_desc": "घर बैठे या रिश्तेदारी में कहीं से भी तुरंत मोटर चालू व बंद करें।",
      "app_f2_title": "मिट्टी की लाइव नमी",
      "app_f2_desc": "देखें कि जड़ों में पानी कम है, सही है, या ज़्यादा है।",
      "app_f3_title": "ऑटोमैटिक टाइमर",
      "app_f3_desc": "तय करें कि मोटर कितनी देर चलेगी, समय पूरा होते ही अपने आप बंद।",
      "app_f4_title": "बिजली और वोल्टेज मीटर",
      "app_f4_desc": "मोटर चलाने से पहले 3-फेज बिजली का सही वोल्टेज फोन पर देखें।",
      "app_f5_title": "मौसम और बारिश का अनुमान",
      "app_f5_desc": "बारिश की जानकारी ताकि बारिश से पहले बेवजह पानी न चले।",
      "app_f6_title": "परिवार के साथ शेयर करें",
      "app_f6_desc": "परिवार के सदस्य या खेत के मजदूर भी अपने फोन से मोटर चला सकते हैं।",

      // iPump Tab
      "pump_kicker": "मोटर सुरक्षा व ऑटोमेशन",
      "pump_title": "iPump स्मार्ट मोटर कंट्रोलर",
      "pump_lead": "अपने किसी भी साधारण मोटर स्टार्टर को स्मार्ट बनाएं। मोटर को जलने से बचाएं और बोरवेल सूखने (ड्राई रन) पर तुरंत बंद पाएं।",
      "pump_f1_title": "मोबाइल से स्टार्ट व स्टॉप",
      "pump_f1_desc": "फोन से मोटर चलाएं और स्क्रीन पर देखें कि पानी निकल रहा है या नहीं।",
      "pump_f2_title": "लाइट आने पर अपने आप चालू",
      "pump_f2_desc": "बिजली वापस आने पर सुरक्षित 3-फेज वोल्टेज जाँचकर मोटर खुद चालू करता है।",
      "pump_f3_title": "3-फेज (RYB) पूरी सुरक्षा",
      "pump_f3_desc": "एक फेज उड़ने (सिंगल फेजिंग) और हाई/लो वोल्टेज से मोटर जलने से बचाता है।",
      "pump_f4_title": "ड्राई रन कट-ऑफ (पानी न होने पर)",
      "pump_f4_desc": "बोरवेल या कुएं में पानी खत्म होते ही मोटर को तुरंत बंद कर देता है।",
      "pump_f5_title": "हर स्टार्टर के साथ काम करता है",
      "pump_f5_desc": "DOL, स्टार-डेल्टा और सभी तरह के स्टार्टर पैनल के साथ आसानी से जुड़ जाता है।",
      "pump_f6_title": "बॉक्स पर भी चालू/बंद बटन",
      "pump_f6_desc": "बॉक्स के ऊपर भी हरे और लाल बटन हैं ताकि खेत पर खड़े होकर भी चालू/बंद कर सकें।",

      // iValve Tab
      "valve_kicker": "ऑटोमैटिक ड्रिप वाल्व",
      "valve_title": "iValve वायरलेस वाल्व कंट्रोलर",
      "valve_lead": "ड्रिप और स्प्रिंकलर वाल्व को मोबाइल से खोलें और बंद करें। कीचड़ में चलकर भारी लोहे के वाल्व घुमाने की मेहनत से छुटकारा।",
      "valve_f1_title": "10 क्यारियों तक कंट्रोल",
      "valve_f1_desc": "एक ही बॉक्स से खेत की अलग-अलग 10 क्यारियों के वाल्व नियंत्रित करें।",
      "valve_f2_title": "सोलर से चार्ज होता है",
      "valve_f2_desc": "सोलर पैनल साथ है — बिना धूप के भी 3 महीने तक लगातार काम करता है।",
      "valve_f3_title": "खेत में तार बिछाने की ज़रूरत नहीं",
      "valve_f3_desc": "3 किलोमीटर दूर तक वायरलेस सिग्नल पर काम करता है — कोई तार नहीं।",
      "valve_f4_title": "क्यारी दर क्यारी टाइमर",
      "valve_f4_desc": "पहले नंबर 1 क्यारी में 45 मिनट पानी चले, फिर अपने आप नंबर 2 में बदल जाए।",
      "valve_f5_title": "पूरी तरह वाटरप्रूफ",
      "valve_f5_desc": "भारी बारिश, धूप और धूल-मिट्टी में सुरक्षित रहने वाला IP65 बॉक्स।",
      "valve_f6_title": "पानी के फ्लो की पुष्टि",
      "valve_f6_desc": "मोबाइल पर बताता है कि चुने हुए वाल्व में पानी सही से जा रहा है या नहीं।",

      // iSense Tab
      "sense_kicker": "जड़ों की नमी सेंसर",
      "sense_title": "iSense मिट्टी की नमी सेंसर",
      "sense_lead": "मिट्टी छूकर अंदाज़ा लगाने का ज़माना गया। iSense सीधे पौधे की जड़ों में नमी नापकर फोन पर बताता है कि कब पानी देना है और कब बंद करना है।",
      "sense_f1_title": "4 गहराइयों पर नमी जाँच",
      "sense_f1_desc": "जड़ के पास 10, 25, 40 और 60 सेमी गहराई पर मिट्टी का गीलापन नापता है।",
      "sense_f2_title": "फसल पीली पड़ने से बचाएं",
      "sense_f2_desc": "ज़्यादा पानी से जड़ें सड़ने और खाद बह जाने की समस्या से बचाता है।",
      "sense_f3_title": "मोबाइल पर सूखा/गीला अलर्ट",
      "sense_f3_desc": "मिट्टी सूखने पर फोन पर घंटी बजाकर सूचना देता है।",
      "sense_f4_title": "सोलर से चार्ज",
      "sense_f4_desc": "सोलर पैनल के कारण कभी बैटरी बदलने या चार्ज करने की चिंता नहीं।",
      "sense_f5_title": "काली, लाल या रेतीली मिट्टी में कारगर",
      "sense_f5_desc": "हर प्रकार की मिट्टी के लिए सही और सटीक माप।",
      "sense_f6_title": "मजबूत और टिकाऊ",
      "sense_f6_desc": "ट्रैक्टर निकलने और पशुओं के बीच भी सुरक्षित रहने वाला मजबूत डिजाइन।",

      // iNet Tab
      "net_kicker": "लंबी दूरी का वायरलेस हब",
      "net_title": "iNet फार्म वायरलेस गेटवे",
      "net_lead": "पूरे खेत को आपस में जोड़ता है। खेत में किसी वाई-फाई या ब्रॉडबैंड की ज़रूरत नहीं। 3 किलोमीटर दूर तक मोटर, वाल्व और सेंसर को मोबाइल से जोड़े रखता है।",
      "net_f1_title": "3 किमी लंबी वायरलेस रेंज",
      "net_f1_desc": "पेड़ों और ढलानों के पार भी दूर स्थित बोरवेल तक सिग्नल पहुंचाता है।",
      "net_f2_title": "अंदर 4G सिम स्लॉट",
      "net_f2_desc": "सीधे मोबाइल नेटवर्क पर काम करता है — जहां फोन का टावर है वहां चलता है।",
      "net_f3_title": "12V सोलर पैनल",
      "net_f3_desc": "खुद के सोलर पैनल से चलता है — खेत में बिजली न हो तब भी काम करता है।",
      "net_f4_title": "खेत में वाई-फाई की ज़रूरत नहीं",
      "net_f4_desc": "आपको खेत में कोई अलग से इंटरनेट या डोंगल लगाने की ज़रूरत नहीं।",
      "net_f5_title": "तुरंत मोबाइल अलर्ट",
      "net_f5_desc": "मोटर ट्रिप होने या बिजली जाने पर 2 सेकंड में फोन पर सूचना देता है।",
      "net_f6_title": "आकाशीय बिजली से सुरक्षा",
      "net_f6_desc": "वोल्टेज झटकों और आकाशीय बिजली से सुरक्षित रखने वाला सर्किट।",

      // Accessories Tab
      "acc_kicker": "प्रमाणित कृषि उपकरण",
      "acc_title": "मजबूत वाल्व और बिजली सुरक्षा फिटिंग्स",
      "acc_lead": "iRoot के साथ 100% सटीक काम करने वाले भारी लोहे के वाल्व, प्रेशर गेज और बिजली सुरक्षा बॉक्स।",

      // Real Farm Situations
      "sol_badge": "खेत की असली समस्याएं",
      "sol_title": "iROOT खेत की मुश्किलों को <span class=\"gradient-text\">कैसे आसान बनाता है</span>",
      "sol_desc": "नीचे दी गई किसी भी परिस्थिति पर क्लिक करें और देखें कि iRoot आपके खेत और मोटर को कैसे सुरक्षित रखता है।",

      "sc_heat": "☀️ दोपहर की कड़ी धूप (42°C)",
      "sc_heat_sub": "मिट्टी की नमी तेज़ी से कम होती है",
      "sc_phase": "⚠️ बिजली का फेज उड़ना",
      "sc_phase_sub": "Y-फेज में वोल्टेज खत्म हो जाना",
      "sc_rain": "🌧️ बेमौसम भारी बारिश",
      "sc_rain_sub": "खेत में पानी भर जाना",
      "sc_night": "🌙 रात को बिजली आना",
      "sc_night_sub": "रात 2 बजे बिजली आने पर",

      // Calculator
      "calc_badge": "बचत का हिसाब",
      "calc_title": "अपने खेत की <span class=\"gradient-text\">वार्षिक बचत जानें</span>",
      "calc_desc": "देखें कि iRoot लगाने से आपके बिजली बिल, पानी और मोटर रिपेयर के कितने रुपए हर साल बचेंगे।",
      "calc_lbl_area": "खेत का कुल रकबा (एकड़):",
      "calc_lbl_crop": "मुख्य फसल:",
      "calc_lbl_method": "पानी देने का वर्तमान तरीका:",
      "calc_lbl_source": "पानी का मुख्य स्रोत:",
      "calc_res_title": "प्रति वर्ष अनुमानित बचत",
      "calc_res_water": "बचाया गया सिंचाई पानी:",
      "calc_res_power": "बिजली बिल में बचत:",
      "calc_res_motor": "मोटर जलने व रिपेयरिंग की बचत:",
      "calc_res_labor": "खेत जाने के घंटों की बचत:",
      "calc_btn": "खेत के लिए फ्री सलाह बुक करें",

      // Comparison Table
      "comp_badge": "सीधी तुलना",
      "comp_title": "पारंपरिक खेती बनाम <span class=\"gradient-text\">iROOT का तरीका</span>",
      "comp_col_param": "खेती की चुनौती",
      "comp_col_trad": "पुराना तरीका",
      "comp_col_iroot": "iRoot लगाने के बाद",
      "comp_r1_title": "मोटर चालू करना",
      "comp_r1_trad": "रात में अंधेरे, बारिश और कीचड़ में स्टार्टर रूम तक चलकर जाना",
      "comp_r1_iroot": "घर बैठे बिस्तर से मोबाइल पर एक टच करके चालू करना",
      "comp_r2_title": "मोटर जलने का खतरा",
      "comp_r2_trad": "फेज कट या लो वोल्टेज से मोटर फुंकना (₹15,000-40,000 का नुकसान)",
      "comp_r2_iroot": "फेज कट या पानी खत्म होने पर 0.1 सेकंड में मोटर अपने आप बंद",
      "comp_r3_title": "क्यारियों के वाल्व बदलना",
      "comp_r3_trad": "गीले खेत में मीलों घूमकर भारी लोहे के वाल्व हाथ से घुमाना",
      "comp_r3_iroot": "मोबाइल ऐप से अलग-अलग क्यारियों के वाल्व घर बैठे खोलना/बंद करना",
      "comp_r4_title": "पानी की सही मात्रा",
      "comp_r4_trad": "ऊपरी मिट्टी देखकर अंदाज़ा लगाना — कम या ज़्यादा पानी से फसल खराब",
      "comp_r4_iroot": "जड़ों की नमी का सटीक प्रतिशत फोन पर लाइव दिखना",
      "comp_r5_title": "लाइट जाने के बाद",
      "comp_r5_trad": "लाइट वापस आने पर फिर से खेत जाकर स्टार्टर ऑन करना",
      "comp_r5_iroot": "सुरक्षित वोल्टेज जाँचकर मोटर अपने आप चालू हो जाना",

      // FAQ
      "faq_badge": "अक्सर पूछे जाने वाले सवाल",
      "faq_title": "किसानों के <span class=\"gradient-text\">मुख्य सवाल और जवाब</span>",
      "faq_desc": "वो सभी जरूरी बातें जो किसान भाई हमसे अक्सर पूछते हैं।",
      "faq_q1": "क्या iPump मेरे पुराने स्टार्टर के साथ लग जाएगा?",
      "faq_a1": "हाँ, बिल्कुल! iPump आपके किसी भी मौजूदा स्टार्टर (DOL स्टार्टर, स्टार-डेल्टा स्टार्टर या डिजिटल पैनल) के साथ आसानी से जुड़ जाता है। इसे लगाने में सिर्फ 15 से 20 मिनट लगते हैं और पुरानी वायरिंग से कोई छेड़छाड़ नहीं करनी पड़ती।",
      "faq_q2": "क्या खेत में इंटरनेट या वाई-फाई की ज़रूरत पड़ेगी?",
      "faq_a2": "नहीं! खेत में किसी भी प्रकार के वाई-फाई या ब्रॉडबैंड की कोई ज़रूरत नहीं है। iNet हब में अपनी 4G सिम लगती है और यह 3 किलोमीटर तक वायरलेस सिग्नल के ज़रिए खेत के उपकरणों को सीधे आपके फोन से जोड़ देता है।",
      "faq_q3": "यह मोटर को जलने से कैसे बचाता है?",
      "faq_a3": "iPump लगातार तीनों फेज (R-Y-B), वोल्टेज और पानी के फ्लो की निगरानी करता है। जैसे ही एक फेज उड़ता है, वोल्टेज कम या ज़्यादा होता है, या बोरवेल में पानी खत्म होता है (ड्राई रन), यह 0.1 सेकंड में मोटर बंद कर देता है जिससे कॉइल कभी नहीं जलती।",
      "faq_q4": "क्या परिवार के बाकी लोग भी फोन से चला सकते हैं?",
      "faq_a4": "हाँ! आप ऐप में अपने बेटे, भाई या खेत के मजदूर को भी एक्सेस दे सकते हैं ताकि घर का कोई भी सदस्य आसानी से मोटर चालू/बंद कर सके।",
      "faq_q5": "क्या बारिश और धूप में उपकरण खराब नहीं होंगे?",
      "faq_a5": "बिल्कुल नहीं। सभी उपकरण IP65 वाटरप्रूफ और डस्टप्रूफ मजबूत बॉक्स में बंद हैं, जो भारी बारिश, तेज धूप (-20°C से +60°C) और ग्रामीण धूल-मिट्टी में सुरक्षित रहते हैं।",
      "faq_q6": "हम अपने खेत के लिए iRoot कैसे ले सकते हैं?",
      "faq_a6": "आप हमारे किसान हेल्पलाइन नंबर +91 96191 71636 पर सीधा कॉल या वॉट्सऐप कर सकते हैं, या नीचे दिए गए फॉर्म में अपना नाम और नंबर भर दें। हमारी टीम आपसे 24 घंटे में संपर्क करेगी।",

      // Contact Form
      "cont_badge": "किसान सेवा व फ्री डेमो",
      "cont_title": "हमारी कृषि टीम से बात करें: <span class=\"gradient-text\">संपर्क करें</span>",
      "cont_desc": "मोटर, बोरवेल या ड्रिप फिटिंग से जुड़ा कोई भी सवाल हो? हमारे किसान हेल्पलाइन नंबर पर संपर्क करें।",
      "cont_card_title": "Agripulse Private Limited",
      "cont_card_desc": "भारतीय किसानों को सरल, सुरक्षित और किफायती स्मार्ट सिंचाई उपकरण उपलब्ध कराने के लिए समर्पित।",
      "form_lbl_name": "पूरा नाम *",
      "form_ph_name": "जैसे: रमेश पटेल",
      "form_lbl_phone": "मोबाइल नंबर *",
      "form_ph_phone": "जैसे: 98765 43210",
      "form_lbl_loc": "राज्य और जिला *",
      "form_ph_loc": "जैसे: मध्य प्रदेश, उज्जैन",
      "form_lbl_acres": "खेत का रकबा (एकड़) *",
      "form_lbl_crop": "मुख्य फसल",
      "form_ph_crop": "जैसे: कपास, अनार, गन्ना",
      "form_lbl_notes": "मोटर एचपी या स्टार्टर की जानकारी",
      "form_ph_notes": "जैसे: 7.5 HP सबमर्सिबल, स्टार-डेल्टा स्टार्टर...",
      "form_btn_submit": "फ्री कॉल और डेमो बुक करें",

      // Modal
      "modal_title": "अनुरोध प्राप्त हुआ!",
      "modal_text": "धन्यवाद! आपका अनुरोध हमें मिल गया है। हमारे कृषि विशेषज्ञ अगले 24 घंटे में आपके मोबाइल पर संपर्क करेंगे।",
      "modal_ref_label": "रेफरेंस नंबर:",
      "modal_btn": "वेबसाइट पर लौटें",

      // Footer
      "foot_tagline": "स्मार्ट सिंचाई • मोटर की सुरक्षा • हर किसान की तरक्की।"
    }
  };

  function setLanguage(lang) {
    if (!translations[lang]) lang = 'en';

    document.documentElement.lang = lang;
    const t = translations[lang];

    // Update innerHTML
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (t[key] !== undefined) {
        el.setAttribute('placeholder', t[key]);
      }
    });

    // Update active state on all switcher buttons
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Store preference
    try {
      localStorage.setItem('iroot_lang', lang);
    } catch (e) {}

    // Dispatch event
    window.dispatchEvent(new CustomEvent('irootLanguageChanged', { detail: { lang } }));
  }

  function init() {
    let savedLang = 'en';
    try {
      savedLang = localStorage.getItem('iroot_lang') || 'en';
    } catch (e) {}

    // Bind click events on all language switchers
    document.addEventListener('click', function (e) {
      const btn = e.target.closest('.lang-toggle-btn');
      if (btn) {
        e.preventDefault();
        const targetLang = btn.getAttribute('data-lang');
        if (targetLang) {
          setLanguage(targetLang);
        }
      }
    });

    // Apply language on load
    setLanguage(savedLang);
  }

  window.iRootI18n = {
    setLanguage: setLanguage,
    translations: translations,
    getCurrentLanguage: function () {
      return document.documentElement.lang || 'en';
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
