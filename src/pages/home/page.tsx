import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import HeroSection from './components/HeroSection';
import TopLocalities from './components/TopLocalities';
import WhyChooseUs from './components/WhyChooseUs';
import CTABanner from './components/CTABanner';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TopLocalities />
      <WhyChooseUs />
      <CTABanner />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
