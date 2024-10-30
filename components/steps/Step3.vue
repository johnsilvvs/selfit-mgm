<script setup>
defineProps({
    step: Number
})
</script>

<template>
    <template v-if="step === 3">
        <img class="w-full" src="/img/banner3.png" alt="Tire sua galera do sofá. Selfriends">
        <UiContainer>
            <div class="flex flex-col items-center">
                <h6 class="uppercase text-center italic font-semibold leading-[110%] text-2xl"><span class="text-xl">Chame seus amigos</span> <br /> <strong>e ganhe benefícios.</strong></h6>
                <p class="uppercase text-center italic font-medium text-sm leading-[19px] mt-3 mb-6">Indique amigos para a Selfit e ganhem até até <strong class="underline">6 mensalidades gratuitas.</strong></p>
                <UiButton @click="$emit('update:step', 4)">Participe agora</UiButton>
                <ul class="flex flex-col gap-3 mt-8">
                    <li
                        v-for="i, index in [
                            'Faça seu cadastro e desbloqueie 12 cupons de 50% de desconto na primeira mensalidade de novas matrículas;',
                            'Compartilhe cada cupom com um amigo diferente;',
                            'Para cada amigo que se matricular, você recebe 50% de desconto nas suas próprias mensalidades;',
                            'Tire 12 amigos do sofá e você ganha 6 mensalidades gratuitas!'
                        ]"
                        class="font-medium text-sm uppercase flex items-start gap-2 italic"
                    >
                        <strong class="text-black">{{ index + 1 }}.</strong>
                        {{ i }}
                    </li>
                </ul>
            </div>
        </UiContainer>
        <UiFooter />
    </template>
</template>