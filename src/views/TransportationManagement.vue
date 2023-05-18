<template>
    <div>
        <TransportationComponent />
        <FooterComponent />
    </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import TransportationComponent from '@/components/TransportationComponent.vue';

export default {
    components: { FooterComponent, TransportationComponent }
}
</script>

<style scoped></style>