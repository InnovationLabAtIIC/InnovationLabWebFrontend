// API service for fetching data from the backend

// Updated FAQ Types to match backend
export type FAQ = {
  id: string
  question: string
  answer: string
  createdAt: string
  lastUpdatedAt: string
  categoryId: string
  categoryName: string
}

export type FAQResponse = {
  page: number
  limit: number
  totalItems: number
  data: FAQ[]
}

export async function getFAQs(page = 0, limit = 10): Promise<FAQResponse> {
  try {
    const response = await fetch(`https://innovationlabwebbackend.onrender.com/api/v1/faqs?page=${page}&limit=${limit}`)

    if (!response.ok) {
      throw new Error("Failed to fetch FAQs")
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching FAQs:", error)
    return {
      page: 0,
      limit: 0,
      totalItems: 0,
      data: [],
    }
  }
}
  
  // About Page Types
  export type About = {
    mission: string
    vision: string
    core_values: string[]
    parent_organization_info: string
    cover_image_url: string
  }
  
  export type MissionVision = {
    mission: string
    vision: string
  }
  
  export type CoreValue = {
    id: number
    title: string
    description: string
  }
  
  export type ParentOrg = {
    title: string
    description: string
  }
  
  export type JourneyItem = {
    id: number
    title: string
    description: string
    date: string
  }
  
  // Updated Testimonial Types
export type Testimonial = {
  id: string
  name: string
  text: string
  designation: string
  organization: string
  imageUrl: string
  createdAt: string
  updatedAt: string
  isDeleted: boolean
  deletedAt: string | null
}

  
  // About Page API Functions
  export async function getAbout(): Promise<About> {
    try {
      const response = await fetch("/api/v1/about")
  
      if (!response.ok) {
        throw new Error("Failed to fetch about information")
      }
  
      return await response.json()
    } catch (error) {
      console.error("Error fetching about information:", error)
      throw error
    }
  }
  
  export async function getMissionVision(): Promise<MissionVision> {
    try {
      const response = await fetch("/api/v1/about/mission-vision")
  
      if (!response.ok) {
        throw new Error("Failed to fetch mission and vision")
      }
  
      return await response.json()
    } catch (error) {
      console.error("Error fetching mission and vision:", error)
      throw error
    }
  }
  
  export async function getCoreValues(): Promise<CoreValue[]> {
    try {
      const response = await fetch("/api/v1/about/core-values")
  
      if (!response.ok) {
        throw new Error("Failed to fetch core values")
      }
  
      return await response.json()
    } catch (error) {
      console.error("Error fetching core values:", error)
      return []
    }
  }
  
  export async function getParentOrg(): Promise<ParentOrg> {
    try {
      const response = await fetch("/api/v1/about/parent-org")
  
      if (!response.ok) {
        throw new Error("Failed to fetch parent organization information")
      }
  
      return await response.json()
    } catch (error) {
      console.error("Error fetching parent organization information:", error)
      throw error
    }
  }
  
  export async function getJourney(): Promise<JourneyItem[]> {
    try {
      const response = await fetch("/api/v1/about/journey")
  
      if (!response.ok) {
        throw new Error("Failed to fetch journey milestones")
      }
  
      return await response.json()
    } catch (error) {
      console.error("Error fetching journey milestones:", error)
      return []
    }
  }
  
  export async function getTestimonials(): Promise<Testimonial[]> {
    try {
      const response = await fetch("/api/v1/testimonials")
  
      if (!response.ok) {
        throw new Error("Failed to fetch testimonials")
      }
  
      return await response.json()
    } catch (error) {
      console.error("Error fetching testimonials:", error)
      return []
    }
  }
  