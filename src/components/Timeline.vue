<script setup>
      import { MapPin, BriefcaseBusiness, GraduationCap} from 'lucide-vue-next';
</script>

<template>
    <div class="mx-auto w-fit">
        <h2>My developer story</h2>
        <p class="py-4 max-w-prose">
            Hi! I'm a <span class="font-bold ">dedicated</span> norwegian NTNU student in <span class="font-bold ">web development</span> who finds <span class="font-bold">joy</span> and a sense of <span class="font-bold">accomplishment</span> in every coding adventures. 
            I started my interest in IT and programming when studing at the University in Bergen, however, it wasn't before I started studing at Norwegian University of Science and Technology my passion for web development truly blossomed.
        </p>
    </div>
    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical pt-8">
        <li>
            <div class="timeline-middle m-2">
                <GraduationCap class="text-orange" size="20px"/>
            </div>
            <div class="timeline-start md:text-end mb-10 pt-2">
                <time class="italic mx-auto">2021 - 2024</time>
                <div class="text-lg font-black">Bachelor in Web Development at NTNU</div>
            </div>
            <hr class="bg-orange text-orange" />
        </li>
        <li>
            <hr class="bg-orange text-orange" />
            <div class="timeline-middle m-2">
                <BriefcaseBusiness class="text-orange" size="20px"/>
            </div>
            <div class="timeline-end mb-10 pt-2">
                <time class="italic">2023</time>
                <div class="text-lg font-black">Summer Job as IT Developer at Statnett SF</div>
            </div>
            <hr class="bg-orange text-orange" />
        </li>
        <li>
            <hr class="bg-orange text-orange" />
            <div class="timeline-middle m-2">
                <BriefcaseBusiness class="text-orange" size="20px"/>
            </div>
            <div class="timeline-start md:text-end mb-10 pt-2">
                <time class="italic">2022</time>
                <div class="text-lg font-black">Teaching Assistant in Web Coding at NTNU</div>
            </div>
            <hr class="bg-orange text-orange" />
        </li>
        <li>
            <hr class="bg-orange text-orange" />
            <div class="timeline-middle m-2">
                <GraduationCap class="text-orange" size="20px"/>
            </div>
            <div class="timeline-end mb-10 pt-2">
                <time class="italic">2020 - 2021</time>
                <div class="text-lg font-black">One-Year Program in ICT at UiB</div>
            </div>
        </li>
    </ul>
</template>