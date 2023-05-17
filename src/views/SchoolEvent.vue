<template>
    <div>
        <NavBar />
        <FooterComponent />
    </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import NavBar from '@/components/NavBar.vue';

export default {
    components: { NavBar, FooterComponent }
}
</script>

<style scoped></style>