<template>
  <div class="card overflow-hidden">
    <div v-if="project.metadata?.project_image" class="relative h-48 overflow-hidden">
      <img
        :src="`${project.metadata.project_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`"
        :alt="project.title"
        class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        width="300"
        height="200"
      />
    </div>
    
    <div class="p-6">
      <h3 class="text-xl font-semibold text-gray-900 mb-2">
        {{ project.metadata?.project_name || project.title }}
      </h3>
      
      <div v-if="project.metadata?.technologies" class="mb-4">
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in technologies"
            :key="tech"
            class="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
          >
            {{ tech }}
          </span>
        </div>
      </div>
      
      <div class="flex gap-3">
        <a
          v-if="project.metadata?.live_url"
          :href="project.metadata.live_url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-primary hover:text-primary-dark font-medium"
        >
          View Live →
        </a>
        <a
          v-if="project.metadata?.repository_url"
          :href="project.metadata.repository_url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-gray-600 hover:text-gray-900 font-medium"
        >
          Source Code →
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from '@/types'

const props = defineProps<{
  project: Project
}>()

const technologies = computed(() => {
  if (!props.project.metadata?.technologies) return []
  return props.project.metadata.technologies.split(',').map(t => t.trim())
})
</script>