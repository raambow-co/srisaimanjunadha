import React from 'react';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import About from './components/About';
import Services from './components/Services';
import Brands from './components/Brands';
import WhyChooseUs from './components/WhyChooseUs';
import ProjectShowcase from './components/ProjectShowcase';
import CoverageArea from './components/CoverageArea';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import FloatingCTA from './components/FloatingCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-brand-greenLight selection:bg-brand-blue selection:text-white antialiased">
      {/* 1. SEO Configuration */}
      <SEO
        title="Sri Sai Manjunadha Enterprises | Solar Rooftops & Water Systems in Eluru"
        description="Established in 2010. Sri Sai Manjunadha Enterprises offers authorized V-Guard, Usha, Bajaj solar rooftop systems, RO water purifiers, water softeners, and appliance services in Eluru & West Godavari District."
        path="/"
      />

      {/* 2. Layout Components */}
      <Navbar />
      
      {/* 3. Page Sections */}
      <main>
        <Hero />
        <Trust />
        <Brands />
        <About />
        <Services />
        <WhyChooseUs />
        <ProjectShowcase />
        <CoverageArea />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* 4. Action & Footer Components */}
      <FloatingCTA />
      <Footer />
    </div>
  );
}

export default App;
