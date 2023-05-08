<template>
    <div v-motion-pop-visible-once :delay="200" class="modules_card_container">
        <div class="modules_div" v-for="item in items" :key="item.id">
            <img :src="item.link" alt="">
            <div class="">
                <h5>{{ item.headers }}</h5>
                <p>{{ item.message }}</p>
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
                        link: require('@/assets/Attendance.svg'),
                        headers: "Attendance Management",
                        message: 'TeddyEd makes it easy for schools to track and manage student attendance, tardiness, and early dismissals. This helps to ensure that students are present and engaged in their education, and helps schools maintain accurate records',
                    },
                    {
                        link: require('@/assets/Admission.svg'),
                        headers: "Administration Portal",
                        message: "TeddyEd's admin portal provides a powerful tool for managing school operations, ensuring that schools can maintain granular control over access and permissions, track and analyze data across different areas of the school, and configure the academic year and class/grade structures according to their specific needs.This can help schools to streamline operations, improve efficiency, and enhance overall performance."
                    },
                    {
                        link: require('@/assets/admin_portal.svg'),
                        headers: "School Event Management",
                        message: "TeddyEd provides a centralized platform for managing school and class events. This helps schools to streamline the planning process, and ensures that all stakeholders are informed about upcoming events."
                    },
                    {
                        link: require('@/assets/transportation.svg'),
                        headers: "Transportation Management",
                        message: "TeddyEd provides a comprehensive transportation management module, allowing schools to manage their fleet, drivers, and routes. This helps to ensure the safety and efficiency of student transportation, and provides parents with real-time information about their child's transportation.Route Planning and Scheduling: TeddyEd's transportation module allows schools to plan and schedule transportation routes for students, including pickup and drop-off times, locations, and bus numbers."
                    },
                    {
                        link: require('@/assets/commnunications.svg'),
                        headers: "Communication",
                        message: "TeddyEd provides a comprehensive communications module, allowing schools to communicate with parents, students, and staff quickly and easily. This includes email, SMS, and in-app messaging."
                    },
                    {
                        link: require('@/assets/newsletter.svg'),
                        headers: "Newsletter Management",
                        message: "TeddyEd's easy-to-use newsletter creation tool allows schools to create and distribute newsletters quickly and efficiently. This helps schools to keep parents and stakeholders informed about important school news and events."
                    },
                    {
                        link: require('@/assets/assessment.svg'),
                        headers: "Assessment and Report Card Management",
                        message: "TeddyEd's Assessment and Report Card Management module is designed to help schools manage student assessments and report cards."
                    },
                    {
                        link: require('@/assets/assets.svg'),
                        headers: "Asset Management",
                        message: "TeddyEd simplifies the financial management process by providing schools with an easy-to-use platform for managing budgets, fees, and payments. This allows schools to easily track and manage their finances, and provides transparency for parents and stakeholders."
                    },
                    {
                        link: require('@/assets/transportation.svg'),
                        headers: "Transportation Management",
                        message: "TeddyEd provides a comprehensive transportation management module, allowing schools to manage their fleet, drivers, and routes. This helps to ensure the safety and efficiency of student transportation, and provides parents with real-time information about their child's transportation. Route Planning and Scheduling: TeddyEd's transportation module allows schools to plan and schedule transportation routes for students, including pickup and drop-off times, locations, and bus numbers."
                    },
                    {
                        link: require('@/assets/finance.svg'),
                        headers: "Financial Management",
                        message: "TeddyEd simplifies the financial management process by providing schools with an easy-to-use platform for managing budgets, fees, and payments. This allows schools to easily track and manage their finances, and provides transparency for parents and stakeholders."
                    },

                ]

        }
    },
}
</script>

<style scoped>
.modules_div {
    display: flex;
    align-items: flex-start;
    justify-content: start;
    width: 600px;
    gap: 30px;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 15px;
    border: 1px solid #E4E4E4;
    height: auto;
}

.modules_card_container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    width: 80%;
    margin: 0 auto;
}

h5 {
    font-size: 18px;
    line-height: 21px;
    font-family: nunitoBlack;
}

p {
    font-size: 14px;
    line-height: 26px;
    font-family: nunitoMedium;
}

@media screen and (max-width: 1525px) {
    .modules_div {
        display: flex;
        align-items: flex-start;
        justify-content: start;
        width: 450px;
        gap: 30px;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 15px;
        border: 1px solid #E4E4E4;
        height: auto;
    }

    .modules_card_container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        width: 90%;
        margin: 0 auto;
    }
}

@media screen and (max-width: 940px) {
    .modules_div {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: start;
        gap: 30px;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 15px;
        border: 1px solid #E4E4E4;
        height: auto;
    }
}
</style>