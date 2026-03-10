import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeTeach from './components/WhatWeTeach';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatWeTeach />
      <HowItWorks />
      <Testimonials />
      <AboutUs />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
