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
  <div>
    <h1 class="green">{{ msg }}</h1>
    <div v-for="task in taskRows" :key="task.ID">
      <itemRows :task="task">
        <template #heading>{{ task.hour_amount }}&nbsp;h&nbsp;&mdash;&nbsp;{{ task.task || '(ei nimeä)' }}</template>
      </itemRows>
    </div>
  </div>
</template>

<!--
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
-->