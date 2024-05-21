<script setup>
  import { MapPin, BriefcaseBusiness, GraduationCap} from 'lucide-vue-next';
</script>

<template>
    <div class="flex md:justify-center px-10 pt-20 md:p-0 bg-gradient-to-b md:bg-gradient-to-r from-yellow to-red text-black">
    <div class="flex flex-col md:flex-row justify-center gap-5 lg:gap-10 mt-10 max-w-2xl lg:max-w-7xl">
        <section class=" my-auto max-w-full lg:w-1/2">
            <h1>Ingrid Gladheim</h1>
            <ul>
                <!-- <li class="flex gap-2 my-4"><BriefcaseBusiness />Front-end developer at NAV IT</li> -->
                <li class="flex gap-2 my-4"><GraduationCap/>Bachelor in Web Development at NTNU</li>
                <li class="flex gap-2 my-4"><MapPin />Located in Oslo, Norway</li>
            </ul>
            <!-- <p class="hidden md:block pt-5 max-w-prose">Hi! I'm a <span class="font-bold ">dedicated</span> norwegian NTNU student in <span class="font-bold ">web development</span> who finds <span class="font-bold">joy</span> and a sense of <span class="font-bold">accomplishment</span> in every coding adventures.</p>         -->
        </section>
        <div class="lg:w-1/2">
            <img src="../assets/me.png" class="max-w-[60vw] md:max-w-[25vw] mx-auto" />
        </div>
    </div>
    <!-- <p class="md:hidden pt-5 max-w-prose">I'm a <span class="font-bold ">dedicated</span> norwegian NTNU student in <span class="font-bold ">web development</span> who finds <span class="font-bold">joy</span> and a sense of <span class="font-bold">accomplishment</span> in every coding adventures.</p> -->
    </div>
</template>