<script setup>

</script>

<template>
    <img class="w-full" src="/img/banner2.png" alt="Ganhe até 03 mensalidades grátis.*">
    <div class="bg-white pb-12">
        <Container>
            <p class="text-black text-center font-medium text-base pt-8 pb-6 leading-[130%]">Acesse utilizando os mesmos dados para entrar na Selfit.</p>
            <form class="flex flex-col items-center" action="/cupons" method="POST">
                <input class="block w-full bg-[#f2f2f2] placeholder:opacity-100 placeholder:text-[#999999] placeholder:uppercase placeholder:font-medium font-semibold text-lg text-black text-center mb-3 py-2 placeholder:tracking-[1px] px-4" type="email" placeholder="E-mail" required>
                <input class="block w-full bg-[#f2f2f2] placeholder:opacity-100 placeholder:text-[#999999] placeholder:uppercase placeholder:font-medium font-semibold text-lg text-black text-center py-2 placeholder:tracking-[1px] px-4" type="password" placeholder="Senha" required>
                <button class="mt-5 w-full flex items-center gap-6 text-left border-[#e0e0e0] py-6 border-t border-b" type="submit">
                    <img class="w-8" src="/img/logo-red.svg" alt="Selfit">
                    <span class="block flex-[2] font-medium text-lg text-black">Entrar com Selfit</span>
                    <img class="w-4" src="/img/arrow.svg" alt="Seta">
                </button>
                <NuxtLink class="underline font-medium text-sm inline-block mt-4 text-black" to="https://admin.selfitacademias.com.br/selfit/0/page/landing-page/login" target="_blank">Esqueci Minha Senha</NuxtLink>
            </form>
            <p class="text-black mt-16 italic uppercase text-center font-medium text-lg leading-[23px]">Quanto mais <strong class="text-black">você <span class="underline text-black">indicar</span>,</strong> <br /> mais desconto <strong class="text-black">pode <span class="underline text-black">ganhar</span>.</strong></p>
            <div class="mt-10 flex justify-center">
                <NuxtLink href="/Regulamento.pdf" target="_blank" class="inline-block text-center text-xs font-normal text-black">Consulte o regulamento.</NuxtLink>
            </div>
        </Container>
    </div>
    <Footer />
</template>