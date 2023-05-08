<template>
    <div class="modules_container">
        <div class="nav_container">
            <NavBar />
        </div>
        <div class="">
            <h1 class="header primaryColor">TeddyEd Modules</h1>
            <div class="modules_card_container">
                <ModulesCards />
            </div>
            <div class="btn_div">
                <button @click.prevent="go" class="primaryButton ">Request Information</button>
            </div>
        </div>
    </div>
</template>

<script>
import ModulesCards from './ModulesCards.vue';
import NavBar from './NavBar.vue';

export default {
    components: { NavBar, ModulesCards },
    methods: {
        go() {
            this.$router.push("/requestinfo")
        }
    }
}
</script>

<style scoped>
.nav_container {
    display: flex;
    justify-content: center;
    margin: 0 auto;
}

h1 {
    text-align: center;
    margin: 3.5rem 0;
    font-size: 40px;
}

.modules_card_container {
    width: 100%;
    margin: 0 auto 2rem;
}

.modules_container {
    max-width: 1500px;
    margin: 0 auto;
    width: 100%;
}

button {
    width: 60%;
}

.btn_div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 5rem;
    width: 100%;
}
</style>