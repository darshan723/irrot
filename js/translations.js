/* ==========================================================================
   AGRIPULSE iROOT — BILINGUAL LANGUAGE ENGINE (ENGLISH & हिन्दी)
   Crafted for Indian farmers with natural, simple, respectful phrasing.
   Brand names (Agripulse, iRoot, iPump, iValve, iSense, iNet), phone, email,
   and necessary technical units remain preserved.
   ========================================================================== */

(function () {
  'use strict';

  const translations = {
    en: {
      // Navigation & Header
      "ham_label": "Menu",
      "nav_home": "Home",
      "nav_how": "How It Works",
      "nav_products": "Products",
      "nav_sandbox": "Command Center",
      "nav_calculator": "ROI Calculator",
      "nav_benefits": "Benefits",
      "nav_about": "About",
      "nav_contact": "Contact",
      "nav_contact_btn": "Contact Us",
      "drawer_lang_title": "Language / भाषा",

      // Hero Slider - Slide 1
      "hero_s1_eyebrow": "Agripulse Private Limited",
      "hero_s1_headline": "Every Drop.<br><em>Intelligently<br>Managed.</em>",
      "hero_s1_sub": "Precision irrigation powered by intelligent IoT technology — automating every drop your farm needs.",
      "hero_s1_btn": "Discover iRoot",

      // Hero Slider - Slide 2
      "hero_s2_eyebrow": "Complete Farm Control",
      "hero_s2_headline": "One Ecosystem.<br><em>Complete<br>Control.</em>",
      "hero_s2_sub": "Sense. Connect. Automate. Monitor — all from the iRoot app, anywhere in the world.",
      "hero_s2_btn1": "Explore Ecosystem",
      "hero_s2_btn2": "How It Works",

      // Hero Slider - Slide 3
      "hero_s3_eyebrow": "Intelligent Farm Network",
      "hero_s3_headline": "Connect Every<br>Part of<br><em>Your Farm.</em>",
      "hero_s3_sub": "Monitor devices, field conditions and irrigation from one intelligent ecosystem — built for Indian agriculture.",
      "hero_s3_btn1": "How It Works",
      "hero_s3_btn2": "Why Agripulse",

      // Hero Slider - Slide 4
      "hero_s4_eyebrow": "Precision Soil Intelligence",
      "hero_s4_headline": "Sense Every Drop.<br><em>Save Every<br>Litre.</em>",
      "hero_s4_sub": "iSense monitors soil moisture at up to 4 root depths — triggering precision irrigation only when your crops truly need it.",
      "hero_s4_btn1": "Explore iSense",
      "hero_s4_btn2": "Calculate Savings",

      // How It Works (Story Section)
      "story_badge": "The Agripulse Journey",
      "story_title": "HOW IT WORKS: <span class=\"gradient-text\">FROM SENSOR TO CLOUD</span>",
      "story_desc": "Six synchronized steps designed to automate, protect, and optimize your entire agricultural operation.",
      "step1_num": "01 SENSE",
      "step1_title": "Soil Sensing",
      "step1_desc": "Multi-depth sensors read moisture levels directly at root depth.",
      "step2_num": "02 TRANSMIT",
      "step2_title": "LoRa Wireless",
      "step2_desc": "Long-range telemetry broadcasts up to 3km without cellular dependency.",
      "step3_num": "03 ANALYZE",
      "step3_title": "Cloud Logic",
      "step3_desc": "Automated thresholds determine exact crop hydration needs in real time.",
      "step4_num": "04 AUTOMATE",
      "step4_title": "Motor Control",
      "step4_desc": "iPump triggers starter switches with phase, voltage, and dry-run safety.",
      "step5_num": "05 DISTRIBUTE",
      "step5_title": "Smart Valves",
      "step5_desc": "iValve routes water precisely to designated zones without field visits.",
      "step6_num": "06 MONITOR",
      "step6_title": "App Feedback",
      "step6_desc": "Growers receive instantaneous alerts, telemetry logs, and flow verification.",

      // Architecture Diagram
      "arch_title": "INTERACTIVE FIELD-TO-CLOUD ARCHITECTURE",
      "arch_node1_name": "Field Sensors",
      "arch_node1_role": "Root Depth Probes",
      "arch_node2_name": "Wireless Node",
      "arch_node2_role": "3km LoRa Telemetry",
      "arch_node3_name": "Cloud Engine",
      "arch_node3_role": "Rule & Schedule Engine",
      "arch_node4_name": "Motor Controller",
      "arch_node4_role": "iPump Safety Starter",
      "arch_node5_name": "Field Valves",
      "arch_node5_role": "iValve Solenoid Matrix",
      "arch_payload_label": "ACTIVE PAYLOAD:",

      // Products Section
      "prod_badge": "Engineered Product Lineup",
      "prod_title": "THE COMPLETE <span class=\"gradient-text\">iROOT ECOSYSTEM</span>",
      "prod_desc": "Modular agricultural IoT hardware built for severe Indian rural operating environments.",
      "prod_hero_title": "iRoot: Complete Smart Irrigation Ecosystem",
      "prod_hero_desc": "Designed for modern farmers, iRoot seamlessly connects your farm, devices, and data — enabling smarter irrigation for greater farming success.",

      // Product Tabs
      "tab_app_btn": "iRoot App",
      "tab_pump_btn": "iPump Controller",
      "tab_valve_btn": "iValve Controller",
      "tab_sense_btn": "iSense Soil Probe",
      "tab_net_btn": "iNet Gateway",
      "tab_acc_btn": "Accessories",

      // Tab 1: iRoot App
      "app_kicker": "Mobile Ecosystem Command",
      "app_title": "iRoot Mobile App",
      "app_lead": "Manage your complete smart irrigation setup from anywhere in the world. Monitor soil moisture, trigger pumps, control solenoid valves, and view telemetry in real time.",
      "app_f1_title": "Real-Time Monitoring",
      "app_f1_desc": "Instant readings of soil moisture, pump voltage, and water meter flow.",
      "app_f2_title": "Smart Scheduling",
      "app_f2_desc": "Automate irrigation cycles based on soil thresholds, timer, or calendar.",
      "app_f3_title": "Instant Push & SMS Alerts",
      "app_f3_desc": "Receive immediate alerts for dry runs, phase failures, and leaks.",
      "app_f4_title": "Multi-Farm Support",
      "app_f4_desc": "Manage multiple borewells, pump sets, and distant plots from one login.",
      "app_f5_title": "Cloud Analytics",
      "app_f5_desc": "Historical charts of water consumed, power saved, and moisture trends.",
      "app_f6_title": "Farmer-Friendly UI",
      "app_f6_desc": "Intuitive vernacular interface designed specifically for rural growers.",

      // Tab 2: iPump Controller
      "pump_kicker": "Smart Motor Automation & Protection",
      "pump_title": "iPump Controller",
      "pump_lead": "Automate irrigation pumps, prevent motor burnout with full electrical protection, and monitor power parameters 24x7.",
      "pump_f1_title": "Dry Run Protection",
      "pump_f1_desc": "Detects borewell water shortage and trips pump immediately to prevent coil burning.",
      "pump_f2_title": "3-Phase Monitoring",
      "pump_f2_desc": "Protects against phase loss, phase reverse, and unbalance across RYB lines.",
      "pump_f3_title": "High & Low Voltage Trip",
      "pump_f3_desc": "Safeguards against erratic rural power surges and severe low voltages.",
      "pump_f4_title": "Overload Current Cut-Off",
      "pump_f4_desc": "Stops motor when mechanical jams or sand cause current spikes.",
      "pump_f5_title": "Easy Starter Integration",
      "pump_f5_desc": "Compatible with DOL, Star-Delta, and Electronic starters.",
      "pump_f6_title": "Local Manual Control",
      "pump_f6_desc": "Operate the pump physically using ON, OFF, and ACK buttons on the enclosure.",

      // Tab 3: iValve Controller
      "valve_kicker": "Smart Valve Controller",
      "valve_title": "iValve Controller",
      "valve_lead": "iValve enables smarter irrigation with remote control, real-time monitoring, and reliable connectivity. Control up to 10 latching solenoid valves from a single unit with solar autonomy.",
      "valve_f1_title": "Multi-Valve Control",
      "valve_f1_desc": "Control up to 10 Latching solenoid valves from one single controller.",
      "valve_f2_title": "Remote Monitoring",
      "valve_f2_desc": "Monitor and control irrigation valves through the cloud from anywhere.",
      "valve_f3_title": "Real-Time Alerts",
      "valve_f3_desc": "Instant notifications for line faults, pressure drops, and operational events.",
      "valve_f4_title": "Rugged Outdoor Design",
      "valve_f4_desc": "IP65 weather-resistant enclosure engineered for harsh agricultural environments.",
      "valve_f5_title": "Solar Powered",
      "valve_f5_desc": "Integrated solar charging with rechargeable battery for 24x7 continuous operation.",
      "valve_f6_title": "Smart Scheduling",
      "valve_f6_desc": "Automate zone-by-zone irrigation with flexible, crop-calibrated scheduling.",

      // Tab 4: iSense
      "sense_kicker": "Smart Soil Moisture Monitoring Device",
      "sense_title": "iSense Soil Senses",
      "sense_lead": "iSense is a smart soil moisture sensor for precision irrigation, enabling smarter decisions and greater farming success with accurate multi-depth calibration and instant threshold alerts.",
      "sense_f1_title": "Multi-Depth Sensing",
      "sense_f1_desc": "Monitors moisture at multiple root depths (10cm, 20cm, 40cm, 60cm).",
      "sense_f2_title": "Avoid Over-Irrigation",
      "sense_f2_desc": "Supplies water only when root moisture dips below crop threshold.",
      "sense_f3_title": "Solar Autonomous",
      "sense_f3_desc": "Internal battery recharged daily via built-in high efficiency solar cell.",
      "sense_f4_title": "Long Range Wireless",
      "sense_f4_desc": "Broadcasts telemetry up to 3km directly to the iNet central gateway.",
      "sense_f5_title": "Nutrient Preservation",
      "sense_f5_desc": "Prevents valuable soil fertilizer runoff caused by excess watering.",
      "sense_f6_title": "Rugged Outdoor Design",
      "sense_f6_desc": "Dust-and-water-resistant enclosure built to withstand direct tractor passes and rain.",

      // Tab 5: iNet Gateway
      "net_kicker": "Long-Range Telemetry Hub",
      "net_title": "iNet Gateway",
      "net_lead": "The central nerve center of your smart farm. Connects all iSense probes and iValve controllers over LoRa and syncs data to the cloud via 4G cellular.",
      "net_f1_title": "3km LoRa Telemetry",
      "net_f1_desc": "Covers massive farm acreage without costly trenching or wiring.",
      "net_f2_title": "4G VoLTE Connectivity",
      "net_f2_desc": "Reliable cellular transmission across all Indian telecom providers.",
      "net_f3_title": "Integrated GPS",
      "net_f3_desc": "Precise geographic coordinates and satellite time synchronization.",
      "net_f4_title": "12V Solar Powered",
      "net_f4_desc": "Equipped with dedicated solar panel and 72-hour battery backup.",
      "net_f5_title": "Smart Edge Computing",
      "net_f5_desc": "Maintains scheduled irrigation cycles even when internet connection drops.",
      "net_f6_title": "Centralized Cloud Support",
      "net_f6_desc": "Monitor all connected devices from the cloud and get remote support for rapid issue resolution.",

      // Tab 6: Accessories
      "acc_kicker": "Field-Grade Accessories",
      "acc_title": "Accessories & Spares",
      "acc_lead": "Industrial latching solenoid valves, pulse flowmeters, pressure sustain valves, and electrical surge panels engineered specifically for iRoot systems.",

      // Interactive Simulators UI
      "sim_controller_title": "INTERACTIVE HARDWARE CONTROLLER",
      "sim_phase_active": "RYB Phase Sensor Active",
      "sim_valve_title": "10-ZONE LATCHING SOLENOID MATRIX",
      "sim_solar_reserve": "Solar: 90-Day Reserve",
      "sim_valve_desc": "Click any solenoid zone below to toggle water delivery line. Digital meter registers pulses in real time:",
      "sim_test_safeguards": "Test Fault Protection Safeguards (PDF Spec):",
      "sim_btn_dryrun": "Simulate Dry Run",
      "sim_btn_phasefail": "Phase Failure (R-Y-B)",
      "sim_btn_overload": "Overload Current",
      "sim_btn_voltage": "Low Voltage Trip",
      "sim_btn_start": "START (ON)",
      "sim_btn_stop": "STOP (OFF)",
      "sim_btn_ack": "ACK / RESET",
      "sim_total_flow": "Total Active Flow:",
      "sim_meter_inputs": "Water Meter Inputs:",
      "sim_radar_title": "3KM LORA MESH RADAR COVERAGE",
      "sim_gps_sync": "GPS Sync Active",
      "sim_soil_title": "PRECISION SOIL PROFILE SIMULATOR",
      "sim_soil_depth": "Depth: 10cm to 60cm",
      "sim_adjust_moisture": "ADJUST SOIL MOISTURE TEST LEVEL:",

      // Sandbox Section
      "sand_badge": "Interactive Control Center",
      "sand_title": "COMMAND CENTER <span class=\"gradient-text\">TELEMETRY</span>",
      "sand_desc": "Experience how the iRoot ecosystem detects changing field conditions and automates irrigation in real time.",
      "scen1_name": "Normal Day",
      "scen1_desc": "Optimal moisture, scheduled cycles",
      "scen2_name": "Rain Detected",
      "scen2_desc": "Smart pause, 100% water saved",
      "scen3_name": "Low Voltage",
      "scen3_desc": "Auto trip, motor protected",
      "scen4_name": "Night Drip",
      "scen4_desc": "Off-peak hours, low evaporation",
      "node_moisture": "SOIL MOISTURE",
      "node_motor": "MOTOR STATE",
      "node_valves": "ACTIVE VALVES",
      "node_lora": "LORA NETWORK",
      "sb_reaction_label": "SYSTEM REACTION LOG:",

      // ROI Calculator
      "calc_badge": "Financial & Resource Impact",
      "calc_title": "CALCULATE YOUR <span class=\"gradient-text\">FARM SAVINGS</span>",
      "calc_desc": "See how much water, electricity, diesel, and labor you save every season with iRoot.",
      "calc_in_area": "Farm Land Area (Acres):",
      "calc_in_crop": "Primary Crop Category:",
      "calc_in_pump": "Motor Pump Power (HP):",
      "calc_in_power": "Primary Irrigation Source:",
      "calc_crop_sugarcane": "Sugarcane (High Water Demand)",
      "calc_crop_cotton": "Cotton / Cash Crops",
      "calc_crop_orchard": "Fruit Orchards (Pomegranate, Banana, Citrus)",
      "calc_crop_vegetables": "Vegetables & Polyhouse",
      "calc_crop_grains": "Wheat, Paddy & Grains",
      "calc_pwr_grid": "Grid Electric Power (Subsidized/Commercial)",
      "calc_pwr_diesel": "Diesel Pump Engine (High Operating Cost)",
      "calc_pwr_solar": "Solar Agriculture Pump",
      "calc_res_title": "ESTIMATED ANNUAL IMPACT",
      "calc_res_water": "Water Conserved Annually:",
      "calc_res_power": "Electricity / Diesel Saved:",
      "calc_res_labor": "Labor & Fuel Cost Savings:",
      "calc_res_yield": "Expected Crop Yield Boost:",
      "calc_res_btn": "Get Customized Proposal",

      // Benefits Section
      "ben_badge": "Proven On Indian Farms",
      "ben_title": "WHY GROWERS <span class=\"gradient-text\">TRUST AGRIPULSE</span>",
      "ben_desc": "Transforming agricultural operations with field-proven IoT hardware built to endure real farming conditions.",
      "ben1_title": "Up to 40% Water Savings",
      "ben1_desc": "Eliminate deep percolation and surface evaporation with root-targeted precision irrigation.",
      "ben2_title": "Zero Motor Burnouts",
      "ben2_desc": "Instant trips on dry run, phase failure, or voltage fluctuations safeguard pump windings.",
      "ben3_title": "20% - 25% Higher Crop Yield",
      "ben3_desc": "Healthy crops free from moisture stress or waterlogged root rot yield consistently better harvests.",
      "ben4_title": "Eliminate Midnight Field Trips",
      "ben4_desc": "Automate pump runs safely during erratic 3-phase night power supply without risking personal safety.",
      "comp_title": "Traditional Farm Practice vs. The Agripulse iRoot Way",
      "comp_param": "Irrigation Parameter",
      "comp_trad": "Traditional Farming",
      "comp_iroot": "Agripulse iRoot Ecosystem",
      "comp_r1_param": "Water Scheduling",
      "comp_r1_trad": "Guesswork & visual crop inspection",
      "comp_r1_iroot": "Precision sensor calibrated threshold",
      "comp_r2_param": "Motor Safety",
      "comp_r2_trad": "Frequent rewinding due to dry run / single-phasing",
      "comp_r2_iroot": "Full 3-phase, dry run & voltage safeguard",
      "comp_r3_param": "Labor & Convenience",
      "comp_r3_trad": "Walking miles at 2 AM in dark fields",
      "comp_r3_iroot": "Automated valves & smartphone control",
      "comp_r4_param": "Water & Power Cost",
      "comp_r4_trad": "Excess pumping depletes borewells rapidly",
      "comp_r4_iroot": "Saves up to 40% water & reduces bills",

      // About Section
      "about_badge": "About Agripulse Private Limited",
      "about_title": "POWERING <span class=\"gradient-text\">FARMING SUCCESS.</span>",
      "about_p1": "At Agripulse, we empower growers to turn smarter irrigation into greater success. With intelligent automation, real-time monitoring, and reliable connectivity, iRoot helps optimize water, improve productivity, simplify operations, and build a more successful and sustainable future for farming.",
      "about_p2": "Agripulse is committed to empowering farmers with innovative IoT solutions that make irrigation smarter, farming more productive, and agriculture sustainable for future generations.",
      "about_vision_title": "OUR VISION",
      "about_vision_desc": "Sustainable groundwater security through automated precision.",
      "about_eng_title": "OUR ENGINEERING",
      "about_eng_desc": "Hardware tested for -20°C to +60°C and 415V electrical variations.",
      "about_btn": "Partner With Agripulse",
      "about_stat1_num": "40%",
      "about_stat1_label": "Water Savings",
      "about_stat2_num": "3km",
      "about_stat2_label": "Wireless Range",
      "about_stat3_num": "24/7",
      "about_stat3_label": "Field Protection",

      // Contact Section
      "cont_badge": "Get In Touch",
      "cont_title": "TRANSFORM YOUR FARM: <span class=\"gradient-text\">GET IN TOUCH</span>",
      "cont_desc": "Connect with our agricultural IoT specialists for pricing, dealership inquiries, or product information.",
      "cont_card_title": "Agripulse Private Limited",
      "cont_card_desc": "Visit our corporate office or reach our direct support line to explore the complete iRoot Smart Irrigation Ecosystem.",
      "cont_meta_web": "OFFICIAL WEBSITE",
      "cont_meta_email": "EMAIL INQUIRIES",
      "cont_meta_phone": "TELEPHONE / WHATSAPP",
      "cont_meta_geo": "GEOGRAPHIC PRESENCE",
      "cont_meta_geo_val": "India (Pan-India Deployment & Support)",
      "cont_follow": "FOLLOW AGRIPULSE",
      "cont_form_title": "Send Us a Message",
      "cont_form_desc": "Please share your farm details or requirements and our team will get in touch with you promptly.",
      "form_lbl_name": "Full Name *",
      "form_ph_name": "e.g. Bhupendra Chouhan",
      "form_lbl_phone": "Phone Number *",
      "form_ph_phone": "+91 98765 43210",
      "form_lbl_email": "Email Address",
      "form_ph_email": "farmer@example.com",
      "form_lbl_loc": "Farm Location / State *",
      "form_ph_loc": "e.g. Nashik, Maharashtra",
      "form_lbl_crop": "Primary Crop",
      "form_ph_crop": "e.g. Sugarcane / Cotton",
      "form_lbl_acres": "Total Farm Size (Acres)",
      "form_ph_acres": "e.g. 15",
      "form_lbl_interest": "Products of Interest:",
      "form_lbl_msg": "Your Farm Requirements / Inquiries",
      "form_ph_msg": "Please share your borewell depth, current motor starter setup, or specific questions...",
      "form_btn_submit": "Send Message",

      // Feedback Modal
      "modal_title": "Message Sent!",
      "modal_text": "Thank you! Your message has been received. Our team will contact you within 24 hours.",
      "modal_ref_label": "REFERENCE CODE:",
      "modal_close_btn": "Close Window",

      // Footer
      "foot_desc": "Empowering growers with precision IoT irrigation technology to optimize water usage, protect motors, and maximize agricultural profitability.",
      "foot_col1_title": "Quick Navigation",
      "foot_col2_title": "iRoot Suite",
      "foot_col3_title": "Connect & Support",
      "foot_copy": "Agripulse Private Limited. All Rights Reserved.",
      "foot_tagline": "Smart Technology. Better Efficiency. Farming Success."
    },

    hi: {
      // Navigation & Header
      "ham_label": "मेनू",
      "nav_home": "होम",
      "nav_how": "यह कैसे काम करता है",
      "nav_products": "हमारे उत्पाद",
      "nav_sandbox": "कंट्रोल सेंटर",
      "nav_calculator": "बचत कैलकुलेटर",
      "nav_benefits": "किसानों के फायदे",
      "nav_about": "हमारे बारे में",
      "nav_contact": "संपर्क करें",
      "nav_contact_btn": "संपर्क करें",
      "drawer_lang_title": "भाषा / Language",

      // Hero Slider - Slide 1
      "hero_s1_eyebrow": "Agripulse Private Limited",
      "hero_s1_headline": "हर बूँद का सही उपयोग।<br><em>स्मार्ट सिंचाई<br>प्रबंधन।</em>",
      "hero_s1_sub": "स्मार्ट IoT तकनीक द्वारा सटीक सिंचाई — आपकी फसल को सही समय पर सही पानी और मोटर की पूरी सुरक्षा।",
      "hero_s1_btn": "iRoot जानें",

      // Hero Slider - Slide 2
      "hero_s2_eyebrow": "पूरा खेत आपकी मुट्ठी में",
      "hero_s2_headline": "एक सिस्टम।<br><em>पूरा<br>नियंत्रण।</em>",
      "hero_s2_sub": "नमी जाँचें, मोटर चलाएँ, वाल्व नियंत्रित करें — सब कुछ iRoot मोबाइल ऐप से, घर बैठे आसानी से।",
      "hero_s2_btn1": "सिस्टम देखें",
      "hero_s2_btn2": "कैसे काम करता है",

      // Hero Slider - Slide 3
      "hero_s3_eyebrow": "खेत का स्मार्ट नेटवर्क",
      "hero_s3_headline": "खेत के हर हिस्से को<br><em>आपस में जोड़ें।</em>",
      "hero_s3_sub": "मोटर, वाल्व और खेत की नमी को एक ही सिस्टम से जोड़ें — भारतीय किसानों के लिए खास तौर पर निर्मित।",
      "hero_s3_btn1": "कैसे काम करता है",
      "hero_s3_btn2": "Agripulse क्यों चुनें",

      // Hero Slider - Slide 4
      "hero_s4_eyebrow": "मिट्टी की सटीक नमी जाँच",
      "hero_s4_headline": "हर बूँद की बचत।<br><em>ज़्यादा<br>पैदावार।</em>",
      "hero_s4_sub": "iSense मिट्टी में 4 गहराइयों तक नमी नापता है — जिससे पानी तभी चले जब फसल को सच में ज़रूरत हो।",
      "hero_s4_btn1": "iSense देखें",
      "hero_s4_btn2": "बचत का हिसाब लगाएँ",

      // How It Works (Story Section)
      "story_badge": "Agripulse सिंचाई प्रक्रिया",
      "story_title": "यह कैसे काम करता है: <span class=\"gradient-text\">सेंसर से मोबाइल तक</span>",
      "story_desc": "खेती और सिंचाई को आसान, सुरक्षित और पूरी तरह ऑटोमैटिक बनाने वाले 6 आसान चरण।",
      "step1_num": "01 जाँच",
      "step1_title": "मिट्टी की नमी जाँच",
      "step1_desc": "iSense सेंसर जड़ के पास मिट्टी की नमी और तापमान की सटीक जाँच करता है।",
      "step2_num": "02 संदेश",
      "step2_title": "वायरलेस सिग्नल",
      "step2_desc": "बिना इंटरनेट और बिना किसी तार के 3 किलोमीटर तक सिग्नल भेजता है।",
      "step3_num": "03 फैसला",
      "step3_title": "क्लाउड विश्लेषण",
      "step3_desc": "सिस्टम तुरंत तय करता है कि किस फसल को कितने पानी की ज़रूरत है।",
      "step4_num": "04 ऑटोमेशन",
      "step4_title": "मोटर कंट्रोल",
      "step4_desc": "iPump अपने आप मोटर चालू करता है और वोल्टेज व ड्राई रन से बचाता है।",
      "step5_num": "05 सप्लाई",
      "step5_title": "स्मार्ट वाल्व",
      "step5_desc": "iValve बिना खेत जाए सही क्यारी और ड्रिप लाइन में पानी चालू करता है।",
      "step6_num": "06 निगरानी",
      "step6_title": "मोबाइल पर रिपोर्ट",
      "step6_desc": "किसान अपने फोन पर मोटर चालू होने, करंट और पानी के फ्लो की पूरी जानकारी पाते हैं।",

      // Architecture Diagram
      "arch_title": "खेत से मोबाइल तक का सीधा कनेक्शन",
      "arch_node1_name": "खेत के सेंसर",
      "arch_node1_role": "जड़ों में नमी जाँच",
      "arch_node2_name": "वायरलेस नोड",
      "arch_node2_role": "3 किमी लंबी रेंज",
      "arch_node3_name": "क्लाउड सर्वर",
      "arch_node3_role": "स्मार्ट ऑटोमेशन नियम",
      "arch_node4_name": "मोटर कंट्रोलर",
      "arch_node4_role": "iPump मोटर सुरक्षा",
      "arch_node5_name": "खेत के वाल्व",
      "arch_node5_role": "iValve ऑटोमैटिक वाल्व",
      "arch_payload_label": "खेत का लाइव डेटा:",

      // Products Section
      "prod_badge": "हमारे प्रमुख उत्पाद",
      "prod_title": "संपूर्ण <span class=\"gradient-text\">iROOT इकोसिस्टम</span>",
      "prod_desc": "भारतीय खेतों और ग्रामीण परिस्थितियों के लिए खास तौर पर तैयार किए गए मजबूत IoT उत्पाद।",
      "prod_hero_title": "iRoot: संपूर्ण स्मार्ट सिंचाई इकोसिस्टम",
      "prod_hero_desc": "आधुनिक किसानों के लिए निर्मित, iRoot आपके खेत, उपकरणों और पानी को आपस में जोड़कर सिंचाई को आसान और सफल बनाता है।",

      // Product Tabs
      "tab_app_btn": "iRoot ऐप",
      "tab_pump_btn": "iPump मोटर कंट्रोलर",
      "tab_valve_btn": "iValve वाल्व कंट्रोलर",
      "tab_sense_btn": "iSense नमी सेंसर",
      "tab_net_btn": "iNet गेटवे",
      "tab_acc_btn": "अतिरिक्त उपकरण",

      // Tab 1: iRoot App
      "app_kicker": "मोबाइल ऐप कंट्रोल",
      "app_title": "iRoot मोबाइल ऐप",
      "app_lead": "दुनिया के किसी भी कोने से अपने पूरे खेत की सिंचाई और मोटर को आसानी से नियंत्रित करें। मिट्टी की नमी देखें, मोटर चलाएँ और वाल्व खोलें।",
      "app_f1_title": "खेत की लाइव स्थिति",
      "app_f1_desc": "मिट्टी की नमी, मोटर चालू/बंद स्थिति और पानी का फ्लो तुरंत देखें।",
      "app_f2_title": "ऑटोमैटिक टाइमर",
      "app_f2_desc": "समय या मिट्टी की नमी के अनुसार अपने आप पानी चालू/बंद होने का शेड्यूल बनाएँ।",
      "app_f3_title": "तुरंत अलर्ट और सूचनाएँ",
      "app_f3_desc": "बिजली कटने, फेज उड़ने या मोटर बंद होने पर तुरंत फोन पर अलर्ट पाएँ।",
      "app_f4_title": "पूरे परिवार के लिए",
      "app_f4_desc": "खेत का कंट्रोल परिवार के अन्य सदस्यों या कामगारों के साथ साझा करें।",
      "app_f5_title": "बचत और पानी की रिपोर्ट",
      "app_f5_desc": "हर महीने कितना पानी और बिजली बची, इसकी पूरी रिपोर्ट ऐप पर देखें।",
      "app_f6_title": "किसानों के लिए आसान",
      "app_f6_desc": "सरल और हिंदी में उपलब्ध ऐप, जिसे कोई भी किसान आसानी से चला सकता है।",

      // Tab 2: iPump Controller
      "pump_kicker": "स्मार्ट मोटर ऑटोमेशन व सुरक्षा",
      "pump_title": "iPump मोटर कंट्रोलर",
      "pump_lead": "मोटर को जलने से बचाएँ — लो वोल्टेज, फेज उड़ने और सूखे में मोटर चलने (ड्राई रन) से 100% सुरक्षा, 24 घंटे ऑटोमैटिक निगरानी।",
      "pump_f1_title": "ड्राई रन सुरक्षा (पानी खत्म)",
      "pump_f1_desc": "कुएं या बोरवेल में पानी खत्म होते ही मोटर अपने आप बंद हो जाती है ताकि कॉइल न जले।",
      "pump_f2_title": "3-फेज बिजली सुरक्षा",
      "pump_f2_desc": "एक फेज उड़ने (सिंगल फेजिंग) या उल्टे फेज पर मोटर चलने से तुरंत सुरक्षा।",
      "pump_f3_title": "हाई व लो वोल्टेज ट्रिप",
      "pump_f3_desc": "बिजली के खतरनाक उतार-चढ़ाव में मोटर को सुरक्षित रखता है।",
      "pump_f4_title": "ओवरलोड करंट कट-ऑफ",
      "pump_f4_desc": "रेत फँसने या लोड बढ़ने पर मोटर को तुरंत बंद कर देता है।",
      "pump_f5_title": "सभी स्टार्टर में फिट",
      "pump_f5_desc": "साधारण DOL, स्टार-डेल्टा या इलेक्ट्रॉनिक स्टार्टर के साथ आसानी से जुड़ जाता है।",
      "pump_f6_title": "लोकल बटन कंट्रोल",
      "pump_f6_desc": "मोबाइल के साथ-साथ बॉक्स पर दिए गए स्टार्ट, स्टॉप और रिसेट बटन से भी चलाएँ।",

      // Tab 3: iValve Controller
      "valve_kicker": "स्मार्ट वाल्व कंट्रोलर",
      "valve_title": "iValve वाल्व कंट्रोलर",
      "valve_lead": "एक ही कंट्रोलर से 10 वाल्वों तक पानी की सप्लाई को सोलर ऊर्जा से नियंत्रित करें — रात में क्यारी बदलने खेत जाने की कोई ज़रूरत नहीं।",
      "valve_f1_title": "10 वाल्व तक कंट्रोल",
      "valve_f1_desc": "खेत की अलग-अलग क्यारियों और ड्रिप लाइनों को एक ही कंट्रोलर से चलाएँ।",
      "valve_f2_title": "घर बैठे वाल्व बदलें",
      "valve_f2_desc": "मोबाइल ऐप से किसी भी वाल्व को खोलें या बंद करें।",
      "valve_f3_title": "लीकेज व फ्लो अलर्ट",
      "valve_f3_desc": "पाइप फटने या पानी रुकने पर मोबाइल पर तुरंत चेतावनी पाएँ।",
      "valve_f4_title": "मजबूत वाटरप्रूफ बॉडी",
      "valve_f4_desc": "IP65 वाटरप्रूफ एनक्लोजर — बारिश, धूप और धूल में भी सुरक्षित।",
      "valve_f5_title": "सोलर पावर व बैटरी",
      "valve_f5_desc": "धूप से चार्ज होने वाला सोलर पैनल — 90 दिनों का लंबा बैटरी बैकअप।",
      "valve_f6_title": "ऑटोमैटिक टाइमर",
      "valve_f6_desc": "हर क्यारी में कितने मिनट पानी देना है, इसका टाइमर सेट करें।",

      // Tab 4: iSense
      "sense_kicker": "मिट्टी की नमी का स्मार्ट सेंसर",
      "sense_title": "iSense सॉइल सेंसर",
      "sense_lead": "जड़ों की गहराई में नमी नापकर फसल को सही मात्रा में पानी देने वाला सटीक सेंसर — ज़्यादा पानी और कम पानी दोनों से मुक्ति।",
      "sense_f1_title": "4 गहराइयों में नमी जाँच",
      "sense_f1_desc": "10 सेमी, 20 सेमी, 40 सेमी और 60 सेमी की गहराई तक नमी की सटीक जाँच।",
      "sense_f2_title": "ज़्यादा पानी से बचाव",
      "sense_f2_desc": "फसल को केवल ज़रूरत के अनुसार पानी मिलता है, जड़ें सड़ने से बचती हैं।",
      "sense_f3_title": "सोलर आधारित",
      "sense_f3_desc": "धूप से चार्ज होने वाली मजबूत सीलबंद बॉडी — बारिश और धूप से बेअसर।",
      "sense_f4_title": "3 किमी लंबी रेंज",
      "sense_f4_desc": "बिना इंटरनेट के 3 किलोमीटर दूर तक सीधा डेटा भेजता है।",
      "sense_f5_title": "खाद व पोषक तत्वों की बचत",
      "sense_f5_desc": "ज़्यादा पानी से बहने वाली महंगी खाद और उर्वरक की पूरी बचत।",
      "sense_f6_title": "मजबूत किसान-ग्रेड बॉडी",
      "sense_f6_desc": "खेत में ट्रैक्टर चलने या कीचड़ होने पर भी पूरी तरह सुरक्षित।",

      // Tab 5: iNet Gateway
      "net_kicker": "लंबी दूरी का वायरलेस हब",
      "net_title": "iNet वायरलेस गेटवे",
      "net_lead": "आपके स्मार्ट खेत का मुख्य केंद्र। खेत के सभी iSense सेंसर और iValve कंट्रोलर को 3 किमी तक वायरलेस जोड़ता है और 4G सिम से मोबाइल पर डेटा भेजता है।",
      "net_f1_title": "3 किमी वायरलेस कवरेज",
      "net_f1_desc": "बिना किसी तार के पूरे खेत को एक साथ कनेक्ट करता है।",
      "net_f2_title": "4G सिम सपोर्ट",
      "net_f2_desc": "Airtel, Jio, Vi सभी सिम कार्ड के साथ 24 घंटे ऑनलाइन।",
      "net_f3_title": "GPS टाइम सिंक",
      "net_f3_desc": "सैटेलाइट द्वारा बिल्कुल सही समय पर ऑटोमैटिक सिंचाई।",
      "net_f4_title": "12V सोलर पैनल साथ में",
      "net_f4_desc": "सोलर पैनल और 72 घंटे के बैटरी बैकअप के साथ बिना बिजली के भी चालू।",
      "net_f5_title": "ऑफलाइन भी काम करे",
      "net_f5_desc": "इंटरनेट बंद होने पर भी खेत के टाइमर और सुरक्षा नियम खुद काम करते हैं।",
      "net_f6_title": "रिमोट सपोर्ट",
      "net_f6_desc": "किसी भी समस्या पर घर बैठे टेक्निकल टीम से समाधान पाएँ।",

      // Tab 6: Accessories
      "acc_kicker": "मजबूत फील्ड एक्सेसरीज",
      "acc_title": "अतिरिक्त उपकरण व स्पेयर पार्ट्स",
      "acc_lead": "हैवी-ड्यूटी सोलेनोइड वाल्व, डिजिटल फ्लोमीटर, प्रेशर वाल्व और सुरक्षा बॉक्स — iRoot सिस्टम के लिए विशेष रूप से निर्मित।",

      // Interactive Simulators UI
      "sim_controller_title": "लाइव मोटर कंट्रोलर पैनल",
      "sim_phase_active": "3-फेज सेंसर सक्रिय",
      "sim_valve_title": "10-ज़ोन वाल्व कंट्रोल मैट्रिक्स",
      "sim_solar_reserve": "सोलर: 90 दिन का बैकअप",
      "sim_valve_desc": "किसी भी वाल्व पर क्लिक करके पानी की लाइन चालू या बंद करें:",
      "sim_test_safeguards": "सुरक्षा नियमों का टेस्ट करें:",
      "sim_btn_dryrun": "ड्राई रन टेस्ट (पानी खत्म)",
      "sim_btn_phasefail": "फेज उड़ने का टेस्ट (R-Y-B)",
      "sim_btn_overload": "ओवरलोड टेस्ट",
      "sim_btn_voltage": "लो वोल्टेज ट्रिप टेस्ट",
      "sim_btn_start": "मोटर चालू (ON)",
      "sim_btn_stop": "मोटर बंद (OFF)",
      "sim_btn_ack": "रिसेट / रीस्टार्ट",
      "sim_total_flow": "कुल पानी सप्लाई:",
      "sim_meter_inputs": "वाटर मीटर चैनल:",
      "sim_radar_title": "3 किमी वायरलेस कवरेज रडार",
      "sim_gps_sync": "GPS सिंक सक्रिय",
      "sim_soil_title": "मिट्टी की गहराई में नमी टेस्ट",
      "sim_soil_depth": "गहराई: 10 सेमी से 60 सेमी",
      "sim_adjust_moisture": "मिट्टी की नमी का स्तर बदलकर देखें:",

      // Sandbox Section
      "sand_badge": "लाइव खेत सिमुलेशन",
      "sand_title": "कमांड सेंटर <span class=\"gradient-text\">लाइव मॉनिटरिंग</span>",
      "sand_desc": "देखें कि iRoot खेत के बदलते मौसम और नमी को समझकर कैसे अपने आप सही फैसला लेता है।",
      "scen1_name": "सामान्य दिन",
      "scen1_desc": "सामान्य नमी, नियमित सिंचाई",
      "scen2_name": "बारिश का मौसम",
      "scen2_desc": "सिंचाई अपने आप बंद, पानी की पूरी बचत",
      "scen3_name": "लो वोल्टेज अलर्ट",
      "scen3_desc": "मोटर सुरक्षित, जलने से बचाव",
      "scen4_name": "रात की सिंचाई",
      "scen4_desc": "सस्ती बिजली, कम वाष्पीकरण",
      "node_moisture": "मिट्टी की नमी",
      "node_motor": "मोटर की स्थिति",
      "node_valves": "चालू वाल्व",
      "node_lora": "वायरलेस नेटवर्क",
      "sb_reaction_label": "सिस्टम की तुरंत कार्रवाई:",

      // ROI Calculator
      "calc_badge": "बचत और मुनाफे का हिसाब",
      "calc_title": "अपने खेत की <span class=\"gradient-text\">बचत का हिसाब लगाएँ</span>",
      "calc_desc": "देखें कि iRoot लगाकर आप हर फसल पर कितना पानी, बिजली, डीजल और मजदूरी बचा सकते हैं।",
      "calc_in_area": "खेत का कुल रकबा (एकड़):",
      "calc_in_crop": "प्रमुख फसल का प्रकार:",
      "calc_in_pump": "मोटर पंप की क्षमता (HP):",
      "calc_in_power": "सिंचाई ऊर्जा का साधन:",
      "calc_crop_sugarcane": "गन्ना (अधिक पानी की ज़रूरत)",
      "calc_crop_cotton": "कपास / नकदी फसलें",
      "calc_crop_orchard": "बागवानी (अनार, केला, संतरा, पपीता)",
      "calc_crop_vegetables": "सब्जियाँ एवं पॉलीहाउस",
      "calc_crop_grains": "गेहूँ, धान एवं दलहन",
      "calc_pwr_grid": "बिजली कनेक्शन (सब्सिडी / कमर्शियल)",
      "calc_pwr_diesel": "डीजल पंप (अधिक खर्च)",
      "calc_pwr_solar": "सोलर पंप",
      "calc_res_title": "सालाना अनुमानित बचत",
      "calc_res_water": "सालाना पानी की बचत:",
      "calc_res_power": "बिजली व डीजल की बचत:",
      "calc_res_labor": "मजदूरी व चक्कर लगाने की बचत:",
      "calc_res_yield": "अनुमानित पैदावार में बढ़ोतरी:",
      "calc_res_btn": "अपने खेत के लिए जानकारी पाएँ",

      // Benefits Section
      "ben_badge": "भारतीय खेतों पर प्रमाणित फायदे",
      "ben_title": "किसान <span class=\"gradient-text\">AGRIPULSE पर भरोसा</span> क्यों करते हैं",
      "ben_desc": "कठिन भारतीय ग्रामीण परिस्थितियों में परखी गई मजबूत IoT तकनीक से खेती को आसान बनाएँ।",
      "ben1_title": "40% तक पानी की बचत",
      "ben1_desc": "सीधे जड़ों तक सही पानी पहुँचने से व्यर्थ बहाव रुकता है और भूजल सुरक्षित रहता है।",
      "ben2_title": "मोटर कभी नहीं जलेगी",
      "ben2_desc": "ड्राई रन, लो वोल्टेज और फेज उड़ने पर तुरंत मोटर बंद करके मोटर और स्टार्टर को जलने से बचाता है।",
      "ben3_title": "20% - 25% अधिक पैदावार",
      "ben3_desc": "फसल को न पानी की कमी होती है न ज़्यादा पानी का तनाव — जिससे पैदावार में भारी इज़ाफा होता है।",
      "ben4_title": "रात में खेत जाने से मुक्ति",
      "ben4_desc": "रात के अंधेरे में सांप-बिच्छू के डर से खेत में जाने की बिल्कुल ज़रूरत नहीं — घर बैठे सिंचाई करें।",
      "comp_title": "पारंपरिक खेती बनाम Agripulse iRoot तरीका",
      "comp_param": "सिंचाई का पहलू",
      "comp_trad": "पारंपरिक खेती",
      "comp_iroot": "Agripulse iRoot तरीका",
      "comp_r1_param": "पानी देने का समय",
      "comp_r1_trad": "अंदाजे से पानी देना",
      "comp_r1_iroot": "जड़ों की नमी जाँचकर सही समय पर पानी",
      "comp_r2_param": "मोटर की सुरक्षा",
      "comp_r2_trad": "फेज उड़ने व सूखे में मोटर जलना आम बात",
      "comp_r2_iroot": "100% सुरक्षा — मोटर कभी नहीं जलेगी",
      "comp_r3_param": "मेहनत व सुविधा",
      "comp_r3_trad": "रात को 2 बजे खेत में चक्कर लगाना",
      "comp_r3_iroot": "मोबाइल से ऑटोमैटिक वाल्व व मोटर कंट्रोल",
      "comp_r4_param": "खर्च व पानी की बर्बादी",
      "comp_r4_trad": "ज़्यादा पानी चलने से बोरवेल जल्दी सूखना",
      "comp_r4_iroot": "40% तक पानी व बिजली के बिल की बचत",

      // About Section
      "about_badge": "Agripulse Private Limited के बारे में",
      "about_title": "किसानों की तरक्की, <span class=\"gradient-text\">देश की समृद्धि।</span>",
      "about_p1": "Agripulse में हमारा उद्देश्य हर किसान को स्मार्ट सिंचाई और आधुनिक तकनीक से समृद्ध बनाना है। ऑटोमेशन, रियल-टाइम मॉनिटरिंग और मजबूत कनेक्टिविटी के साथ iRoot पानी बचाता है, पैदावार बढ़ाता है और खेती को आसान बनाता है।",
      "about_p2": "Agripulse भारतीय किसानों को ऐसे आसान और भरोसेमंद IoT समाधान देने के लिए प्रतिबद्ध है, जिससे खेती अधिक लाभदायक और टिकाऊ बने।",
      "about_vision_title": "हमारा संकल्प",
      "about_vision_desc": "सटीक सिंचाई से पानी की बचत और हर किसान परिवार की खुशहाली।",
      "about_eng_title": "हमारी इंजीनियरिंग",
      "about_eng_desc": "कठिन भारतीय मौसम (-20°C से +60°C) और बिजली (415V) में जाँची-परखी तकनीक।",
      "about_btn": "Agripulse से जुड़ें",
      "about_stat1_num": "40%",
      "about_stat1_label": "पानी की बचत",
      "about_stat2_num": "3 किमी",
      "about_stat2_label": "वायरलेस रेंज",
      "about_stat3_num": "24/7",
      "about_stat3_label": "मोटर सुरक्षा",

      // Contact Section
      "cont_badge": "संपर्क करें",
      "cont_title": "अपने खेत को स्मार्ट बनाएँ: <span class=\"gradient-text\">संपर्क करें</span>",
      "cont_desc": "उत्पादों की जानकारी, कीमत या डीलरशिप के लिए हमारे कृषि विशेषज्ञों से तुरंत संपर्क करें।",
      "cont_card_title": "Agripulse Private Limited",
      "cont_card_desc": "हमारे कार्यालय में पधारें या सीधे फोन/व्हाट्सएप पर संपर्क करके संपूर्ण iRoot स्मार्ट सिंचाई इकोसिस्टम की जानकारी प्राप्त करें।",
      "cont_meta_web": "ऑफिशियल वेबसाइट",
      "cont_meta_email": "ईमेल पता",
      "cont_meta_phone": "फोन / व्हाट्सएप",
      "cont_meta_geo": "सेवा क्षेत्र",
      "cont_meta_geo_val": "संपूर्ण भारत (Pan-India सर्विस व सपोर्ट)",
      "cont_follow": "सोशल मीडिया पर जुड़ें",
      "cont_form_title": "हमें संदेश भेजें",
      "cont_form_desc": "कृपया अपने खेत का विवरण साझा करें, हमारी टीम तुरंत आपसे संपर्क करेगी।",
      "form_lbl_name": "आपका पूरा नाम *",
      "form_ph_name": "उदा. भूपेंद्र सिंह चौहान",
      "form_lbl_phone": "मोबाइल नंबर *",
      "form_ph_phone": "+91 98765 43210",
      "form_lbl_email": "ईमेल पता",
      "form_ph_email": "kisan@example.com",
      "form_lbl_loc": "खेत का स्थान / राज्य *",
      "form_ph_loc": "उदा. नासिक, महाराष्ट्र / इंदौर, म.प्र.",
      "form_lbl_crop": "प्रमुख फसल",
      "form_ph_crop": "उदा. गन्ना / कपास / अनार",
      "form_lbl_acres": "खेत का कुल रकबा (एकड़)",
      "form_ph_acres": "उदा. 15",
      "form_lbl_interest": "आप किन उपकरणों में रुचि रखते हैं:",
      "form_lbl_msg": "आपकी ज़रूरत या प्रश्न",
      "form_ph_msg": "बोरवेल की गहराई, मोटर स्टार्टर या अपने खेत के बारे में लिखें...",
      "form_btn_submit": "संदेश भेजें",

      // Feedback Modal
      "modal_title": "संदेश भेजा गया!",
      "modal_text": "धन्यवाद! आपका संदेश हमें मिल गया है। हमारी टेक्निकल टीम 24 घंटे के भीतर आपसे फोन पर संपर्क करेगी।",
      "modal_ref_label": "रेफरेंस कोड:",
      "modal_close_btn": "विंडो बंद करें",

      // Footer
      "foot_desc": "स्मार्ट IoT सिंचाई तकनीक द्वारा पानी की बचत, मोटर की सुरक्षा और किसानों की आय में वृद्धि करने के लिए समर्पित।",
      "foot_col1_title": "त्वरित लिंक",
      "foot_col2_title": "iRoot उत्पाद",
      "foot_col3_title": "संपर्क व सहायता",
      "foot_copy": "Agripulse Private Limited. सर्वाधिकार सुरक्षित।",
      "foot_tagline": "स्मार्ट तकनीक। अधिक बचत। समृद्ध किसान।"
    }
  };

  function setLanguage(lang) {
    if (!translations[lang]) lang = 'en';

    document.documentElement.lang = lang;
    const t = translations[lang];

    // Update text content with HTML support
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

  // Expose global helper
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
