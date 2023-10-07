<template>
    <div class="my-20">
      <h2 class="text-center">My projects</h2>
      <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> -->
      <div>
        <Project
          v-for="project in projects"
          :key="project._id"
          :name="project.name"
          :descriptionText="project.descriptionText"
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
      this.$sanityClient.fetch('*[_type == "project"]{name, "descriptionText": description[0].children[0].text, "imgUrlMockupPhone":mockupPhone.asset._ref, "imgUrlMockupDesktop":mockupDesktop.asset._ref, "technologies":technology[]->{name, "img":img.asset._ref, "imgTag":description[0].children[0].text}, gitProjectUrl, liveWebsiteUrl}').then((data) => {
        console.log(data)
        this.projects = data;
      });
    },
  };
  </script>
  