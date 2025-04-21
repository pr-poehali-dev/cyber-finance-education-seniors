import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ThreatsSection from "@/components/ThreatsSection";
import RecommendationsSection from "@/components/RecommendationsSection";
import FormatsSection from "@/components/FormatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <ThreatsSection />
        <RecommendationsSection />
        <FormatsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
