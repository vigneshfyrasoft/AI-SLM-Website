import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhySLMs from '@/components/WhySLMs';
import HowItWorks from '@/components/HowItWorks';
import Demo from '@/components/Demo';
import IndustryApplications from '@/components/IndustryApplications';
import VerticalSolutions from '@/components/VerticalSolutions';
import BusinessCases from '@/components/BusinessCases';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Features />
      <WhySLMs />
      <HowItWorks />
      <Demo />
      <IndustryApplications />
      <VerticalSolutions />
      <BusinessCases />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
