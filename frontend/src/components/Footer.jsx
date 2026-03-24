import { Link } from "react-router-dom";

const footerLinks = [
  {
    heading: "Product",
    links: [
      { label: "Home", to: "/" },
      { label: "Features", to: "/features" },
      { label: "How It Works", to: "/#how-it-works" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    heading: "Help",
    links: [
      { label: "Contact Us", to: "/contact" },
      { label: "Support", to: "/support" },
      { label: "FAQs", to: "/faqs" },
      { label: "Privacy Policy", to: "/privacy" },
    ],
  },
  {
    heading: "Social",
    links: [
      { label: "Instagram", to: "https://instagram.com", external: true },
      { label: "Twitter / X", to: "https://twitter.com", external: true },
      { label: "LinkedIn", to: "https://linkedin.com", external: true },
      { label: "YouTube", to: "https://youtube.com", external: true },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 px-6 pt-16 pb-8 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Top grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand col */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-lg shadow-lg shadow-blue-500/30 flex-shrink-0">
                🛡️
              </div>
              <span className="text-white font-extrabold text-lg tracking-tight">
                RentShield <span className="text-cyan-400">AI</span>
              </span>
            </div>

            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Making renting safe, transparent, and stress-free for every student and tenant in India.
            </p>

            {/* Trust badge */}
            <div className="mt-5 inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-white/40 text-xs">AI-Powered Protection</span>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-white text-sm transition-colors duration-200 no-underline"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-white/40 hover:text-white text-sm transition-colors duration-200 no-underline"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © 2026 RentShield AI. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-white/25 text-xs">
            <span>Built with</span>
            <span className="text-red-400">♥</span>
            <span>for safer renting in India</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;