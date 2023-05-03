<template>
    <div class="Faq_container">
        <NavBar />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
name:"FaqPage",
components: {
    NavBar,
  }
}
</script>

<style scoped>
.Faq_container {
    display:flex;
    justify-content:center;
    margin: 0 auto;
}
</style>