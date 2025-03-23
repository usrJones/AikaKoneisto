<script setup>
import { ref, onMounted } from 'vue';

import art1 from './art1.vue';
import art2 from './art2.vue';
import art3 from './art3.vue';
import art4 from './art4.vue';

const taskRows = ref([]);

async function fetchItems() {
  console.log('emit and fetch items');
  const response = await fetch('http://localhost:3000/taskRows');
  taskRows.value = await response.json();
}

onMounted(() => {
  fetchItems();
});
</script>

<template>
    <section class="grid-container">
        <article class="art1-green">
          <art1 @data-updated="fetchItems" msg="Artikkeli 1" />
        </article>
        <article class="art2-blue">
          <art2 :taskRows="taskRows" msg="Artikkeli 2" />
        </article>
        <article class="art3-yellow">
          <art3 msg="Artikkeli 3" />
        </article>
        <article class="art4-orange">
          <art4 msg="Artikkeli 4" />
        </article>
      </section>
</template>
