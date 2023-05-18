<template>
    <div>
        <AssetComponent />
        <FooterComponent />
    </div>
</template>

<script>
import AssetComponent from '@/components/AssetComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
    components: { FooterComponent, AssetComponent }
}
</script>

<style scoped></style>