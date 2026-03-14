// src/components/Layout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, className = "" }) {
  return (
    <div className={`min-h-screen flex flex-col ${className}`} style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}