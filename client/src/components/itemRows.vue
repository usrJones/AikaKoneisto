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
    <p>({{ task.project }})
    <slot name="heading"></slot>
    &mdash;&nbsp;{{ dayjs(task.start_timestamp).format('HH:mm') }} - {{ dayjs(task.end_timestamp).format('HH:mm') }}</p>
</template>
