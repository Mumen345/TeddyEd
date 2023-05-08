<template>
    <div class="hello">
        <NavBar />
        <div class="info_container">
            <div class="info_div">
                <img src="../assets/address.svg" alt="location img">
                <h5>Address</h5>
                <p>Ajax ON L1S 7R4</p>
            </div>
            <div class="info_div">
                <img src="../assets/smartphone.svg" alt="location img">
                <h5>Call Us</h5>
                <p><a href="tel:+1 647 470 6921">+1 647 470 6921</a></p>
            </div>
            <div class="info_div">
                <img src="../assets/letter.svg" alt="location img">
                <h5>Email</h5>
                <p> <a href="mailto:contact.this@example.com">contact.this@example.com</a> </p>
            </div>
        </div>
        <InputComponents v-motion-pop-visible-once :delay="200" />
        <FooterComponent />
    </div>
</template>
  
<script>
import FooterComponent from "./FooterComponent.vue";
import InputComponents from "./InputComponents.vue";
import NavBar from "./NavBar.vue";

export default {
    name: "HeroSection",
    components: {
        NavBar,
        InputComponents,
        FooterComponent
    },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info_container {
    background: #FFFFFF;
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    width: 90%;
    margin: 3rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 40px 0;
    gap: 30px;

}

a {
    font-size: 14px;
    font-family: nunitoSemiBold;
    line-height: 26px;
    color: #33357D !important;
    text-decoration: underline;
}

.hello {
    background-image: url("../assets/maps.png");
    height: 300px;
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

.info_div p {
    font-size: 14px;
    font-family: nunitoSemiBold;
    line-height: 26px;
}

.info_div h5 {
    font-family: nunitoBlack;
    font-size: 18px;
    line-height: 22px;
}

.info_div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #33357D;
}

@media screen and (max-width: 1138px) {
    .hello {
        background-image: url("../assets/maps.png");
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


}

@media screen and (max-width: 650px) {}

@media screen and (max-width: 500px) {}

@media screen and (max-width: 430px) {}
</style>
  