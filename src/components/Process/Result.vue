<script setup>
import { Smartphone, Laptop, Signal, Wifi, BatteryLow } from 'lucide-vue-next';
</script>
<template>
    <section v-if="responsive || result" class="py-4">
        <h2>Result</h2>
        <section v-if="result" class="py-4 max-w-prose">
            <div v-for="res in result" :key="res._key">
                <h3 v-if="res.title" class="pb-4">{{ res.title }}</h3>
                <p v-if="res.description" class="pb-4">{{ res.description }}</p>
                <img v-if="res.image" :src="urlFor(res.image.asset).url()" class="pb-4" />
            </div>
        </section>
        <section v-if="responsive" class="py-4">
            <h3>Responsive design</h3>
            <p>Take a look at the website on mobile and desktop.</p>
            <div class="mx-auto w-fit lg:relative">
                <button @click="toggleVisibility" class="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
                    <Smartphone class="mx-auto" :class="isVisible ? 'text-orange' : 'text-white'"/>
                    <p>Mobile view</p>
                </button>
                <button @click="toggleVisibility" class="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
                    <Laptop class="mx-auto" :class="!isVisible ? 'text-orange' : 'text-white'"/>
                    <p>Desktop view</p>
                </button>
            </div>
    <!--         <div v-if="isVisible" class="max-h-[500px] overflow-y-auto w-64 mx-auto">
                <img :src="urlFor(responsive.mobile).url()" alt="Mobile View" />
            </div>
            <div v-if="!isVisible" class="max-h-[500px] overflow-y-auto w-full mx-auto" >
                <img :src="urlFor(responsive.desktop).url()" alt="Mobile View" />
            </div> -->
            <div v-for="design in responsive" class="flex">
                <div v-if="design._type == 'desktop' && !isVisible" class="mockup-browser border border-base-300 lg:mx-40">
                    <div class="mockup-browser-toolbar">
                        <div class="input border border-base-300">https://{{ projectName.toLocaleLowerCase() }}.no</div>
                    </div>
                    <div class="flex justify-center border-t border-base-300">
                        <div :key="design._key" class="max-h-[500px] overflow-y-auto w-full)">
                            <img :src="urlFor(design.asset).url()" :alt="`${design._type} View`" />
                        </div>
                    </div>
                </div>
                <div v-if="design._type == 'mobile' && isVisible" class="mockup-phone justify-center">
                    <div class="camera before:bg-white after:bg-white"></div> 
                    <div class="display">
                        <div class="artboard artboard-demo phone-1">
                            <div :key="design._key" class="max-h-full overflow-y-auto w-ful relative">
                                <div class="h-7 flex justify-between sticky top-0 left-0 w-full bg-black">
                                    <div class="mx-8 mt-1.5 text-[12px]">12:31</div>
                                    <div class="mx-5 flex gap-2 mt-1.5"><Signal size="14"/><Wifi size="14"/><BatteryLow size="14"/></div>
                                </div>
                                <img :src="urlFor(design.asset).url()" :alt="`${design._type} View`" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>

<!--     <div v-for="design in responsive" :key="design._key" class="max-h-[500px] overflow-y-auto" :class="(design._type === 'mobile' ? 'w-64': 'w-full')">
        <img :src="urlFor(design.asset).url()" :alt="`${design._type} View`" :class="(design._type === 'mobile' && isVisible) || (design._type === 'desktop' && !isVisible) ? '' : 'hidden'" />
    </div> -->
</template>
<script>
import { builder } from '@/main'; 

export default {
    props: {
        responsive: Object,
        result: Object,
        projectName: String
    },
    data() {
        return {
        isVisible: true,
        };
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        },
        urlFor(source) {
            return builder.image(source);
        },
    },
};

</script>