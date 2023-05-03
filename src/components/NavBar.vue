<template>
    <div class="navBar">
        <img class="logo" src="../assets/teddyed-logo.svg" alt="" srcset="">
        <ul class="linkDiv web">
            <router-link role="link" to="/">Home</router-link>
            <router-link role="link" to="/modules">Modules</router-link>
            <router-link role="link" to="/faq">FAQ</router-link>
        </ul>
        <button class="requestbutton web">Request Information</button>
        <i class="fa-solid fa-bars-staggered mobile"></i>
    </div>
</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>

<style scoped>
 .mobile {
        display: none;
    }
    .web {
        display:block;
    }
.navBar {
    background: #33357D;
    box-shadow: 0px 0px 41.5628px rgba(24, 26, 32, 0.07);
    border-radius: 17px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    gap: 200px;
    padding: 17px;
    margin: 2rem 0 0;
    width: 80%;
    max-width: 1500px;
    padding:15px 45px

}

.linkDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 30px;
    color: #ffffff !important;
    /* background-color: red; */
}

a {
    color: #ffffff !important;
}

.requestbutton {
    width: 138px;
    height: 41px;
    background: #FFFFFF;
    border: 1.01887px solid #FFFFFF;
    border-radius: 5px;
    outline: none;
    color: #33357D;
    border: 1px solid #33357D;
    font-weight: 700;
    font-size: 11px;
}

.logo {
    width: 138px;

}
ol, ul, dl {
    margin-top: 0;
    margin-bottom: 0rem;
}
a {
    font-weight: medium;
    text-decoration: none;
    font-size: 16px;
    text-transform: capitalize !important;
}
.router-link-exact-active {
  color: #7750A1;
  font-weight: bold;
  text-decoration: underline;
}
@media screen and (max-width: 1138px) {
    .mobile {
        display: block
    }
    .web {
        display:none;
    }
    .navBar {
    background: #33357D;
    box-shadow: 0px 0px 41.5628px rgba(24, 26, 32, 0.07);
    border-radius: 17px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    gap: 200px;
    padding: 17px;
    margin: 2rem 0 0;
    width: 90%;
    max-width: 1500px;
    padding:20px 45px
}
}
</style>