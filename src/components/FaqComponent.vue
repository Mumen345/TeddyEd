<template>
    <section>
        <h1 class="header primaryColor">FAQ</h1>
        <div class="accordion">
            <input type="radio" name="radio-a" id="1" />
            <label class="accordion-label" for="1">What is TeddyEd, and how does it work?</label>
            <div class="accordion-content">
                <p>
                    TeddyEd is a comprehensive school management system that helps schools streamline their day-to-day
                    operations, improve communication, and provide a better experience for students, parents, and staff. The
                    system includes modules for attendance tracking, admissions and enrollment management, transportation
                    management, newsletter creation, event planning, finance management and much more. TeddyEd works by
                    providing an intuitive, user-friendly platform that allows schools to manage all aspects of their
                    operations in one place.
                </p>
            </div>
        </div>
        <div class="accordion">
            <input type="radio" name="radio-a" id="2" />
            <label class="accordion-label" for="2">What are the key features of TeddyEd's school management system?</label>
            <div class="accordion-content">
                <p>
                    TeddyEd's school management system includes a wide range of features, including attendance tracking,
                    admissions processing & enrollment management, transportation management, newsletter creation,
                    school/class scheduling and event planning, assessment and report card management, communication tools,
                    finance management, and asset management. Each module is designed to help schools manage specific
                    aspects of their operations more efficiently and effectively.
                </p>
            </div>
        </div>
        <div class="accordion">
            <input type="radio" name="radio-a" id="3" />
            <label class="accordion-label" for="3">Can TeddyEd be customized to meet our school's specific needs?</label>
            <div class="accordion-content">
                <p>
                    Yes, TeddyEd can be customized to meet the specific needs of your school. Our implementation team will
                    work closely with your school team to understand your requirements and tailor the system to meet your
                    unique needs.
                </p>
            </div>
        </div>
        <div class="accordion">
            <input type="radio" name="radio-a" id="4" />
            <label class="accordion-label" for="4">How is TeddyEd different from other school management systems on the
                market?</label>
            <div class="accordion-content">
                <p>
                    TeddyEd is different from other school management systems on the market in several ways. Our system is
                    highly customizable and designed to meet the specific needs of each school we work with. Additionally,
                    TeddyEd is easy to use and requires minimal training for staff and teachers. Finally, TeddyEd is focused
                    majorly on school operations that routinely take the focus away from the child and are efficiently
                    backed by a highly responsive product support team that is always available to help with any questions
                    or issues that arise.
                </p>
            </div>
        </div>
        <div class="accordion">
            <input type="radio" name="radio-a" id="5" />
            <label class="accordion-label" for="5">Is TeddyEd cloud-based, and how secure is it?</label>
            <div class="accordion-content">
                <p>
                    Yes, TeddyEd is cloud-based, meaning that you can access the system from anywhere with an internet
                    connection. We take security very seriously and use industry-standard hosting platforms, encryption and
                    security protocols to protect your data. Additionally, we conduct regular security audits to ensure that
                    the system is secure.
                </p>
            </div>
        </div>
        <div class="accordion">
            <input type="radio" name="radio-a" id="6" />
            <label class="accordion-label" for="6">How does TeddyEd handle student data privacy and security?</label>
            <div class="accordion-content">
                <p>
                    TeddyEd takes student data privacy and security very seriously. We comply with all relevant data
                    protection laws and regulations and use best practices to protect your data. Additionally, we provide
                    tools to help schools manage access to student data and ensure that only authorized personnel have
                    access to sensitive information.
                </p>
            </div>
        </div>
        <div class="accordion">
            <input type="radio" name="radio-a" id="7" />
            <label class="accordion-label" for="7">What kind of support does TeddyEd provide, and how responsive is their
                customer service team?</label>
            <div class="accordion-content">
                <p>
                    TeddyEd provides a range of support options, including phone, email, and live chat support. Our customer
                    service team is highly responsive and strives to provide quick and effective solutions to any issues or
                    questions that arise.
                </p>
            </div>
        </div>
        <div class="accordion">
            <input type="radio" name="radio-a" id="8" />
            <label class="accordion-label" for="8">Can TeddyEd integrate with other software or platforms we're already
                using?</label>
            <div class="accordion-content">
                <p>
                    TeddyEd can integrate with other software or platforms already in use. We have experience integrating
                    with a wide range of systems, including learning management systems (LMS), student information systems
                    (SIS), and more.
                </p>
            </div>
        </div>
        <div class="accordion">
            <input type="radio" name="radio-a" id="9" />
            <label class="accordion-label" for="9">What are the pricing options for TeddyEd, and how does it compare to
                other school management systems?</label>
            <div class="accordion-content">
                <p>
                    TeddyEd's pricing is based on the specific needs of each school we work with. We offer flexible pricing
                    options that can be customized to meet your budget and requirements. Our pricing is affordably
                    competitive with other school management systems on the market, and we strive to provide excellent value
                    for our customers.
                </p>
            </div>
        </div>
        <div class="accordion">
            <input type="radio" name="radio-a" id="10" />
            <label class="accordion-label" for="10">How easy is it to get started with TeddyEd, and what is the
                implementation process like?</label>
            <div class="accordion-content">
                <p>
                    Getting started with TeddyEd is easy. Once you've decided to work with us, we'll schedule an initial
                    consultation to understand your needs and requirements. From there, we'll develop a customized
                    implementation plan and work with you to get the system up and running as quickly and efficiently as
                    possible. Our implementation process is designed to minimize disruption to your school.
                </p>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {


        }

    },
}
</script>
<style lang="scss" scoped>
h1 {
    text-align: center;
}

input {
    position: absolute;
    opacity: 0;
    z-index: -1;
}

.accordion-wrapper {
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
}

.accordion {
    width: 100%;
    color: white;
    overflow: hidden;
    border-radius: 12px;
    border: 1px solid #E4E4E4;
    width: 60%;
    margin: 20px auto;
}

section {
    width: 90%;
    margin: 10% auto;
    max-width: 1500px;
}

.accordion:last-child {
    margin-bottom: 0;
}

.accordion-label {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 19px;
    background: #ffffff;
    font-weight: 600;
    cursor: pointer;
    font-size: 15px;
    color: #52525A;
    font-family: nunitoBlack;
}

/* .accordion-label:hover {
    background: #000000;
} */
.accordion-label::after {
    content: "\276F";
    width: 16px;
    height: 16px;
    text-align: center;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}

.accordion-content {
    max-height: 0;
    padding: 0 16px;
    color: #ffffff !important;
    background: #33357D;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}

.accordion-content p {
    margin: 0;
    color: #ffffff;
    font-size: 14px;
    line-height: 30px;
    font-family: nunitoMedium;
}

input:checked+.accordion-label {
    background: #33357D;
    color: #ffffff;
}

input:checked+.accordion-label::after {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
}

input:checked~.accordion-content {
    max-height: 100vh;
    padding: 16px;
}

@media screen and (max-width: 1080px) {
    section {
        width: 90%;
        margin: 10% auto;
        max-width: 1500px;
    }

    .accordion {
        width: 100%;
        color: white;
        overflow: hidden;
        border-radius: 12px;
        border: 1px solid #E4E4E4;
        width: 100%;
        margin: 20px auto;
    }
}
</style>

  