import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-8 max-w-7xl mx-auto">
      <Link href="/" className="text-blue-600 font-bold text-xl">
        Innovation Lab.
      </Link>
      <div className="flex gap-8">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        <Link href="/about" className="text-blue-600 font-medium">
          About
        </Link>
        <Link href="/events" className="hover:text-blue-600 transition-colors">
          Events
        </Link>
        <Link href="/contact" className="hover:text-blue-600 transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  )
}
