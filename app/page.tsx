import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Demo from '@/components/Demo';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Features />
      <HowItWorks />
      <Demo />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
