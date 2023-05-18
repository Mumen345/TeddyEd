<template>
    <div>
        <EventComponent />
        <FooterComponent />
    </div>
</template>

<script>
import EventComponent from '@/components/EventComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
    components: { FooterComponent, EventComponent }
}
</script>

<style scoped></style>