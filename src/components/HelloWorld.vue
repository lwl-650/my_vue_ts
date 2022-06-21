<script setup lang="ts">
import { defineProps, ref } from "vue";
import "./b.scss";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>

</style>
