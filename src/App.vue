<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from "vue";
import { Tooltip, Ripple, initTWE } from "tw-elements";
import FooterComp from './components/FooterComp.vue';
</script>

<template>
  <div class="">
  <!-- <header>

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
  <FooterComp />

  </div>
</template>

<style scoped>
</style>

<script>
export default {
  mounted() {
    // Initialize tw-elements
    onMounted(() => {
      initTWE({ Tooltip, Ripple });
    });
  }
}
</script>
