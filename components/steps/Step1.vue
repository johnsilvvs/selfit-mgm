<script setup>
defineProps({
    step: Number
})
</script>

<template>
    <template v-if="step === 1">
        <img class="w-full" src="/img/banner1.png" alt="Chame seus amigos e ganhe benefícios. Tire sua galera do sofá.">
        <UiContainer>
            <div class="flex flex-col items-center">
                <p class="text-center uppercase font-semibold text-xl italic leading-[24px] mb-6">Traga sua galera para a Selfit e ganhe <strong>até 6 meses de desconto</strong> na sua mensalidade e na deles.</p>
                <UiButton @click="$emit('update:step', 2)">Partiu desconto</UiButton>
            </div>
        </UiContainer>
        <UiFooter />
    </template>
</template>