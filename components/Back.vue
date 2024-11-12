<script setup>
defineProps({
    href: String
})
</script>

<template>
    <NuxtLink
        v-if="href"
        :to="href"
        class="absolute block top-6 left-6 z-50"
    >
        <svg class="w-10 h-10" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="white"/>
            <path d="M34.8888 40.0001L50.4446 55.5556L46.0002 60L26 40.0001L46.0002 20L50.4446 24.4444L34.8888 40.0001Z" fill="black"/>
        </svg>
    </NuxtLink>
    <button
        v-else
        type="button"
        class="absolute block top-6 left-6 z-50"
    >
        <svg class="w-10 h-10" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="white"/>
            <path d="M34.8888 40.0001L50.4446 55.5556L46.0002 60L26 40.0001L46.0002 20L50.4446 24.4444L34.8888 40.0001Z" fill="black"/>
        </svg>
    </button>
</template>