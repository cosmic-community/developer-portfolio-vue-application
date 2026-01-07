<template>
  <div class="space-y-12">
    <div
      v-for="(category, index) in categoryOrder"
      :key="category"
      v-show="skillsByCategory[category] && skillsByCategory[category].length > 0"
    >
      <h3 class="text-2xl font-semibold text-gray-900 mb-6 capitalize">
        {{ getCategoryLabel(category) }}
      </h3>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="skill in getSkills(category)"
          :key="skill.id"
          class="card p-6"
        >
          <div class="flex items-center gap-4">
            <div v-if="skill.metadata?.icon" class="flex-shrink-0">
              <img
                :src="`${skill.metadata.icon.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`"
                :alt="skill.metadata?.skill_name || skill.title"
                class="w-12 h-12 rounded-lg object-cover"
                width="48"
                height="48"
              />
            </div>
            
            <div class="flex-1">
              <h4 class="font-semibold text-gray-900">
                {{ skill.metadata?.skill_name || skill.title }}
              </h4>
              <p v-if="skill.metadata?.proficiency_level" class="text-sm text-gray-600">
                {{ skill.metadata.proficiency_level.value }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Skill } from '@/types'

const props = defineProps<{
  skillsByCategory: Record<string, Skill[]>
}>()

const categoryOrder = ['frontend', 'backend', 'database', 'tools', 'other']

const categoryLabels: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  tools: 'Tools & Platforms',
  other: 'Other'
}

function getCategoryLabel(category: string): string {
  return categoryLabels[category] || category
}

function getSkills(category: string): Skill[] {
  const skills = props.skillsByCategory[category]
  if (!skills || skills.length === 0) {
    return []
  }
  return skills
}
</script>