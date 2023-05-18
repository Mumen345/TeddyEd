<template>
    <div class="content_container">
        <NavBar />
        <div class="what_container">
            <div class="first_div">
                <h1>{{ header }}</h1>
                <p>{{ subHeader }}</p>
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
            header: "Admissions Management",
            subHeader: "TeddyEd's admissions and enrolment management module makes it easy for schools to manage the admissions process. This includes tracking applications, managing interviews, and communicating with prospective students and parents.",
            image: require('../assets/student7.svg'),
            items:
                [
                    {
                        link: require('../assets/Admission.svg'),
                        headers: "Online Application",
                        message: "TeddyEd's admissions module allows schools to create and customize online applications, making it easy for parents and students to join a waitlist and apply for admission to the school.",
                    },
                    {
                        link: require('../assets/Admission.svg'),
                        headers: "Application Tracking",
                        message: "TeddyEd's admissions module also allows schools to track and manage applications in real-time, ensuring that no applications are missed or overlooked.",
                    },
                    {
                        link: require('../assets/Admission.svg'),
                        headers: "Interview Scheduling",
                        message: "TeddyEd's admissions module allows schools to schedule and manage admissions interviews and tests, making it easy to coordinate with parents and students.",
                    },
                    {
                        link: require('../assets/Admission.svg'),
                        headers: "Automated Communications",
                        message: "TeddyEd's admissions module can send automated emails and notifications to parents and students, keeping them informed about the status of their application and the admissions process.",
                    },

                    {
                        link: require('../assets/Admission.svg'),
                        headers: "Admission Decision Management",
                        message: "TeddyEd's admissions module allows schools to manage admission decisions, including acceptances, waitlists, and rejections.",
                    },
                    {
                        link: require('../assets/Admission.svg'),
                        headers: "Enrollment Management",
                        message: "TeddyEd's enrolment module allows schools to manage the enrolment process, including gathering and storing student information, generating enrolment contracts, and tracking student enrolment status.",
                    },
                    {
                        link: require('../assets/Admission.svg'),
                        headers: "Document Management",
                        message: "TeddyEd's enrolment module also allows schools to manage student information and documents, such as medical records and emergency contact information, ensuring that all relevant information is easily accessible and up-to-date.",

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