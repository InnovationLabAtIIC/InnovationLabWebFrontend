"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { getFAQs, type FAQ } from "@/services/api"

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border rounded-md mb-4 overflow-hidden border-[#D7D7D7]">
      <button
        className="flex w-full items-center justify-between text-left p-4 bg-white hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-medium">{question}</span>
        <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="p-4 bg-white border-">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadFAQs() {
      try {
        const data = await getFAQs()
        setFaqs(data)
        setLoading(false)
      } catch (err) {
        setError("Failed to load FAQs. Please try again later.")
        setLoading(false)
      }
    }

    loadFAQs()
  }, [])

  // Fallback data in case API is not available
  const fallbackFaqs = [
    {
      id: "1",
      question: "How can I Join the Innovation Lab?",
      answer:
        "Students, faculty, and external partners can join the Innovation Lab by submitting an application through our website or by contacting our administrative office. We review applications on a rolling basis and select participants based on their interests, skills, and project ideas.",
      category: "general",
      created_at: new Date().toISOString(),
    },
    {
      id: "2",
      question: "What resources are available at the Innovation Lab?",
      answer:
        "Our lab provides access to cutting-edge technology, prototyping equipment, collaborative workspaces, mentorship from industry experts, funding opportunities, and networking events. We also offer workshops and training sessions to help develop technical and entrepreneurial skills.",
      category: "resources",
      created_at: new Date().toISOString(),
    },
    {
      id: "3",
      question: "Can I use the Innovation Lab for my own startup?",
      answer:
        "Yes, the Innovation Lab is designed to support entrepreneurial ventures. We offer incubation programs, mentorship, and resources to help turn your ideas into viable businesses. You'll need to apply to our startup program and meet certain criteria to qualify.",
      category: "entrepreneurship",
      created_at: new Date().toISOString(),
    },
    {
      id: "4",
      question: "Are there any costs associated with using the Innovation Lab?",
      answer:
        "For students and faculty of the Italian International College, basic access to the Innovation Lab is free. For external partners and specialized resources, there may be membership fees or usage charges. Please contact our administrative office for detailed pricing information.",
      category: "general",
      created_at: new Date().toISOString(),
    },
    {
      id: "5",
      question: "Do you offer internship opportunities?",
      answer:
        "Yes, we offer internship opportunities for students interested in innovation, technology, and entrepreneurship. Internships are available on a semester basis and provide hands-on experience working on real-world projects with our partners.",
      category: "opportunities",
      created_at: new Date().toISOString(),
    },
    {
      id: "6",
      question: "How can companies collaborate with the Innovation Lab?",
      answer:
        "Companies can collaborate with us through sponsored research projects, innovation challenges, mentorship programs, or by becoming a corporate partner. We welcome industry collaboration and can tailor partnership opportunities to meet your organization's needs.",
      category: "collaboration",
      created_at: new Date().toISOString(),
    },
    {
      id: "7",
      question: "What events does the Innovation Lab host?",
      answer:
        "We host a variety of events including hackathons, workshops, speaker series, demo days, and networking mixers. Check our Events page for upcoming opportunities to engage with our community.",
      category: "events",
      created_at: new Date().toISOString(),
    },
  ]

  // Use fallback data if API fails or during development
  const displayFaqs = faqs.length > 0 ? faqs : fallbackFaqs

  return (
    <div className="mt-20 mb-20">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        <p className="text-gray-600 mt-3">Find answers to common questions about the Innovation Lab.</p>
      </div>

      <div className="max-w-3xl mx-auto">
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border rounded-md p-4 animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-4">{error}</div>
        ) : (
          displayFaqs.map((faq) => <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />)
        )}
      </div>
    </div>
  )
}
