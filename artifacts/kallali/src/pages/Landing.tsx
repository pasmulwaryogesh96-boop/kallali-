import Navbar from '../components/sections/Navbar';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Kemraj from '../components/sections/Kemraj';
import Process from '../components/sections/Process';
import Marketplace from '../components/sections/Marketplace';
import Stats from '../components/sections/Stats';
import CTA from '../components/sections/CTA';
import Footer from '../components/sections/Footer';

export default function Landing() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Kemraj />
      <Process />
      <Marketplace />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}
