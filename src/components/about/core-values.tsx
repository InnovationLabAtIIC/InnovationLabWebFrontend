"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { getCoreValues, type CoreValue } from "@/services/api"
import { Lightbulb, Users, LineChart, Leaf } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  Innovation: <Lightbulb className="text-white" size={20} />,
  Collaboration: <Users className="text-white" size={20} />,
  Impact: <LineChart className="text-white" size={20} />,
  Sustainability: <Leaf className="text-white" size={20} />,
}

const colorMap: Record<string, string> = {
  Innovation: "bg-blue-500",
  Collaboration: "bg-purple-600",
  Impact: "bg-pink-500",
  Sustainability: "bg-green-500",
}

function ValueCard({ title, description, color }: { title: string; description: string; color: string }) {
  return (
    <div className="flex flex-col items-start mb-8">
      <div className="flex items-center gap-3 mb-3">
        <div className={`${color} w-10 h-10 rounded-full flex items-center justify-center`}>
          {iconMap[title] || <Lightbulb className="text-white" size={20} />}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

export default function CoreValues() {
  const [values, setValues] = useState<CoreValue[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadValues() {
      try {
        const data = await getCoreValues()
        setValues(data)
        setLoading(false)
      } catch (err) {
        setError("Failed to load core values")
        setLoading(false)
      }
    }

    loadValues()
  }, [])

  // Fallback data
  const fallbackValues = [
    {
      id: 1,
      title: "Innovation",
      description: "We believe in pushing boundaries and exploring new frontiers to create solutions that matter.",
    },
    {
      id: 2,
      title: "Collaboration",
      description: "We bring together diverse perspectives and expertise to solve complex challenges through teamwork.",
    },
    {
      id: 3,
      title: "Impact",
      description: "We measure our success by the meaningful difference our innovations make in the world.",
    },
    {
      id: 4,
      title: "Sustainability",
      description: "We prioritize solutions that support environmental stewardship and long-term social good.",
    },
  ]

  // Use fallback data if API fails
  const displayValues = values.length > 0 ? values : fallbackValues

  if (loading) {
    return (
      <div className="mt-16">
        <div className="flex flex-col md:flex-row">
          <div className="bg-blue-500 text-white p-8 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-2">Our Core Values</h2>
            <p className="text-blue-100">The principles that guide our work and shape our community.</p>
          </div>

          <div className="md:w-1/2 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    <div className="h-5 bg-gray-300 rounded w-24"></div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-16">
      <div className="flex flex-col md:flex-row">
        <div className="bg-blue-500 text-white p-8 md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2">Our Core Values</h2>
          <p className="text-blue-100">The principles that guide our work and shape our community.</p>
        </div>

        <div className="md:w-1/2 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            {displayValues.map((value) => (
              <ValueCard
                key={value.id}
                title={value.title}
                description={value.description}
                color={colorMap[value.title] || "bg-gray-500"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
