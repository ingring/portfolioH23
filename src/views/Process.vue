<script setup>
import { defineProps } from 'vue';

defineProps({
  project: String
})
</script>
<template>
  <main class="relative mx-auto max-w-2xl lg:max-w-7xl px-10 md:px-20 py-8">
    <div class="flex justify-end">
        <!-- <img src="/public/smileyOrange.png" class="w-7 h-7 hover:rotate3D my-auto inline pb-1.5 pr-1.5"> -->
        <router-link :to="{ name: 'home'}" class="inline text-orange">Ingrid Gladheim</router-link>
      </div>
      <GoBackBtn />
    <h1 class="pt-8" v-if="this.project">{{ this.project }}</h1>
    <About :about="projectData.process.about" />
    <Design :protoSrc="projectData.process.figmaProtoSrc" :designProcess="projectData.process.designProcess" />
    <Development :devProcess="projectData.process.devProcess" :gitRepo="projectData.process.languageProgressbarRepoName" :gitHubUrl="projectData.gitProjectUrl" :liveSiteUrl="projectData.liveWebsiteUrl"/>
    <Result :responsive="projectData.process.responsiveDesign" :result="projectData.process.result" :projectName="projectData.name" />
  </main>
  <FooterComp />
  
</template>

<script>
import FooterComp from '../components/FooterComp.vue'
import GoBackBtn from '../components/GoBackBtn.vue'
import Development from '../components/Process/Development.vue'
import Design from '../components/Process/Design.vue'
import Result from '../components/Process/Result.vue'
import About from '../components/Process/About.vue';

export default {
  components: {
    FooterComp,
    GoBackBtn,
    Development,
    Design,
    Result,
    About
  },
  data() {
      return {
      projectData: [],
      };
  },
  async created() {
    this.$sanityClient.fetch('*[_type == "project" && isFavorite == true && name == $project][0]', { project: this.project }).then((data) => {
      console.log('Created', data)
      this.projectData = data;
    });
  },
};

</script>