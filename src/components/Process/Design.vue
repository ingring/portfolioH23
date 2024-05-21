<script setup>
import { Smartphone, Laptop } from 'lucide-vue-next';
</script>
<template>
    <section class="py-4" v-if="designProcess || protoSrc">
        <h2>Design</h2>
        <section v-if="designProcess" class="py-4 max-w-prose">
            <div v-for="design in designProcess" :key="design._key" class="">
                <h3 v-if="design.title">{{ design.title }}</h3>
                <p v-if="design.description" class="py-4">{{ design.description }}</p>
                <img v-if="design.image" :src="urlFor(design.image.asset).url()" />
            </div>
        </section>
        <section v-if="protoSrc" class="py-4">
            <h3 class="pb-4">High fidelity prototype</h3>
            <iframe 
                style="border: 1px solid rgba(0, 0, 0, 0.1);" 
                width="100%" 
                height="450" 
                :src="protoSrc"
                allowfullscreen
            >
            <!-- src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FqT6jWLdm2SMI5FT0GDJcpC%2Fportfolio%3Fnode-id%3D847%253A24%26t%3D0gxe9tGMwteZ2WTT-1" -->
            </iframe>
        </section>
    </section>
</template>
<script>
import { builder } from '@/main'; 

export default {
    props: {
        protoSrc: String,
        designProcess: Object
    },
    methods: {
        urlFor(source) {
            return builder.image(source);
        },
    },
};

</script>