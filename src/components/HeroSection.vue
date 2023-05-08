<template>
  <div class="hello">
    <NavBar />
    <div class="writeUp">
      <h1 class="heroHeader primaryColor">Automate school operations. <br>Keep the focus on the child. </h1>
      <h1 class="primaryColor subHeader">An intuitive school management system (SMS ) that helps school administration
        teams
        manage
        peripheral services and operational tasks.</h1>
      <div class="buttonDiv">
        <button @click.prevent="requestInfo" class="primaryButton">Request Info</button>
        <button @click.prevent="learnMore" class="secondaryButton">Learn More</button>
      </div>
    </div>
    <div>
      <img class="mocukup" src="../assets/mockup.svg" alt="" srcset="">
      <!-- <img class="mobileImages" src="../assets/Teddy_Module.svg" alt="" srcset="">
      <img class="mobileImages" src="../assets/Teddy_Dashboard.svg" alt="" srcset=""> -->
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  name: "HeroSection",
  components: {
    NavBar,
  },
  props: {
    msg: String
  },
  methods: {
    requestInfo() {
      this.$router.push("/requestinfo")
    },
    learnMore() {
      this.$router.push("/modules")
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mobileImages {
  display: none;
}

.hello {
  background-image: url("../assets/hero_background.svg");
  /* background:#F3F6FF; */
  height: 756px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
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
  font-weight: 400;
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

@media screen and (max-width: 1138px) {
  .heroHeader {
    font-style: normal;
    font-weight: 900;
    width: 80%;
    font-size: 45px;
    line-height: 143.52%;
    text-align: center;
    color: #33357D;
    font-family: nunitoBlack;
  }

  .subHeader {
    width: 80%;
    text-align: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 40px;
    text-align: center;
  }

  .hello {
    background-image: url("../assets/hero_background.svg");
    background: #F3F6FF;
    height: 800px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
  }

  .mocukup {
    width: 500px
  }

  .buttonDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 20px;
  }
}

@media screen and (max-width: 650px) {
  .mobileImages {
    display: block;
  }
}

@media screen and (max-width: 500px) {
  .subHeader {
    width: 90%;
    text-align: center;
    font-weight: 400;
    font-size: 15px;
    line-height: 40px;
    text-align: center;
  }

  .mocukup {
    display: none;
  }

  .buttonDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 20px;
    width: 100%;
  }

  .primaryButton {
    width: 80%;
  }

  .secondaryButton {
    width: 80%;
  }
}

@media screen and (max-width: 430px) {
  .heroHeader {
    font-style: normal;
    font-weight: 900;
    width: 90%;
    font-size: 40px;
    line-height: 143.52%;
    text-align: center;
    color: #33357D;
    font-family: nunitoBlack;
  }
}
</style>
