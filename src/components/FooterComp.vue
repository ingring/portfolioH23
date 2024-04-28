<script setup>
    import { Github, Linkedin, Mail } from 'lucide-vue-next';

/*     import { onMounted } from "vue";
    import { Ripple, Tooltip, initTWE } from "tw-elements";

    onMounted(() => {
        initTWE({ Ripple, Tooltip });
    }); */

</script>

<template>
    <footer class="max-w-[280px] md:max-w-[30vw] my-[20px] mx-auto border-t-2 border-[#F2B14B] py-[20px]">
        <h3>Contact me</h3>
        <div class=" py-[20px] flex justify-around">
        
            <a href="https://github.com/ingring" target="blank" class="text-white hover:opacity-50" data-twe-toggle="tooltip" data-twe-ripple-init data-twe-placement="bottom" data-twe-ripple-color="dark"  title="Explore my GitHub profile">
            <Github class="mx-auto"/>           
            GitHub
            </a>

            <a href="https://www.linkedin.com/in/ingrid-nes-gladheim-7b2863229/" target="blank" class="text-white hover:opacity-50" data-twe-toggle="tooltip" data-twe-ripple-init data-twe-placement="bottom" data-twe-ripple-color="dark"  title="Visit my LinkedIn profile">
                <Linkedin class="mx-auto"/>
                LinkedIn
            </a>

            <a href="mailto:ingridgladheim@hotmail.com" class="text-white hover:opacity-50" data-twe-toggle="tooltip" data-twe-ripple-init data-twe-placement="bottom" data-twe-ripple-color="dark"  title="Send me an email">
                <Mail class="mx-auto"/>
                Mail
            </a>
        </div>
        <!-- <div class="mx-auto py-5">
            <p class="text-center pb-[20px] inline">Don't hesitate to take contact!</p>
            <img src="/smileyYellow.png" class="w-5 h-5 ml-2 inline" alt="">
        </div> -->
    </footer>
</template>
