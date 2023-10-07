<template>
    <div class="flex flex-col md:flex-row justify-center md:gap-4 m-5 mt-10 py-5">
      <div>
        <div class="relative w-fit m-5 md:m-0">
          <img :src="urlFor(imgUrlMockupPhone).width(200).url()" class="max-w-[5rem] md:max-w-[10rem] hover:shadowSvg" @mouseover="setZIndex(true)" @mouseout="setZIndex(false)" />
          <img :src="urlFor(imgUrlMockupDesktop).width(200).url()" class="max-w-[10rem] min-w-[10rem] md:max-w-[20rem] md:min-w-[20rem] absolute bottom-0 left-1/2 hover:shadowSvg" :style="{ 'z-index': zIndex }" />
        </div>
        <div class="my-5">
          <!-- <p class="font-bold">Check out</p> -->
          <div class="flex gap-5 font-bold">
            <p v-if="liveSite" class="hover:opacity-50"><a :href=liveSite target="_blank">Live site</a> </p>
            <p v-else data-te-toggle="tooltip" title="Not available yet" class="hover:opacity-50">Live site</p>
            <p class="text-yellow">|</p>
            <p v-if="gitHub" class="hover:opacity-50"><a :href="gitHub" target="_blank">GitHub</a></p>
            <p v-else data-te-toggle="tooltip" title="Not available yet" class="hover:opacity-50">GitHub</p>
          </div>
        </div>
      </div>
      <div class="max-w-prose m-5 lg:w-1/2 md:ml-[16rem]">
        <h3 class="font-bold">{{ name }}</h3>
        <p class="">{{ description }}</p>
        <div class="pt-5">
          <p class="font-bold">Made with</p>
          <div class="flex flex-wrap gap-2">
            <div v-for="technology in technologies" class="p-3 text-center">
              <i :class=technology.imgTag class="md:text-3xl text-2xl"> </i>
              <p>{{ technology.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
    import { builder } from '@/main'; // Assuming that main.js is located at src/main.js

    export default {
    props: {
        name: String,
        description: String,
        imgUrlMockupPhone: String,
        imgUrlMockupDesktop: String,
        imgTitle: String,
        technologies: Array,
        gitHub: String,
        liveSite: String
    },
    data() {
    return {
      zIndex: 1
    };
  },
    methods: {
        urlFor(source) {
        return builder.image(source);
        },
        setZIndex(isHovered) {
          this.zIndex = isHovered ? -1 : 1;
        }
    }
    };
</script>