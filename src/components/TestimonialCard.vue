<template>
  <div class="card p-6">
    <div class="flex items-center gap-4 mb-4">
      <div v-if="testimonial.metadata?.client_photo" class="flex-shrink-0">
        <img
          :src="`${testimonial.metadata.client_photo.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`"
          :alt="testimonial.metadata?.client_name || ''"
          class="w-16 h-16 rounded-full object-cover"
          width="64"
          height="64"
        />
      </div>
      
      <div>
        <h3 class="font-semibold text-gray-900">
          {{ testimonial.metadata?.client_name }}
        </h3>
        <p class="text-sm text-gray-600">
          {{ testimonial.metadata?.client_role }}
        </p>
      </div>
    </div>
    
    <div v-if="testimonial.metadata?.rating" class="flex text-yellow-400 mb-4">
      <svg
        v-for="star in renderStars(testimonial.metadata.rating)"
        :key="star.index"
        :class="star.filled ? 'text-yellow-400' : 'text-gray-300'"
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    
    <p class="text-gray-700 mb-4">
      "{{ testimonial.metadata?.testimonial }}"
    </p>
    
    <div v-if="testimonial.metadata?.project_reference" class="pt-4 border-t border-gray-200">
      <p class="text-sm text-gray-600">
        Project: 
        <span class="font-medium text-primary">
          {{ testimonial.metadata.project_reference.metadata?.project_name || testimonial.metadata.project_reference.title }}
        </span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Testimonial } from '@/types'

defineProps<{
  testimonial: Testimonial
}>()

function renderStars(rating: { key: string; value: string }): Array<{ filled: boolean; index: number }> {
  const ratingNumber = parseInt(rating.key, 10)
  return Array.from({ length: 5 }, (_, index) => ({
    filled: index < ratingNumber,
    index
  }))
}
</script>