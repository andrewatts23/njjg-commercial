:root {
  --bg: #050d19;
  --bg-2: #0b1526;
  --panel: rgba(255, 255, 255, 0.07);
  --panel-2: rgba(255, 255, 255, 0.12);
  --line: rgba(255, 255, 255, 0.13);
  --line-strong: rgba(255, 255, 255, 0.22);
  --text: #f8fbff;
  --muted: #bac7d8;
  --blue: #5ebdff;
  --blue-2: #96ddff;
  --green: #69da8c;
  --gold: #f5ca79;
  --shadow: 0 24px 90px rgba(0, 0, 0, 0.38);
  --radius: 28px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: var(--text);
  font-family: "Inter", system-ui, sans-serif;
  background:
    radial-gradient(circle at 18% 12%, rgba(94, 189, 255, 0.16), transparent 24%),
    radial-gradient(circle at 82% 10%, rgba(105, 218, 140, 0.11), transparent 22%),
    radial-gradient(circle at 70% 60%, rgba(245, 202, 121, 0.08), transparent 18%),
    linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 48%, #08101d 100%);
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

.bg {
  position: fixed;
  inset: 0;
  z-index: -5;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.4;
  animation: floatSlow 12s ease-in-out infinite alternate;
}

.orb-a {
  width: 320px;
  height: 320px;
  background: rgba(94, 189, 255, 0.24);
  top: -80px;
  left: -60px;
}

.orb-b {
  width: 260px;
  height: 260px;
  background: rgba(105, 218, 140, 0.18);
  top: 200px;
  right: -60px;
  animation-delay: -3s;
}

.orb-c {
  width: 220px;
  height: 220px;
  background: rgba(245, 202, 121, 0.12);
  bottom: 80px;
  left: 55%;
  animation-delay: -5s;
}

.grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: linear-gradient(180deg, rgba(255, 255, 255, 0.28), transparent 85%);
}

.grain {
  position: absolute;
  inset: 0;
  opacity: 0.05;
  background-image:
    radial-gradient(circle at 20% 20%, #fff 0.7px, transparent 0.8px),
    radial-gradient(circle at 70% 30%, #fff 0.7px, transparent 0.8px),
    radial-gradient(circle at 35% 80%, #fff 0.7px, transparent 0.8px);
  background-size: 90px 90px;
}

.container {
  width: min(1180px, calc(100% - 28px));
  margin: 0 auto;
}

.hero {
  padding: 24px 0 34px;
}

.glass {
  background: linear-gradient(180deg, var(--panel-2), var(--panel));
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
}

.glass-mini {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--line);
  backdrop-filter: blur(12px);
}

.nav {
  border-radius: 24px;
  padding: 14px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark-wrap {
  position: relative;
  width: 56px;
  height: 56px;
}

.brand-ring {
  position: absolute;
  inset: -6px;
  border-radius: 18px;
  background: radial-gradient(circle, rgba(94, 189, 255, 0.45), transparent 65%);
  animation: pulse 2.8s infinite ease-out;
}

.brand-mark {
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  font-weight: 900;
  letter-spacing: 0.08em;
  background: linear-gradient(135deg, var(--blue), #ffffff);
  color: #08111d;
  box-shadow: 0 12px 30px rgba(94, 189, 255, 0.28);
}

.brand-copy {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-weight: 800;
}

.brand-sub {
  color: var(--muted);
  font-size: 0.92rem;
  margin-top: 3px;
}

.nav-links {
  display: flex;
  gap: 22px;
  flex-wrap: wrap;
}

.nav-links a {
  color: var(--muted);
  font-weight: 600;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--text);
}

.nav-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.nav-pill {
  padding: 12px 16px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.06);
  font-weight: 700;
}

.nav-pill-accent {
  background: linear-gradient(135deg, var(--blue), #ffffff);
  color: #08111d;
}

.hero-grid {
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 22px;
  align-items: stretch;
}

.hero-copy {
  padding: 18px 4px 8px;
}

.eyebrow,
.section-kicker,
.chip {
  display: inline-block;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.06);
  color: var(--blue-2);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.glow-chip {
  box-shadow: 0 0 0 1px rgba(94, 189, 255, 0.14), 0 0 24px rgba(94, 189, 255, 0.12);
}

.hero-copy h1 {
  margin: 18px 0 16px;
  font-size: clamp(2.65rem, 5.4vw, 5rem);
  line-height: 0.96;
  letter-spacing: -0.05em;
}

.gradient-text {
  background: linear-gradient(135deg, #ffffff, var(--blue), var(--green));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-text {
  margin: 0;
  max-width: 760px;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.78;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.center-actions {
  justify-content: center;
}

.btn {
  padding: 14px 20px;
  border-radius: 16px;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.18s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.btn:hover,
.slider-btn:hover,
.dot:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--blue), #ffffff);
  color: #08111d;
  box-shadow: 0 16px 40px rgba(94, 189, 255, 0.24);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.06);
  color: var(--text);
  border: 1px solid var(--line);
}

.tag-row {
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag-row span {
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.92rem;
}

.trust-grid {
  margin-top: 26px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.trust-card {
  padding: 16px;
  border-radius: 18px;
}

.trust-card strong {
  display: block;
  margin-bottom: 7px;
}

.trust-card span {
  color: var(--muted);
  line-height: 1.6;
  font-size: 0.95rem;
}

.hero-panel {
  position: relative;
  min-height: 100%;
}

.hero-card {
  position: relative;
  padding: 28px;
  border-radius: var(--radius);
}

.floating {
  animation: floatSlow 8s ease-in-out infinite alternate;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  font-size: 0.92rem;
  font-weight: 700;
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--green);
  box-shadow: 0 0 16px rgba(105, 218, 140, 0.65);
  animation: pulseDot 1.8s infinite;
}

.hero-card h2 {
  margin: 16px 0 10px;
  font-size: 2rem;
  line-height: 1.08;
}

.hero-card p,
.contact-grid a,
.contact-grid span {
  color: var(--muted);
  line-height: 1.75;
}

.stat-grid {
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.stat {
  padding: 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--line);
}

.stat-label {
  display: block;
  color: var(--muted);
  font-size: 0.88rem;
  margin-bottom: 7px;
}

.stat-value {
  font-size: 1.1rem;
}

.contact-grid {
  margin-top: 20px;
  display: grid;
  gap: 14px;
}

.contact-kicker {
  display: block;
  color: var(--text) !important;
  font-weight: 700;
  margin-bottom: 5px;
}

.floating-note {
  position: absolute;
  padding: 14px 16px;
  border-radius: 18px;
  max-width: 220px;
  box-shadow: var(--shadow);
}

.floating-note span {
  display: block;
  color: var(--muted);
  font-size: 0.84rem;
  margin-bottom: 6px;
}

.floating-note strong {
  line-height: 1.4;
}

.note-a {
  left: -10px;
  bottom: 34px;
  animation: floatSlow 7s ease-in-out infinite alternate;
}

.note-b {
  right: 12px;
  bottom: -18px;
  animation: floatSlow 9s ease-in-out infinite alternate;
}

.marquee-section {
  padding: 10px 0 20px;
}

.marquee-shell {
  border-radius: 20px;
  padding: 14px 0;
  overflow: hidden;
}

.marquee-track {
  display: flex;
  gap: 36px;
  min-width: max-content;
  animation: marquee 24s linear infinite;
}

.marquee-track span {
  color: var(--muted);
  font-weight: 700;
  white-space: nowrap;
}

.section {
  padding: 34px 0;
}

.section-head {
  margin-bottom: 22px;
}

.section-head.center {
  max-width: 860px;
  margin: 0 auto 24px;
  text-align: center;
}

.section-head h2 {
  margin: 14px 0 10px;
  font-size: clamp(2rem, 4vw, 3.15rem);
  line-height: 1.05;
}

.section-head p {
  margin: 0;
  color: var(--muted);
  line-height: 1.8;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.service-card,
.content-panel,
.info-card,
.pricing-panel,
.cta-panel,
.slider-shell {
  border-radius: var(--radius);
}

.service-card {
  padding: 24px;
}

.service-icon {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-weight: 800;
  background: linear-gradient(135deg, rgba(94, 189, 255, 0.18), rgba(255, 255, 255, 0.08));
  border: 1px solid var(--line);
  color: var(--blue-2);
  margin-bottom: 16px;
}

.service-card h3,
.info-card h3,
.pricing-box h3 {
  margin-top: 0;
  font-size: 1.2rem;
}

.service-card p,
.content-panel p,
.info-card p,
.pricing-copy p,
.pricing-box p,
.cta-panel p {
  color: var(--muted);
  line-height: 1.8;
}

.slider-shell {
  padding: 24px;
}

.slider-top {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  align-items: flex-start;
  margin-bottom: 18px;
}

.slider-top h3 {
  margin: 14px 0 0;
  font-size: 1.45rem;
  line-height: 1.25;
}

.slider-controls {
  display: flex;
  gap: 10px;
}

.slider-btn {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.07);
  color: var(--text);
  font-size: 1.2rem;
  cursor: pointer;
}

.slider-track-wrap {
  overflow: hidden;
  position: relative;
}

.slider-track {
  display: flex;
  transition: transform 0.45s ease;
}

.slide {
  min-width: 100%;
  padding: 14px 4px 8px;
}

.phase-badge {
  display: inline-block;
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 800;
  margin-bottom: 12px;
}

.phase-1 {
  background: rgba(94, 189, 255, 0.18);
  color: #a4dfff;
}

.phase-2 {
  background: rgba(105, 218, 140, 0.18);
  color: #b3f2c3;
}

.phase-3 {
  background: rgba(245, 202, 121, 0.18);
  color: #ffe0a4;
}

.slide h4 {
  margin: 0 0 10px;
  font-size: 1.8rem;
}

.slide-lead {
  color: var(--muted);
  margin: 0 0 14px;
  line-height: 1.7;
}

.slide ul,
.clean-list {
  margin: 0;
  padding-left: 18px;
}

.slide li,
.clean-list li {
  margin-bottom: 10px;
  color: var(--muted);
  line-height: 1.7;
}

.slide-note {
  margin-top: 16px;
  padding: 14px 16px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--line);
  line-height: 1.7;
}

.slider-dots {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  border: 0;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
}

.dot.active {
  width: 34px;
  background: linear-gradient(90deg, var(--blue), var(--green));
}

.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.content-panel,
.info-card,
.cta-panel {
  padding: 26px;
}

.content-panel h2,
.pricing-copy h2,
.cta-panel h2 {
  margin: 14px 0 12px;
  font-size: 2rem;
  line-height: 1.12;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.pricing-panel {
  padding: 28px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 18px;
}

.pricing-box {
  padding: 22px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--line);
}

.small-note {
  font-size: 0.92rem;
}

.cta-section {
  padding-bottom: 48px;
}

.cta-panel {
  text-align: center;
}

.footer {
  border-top: 1px solid var(--line);
  padding: 24px 0 36px;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.footer-brand,
.footer-copy {
  margin: 0;
}

.footer-brand {
  font-weight: 800;
  margin-bottom: 6px;
}

.footer-copy {
  color: var(--muted);
  max-width: 720px;
}

.footer-links {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.footer-links a {
  color: var(--blue);
  font-weight: 700;
}

.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.magnetic {
  transform-style: preserve-3d;
}

@keyframes pulse {
  0% { opacity: 0.35; transform: scale(0.9); }
  70% { opacity: 0; transform: scale(1.22); }
  100% { opacity: 0; transform: scale(1.22); }
}

@keyframes pulseDot {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.25); opacity: 0.75; }
}

@keyframes floatSlow {
  0% { transform: translateY(0px); }
  100% { transform: translateY(-10px); }
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@media (max-width: 1024px) {
  .hero-grid,
  .service-grid,
  .two-col,
  .cards-grid,
  .pricing-panel {
    grid-template-columns: 1fr;
  }

  .nav,
  .slider-top,
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .trust-grid {
    grid-template-columns: 1fr;
  }

  .floating-note {
    position: static;
    margin-top: 12px;
    max-width: none;
  }
}

@media (max-width: 760px) {
  .container {
    width: min(100% - 18px, 1180px);
  }

  .nav-links {
    display: none;
  }

  .hero-card,
  .service-card,
  .slider-shell,
  .content-panel,
  .info-card,
  .pricing-panel,
  .cta-panel {
    padding: 22px;
  }

  .hero-actions,
  .nav-actions {
    flex-direction: column;
    width: 100%;
  }

  .btn,
  .nav-pill {
    width: 100%;
  }

  .hero-copy h1 {
    font-size: 2.35rem;
  }

  .hero-card h2,
  .slide h4,
  .content-panel h2,
  .pricing-copy h2,
  .cta-panel h2 {
    font-size: 1.65rem;
  }
}
