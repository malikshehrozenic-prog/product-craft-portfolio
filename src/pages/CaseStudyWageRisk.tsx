import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Globe, Calculator, AlertTriangle, ExternalLink, CheckCircle2, DollarSign, Shield, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import wageLibraryDashboard from "@/assets/wage-liability-dashboard.jpg";

const countries = [
  { flag: "🇧🇷", name: "Brazil", drivers: "40% FGTS penalty, 13th month, notice: 30 days + 3 days/year" },
  { flag: "🇫🇷", name: "France", drivers: "Tiered severance: 1/4 month/year (first 10), 1/3 after" },
  { flag: "🇩🇪", name: "Germany", drivers: "Market practice 0.5 months/year, works council involvement" },
  { flag: "🇲🇽", name: "Mexico", drivers: "3 months constitutional indemnity + 12 days/year seniority" },
  { flag: "🇳🇱", name: "Netherlands", drivers: "Transitievergoeding: 1/3 month/year, capped at €94k" },
  { flag: "🇮🇳", name: "India", drivers: "Gratuity after 5 years: 15 days/year of service" },
  { flag: "🇬🇧", name: "UK", drivers: "Statutory redundancy pay based on age and tenure" },
  { flag: "🇵🇭", name: "Philippines", drivers: "Separation pay: 1 month per year of service" },
  { flag: "🇸🇬", name: "Singapore", drivers: "No statutory severance, market practice varies" },
  { flag: "🇦🇺", name: "Australia", drivers: "NES redundancy pay scale based on tenure" },
];

const keyCapabilities = [
  { icon: Calculator, title: "Liability Calculation", description: "Notice period + severance + statutory bonuses + vacation accrual per employee" },
  { icon: DollarSign, title: "FX Conversion", description: "Real-time rates with 30-day volatility ratings (High/Medium/Low)" },
  { icon: Shield, title: "Risk Scoring", description: "Composite score: liability magnitude, FX volatility, legal risk weighting" },
  { icon: AlertTriangle, title: "Concentration Alerts", description: "Flags when >30% of liability sits in one country" },
  { icon: BarChart3, title: "Portfolio Dashboard", description: "Interactive visualizations: treemaps, histograms, drill-down analysis" },
];

const techStack = [
  { name: "Streamlit", description: "Dashboard framework" },
  { name: "Plotly", description: "Interactive visualizations" },
  { name: "Python", description: "Calculation engine" },
  { name: "Dict-based configs", description: "Extensible architecture" },
  { name: "Streamlit Cloud", description: "One-click deployment" },
];

const demonstratedSkills = [
  { area: "Domain Expertise", description: "Deep understanding of international labor law, EOR financial mechanics, termination costs" },
  { area: "Financial Acumen", description: "Exposure modeling, FX risk, concentration analysis — not just HR data display" },
  { area: "Technical Range", description: "Full-stack Python: calculation engine, REST-ready architecture, interactive dashboard" },
  { area: "Product Thinking", description: "Scoped MVP to 10 high-impact countries, prioritized actionable alerts over raw data" },
];

const CaseStudyWageRisk = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container max-w-6xl mx-auto px-6 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </header>

      <div className="pt-24 pb-16 px-6">
        <div className="container max-w-4xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {["Python", "Streamlit", "Plotly", "Financial Modeling"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-gold-primary/10 text-gold-primary border border-gold-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gold-shine">
              Wage Liability Risk Assessment Engine
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real-time EOR termination liability monitoring across 10 countries. An automated risk engine that calculates termination liability using country-specific labor law formulas, converts to USD with FX exposure tracking, and surfaces concentration risks before they become financial surprises.
            </p>
          </motion.div>

          {/* Dashboard Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 rounded-2xl border border-border overflow-hidden bg-card"
          >
            <div className="p-4 border-b border-border bg-secondary/30">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-gold-primary" />
                <span className="font-medium">Risk Dashboard Overview</span>
              </div>
            </div>
            <div className="p-4 bg-[#1a1a1a]">
              <img 
                src={wageLibraryDashboard} 
                alt="Wage Liability Risk Engine dashboard showing portfolio exposure analysis, country breakdown, and risk scoring"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>

          {/* The Problem */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              The Problem
            </h2>
            <div className="p-6 rounded-xl bg-card border border-border">
              <p className="text-muted-foreground leading-relaxed">
                EOR (Employer of Record) companies carry hidden financial liability for every employee. If an employee in Brazil is terminated, the EOR owes severance, notice pay, FGTS penalties, and prorated bonuses — potentially <span className="text-gold-primary font-semibold">$40k+ per employee</span>. Finance teams calculate this quarterly in Excel: manual, reactive, and outdated the moment it's created.
              </p>
            </div>
          </motion.section>

          {/* Key Capabilities */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              Key Capabilities
            </h2>
            <div className="grid gap-4">
              {keyCapabilities.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-gold-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-gold-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Countries & Calculation Logic */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              Countries & Calculation Logic
            </h2>
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="px-4 py-3 text-left text-sm font-semibold">Country</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Key Liability Drivers</th>
                  </tr>
                </thead>
                <tbody>
                  {countries.map((country, index) => (
                    <tr key={country.name} className={index % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                      <td className="px-4 py-3 text-sm whitespace-nowrap">
                        <span className="text-xl mr-2">{country.flag}</span>
                        <span className="text-muted-foreground">{country.name}</span>
                      </td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{country.drivers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Demonstrated Skills */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              Demonstrated Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {demonstratedSkills.map((skill, index) => (
                <motion.div
                  key={skill.area}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="p-4 rounded-xl bg-card border border-border"
                >
                  <h3 className="font-semibold text-gold-primary mb-2">{skill.area}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Tech Stack */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="px-4 py-3 rounded-xl bg-card border border-border hover:border-gold-primary/30 transition-colors"
                >
                  <p className="font-semibold text-foreground">{tech.name}</p>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://wage-liability-risk-engine.streamlit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-primary text-background font-semibold hover:bg-gold-light transition-colors"
            >
              <Globe className="w-4 h-4" />
              Live Demo
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold-primary/50 text-gold-primary font-semibold hover:bg-gold-primary/10 transition-colors"
            >
              View on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default CaseStudyWageRisk;
