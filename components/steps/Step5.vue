<script setup>
defineProps({
    step: Number
})
</script>

<template>
    <template v-if="step === 5">
        <div class="flex flex-col min-h-[100vh]">
            <img class="w-full" src="/img/banner5.png" alt="Selfriends. Tire sua galera do sofá">
            <UiContainer class="flex-[2]">
                <div class="mt-[-16px] flex flex-col items-center">
                    <img class="w-12" src="/img/verify.png" alt="Verificado">
                    <h6 class="text-white text-center italic font-extrabold text-4xl my-4">VLMX2022RCS</h6>
                    <UiButton class="px-14">Compartilhe</UiButton>
                </div>
            </UiContainer>
            <UiFooter />
        </div>
    </template>
</template>