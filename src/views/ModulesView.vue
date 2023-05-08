<template>
    <div class="">
        <ModulesComponent />
        <FooterComponent />
    </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import ModulesComponent from '@/components/ModulesComponent.vue';
import NavBar from '@/components/NavBar.vue'
export default {
    name: "FaqPage",
    components: {
        NavBar,
        FooterComponent,
        ModulesComponent
    }
}
</script>

<style scoped></style>