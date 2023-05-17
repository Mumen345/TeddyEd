<template>
    <div class="Not_container">
        <NavBar />
        <div>
            <img class="notfound" src="../assets/404.svg" alt="" srcset="">
        </div>
        <router-link role="link" class="go_home" to="/"><i class="fa-solid fa-house" style="color: #ffffff;"></i>Go
            Home</router-link>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
export default {
    name: "NotFound",
    components: {
        NavBar,
    },
}
</script>

<style scoped>
.Not_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
}

.notfound {
    width: 100%;
}

.go_home {
    background: #33357D;
    border: 1.01887px solid #33357D;
    border-radius: 5.09434px;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 25px;
    gap: 7.13px;
    height: 41px;
    border: none;

}
</style>