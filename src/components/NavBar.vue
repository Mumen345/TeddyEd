<template>
    <div class="navBar">
        <img class="logo" src="../assets/teddyed-logo.svg" alt="" srcset="">
        <ul class="linkDiv web">
            <router-link role="link" to="/">Home</router-link>
            <router-link role="link" to="/modules">Modules</router-link>
            <router-link role="link" to="/faq">FAQ</router-link>
        </ul>
        <button class="requestbutton web">Request Information</button>
        <i @click="openNav" class="fa-solid fa-bars-staggered mobile"></i>
        <div id="myNav" class="overlay">
            <a href="#" class="closebtn" @click="closeNav">&times;</a>
            <div class="overlay-content">
                <router-link role="link" to="/">Home</router-link>
                <router-link role="link" to="/modules">Modules</router-link>
                <router-link role="link" to="/faq">FAQ</router-link>
                <button class=" primaryButton">Request Information</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {

        return {
        }
    },
    methods: {
        openNav() {
            document.getElementById("myNav").style.height = "100%";
        },

        closeNav() {
            document.getElementById("myNav").style.height = "0%";
        }
    },
}
</script>

<style scoped>
.mobile {
    display: none;
}

.web {
    display: block;
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
    padding: 15px 45px
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

ol,
ul,
dl {
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
        display: none;
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
        padding: 20px 45px
    }
}

@media screen and (max-height: 450px) {

    .overlay {
        overflow-y: auto;
    }

    .overlay a {
        font-size: 20px
    }

    .overlay .closebtn {
        font-size: 40px;
        top: 15px;
        right: 35px;
    }
}

@media screen and (max-width: 430px) {
    .navBar {
        gap: 100px !important;
        padding: 20px 17px;

    }

    .logo {
        width: 80px;

    }

}

/* Menu CSS */

.overlay {
    height: 0%;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #FFFFFF;
    overflow-y: hidden;
    transition: 0.5s;
}

.overlay-content {
    position: relative;
    top: 25%;
    width: 100%;
    text-align: center;
    margin-top: 30px;
}

.overlay a {
    text-decoration: none;
    font-size: 18px;
    color: #33357D !important;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
    color: #f1f1f1;
}

.overlay .closebtn {
    position: absolute;
    top: 0px;
    right: 10px;
    font-size: 40px;
}
</style>