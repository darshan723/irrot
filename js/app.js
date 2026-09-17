/**
 * AGRIPULSE iROOT - HIGH-END INTERACTION & TELEMETRY ENGINE
 * Pure Vanilla JavaScript | Web Audio API Synthesizer | Smooth Reactive UX
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. WEB AUDIO API HAPTIC SYNTHESIZER (ZERO EXTERNAL AUDIO ASSETS)
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

    playBlip(freq = 520, duration = 0.05, type = 'sine') {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration);

        gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {
        console.warn('Audio error:', e);
      }
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
        const endFreq = turnOn ? 880 : 110;
        osc.frequency.setValueAtTime(startFreq, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(endFreq, this.ctx.currentTime + 0.08);

        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.08);
      } catch (e) {}
    }

    playAlertTone() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(440, this.ctx.currentTime);
        osc.frequency.setValueAtTime(660, this.ctx.currentTime + 0.1);
        osc.frequency.setValueAtTime(440, this.ctx.currentTime + 0.2);

        gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.35);
      } catch (e) {}
    }

    playSuccessChime() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C, E, G, High C
        notes.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);
          gain.gain.setValueAtTime(0.05, this.ctx.currentTime + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.08 + 0.25);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(this.ctx.currentTime + idx * 0.08);
          osc.stop(this.ctx.currentTime + idx * 0.08 + 0.25);
        });
      } catch (e) {}
    }
  }

  const sfx = new AgripulseSoundFX();

  // Wire up audio toggle button
  const audioToggleBtn = document.getElementById('audioToggleBtn');
  if (audioToggleBtn) {
    if (sfx.enabled) {
      audioToggleBtn.classList.add('active');
    }
    audioToggleBtn.addEventListener('click', () => {
      const isEnabled = sfx.toggle();
      audioToggleBtn.classList.toggle('active', isEnabled);
    });
  }

  /* ==========================================================================
     2. PRELOADER SEQUENCE
     ========================================================================== */
  const preloader = document.getElementById('preloader');
  const preloaderProgress = document.getElementById('preloaderProgress');
  const preloaderLog = document.getElementById('preloaderLog');

  const bootLogs = [
    { progress: 25, text: "Calibrating iSense 4-point soil moisture nodes..." },
    { progress: 50, text: "Establishing 3km LoRa agricultural mesh..." },
    { progress: 75, text: "Syncing 4G Cloud telemetry gateway..." },
    { progress: 100, text: "Agripulse iRoot v1.0 System Online." }
  ];

  let stepIdx = 0;
  function runBootSequence() {
    if (stepIdx < bootLogs.length) {
      const step = bootLogs[stepIdx];
      if (preloaderProgress) preloaderProgress.style.width = step.progress + '%';
      if (preloaderLog) preloaderLog.textContent = step.text;
      sfx.playBlip(350 + step.progress * 4, 0.04);
      stepIdx++;
      setTimeout(runBootSequence, 280);
    } else {
      setTimeout(() => {
        if (preloader) preloader.classList.add('loaded');
      }, 350);
    }
  }
  runBootSequence();

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
      'एक सम्पूर्ण इकोसिस्टम, सम्पूर्ण नियंत्रण — iRoot मोबाइल ऐप द्वारा कहीं से भी।',
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
      }, 1000);
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

    // Dots
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        goTo(parseInt(dot.dataset.goto, 10));
        startAuto();
      });
    });

    // Arrows
    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); startAuto(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { next(); startAuto(); });

    // Touch / swipe support
    let touchStartX = 0;
    const heroEl = document.getElementById('home');
    if (heroEl) {
      heroEl.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
      heroEl.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); startAuto(); }
      }, { passive: true });
    }

    startAuto();
  })();

  /* ==========================================================================
     4. NAVBAR SCROLL & ACTIVE SCROLLSPY
     ========================================================================== */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('header[id], section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scrollspy
    let currentId = '';
    const scrollPos = window.scrollY + 200;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });


  /* ==========================================================================
     4. HAMBURGER → SITE DRAWER TOGGLE
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

    // Stagger each drawer link in
    drawerLinks.forEach((link, i) => {
      link.style.opacity = '0';
      link.style.transform = 'translateX(-20px)';
      setTimeout(() => {
        link.style.transition = 'opacity 0.35s ease, transform 0.35s ease, color 0.25s ease, padding-left 0.25s ease';
        link.style.opacity = '1';
        link.style.transform = 'translateX(0)';
      }, 80 + i * 55);
    });
  }

  function closeDrawer() {
    if (siteDrawer) siteDrawer.classList.remove('open');
    if (drawerBackdrop) drawerBackdrop.classList.remove('visible');
    if (menuToggleBtn) menuToggleBtn.classList.remove('open');
    document.body.style.overflow = '';
    drawerLinks.forEach(link => {
      link.style.transition = '';
    });
  }

  if (menuToggleBtn) menuToggleBtn.addEventListener('click', openDrawer);
  if (drawerClose)   drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);
  drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));


  /* ==========================================================================
     4. HERO TELEMETRY BREATHING SIMULATION
     ========================================================================== */
  const heroMoistureDisplay = document.getElementById('heroMoistureDisplay');
  if (heroMoistureDisplay) {
    setInterval(() => {
      const delta = (Math.random() * 0.4 - 0.2);
      const current = parseFloat(heroMoistureDisplay.textContent);
      const next = Math.max(65.0, Math.min(71.0, current + delta));
      heroMoistureDisplay.textContent = next.toFixed(1);
    }, 3200);
  }

  /* ==========================================================================
     5. HOW IT WORKS: INTERACTIVE ARCHITECTURE TOPOLOGY
     ========================================================================== */
  const archNodes = document.querySelectorAll('.arch-node');
  const packetDataInspector = document.getElementById('packetDataInspector');
  const triggerMeshPacketBtn = document.getElementById('triggerMeshPacketBtn');
  const storyStepCards = document.querySelectorAll('.story-step-card');

  const nodePayloads = {
    isense: {
      event: "SOIL_PROFILE_TELEMETRY",
      sensor_id: "ISENSE-PROBE-04",
      depths_cm: [10, 25, 40, 60],
      moisture_pct: [62.1, 68.4, 72.0, 75.3],
      soil_temp_c: 24.6,
      battery_v: "3.7V / 100% (Solar Charging)",
      signal: "LoRa 865MHz (-78dBm)"
    },
    inet: {
      event: "GATEWAY_PACKET_FORWARD",
      gateway_id: "INET-GW-CENTRAL",
      lora_nodes_polled: 16,
      cloud_uplink: "4G LTE (Band 3 / Band 5)",
      gps_fix: "22.9734° N, 78.6569° E",
      uptime_hours: 482,
      latency_ms: 45
    },
    cloud: {
      event: "AGRIPULSE_IRRIGATION_DECISION",
      algorithm: "VPD_EVAPOTRANSPIRATION_V2",
      farm_id: "FARM-IND-092",
      crop: "Pomegranate (Fruit Development Phase)",
      rule: "Moisture > 65% in Root Zone: HOLD IRRIGATION",
      next_scheduled_eval: "15 mins"
    },
    ipump: {
      event: "PUMP_CONTROLLER_STATUS",
      unit: "IPUMP-3PH-7.5HP",
      phase_ryb: { R: "240V", Y: "241V", B: "239V" },
      motor_current_a: 14.2,
      dry_run_state: "SAFE (Normal Water Intake)",
      starter_relay: "ENGAGED"
    },
    ivalve: {
      event: "VALVE_MATRIX_TELEMETRY",
      unit: "IVALVE-10ZONE-SOLAR",
      battery_reserve_days: 89,
      active_zones: [1, 2],
      flow_meter_pulses: 1420,
      total_litres_delivered: 4850
    }
  };

  archNodes.forEach(node => {
    node.addEventListener('click', () => {
      const nodeType = node.getAttribute('data-node');
      archNodes.forEach(n => n.classList.remove('highlighted'));
      node.classList.add('highlighted');
      sfx.playBlip(560, 0.06);

      if (nodePayloads[nodeType] && packetDataInspector) {
        packetDataInspector.textContent = JSON.stringify(nodePayloads[nodeType]);
      }
    });
  });

  if (triggerMeshPacketBtn) {
    triggerMeshPacketBtn.addEventListener('click', () => {
      sfx.playRelayClick(true);
      let step = 0;
      const nodesList = Array.from(archNodes);
      
      const interval = setInterval(() => {
        nodesList.forEach(n => n.classList.remove('highlighted'));
        if (step < nodesList.length) {
          const activeNode = nodesList[step];
          activeNode.classList.add('highlighted');
          const nodeType = activeNode.getAttribute('data-node');
          if (nodePayloads[nodeType] && packetDataInspector) {
            packetDataInspector.textContent = JSON.stringify(nodePayloads[nodeType]);
          }
          sfx.playBlip(440 + step * 120, 0.06);
          step++;
        } else {
          clearInterval(interval);
          nodesList[0].classList.add('highlighted');
        }
      }, 450);
    });
  }

  // Story Step Click
  storyStepCards.forEach(card => {
    card.addEventListener('click', () => {
      storyStepCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      sfx.playBlip(500, 0.05);
    });
  });

  /* ==========================================================================
     6. PRODUCTS TABS & PHONE PREVIEW
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
      sfx.playBlip(540, 0.05);
    });
  });

  // Phone Mockup Screen Switcher
  const phoneViewBtns = document.querySelectorAll('.phone-view-btn');
  const phoneMockupDisplay = document.getElementById('phoneMockupDisplay');

  phoneViewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      phoneViewBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const screenSrc = btn.getAttribute('data-screen');
      if (phoneMockupDisplay && screenSrc) {
        phoneMockupDisplay.style.opacity = '0.3';
        setTimeout(() => {
          phoneMockupDisplay.src = screenSrc;
          phoneMockupDisplay.style.opacity = '1';
        }, 120);
      }
      sfx.playBlip(600, 0.04);
    });
  });

  /* ==========================================================================
     7. iPUMP HARDWARE CONSOLE SIMULATOR
     ========================================================================== */
  let pumpRunning = false;
  let pumpFaultActive = false;

  const ipumpBtnOn = document.getElementById('ipumpBtnOn');
  const ipumpBtnOff = document.getElementById('ipumpBtnOff');
  const ipumpBtnAck = document.getElementById('ipumpBtnAck');

  const ledPump = document.getElementById('ledPump');
  const ledFault = document.getElementById('ledFault');
  const ipumpStatusText = document.getElementById('ipumpStatusText');
  const ipumpVoltageVal = document.getElementById('ipumpVoltageVal');
  const ipumpCurrentVal = document.getElementById('ipumpCurrentVal');
  const ipumpPressureVal = document.getElementById('ipumpPressureVal');
  const heroPumpPill = document.getElementById('heroPumpPill');

  function startPump() {
    if (pumpFaultActive) {
      alert("Cannot start: Fault lock active. Press ACK / RESET button to clear protection lock.");
      sfx.playAlertTone();
      return;
    }
    pumpRunning = true;
    if (ledPump) ledPump.className = 'led-bulb green-lit';
    if (ipumpStatusText) {
      ipumpStatusText.textContent = 'RUNNING • 3-PHASE OK';
      ipumpStatusText.className = 'text-emerald';
    }
    if (ipumpCurrentVal) ipumpCurrentVal.textContent = '14.2 A';
    if (ipumpPressureVal) ipumpPressureVal.textContent = '3.4 BAR';
    if (heroPumpPill) {
      heroPumpPill.textContent = 'PUMP RUNNING';
      heroPumpPill.style.color = '#10b981';
    }
    sfx.playRelayClick(true);
  }

  function stopPump() {
    pumpRunning = false;
    if (ledPump) ledPump.className = 'led-bulb';
    if (!pumpFaultActive && ipumpStatusText) {
      ipumpStatusText.textContent = 'STANDBY • READY';
      ipumpStatusText.className = 'text-emerald';
    }
    if (ipumpCurrentVal) ipumpCurrentVal.textContent = '0.0 A';
    if (ipumpPressureVal) ipumpPressureVal.textContent = '0.0 BAR';
    if (heroPumpPill) {
      heroPumpPill.textContent = 'STANDBY';
      heroPumpPill.style.color = '#f59e0b';
    }
    sfx.playRelayClick(false);
  }

  function acknowledgeReset() {
    pumpFaultActive = false;
    if (ledFault) ledFault.className = 'led-bulb';
    if (ipumpVoltageVal) ipumpVoltageVal.textContent = '415 V';
    if (ipumpStatusText) {
      ipumpStatusText.textContent = pumpRunning ? 'RUNNING • 3-PHASE OK' : 'STANDBY • READY';
      ipumpStatusText.className = 'text-emerald';
    }
    sfx.playBlip(700, 0.08);
  }

  if (ipumpBtnOn) ipumpBtnOn.addEventListener('click', startPump);
  if (ipumpBtnOff) ipumpBtnOff.addEventListener('click', stopPump);
  if (ipumpBtnAck) ipumpBtnAck.addEventListener('click', acknowledgeReset);

  // Fault Simulators
  const faultTriggerBtns = document.querySelectorAll('.fault-trigger-btn');
  faultTriggerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const faultType = btn.getAttribute('data-fault');
      pumpRunning = false;
      pumpFaultActive = true;
      if (ledPump) ledPump.className = 'led-bulb';
      if (ledFault) ledFault.className = 'led-bulb red-lit';
      if (ipumpCurrentVal) ipumpCurrentVal.textContent = '0.0 A';

      sfx.playAlertTone();

      if (faultType === 'dryrun') {
        if (ipumpStatusText) {
          ipumpStatusText.textContent = 'FAULT: DRY RUN PROTECTION ACTIVE';
          ipumpStatusText.className = 'text-danger';
        }
      } else if (faultType === 'phasefail') {
        if (ipumpStatusText) {
          ipumpStatusText.textContent = 'FAULT: PHASE FAILURE (Y-PHASE LOST)';
          ipumpStatusText.className = 'text-danger';
        }
        if (ipumpVoltageVal) ipumpVoltageVal.textContent = '240 V (IMBALANCE)';
      } else if (faultType === 'overload') {
        if (ipumpStatusText) {
          ipumpStatusText.textContent = 'FAULT: MOTOR OVERLOAD CURRENT TRIP';
          ipumpStatusText.className = 'text-danger';
        }
        if (ipumpCurrentVal) ipumpCurrentVal.textContent = '28.4 A (TRIPPED)';
      } else if (faultType === 'voltage') {
        if (ipumpStatusText) {
          ipumpStatusText.textContent = 'FAULT: UNDER-VOLTAGE TRIP (<320V)';
          ipumpStatusText.className = 'text-danger';
        }
        if (ipumpVoltageVal) ipumpVoltageVal.textContent = '310 V';
      }

      if (heroPumpPill) {
        heroPumpPill.textContent = 'FAULT PROTECTED';
        heroPumpPill.style.color = '#ef4444';
      }
    });
  });

  /* ==========================================================================
     8. iVALVE 10-ZONE SOLENOID SWITCHER
     ========================================================================== */
  const valveZoneBoxes = document.querySelectorAll('.valve-zone-box');
  const totalFlowDisplay = document.getElementById('totalFlowDisplay');

  valveZoneBoxes.forEach(box => {
    box.addEventListener('click', () => {
      box.classList.toggle('open');
      const isOpen = box.classList.contains('open');
      const statusSpan = box.querySelector('.valve-zone-status');
      if (statusSpan) {
        statusSpan.textContent = isOpen ? 'OPEN • 18 LPM' : 'CLOSED';
      }

      // Recalculate total flow
      const openCount = document.querySelectorAll('.valve-zone-box.open').length;
      const totalFlow = (openCount * 18.0).toFixed(1);
      if (totalFlowDisplay) {
        totalFlowDisplay.textContent = `${totalFlow} LPM`;
      }

      sfx.playRelayClick(isOpen);
    });
  });

  /* ==========================================================================
     9. iSENSE SOIL DEPTH SLIDER
     ========================================================================== */
  const isenseMoistureSlider = document.getElementById('isenseMoistureSlider');
  const isenseMoistureNum = document.getElementById('isenseMoistureNum');
  const isenseMoistureStatusText = document.getElementById('isenseMoistureStatusText');
  const depth1 = document.getElementById('depth1');
  const depth2 = document.getElementById('depth2');
  const depth3 = document.getElementById('depth3');
  const depth4 = document.getElementById('depth4');

  if (isenseMoistureSlider) {
    isenseMoistureSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      if (isenseMoistureNum) isenseMoistureNum.textContent = `${val}%`;

      // Update depth approximations
      if (depth1) depth1.textContent = `${Math.max(10, val - 6)}%`;
      if (depth2) depth2.textContent = `${val}%`;
      if (depth3) depth3.textContent = `${Math.min(100, val + 4)}%`;
      if (depth4) depth4.textContent = `${Math.min(100, val + 7)}%`;

      // Status text
      if (isenseMoistureStatusText) {
        if (val < 35) {
          isenseMoistureStatusText.textContent = 'ALERT: CRITICAL DRY ROOT ZONE (AUTO-PUMP REQUESTED)';
          isenseMoistureStatusText.className = 'mono-tag text-danger';
        } else if (val < 55) {
          isenseMoistureStatusText.textContent = 'STATUS: LOW MOISTURE (IRRIGATION SCHEDULE QUEUED)';
          isenseMoistureStatusText.className = 'mono-tag text-warning';
        } else if (val <= 80) {
          isenseMoistureStatusText.textContent = 'STATUS: OPTIMAL MOISTURE (NO IRRIGATION NEEDED)';
          isenseMoistureStatusText.className = 'mono-tag text-emerald';
        } else {
          isenseMoistureStatusText.textContent = 'ALERT: HIGH SATURATION / RAIN DETECTED (IRRIGATION PAUSED)';
          isenseMoistureStatusText.className = 'mono-tag text-cyan';
        }
      }
    });
  }

  /* ==========================================================================
     10. FIELD COMMAND SANDBOX (SCENARIO SWITCHER)
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
      isense: ["38% Parched Moisture", "Triggering Urgent Irrigation Event"],
      inet: ["LoRa Packet 0.08s", "Forwarding Payload via 4G Cloud"],
      ipump: ["PUMP ENGAGED", "3-Phase 415V Normal Current"],
      ivalve: ["Zones 1, 2 & 3 Open", "Targeting Parched Orchard Sector"],
      log: "Automated trigger executed in 1.4s. Pump started, zones 1-3 engaged to prevent water stress."
    },
    phasefault: {
      isense: ["68% Moisture Stable", "Telemetry Normal"],
      inet: ["Alarm Packet Relayed", "Push Alert Sent to Farmer App"],
      ipump: ["MOTOR CUT-OFF", "Tripped in 0.04s (Phase Failure)"],
      ivalve: ["Valves Safely Closed", "Preventing Water Hammering"],
      log: "Phase Y voltage dropped. iPump triggered instant motor cutoff, preventing costly stator burnout."
    },
    downpour: {
      isense: ["96% Saturated Soil", "Heavy Rain Runoff Detected"],
      inet: ["Syncing Weather Cloud", "Rain Sensor Confirmed: 42mm"],
      ipump: ["PUMP OFF (PAUSED)", "Energy Consumption: 0 kWh"],
      ivalve: ["All 10 Zones Closed", "Conserving Groundwater"],
      log: "Monsoon rainfall detected. Scheduled night irrigation automatically deferred, saving 28,000L of water."
    },
    nightdrip: {
      isense: ["58% Evening Level", "Optimal Evaporation Window"],
      inet: ["Off-Peak Grid Sync", "Low Tariff Rate Applied"],
      ipump: ["PUMP RUNNING", "Smooth Starter Ramp-Up"],
      ivalve: ["Zones 4, 5 & 6 Open", "Sequential 45-min Drip Program"],
      log: "Off-peak night schedule started. Lowest evaporation loss achieved with zero human attendance required."
    }
  };

  scenarioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const scenarioKey = btn.getAttribute('data-scenario');
      scenarioBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      sfx.playBlip(520, 0.06);

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
     11. ROI & WATER SAVINGS CALCULATOR
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

    // Multipliers
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

    // Water calculation (Litres per year)
    // Baseline: roughly 150,000 Litres saved per acre per year under smart IoT scheduling
    const totalWaterLitres = acres * 170000 * cropFactor * (methodLossFactor * 0.7);
    const waterFormatted = totalWaterLitres >= 1000000 
      ? `${(totalWaterLitres / 1000000).toFixed(1)}M Litres`
      : `${Math.round(totalWaterLitres / 1000)}k Litres`;

    // Power cost savings (roughly ₹ 3,400 per acre in pumping electricity)
    const powerSaved = Math.round(acres * 3400 * methodLossFactor);

    // Motor burnout replacement prevention (approx ₹ 1,700 per acre saved per year)
    const motorSaved = Math.round(acres * 1700 + 15000);

    // Labor hours freed (approx 26 hours per acre per year)
    const laborHours = Math.round(acres * 26);

    if (resultWater) resultWater.textContent = waterFormatted;
    if (resultPower) resultPower.textContent = `₹ ${powerSaved.toLocaleString('en-IN')} /yr`;
    if (resultMotor) resultMotor.textContent = `₹ ${motorSaved.toLocaleString('en-IN')} /yr`;
    if (resultLabor) resultLabor.textContent = `${laborHours.toLocaleString()} Hours`;
  }

  if (calcAreaSlider) {
    calcAreaSlider.addEventListener('input', calculateROI);
  }
  if (calcCropSelect) calcCropSelect.addEventListener('change', calculateROI);
  if (calcMethodSelect) calcMethodSelect.addEventListener('change', calculateROI);
  if (calcSourceSelect) calcSourceSelect.addEventListener('change', calculateROI);

  // Initialize calculation on load
  calculateROI();

  /* ==========================================================================
     12. DEMO REQUEST FORM & SUCCESS MODAL
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
        alert("Please complete the required fields (Full Name, Phone Number, and Location).");
        sfx.playAlertTone();
        return;
      }

      // Generate reference code
      const randomCode = `AGRI-DEMO-${Math.floor(1000 + Math.random() * 9000)}`;
      if (modalRefCode) modalRefCode.textContent = randomCode;

      if (modalFeedbackText) {
        modalFeedbackText.textContent = `Thank you, ${nameInput.value.trim()}! Your on-field demo request has been dispatched to the Agripulse Engineering Team in ${locationInput.value.trim()}. Our agronomist will contact you at ${phoneInput.value.trim()} within 24 hours.`;
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

  /* ==========================================================================
     13. HOVER SOUNDS & BUTTON MICRO-INTERACTIONS
     ========================================================================== */
  const interactiveElements = document.querySelectorAll('.btn, .scenario-btn, .product-tab-btn, .valve-zone-box');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      sfx.playBlip(720, 0.02);
    });
  });

  // Set current copyright year
  const copyrightYear = document.getElementById('copyrightYear');
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }

});
