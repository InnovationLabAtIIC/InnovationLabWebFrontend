'use client'

import NavigationBar from "./components/navbar";
import Hero from "./components/banner";
import VisionMissionSection from "./components/VisionMissionSection";
import CoreValues from "./components/CoreValues";
import OurProgramsSection from "./components/ourPrograms";
import UpcomingEventsSection from "./components/upcommingEvents";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <VisionMissionSection />
      <CoreValues />
      <OurProgramsSection />
      <UpcomingEventsSection />
    </>
  );
}


