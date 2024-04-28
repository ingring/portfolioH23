<script setup>
import HeroSection from '../components/HeroSection.vue'
import Projects from '../components/Projects.vue'
import FooterComp from '../components/FooterComp.vue'
import Smiley from '../components/Smiley.vue'
import AboutMe from '../components/AboutMe.vue'
import Nav from '../components/Nav.vue'

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
  <main class="relative mx-auto max-w-2xl lg:max-w-7xl p-10 p-20">
    <AboutMe />
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
      Smiley,
      AboutMe,
      Nav
    },
  }

</script>