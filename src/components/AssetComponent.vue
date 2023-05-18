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
            subHeader: "TeddyEd's Asset Management module can help schools manage their assets more efficiently and effectively. ",
            subHeader2: "The asset tracking and checkout features help to ensure that assets are properly accounted for and used for their intended purpose, while the maintenance scheduling feature helps to extend the life of assets and reduce the need for expensive repairs or replacements. The asset reports and depreciation tracking features help schools to plan for asset replacement and budgeting, while the barcode scanning feature helps to streamline asset tracking and management.",
            subHeader3: "Overall, TeddyEd's Asset Management module can help schools to save time and money, while ensuring that their assets are properly managed and maintained.",
            image: require('../assets/student12.svg'),
            items:
                [
                    {
                        link: require('../assets/assets.svg'),
                        headers: "Asset Tracking",
                        message: "TeddyEd's Asset Management module allows schools to track the location, status, and maintenance history of their assets, ensuring that they are always accounted for and properly maintained.",
                    },
                    {
                        link: require('../assets/assets.svg'),
                        headers: "Asset Checkout",
                        message: "TeddyEd's Asset Management module allows schools to check out assets to staff and students, ensuring that assets are being used for their intended purpose and reducing the risk of loss or theft.",
                    },
                    {
                        link: require('../assets/assets.svg'),
                        headers: "Maintenance Scheduling",
                        message: "TeddyEd's Asset Management module includes maintenance scheduling, allowing schools to schedule regular maintenance for their assets and ensuring that they remain in good working order.",
                    },
                    {
                        link: require('../assets/assets.svg'),
                        headers: "Asset Reports",
                        message: "TeddyEd's Asset Management module includes asset reports, allowing schools to generate reports on their assets, such as asset inventory reports and maintenance history reports.",
                    },

                    {
                        link: require('../assets/assets.svg'),
                        headers: "Depreciation Tracking",
                        message: "TeddyEd's Asset Management module allows schools to track the depreciation of their assets over time, helping them to plan for asset replacement and budgeting.",
                    },
                    {
                        link: require('../assets/assets.svg'),
                        headers: "Barcode Scanning",
                        message: "TeddyEd's Asset Management module includes barcode scanning, allowing schools to quickly and easily track and manage their assets using barcode scanners.",
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