export const SITE_CONFIG = {
  name: "SpamShield",
  stats: [
    { label: "URLs Scanned", value: 125430, suffix: "+" },
    { label: "Threats Blocked", value: 8902, suffix: "" },
    { label: "Messages Analyzed", value: 45210, suffix: "+" },
  ],
  steps: [
    { title: "Input", description: "Paste a URL or suspicious text message into the inspector." },
    { title: "Analyze", description: "Our engine performs multi-layered heuristic and AI checks." },
    { title: "Review", description: "Get a clear, color-coded safety report in seconds." }
  ],
  features: [
    { title: "SSL & Domain Analysis", description: "Deep inspection of registrar data and SSL trust chains.", glow: "cyan" },
    { title: "Phishing & Malware", description: "Google Safe Browsing & custom blacklist checking.", glow: "rose" },
    { title: "AI Spam Detection", description: "Identify social engineering with NLP analysis.", glow: "indigo" },
    { title: "Security Headers", description: "Audit CSP, HSTS, and Frame options.", glow: "emerald" },
    { title: "Redirect Tracing", description: "Follow up to 5 hops to find hidden malicious sites.", glow: "amber" },
    { title: "PDF Reports", description: "Export professional security audits.", glow: "cyan" }
  ]
};