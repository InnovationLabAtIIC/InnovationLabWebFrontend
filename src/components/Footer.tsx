import Link from 'next/link';


const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 inline-block"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 inline-block"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>;
const EmailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 inline-block"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>;

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-700 via-purple-600 to-blue-500 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Innovation Lab Info */}
          <div>
            <h3 className="text-xl font-bold mb-3">Innovation Lab</h3>
            <p className="text-sm text-gray-200">
              Transforming ideas into impactful solutions. Fostering innovation and creativity within our community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
              <li><Link href="/events" className="hover:text-gray-300">Events</Link></li> 
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>

          {/* Programs/Events */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Programs/Events</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-gray-300 cursor-pointer">IICQuest 3.0</span></li>
              <li><span className="hover:text-gray-300 cursor-pointer">Creative Clash</span></li>
              <li><span className="hover:text-gray-300 cursor-pointer">GPPC</span></li>
              <li><span className="hover:text-gray-300 cursor-pointer">Summer Enrichment</span></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Information</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <LocationIcon />
                <span>Itahari International College, Sundar Haraicha, Morang, Nepal</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon />
                <span>+977 9800000000</span>
              </li>
              <li className="flex items-center">
                <EmailIcon />
                <a href="mailto:innovation.lab@iic.edu.np" className="hover:text-gray-300">innovation.lab@iic.edu.np</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-300 border-t border-gray-500 pt-8">
          &copy; {new Date().getFullYear()} Innovation Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 