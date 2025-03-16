<script setup>
import dayjs from 'dayjs';

defineProps({
  msg: {
    type: String,
    required: true,
  },
  taskRows: {
    type: Object,
    required: true,
  },
});

</script>

<template>
  <div class="item-container">
  <div class="container-heading"><h1>{{ msg }}</h1></div>

      <div v-for="task in taskRows" :key="task.ID">
        <p>({{ task.project }})&nbsp;{{ task.hour_amount }}&nbsp;h&nbsp;&nbsp;&mdash;&nbsp;&nbsp;{{ task.task || '(ei nimeä)' }}&nbsp;&nbsp;&mdash;&nbsp;&nbsp;{{ dayjs(task.start_timestamp).format('HH:mm') }}&nbsp;&ndash;&nbsp;{{ dayjs(task.end_timestamp).format('HH:mm') }}</p>
      </div>
  
  </div>
</template>