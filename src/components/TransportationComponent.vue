<template>
    <div class="content_container">
        <NavBar />
        <div class="what_container">
            <div class="first_div">
                <h1>{{ header }}</h1>
                <p>{{ subHeader }} <br> <span>{{ subHeader2 }}</span></p>
                <!-- <p>{{ subHeader2 }}</p> -->
                <img :src="image" alt="people svg" srcset="">
                <button @click.prevent="go" class="primaryButton first_div_button">Request
                    Information</button>
            </div>
            <div class="card_container">
                <div class="card" v-for="item in items" :key="item.id">
                    <img :src="item.link" alt="">
                    <div>
                        <h6>{{ item.headers }}</h6>
                        <p class="">{{ item.message }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
    data() {
        return {
            header: "Transportation Management",
            subHeader: "TeddyEd's busing module provides a comprehensive solution for managing school transportation planning & operations, from automated routing and scheduling to real-time GPS tracking, safety features, and communication management.",
            subHeader2: "By streamlining transportation operations, TeddyEd can help schools improve efficiency, ensure the safety and security of students while they are being transported to and from school., and communicate with parents and guardians.",
            image: require('../assets/student5.svg'),
            items:
                [
                    {
                        link: require('../assets/transportation.svg'),
                        headers: "Route Planning and Scheduling",
                        message: "TeddyEd's transportation module allows schools to plan and schedule transportation routes for students, including pickup and drop-off times, locations, and bus numbers.",
                    },
                    {
                        link: require('../assets/transportation.svg'),
                        headers: "Real-time GPS Tracking",
                        message: "TeddyEd's transportation module can be integrated with GPS tracking systems, allowing schools to track the location of buses and ensure that they are running on schedule.",
                    },
                    {
                        link: require('../assets/transportation.svg'),
                        headers: "Automated Parent Notifications",
                        message: "TeddyEd's transportation module can send automated notifications to parents and guardians regarding bus routes and schedules, helping to keep them informed and engaged.",
                    },
                    {
                        link: require('../assets/transportation.svg'),
                        headers: "Driver and Vehicle Management",
                        message: "TeddyEd's transportation module allows schools to manage drivers and vehicles, including tracking driver certifications, vehicle maintenance, and fuel usage.",
                    },

                    {
                        link: require('../assets/transportation.svg'),
                        headers: "Emergency Management",
                        message: "TeddyEd's transportation module includes safety features, such as the ability to set up bus stop locations and create passenger manifests, as well as emergency management features such as the ability to quickly locate and contact buses in the event of an emergency",
                    },
                    {
                        link: require('../assets/transportation.svg'),
                        headers: "Communication Management",
                        message: "TeddyEd's transportation module features a communication module, allowing schools to communicate with parents and guardians regarding transportation issues, such as delays or changes to bus routes.",
                    },
                    {
                        link: require('../assets/transportation.svg'),
                        headers: "Historical Transportation Records",
                        message: "TeddyEd's transportation module stores historical transportation records, allowing schools to track transportation trends and identify areas for improvement.",

                    },

                ]

        }
    },
    components: { NavBar, },
    methods: {
        go() {
            this.$router.push("/requestinfo")
        }
    }
}
</script>

<style scoped>
.what_container {
    background: #F3F6FF;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 66px;
    gap: 117px;
}

.first_div p {
    font-size: 16px;
    line-height: 34px;
}

.first_div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 40%;
}

h1 {
    font-family: nunitoBlack;
    font-weight: 800;
    line-height: 45px;
    letter-spacing: 0.035em;
    text-align: left;
    color: #33357D;
}

.card p {
    font-size: 15px;
    line-height: 28px;
    font-family: nunitoSemibold;
}

.card h6 {
    font-size: 20px;
    line-height: 31px;
    font-family: nunitoBlack;
    color: #33357D;
}

.first_div img {
    width: 100% !important;
}

.card {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16.9985px;
    gap: 17.85px;
    background: #FFFFFF;
    box-shadow: 0px 40px 30px rgba(25, 25, 46, 0.04);
    border-radius: 18px;
    width: 600px;
}

.card_container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.first_div_button {
    width: 50%;
    margin: 30px auto 0;
}

.content_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    gap: 30px;
}


@media screen and (max-width: 960px) {
    .what_container {
        background: #FFFFFF;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 33px;
        gap: 40px;
    }

    .card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 16.9985px;
        gap: 17.85px;
        background: #FFFFFF;
        box-shadow: 0px 40px 30px rgba(25, 25, 46, 0.04);
        border-radius: 18px;
        width: 100%;
        margin: 0 auto;
    }

    .first_div {
        display: flex;
        flex-direction: column;
        gap: 0px;
        width: 100%;
        text-align: center;
    }

    .first_div_button {
        width: 100%;
    }

    h1 {
        font-family: nunitoBlack;
        font-weight: 800;
        line-height: 35px;
        letter-spacing: 0.035em;
        text-align: left;
        color: #33357D;
        text-align: center;
        width: 100%;
    }
}
</style>