<template>
    <div class="">
        <AssessmentComponent />
        <FooterComponent />
    </div>
</template>

<script>
import AssessmentComponent from '@/components/AssessmentComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
    components: { FooterComponent, AssessmentComponent }
}
</script>

<style scoped></style>