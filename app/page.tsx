import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import JewellerySection from "@/components/home/JewellerySection";
import CompleteLookSection from "@/components/home/CompleteLookSection";
import EditorialSection from "@/components/home/EditorialSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import HomeCTA from "@/components/home/HomeCTA";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <HeroSection />

      <CategorySection />

      <FeaturedCollection />

      <JewellerySection />

      <CompleteLookSection />

      <EditorialSection />

      <HowItWorksSection />

      <NewsletterSection />

      <HomeCTA />

      <Footer />
    </main>
  );
}