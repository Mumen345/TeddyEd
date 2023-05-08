<template>
    <div class="what_container">
        <div class="first_div">
            <h1>What is TeddyEd</h1>
            <p>TeddyEd helps automate routine tasks, and ensure time efficiency and error-free processes with TeddyEd to
                manage an entire school’s operations, including portals for student details and school information while
                easing the current administrative load on administrators, teachers and staff.</p>
            <img src="../assets/student.svg" alt="people svg" srcset="">
            <button @click.prevent="go" class="primaryButton first_div_button">Request Information</button>
        </div>
        <div class="card_container">
            <div class="card">
                <img src="../assets/Innovative.svg" alt="">
                <div>
                    <h6>Innovative</h6>
                    <p class="">TeddyEd is an innovative and comprehensive school management system designed to streamline
                        administrative and operational tasks within a school environment.</p>
                </div>
            </div>
            <div class="card">
                <img src="../assets/userfriendly.svg" alt="">
                <div>
                    <h6>User Friendly</h6>
                    <p class="">TeddyEd's user-friendly interface and intuitive features make it easy for school
                        administrators, teachers, and staff to manage student information, attendance, scheduling, grading,
                        and communication.</p>
                </div>
            </div>
            <div class="card">
                <img src="../assets/realtime.svg" alt="">
                <div>
                    <h6>Real-Time Analytics</h6>
                    <p class="">TeddyEd's real-time data analysis and reporting capabilities allow schools to identify and
                        address student needs, monitor academic progress, and make data-driven decisions.</p>
                </div>
            </div>
            <div class="card">
                <img src="../assets/customizable.svg" alt="">
                <div>
                    <h6>Customizable</h6>
                    <p class="">TeddyEd's customizable modules can be tailored to meet the specific needs of each school,
                        ensuring that the system is tailored to the unique requirements of each educational institution.</p>
                </div>
            </div>
            <div class="card">
                <img src="../assets/affordable.svg" alt="">
                <div>
                    <h6>Affordable</h6>
                    <p class="">TeddyEd's affordable pricing and flexible payment plans make it accessible to schools of
                        all sizes and budgets.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
    font-size: 14px;
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
    line-height: 65px;
    letter-spacing: 0.035em;
    text-align: left;
    color: #33357D;
}

.card p {
    font-size: 11.8989px;
    line-height: 26px;
    font-family: nunitoSemibold;
}

.card h6 {
    font-size: 15.2986px;
    line-height: 21px;
    font-family: nunitoBlack;
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
    width: 400px;
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
        background: #F3F6FF;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 33px;
        gap: 40px;
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
        width: 100%;
        margin: 0 auto;
    }

    .first_div {
        display: flex;
        flex-direction: column;
        gap: 0px;
        width: 100%;
    }

    .first_div_button {
        width: 100%;
    }

    h1 {
        text-align: center;
    }
}
</style>