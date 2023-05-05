<template>
  <div class="choose_container">
    <div class="headers_container">
      <h1>Why Choose TeddyEd</h1>
      <p>TeddyEd has a user-friendly interface with intuitive features making it easy for school administrators, teachers,
        and staff to manage student information from the time of admission, attendance, scheduling, newsletters,
        communication and school asset management.</p>
    </div>
    <div class="modules_container">
      <div class="first_div">
        <div class="modules_div">
          <img src="../assets/Attendance.svg" alt="">
          <div class="">
            <h5>Attendance</h5>
            <ul>
              <li>Report student’s absence</li>
              <li>Report student’s lateness</li>
              <li>View attendance history</li>
            </ul>
          </div>
        </div>
        <div class="modules_div">
          <img src="../assets/transportation.svg" alt="">
          <div class="">
            <h5>Transportation</h5>
            <ul>
              <li>Bus Tracking</li>
              <li>Location Updates</li>
              <li>View attendance history</li>
            </ul>
          </div>
        </div>
        <div class="modules_div">
          <img src="../assets/Events.svg" alt="">
          <div class="">
            <h5>Events</h5>
            <ul>
              <li>Teacher-led Class Events</li>
              <li>School-wide Events</li>
              <li>Parent Activities</li>
            </ul>
          </div>
        </div>
        <div class="modules_div">
          <img src="../assets/commnunications.svg" alt="">
          <div class="">
            <h5>Communications</h5>
            <ul>
              <li>Parent Communications</li>
              <li>Staff & Student Interactions</li>
              <li>Email, SMS, In-app Messaging</li>
            </ul>
          </div>
        </div>
        <div class="modules_div">
          <img src="../assets/admin_portal.svg" alt="">
          <div class="">
            <h5>Administration Portal </h5>
            <ul>
              <li>Tracking applications</li>
              <li>Managing interviews</li>
              <li>Communicating with Parents</li>
            </ul>
          </div>
        </div>
      </div>
      <div><img class="phone" src="../assets/mobile_mockup.svg" alt="" srcset=""></div>
      <div class="first_div">
        <div class="modules_div">
          <img src="../assets/Admission.svg" alt="">
          <div class="">
            <h5>Admission</h5>
            <ul>
              <li>Enrolment Forms</li>
              <li>Admission Processing & Updates</li>
              <li>School Records</li>
            </ul>
          </div>
        </div>
        <div class="modules_div">
          <img src="../assets/finance.svg" alt="">
          <div class="">
            <h5>Finance</h5>
            <ul>
              <li>School Budgets</li>
              <li>Fees Notifications and Reminders</li>
              <li>Payment Tracking</li>
            </ul>
          </div>
        </div>
        <div class="modules_div">
          <img src="../assets/newsletter.svg" alt="">
          <div class="">
            <h5>Newsletters</h5>
            <ul>
              <li>Custom Templates</li>
              <li>Teacher to Parent Newsletter Design</li>
              <li>School to Parent Newsletter Design </li>
            </ul>
          </div>
        </div>
        <div class="modules_div">
          <img src="../assets/Attendance.svg" alt="">
          <div class="">
            <h5>Assets</h5>
            <ul>
              <li>Track and manage small equipment</li>
              <li>Track and manage school resources e.g. textbooks</li>
            </ul>
          </div>
        </div>
        <div class="modules_div">
          <img src="../assets/Attendance.svg" alt="">
          <div class="">
            <h5>Assessment & Report Cards</h5>
            <ul>
              <li>Custom Templates</li>
              <li>Teacher to Parent Newsletter Design</li>
              <li>School to Parent Newsletter Design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.headers_container h1 {
  text-align: center;
  font-family: nunitoBlack;
  font-size: 48px;
}

.headers_container {
  width: 60%;
  color: #ffffff;
}

.headers_container p {
  text-align: center;
  font-family: nunitoMedium;
  font-size: 16px;
  line-height: 40px;
}

.choose_container {
  background-image: url("../assets/choose_bg.svg");
  height: 1163px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100% !important;
  margin: 12rem auto 0;
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 44px;
}

.modules_container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 44px;
  margin: 0 auto;
}

.phone {
  width: 100%;
}

h5 {
  color: #33357D;
  font-size: 17px;
  font-weight: 800;
  font-family: nunitoBlack;
}

.modules_div {
  display: flex;
  align-items: flex-start;
  justify-content: start;
  width: 100%;
  gap: 10px;
  background-color: #ffffff;
  padding-left: 10px;
  padding-top: 10px;
  box-shadow: 0px 5.09954px 12.7488px rgba(64, 79, 104, 0.05);
  border-radius: 15px;
  height: 145px;
}

.modules_div li {
  list-style: url('../assets/check_icon.svg');
  color: #33357D;
  font-size: 13px;
  font-family: nunitoSemiBold;
  width: 226px;

}

.first_div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  /* width: 100%; */
}

@media screen and (max-width: 1138px) {
  .choose_container {
    width: 100%;
    margin: 0rem auto 0;
  }

  .modules_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 10px;
    margin: 0 auto;
  }

}

@media screen and (max-width: 1079px) {
  .modules_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 40px;
    margin: 2% auto;
  }

  .choose_container {
    background-image: none;
    height: auto;
    background-color: #24265F;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100% !important;
    margin: -5rem auto 0;
    max-width: 1500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 50px;
  }

  .headers_container p {
    text-align: center;
    font-family: nunitoMedium;
    font-size: 15px;
    line-height: 40px;
    width: 100%;
  }

  .headers_container h1 {
    text-align: center;
    font-family: nunitoBlack;
    font-size: 35px;
  }

  .headers_container {
    width: 90%;
    color: #ffffff;
  }
}

@media screen and (max-width: 820px) {
  .choose_container {
    width: 100%;
  }
}

@media screen and (max-width: 786px) {
  .choose_container {
    width: 100%;
    margin: 6rem auto 0;
  }
}

@media screen and (max-width: 500px) {


  .choose_container {
    width: 100%;
    margin: 0rem auto 0;
  }

  .headers_container {
    width: 100%;
    color: #ffffff;
  }

  .headers_container p {
    text-align: center;
    font-family: nunitoMedium;
    font-size: 14px;
    line-height: 35px;
    width: 100%;
  }

  .headers_container h1 {
    text-align: center;
    font-family: nunitoBlack;
    font-size: 35px;
  }

  .first_div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    width: 100%;
  }
}

@media screen and (max-width: 480px) {
  .modules_div li {
    list-style: url('../assets/check_icon.svg');
    color: #33357D;
    font-size: 13px;
    font-family: nunitoSemiBold;
    width: auto;

  }

  .modules_div {
    display: flex;
    align-items: flex-start;
    justify-content: start;
    width: 100%;
    gap: 10px;
    background-color: #ffffff;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    box-shadow: 0px 5.09954px 12.7488px rgba(64, 79, 104, 0.05);
    border-radius: 15px;
    height: auto;
  }
}
</style>