<script setup>
import { ref, onMounted } from 'vue'

const isShareSupported = ref(false)

onMounted(() => {
  isShareSupported.value = 'share' in navigator
})

const shareContent = async () => {
  if (isShareSupported.value) {
    try {
      await navigator.share({
        title: 'Título do Conteúdo',
        text: 'Descrição do conteúdo que será compartilhado.',
        url: window.location.href,
      })
      console.log('Conteúdo compartilhado com sucesso!')
    } catch (error) {
      console.error('Erro ao compartilhar:', error)
    }
  } else {
    alert('O compartilhamento não é suportado neste dispositivo.')
  }
}
</script>

<template>
    <img class="w-full" src="/img/banner2.png" alt="Selfriends">
    <div class="bg-white pt-8 pb-10">
        <Container>
            <div class="flex flex-col items-center">
                <div class="flex items-center gap-3">
                    <img class="max-w-[40px] min-w-[40px] h-10 object-cover rounded-full" src="/img/user.svg" alt="Cliente Selfit">
                    <p class="text-black text-base leading-[100%] font-bold">
                        Cliente Selfit
                        <small class="text-xs mt-1.5 leading-[100%] font-medium block text-[#808080]">cliente@gmail.com</small>
                    </p>
                </div>
                <h3 class="w-full mt-6 border-b border-[#e0e0e0] pb-6 mb-6 text-lg leading-[120%] font-medium text-center text-[#5F5F5F]">Esses são os cupons de uso único. <br /> Compartilhe e ganhe mensalidade.</h3>
                <h4 class="text-center text-black text-xl leading-[110%] italic uppercase font-extrabold mb-2">Você já ganhou <strong class="text-black">X</strong> mensalidades</h4>
                <p class="text-center text-sm font-normal text-black mb-6">Até o momento, você utilizou <strong class="text-black">02</strong> dos seus 12 cupons disponíveis. <br /> Compartilhe com mais amigos para ganhar até <strong class="text-black">3 mensalidades gratuitas</strong></p>
                <ul class="w-full mb-8 flex flex-col gap-4">
                    <li
                        v-for="i, index in [
                            {
                                voucher: 'MGM294UJI298',
                                status: 'Disponível',
                                name: 'Henrique'
                            },
                            {
                                voucher: 'MGM294UJI298',
                                status: 'Utilizado',
                                name: 'Fernanda'
                            },
                            {
                                voucher: 'MGM294UJI298',
                                status: 'Utilizado',
                                name: 'Tércio'
                            }
                        ]"
                        :key="index"
                        class="flex items-center justify-between pb-4 border-b border-[#dbdbdb]"
                    >
                        <div class="min-w-[120px] max-w-[120px]">
                            <h6 class="text-[#ACACAC] font-normal text-[11px] uppercase">Cupom</h6>
                            <p :class="{ '!text-[#ACACAC]': i.status === 'Utilizado' }" class="font-bold text-sm text-black">{{ i.voucher }}</p>
                        </div>
                        <div class="min-w-[80px] max-w-[80px]">
                            <h6 class="text-[#ACACAC] font-normal text-[11px] uppercase">Status</h6>
                            <p
                                :class="{ '!text-red': i.status === 'Disponível' }"
                                class="font-bold text-sm text-[#019b01]"
                            >
                                {{ i.status }}
                            </p>
                        </div>
                        <div
                            v-if="i.status === 'Utilizado'"
                            class="min-w-[100px] max-w-[100px] w-full"
                        >
                            <h6 class="text-[#ACACAC] font-normal text-[11px] uppercase">Utilizador</h6>
                            <p class="truncate font-bold text-sm text-black">{{ i.name }}</p>
                        </div>
                        <div
                            v-if="i.status === 'Disponível'"
                            class="min-w-[100px] max-w-[100px] w-full flex items-center gap-2"
                        >
                            <a
                                :href="`https://wa.me/?text=Selfit%20Academias%20%7C%20Tire%20sua%20galera%20do%20sof%C3%A1%0AMeus%20cupons%20foram%20liberados%21%20Corra%20e%20aproveite%20sua%20primeira%20mensalidade%20por%20R%24%2029%2C90%21%20Use%20meu%20cupom%20${i.voucher}%0Ahttps%3A%2F%2Fselfriends.com.br`"
                                target="_blank"
                            >
                                <img src="/img/whatsapp.svg" alt="WhatsApp">
                            </a>
                            <button
                                v-for="i, index in [
                                    'instagram',
                                    'facebook'
                                ]"
                                :key="index"
                                type="button"
                                @click="shareContent"
                            >
                                <img :src="`/img/${i}.svg`" :alt="i">
                            </button>
                        </div>
                    </li>
                </ul>
                <NuxtLink to="/" class="underline inline-block font-bold italic text-base text-black uppercase">Sair</NuxtLink>
            </div>
        </Container>
    </div>
    <div class="bg-red pt-12">
        <Container>
            <div class="flex flex-col items-center">
                <ul class="flex flex-col gap-3">
                    <li class="flex items-start gap-2">
                        <strong class="text-black">1.</strong>
                        <p class="font-medium text-sm uppercase italic">A cada 4 cupons utilizados <span class="underline">você ganha uma mensalidade</span>.</p>
                    </li>
                    <li class="flex items-start gap-2">
                        <strong class="text-black">2.</strong>
                        <p class="font-medium text-sm uppercase italic">Cada cupom da acesso a oferta exclusiva do plano plus de <span class="underline">29,90</span> na primeira mensalidade.</p>
                    </li>
                    <li class="flex items-start gap-2">
                        <strong class="text-black">3.</strong>
                        <p class="font-medium text-sm uppercase italic">Compartilhe os cupons quantas vezes quiser.</p>
                    </li>
                </ul>
                <NuxtLink href="/Regulamento.pdf" target="_blank" class="text-center mt-8 text-xs font-normal leading-[130%]">Consulte o regulamento.</NuxtLink>
            </div>
        </Container>
    </div>
    <Footer />
</template>