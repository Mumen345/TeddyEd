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
            header: "Administration Portal",
            subHeader: "TeddyEd's admin portal provides a powerful tool for managing school operations, ensuring that schools can maintain granular control over access and permissions, track and analyze data across different areas of the school, and configure the academic year and class/grade structures according to their specific needs. ",
            subHeader2: "This can help schools to streamline operations, improve efficiency, and enhance overall performance.",
            image: require('../assets/student11.svg'),
            items:
                [
                    {
                        link: require('../assets/admin_portal.svg'),
                        headers: "Centralized Management",
                        message: "The admin portal provides a centralized platform for managing all aspects of school operations, including student information, enrolment, attendance, scheduling, and communication. This helps to improve overall efficiency and streamline administrative tasks such as Class-Teacher assignments.",
                    },
                    {
                        link: require('../assets/admin_portal.svg'),
                        headers: "User-Friendly Interface",
                        message: "TeddyEd's admin portal features a user-friendly interface, making it easy for school administrators and staff to navigate and access the information they need.",
                    },
                    {
                        link: require('../assets/admin_portal.svg'),
                        headers: "Customizable Dashboard",
                        message: "The admin portal features a customizable dashboard, allowing school administrators to tailor the platform to their specific needs and preferences.",
                    },
                    {
                        link: require('../assets/admin_portal.svg'),
                        headers: "Real-Time Data Analysis",
                        message: "TeddyEd's admin portal provides real-time data analysis and reporting, allowing school administrators to track academic progress, identify areas of improvement, and make data-driven decisions.",
                    },

                    {
                        link: require('../assets/admin_portal.svg'),
                        headers: "Communication Management",
                        message: "The admin portal features a comprehensive communication module, allowing school administrators to communicate with parents, students, and staff quickly and easily.",
                    },
                    {
                        link: require('../assets/admin_portal.svg'),
                        headers: "Automated Processes",
                        message: "The admin portal features automated processes for tasks such as attendance tracking, grade calculation, and reporting, helping to save time and improve accuracy.",
                    },
                    {
                        link: require('../assets/admin_portal.svg'),
                        headers: "Secure Access",
                        message: "The admin portal is secure and password-protected, ensuring that sensitive student and school data is protected.",
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
</style>`2qq2q66t