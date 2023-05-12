<template>
    <div class="main_container">
        <h3 class="primaryColor">Request Information</h3>
        <div class="input_container">
            <div class="input_div">
                <label for="school_name">School Name</label>
                <input type="text" id="" required v-model="request.school_name" name="school_name" placeholder="">
            </div>
            <div class="input_div">
                <label for="requester_name">Name of Requester</label>
                <input type="text" id="" required v-model="request.name" name="requester_name" placeholder="">
            </div>
            <div class="input_div">
                <label for="school_name">Email</label>
                <input type="email" id="" required v-model="request.email" name="school_name" placeholder="">
            </div>
            <div class="input_div">
                <label for="school_name">Phone Number</label>
                <input type="tel" id="" required v-model="request.phone" name="school_name" placeholder="">
            </div>
            <button @click.prevent="submitForm" class="primaryButton ">Submit</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            request: {
                name: "",
                school_name: "",
                email: "",
                phone: "",
            }
        }

    },
    methods: {
        validateEmail(email) {
            const re =
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))*$/;
            return re.test(email);
        },
        submitForm() {
            if (this.request.school_name === "") {
                this.$toast.error("School name is required");
                return false;
            }
            if (this.request.name === "") {
                this.$toast.error("Please tell us your name");
                return false;
            }
            if (this.request.email === "") {
                this.$toast.error("Please fill your email");
                return false;
            }

            if (this.request.phone === "") {
                this.$toast.error("Please fill your phone number");
                return false
            }
            if (!this.validateEmail(this.request.email)) {
                this.$toast.error("Invalid email address");
                return false;
            }
        },

    }
}
</script>

<style scoped>
.main_container {
    background-color: #F3F6FF;
    width: 100%;
    max-width: 1500px;
    padding: 40px 0;
}

h3 {
    text-align: center;
    font-family: nunitoBlack;
}

.input_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 50%;
    margin: 0 auto;
    padding: 40px 0;
}

input:focus {
    outline: 1px solid #1967D2;
}

input {
    background: transparent;
    border: 1px solid #E4E4E4;
    border-radius: 8px;
    height: 49px;
    padding: 0 10px;
    font-family: nunitoMedium;
}

label {
    font-family: nunitoMedium;
}

.input_div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}

@media screen and (max-width: 1100px) {
    .input_container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 90%;
        margin: 0 auto;
        padding: 40px 0;
    }
}

@media screen and (max-width: 650px) {
    .main_container {
        background: #ffffff;
    }
}
</style>