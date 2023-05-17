<template>
    <div class="modules_card_container">
        <div class="modules_div" v-for="item in items" :key="item.id">
            <img :src="item.link" alt="">
            <div class="">
                <h5>{{ item.headers }}</h5>
                <p>{{ item.message }}</p>
                <a :href="item.button">Read More</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModulesCards',
    data() {
        return {
            items:
                [
                    {
                        link: require('../assets/modules/1.svg'),
                        headers: "Attendance Management",
                        message: "TeddyEd makes it easy for schools to track and manage student attendance, tardiness, and...",
                        button: "/modules/attendancemanagement",
                    },
                    {
                        link: require('../assets/modules/2.svg'),
                        headers: "Communication",
                        message: "TeddyEd provides a comprehensive transportation management module, allowing schools to manage...",
                        button: "/modules/communicationsmanagement",
                    },
                    {
                        link: require('../assets/modules/4.svg'),
                        headers: "School Event Management",
                        message: "TeddyEd provides a centralized platform for managing school and class events. This helps schools to...",
                        button: "/modules/schooleventmanagement",
                    },
                    {
                        link: require('../assets/modules/3.svg'),
                        headers: "Administration Portal",
                        message: "TeddyEd provides a comprehensive communications module, allowing schools to...",
                        button: "/modules/administrationportalmanagement",
                    },

                    {
                        link: require('../assets/modules/5.svg'),
                        headers: "Transportation Management",
                        message: "TeddyEd's admin portal provides a powerful tool for managing school operations, ensuring...",
                        button: "/modules/transportmanagement",
                    },
                    {
                        link: require('../assets/modules/6.svg'),
                        headers: "Asset Management",
                        message: "TeddyEd's easy-to-use newsletter creation tool allows schools to create and distribute ...",
                        button: "/modules/assetmanagement",
                    },
                    {
                        link: require('../assets/modules/7.svg'),
                        headers: "Admissions Management",
                        message: "TeddyEd's admissions and enrolment management module makes it easy for schools to...",
                        button: "/modules/assessmentmanagement",

                    },

                    {
                        link: require('../assets/modules/8.svg'),
                        headers: "Newsletter Management",
                        message: "TeddyEd's asset management module helps schools to track and manage their...",
                        button: "/modules/newslettermanagement",
                    },


                    {
                        link: require('../assets/modules/9.svg'),
                        headers: "Assessment and Report Card Management",
                        message: "TeddyEd's Assessment and Report Card Management module is designed to help...",
                        button: "/modules/transportmanagement",

                    },
                    {
                        link: require('../assets/modules/10.svg'),
                        headers: "Financial Management",
                        message: "TeddyEd simplifies the financial management process by providing schools with...",
                        button: "/modules/financialmanagement",

                    },

                ]

        }
    },
}
</script>

<style scoped>
.modules_div:nth-child(even) a {
    color: #ffffff;
    background-color: #33357d;
    padding: 10px 20px;
    border-radius: 5px;
}

.modules_div:nth-child(even) {
    display: flex;
    align-items: flex-start;
    justify-content: start;
    width: 600px;
    gap: 30px;
    background-color: #F3F6FF;
    padding: 25px 30px;
    border-radius: 15px;

    /* border: 1px solid #E4E4E4; */
    height: auto;
    color: #404040;
}

.modules_div a {
    color: #33357d;
    background-color: #ffffff;
    padding: 10px 20px;
    border-radius: 5px;
}

.modules_div {
    display: flex;
    align-items: flex-start;
    justify-content: start;
    width: 600px;
    background-color: #33357d;
    gap: 30px;
    padding: 20px;
    padding: 25px 30px;
    border-radius: 15px;
    height: auto;
    color: #ffffff;
}

.modules_card_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    width: 80%;
    margin: 0 auto;
}

h5 {
    font-size: 20px;
    line-height: 21px;
    font-family: nunitoBlack;
}

p {
    font-size: 15px;
    line-height: 34px;
    font-family: nunitoMedium;
    margin-top: 20px;
}

@media screen and (max-width: 1525px) {
    .modules_div:nth-child(even) {
        display: flex;
        align-items: flex-start;
        justify-content: start;
        width: 500px;
    }

    .modules_div {
        display: flex;
        align-items: flex-start;
        justify-content: start;
        width: 500px;
        background-color: #33357d;
        gap: 30px;
        padding: 20px;
        padding: 25px 30px;
        border-radius: 15px;
        height: auto;
        color: #ffffff;
    }

    .modules_card_container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 20px;
        width: 90% !important;
        margin: 0 auto;
    }
}

@media screen and (max-width: 1135px) {
    .modules_div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: start;
        width: 100%;
        background-color: #33357d;
        gap: 30px;
        padding: 20px;
        padding: 25px 30px;
        border-radius: 15px;
        height: auto;
        color: #ffffff;
    }

    .modules_div:nth-child(even) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: start;
        width: 100%;
        gap: 30px;
        padding: 20px;
        padding: 25px 30px;
        border-radius: 15px;
        height: auto;
    }

    .modules_card_container {
        display: flex;
        justify-content: center;
        /* flex-wrap: wrap; */
        gap: 20px;
        width: 90% !important;
        margin: 0 auto;
    }
}
</style>