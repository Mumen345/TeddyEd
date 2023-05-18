<template>
    <div class="overview_container">
        <h1 class="">Overview</h1>
        <p class="primaryColor">TeddyEd is a single repository for student, teaching and administrative staff data that can
            be accessed by
            teachers, administrators, registrars and accountants. With this data and all TeddyEd configurations, you can
            manage class attendance, school trips & events, busing, and more.
        </p>
        <br>
        <p>

            Too many schools experience a hassle with routine peripheral administrative tasks which takes away the focus on
            educating the child, who is an integral part of any society aiming to have a successful economy.
            Every school will need to ensure efficiency and effectiveness in its administrative operations on a daily basis
            so that there is a greater intention to have more time spent in the daily learning experience.
        </p>
        <br>
        <p>

            TeddyEd is an easy-to-use intuitive software that helps any school management manage its peripheral services and
            operations. Our solution manages student admissions and enrolment with online application forms, demographics,
            attendance, scheduling, busing, event management, library system, grade book, report cards and transcripts, and
            parent and student portals with a powerful communication suite.
        </p>
    </div>
</template>

<script>
export default {
    name: "OverView",
}
</script>

<style scoped>
.overview_container {
    width: 100%;
    max-width: 1500px;
    margin: 3rem auto;
}

.overview_container h1 {
    /* text-align: center; */
    width: 75%;
    margin: 0 auto;
}

.overview_container p {
    width: 75%;
    margin-top: 3rem;
    font-size: 16px;
    line-height: 261.9%;
    color: #33357D;
    margin: 0 auto;
}

h1 {
    font-family: nunitoBlack;
    font-weight: 800;
    line-height: 65px;
    text-align: left;
    color: #33357D;

}

@media screen and (max-width: 960px) {
    .overview_container p {
        margin-top: 3rem;
        font-size: 14px;
        line-height: 261.9%;
        color: #33357D;
        width: 85%;
        margin: 0 auto;
    }

    .overview_container h1 {
        text-align: center;
        width: 100%;
        margin: 0 auto;
    }
}
</style>