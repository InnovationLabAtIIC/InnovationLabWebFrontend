import Image from "next/image";
import AboutHero from "@/components/about/hero";
import AboutContent from "@/components/about/content";
import RelationshipSection from "@/components/about/relationship";
import VisionMission from "@/components/about/vision-mission";
import CoreValues from "@/components/about/core-values";
import Journey from "@/components/about/journey";
import FAQ from "@/components/about/faq";



export default function AboutPage() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex items-center gap-8 mb-16">
          <div>
            <AboutHero />
            <AboutContent />
          </div>

          {/* Right Section with Three Images */}
          <div className="flex flex-col items-start space-y-7 p-4">
            {/* First Image */}
            <div className="relative w-[580px] h-[200px] bg-green-500  overflow-hidden">
              <Image
                src="/images/team-1.jpg"
                alt="Team members collaborating"
                fill
                className="object-cover"
              />
            </div>

            {/* Second Image with clip-path */}
            <div
              className="relative w-[580px] h-[200px] bg-blue-500 overflow-hidden"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 100%, 50% 100%, 50% 60%, 0 60%)",
              }}
            >
              <Image
                src="/images/person-working.jpg"
                alt="Person working on a computer"
                fill
                className="object-cover"
              />
            </div>

            {/* Third Image */}
            <div className="relative w-[250px] h-[278px] bg-red-500 overflow-hidden -mt-19">
              <Image
                src="/images/team-working.jpg"
                alt="Team working together"
                fill
                className="object-cover"
              />
            </div>
          </div>

       
        </div>

        <RelationshipSection />
        <VisionMission />
        <CoreValues />
        <Journey />
        <FAQ />
      </div>
    </div>
  );
}
