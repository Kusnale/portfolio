import React, { useState } from "react";
import {
  ArrowUpRight, ArrowRight, Menu, X, Code2, Layout,
  Monitor, Sparkles, ChevronDown, Github, Linkedin,
  Instagram, Mail, Download, MoveUpRight
} from "lucide-react";
import { profile, projects, services, skills, journey, faqs } from "./siteData";

const iconMap = { code: Code2, layout: Layout, monitor: Monitor, sparkles: Sparkles };

function Header() {
  const [open, setOpen] = useState(false);
  const nav = [["About", "#about"], ["Services", "#services"], ["Selected work", "#work"], ["Reviews", "#reviews"]];
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Go to homepage">SHRUTI<span>.</span></a>
      <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
        {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Start a conversation <ArrowUpRight size={16}/></a>
      </nav>
      <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="top">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-rule" /> DEVELOPMENT / DESIGN / TECHNOLOGY</div>
        <h1>Engineering digital <br/>experiences that <em>make a difference.</em></h1>
        <p className="hero-lede">{profile.intro}</p>
        <div className="hero-actions">
          <a className="pill pill-dark" href="#contact">Let’s connect <ArrowUpRight size={17}/></a>
          <a className="pill pill-light" href="#work">Explore my work <ArrowRight size={17}/></a>
        </div>
        <div className="hero-foot"><span className="availability-dot"/> OPEN TO OPPORTUNITIES <span className="hero-foot-line"/></div>
      </div>
      <div className="hero-art">
        <div className="hero-photo">
          <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1500&q=88" />
        </div>
        <div className="hero-sticker"><span>CURIOUS<br/>BY NATURE</span><ArrowUpRight size={17}/></div>
        <div className="hero-image-caption"> ABOUT ME <span>01 / 06</span></div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <div className="trust-strip section-wrap">
      <span className="trust-label">MY APPROACH</span>
      <div className="trust-items"><span>THOUGHTFUL DESIGN</span><i/> <span>CLEAN DEVELOPMENT</span><i/> <span>CONTINUOUS LEARNING</span><i/> <span>DETAIL-ORIENTED</span></div>
    </div>
  );
}

function About() {
  return (
    <section className="section-wrap section-block about-section" id="about">
      <div className="section-kicker"><span>01 / ABOUT ME</span><span>A LITTLE CONTEXT</span></div>
      <div className="split-heading">
        <h2>Turning ideas<br/>into <em>real outcomes.</em></h2>
        <div className="section-intro">
          <p>{profile.about}</p>
          <p>{profile.aboutExtra}</p>
          <a className="text-link" href="#journey">More about my journey <ArrowRight size={17}/></a>
        </div>
      </div>
      <div className="about-banner">
        <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1900&q=88" alt="Bright contemporary creative workspace" />
        <div className="banner-note"><span>MY WORKING PRINCIPLE</span><strong>Good work lives<br/>in the details.</strong></div>
      </div>
      <div className="principles">
        <div><b>01</b><span>Stay curious</span></div>
        <div><b>02</b><span>Think clearly</span></div>
        <div><b>03</b><span>Build thoughtfully</span></div>
        <div><b>04</b><span>Keep improving</span></div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="section-wrap section-block work-section" id="work">
      <div className="section-kicker"><span>02 / SELECTED WORK</span><span>A FEW THINGS I’VE MADE</span></div>
      <div className="work-heading">
        <h2>Turning ideas<br/>into <em>real outcomes.</em></h2>
        <div><p>A selection of projects and explorations. Each one is an opportunity to solve a problem, learn something new and pay attention to the details.</p><a className="text-link" href="#contact">Have a project in mind? <ArrowRight size={17}/></a></div>
      </div>
      <div className="project-grid">
        {projects.map((project, i) => (
          <article className={`project-card project-${i + 1}`} key={project.number}>
            <a href={project.url} className="project-image" aria-label={`View ${project.title}`}>
              <img src={project.image} alt={project.alt}/>
              <span className="project-open"><ArrowUpRight size={22}/></span>
            </a>
            <div className="project-caption">
              <div><span className="project-category">{project.number} &nbsp; / &nbsp; {project.category}</span><h3>{project.title}</h3><p>{project.description}</p></div>
              <a href={project.url} className="round-arrow" aria-label={`Open ${project.title}`}><ArrowUpRight size={19}/></a>
            </div>
            <small className="edit-note">{project.note}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section-wrap section-block services-section" id="services">
      <div className="section-kicker"><span>03 / WHAT I CAN DO</span><span>AREAS OF INTEREST</span></div>
      <div className="services-heading">
        <h2>Thoughtful work.<br/><em>Useful outcomes.</em></h2>
        <p>Bringing design sensibility and technical curiosity together to create digital experiences that feel clear, useful and considered.</p>
      </div>
      <div className="service-grid">
        {services.map(({ number, title, description, icon }) => {
          const Icon = iconMap[icon] || Code2;
          return <article className="service-card" key={number}>
            <div className="service-top"><span className="service-icon"><Icon size={23}/></span><span className="service-index">{number}</span></div>
            <h3>{title}</h3><p>{description}</p><span className="service-bottom"><ArrowUpRight size={17}/></span>
          </article>;
        })}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="section-wrap section-block journey-section" id="journey">
      <div className="section-kicker"><span>04 / MY JOURNEY</span><span>EDUCATION & LEARNING</span></div>
      <div className="journey-heading"><h2>Always learning.<br/><em>Always growing.</em></h2><p>The experiences, education and learning that continue to shape how I approach technology and creative problem-solving.</p></div>
      <div className="journey-list">
        {journey.map((item, i) => <article className="journey-item" key={i}>
          <span className="journey-type">{item.type}</span>
          <div><h3>{item.title}</h3><b>{item.place}</b><p>{item.description}</p></div>
          <span className="journey-year">{item.year}</span>
        </article>)}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills-band" id="skills">
      <div className="section-wrap skills-inner">
        <div className="section-kicker"><span>05 / TOOLKIT</span><span>TECHNOLOGIES & SKILLS</span></div>
        <div className="skills-heading"><h2>Tools of the<br/><em>trade.</em></h2><p>A snapshot of the technologies I’m learning and working with. Edit this list to match your current skills and confidence level.</p></div>
        <div className="skill-cloud">{skills.map((skill, i) => <span key={skill}><small>0{i + 1}</small>{skill}<ArrowUpRight size={15}/></span>)}</div>
      </div>
    </section>
  );
}

function FAQ() {
  const [active, setActive] = useState(0);
  return (
    <section className="section-wrap section-block faq-section">
      <div className="section-kicker"><span>06 / A FEW ANSWERS</span><span>GOOD TO KNOW</span></div>
      <div className="faq-layout"><div><h2>Some things<br/>you might <em>wonder.</em></h2><p>A few quick details about what I do and how to get in touch.</p></div>
        <div className="faq-list">{faqs.map((faq, i) => <div className={`faq-item ${active === i ? "expanded" : ""}`} key={faq.q}>
          <button onClick={() => setActive(active === i ? -1 : i)} aria-expanded={active === i}><span>{faq.q}</span><ChevronDown size={19}/></button>
          {active === i && <p>{faq.a}</p>}
        </div>)}</div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="section-wrap section-block note-section" id="reviews">
      <div className="section-kicker"><span>07 / A NOTE</span><span>MY APPROACH TO COLLABORATION</span></div>
      <div className="quote-mark">“</div>
      <blockquote>Good collaboration starts with curiosity, clear communication and a shared commitment to doing thoughtful work.</blockquote>
      <p className="quote-caption">A PRINCIPLE I BRING TO EVERY PROJECT</p>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-wrap contact-inner">
        <div className="section-kicker"><span>08 / GET IN TOUCH</span><span>YOUR NEXT CONVERSATION STARTS HERE</span></div>
        <div className="contact-title"><h2>Let’s create<br/>something <em>meaningful.</em></h2><p>If you’d like to discuss an opportunity, collaborate or simply say hello, I’d be happy to hear from you.</p></div>
        <div className="contact-bottom">
          <div className="contact-details">
            <span className="contact-label">SAY HELLO</span>
            <a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={20}/></a>
            <div className="social-row">
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> https://github.com/Kusnale</a>
              <a href={profile.instagram} target="_blank" rel="noreferrer"><Instagram size={17}/> Instagram</a>
            </div>
          </div>
          <div className="resume-panel">
            <span>WANT THE FULL PICTURE?</span><h3>Take a look at my resume.</h3>
            <p>For a closer look at my background, skills, education and experience.</p>
            <a className="pill pill-dark resume-button" href={profile.resume} download><Download size={17}/> Download my resume <ArrowUpRight size={17}/></a>
            
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="site-footer section-wrap">
    <a className="wordmark" href="#top">SHRUTI<span>.</span></a>
    <p>Thoughtful by design. Curious by nature.</p>
    <a className="back-top" href="#top">BACK TO TOP <MoveUpRight size={15}/></a>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {profile.name}</span><span>DESIGNED & BUILT WITH CARE</span></div>
  </footer>;
}

export default function App() {
  return <><Header/><main><Hero/><TrustStrip/><About/><Work/><Services/><Journey/><Skills/><FAQ/><Reviews/><Contact/></main><Footer/></>;
}
