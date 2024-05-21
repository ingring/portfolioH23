<script setup>
  import { Undo, Frame } from 'lucide-vue-next';

/*   import { onMounted } from "vue";
    import { Ripple, Tooltip, initTWE } from "tw-elements";

    onMounted(() => {
        initTWE({ Tooltip });
    }); */
</script>

<template>
    <div class="flex flex-col lg:flex-row lg:justify-between lg:gap-10 my-10 pb-10 w-full ">
      <div class="lg:w-1/2 lg:relative my-auto">
        <div v-if="index === 0 || (index % 2 === 0)" class="hidden lg:block lg:-top-10 lg:-left-5 lg:absolute lg:-rotate-12">
          <p class="inline-block pr-2 text-[#F2B14B]">Hover</p><Undo class="transform scale-x-[-1] rotate-45 inline-block" color="#F2B14B"/>
        </div>

        <div class="w-fit md:m-0 relative">
          <img :src="urlFor(imgUrlMockupPhone).width(1080).url()" class="max-w-[5rem] md:max-w-[10rem] hover:shadowSvg" @mouseover="setZIndex(true)" @mouseout="setZIndex(false)" quality={100} />
          <img :src="urlFor(imgUrlMockupDesktop).width(1920).height(1080).url()" class="max-w-[10rem] min-w-[10rem] md:max-w-[20rem] md:min-w-[20rem] absolute bottom-0 left-1/2 hover:shadowSvg" :style="{ 'z-index': zIndex }" quality={100} />
        </div>
      
        <div class="my-5 lg:relative w-fit">
          <!-- <p class="font-bold">Check out</p> -->
          <div class="flex gap-5">
            <a v-if="liveSite" 
              data-twe-toggle="tooltip" 
              data-twe-ripple-init 
              data-twe-placement="bottom" 
              data-twe-ripple-color="dark" 
              title="Go to the project's live site" 
              class="hover:opacity-50" 
              :href="liveSite" 
              target="_blank">
              Live site
            </a> 
            <!-- <a v-else 
              href="#" 
              data-twe-toggle="tooltip" 
              data-twe-ripple-init 
              data-twe-placement="bottom" 
              data-twe-ripple-color="dark" 
              title="Not available yet" 
              class="hover:opacity-50">
              Live site
            </a> -->
            <p v-if="gitHub && liveSite" class="text-[#F2B14B]">|</p>
            <a v-if="gitHub" 
              data-twe-toggle="tooltip" 
              data-twe-ripple-init 
              data-twe-placement="bottom" 
              data-twe-ripple-color="dark" 
              title="Go to the GitHub project" 
              class="hover:opacity-50" 
              :href="gitHub" 
              target="_blank">
              GitHub
            </a>
<!--             <a v-else 
              href="#" 
              data-twe-toggle="tooltip" 
              data-twe-ripple-init 
              data-twe-placement="bottom" 
              data-twe-ripple-color="dark"  
              title="Not available yet" 
              class="hover:opacity-50">
              GitHub
            </a> -->
            <p v-if="gitHub || liveSite" class="text-[#F2B14B]">|</p>
            <!-- <a v-if="process" 
              data-twe-toggle="tooltip" 
              data-twe-ripple-init 
              data-twe-placement="bottom"  
              title="View my process in this project" 
              class="hover:opacity-50" 
              href="/process" 
              target="_blank">
              Process
            </a>
            <a v-else 
              href="#" 
              data-twe-toggle="tooltip" 
              data-twe-ripple-init 
              data-twe-placement="bottom" 
              data-twe-ripple-color="dark"  
              title="Not available yet" 
              class="hover:opacity-50">
              Process
            </a> -->
            <router-link :to="{ name: 'process', params: { project: name }}">Process</router-link>
          </div>
          <div v-if="index % 2 === 1" class="hidden lg:block lg:-bottom-10 lg:-right-5 lg:absolute lg:-rotate-12">
            <p class="inline-block pr-2 text-[#F2B14B]">Check out</p><Undo class="transform -rotate-[245deg] inline-block" color="#F2B14B"/>
          </div>
        </div>
      </div>
      <div class="lg:w-1/2 my-auto">
        <div class="flex items-end justify-between gap-5 flex-wrap max-w-prose">
          <h3 class="font-bold">{{ name }}</h3>
          <!-- <p class="text-base">Høst 2023</p> -->
        </div>
        <p class="">{{ description }}</p>
        <div class="pt-5">
          <p class="font-bold">Made with</p>
          <div class="flex flex-wrap gap-2">
            <div v-for="technology in technologies" class="p-3 text-center">
              <i v-if="technology.imgTag" :class=technology.imgTag class="md:text-3xl text-2xl"> </i>
              <i v-else class="md:text-3xl text-2xl text-center"><Frame size="30" class="my-1 mx-auto"/></i>
              <p>{{ technology.name }}</p>
            </div>
          </div>
        </div>
      </div> 
  </div>
  {{ console.log("techtech", technologies) }}
</template>
  
<script>
    import { builder } from '@/main'; 

    export default {
    props: {
        name: String,
        description: String,
        imgUrlMockupPhone: String,
        imgUrlMockupDesktop: String,
        imgTitle: String,
        technologies: Array,
        gitHub: String,
        liveSite: String,
        index: Number
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