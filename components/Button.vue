<script setup>
defineProps({
    submit: Boolean,
    href: String
})
</script>

<template>
    <NuxtLink
        v-if="href"
        :to="href"
        class="bg-black uppercase italic font-bold text-xl rounded-full py-2.5 px-8 inline-block border-[4px] border-red shadow-[0_0_48px_rgba(0,0,0,.4)]"
    >
        <slot />
    </NuxtLink>
    <button
        v-else
        :type="submit ? 'submit' : 'button'"
        class="bg-black uppercase italic font-bold text-xl rounded-full py-2.5 px-8 inline-block border-[4px] border-red shadow-[0_0_48px_rgba(0,0,0,.4)]"
    >
        <slot />
    </button>
</template>