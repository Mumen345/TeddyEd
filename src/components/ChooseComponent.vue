<template>
    <div class="choose_container">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.choose_container {
  background-image: url("../assets/choose_bg.svg");
  height: 1163px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width:100%;
  margin:12rem auto 0;
  max-width: 1500px;
}
@media screen and (max-width: 1138px) {
    .choose_container {
  width:100%;
  margin:0rem auto 0;
}
}
@media screen and (max-width: 820px) {
    .choose_container {
  width:100%;
  margin:0rem auto 0;
}
}
@media screen and (max-width: 786px) {
    .choose_container {
  width:100%;
  margin:6rem auto 0;
}
}
@media screen and (max-width: 500px) {
    .choose_container {
  background-image: url("../assets/choose_bg.svg");
  height: 1163px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width:100%;
  margin:0rem auto 0;
  max-width: 1500px;
}
}
</style>