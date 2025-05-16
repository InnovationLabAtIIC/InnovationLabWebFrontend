
const InnovationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 18.75L19.5 16.5m0 0L21.75 18.75m-2.25-2.25V15M17.25 18.75h.008v.008h-.008v-.008zm-5.625-2.625L12 18.75m0 0l-1.625-2.625m1.625 2.625V15m0 3.75h.008v.008h-.008v-.008zm-5.625-2.625L6.375 18.75m0 0L4.125 16.125m2.25 2.625V15m0 3.75h.008v.008h-.008V15zm1.125-7.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm3.375-3.75a.375.375 0 00-.75 0v1.125a.375.375 0 00.75 0V7.5z" /></svg>; // Lightbulb idea
const CollaborationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.243-3.72a9.094 9.094 0 013.741-.479 3 3 0 01-4.682-2.72M12.028 16.88A9.094 9.094 0 0112 18.72c-3.094 0-5.842-.96-8.242-2.595M12.028 16.88A9.094 9.094 0 0012 15c3.094 0 5.842.96 8.242 2.595m-8.243-4.19A9.094 9.094 0 0112 11.28c3.094 0 5.842.96 8.242 2.595M12.028 9.12A9.094 9.094 0 0012 7.28c-3.094 0-5.842-.96-8.242-2.595M5.757 7.28A9.094 9.094 0 0012 5.28c1.485 0 2.888.288 4.135.81m-9.563-.81A9.094 9.094 0 015.757 4.72m6.053 4.225A3 3 0 106.75 6.75a3 3 0 004.06 4.06zM12 12a3 3 0 100-6 3 3 0 000 6zM17.25 12a3 3 0 100-6 3 3 0 000 6z" /></svg>; // People/Network
const ImpactIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>; // Growth/Chart
const SustainabilityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.001 9.001 0 008.684-5.879M12 21a9.001 9.001 0 01-8.684-5.879M12 3C8.684 3 5.316 5.879 4.316 9.121m15.368-.001C20.684 5.879 17.316 3 15 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.563A.562.562 0 019 14.437V9.564z" /></svg>; // Leaf/Nature simplified

const coreValuesData = [
  {
    icon: <InnovationIcon />,
    title: "Innovation",
    description: "We believe in pushing boundaries and exploring new frontiers to create solutions that matter.",
    iconBg: "bg-blue-500", 
  },
  {
    icon: <CollaborationIcon />,
    title: "Collaboration",
    description: "We bring together diverse perspectives and expertise to solve complex challenges through teamwork.",
    iconBg: "bg-purple-500", 
  },
  {
    icon: <ImpactIcon />,
    title: "Impact",
    description: "We measure our success by the meaningful difference our innovations make in the world.",
    iconBg: "bg-fuchsia-500", 
  },
  {
    icon: <SustainabilityIcon />,
    title: "Sustainability",
    description: "We prioritize solutions that support environmental stewardship and long-term social good.",
    iconBg: "bg-green-500", 
  },
];

const CoreValuesSection = () => {
  return (
    <section className="flex flex-col md:flex-row">
      {/* Left Column: Title and Subtitle */}
      <div className="w-full md:w-1/3 bg-blue-600 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
        <p className="text-lg md:text-xl text-blue-100">
          The principles that guide our work and shape our community.
        </p>
      </div>

      {/* Right Column: Value Cards */}
      <div className="w-full md:w-2/3 bg-indigo-800 p-8 md:p-12 lg:p-16">
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {coreValuesData.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-start text-left">
              <div className={`p-3 rounded-full ${value.iconBg} mb-4 shadow-md`}>
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection; 