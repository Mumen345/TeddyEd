<template>
  <div class="home">
    <HeroSection />
    <ChooseComponent />
    <FaqComponent />
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroSection from '@/components/HeroSection.vue'
import ChooseComponent from '@/components/ChooseComponent.vue'
import FaqComponent from '@/components/FaqComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    ChooseComponent,
    FaqComponent,
    FooterComponent
  }
}
</script>
