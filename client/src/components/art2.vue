<script setup>
import { ref, onMounted } from 'vue';
import itemRows from './itemRows.vue';

const taskRows = ref([]);

onMounted(async () => {
  const response = await fetch('http://localhost:3000/taskRows');
  taskRows.value = await response.json();
});

defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="item-container">
  <div class="container-heading"><h1>{{ msg }}</h1></div>
      <div v-for="task in taskRows" :key="task.ID"><itemRows :task="task"><template #heading>{{ task.hour_amount }}&nbsp;h&nbsp;&mdash;&nbsp;{{ task.task || '(ei nimeä)' }}</template></itemRows></div>
  </div>
</template>
