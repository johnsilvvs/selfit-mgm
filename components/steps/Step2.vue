<script setup>
defineProps({
    step: Number
})
</script>

<template>
    <template v-if="step === 2">
        <img class="w-full" src="/img/banner2.png" alt="Selfriends. Ganhe até 6 meses OFF!">
        <div class="flex flex-col items-center bg-white py-12">
            <UiContainer>
                <div class="max-w-[400px] w-full mx-auto border-t border-[#e0e0e0]">
                    <button
                        v-for="i, index in [
                            {
                                logo: '/img/facebook.png',
                                text: 'Entrar com Facebook'
                            },
                            {
                                logo: '/img/google.png',
                                text: 'Entrar com Google'
                            }
                        ]"
                        :key="index"
                        @click="$emit('update:step', 3)"
                        type="button"
                        class="w-full flex items-center gap-8 text-left border-b border-[#e0e0e0] py-6"
                    >
                        <img class="max-w-[24px]" :src="i.logo" :alt="i.text">
                        <span class="block flex-[2] font-medium text-base text-black">{{ i.text }}</span>
                        <img class="w-3" src="/img/arrow.png" alt="Seta">
                    </button>
                </div>
                <p class="text-black mt-10 italic uppercase text-center font-medium text-lg leading-[23px]">Quanto mais <strong class="text-black">você <span class="underline text-black">indicar</span>,</strong> <br /> mais desconto <strong class="text-black">pode <span class="underline text-black">ganhar</span>.</strong></p>
            </UiContainer>
        </div>
        <UiFooter />
    </template>
</template>