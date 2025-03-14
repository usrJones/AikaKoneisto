<script setup>

defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="shit-container">
  <div class="container-heading"><h1>{{ msg }}</h1></div>
      <p>Tähän tulee jottai paskkoo</p>
  </div>
</template>
