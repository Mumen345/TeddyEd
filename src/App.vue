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

@font-face {
  font-family: nunitoMedium;
  src: url(./assets/Fonts/Nunito-Medium.ttf);
}

@font-face {
  font-family: nunitoExtrabold;
  src: url(./assets/Fonts/Nunito-ExtraBold.ttf);
}

@font-face {
  font-family: nunitoBold;
  src: url(./assets/Fonts/Nunito-Bold.ttf);
}

.header {
  font-family: nunitoBlack;
  font-size: 48px;
  letter-spacing: 0.5%;
}

.primaryColor {
  color: #33357D;
}


.primaryButton {
  width: 208px;
  height: 48px;
  background: #33357D;
  border-radius: 4.91281px;
  color: #ffffff;
  outline: none;
  border: none;
}

.secondaryButton {
  background: #F4F7FF;
  color: #33357D;
  border: 1px dashed #33357D;
  border-radius: 4.91281px;
  width: 208px;
  height: 48px;
}
</style>
