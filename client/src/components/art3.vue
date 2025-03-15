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
  <div class="container-heading"><h2>{{ msg }}</h2></div>
      <timer />
  </div>
</template>
