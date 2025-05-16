import axios from 'axios';

const API_BASE_URL = '/api/v1';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API endpoints based on OpenAPI spec
export const apiService = {
  // Banner/Hero
  getHeroBanner: () => api.get('/hero'),

  // Testimonials
  getTestimonials: () => api.get('/testimonials'),
  
  // Events
  getEvents: (params?: { 
    type?: 'upcoming' | 'ongoing' | 'past',
    parent_event_id?: string,
    series_name?: string,
    page?: number,
    limit?: number,
    sort_by?: string,
    sort_order?: 'asc' | 'desc'
  }) => api.get('/events', { params }),
  
  // Gallery
  getGalleryItems: (params?: {
    type?: 'image' | 'video',
    category?: string,
    page?: number,
    limit?: number
  }) => api.get('/gallery', { params }),
  
  // FAQ
  getFaqs: (params?: {
    category?: string,
    page?: number,
    limit?: number,
    sort_by?: 'created_at' | 'question',
    sort_order?: 'asc' | 'desc'
  }) => api.get('/faqs', { params }),
  
  // Contact
  submitContactForm: (data: {
    name: string,
    email: string,
    phone?: string,
    subject: string,
    message: string
  }) => api.post('/contact', data),
};

export default api; 