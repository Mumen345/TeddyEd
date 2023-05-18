<template>
    <div>
        <FinancialComponent />
        <FooterComponent />
    </div>
</template>

<script>
import FinancialComponent from '@/components/FinancialComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
    components: { FooterComponent, FinancialComponent }
}
</script>

<style scoped></style>