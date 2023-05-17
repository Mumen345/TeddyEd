<template>
    <div class="attendance_container">
        <NavBar />
        <AttendanceContent />
    </div>
</template>

<script>
import NavBar from './NavBar.vue';
import AttendanceContent from './AttendanceContent.vue';

export default {
    name: "AttendanceComponent",
    components: { NavBar, AttendanceContent }
}
</script>

<style scoped>
.attendance_container {
    margin: 0 auto;
    width: 100%;
    max-width: 1500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
}
</style>