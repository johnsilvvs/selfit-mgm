<script setup>
const full = ref(false)
</script>

<template>
    <img class="w-full" src="/img/banner4.png" alt="Selfriends">
    <div class="bg-white py-8">
        <Container>
            <div class="flex flex-col items-center">
                <div class="flex items-center gap-3">
                    <img class="max-w-[40px] min-w-[40px] h-10 object-cover rounded-full" src="/img/user.png" alt="Cliente Selfit">
                    <p class="text-[#808080] text-base leading-[100%] font-bold">
                        Cliente Selfit
                        <small class="text-[11px] mt-1 leading-[100%] font-medium block text-[#808080]">cliente@gmail.com</small>
                    </p>
                </div>
                <template v-if="full">
                    <h1 class="font-extrabold text-[27px] text-center uppercase italic leading-[100%] text-black mb-1 mt-6">Parabéns!</h1>
                    <p class="text-center text-sm font-normal text-black mb-6">Você utilizou todos os cupons disponíveis e ganhou 3 mensalidades gratuitas</p>
                </template>
                <template v-else>
                    <h3 class="mt-6 border-b border-[#e0e0e0] pb-6 mb-6 text-lg leading-[120%] font-medium text-center text-[#5F5F5F]">Esses são os cupons ativos. <br /> Compartilhe e ganhe mais descontos.</h3>
                    <p class="text-center text-sm font-normal text-black mb-6">Até o momento, você utilizou <strong class="text-black">02</strong> dos seus 12 cupons disponíveis. <br /> Compartilhe com mais amigos para ganhar até <strong class="text-black">3 mensalidades gratuitas</strong></p>
                </template>
                <ul class="w-full mb-6 flex flex-col gap-4">
                    <li
                        v-for="i, index in [
                            {
                                voucher: 'MGM294UJI298',
                                status: 'Utilizado',
                                names: 'Fernanda'
                            },
                            {
                                voucher: 'MGM294UJI298',
                                status: 'Disponível',
                                names: 'Henrique'
                            }
                        ]"
                        :key="index"
                        class="grid grid-cols-2 gap-y-2 pb-4 border-b border-[#F1F1F1]"
                    >
                        <div>
                            <h6 class="text-center text-[#ACACAC] font-normal text-xs uppercase">Cupom</h6>
                            <p class="text-center font-bold text-sm text-black">{{ i.voucher }}</p>
                        </div>
                        <div>
                            <h6 class="text-center text-[#ACACAC] font-normal text-xs uppercase">Status</h6>
                            <p
                                :class="{ '!text-red': i.status === 'Disponível' }"
                                class="text-center font-bold text-sm text-[#019b01]"
                            >
                                {{ i.status }}
                            </p>
                        </div>
                        <div>
                            <h6 class="text-center text-[#ACACAC] font-normal text-xs uppercase">Utilizador por</h6>
                            <p class="text-center font-bold text-sm text-black">{{ i.names }}</p>
                        </div>
                        <a class="flex justify-center items-center gap-2 text-sm uppercase font-bold underline text-black" :href="`https://wa.me/?text=Selfit%20Academias%20%7C%20Tire%20sua%20galera%20do%20sof%C3%A1%0AMeus%20cupons%20foram%20liberados%21%20Corra%20e%20aproveite%20sua%20primeira%20mensalidade%20por%20R%24%2029%2C90%21%20Use%20meu%20cupom%20${i.voucher}%0Ahttps%3A%2F%2Fselfriends.com.br`" target="_blank">
                            Compartilhe
                            <img src="/img/whatsapp.svg" alt="WhatsApp">
                        </a>
                    </li>
                </ul>
                <Button>Compartilhar</Button>
                <NuxtLink to="/" class="inline-block mt-4 font-bold italic text-base text-black uppercase">Sair</NuxtLink>
                <NuxtLink href="/Regulamento.pdf" target="_blank" class="text-center mt-6 mb-6 text-xs font-normal leading-[130%] underline text-black">Consulte o regulamento e as condições da campanha clicando aqui.</NuxtLink>
            </div>
        </Container>
    </div>
    <Footer />
</template>