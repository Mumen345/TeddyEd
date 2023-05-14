<template>
    <div>
        <div class="Secure_container">
            <NavBar />
        </div>
        <div class="main_container">
            <h3 class="primaryColor">Onboarding Requirements</h3>
            <div v-if="showDiv" class="input_container">
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
                <div class="side_by_side">
                    <div class="input_div">
                        <label for="school_name">Phone 1</label>
                        <input type="number" id="" required v-model="details.phone_one" name="" placeholder="">
                    </div>
                    <div class="input_div">
                        <label for="school_name">Phone 2</label>
                        <input type="number" id="" required v-model="details.phone_two" name="" placeholder="">
                    </div>
                </div>
                <div class="side_by_side">
                    <div class="input_div">
                        <label for="school_name">City</label>
                        <input type="text" id="" required v-model="details.city" name="" placeholder="">
                    </div>
                    <div class="input_div">
                        <label for="school_name">Zipcode</label>
                        <input type="number" id="" required v-model="details.zipcode" name="" placeholder="">
                    </div>
                </div>
                <div class="side_by_side">
                    <div class="input_div">
                        <label for="school_name">Address</label>
                        <input type="text" id="" required v-model="details.address" name="" placeholder="">
                    </div>
                    <div class="input_div">
                        <label for="school_name">Website</label>
                        <input type="text" id="" required v-model="details.website" name="" placeholder="">
                    </div>

                </div>
                <div class="side_by_side">
                    <div class="input_div">
                        <label for="dv"> Language Preference 1</label>
                        <select v-model="details.language_1" name="dv" id="">
                            <option selected value="english">English</option>
                            <option value="french">French</option>
                        </select>
                    </div>
                    <div class="input_div">
                        <label for="v"> Language Preference 2</label>
                        <select v-model="details.language_2" name="v" id="">
                            <option selected value="english">English</option>
                            <option value="french">French</option>
                        </select>
                    </div>

                </div>
                <div class="btn_div">
                    <button @click.prevent="prevStep" class="secondaryButton ">Prev</button>
                    <button @click.prevent="stepTwo" class="primaryButton ">Next</button>
                </div>
            </div>
            <div class="input_container_last" v-if="showDiv3">
                <div class="input_div">
                    <label>Module of Interest</label>
                    <div class="check_box_div">
                        <input type="checkbox" id="jack" value="attendance" v-model="details.checkedNames">
                        <label for="jack">Attendance</label>

                        <input type="checkbox" id="transport" value="transportation" v-model="details.checkedNames">
                        <label for="transport">Transportation</label>

                        <input type="checkbox" id="records" value="school records" v-model="details.checkedNames">
                        <label for="records">School Records</label>

                        <input type="checkbox" id="scheduling" value="scheduling" v-model="details.checkedNames">
                        <label for="scheduling">Scheduling</label>
                    </div>
                </div>
                <div class="side_by_side">
                    <div class="input_div">
                        <label for="school_name">Number of staff</label>
                        <input type="number" id="" required v-model="details.staff_number" name="" placeholder="">
                    </div>
                    <div class="input_div">
                        <label for="school_name">Number of students</label>
                        <input type="number" id="" required v-model="details.students_number" name="" placeholder="">
                    </div>
                </div>
                <div class="input_div">
                    <label>What type of staff group does your school have</label>
                    <div class="check_box_div">
                        <input type="checkbox" id="attendance" value="attendance" v-model="details.groups">
                        <label for="attendance">Attendance</label>

                        <input type="checkbox" id="administrative" value="administrative" v-model="details.groups">
                        <label for="administrative">Administrative</label>

                        <input type="checkbox" id="operations" value="operations" v-model="details.groups">
                        <label for="operations">Operations</label>
                    </div>
                </div>
                <div class="side_by_side">
                    <div class="input_div">
                        <label for="school_name">TeddyEd skin (color preference)</label>
                        <div class="check_box_div">
                            <select v-model="details.skin" name="ddv" id="ddv">
                                <option value="Color 1">Color 1</option>
                                <option value="Color 2">Color 2</option>
                                <option value="Color 3">Color 3</option>
                                <option value="Color 4">Color 4</option>
                            </select>
                        </div>
                    </div>
                    <div class="input_div">
                        <label for="school_name">Number of Classes</label>
                        <input type="number" id="" required v-model="details.class_number" name="" placeholder="">
                    </div>
                </div>
                <div class="input_div">
                    <label>School Type</label>
                    <div class="check_box_div">
                        <input type="checkbox" id="day_care" value="child care center" v-model="details.school_type">
                        <label for="day_care">Child care center</label>

                        <input type="checkbox" id="elementary" value="elementary" v-model="details.school_type">
                        <label for="elementary">Elementary</label>

                        <input type="checkbox" id="middle_school" value="middle school" v-model="details.school_type">
                        <label for="middle_school">Middle school</label>

                        <input type="checkbox" id="high_school" value="high school" v-model="details.school_type">
                        <label for="high_school">High school</label>
                    </div>
                </div>

                <label for="day_care">Upload Logo</label>
                <label for="images" class="drop-container">
                    <span class="drop-title">Drop files here</span>
                    or
                    <input type="file" id="images" @change="handleFileUpload" accept="image/*" required>
                </label>
                <div class="btn_div">
                    <button @click.prevent="prevStep2" class="secondaryButton ">Prev</button>
                    <button @click.prevent="stepThree" class="primaryButton ">Next</button>
                </div>
            </div>
            <div class="success_container" v-if="showDiv4">
                <h3 class="primaryColor">Thank You</h3>
                <img src="../assets/OBJECTS.svg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur. Velit facilisi enim rutrum integer urna eu. Nunc lectus amet sit
                    aliquet eros sit. Eget vitae est ut eget in tempor imperdiet nisl.</p>
                <button class="primaryButton">Go home</button>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import NavBar from './NavBar.vue';
export default {
    components: { NavBar, },
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
                phone_one: "",
                phone_two: "",
                address: "",
                website: "",
                city: "",
                zipcode: "",
                language_1: "english",
                language_2: "",
                checkedNames: [],
                students_number: "",
                staff_number: "",
                groups: [],
                class_number: "",
                skin: "",
                school_type: [],
                module: "",
                file: null
            },
            showDiv: true,
            showDiv2: false,
            showDiv3: false,
            showDiv4: false,
        }

    },
    methods: {
        validateEmail(email) {
            const re =
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))*$/;
            return re.test(email);
        },
        nextStep() {

            // if (this.details.school_name === "") {
            //     this.$toast.error("School name is required");
            //     return false;
            // }
            // if (this.details.school_email === "") {
            //     this.$toast.error("School email required");
            //     return false;
            // }
            // if (!this.validateEmail(this.details.school_email)) {
            //     this.$toast.error("Invalid School email");
            //     return false;
            // }
            // if (this.details.contact_name === "") {
            //     this.$toast.error("Primary Contact name required");
            //     return false;
            // }
            // if (this.details.contact_email === "") {
            //     this.$toast.error("Primary Contact email required");
            //     return false;
            // }
            // if (!this.validateEmail(this.details.contact_email)) {
            //     this.$toast.error("Invalid Contact email");
            //     return false;
            // }
            // if (this.details.contact_phone === "") {
            //     this.$toast.error("Contact Phone Number required");
            //     return false;
            // }
            // if (this.details.contact_role === "") {
            //     this.$toast.error("Contact role required");
            //     return false;
            // }
            // if (this.details.billing_name === "") {
            //     this.$toast.error("Billing name required");
            //     return false;
            // }

            // if (this.details.billing_email === "") {
            //     this.$toast.error("Billing email required");
            //     return false;
            // }
            // if (!this.validateEmail(this.details.billing_email)) {
            //     this.$toast.error("Invalid Billing email");
            //     return false;
            // }
            // if (this.details.billing_phone === "") {
            //     this.$toast.error("Billing phone number required");
            //     return false;
            // }
            // if (this.details.billing_role === "") {
            //     this.$toast.error("Billing role required");
            //     return false;
            // }
            this.showDiv = false;
            this.showDiv2 = true;
        },
        prevStep() {
            this.showDiv = true;
            this.showDiv2 = false;
        },
        stepTwo() {
            // if (this.details.phone_one === "") {
            //     this.$toast.error("Phone 1 required");
            //     return false;
            // }
            // if (this.details.phone_two === "") {
            //     this.$toast.error("Phone 2 required");
            //     return false;
            // }
            // if (this.details.city === "") {
            //     this.$toast.error("City required");
            //     return false;
            // }
            // if (this.details.zipcode === "") {
            //     this.$toast.error("zipcode required");
            //     return false;
            // }
            // if (this.details.address === "") {
            //     this.$toast.error("address required");
            //     return false;
            // }
            // if (this.details.website === "") {
            //     this.$toast.error("website url required");
            //     return false;
            // }
            this.showDiv2 = false;
            this.showDiv3 = true;
        },
        prevStep2() {
            this.showDiv2 = true;
            this.showDiv3 = false;
        },
        stepThree() {
            if (this.details.checkedNames.length === 0) {
                this.$toast.error("Select a module");
                return false

            }
            if (this.details.staff_number === "") {
                this.$toast.error("Staff Number required");
                return false
            }
            if (this.details.students_number === "") {
                this.$toast.error("Students Number required");
                return false
            }
            if (this.details.groups.length === 0) {
                this.$toast.error("Select a group");
                return false
            }
            if (this.details.class_number === "") {
                this.$toast.error("Class Number required");
                return false
            }
            if (this.details.class_number === "") {
                this.$toast.error("Class Number required");
                return false
            }
            if (this.details.skin === "") {
                this.$toast.error("Select a skin color");
                return false
            }
            if (this.details.school_type.lenght === 0) {
                this.$toast.error("Select a school type");
                return false
            }
            // this.Images_onUpload()
            this.showDiv3 = false;
            this.showDiv4 = true;
        },

        handleFileUpload() { this.details.file = this.$refs.file.files[0]; },
        Images_onUpload() {
            let formData = new FormData();
            formData.append('file', this.details.file);
            axios.post('/',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(function () {
                this.$toast.success("We've recieved your request")
                console.log('SUCCESS!!');
            })
                .catch(function () {
                    this.$toast.error("error! Try again")
                    console.log('FAILURE!!');
                });
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

input[type=number] {
    background: transparent;
    border: 1px solid #E4E4E4;
    border-radius: 8px;
    height: 49px;
    padding: 0 10px;
    font-family: nunitoMedium;
    width: 100%;
    font-size: 13px;
}

input[type=email] {
    background: transparent;
    border: 1px solid #E4E4E4;
    border-radius: 8px;
    height: 49px;
    padding: 0 10px;
    font-family: nunitoMedium;
    width: 100%;
    font-size: 13px;
}

input[type=text] {
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
    font-family: nunitoBold;
    font-size: 17px;


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

.side_by_side {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 30px;
}

.btn_div:last-child button {
    width: 100% !important;

}

.btn_div {
    display: flex;
    flex-direction: row;
    gap: 30px;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
}

input[type=checkbox] {
    background: transparent;
    border: 1px solid #E4E4E4;
    border-radius: 8px;
    height: 20px;
    width: 20px;
    padding: 0;
    font-family: nunitoMedium;
    font-size: 13px;
}

input[type=file]::file-selector-button {
    margin-right: 20px;
    border: none;
    background: #33357d;
    padding: 10px 20px;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    transition: background .2s ease-in-out;
}

input[type=file]::file-selector-button:hover {
    background: #0d45a5;
}

.drop-container {
    position: relative;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    padding: 20px;
    border-radius: 10px;
    border: 2px dashed #33357d;
    color: #444;
    cursor: pointer;
    width: 100%;
    transition: background .2s ease-in-out, border .2s ease-in-out;
}

.drop-container:hover {
    background: #f3f3f3;
    border-color: #1967D2;
}

.drop-container:hover .drop-title {
    color: #222;
}

.drop-title {
    color: #444;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    transition: color .2s ease-in-out;
}

.check_box_div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    width: 100% !important;
}

.input_container_last {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    width: 60%;
    margin: 5rem auto;

}

.success_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: nunitoMedium;
    font-size: 16px;
    line-height: 36px;
    text-align: center;
    width: 50%;
    margin: 4rem auto;
    gap: 20px;
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

    .input_container_last {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 40px;
        width: 80%;
        margin: 4rem auto;

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

    .side_by_side {
        flex-direction: column;
    }

    .btn_div {
        flex-direction: column-reverse;
        gap: 3 0px;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: 5rem;
    }

    .input_container_last {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 40px;
        width: 90%;
        margin: 4rem auto;

    }

    .check_box_div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        gap: 30px;
        width: 100% !important;
    }
}
</style>