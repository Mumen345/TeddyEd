<template>
  <router-view />
</template>

<script>
import NavBar from './components/NavBar.vue';

// import HomeView from './views/HomeView.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
@font-face {
  font-family: nunitoSemiBold;
  src: url(./assets/Fonts/Nunito-SemiBold.ttf);
}

@font-face {
  font-family: nunitoBlack;
  src: url(./assets/Fonts/Nunito-Black.ttf);
}

.header {
  font-family: nunitoBlack;
  font-size: 48px;
  letter-spacing: 0.5%;
}

.primaryColor {
  color: #33357D;
}

* {
  font-family: nunitoSemiBold;
  /* width: 100%; */
  max-width: 1490px;
  margin: 0 auto;
}

.primaryButton {
  width: 208.67px;
  height: 43.56px;
  background: #33357D;
  border-radius: 4.91281px;
  color: #ffffff;
  outline: none;
  border: none;
}

.secondaryButton {
  background: #F4F7FF;
  /* Primary color */
  color: #33357D;
  border: 1px dashed #33357D;
  border-radius: 4.91281px;
  width: 208.67px;
  height: 43.56px;
}
</style>
