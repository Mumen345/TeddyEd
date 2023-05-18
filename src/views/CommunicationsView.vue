<template>
    <div>
        <CommunicationsComponent />
        <FooterComponent />
    </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import CommunicationsComponent from '@/components/CommunicationsComponent.vue';

export default {
    components: { FooterComponent, CommunicationsComponent }
}
</script>

<style scoped></style>