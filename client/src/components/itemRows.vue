<script setup>
import dayjs from 'dayjs';

defineProps({
  task: {
    type: Object,
    required: true,
  },
});
</script>

<template>
    <h3><slot name="heading"></slot></h3>
    <p>{{ task.project }}</p>
    <p>{{ dayjs(task.start_timestamp).format('HH:mm') }} - {{ dayjs(task.end_timestamp).format('HH:mm') }}</p>
</template>
