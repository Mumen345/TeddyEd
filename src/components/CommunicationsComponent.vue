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
            header: "Communications",
            subHeader: "TeddyEd's Communications Management module can help schools improve communication with parents, students, and staff, ensuring that important information is delivered in a timely and effective manner.",
            subHeader2: "The messaging and announcement creation features make it easy for schools to send messages to specific groups of recipients, while the multi-channel communication ensures that messages are delivered via the most convenient channel for each recipient. The automated reminders feature helps to ensure that important information is not missed, while the parent-teacher conference scheduling feature makes it easy for parents to schedule appointments with teachers.",
            subHeader3: "Finally, the real-time translation feature ensures that all recipients can understand and engage with messages, regardless of their language proficiency.",
            image: require('../assets/student10.svg'),
            items:
                [
                    {
                        link: require('../assets/commnunications.svg'),
                        headers: "Messaging",
                        message: "TeddyEd's Communications Management module allows schools to send messages to parents, students, and staff, either individually or in bulk. Schools can also create message templates for frequently used messages.",
                    },
                    {
                        link: require('../assets/commnunications.svg'),
                        headers: "Announcement Creation",
                        message: "TeddyEd's Communications Management module allows schools to create announcements, specifying details such as the date, time, and audience for the announcement.",
                    },
                    {
                        link: require('../assets/commnunications.svg'),
                        headers: "Multi-Channel Communication",
                        message: "TeddyEd's Communications Management module includes multi-channel communication, allowing schools to send messages via email, SMS, and push notifications, ensuring that messages reach recipients wherever they are.",
                    },
                    {
                        link: require('../assets/commnunications.svg'),
                        headers: "Automated Reminders",
                        message: "TeddyEd's Communications Management module includes automated reminders, allowing schools to send reminders for events, deadlines, and other important information.",
                    },

                    {
                        link: require('../assets/commnunications.svg'),
                        headers: "Parent-Teacher Conferences",
                        message: "TeddyEd's Communications Management module includes a parent-teacher conference scheduling feature, allowing parents to schedule appointments with teachers online.",
                    },
                    {
                        link: require('../assets/commnunications.svg'),
                        headers: "Real-Time Translation",
                        message: "TeddyEd's Communications Management module includes real-time translation, allowing messages to be translated into multiple languages in real-time, ensuring that all recipients can understand and engage with the messages.",
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