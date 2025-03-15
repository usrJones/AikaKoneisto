<script setup>
import submitForm from './form.vue';

defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="form-container">
  <div class="container-heading"><h1>{{ msg }}</h1></div>
      <submitForm />
  </div>
</template>