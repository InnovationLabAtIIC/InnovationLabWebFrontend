import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Innovation Lab</h3>
            <p className="text-blue-200 text-sm">
              Transforming ideas into impactful solutions. Fostering innovation and creativity within our community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-blue-200 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs/Events */}
          <div>
            <h3 className="font-bold text-lg mb-4">Programs/Events</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/events/icquest" className="text-blue-200 hover:text-white transition-colors">
                  ICQuest 3.0
                </Link>
              </li>
              <li>
                <Link href="/events/creative-clash" className="text-blue-200 hover:text-white transition-colors">
                  Creative Clash
                </Link>
              </li>
              <li>
                <Link href="/events/gppc" className="text-blue-200 hover:text-white transition-colors">
                  GPPC
                </Link>
              </li>
              <li>
                <Link href="/events/summer" className="text-blue-200 hover:text-white transition-colors">
                  Summer Enrichment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-blue-300 shrink-0 mt-0.5" />
                <span className="text-blue-200">Italian International College, Sundar Haraicha, Morang, Nepal</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-300" />
                <span className="text-blue-200">+977 9800000000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-300" />
                <span className="text-blue-200">innovation.lab@iic.edu.np</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-sm text-blue-300">
          2025 Innovation Lab. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
