import HeroSection from "@/components/home/HeroSection";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import JewelryEdit from "@/components/home/JewelryEdit";
import CompleteTheLook from "@/components/home/CompleteTheLook";
import OccasionShowcase from "@/components/home/OccasionShowcase";
import TrendingLooks from "@/components/home/TrendingLooks";
import HowRentalWorks from "@/components/home/HowRentalWorks";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import InspirationGallery from "@/components/home/InspirationGallery";
import FinalCTASection from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <CategoryShowcase />

      <FeaturedCollections />

      <JewelryEdit />

      <CompleteTheLook />

      <OccasionShowcase />

      <TrendingLooks />

      <HowRentalWorks />

      <WhyChooseUs />

      <TestimonialsSection />

      <InspirationGallery />

      <FinalCTASection />
    </>
  );
}