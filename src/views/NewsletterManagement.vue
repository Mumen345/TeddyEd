<template>
    <div>
        <NewsletterComponent />
        <FooterComponent />

    </div>
</template>

<script>
import NewsletterComponent from '@/components/NewsletterComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
    components: { FooterComponent, NewsletterComponent }
}
</script>

<style scoped></style>