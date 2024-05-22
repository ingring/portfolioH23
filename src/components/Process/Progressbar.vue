<script setup>
  import { ExternalLink } from 'lucide-vue-next';
</script>
<template>
    <h3 v-if="languageData || gitHubUrl" class="py-4">Program languages</h3>
    <div class="w-full rounded-lg overflow-hidden">
      <div class="flex h-4">
        <div
          v-for="(percentage, language, index) in languagePercentages"
          :key="language"
          :class="`${bgColors[index % bgColors.length]} flex items-center justify-center`"
          :style="{ width: `${percentage}%` }"
        >
        </div>
      </div>
    </div>
    <ul class="flex flex-wrap gap-x-4 justify-between w-full">
    <!-- <ul > -->
    <li
        v-for="(percentage, language, index) in languagePercentages"
        :key="language"
    >
        <div class="text-white my-2 flex">
            <div :class="`mr-2 ${textColors[index % textColors.length]} text-4xl`">&#8226;</div>
            <div class="my-auto"><span class="font-bold">{{ language }}</span> <span>{{ percentage.toFixed(0) }}%</span></div>
        </div>
        {{console.log(textColors[index % textColors.length])}}
      </li>
    </ul>

    <p class="flex justify-end my-auto">Numbers fetched from <a :href="gitHubUrl" class="ml-2 flex gap-2 underline">GitHub <ExternalLink class="inline my-auto" size="18px" /></a></p>
  </template>
  
  <script>
  export default {
    name: 'ProgressBar',
    props: {
      languageData: {
        type: Object,
        required: true,
      },
      gitHubUrl: String
    },
    computed: {
      totalBytes() {
        return Object.values(this.languageData).reduce((a, b) => a + b, 0);
      },
      languagePercentages() {
        const percentages = {};
        for (const [language, bytes] of Object.entries(this.languageData)) {
          percentages[language] = (bytes / this.totalBytes) * 100;
        }
        return percentages;
      },
      bgColors() {
        return ["bg-orange", "bg-progressGreen", "bg-progressRed", "bg-progressBlue", "bg-progressPurple"];
      },
      textColors() {
        return ["text-orange", "text-progressGreen", "text-progressRed", "text-progressBlue", "text-progressPurple"];
      },
    },
  };
  </script>