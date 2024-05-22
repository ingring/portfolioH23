<script setup>
import HeroSection from '../components/HeroSection.vue'
import Projects from '../components/Projects.vue'
import Smiley from '../components/Smiley.vue'
import AboutMe from '../components/AboutMe.vue'
import Nav from '../components/Nav.vue'
import Timeline from '../components/Timeline.vue'

import { RouterLink, RouterView } from 'vue-router'

import { onMounted } from "vue";
  import { Tooltip, initTWE } from "tw-elements";

  onMounted(async () => {
  const { Tooltip, initTWE } = await import("tw-elements");
  initTWE({ Tooltip });
});
</script>

<template>
  <!-- <HeroSection /> -->
  <!-- <Smiley /> -->
  <!-- <Nav></Nav> -->
  <AboutMe />
  <main class="relative mx-auto max-w-2xl lg:max-w-7xl px-10 md:px-20 py-5">
    <Projects />
    <Timeline />

  </main>

</template>

<script>
  export default {
    components: {
      HeroSection,
      Projects,
      Smiley,
      AboutMe,
      Nav,
      Timeline
    },
  }

</script>