<template>
    <div>
        <div class="Faq_container">
            <NavBar />
        </div>
        <div class="move_down">
            <FaqComponent />
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import FaqComponent from '@/components/FaqComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import NavBar from '@/components/NavBar.vue'
export default {
    name: "FaqPage",
    components: {
        NavBar,
        FaqComponent,
        FooterComponent
    },
    methods: {
        validateEmail(email) {
            const re =
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))*$/;
            return re.test(email);
        },
        submitForm() {
            if (this.email === "") {
                this.$toasted.error("Please fill your email");
                return false;
            }
            if (!this.validateEmail(this.email)) {
                this.$toasted.error("Invalid email address");
                return false;
            }
        }
    }
}
</script>

<style scoped>
.Faq_container {
    display: flex;
    justify-content: center;
    margin: 0 auto -4rem;
    max-width: 1500px;
}

.move_down {
    margin-top: 7rem;
}
</style>