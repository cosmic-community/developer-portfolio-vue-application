<template>
  <footer class="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Portfolio</h3>
          <p class="text-gray-400">
            Full Stack Developer specializing in modern web applications.
          </p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="#projects" class="text-gray-400 hover:text-white transition-colors">Projects</a></li>
            <li><a href="#skills" class="text-gray-400 hover:text-white transition-colors">Skills</a></li>
            <li><a href="#experience" class="text-gray-400 hover:text-white transition-colors">Experience</a></li>
            <li><a href="#contact" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4">Connect</h3>
          <ul class="space-y-2">
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors">GitHub</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="mailto:hello@example.com" class="text-gray-400 hover:text-white transition-colors">Email</a></li>
          </ul>
        </div>
      </div>
      
      <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {{ currentYear }} Portfolio. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>