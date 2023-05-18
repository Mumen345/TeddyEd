<template>
    <div class="content_container">
        <NavBar />
        <div class="what_container">
            <div class="first_div">
                <h1>{{ header }}</h1>
                <p>{{ subHeader }}</p>
                <p>{{ subHeader2 }}</p>
                <p>{{ subHeader3 }}</p>
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
            header: "Newsletter Management",
            subHeader: "TeddyEd's newsletter management module can help schools create engaging newsletters that keep parents, students, and staff informed about important news, events, and updates.",
            subHeader2: "The drag-and-drop editor, customizable templates, and content library make it easy to create professional-looking newsletters without any design or coding skills, while the scheduling and distribution features ensure that newsletters are delivered to the right people at the right time.",
            subHeader3: "The performance analytics provide valuable insights into the effectiveness of the newsletters, allowing schools to refine their strategy and improve engagement with their audience.",
            image: require('../assets/student8.svg'),
            items:
                [
                    {
                        link: require('../assets/Events.svg'),
                        headers: "Customizable Templates",
                        message: "TeddyEd's newsletter management module provides customizable templates, allowing schools to create newsletters that match their brand and style.",
                    },
                    {
                        link: require('../assets/Events.svg'),
                        headers: "Drag-and-Drop Editor",
                        message: "TeddyEd's newsletter management module features a drag-and-drop editor, making it easy to create and format newsletters without any coding knowledge.",
                    },
                    {
                        link: require('../assets/Events.svg'),
                        headers: "Content Library",
                        message: "TeddyEd's newsletter management module includes a content library, allowing schools to store and reuse content such as articles, images, and videos.",
                    },
                    {
                        link: require('../assets/Events.svg'),
                        headers: "Scheduling and Distribution",
                        message: "TeddyEd's newsletter management module allows schools to schedule newsletters for distribution at a specific time and date, and to select specific recipients such as parents, students, or staff.",
                    },

                    {
                        link: require('../assets/Events.svg'),
                        headers: "Performance Analytics",
                        message: "TeddyEd's newsletter management module includes performance analytics, allowing schools to track open rates, click-through rates, and other metrics to measure the effectiveness of their newsletters.",
                    },
                    {
                        link: require('../assets/Events.svg'),
                        headers: "Mobile-Friendly",
                        message: "TeddyEd's newsletter management module is mobile-friendly, ensuring that newsletters can be easily read and accessed on smartphones and tablets.",
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
    gap: 5px;
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