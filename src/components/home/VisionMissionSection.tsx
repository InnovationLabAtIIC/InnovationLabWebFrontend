
const VisionIcon = () => ( 
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const MissionIcon = () => ( 
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.375M12 6.375C12 3.691 9.309 1.5 6.375 1.5S.75 3.691.75 6.375c0 .99.237 1.909.656 2.713l5.208 7.812a.75.75 0 00.625.375h9.522a.75.75 0 00.625-.375l5.208-7.812A5.23 5.23 0 0023.25 6.375C23.25 3.691 20.941 1.5 18 1.5c-2.139 0-3.965 1.336-4.74 3.215M12 18.375a3.75 3.75 0 003.75-3.75H8.25A3.75 3.75 0 0012 18.375zM12 18.375v2.25A1.875 1.875 0 0013.875 22.5h-3.75A1.875 1.875 0 008.25 20.625v-2.25" />
  </svg>
);

const VisionMissionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-10 md:gap-y-0 items-stretch">
          
          {/* Our Vision */}
          <div className="flex flex-col">
            <div className="h-2 w-full bg-green-500 rounded-t-lg"></div>
            <div className="bg-white p-6 md:p-8 rounded-b-lg shadow-xl flex-grow flex flex-col">
              <div className="flex items-center mb-5">
                <div className="p-3 rounded-full bg-gray-200 mr-4">
                  <VisionIcon />
                </div>
                <h2 className="text-3xl font-bold text-black">Our Vision</h2>
              </div>
              <p className="mb-4 text-black leading-relaxed">
                To become a globally recognized hub for innovation that transforms ideas into sustainable solutions, driving positive social, economic, and environmental impact.
              </p>
              <ul className="text-black list-disc list-inside space-y-1 pl-2 text-sm flex-grow">
                <li>Create a self-sustaining ecosystem of innovation and entrepreneurship.</li>
                <li>Position our region as a leading innovation hub in Asia.</li>
                <li>Develop solutions that contribute to the UN Sustainable Development Goals.</li>
              </ul>
            </div>
          </div>

          {/* Our Mission */}
          <div className="flex flex-col">
            <div className="h-2 w-full bg-blue-500 rounded-t-lg"></div>
            <div className="bg-white p-6 md:p-8 rounded-b-lg shadow-xl flex-grow flex flex-col">
              <div className="flex items-center mb-5">
                <div className="p-3 rounded-full bg-gray-200 mr-4">
                  <MissionIcon />
                </div>
                <h2 className="text-3xl font-bold text-black">Our Mission</h2>
              </div>
              <p className="mb-4 text-black leading-relaxed">
                To create an inclusive, collaborative environment that empowers innovators to develop solutions to local and global challenges through technology, research, and entrepreneurship.
              </p>
              <ul className="text-black list-disc list-inside space-y-1 pl-2 text-sm flex-grow">
                <li>Foster innovation through multidisciplinary collaboration.</li>
                <li>Accelerate the development and adoption of breakthrough technologies.</li>
                <li>Bridge the gap between academic research and industry implementation.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection; 