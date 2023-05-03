<template>
    <div class="modules_container">
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
.modules_container {
    display:flex;
    justify-content:center;
    margin: 0 auto;
}
</style>