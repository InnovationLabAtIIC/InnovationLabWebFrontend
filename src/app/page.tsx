import HeroSection from "@/components/home/HeroSection";
import VisionMissionSection from "@/components/home/VisionMissionSection";
import CoreValuesSection from "@/components/home/CoreValuesSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import UpcomingEventsSection from "@/components/home/UpcomingEventsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import EventHighlightsSection from "@/components/home/EventHighlightsSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <VisionMissionSection />
      <CoreValuesSection />
      <ProgramsSection />
      <UpcomingEventsSection />
      <TestimonialsSection />
      <EventHighlightsSection />
    </main>
  );
}
