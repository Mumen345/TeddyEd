<template>
  <div class="hello">
    <NavBar />
    <div class="writeUp">
      <p class="heroHeader primaryColor">Automate school operations. <br>Keep the focus on the child. </p>
      <p class="primaryColor subHeader">An intuitive school management system (SMS ) that helps school administration
        teams
        manage
        peripheral services and operational tasks.</p>
      <div class="buttonDiv">
        <button class="primaryButton">Request Info</button>
        <button class="secondaryButton">Learn More</button>
      </div>
    </div>
  </div>
</template>

<script>
import { MDBContainer } from "mdb-vue-ui-kit";
import NavBar from "./NavBar.vue";

export default {
  name: "HeroSection",
  components: {
    MDBContainer,
    NavBar,
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-image: url("../assets/hero_background.svg");
  height: 756px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.heroHeader {
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  line-height: 143.52%;
  text-align: center;
  color: #33357D;
  font-family: nunitoBlack;
}

.subHeader {
  width: 677px;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 40px;
  text-align: center;
}

.writeUp {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 10px;
}

.buttonDiv {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 45.91px;
}
</style>
