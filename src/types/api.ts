// Types based on OpenAPI specification

export interface Banner {
  id: string;
  url: string;
  type: 'image' | 'video';
  title?: string;
  subtitle?: string;
  caption?: string;
  current: boolean;
  version: number;
  parent_id: string | null;
  created_at: string;
  scheduled_start: string | null;
  scheduled_end: string | null;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  designation?: string;
  organization?: string;
  image_uri?: string;
  created_at: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  start_time: string;
  end_time: string;
  location: string;
  cover_image_url: string;
  parent_event_id?: string;
  series_name?: string;
  is_team_event?: string;
  max_team_members?: number;
  registration_start: string;
  registration_end: string;
  created_at: string;
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  media_url: string;
  title?: string;
  description?: string;
  category?: string;
  created_at: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
  created_at: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  created_at: string;
}

export interface ErrorResponse {
  error: string;
  message: string;
} 