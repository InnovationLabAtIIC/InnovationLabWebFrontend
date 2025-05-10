// API service for fetching data from the backend

// FAQ Types
export type FAQ = {
    id: string
    question: string
    answer: string
    category: string
    created_at: string
  }
  
  export async function getFAQs(): Promise<FAQ[]> {
    try {
      const response = await fetch("/api/v1/faqs")
  
      if (!response.ok) {
        throw new Error("Failed to fetch FAQs")
      }
  
      return await response.json()
    } catch (error) {
      console.error("Error fetching FAQs:", error)
      return []
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
  
  // Testimonial Types
  export type Testimonial = {
    id: string
    name: string
    text: string
    designation: string
    organization: string
    image_uri: string
    created_at: string
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
  