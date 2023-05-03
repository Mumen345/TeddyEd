<template>
  <div class="home">
    <HeroSection />
    <ChooseComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroSection from '@/components/HeroSection.vue'
import ChooseComponent from '@/components/ChooseComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    ChooseComponent
  }
}
</script>
