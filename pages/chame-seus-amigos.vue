<template>
    <Back href="/" />
    <img class="w-full" src="/img/banner3.png" alt="Tire sua galera do sofá. Selfriends">
    <Container>
        <div class="flex flex-col items-center">
            <h1 class="text-center uppercase text-lg font-medium italic leading-[130%]">Traga seus amigos <br /> para <strong class="font-bold">Selfit e ganhe até</strong></h1>
            <h1 class="font-extrabold text-[27px] text-center uppercase italic leading-[100%]">03 mensalidades <br /> grátis.*</h1>
            <NuxtLink href="/Regulamento.pdf" target="_blank" class="text-center mt-4 mb-6 text-xs font-normal leading-[100%] underline">* Para mais informações consulte o regulamento.</NuxtLink>
            <Button href="/cupons">Participe agora</Button>
            <ul class="flex flex-col gap-3 mt-8">
                <li class="flex items-start gap-2">
                    <strong class="text-black">1.</strong>
                    <p class="font-medium text-sm uppercase italic">a cada 04 novas matrículas, <span class="underline inline">você ganha 01 mensalidade grátis</span>, com limite de até 03 meses.</p>
                </li>
                <li class="flex items-start gap-2">
                    <strong class="text-black">2.</strong>
                    <p class="font-medium text-sm uppercase italic">Cada amigo indicado terá a oferta exclusiva de <span class="underline inline">R$ 29,90</span> na primeira mensalidade do Plano Plus.</p>
                </li>
                <li class="flex items-start gap-2">
                    <strong class="text-black">3.</strong>
                    <p class="font-medium text-sm uppercase italic">Os cupons únicos de ofertas serão compartilhados pelo whatsapp e levarão a página de resgate.</p>
                </li>
            </ul>
        </div>
    </Container>
    <Footer />
</template>