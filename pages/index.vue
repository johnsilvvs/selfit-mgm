<template>
    <img class="w-full" src="/img/banner1.png" alt="Chame seus amigos e ganhe benefícios. Tire sua galera do sofá.">
    <Container>
        <div class="flex flex-col items-center">
            <h1 class="text-center uppercase text-lg font-medium italic leading-[130%]">Traga seus amigos <br /> para <strong class="font-bold">Selfit e ganhe até</strong></h1>
            <h1 class="font-extrabold text-[27px] text-center uppercase italic leading-[100%] mb-4">03 mensalidades <br /> grátis.*</h1>
            <form class="w-full" action="/chame-seus-amigos" method="POST">
                <input required class="text-black block w-full h-10 mb-3 bg-white px-4 font-semibold placeholder:font-normal uppercase placeholder:tracking-[2px] text-center placeholder:text-[#999999]" type="email" placeholder="E-mail">
                <input required class="text-black block w-full h-10 mb-3 bg-white px-4 font-semibold placeholder:font-normal uppercase placeholder:tracking-[2px] text-center placeholder:text-[#999999]" type="password" placeholder="Senha">
                <Button class="w-full" submit>Partiu desconto</Button>
            </form>
            <NuxtLink class="inline-block mt-6 underline font-medium text-xs" href="https://admin.selfitacademias.com.br/selfit/0/page/landing-page/login" target="_blank">Esqueci Minha Senha</NuxtLink>
            <p class="mt-10 italic uppercase text-center font-medium text-lg leading-[23px]">Quanto mais <strong>você <span class="underline">indicar</span>,</strong> <br /> mais desconto <strong>pode <span class="underline">ganhar</span>.</strong></p>
            <NuxtLink href="https://www.selfitacademias.com.br/politica" target="_blank" class="text-center mt-4 mb-6 text-xs font-normal leading-[100%] underline">* Para mais informações consulte o regulamento.</NuxtLink>
        </div>
    </Container>
    <Footer />
</template>