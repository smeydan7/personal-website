import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import pic from "./resources/DSC_0470.JPG";
import github from "./resources/github.png";
import linkedin from "./resources/hd-square-black-outline-linkedin-icon-png-7017516950455535cziiy18li.png";
import resume from "./resources/Nov2025_Resume.pdf";
import "./App.css";

const fadeIn = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };

function Section({ children }) {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Card({ title, sub, date, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <h4>{sub}</h4>
      <p className="date">{date}</p>
      {children && <div className="cardBody">{children}</div>}
    </div>
  );
}

export default function App() {
  const [dark, setDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: light)").matches
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="site">
      {/* ----------  TOGGLE  ---------- */}
      <button className="themeToggle" onClick={() => setDark((d) => !d)} aria-label="Toggle theme">
        {dark ? "☀️" : "🌙"}
      </button>
      {/* ------- HERO ------- */}
    <header className="hero">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Hi, I'm Sam Meydanshahi 👋🏽
      </motion.h1>

      <motion.img
        src={pic}
        alt="Sam Meydanshahi"
        className="avatar"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      />

      <motion.div
        className="socials"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <a className="btn" href="https://github.com/smeydan7" target="_blank" rel="noreferrer">
          <img src={github} alt="GitHub" className="btnIcon" />
          GitHub
        </a>
        <a className="btn" href="https://linkedin.com/in/sam-meydanshahi" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="LinkedIn" className="btnIcon" />
          LinkedIn
        </a>
      </motion.div>
    </header>

      {/* ------- ABOUT ------- */}
      <Section>
        <div className="textBlock tight">
          <p>
            I’m a 4th year Computer Science student at the University of Waterloo with experience building software
            used by financial institutions, real estate professionals, and everyday users. My work spans from optimizing
            large scale payment systems at Payments Canada to developing full stack apps and AI driven tools, with a focus
            on creating reliable, intuitive, and impactful technology. I thrive both in collaborative teams and working
            independently, and I’m driven to do well and make a real impact wherever I contribute.
          </p>
          <p className="highlight">I am currently seeking 2026 internships in SWE and new grad roles for late 2026.</p>
        </div>
      </Section>

      {/* ------- RESUME ------- */}
      <Section>
        <div className="center">
          <a className="btn primary" href={resume} target="_blank" rel="noreferrer">
            View Résumé
          </a>
        </div>
      </Section>

      {/* ------- EXPERIENCE ------- */}
      <Section>
        <h2>I've worked at…</h2>
        <div className="grid">
          <Card title="wat.ai" sub="Machine Learning Engineer" date="Sep 2025 – Present" />
          <Card title="Payments Canada" sub="Software Developer" date="May 2025 – Aug 2025" />
          <Card title="Teranet" sub="Software Developer" date="Jan 2024 – Apr 2024" />
          <Card title="Teranet" sub="Software Engineer" date="Jan 2023 – Apr 2023" />
        </div>
      </Section>

      {/* ------- EDUCATION ------- */}
      <Section>
        <h2>Education</h2>
        <div className="grid">
          <Card title="University of Waterloo" sub="Bachelor of Computer Science" date="2021 – 2026" />
          <Card title="Earl Haig Secondary School" sub="High School (French Certificate)" date="2017 – 2021" />
        </div>
      </Section>

      {/* ------- FUN ------- */}
      <Section>
        <div className="textBlock">
          <h2>In my free time I like to:</h2>
          <ul className="funList">
            <li>⚽️ Play soccer</li>
            <li>📺 Watch live sports</li>
            <li>☀️ Hangout with friends and family</li>
            <li>📈 Try not to lose all my money investing in stocks</li>
          </ul>
        </div>
      </Section>

      {/* ------- FOOTER ------- */}
      <footer>
        Feel free to reach out at{" "}
        <a className="emailLink" href="mailto:smeydans@uwaterloo.ca">
          smeydans@uwaterloo.ca
        </a>{" "}
        😃
      </footer>
    </div>
  );
}