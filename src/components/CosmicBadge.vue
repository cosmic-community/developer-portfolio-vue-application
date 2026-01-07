<template>
  <a
    v-if="isVisible"
    :href="`https://www.cosmicjs.com?utm_source=bucket_${bucketSlug}&utm_medium=referral&utm_campaign=app_badge&utm_content=built_with_cosmic`"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-5 right-5 flex items-center gap-2 text-gray-800 text-sm font-medium no-underline transition-colors duration-200 z-50"
    :style="badgeStyles"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- Close button -->
    <button
      @click.prevent.stop="handleDismiss"
      class="absolute -top-2 -right-2 w-6 h-6 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-200 z-10"
      aria-label="Dismiss badge"
    >
      ×
    </button>
    
    <img 
      src="https://cdn.cosmicjs.com/b67de7d0-c810-11ed-b01d-23d7b265c299-logo508x500.svg" 
      alt="Cosmic Logo" 
      class="w-5 h-5"
    />
    Built with Cosmic
  </a>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import type { CSSProperties } from 'vue'

const props = defineProps<{
  bucketSlug: string
}>()

const isVisible = ref(false)
const isHovered = ref(false)

const badgeStyles = computed<CSSProperties>(() => ({
  position: 'fixed' as const,
  backgroundColor: isHovered.value ? '#f9fafb' : 'white',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  padding: '12px 16px',
  width: '180px'
}))

function handleMouseEnter() {
  isHovered.value = true
}

function handleMouseLeave() {
  isHovered.value = false
}

function handleDismiss() {
  isVisible.value = false
  localStorage.setItem('cosmic-badge-dismissed', 'true')
}

onMounted(() => {
  const isDismissed = localStorage.getItem('cosmic-badge-dismissed')
  if (!isDismissed) {
    setTimeout(() => {
      isVisible.value = true
    }, 1000)
  }
})
</script>