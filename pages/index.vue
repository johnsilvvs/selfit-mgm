<script setup>
const step = ref(1)
</script>

<template>
    <StepsStep1 v-model:step="step" />
    <StepsStep2 v-model:step="step" />
    <StepsStep3 v-model:step="step" />
    <StepsStep4 v-model:step="step" />
    <StepsStep5 v-model:step="step" />
</template>