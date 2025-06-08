"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { getTestimonials, type Testimonial } from "@/services/api"
import Typography from "@/components/ui/Typography"
import { motion, useMotionValue, type PanInfo } from "framer-motion"
import { Quote } from "lucide-react"

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-[400px] flex-shrink-0 group mb-3"
    >
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full relative">
        {/* Quote icon */}
        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
          <Quote size={32} />
        </div>


        {/* Profile section */}
        <div className="flex items-center gap-4 mt-auto">
          <div className="flex-shrink-0">
            <div className="relative w-12 h-12 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
              {testimonial.imageUrl ? (
                <Image
                  src={testimonial.imageUrl || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  {testimonial.name.charAt(0)}
                </div>
              )}
            </div>
          </div>
          <div>
            <Typography variant="h6" color="primary" className="font-medium">
              {testimonial.name}
            </Typography>
            <Typography variant="body2" color="secondary" className="text-sm opacity-75">
              {testimonial.designation}
              {testimonial.organization && `, ${testimonial.organization}`}
            </Typography>
          </div>
        </div>

        {/* Testimonial text */}
        <div className="mb-8">
          <Typography variant="body1" color="secondary" className="leading-relaxed">
            "{testimonial.text}"
          </Typography>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const data = await getTestimonials()
        setTestimonials(data)
        setLoading(false)
      } catch (err) {
        setError("Failed to load testimonials. Please try again later.")
        setLoading(false)
      }
    }

    loadTestimonials()
  }, [])

  // Fallback data
  const fallbackTestimonials = [
    {
      id: "1",
      name: "Er. Santosh Parajuli",
      text: "The Innovation Lab provided the perfect environment for our team to develop our project. The resources and mentorship available were invaluable to our success.",
      designation: "Innovation Lead",
      organization: "Tech Solutions",
      imageUrl: "/placeholder.svg",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isDeleted: false,
      deletedAt: null,
    },
    {
      id: "2",
      name: "Sarah Johnson",
      text: "Working with the Innovation Lab transformed our approach to problem-solving. The collaborative atmosphere and expert guidance helped us turn our idea into a viable product.",
      designation: "Product Manager",
      organization: "Creative Designs",
      imageUrl: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isDeleted: false,
      deletedAt: null,
    },
    {
      id: "3",
      name: "Michael Chen",
      text: "As a student, the Innovation Lab opened doors I never thought possible. The hands-on experience and industry connections have been crucial to my professional development.",
      designation: "Research Fellow",
      organization: "University Research",
      imageUrl: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isDeleted: false,
      deletedAt: null,
    },
    {
      id: "4",
      name: "Emma Wilson",
      text: "The mentorship program at the Innovation Lab exceeded all my expectations. The guidance I received helped me navigate challenges and accelerate my project's development.",
      designation: "Startup Founder",
      organization: "EcoTech",
      imageUrl: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isDeleted: false,
      deletedAt: null,
    },
  ]

  // Use fallback data if API fails or during development
  const displayTestimonials = testimonials.length > 0 ? testimonials : fallbackTestimonials

  // Calculate card width and container constraints
  const cardWidth = 400 // Width of each testimonial card
  const gap = 32 // Gap between cards
  const maxTranslate = -((displayTestimonials.length - 3) * (cardWidth + gap)) // Show 3 cards at once
  const minTranslate = 0

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const offset = info.offset.x
    const velocity = info.velocity.x

    // Calculate new position based on drag distance and velocity
    let newX = x.get() + offset

    // Add momentum based on velocity
    if (Math.abs(velocity) > 500) {
      newX += velocity * 0.1
    }

    // Constrain to bounds
    newX = Math.max(maxTranslate, Math.min(minTranslate, newX))

    // Snap to nearest card
    const cardIndex = Math.round(-newX / (cardWidth + gap))
    const snappedX = -cardIndex * (cardWidth + gap)

    // Ensure we don't go beyond bounds
    const finalX = Math.max(maxTranslate, Math.min(minTranslate, snappedX))

    x.set(finalX)
    setCurrentIndex(Math.round(-finalX / (cardWidth + gap)))
  }

  // Function to handle dot navigation
  const handleDotClick = (index: number) => {
    const newX = -index * (cardWidth + gap)
    x.set(Math.max(maxTranslate, Math.min(minTranslate, newX)))
    setCurrentIndex(index)
  }

  if (loading) {
    return (
      <div className="py-24">
        {/* Centered Header */}
        <div className="mb-16">
          <Typography variant="h2" color="primary" className="mb-4">
            What People Say About Us
          </Typography>
          <Typography variant="body1" color="secondary" className="max-w-2xl mx-auto">
            Hear from participants, partners, and community members about their experiences with Innovation Lab.
          </Typography>
        </div>

        <div className="overflow-hidden px-4">
          <div className="flex gap-8 justify-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-[400px] flex-shrink-0">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm h-full">
                  <div className="space-y-3 mb-8">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 animate-pulse"></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                    <div className="flex-1">
                      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-24">
        {/* Centered Header */}
        <div className="text-center mb-16">
          <Typography variant="h2" color="primary" className="mb-4">
            What People Say About Us
          </Typography>
          <Typography variant="body1" color="secondary" className="max-w-2xl mx-auto">
            Hear from participants, partners, and community members about their experiences with Innovation Lab.
          </Typography>
        </div>
        <div className="text-center">
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        </div>
      </div>
    )
  }

  return (
    <div className="py-24">
      {/* Centered Header */}
      <div className="mb-16 flex flex-col justify-center items-center">
        <Typography variant="h3" color="primary" animated className="mb-4">
          What People Say About Us
        </Typography>
        <Typography variant="body2" color="secondary" className="max-w-2xl mx-auto">
          Hear from participants, partners, and community members about their experiences with Innovation Lab.
        </Typography>
      </div>

      {/* Testimonials Slider */}
      <div className="overflow-hidden px-4" ref={containerRef}>
        <motion.div
          className="flex gap-8 cursor-grab active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragConstraints={{
            left: maxTranslate,
            right: minTranslate,
          }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          whileDrag={{ cursor: "grabbing" }}
        >
          {displayTestimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </motion.div>
      </div>

      {/* Subtle dot navigation */}
      <div className="flex justify-center mt-12">
        <div className="flex gap-3">
          {Array.from({ length: Math.max(1, displayTestimonials.length - 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gray-800 dark:bg-gray-200 w-6"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
