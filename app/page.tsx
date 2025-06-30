// app/page.tsx
"use client";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollingLogos from './components/ScrollingLogos';
import Platform from './components/Platform';
import AboutUsSection from './components/AboutUsSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <Navbar />

      {/* Hero Section - Company 会跳转到这里 */}
      <div id="hero-section">
        <Hero />
      </div>

      {/* Products Section - 所有 Product 菜单项都会跳转到这里 */}
      <div id="products-section">
        <ScrollingLogos />
      </div>

      {/* Platform Section */}
      <Platform />

      {/* About Us Section - About Us 会跳转到这里 */}
      <AboutUsSection />

      {/* Footer Section - 包含 pricing 等其他部分 */}
      <div id="pricing-section">
        <Footer />
      </div>
    </div>
  );
}