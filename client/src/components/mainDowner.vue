<script setup>
import itemRows from './itemRows.vue'

defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <h1 class="green">{{ msg }}</h1>
  <itemRows>
    <template #heading>Yksii</template>
    yksi yksi yksi
  </itemRows>

  <itemRows>
    <template #heading>Kaksii</template>
    kaksi kaksi kaksi
  </itemRows>

  <itemRows>
    <template #heading>Kolmee</template>
    kolme kolme kolme
  </itemRows>
</template>
