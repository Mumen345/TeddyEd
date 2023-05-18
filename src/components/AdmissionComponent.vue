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
            header: "Assessment and Report Card Management",
            subHeader: "TeddyEd's Assessment and Report Card Management module can help schools to manage assessments and report cards more efficiently and effectively. The assessment creation and grading features save teachers time and reduce the risk of errors, while the report card generation and customization features ensure that report cards are tailored to the needs of the school. The parent access feature allows parents to stay informed about their child's progress and performance, while the analytics and insights provide valuable data for teachers and administrators to track and improve student performance over time",
            image: require('../assets/student7.svg'),
            items:
                [
                    {
                        link: require('../assets/assessment.svg'),
                        headers: "Assessment Creation",
                        message: "TeddyEd's Assessment and Report Card Management module allows teachers to create assessments, specifying details such as the type of assessment, the date, and the grading scale.",
                    },
                    {
                        link: require('../assets/assessment.svg'),
                        headers: "Assessment Grading",
                        message: "TeddyEd's Assessment and Report Card Management module allows teachers to grade assessments online, saving time and reducing the risk of errors.",
                    },
                    {
                        link: require('../assets/assessment.svg'),
                        headers: "Report Card Generation",
                        message: "TeddyEd's Assessment and Report Card Management module includes a report card generation feature, allowing teachers to create report cards for students based on their assessment results.",
                    },
                    {
                        link: require('../assets/assessment.svg'),
                        headers: "Report Card Templates",
                        message: "TeddyEd's Assessment and Report Card Management module includes report card templates, allowing schools to customize the look and feel of report cards according to their needs.",
                    },

                    {
                        link: require('../assets/assessment.svg'),
                        headers: "Parent Access",
                        message: "TeddyEd's Assessment and Report Card Management module includes parent access, allowing parents to view their child's assessment results and report cards online.",
                    },
                    {
                        link: require('../assets/assessment.svg'),
                        headers: "Analytics and Insights",
                        message: "TeddyEd's Assessment and Report Card Management module includes analytics and insights, allowing schools to track student performance over time and identify trends and patterns.",
                    },
                    {
                        link: require('../assets/assessment.svg'),
                        headers: "Historical Attendance Records",
                        message: "TeddyEd's attendance module stores historical attendance records, allowing schools to track long-term attendance trends and identify areas for improvement.",

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