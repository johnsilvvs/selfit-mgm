<script setup>
defineProps({
    step: Number
})
</script>

<template>
    <template v-if="step === 4">
        <img class="w-full" src="/img/banner4.png" alt="Selfriends">
        <div class="bg-white py-10">
            <UiContainer>
                <div class="flex flex-col items-center">
                    <div class="flex items-center justify-between w-full">
                        <div class="flex items-center gap-3">
                            <img class="max-w-[40px] min-w-[40px] h-10 object-cover rounded-full" src="/img/user.png" alt="Cliente Selfit">
                            <p class="text-[#808080] text-base leading-[100%] font-bold">
                                Cliente Selfit
                                <small class="text-[11px] mt-1 leading-[100%] font-medium block text-[#808080]">cliente@gmail.com</small>
                            </p>
                        </div>
                        <img class="h-7" src="/img/cashback.png" alt="Cashback 50% de desconto">
                    </div>
                    <h3 class="mt-6 border-b border-[#e0e0e0] pb-6 mb-6 text-lg leading-[120%] font-medium text-center text-[#5F5F5F]">Esses são os cupons ativos. Compartilhe e ganhe mais descontos.</h3>
                    <table class="w-full border-spacing-0 mb-6">
                        <thead>
                            <tr>
                                <td
                                    v-for="i, index in [
                                        'Cupom',
                                        'Desconto',
                                        'Indicado',
                                        'Status'
                                    ]"
                                    :key="index"
                                    :class="{ 'text-center': index % 2 }"
                                    class="underline text-[#ACACAC] font-normal text-sm uppercase"
                                >
                                    {{ i }}
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="i, index in [
                                    {
                                        voucher: '001',
                                        discount: '50%',
                                        name: 'Fernanda',
                                        status: '50%'
                                    },
                                    {
                                        voucher: '002',
                                        discount: '50%',
                                        name: 'Paulo',
                                        status: '50%'
                                    }
                                ]"
                                :key="index"
                            >
                                <td class="pt-3 font-bold text-sm text-black">{{ i.voucher }}</td>
                                <td class="pt-3 font-bold text-sm text-center text-black">{{ i.discount }}</td>
                                <td class="pt-3 font-bold text-sm text-black">{{ i.name }}</td>
                                <td>
                                    <p class="pt-3 font-bold text-sm flex items-center justify-center gap-1 text-[#019b01]">
                                        <img class="w-4" src="/img/check.png" alt="Check">
                                        {{ i.status }}
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button
                        v-for="_, index in Array(4)"
                        :key="index"
                        type="button"
                        @click="$emit('update:step', 5)"
                        class="text-[#5F5F5F] bg-[#f6f6f6] text-center rounded-xl py-1.5 w-full uppercase font-medium text-sm tracking-[4px] border border-[#e0e0e0] mb-5"
                    >
                        Compartilhar
                    </button>
                    <img class="w-8 mt-4 mb-8" src="/img/arrow-bottom.png" alt="Seta">
                    <p class="text-center text-sm font-normal text-black">Até o momento, você utilizou 02 dos seus 10 cupons disponíveis e ganhou <strong class="font-semibold text-black">50%</strong> de desconto na próxima mensalidade.</p>
                </div>
            </UiContainer>
        </div>
    </template>
</template>