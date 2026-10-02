import { useEffect, useState } from "react";
import pic from "./resources/headshot.JPG";
import github from "./resources/logo-github.svg";
import linkedin from "./resources/logo-linkedin.svg";
import resume from "./resources/Oct2026_SWE_Resume.pdf";
import logoTenstorrent from "./resources/logo-tenstorrent.jpeg";
import logoPaymentsCanada from "./resources/logo-payments.jpg";
import logoTeranet from "./resources/logo-teranet.jpeg";
import logoUW from "./resources/logo-uw.svg";
import logoEHSS from "./resources/logo-ehss.png";
import "./App.css";

function Section({ children }) {
  return <div>{children}</div>;
}

function Card({ title, sub, date, logo, companyUrl, children }) {
  const titleEl = companyUrl ? (
    <a className="cardCompanyLink" href={companyUrl} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  ) : (
    <h3>{title}</h3>
  );

  return (
    <div className="card">
      <div className="cardTop">
        {logo ? (
          <div className="cardLogoWrap">
            <img src={logo} alt={`${title} logo`} />
          </div>
        ) : null}
        <div className="cardHeadings">
          {titleEl}
          <h4>{sub}</h4>
          <p className="date">{date}</p>
        </div>
      </div>
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
      <h1>Hi, I'm Sam Meydanshahi 👋🏽</h1>

      <img src={pic} alt="Sam Meydanshahi" className="avatar" />

      <div className="socials">
        <a className="btn" href="https://github.com/smeydan7" target="_blank" rel="noreferrer">
          <img src={github} alt="GitHub" className="btnIcon" />
        </a>
        <a className="btn" href="https://linkedin.com/in/sam-meydanshahi" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="LinkedIn" className="btnIcon" />
        </a>
      </div>
    </header>

      {/* ------- ABOUT ------- */}
      <Section>
        <div className="textBlock tight">
          <p>
          Computer Science student at the University of Waterloo in my final semester. 
          I've worked across the stack, from low-level systems for AI accelerators at Tenstorrent, 
          high-scale payment systems at Payments Canada, to full-stack applications at Teranet. 
          I'm happy working at any layer, as long as the problem is challenging and impactful.
          </p>
          <p className="highlight">I am currently seeking new grad roles for early 2027.</p>
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
          <Card
            title="Tenstorrent"
            sub="Software Engineer Intern"
            date="Jan 2026 - Aug 2026"
            logo={logoTenstorrent}
            companyUrl="https://tenstorrent.com/en"
          />
          <Card
            title="Payments Canada"
            sub="Software Engineer Intern"
            date="May 2025 - Aug 2025"
            logo={logoPaymentsCanada}
            companyUrl="https://www.payments.ca/"
          />
          <Card
            title="Teranet"
            sub="Software Engineer Intern"
            date="Jan 2024 - Apr 2024"
            logo={logoTeranet}
            companyUrl="https://www.teranet.ca/"
          />
          <Card
            title="Teranet"
            sub="Software Engineer Intern"
            date="Jan 2023 - Apr 2023"
            logo={logoTeranet}
            companyUrl="https://www.teranet.ca/"
          />
        </div>
      </Section>

      {/* ------- EDUCATION ------- */}
      <Section>
        <h2>Education</h2>
        <div className="grid">
          <Card 
            title="University of Waterloo" 
            sub="Bachelor of Computer Science" 
            date="2021 - 2026" 
            companyUrl="https://cs.uwaterloo.ca"
            logo={logoUW}
          />
          <Card 
            title="Earl Haig Secondary School" 
            sub="High School (French Certificate)" 
            date="2017 - 2021" 
            companyUrl="https://earlhaig.ca/main.php"
            logo={logoEHSS}  
          />
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