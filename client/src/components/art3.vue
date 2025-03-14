<script setup>
import timer from './timer.vue';

defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="timer-container">
  <div class="container-heading"><h1>{{ msg }}</h1></div>
      <timer />
  </div>
</template>
