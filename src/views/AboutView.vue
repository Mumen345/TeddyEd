<template>
  <div>
    <AboutHero />
    <OverView />
    <WhatisTeddyed />
    <FooterComponent />
  </div>
</template>

<script>
import AboutHero from '@/components/AboutHero.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import OverView from '@/components/OverView.vue';
import WhatisTeddyed from '@/components/WhatisTeddyed.vue';
export default {
  components: { AboutHero, OverView, WhatisTeddyed, FooterComponent }

}
</script>

<style scoped></style>