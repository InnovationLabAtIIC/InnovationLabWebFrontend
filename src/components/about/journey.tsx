"use client"

import { useState, useEffect } from "react"
import { getJourney, type JourneyItem } from "@/services/api"
import { Calendar, ChevronRight } from "lucide-react"

type TimelineItemProps = {
  title: string
  description: string
  date: string
  isLeft?: boolean
  index: number
  totalItems: number
}

function TimelineItem({ title, description, date, isLeft = false, index, totalItems }: TimelineItemProps) {
  // Extract year from date string (format: YYYY-MM-DD)
  const year = new Date(date).getFullYear().toString()

  // Determine color based on index
  const colors = [
    { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200", icon: "bg-amber-500" },
    { bg: "bg-green-50", text: "text-green-600", border: "border-green-200", icon: "bg-green-500" },
    { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", icon: "bg-blue-500" },
    { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", icon: "bg-purple-500" },
  ]

  const color = colors[index % colors.length]

  return (
    <div className={`flex items-start gap-8 mb-24 relative ${isLeft ? "md:flex-row-reverse" : ""}`}>
      {/* Content Card */}
      <div
        className={`flex-1 ${color.bg} p-6 rounded-lg shadow-sm border-l-4 ${color.border} transform transition-transform duration-300 hover:scale-105 hover:shadow-md`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`${color.icon} text-white w-8 h-8 rounded-full flex items-center justify-center`}>
            <Calendar size={16} />
          </div>
          <h3 className={`text-xl font-bold ${color.text}`}>{year}</h3>
        </div>
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-gray-700">{description}</p>
      </div>

      {/* Center Line with Circle */}
      <div className="hidden md:flex flex-col items-center">
        <div className={`w-12 h-12 rounded-full ${color.icon} text-white flex items-center justify-center z-10`}>
          <span className="font-bold">{index + 1}</span>
        </div>
        <div className="w-1 bg-gray-200 h-full absolute top-12 bottom-0 z-0"></div>
      </div>

      {/* Empty div for layout on alternating sides */}
      <div className="flex-1 hidden md:block"></div>

      {/* Mobile indicator (only visible on small screens) */}
      <div className="absolute left-0 top-0 md:hidden">
        <div className={`w-8 h-8 rounded-full ${color.icon} text-white flex items-center justify-center`}>
          <span className="text-sm font-bold">{index + 1}</span>
        </div>
      </div>

      {/* Curved arrow connecting to next item (only if not the last item) */}
      {index < totalItems - 1 && (
        <div
          className={`absolute hidden md:block ${
            isLeft ? "left-[calc(50%-150px)]" : "left-[calc(50%+30px)]"
          } top-16 z-20 pointer-events-none`}
        >
          <svg width="120" height="100" viewBox="0 0 120 100" className="opacity-70">
            <path
              d={isLeft ? "M0,0 C30,10 60,50 100,80" : "M0,80 C40,50 70,10 100,0"}
              stroke="white"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d={isLeft ? "M80,80 L100,80 L95,60" : "M80,0 L100,0 L95,20"}
              stroke="white"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  )
}

export default function Journey() {
  const [milestones, setMilestones] = useState<JourneyItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadJourney() {
      try {
        const data = await getJourney()
        setMilestones(data)
        setLoading(false)
      } catch (err) {
        setError("Failed to load journey milestones")
        setLoading(false)
      }
    }

    loadJourney()
  }, [])

  // Fallback data
  const fallbackMilestones = [
    {
      id: 4,
      title: "Foundation",
      description:
        "The Innovation Lab was established as a collaborative initiative between Italian International College and industry partners to foster innovation and entrepreneurship in the region.",
      date: "2020-03-05",
    },
    {
      id: 3,
      title: "Program Launch",
      description:
        "Launched our flagship innovation programs including the Startup Incubator, Research Fellowship, and Technology Workshop series.",
      date: "2021-09-10",
    },
    {
      id: 2,
      title: "First Major Success",
      description:
        "Our first incubated startup, EcoSolutions, secured $2 million in funding and launched their sustainable packaging product to international acclaim.",
      date: "2022-06-22",
    },
    {
      id: 1,
      title: "Global Expansion",
      description:
        "The Innovation Lab expanded its reach globally, forming partnerships with international universities and tech companies to create a worldwide network of innovation hubs.",
      date: "2023-01-15",
    },
  ]

  // Use fallback data if API fails
  const displayMilestones = milestones.length > 0 ? [...milestones] : [...fallbackMilestones]

  // Sort milestones by date (oldest to newest)
  displayMilestones.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  if (loading) {
    return (
      <div className="mt-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Our Journey</h2>
          <p className="text-gray-600 mt-2">
            Explore the key milestones that have shaped our innovation lab over the years.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-1 h-20 bg-gray-100 animate-pulse rounded"></div>
              <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
              <div className="flex-1 h-20 bg-gray-100 animate-pulse rounded"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="mt-20 relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-600">Our Journey</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Explore the key milestones that have shaped our innovation lab over the years, from our founding to our global
          expansion.
        </p>
      </div>

      <div className="relative mt-16 px-4">
        {/* Main vertical line (only visible on desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-10 w-1 bg-gray-200 -translate-x-1/2"></div>

        {displayMilestones.map((item, index) => (
          <TimelineItem
            key={item.id}
            title={item.title}
            description={item.description}
            date={item.date}
            isLeft={index % 2 !== 0}
            index={index}
            totalItems={displayMilestones.length}
          />
        ))}

        {/* Journey continues indicator */}
        <div className="flex justify-center">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-md">
            <span>Journey continues</span>
            <ChevronRight size={16} />
          </div>
        </div>
      </div>
    </div>
  )
}
