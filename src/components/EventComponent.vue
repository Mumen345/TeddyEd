<template>
    <div class="content_container">
        <NavBar />
        <div class="what_container">
            <div class="first_div">
                <h1>{{ header }}</h1>
                <p>{{ subHeader }} <br> <span>{{ subHeader2 }}</span></p>
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
            header: "School Event Management",
            subHeader: "TeddyEd's school events management module is designed to help schools plan, organize, and promote school events.",
            subHeader2: "This module can help schools to plan, organize, and promote engaging and successful events that build community and raise funds. The event registration and ticketing features make it easy for parents, students, and staff to sign up for events and purchase tickets online, while the communication feature ensures that attendees are kept informed and up-to-date on event details. The fundraising feature allows schools to generate revenue from events and provide an engaging way for attendees to support the school.",
            subHeader3: "Finally, the performance analytics provide valuable insights into event attendance and effectiveness, allowing schools to refine their event planning and execution in the future.",
            image: require('../assets/student4.svg'),
            items:
                [
                    {
                        link: require('../assets/Events.svg'),
                        headers: "Event Creation",
                        message: "TeddyEd's school events management module allows schools to create events, specifying details such as the date, time, attendees, location, and type of event.",
                    },
                    {
                        link: require('../assets/Events.svg'),
                        headers: "Event Registration",
                        message: "TeddyEd's school events management module includes a customizable event registration feature, allowing parents, students, and staff to register for events online and the school can collect important information such as names, contact information, and areas of interest.",
                    },
                    {
                        link: require('../assets/Events.svg'),
                        headers: "Ticketing",
                        message: "TeddyEd's school events management module includes a ticketing feature, allowing schools to sell tickets for events online, and to manage ticket sales, inventory, and pricing.",
                    },
                    {
                        link: require('../assets/Events.svg'),
                        headers: "Communication",
                        message: "TeddyEd's school events management module includes a communication feature, allowing schools to send reminders and updates to attendees before and after events, including sending reminder emails, follow-up emails, and thank-you messages.",
                    },

                    {
                        link: require('../assets/Events.svg'),
                        headers: "Fundraising",
                        message: "TeddyEd's school events management module includes a fundraising feature, allowing schools to solicit donations or sell merchandise to raise funds for school events.",
                    },
                    {
                        link: require('../assets/Events.svg'),
                        headers: "Open House/School Tours",
                        message: "The ability to schedule and manage open house and school tour events of the school , including setting dates, times, and locations, and managing attendee registration and RSVPs., allowing attendees to see different areas of the campus and learn more about the school's programs and facilities. ",
                    },
                    {
                        link: require('../assets/Events.svg'),
                        headers: "Performance Analytics",
                        message: "TeddyEd's school events management module includes performance analytics, allowing schools to track attendance and other metrics to measure the success of events.",

                    },
                    {
                        link: require('../assets/Events.svg'),
                        headers: "Integration with Other Modules",
                        message: "Integration with other modules such as Admissions Management, allowing schools to seamlessly move attendees from open house events to the admissions process.",

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