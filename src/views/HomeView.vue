<template>
  <div class="home">
    <HeroSection />
    <ChooseComponent />
    <FaqComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroSection from '@/components/HeroSection.vue'
import ChooseComponent from '@/components/ChooseComponent.vue'
import FaqComponent from '@/components/FaqComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    ChooseComponent,
    FaqComponent
  }
}
</script>
