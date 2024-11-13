<script setup>
import { ref, onMounted } from 'vue'

const isShareSupported = ref(false)

onMounted(() => {
  isShareSupported.value = 'share' in navigator && 'canShare' in navigator
})

const shareContent = async () => {
  if (isShareSupported.value) {
    try {
      const imageUrl = 'https://selfit-mgm.vercel.app/img/example.png'
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      const file = new File([blob], 'example.png', { type: blob.type })

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: 'Selfriends | Selfit Academias',
          text: 'Tire sua galera do sofá Meus cupons foram liberados! Corra e aproveite sua primeira mensalidade por R$ 29,90!',
          url: 'https://selfriends.com.br',
          files: [file]
        })
        console.log('Conteúdo compartilhado com sucesso!')
      } else {
        alert('O compartilhamento com arquivos não é suportado neste dispositivo.')
      }
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
                <div class="flex items-center justify-between w-full">
                    <div class="flex items-center gap-3">
                        <img class="max-w-[40px] min-w-[40px] h-10 object-cover rounded-full" src="/img/user.svg" alt="Cliente Selfit">
                        <p class="text-black text-base leading-[100%] font-bold">
                            Cliente Selfit
                            <small class="text-xs mt-1.5 leading-[100%] font-medium block text-[#808080]">cliente@gmail.com</small>
                        </p>
                    </div>
                    <NuxtLink to="/" class="underline inline-block font-bold italic text-sm text-black uppercase">Sair</NuxtLink>
                </div>
                <h3 class="w-full mt-10 border-b border-[#e0e0e0] pb-6 mb-6 text-base leading-[120%] font-medium text-center text-[#5F5F5F]">Esses são os cupons de uso único. <br /> Compartilhe e ganhe mensalidades.</h3>
                <h4 class="text-center text-black text-base leading-[110%] italic uppercase font-extrabold mb-2">Você já ganhou <strong class="text-black">X</strong> mensalidades</h4>
                <p class="text-center text-sm font-normal text-black mb-6">Até o momento, você utilizou <strong class="text-black">02</strong> dos seus 12 cupons disponíveis. <br /> Compartilhe com mais amigos para ganhar até <strong class="text-black">3 mensalidades gratuitas</strong>.</p>
                <table class="w-full mb-8 border-spacing-0">
                    <thead>
                        <tr>
                            <td
                                v-for="i, index in ['Cupom', 'Status', 'Compartilhar']"
                                :key="index"
                                class="text-[#ACACAC] font-normal text-[11px] uppercase"
                            >
                                {{ i }}
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="i, index in [
                                {
                                    voucher: 'MGM294UJI298',
                                    status: 'Disponível',
                                    name: 'Henrique'
                                },
                                {
                                    voucher: 'MGM294UJI298',
                                    status: 'Disponível',
                                    name: 'Alexander'
                                },
                                {
                                    voucher: 'MGM294UJI298',
                                    status: 'Disponível',
                                    name: 'Luiz'
                                },
                                {
                                    voucher: 'MGM294UJI298',
                                    status: 'Disponível',
                                    name: 'Amanda'
                                },
                                {
                                    voucher: 'MGM294UJI298',
                                    status: 'Disponível',
                                    name: 'Marcus'
                                },
                                {
                                    voucher: 'MGM294UJI298',
                                    status: 'Disponível',
                                    name: 'Leonardo'
                                },
                                {
                                    voucher: 'MGM294UJI298',
                                    status: 'Disponível',
                                    name: 'Aline'
                                },
                                {
                                    voucher: 'MGM294UJI298',
                                    status: 'Disponível',
                                    name: 'João'
                                },
                                {
                                    voucher: 'MGM294UJI298',
                                    status: 'Disponível',
                                    name: 'Victor'
                                },
                                {
                                    voucher: 'MGM294UJI298',
                                    status: 'Disponível',
                                    name: 'Flávio'
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
                        >
                            <td class="border-b border-[#dbdbdb] py-2">
                                <p :class="{ '!text-[#ACACAC]': i.status === 'Utilizado' }" class="font-bold text-sm text-black">{{ i.voucher }}</p>
                            </td>
                            <td class="border-b border-[#dbdbdb] py-2">
                                <p
                                    :class="{ '!text-red': i.status === 'Disponível' }"
                                    class="font-bold text-sm text-[#019b01]"
                                >
                                    {{ i.status }}
                                </p>
                            </td>
                            <td class="border-b border-[#dbdbdb] py-2" v-if="i.status === 'Utilizado'">
                                <div class="min-w-[100px] max-w-[100px] w-full">
                                    <p class="truncate font-semibold text-sm text-black">{{ i.name }}</p>
                                </div>
                            </td>
                            <td class="border-b border-[#dbdbdb] py-2" v-if="i.status === 'Disponível'">
                                <div class="min-w-[100px] max-w-[100px] w-full flex items-center gap-2">
                                    <a
                                        :href="`https://wa.me/?text=Tire sua galera do sofá Meus cupons foram liberados! Corra e aproveite sua primeira mensalidade por R$ 29,90! Use meu cupom: ${i.voucher}. https://selfriends.com.br`"
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
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Button @click="shareContent">Baixar cupons</Button>
            </div>
        </Container>
    </div>
    <div class="bg-red pt-10">
        <Container>
            <div class="flex flex-col items-center">
                <ul class="flex flex-col gap-3">
                    <li class="flex items-start gap-2">
                        <strong class="text-black">1.</strong>
                        <p class="font-medium text-sm uppercase italic">A cada 4 cupons utilizados <span class="underline">você ganha uma mensalidade</span>.</p>
                    </li>
                    <li class="flex items-start gap-2">
                        <strong class="text-black">2.</strong>
                        <p class="font-medium text-sm uppercase italic">Cada cupom da acesso a oferta exclusiva do plano plus de <span class="underline">R$ 29,90</span> na primeira mensalidade.</p>
                    </li>
                    <li class="flex items-start gap-2">
                        <strong class="text-black">3.</strong>
                        <p class="font-medium text-sm uppercase italic">Compartilhe os cupons quantas vezes quiser.</p>
                    </li>
                </ul>
                <NuxtLink href="/Regulamento.pdf" target="_blank" class="text-center mt-6 text-xs font-normal leading-[130%]">Consulte o regulamento.</NuxtLink>
            </div>
        </Container>
    </div>
    <Footer />
</template>