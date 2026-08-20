import { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { db } from "./firebase";
import { sendSubmissionEmails } from "./emailjs";
import { BRAND, TEAM, SERVICES, PROJECTS, PRICING, CONTACT, TERMS } from "./data";
import logo from "./assets/logo.png";
import "./App.css";

function Reveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["#services", "Services"],
    ["#work", "Work"],
    ["#pricing", "Pricing"],
    ["#team", "Team"],
    ["#contact", "Contact"],
    ["#feedback", "Feedback"],
    ["#connect", "Connect"],
  ];
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="#top">
          <img className="brand-mark" src={logo} alt={BRAND.name} />
          <span className="brand-name">{BRAND.name}</span>
        </a>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        <p className="eyebrow">Two-person full-stack team</p>
        <h1>{BRAND.tagline}</h1>
        <p className="hero-sub">
          We design, build, and harden websites that load fast and stay secure — end to end, from
          the database to the browser. One team, one point of contact, no handoffs.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#connect">
            Connect with us
          </a>
          <a className="btn btn-ghost" href="#work">
            See our work
          </a>
        </div>
        <div className="hero-strip" data-testid="hero-project-strip" aria-label="Selected projects">
          <div className="hero-strip-track">
            {[...PROJECTS, ...PROJECTS].map((p, i) => (
              <span className="hero-strip-item" key={`${p.title}-${i}`}>
                {p.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section">
      <div className="section-head">
        <p className="eyebrow">What we do</p>
        <h2>Speed and security, handled end to end</h2>
        <p className="section-sub">
          A slow site loses visitors before it loads. An unsecured one loses their trust. We fix
          both — and keep them fixed.
        </p>
      </div>
      <div className="grid grid-4">
        {SERVICES.map((s) => (
          <div className="card" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="section section-alt">
      <div className="section-head">
        <p className="eyebrow">Selected work</p>
        <h2>Projects we've built</h2>
        <p className="section-sub">
          Real applications from our internships, coursework, and hackathons — the same
          fundamentals we bring to client sites.
        </p>
      </div>
      <div className="grid grid-3">
        {PROJECTS.map((p) => (
          <div className="card project-card" key={p.title}>
            <div className="project-owner">{p.owner}</div>
            <h3>{p.title}</h3>
            <p className="project-stack">{p.stack}</p>
            <p>{p.description}</p>
            {p.link && (
              <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                {p.linkLabel} →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="section-head">
        <p className="eyebrow">Pricing</p>
        <h2>Simple, upfront packages</h2>
        <p className="section-sub">{PRICING.note}</p>
      </div>
      <div className="grid grid-3 pricing-grid">
        {PRICING.plans.map((plan) => (
          <div className={`card pricing-card ${plan.highlight ? "pricing-highlight" : ""}`} key={plan.name}>
            {plan.badge ? (
              <span className="pricing-badge">{plan.badge}</span>
            ) : (
              plan.highlight && <span className="pricing-badge">Most popular</span>
            )}
            <h3>{plan.name}</h3>
            <p className="pricing-tagline">{plan.tagline}</p>
            <div className="pricing-price">
              <span className="pricing-amount">{plan.price}</span>
              <span className="pricing-unit">{plan.unit}</span>
            </div>
            {plan.note && <p className="pricing-note">{plan.note}</p>}
            <ul className="pricing-features">
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a className={`btn ${plan.highlight ? "btn-primary" : "btn-ghost"} pricing-cta`} href="#connect">
              {plan.ctaLabel || "Ask about this plan"}
            </a>
            {plan.disclaimer && <p className="pricing-disclaimer">{plan.disclaimer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

function TeamMember({ member }) {
  return (
    <div className="card team-card">
      <div className="team-head">
        {member.photo ? (
          <img className="avatar avatar-photo" src={member.photo} alt={member.name} />
        ) : (
          <div className="avatar">{member.initials}</div>
        )}
        <div>
          <h3>{member.name}</h3>
          <p className="team-role">{member.role}</p>
        </div>
      </div>
      <p className="team-summary">{member.summary}</p>

      <div className="team-focus">
        {member.focus.map((f) => (
          <span className="pill" key={f}>
            {f}
          </span>
        ))}
      </div>

      <div className="team-block">
        <h4>Skills</h4>
        <div className="skills-grid">
          {Object.entries(member.skills).map(([cat, items]) => (
            <div key={cat}>
              <p className="skills-cat">{cat}</p>
              <p className="skills-items">{items.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="team-block">
        <h4>Experience</h4>
        <ul className="timeline">
          {member.experience.map((e) => (
            <li key={e.role + e.org}>
              <span className="timeline-role">{e.role}</span> — {e.org}
              <span className="timeline-period">{e.period}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="team-block">
        <h4>Education</h4>
        <ul className="timeline">
          {member.education.map((e) => (
            <li key={e.degree}>
              {e.degree}
              <span className="timeline-period">
                {e.years} · {e.detail}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="team-block">
        <h4>Certifications</h4>
        <ul className="cert-list">
          {member.certifications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>

      <div className="team-contact">
        <a href={`tel:${member.phone.replace(/\s+/g, "")}`}>{member.phone}</a>
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
        {member.github && (
          <a href={member.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

function Team() {
  return (
    <section id="team" className="section">
      <div className="section-head">
        <p className="eyebrow">Who we are</p>
        <h2>The two of us</h2>
        <p className="section-sub">
          One team, complementary strengths — backend/data on one side, frontend/UI on the other,
          full-stack on both.
        </p>
      </div>
      <div className="grid grid-2">
        {TEAM.map((m) => (
          <TeamMember member={m} key={m.name} />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section section-alt contact-section">
      <div className="section-head">
        <p className="eyebrow">Get in touch</p>
        <h2>Let's talk about your website</h2>
        <p className="section-sub">{CONTACT.intro}</p>
      </div>
      <div className="card contact-card-single">
        {TEAM.map((m) => (
          <div className="contact-dev-row" key={m.name}>
            <div className="team-head">
              {m.photo ? (
                <img className="avatar avatar-photo" src={m.photo} alt={m.name} />
              ) : (
                <div className="avatar">{m.initials}</div>
              )}
              <div>
                <h3>{m.name}</h3>
                <p className="team-role">{m.role}</p>
              </div>
            </div>
            <a href={`tel:${m.phone.replace(/\s+/g, "")}`}>{m.phone}</a>
          </div>
        ))}
        <div className="contact-dev-row contact-company-row">
          <span className="team-role">Email</span>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </div>
      </div>
      <div className="terms-notice">
        <p>Before proceeding with us, please agree with our</p>
        <a className="btn btn-primary terms-notice-btn" href="/terms">
          Terms &amp; Conditions
        </a>
      </div>
    </section>
  );
}

function StarRating({ value, onChange }) {
  return (
    <div className="star-rating" role="radiogroup" aria-label="Rating out of 5">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          className={`star ${n <= value ? "star-filled" : ""}`}
          role="radio"
          aria-checked={n === value}
          aria-label={`${n} star${n > 1 ? "s" : ""}`}
          onClick={() => onChange(n)}
        >
          ★
        </button>
      ))}
    </div>
  );
}

function FeedbackCard({ item }) {
  return (
    <div className="card feedback-card">
      <div className="feedback-stars" aria-label={`Rated ${item.rating} out of 5`}>
        {"★".repeat(item.rating)}
        {"☆".repeat(5 - item.rating)}
      </div>
      <p className="feedback-message">"{item.message}"</p>
      <div className="feedback-author">
        <span className="feedback-name">{item.name}</span>
        {item.role && <span className="feedback-role">{item.role}</span>}
      </div>
    </div>
  );
}

function Feedback() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: "", role: "", rating: 0, message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const q = query(collection(db, "feedback"), orderBy("createdAt", "desc"), limit(24));
    const unsubscribe = onSnapshot(
      q,
      (snap) => {
        setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
        setLoading(false);
      },
      (err) => {
        console.error("Feedback fetch failed:", err);
        setLoading(false);
      }
    );
    return unsubscribe;
  }, []);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.rating || !form.name.trim() || !form.message.trim()) return;
    setSubmitting(true);
    setError("");
    try {
      await addDoc(collection(db, "feedback"), {
        name: form.name.trim(),
        role: form.role.trim(),
        rating: form.rating,
        message: form.message.trim(),
        createdAt: serverTimestamp(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Feedback submission failed:", err);
      setError("Something went wrong submitting your feedback. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="feedback" className="section feedback-section">
      <div className="section-head">
        <p className="eyebrow">Client feedback</p>
        <h2>What it's like working with us</h2>
        <p className="section-sub">
          Worked with us on a project? We'd love to hear how it went — your feedback shows up here for everyone to see.
        </p>
      </div>

      {!loading && items.length > 0 && (
        <div className="grid grid-3 feedback-grid">
          {items.map((item) => (
            <FeedbackCard item={item} key={item.id} />
          ))}
        </div>
      )}
      {!loading && items.length === 0 && (
        <p className="feedback-empty">No feedback yet — be the first to share your experience.</p>
      )}

      {submitted ? (
        <div className="card feedback-thanks">
          <h3>Thanks for sharing, {form.name.split(" ")[0]}!</h3>
          <p>Your feedback is now posted above for everyone to see.</p>
        </div>
      ) : (
        <form className="card project-form feedback-form" onSubmit={handleSubmit}>
          <h3>Leave your feedback</h3>
          <div className="form-row">
            <label>
              Name
              <input type="text" required value={form.name} onChange={(e) => update("name", e.target.value)} />
            </label>
            <label>
              Role / Company (optional)
              <input type="text" value={form.role} onChange={(e) => update("role", e.target.value)} />
            </label>
          </div>
          <label className="form-full">
            Rating
            <StarRating value={form.rating} onChange={(n) => update("rating", n)} />
          </label>
          <label className="form-full">
            Your experience
            <textarea
              rows={4}
              required
              placeholder="Tell us how the project went — communication, speed, quality, anything else..."
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
            />
          </label>
          {error && <p className="form-error">{error}</p>}
          <button className="btn btn-primary" type="submit" disabled={!form.rating || submitting}>
            {submitting ? "Submitting..." : "Submit feedback"}
          </button>
        </form>
      )}
    </section>
  );
}

function ProjectForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    companyAddress: "",
    package: "Starter",
    details: "",
    agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.agreed) return;
    setSubmitting(true);
    setError("");
    try {
      await addDoc(collection(db, "submissions"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setSubmitted(true);
      try {
        await sendSubmissionEmails(form);
      } catch (emailErr) {
        // The submission is already safely stored in Firestore even if the
        // notification/confirmation emails fail to send, so don't block success.
        console.error("EmailJS send failed:", emailErr);
      }
    } catch (err) {
      console.error("Firestore submission failed:", err);
      setError(`Something went wrong sending your details (${err.code || err.message}). Please try again or email us directly.`);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <section id="connect" className="section section-alt">
        <div className="section-head">
          <p className="eyebrow">Connect with us</p>
          <h2>Thanks, {form.name.split(" ")[0] || "there"}!</h2>
          <p className="section-sub">
            We've got your project details and your agreement to our Terms &amp; Conditions. We'll be in touch shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="connect" className="section section-alt">
      <div className="section-head">
        <p className="eyebrow">Connect with us</p>
        <h2>Tell us about your project</h2>
        <p className="section-sub">Share a few details and we'll get back to you with next steps.</p>
      </div>
      <form className="card project-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Name
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Phone
            <input
              type="tel"
              required
              inputMode="numeric"
              pattern="[0-9]{10}"
              maxLength={10}
              title="Enter a 10-digit phone number"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
            />
          </label>
          <label>
            Company name
            <input
              type="text"
              value={form.companyName}
              onChange={(e) => update("companyName", e.target.value)}
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Company address
            <input
              type="text"
              value={form.companyAddress}
              onChange={(e) => update("companyAddress", e.target.value)}
            />
          </label>
          <label>
            Interested package
            <select value={form.package} onChange={(e) => update("package", e.target.value)}>
              {PRICING.plans.map((p) => (
                <option key={p.name} value={p.name}>
                  {p.name} ({p.price})
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className="form-full">
          Project details
          <textarea
            rows={5}
            required
            placeholder="Tell us what you need — pages, features, timeline, existing site (if any)..."
            value={form.details}
            onChange={(e) => update("details", e.target.value)}
          />
        </label>
        <label className="form-checkbox">
          <input
            type="checkbox"
            checked={form.agreed}
            onChange={(e) => update("agreed", e.target.checked)}
            required
          />
          <span>
            I have read and agree to the{" "}
            <a href="/terms" target="_blank" rel="noreferrer">
              Terms &amp; Conditions
            </a>
            .
          </span>
        </label>
        {error && <p className="form-error">{error}</p>}
        <button className="btn btn-primary" type="submit" disabled={!form.agreed || submitting}>
          {submitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>
          {BRAND.name} — built by Manoj B Kunachi &amp; Salvin Dsouza
        </span>
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        <a className="footer-terms-link" href="/terms">
          Terms &amp; Conditions
        </a>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

function Terms() {
  return (
    <section className="section terms-section">
      <div className="section-head">
        <p className="eyebrow">Legal</p>
        <h2>Terms &amp; Conditions</h2>
        <p className="section-sub">Last Updated: {TERMS.updated}</p>
      </div>
      <div className="terms-intro">
        {TERMS.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="terms-body">
        {TERMS.sections.map((s) => (
          <div key={s.heading} className="terms-block">
            <h3>{s.heading}</h3>
            {s.blocks.map((b, i) =>
              b.ul ? (
                <ul key={i}>
                  {b.ul.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p key={i}>{b.p}</p>
              )
            )}
          </div>
        ))}
      </div>
      <a className="btn btn-ghost" href="/">
        ← Back to home
      </a>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, anchors: true });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const isTerms = typeof window !== "undefined" && window.location.pathname === "/terms";

  if (isTerms) {
    return (
      <div className="site">
        <Nav />
        <main>
          <Terms />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="site">
      <Nav />
      <main>
        <Hero />
        <Reveal><Services /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Pricing /></Reveal>
        <Reveal><Team /></Reveal>
        <Reveal><Contact /></Reveal>
        <Reveal><Feedback /></Reveal>
        <Reveal><ProjectForm /></Reveal>
      </main>
      <Footer />
    </div>
  );
}
