/**
 * AGRIPULSE iROOT - FARMER-FRIENDLY INTERACTION & CALCULATOR ENGINE
 * Pure Vanilla JavaScript | Subtle Web Audio Synthesizer | Clean Responsive UX
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. WEB AUDIO API SOUND FX (OPTIONAL & SUBTLE)
     ========================================================================== */
  class AgripulseSoundFX {
    constructor() {
      this.ctx = null;
      this.enabled = localStorage.getItem('agripulse_audio') === 'true';
    }

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggle() {
      this.enabled = !this.enabled;
      localStorage.setItem('agripulse_audio', this.enabled);
      if (this.enabled) {
        this.init();
        this.playBlip(640, 0.08);
      }
      return this.enabled;
    }

    playBlip(freq = 520, duration = 0.04, type = 'sine') {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.3, this.ctx.currentTime + duration);

        gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {}
    }

    playRelayClick(turnOn = true) {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        const startFreq = turnOn ? 320 : 180;
        const endFreq = turnOn ? 750 : 120;
        osc.frequency.setValueAtTime(startFreq, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(endFreq, this.ctx.currentTime + 0.06);

        gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.06);
      } catch (e) {}
    }

    playSuccessChime() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);
          gain.gain.setValueAtTime(0.04, this.ctx.currentTime + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.08 + 0.22);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(this.ctx.currentTime + idx * 0.08);
          osc.stop(this.ctx.currentTime + idx * 0.08 + 0.22);
        });
      } catch (e) {}
    }
  }

  const sfx = new AgripulseSoundFX();

  /* ==========================================================================
     2. FAST & FRIENDLY PRELOADER
     ========================================================================== */
  const preloader = document.getElementById('preloader');
  const preloaderProgress = document.getElementById('preloaderProgress');
  const preloaderLog = document.getElementById('preloaderLog');

  if (preloader) {
    if (preloaderProgress) preloaderProgress.style.width = '100%';
    setTimeout(() => {
      preloader.classList.add('loaded');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 400);
    }, 350);
  }

  /* ==========================================================================
     3. CINEMATIC HERO SLIDER
     ========================================================================== */
  (function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots   = document.querySelectorAll('.hero-dot');
    const prevBtn = document.getElementById('heroPrev');
    const nextBtn = document.getElementById('heroNext');
    const counter = document.getElementById('heroCurrentSlide');
    const totalCountEl = document.getElementById('heroTotalSlides');
    const hindiRibbon = document.getElementById('heroHindiRibbon');
    const hindiRibbonText = document.getElementById('heroHindiRibbonText');

    if (!slides.length) return;

    let current = 0;
    let timer   = null;
    const INTERVAL = 5000;

    const hindiSlideTexts = [
      'एग्रीपल्स iRoot: हर बूँद का सही उपयोग। सटीक सिंचाई और मोटर सुरक्षा।',
      'एक सम्पूर्ण उपकरण, सम्पूर्ण नियंत्रण — iRoot मोबाइल ऐप द्वारा घर बैठे।',
      'अपने पूरे खेत को एक स्मार्ट नेटवर्क से जोड़ें और पानी व बिजली बचाएं।'
    ];

    function pad(n) { return String(n + 1).padStart(2, '0'); }

    if (totalCountEl) totalCountEl.textContent = pad(slides.length - 1);

    function updateHindiRibbon(idx) {
      if (hindiRibbonText && hindiSlideTexts[idx]) {
        hindiRibbonText.textContent = hindiSlideTexts[idx];
      }
    }

    function checkHindiVisibility() {
      if (!hindiRibbon) return;
      try {
        const lang = localStorage.getItem('iroot_lang') || 'en';
        hindiRibbon.style.display = lang === 'hi' ? 'block' : 'none';
      } catch(e) {}
    }

    window.addEventListener('irootLanguageChanged', e => {
      if (hindiRibbon) {
        hindiRibbon.style.display = e.detail && e.detail.lang === 'hi' ? 'block' : 'none';
      }
    });
    checkHindiVisibility();

    function goTo(idx) {
      if (idx === current) return;
      const prevIdx = current;
      slides[prevIdx].classList.remove('active');
      slides[prevIdx].classList.add('leaving');
      setTimeout(() => {
        if (slides[prevIdx]) slides[prevIdx].classList.remove('leaving');
      }, 800);
      dots[prevIdx] && dots[prevIdx].classList.remove('active');

      current = (idx + slides.length) % slides.length;

      slides[current].classList.remove('leaving');
      slides[current].classList.add('active');
      dots[current] && dots[current].classList.add('active');
      if (counter) counter.textContent = pad(current);
      updateHindiRibbon(current);
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startAuto() {
      clearInterval(timer);
      timer = setInterval(next, INTERVAL);
    }

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        goTo(parseInt(dot.dataset.goto, 10));
        startAuto();
      });
    });

    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); startAuto(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { next(); startAuto(); });

    startAuto();
  })();

  /* ==========================================================================
     4. NAVBAR SCROLL & ACTIVE SCROLLSPY
     ========================================================================== */
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('header[id], section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  /* ==========================================================================
     5. HAMBURGER MENU DRAWER
     ========================================================================== */
  const menuToggleBtn  = document.getElementById('menuToggleBtn');
  const siteDrawer     = document.getElementById('siteDrawer');
  const drawerClose    = document.getElementById('drawerClose');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerLinks    = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    if (siteDrawer) siteDrawer.classList.add('open');
    if (drawerBackdrop) drawerBackdrop.classList.add('visible');
    if (menuToggleBtn) menuToggleBtn.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (siteDrawer) siteDrawer.classList.remove('open');
    if (drawerBackdrop) drawerBackdrop.classList.remove('visible');
    if (menuToggleBtn) menuToggleBtn.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (menuToggleBtn) menuToggleBtn.addEventListener('click', openDrawer);
  if (drawerClose)   drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);
  drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));

  /* ==========================================================================
     6. PRODUCT TABS
     ========================================================================== */
  const productTabBtns = document.querySelectorAll('.product-tab-btn');
  const productPanels = document.querySelectorAll('.product-panel');

  productTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      productTabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      productPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
      sfx.playBlip(540, 0.04);
    });
  });

  // App Screen Gallery Switcher
  const phoneViewBtns = document.querySelectorAll('.phone-view-btn');
  const appScreenWraps = document.querySelectorAll('.app-screen-wrap');

  phoneViewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const screenNum = btn.getAttribute('data-appscreen');
      if (!screenNum) return;
      // Update buttons
      phoneViewBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Fade out all screens, show selected
      appScreenWraps.forEach(wrap => {
        wrap.style.opacity = '0';
        wrap.classList.remove('active');
      });
      const target = document.getElementById('appScreen' + screenNum);
      if (target) {
        setTimeout(() => {
          appScreenWraps.forEach(w => w.classList.remove('active'));
          target.classList.add('active');
          target.style.opacity = '1';
        }, 150);
      }
      sfx.playBlip(600, 0.03);
    });
  });

  /* ==========================================================================
     7. REAL FARM SCENARIOS SWITCHER (FARMER FRIENDLY)
     ========================================================================== */
  const scenarioBtns = document.querySelectorAll('.scenario-btn');
  const sbIsenseState = document.getElementById('sbIsenseState');
  const sbIsenseAction = document.getElementById('sbIsenseAction');
  const sbInetState = document.getElementById('sbInetState');
  const sbInetAction = document.getElementById('sbInetAction');
  const sbIpumpState = document.getElementById('sbIpumpState');
  const sbIpumpAction = document.getElementById('sbIpumpAction');
  const sbIvalveState = document.getElementById('sbIvalveState');
  const sbIvalveAction = document.getElementById('sbIvalveAction');
  const sbLogText = document.getElementById('sbLogText');

  const scenarios = {
    heatwave: {
      isense: ["38% Low Moisture", "Root zone parched, needs water"],
      inet: ["Alert Sent to App", "Instant alert on farmer's phone"],
      ipump: ["PUMP STARTED", "3-Phase safe, normal current"],
      ivalve: ["Zones 1, 2 & 3 Open", "Watering parched crop area"],
      log: "The system watered parched crop zones automatically in 1.4 seconds. No crops suffered heat stress and no manual visit was required."
    },
    phasefault: {
      isense: ["68% Moisture Stable", "Crop condition safe"],
      inet: ["Warning Sent to Mobile", "Push alert on your phone"],
      ipump: ["MOTOR STOPPED (0.1s)", "Cut off to prevent burning"],
      ivalve: ["Valves Safely Closed", "Protected from pressure spikes"],
      log: "Electricity Y-phase dropped. iPump cut off the motor within 0.1 seconds, preventing ₹25,000+ motor coil burning damage."
    },
    downpour: {
      isense: ["96% Saturated Soil", "Heavy rain runoff detected"],
      inet: ["Rain Update Synced", "Rainfall confirmed on cloud"],
      ipump: ["PUMP OFF (PAUSED)", "0 electricity wasted"],
      ivalve: ["All Zones Closed", "Conserving groundwater"],
      log: "Heavy monsoon rain detected in the field. Scheduled watering paused automatically, saving 28,000 litres of groundwater."
    },
    nightdrip: {
      isense: ["55% Evening Level", "Optimal absorption window"],
      inet: ["Night Power Active", "Stable grid voltage confirmed"],
      ipump: ["PUMP RUNNING", "Smooth starter ramp-up"],
      ivalve: ["Zones 1 to 4 Sequenced", "45-minute drip cycles"],
      log: "Electricity arrived at 2 AM. iRoot verified safe 3-phase power and watered zones 1 to 4 while the farmer slept peacefully at home."
    }
  };

  scenarioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const scenarioKey = btn.getAttribute('data-scenario');
      scenarioBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      sfx.playBlip(520, 0.05);

      const sc = scenarios[scenarioKey];
      if (sc) {
        if (sbIsenseState) sbIsenseState.textContent = sc.isense[0];
        if (sbIsenseAction) sbIsenseAction.textContent = sc.isense[1];

        if (sbInetState) sbInetState.textContent = sc.inet[0];
        if (sbInetAction) sbInetAction.textContent = sc.inet[1];

        if (sbIpumpState) sbIpumpState.textContent = sc.ipump[0];
        if (sbIpumpAction) sbIpumpAction.textContent = sc.ipump[1];

        if (sbIvalveState) sbIvalveState.textContent = sc.ivalve[0];
        if (sbIvalveAction) sbIvalveAction.textContent = sc.ivalve[1];

        if (sbLogText) sbLogText.textContent = sc.log;
      }
    });
  });

  /* ==========================================================================
     8. FARM SAVINGS CALCULATOR
     ========================================================================== */
  const calcAreaSlider = document.getElementById('calcAreaSlider');
  const calcAreaVal = document.getElementById('calcAreaVal');
  const calcCropSelect = document.getElementById('calcCropSelect');
  const calcMethodSelect = document.getElementById('calcMethodSelect');
  const calcSourceSelect = document.getElementById('calcSourceSelect');

  const resultWater = document.getElementById('resultWater');
  const resultPower = document.getElementById('resultPower');
  const resultMotor = document.getElementById('resultMotor');
  const resultLabor = document.getElementById('resultLabor');

  function calculateROI() {
    if (!calcAreaSlider) return;
    const acres = parseInt(calcAreaSlider.value);
    if (calcAreaVal) calcAreaVal.textContent = `${acres} Acres`;

    let cropFactor = 1.0;
    if (calcCropSelect) {
      if (calcCropSelect.value === 'horticulture') cropFactor = 1.35;
      else if (calcCropSelect.value === 'cashcrops') cropFactor = 1.15;
      else if (calcCropSelect.value === 'vegetables') cropFactor = 1.25;
      else if (calcCropSelect.value === 'orchards') cropFactor = 1.4;
    }

    let methodLossFactor = 1.0;
    if (calcMethodSelect) {
      if (calcMethodSelect.value === 'flood') methodLossFactor = 1.6;
      else if (calcMethodSelect.value === 'manual') methodLossFactor = 1.2;
      else if (calcMethodSelect.value === 'timer') methodLossFactor = 1.1;
    }

    const totalWaterLitres = acres * 170000 * cropFactor * (methodLossFactor * 0.7);
    const waterFormatted = totalWaterLitres >= 1000000 
      ? `${(totalWaterLitres / 1000000).toFixed(1)}M Litres`
      : `${Math.round(totalWaterLitres / 1000)}k Litres`;

    const powerSaved = Math.round(acres * 3400 * methodLossFactor);
    const motorSaved = Math.round(acres * 1700 + 15000);
    const laborHours = Math.round(acres * 26);

    if (resultWater) resultWater.textContent = waterFormatted;
    if (resultPower) resultPower.textContent = `₹ ${powerSaved.toLocaleString('en-IN')} /yr`;
    if (resultMotor) resultMotor.textContent = `₹ ${motorSaved.toLocaleString('en-IN')} /yr`;
    if (resultLabor) resultLabor.textContent = `${laborHours.toLocaleString()} Hours`;
  }

  if (calcAreaSlider) calcAreaSlider.addEventListener('input', calculateROI);
  if (calcCropSelect) calcCropSelect.addEventListener('change', calculateROI);
  if (calcMethodSelect) calcMethodSelect.addEventListener('change', calculateROI);
  if (calcSourceSelect) calcSourceSelect.addEventListener('change', calculateROI);
  calculateROI();

  /* ==========================================================================
     9. FARMER FAQ ACCORDION
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(i => {
          i.classList.remove('open');
          const qBtn = i.querySelector('.faq-question-btn');
          if (qBtn) qBtn.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
          sfx.playBlip(600, 0.04);
        }
      });
    }
  });

  /* ==========================================================================
     10. DEMO REQUEST FORM & SUCCESS MODAL
     ========================================================================== */
  const demoRequestForm = document.getElementById('demoRequestForm');
  const successModal = document.getElementById('successModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalOkBtn = document.getElementById('modalOkBtn');
  const modalRefCode = document.getElementById('modalRefCode');
  const modalFeedbackText = document.getElementById('modalFeedbackText');

  if (demoRequestForm) {
    demoRequestForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('formName');
      const phoneInput = document.getElementById('formPhone');
      const locationInput = document.getElementById('formLocation');

      if (!nameInput.value.trim() || !phoneInput.value.trim() || !locationInput.value.trim()) {
        alert("Please fill in your Name, Mobile Number, and State/District.");
        return;
      }

      const randomCode = `AGRI-DEMO-${Math.floor(1000 + Math.random() * 9000)}`;
      if (modalRefCode) modalRefCode.textContent = randomCode;

      if (modalFeedbackText) {
        modalFeedbackText.textContent = `Thank you, ${nameInput.value.trim()}! Your demo request has been received. Our agri specialist in ${locationInput.value.trim()} will call you at ${phoneInput.value.trim()} within 24 hours.`;
      }

      if (successModal) {
        successModal.classList.add('open');
        successModal.setAttribute('aria-hidden', 'false');
      }

      sfx.playSuccessChime();
      demoRequestForm.reset();
    });
  }

  function closeModal() {
    if (successModal) {
      successModal.classList.remove('open');
      successModal.setAttribute('aria-hidden', 'true');
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOkBtn) modalOkBtn.addEventListener('click', closeModal);
  if (successModal) {
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) closeModal();
    });
  }

  // Set current copyright year
  const copyrightYear = document.getElementById('copyrightYear');
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }

});
