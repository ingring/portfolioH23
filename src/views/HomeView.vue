<script setup>
import HeroSection from '../components/HeroSection.vue'
import Projects from '../components/projects.vue'
import FooterComp from '../components/FooterComp.vue'
import Smiley from '../components/Smiley.vue'
</script>

<template>
  <HeroSection />
  <Smiley />
  <main class="flex justify-center flex-col">
    <Projects />
  </main>
  <FooterComp />
</template>

<script>
  export default {
    components: {
      HeroSection,
      Projects,
      FooterComp,
      Smiley
    },
  }
</script>