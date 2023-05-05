<template>
    <div>
        <div class="Faq_container">
            <NavBar />
        </div>
        <div class="move_down">
            <FaqComponent />
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import FaqComponent from '@/components/FaqComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import NavBar from '@/components/NavBar.vue'
export default {
    name: "FaqPage",
    components: {
        NavBar,
        FaqComponent,
        FooterComponent
    }
}
</script>

<style scoped>
.Faq_container {
    display: flex;
    justify-content: center;
    margin: 0 auto -4rem;
}

.move_down {
    margin-top: 7rem;
}
</style>