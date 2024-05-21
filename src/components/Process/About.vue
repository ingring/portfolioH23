<template>
    <div v-if="about" class="py-4">
        <section v-for="a in about" class="max-w-prose">
            <h3 v-if="a.title" class="py-2">{{ a.title }}</h3>
            <p v-if="a.description" class="py-2">{{ a.description}}</p>
        </section>
    </div>
</template>
<script>
export default {
    props: {
        about: Object
    },
}
</script>