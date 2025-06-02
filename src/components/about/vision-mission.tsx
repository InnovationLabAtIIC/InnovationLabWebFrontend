"use client"

import { useState, useEffect } from "react"
import { Lightbulb, Target } from "lucide-react"
import { getMissionVision, type MissionVision } from "@/services/api"
import Typography from "@/components/ui/Typography"

export default function VisionMission() {
  const [data, setData] = useState<MissionVision | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadData() {
      try {
        const result = await getMissionVision()
        setData(result)
        setLoading(false)
      } catch (err) {
        setError("Failed to load mission and vision data")
        setLoading(false)
      }
    }

    loadData()
  }, [])

  // Fallback data
  const fallbackData = {
    mission:
      "To create an inclusive, collaborative environment that empowers innovators to develop solutions to local and global challenges through technology, research, and entrepreneurship.",
    vision:
      "To become a globally recognized hub for innovation that transforms ideas into sustainable solutions, driving positive social, economic, and environmental impact.",
  }

  // Use fallback data if API fails
  const displayData = data || fallbackData

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        <div className="bg-gray-100 p-6 rounded-lg animate-pulse h-64"></div>
        <div className="bg-gray-100 p-6 rounded-lg animate-pulse h-64"></div>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 mt-16">
      {/* Vision Section */}
      <div className="border-y-8 border-y-green-500 rounded-t-lg rounded-b-lg">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center text-green-600">
              <Target size={18} />
            </div>
            <Typography variant="h4" color="primary">
              Our Vision
            </Typography>
          </div>

          <Typography variant="body1" color="secondary" className="mb-4">
            {displayData.vision}
          </Typography>

          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <Typography variant="body2" color="secondary">
                Create a self-sustaining ecosystem of innovation and entrepreneurship.
              </Typography>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <Typography variant="body2" color="secondary">
                Position our region as a leading innovation hub in Asia
              </Typography>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <Typography variant="body2" color="secondary">
                Develop solutions that contribute to the UN Sustainable Development Goals.
              </Typography>
            </li>
          </ul>
        </div>
      </div>

      {/* Mission Section */}
      <div className="border-y-8 border-y-blue-500 rounded-t-lg rounded-b-lg">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center text-blue-600">
              <Lightbulb size={18} />
            </div>
            <Typography variant="h4" color="primary">
              Our Mission
            </Typography>
          </div>

          <Typography variant="body1" color="secondary" className="mb-4">
            {displayData.mission}
          </Typography>

          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <Typography variant="body2" color="secondary">
                Foster innovation through multidisciplinary collaboration.
              </Typography>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <Typography variant="body2" color="secondary">
                Accelerate the development and adoption of breakthrough technologies
              </Typography>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <Typography variant="body2" color="secondary">
                Bridge the gap between academic research and industry implementation
              </Typography>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
