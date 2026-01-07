<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <router-view />
    <CosmicBadge :bucket-slug="bucketSlug" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CosmicBadge from './components/CosmicBadge.vue'

const bucketSlug = ref(import.meta.env.VITE_COSMIC_BUCKET_SLUG || 'tuskmelon-production')
</script>