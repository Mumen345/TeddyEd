<template>
    <div>
        <AdmissionComponent />
        <FooterComponent />
    </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import AdmissionComponent from '@/components/AdmissionComponent.vue';

export default {
    components: { AdmissionComponent, FooterComponent }
}
</script>

<style scoped></style>