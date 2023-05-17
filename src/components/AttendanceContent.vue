<template>
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
</template>

<script>
export default {
    data() {
        return {
            header: "Attendance Management",
            subHeader: "Attendance management is a crucial aspect of school operations, and TeddyEd's school management system offers a range of key features to track, simplify and streamline attendance, tardiness, and early dismissals. This customizable module also helps with tracking teacher assignments, checking uniform compliance, and other policy  checks helping schools to improve attendance reporting, automate communication with parents and guardians, and identify and address attendance issues in a timely and effective manner.",
            image: require('../assets/student2.svg'),
            items:
                [
                    {
                        link: require('../assets/Attendance.svg'),
                        headers: "Automated Attendance Tracking",
                        message: "TeddyEd's attendance module allows schools to track attendance automatically, making it easy to identify patterns of absenteeism and tardiness.",
                    },
                    {
                        link: require('../assets/Attendance.svg'),
                        headers: "Real-Time Attendance Reporting",
                        message: "TeddyEd's attendance module provides real-time reporting, allowing schools to quickly and easily identify attendance trends and issues.",
                    },
                    {
                        link: require('../assets/Attendance.svg'),
                        headers: "Customizable Attendance Policies",
                        message: "TeddyEd's attendance module allows schools to customize attendance policies, including defining attendance codes, setting attendance thresholds, and creating rules for excused absences.",
                    },
                    {
                        link: require('../assets/Attendance.svg'),
                        headers: "Parental Notifications & Communications",
                        message: "TeddyEd's attendance module can send automated notifications to parents and guardians regarding their child's attendance, helping to keep them informed and engaged.",
                    },

                    {
                        link: require('../assets/Attendance.svg'),
                        headers: "Staff Attendance Management",
                        message: "TeddyEd's attendance module also allows schools to manage staff attendance, including tracking sick days and vacation time.",
                    },
                    {
                        link: require('../assets/Attendance.svg'),
                        headers: "Mobile App Integration",
                        message: "TeddyEd's attendance module can be integrated with a mobile app, allowing parents and guardians to report absences and tardiness directly from their mobile devices.",
                    },
                    {
                        link: require('../assets/Attendance.svg'),
                        headers: "Historical Attendance Records",
                        message: "TeddyEd's attendance module stores historical attendance records, allowing schools to track long-term attendance trends and identify areas for improvement.",

                    },

                ]

        }
    },
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
    line-height: 35px;
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
        text-align: center;
    }
}
</style>