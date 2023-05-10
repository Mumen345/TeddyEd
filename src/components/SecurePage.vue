<template>
    <div>
        <div class="Secure_container">
            <NavBar />
        </div>
        <div class="main_container">
            <h3 class="primaryColor">Onboarding Requirements</h3>
            <div v-show="showDiv" class="input_container">
                <div class="input_div">
                    <label for="school_name">School Name</label>
                    <input type="text" id="" required v-model="details.school_name" name="" placeholder="">
                </div>
                <div class="input_div">
                    <label for="school_name">School Email</label>
                    <input type="email" id="" required v-model="details.school_email" name="" placeholder="">
                </div>
                <div class="input_section">
                    <div class="section_conntainer">
                        <div class="input_div">
                            <label for="school_name">Primary Contact</label>
                            <input type="text" id="" required v-model="details.contact_name" name="">
                        </div>
                        <div class="input_div">
                            <label for="school_name">Email</label>
                            <input type="email" id="" required v-model="details.contact_email" name="" placeholder="">
                        </div>
                    </div>
                    <div class="section_conntainer">
                        <div class="input_div">
                            <label for="school_name">Phone</label>
                            <input type="number" id="" required v-model="details.contact_phone" name="" placeholder="">
                        </div>
                        <div class="input_div">
                            <label for="ddv">Role</label>
                            <select v-model="details.contact_role" name="ddv" id="ddv">
                                <option value="owner">Owner</option>
                                <option value="principal">Principal</option>
                                <option value="administrator">Administrator</option>
                                <option value="finance_manager">Finance Manager</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="input_section">
                    <div class="section_conntainer">
                        <div class="input_div">
                            <label for="school_name">Billing Contact</label>
                            <input type="text" id="" required v-model="details.billing_name" name="">
                        </div>
                        <div class="input_div">
                            <label for="school_name">Billing Email</label>
                            <input type="email" id="" required v-model="details.billing_email" name="" placeholder="">
                        </div>
                    </div>
                    <div class="section_conntainer">
                        <div class="input_div">
                            <label for="school_name">Phone</label>
                            <input type="number" id="" required v-model="details.billing_phone" name="" placeholder="">
                        </div>
                        <div class="input_div">
                            <label for="ddv">Role</label>
                            <select v-model="details.billing_role" name="ddv" id="ddv">
                                <option value="owner">Owner</option>
                                <option value="principal">Principal</option>
                                <option value="administrator">Administrator</option>
                                <option value="finance_manager">Finance Manager</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button @click.prevent="nextStep" class="primaryButton ">Next</button>
            </div>
            <div class="input_container" v-if="showDiv2">
                dgndfsg vm n
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
    components: { NavBar },
    data() {
        return {
            details: {
                school_name: "",
                school_email: "",
                contact_name: "",
                contact_email: "",
                contact_phone: "",
                contact_role: "",
                billing_name: "",
                billing_email: "",
                billing_role: "",
                billing_phone: "",
            },
            showDiv: true,
            showDiv2: false
        }

    },
    methods: {
        validateEmail(email) {
            const re =
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))*$/;
            return re.test(email);
        },
        nextStep() {
            this.showDiv = false;
            this.showDiv2 = true;
            console.log(this.step)

            // if (this.details.school_name === "") {
            //     alert("School name is required");
            //     return false;
            // }
            // if (this.details.school_email === "") {
            //     alert("Please Fill school email");
            //     return false;
            // }
            // if (!this.validateEmail(this.details.school_email)) {
            //     alert("Invalid School email");
            //     return false;
            // }
            // if (this.details.contact_name === "") {
            //     alert("Please Primary Contact Name");
            //     return false;
            // }
            // if (!this.validateEmail(this.details.contact_email)) {
            //     alert("Invalid Contact email");
            //     return false;
            // }
            // if (this.details.contact_phone === "") {
            //     alert("Billing Phone Number required");
            //     return false;
            // }
            // if (this.details.contact_role === "") {
            //     alert("Billing contact role required");
            //     return false;
            // }
            // if (this.details.billing_name === "") {
            //     alert("Billing contact role required");
            //     return false;
            // }
            // if (this.details.billing_name === "") {
            //     alert("Billing contact role required");
            //     return false;
            // }

            // if (!this.validateEmail(this.details.billing_email)) {
            //     alert("Invalid Billing email");
            //     return false;
            // }
            // if (this.details.billing_role === "") {
            //     alert("Billing role required");
            //     return false;
            // }
            // if (this.details.billing_phone === "") {
            //     alert("Billing role required");
            //     return false;
            // }
        },

    }
}
</script>

<style scoped>
.Secure_container {
    display: flex;
    justify-content: center;
}

h3 {
    text-align: center;
    font-family: nunitoBlack;
}

.main_container {
    margin-top: 3rem;
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

select:focus {
    outline: 1px solid #1967D2;
}

input {
    background: transparent;
    border: 1px solid #E4E4E4;
    border-radius: 8px;
    height: 49px;
    padding: 0 10px;
    font-family: nunitoMedium;
    width: 100%;
    font-size: 13px;
}

select {
    background: transparent;
    border: 1px solid #E4E4E4;
    border-radius: 8px;
    height: 49px;
    padding: 0 10px;
    font-family: nunitoMedium;
    width: 100%;
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

.input_section {
    border: 1px solid #E4E4E4;
    background-color: #f9f9f9;
    border-radius: 8px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 23px 33px;
    gap: 30px;
}

.section_conntainer {
    width: 100%;
    display: flex;
    gap: 30px;
    flex-direction: column;
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

    .input_section {
        border: 1px solid #E4E4E4;
        background-color: #ffffff;
        border-radius: 8px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 23px;
        gap: 30px;
    }
}
</style>