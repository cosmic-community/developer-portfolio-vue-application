<template>
  <div class="min-h-screen">
    <Navigation />
    
    <main>
      <!-- Hero Section -->
      <section id="home" class="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-light to-secondary-light">
        <div class="max-w-7xl mx-auto">
          <div class="text-center">
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Full Stack Developer
            </h1>
            <p class="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Building modern web applications with cutting-edge technologies
            </p>
            <div class="flex flex-wrap gap-4 justify-center">
              <a href="#projects" class="btn-primary bg-white text-primary hover:bg-gray-100">
                View Projects
              </a>
              <a href="#contact" class="btn-secondary bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Projects Section -->
      <section id="projects" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-7xl mx-auto">
          <h2 class="section-title text-center">Featured Projects</h2>
          
          <div v-if="loading" class="text-center py-12">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
          
          <div v-else-if="featuredProjects.length === 0" class="text-center py-12 text-gray-500">
            No featured projects available
          </div>
          
          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              v-for="project in featuredProjects"
              :key="project.id"
              :project="project"
            />
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div class="max-w-7xl mx-auto">
          <h2 class="section-title text-center">Technical Skills</h2>
          
          <div v-if="loading" class="text-center py-12">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
          
          <div v-else-if="Object.keys(skillsByCategory).length === 0" class="text-center py-12 text-gray-500">
            No skills available
          </div>
          
          <SkillsGrid v-else :skills-by-category="skillsByCategory" />
        </div>
      </section>

      <!-- Work Experience Section -->
      <section id="experience" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-7xl mx-auto">
          <h2 class="section-title text-center">Work Experience</h2>
          
          <div v-if="loading" class="text-center py-12">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
          
          <div v-else-if="workExperience.length === 0" class="text-center py-12 text-gray-500">
            No work experience available
          </div>
          
          <ExperienceTimeline v-else :experiences="workExperience" />
        </div>
      </section>

      <!-- Testimonials Section -->
      <section id="testimonials" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div class="max-w-7xl mx-auto">
          <h2 class="section-title text-center">Client Testimonials</h2>
          
          <div v-if="loading" class="text-center py-12">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
          
          <div v-else-if="testimonials.length === 0" class="text-center py-12 text-gray-500">
            No testimonials available
          </div>
          
          <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <TestimonialCard
              v-for="testimonial in testimonials"
              :key="testimonial.id"
              :testimonial="testimonial"
            />
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="section-title">Get In Touch</h2>
          <p class="text-lg text-gray-600 mb-8">
            Interested in working together? Let's connect and discuss your project.
          </p>
          <a href="mailto:hello@example.com" class="btn-primary inline-block">
            Send a Message
          </a>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import SkillsGrid from '@/components/SkillsGrid.vue'
import ExperienceTimeline from '@/components/ExperienceTimeline.vue'
import TestimonialCard from '@/components/TestimonialCard.vue'
import { getFeaturedProjects, getSkillsByCategory, getWorkExperience, getTestimonials } from '@/lib/cosmic'
import type { Project, Skill, WorkExperience, Testimonial } from '@/types'

const loading = ref(true)
const featuredProjects = ref<Project[]>([])
const skillsByCategory = ref<Record<string, Skill[]>>({})
const workExperience = ref<WorkExperience[]>([])
const testimonials = ref<Testimonial[]>([])

onMounted(async () => {
  try {
    const [projects, skills, experience, clientTestimonials] = await Promise.all([
      getFeaturedProjects(),
      getSkillsByCategory(),
      getWorkExperience(),
      getTestimonials()
    ])
    
    featuredProjects.value = projects
    skillsByCategory.value = skills
    workExperience.value = experience
    testimonials.value = clientTestimonials
  } catch (error) {
    console.error('Error loading data:', error)
  } finally {
    loading.value = false
  }
})
</script>