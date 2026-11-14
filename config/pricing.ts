export const PRICING_CONFIG = {
  monthlyDiscount: "Save 17%",
  plans: [
    {
      name: "Free",
      description: "For casual users and quick checks.",
      price: { monthly: 0, yearly: 0 },
      features: ["5 URL checks/day", "5 Spam checks/day", "Basic report", "7-day history"],
      buttonText: "Get Started",
      highlight: false
    },
    {
      name: "Pro",
      description: "For power users and developers.",
      price: { monthly: 9, yearly: 90 },
      features: ["Unlimited checks", "Full detailed reports", "Bulk URL check (50)", "Unlimited history", "API access"],
      buttonText: "Upgrade to Pro",
      highlight: true
    },
    {
      name: "Business",
      description: "For teams and organizations.",
      price: { monthly: 49, yearly: 490 },
      features: ["Everything in Pro", "Custom API limits", "Priority support", "Team dashboard"],
      buttonText: "Contact Sales",
      highlight: false
    }
  ],
  faq: [
    { q: "How accurate are the scores?", a: "Scores are based on real-time heuristics and reputation checks. While highly reliable, they are estimates and not guarantees." },
    { q: "Is my data private?", a: "Yes. We process data locally in your browser for most checks and do not store sensitive content." },
    { q: "Can I cancel anytime?", a: "Yes, you can manage or cancel your subscription directly from the dashboard." },
    { q: "Do you offer refunds?", a: "We offer a 14-day money-back guarantee on all yearly plans." },
    { q: "Is there an API?", a: "Yes, our API is available for Pro users with full documentation." },
    { q: "What about bulk checks?", a: "Pro users can upload CSV files with up to 50 URLs at once." },
    { q: "Does it work offline?", a: "The web inspector requires a connection for reputation checks, but the local spam analyzer works offline." },
    { q: "Do you block real email?", a: "We highlight suspicious patterns to help you make informed decisions, we don't automatically delete mail." }
  ]
};