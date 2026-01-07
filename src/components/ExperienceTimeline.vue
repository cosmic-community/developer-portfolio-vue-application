<template>
  <div class="max-w-4xl mx-auto">
    <div class="space-y-8">
      <div
        v-for="experience in experiences"
        :key="experience.id"
        class="relative pl-8 pb-8 border-l-2 border-primary"
      >
        <!-- Timeline dot -->
        <div class="absolute left-0 top-0 w-4 h-4 -ml-[9px] bg-primary rounded-full"></div>
        
        <div class="card p-6">
          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div class="flex items-start gap-4">
              <div v-if="experience.metadata?.company_logo" class="flex-shrink-0">
                <img
                  :src="`${experience.metadata.company_logo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`"
                  :alt="experience.metadata?.company || ''"
                  class="w-16 h-16 rounded-lg object-cover"
                  width="64"
                  height="64"
                />
              </div>
              
              <div>
                <h3 class="text-xl font-semibold text-gray-900">
                  {{ experience.metadata?.job_title }}
                </h3>
                <p class="text-lg text-primary font-medium">
                  {{ experience.metadata?.company }}
                </p>
                <p v-if="experience.metadata?.location" class="text-sm text-gray-600">
                  {{ experience.metadata.location }}
                </p>
              </div>
            </div>
            
            <div class="text-sm text-gray-600 flex-shrink-0">
              {{ formatDate(experience.metadata?.start_date) }} - 
              {{ experience.metadata?.current_position ? 'Present' : formatDate(experience.metadata?.end_date) }}
            </div>
          </div>
          
          <div
            v-if="experience.metadata?.description"
            v-html="parseMarkdown(experience.metadata.description)"
            class="prose-custom text-gray-700"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { WorkExperience } from '@/types'
import { parseMarkdown } from '@/lib/markdown'

defineProps<{
  experiences: WorkExperience[]
}>()

function formatDate(date: string | null | undefined): string {
  if (!date) return ''
  
  const d = new Date(date)
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}
</script>