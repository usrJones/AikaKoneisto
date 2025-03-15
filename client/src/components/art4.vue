<script setup>

defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="chart-container">
  <div class="container-heading"><h2>{{ msg }}</h2></div>
      <p>Tähän tulee jottai paskkoo</p>
  </div>
</template>
