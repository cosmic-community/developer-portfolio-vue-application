// Base Cosmic object interface
export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
}

// Project type
export interface Project extends CosmicObject {
  type: 'projects'
  metadata: {
    project_name?: string
    description?: string
    technologies?: string
    project_image?: {
      url: string
      imgix_url: string
    }
    gallery?: Array<{
      url: string
      imgix_url: string
    }>
    live_url?: string
    repository_url?: string
    featured?: boolean
  }
}

// Work Experience type
export interface WorkExperience extends CosmicObject {
  type: 'work-experience'
  metadata: {
    job_title?: string
    company?: string
    company_logo?: {
      url: string
      imgix_url: string
    }
    start_date: string
    end_date?: string | null
    current_position?: boolean
    description?: string
    location?: string
  }
}

// Skill type with select-dropdown types
export type SkillCategory = 'frontend' | 'backend' | 'database' | 'tools' | 'other'
export type ProficiencyLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert'

export interface Skill extends CosmicObject {
  type: 'skills'
  metadata: {
    skill_name?: string
    category?: {
      key: SkillCategory
      value: string
    }
    proficiency_level?: {
      key: ProficiencyLevel
      value: string
    }
    icon?: {
      url: string
      imgix_url: string
    }
  }
}

// Testimonial type
export interface Testimonial extends CosmicObject {
  type: 'testimonials'
  metadata: {
    client_name?: string
    client_role?: string
    client_photo?: {
      url: string
      imgix_url: string
    }
    testimonial?: string
    rating?: {
      key: string
      value: string
    }
    project_reference?: Project
  }
}

// API response types
export interface CosmicResponse<T> {
  objects: T[]
  total: number
}

// Type guards
export function isProject(obj: CosmicObject): obj is Project {
  return obj.type === 'projects'
}

export function isWorkExperience(obj: CosmicObject): obj is WorkExperience {
  return obj.type === 'work-experience'
}

export function isSkill(obj: CosmicObject): obj is Skill {
  return obj.type === 'skills'
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials'
}