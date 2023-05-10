<template>
    <div class="container">
        <SecurePage />
        <FooterComponent />
    </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import SecurePage from '@/components/SecurePage.vue';

export default {
    components: { FooterComponent, SecurePage }
}
</script>

<style scoped>
.container {
    max-width: 1500px;
    margin: 0 auto;
}
</style>