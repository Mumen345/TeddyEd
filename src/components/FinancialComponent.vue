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
            header: "Financial Management",
            subHeader: "TeddyEd's Financial Management module can help schools manage their finances more efficiently and effectively. ",
            subHeader2: "The accounts payable and receivable features help to ensure that payments are made and received on time, while the budget planning and management tools help schools to allocate resources effectively. The expense tracking and financial reporting features help schools to monitor their financial performance and make informed decisions, while the online payment processing feature reduces administrative burden and improves convenience for parents. Finally, the audit trails and permissions feature helps to ensure that financial transactions are tracked and controlled, reducing the risk of fraud or errors.",
            subHeader3: "Overall, TeddyEd's Financial Management module can help schools to save time and money, while ensuring that their finances are properly managed and controlled.",
            image: require('../assets/student13.svg'),
            items:
                [
                    {
                        link: require('../assets/finance.svg'),
                        headers: "Accounts Payable and Receivable",
                        message: "TeddyEd's Financial Management module allows schools to manage their accounts payable and receivable, including invoicing, payment tracking, and account reconciliation.",
                    },
                    {
                        link: require('../assets/finance.svg'),
                        headers: "Budget Planning and Management",
                        message: "TeddyEd's Financial Management module includes budget planning and management tools, allowing schools to create and manage budgets for different departments and activities.",
                    },
                    {
                        link: require('../assets/finance.svg'),
                        headers: "Expense Tracking",
                        message: "TeddyEd's Financial Management module allows schools to track their expenses, including the cost of supplies, equipment, and services.",
                    },
                    {
                        link: require('../assets/finance.svg'),
                        headers: "Financial Reporting",
                        message: "TeddyEd's Financial Management module includes financial reporting tools, allowing schools to generate reports on their financial performance, such as income statements and balance sheets.",
                    },

                    {
                        link: require('../assets/finance.svg'),
                        headers: "Online Payment Processing",
                        message: "TeddyEd's Financial Management module includes online payment processing, allowing parents to pay tuition fees and other school-related expenses online, reducing administrative burden and improving convenience.",
                    },
                    {
                        link: require('../assets/finance.svg'),
                        headers: "Audit Trails and Permissions",
                        message: "TeddyEd's Financial Management module includes audit trails and permissions, allowing schools to track financial transactions and control who has access to financial data.",
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