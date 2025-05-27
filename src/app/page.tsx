'use client'

import Image from "next/image";
import MagneticButton from "../../components/ui/MagneticButton";
import Button from "../../components/ui/Button";
import Typography from "../../components/ui/Typography";
import NavigationBar from "../../components/section/NavigationBar";

export default function Home() {
  return (
    <>      <NavigationBar 
        logo="/vercel.svg"
        links={[
          { label: 'Home', href: '/' },
          { label: 'Features', href: '/features' },
          { label: 'Projects', href: '/projects' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ]}
        actionLabel="Get Started"
        actionHref="/get-started"
      />
      
      <main className="max-w-[1360px] mx-auto px-4 md:px-6 lg:px-8 pt-28">
        <div className="min-h-screen flex flex-col items-center justify-center max-w-4xl mx-auto text-center">
          <Typography variant="h1" animated className="mb-6">
            Welcome to IVLAB
          </Typography>
          
          <Typography variant="subtitle1" color="secondary" className="mb-12 max-w-2xl">
            A modern Next.js application with beautiful UI components and responsive design.
            Explore our collection of reusable components.
          </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mb-12">
            <Button onClick={() => {}} variant="primary" size="large" fullWidth className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-md hover:shadow-lg transition-all">
              {` Get Started `}
            </Button>
            <MagneticButton>
              Learn More
            </MagneticButton>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-12">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Typography variant="h5" className="mb-4">
                Modern Design
              </Typography>
              <Typography variant="body2" color="tertiary">
                Beautiful, responsive components built with Tailwind CSS.
              </Typography>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Typography variant="h5" className="mb-4">
                Animation
              </Typography>
              <Typography variant="body2" color="tertiary">
                Smooth animations powered by Framer Motion.
              </Typography>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Typography variant="h5" className="mb-4">
                Typography
              </Typography>
              <Typography variant="body2" color="tertiary">
                Consistent text styling with our Typography component.
              </Typography>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}


