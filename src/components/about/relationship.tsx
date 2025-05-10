"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { getParentOrg, type ParentOrg } from "@/services/api"

export default function RelationshipSection() {
  const [data, setData] = useState<ParentOrg | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadData() {
      try {
        const result = await getParentOrg()
        setData(result)
        setLoading(false)
      } catch (err) {
        setError("Failed to load relationship data")
        setLoading(false)
      }
    }

    loadData()
  }, [])

  // Fallback data
  const fallbackData = {
    title: "Our Relationship with IIC",
    description:
      "The Innovation Lab operates as a specialized hub within the Italian International College ecosystem, bridging the gap between academic research and real-world application. Through this strategic partnership, the Lab provides IIC students with unique opportunities to gain hands-on experience working on cutting-edge projects while allowing industry partners to tap into fresh talent and innovative thinking. The College provides institutional support, resources, and academic expertise, while the Innovation Lab brings industry connections, practical focus, and entrepreneurial mindset—creating a powerful synergy that benefits all stakeholders.",
  }

  // Use fallback data if API fails
  const displayData = data || fallbackData

  if (loading) {
    return (
      <div className="mt-20 grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-gray-200 rounded-md h-80 animate-pulse"></div>
        <div className="space-y-6">
          <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-20 grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-green-500 w-[600px] h-[400px] relative">
  <Image
    src="/"
    alt="Picture of IIC building"
    fill
    className="rounded-md object-cover"
  />
</div>

      <div className="space-y-6">
        <div>
          <h2 className="text-[32px] font-bold mb-2 text-[#1E1E1E]">{displayData.title}</h2>
          <p className="text-[16px] font-medium text-[#757575]">A powerful academic-industry partnership</p>
        </div>

        <p className="text-gray-700">{displayData.description}</p>
      </div>
    </div>
  )
}
