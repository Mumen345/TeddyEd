<template>
    <div class="about_container">
        <div class="nav_container">
            <NavBar />
        </div>
        <div class="about_header">
            <h1>Single repository for student, teaching and administrative staff</h1>
            <p>TeddyEd is an innovative and comprehensive school management system designed to streamline administrative and
                operational tasks within a school environment.</p>
        </div>
        <div class="hero_img"><img src="../assets/hero_img.png" alt="" srcset=""></div>
    </div>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
    components: { NavBar }
}
</script>

<style scoped>
.about_container {
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
}

.nav_container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
}

.about_header {
    display: flex;
    width: 78%;
    margin: 3rem auto 2rem;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
}

.about_header p {
    font-size: 14px;
    line-height: 261.9%;
    color: #33357D;
    font-family: nunitoSemiBold;
}

.about_header h1 {
    width: auto;
    font-family: nunitoBlack !important;
    font-size: 30px;
    font-weight: 800;
    line-height: 159.52%;
    color: #33357D;
}

.hero_img img {
    width: 100%;
}

.hero_img {
    width: 80%;
    display: flex;
    justify-content: center;
    max-width: 1500px;
    margin: 0 auto;

}

@media screen and (max-width: 1368px) {
    .about_header h1 {
        width: 100%;
        font-family: nunitoBlack;
        font-size: 28px;
        font-weight: 800;
        line-height: 159.52%;
        color: #33357D;
    }
}

@media screen and (max-width: 1138px) {
    .about_header {
        display: flex;
        width: 90%;
        margin: 3rem auto 0;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0px;
        gap: 10px;
        text-align: center;
    }

}
</style>