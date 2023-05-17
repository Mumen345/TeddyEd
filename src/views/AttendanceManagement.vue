<template>
    <div>
        <AttendanceComponent />
        <FooterComponent />
    </div>
</template>

<script>
import AttendanceComponent from '@/components/AttendanceComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
    components: { FooterComponent, AttendanceComponent }
}
</script>

<style scoped></style>