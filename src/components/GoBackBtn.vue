<script setup>
  import { MoveLeft } from 'lucide-vue-next';
</script>

<template>
    <button @click="goBack" class="flex gap-2 hover:opacity-80 text-white font-bold rounded">
        <MoveLeft class="text-[#F2B14B]"/> 
        Go Back
    </button>
  </template>
  
  <script>
  export default {
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
  };
  </script>
