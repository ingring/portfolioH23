<script setup>
  import { Undo } from 'lucide-vue-next';
</script>

<template>
    <div class="my-20 w-full">
      <h2 class="lg:pb-10">My favorite projects right now</h2>
      <div>
        <Project
          v-for="(project, index) in projects"
          :key="project.name"
          :index="index"
          :name="project.name"
          :description="project.description"
          :imgUrlMockupPhone="project.imgUrlMockupPhone"
          :imgUrlMockupDesktop="project.imgUrlMockupDesktop"
          :technologies="project.technologies"
          :gitHub="project.gitProjectUrl"
          :liveSite="project.liveWebsiteUrl"
        />
      </div>
    </div>
  </template>
  
  <script>
  import Project from './Project.vue'
  
  export default {
    components: {
      Project,
    },
    data() {
      return {
        projects: [],
      };
    },
    mounted() {
      this.$sanityClient.fetch('*[_type == "project" && isFavorite == true] | order(_updatedAt desc) {name, description, "imgUrlMockupPhone":mockupPhone.asset._ref, "imgUrlMockupDesktop":mockupDesktop.asset._ref, "technologies":technology[]->{name, "img":img.asset._ref, "imgTag":description[0].children[0].text}, gitProjectUrl, liveWebsiteUrl}').then((data) => {
        console.log(data)
        this.projects = data;
        console.log("hei", this.projects[1])
      });
    },
  };
  </script>
  