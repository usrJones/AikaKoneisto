<script setup>
import { ref } from 'vue';

const emit = defineEmits(['data-updated']);

const startTimestamp = ref('');
const endTimestamp = ref('');
const task = ref('');
const project = ref('');
const createdTimestamp = ref(new Date().toISOString());

function formatDateTime(datetime) {
  const date = new Date(datetime);
  return date.toISOString().slice(0, 19).replace('T', ' ');
}

function calculateHourAmount(start, end) {
  if (!end) return null;
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diffMs = endDate - startDate;
  const diffHrs = diffMs / (1000 * 60 * 60);
  return diffHrs.toFixed(2);
}

async function submitForm() {
  const hourAmount = calculateHourAmount(startTimestamp.value, endTimestamp.value);
  const data = {
    created_timestamp: formatDateTime(createdTimestamp.value),
    start_timestamp: formatDateTime(startTimestamp.value),
    end_timestamp: formatDateTime(endTimestamp.value),
    hour_amount: hourAmount,
    task: task.value,
    project: project.value,
  };
  
  try {
    const response = await fetch('http://localhost:3000/taskRow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (response.ok) {
      const result = await response.json();
      console.log('Form submitted successfully:', result);
      emit('data-updated');
    } else {
      console.error('Form submission failed:', response.statusText);
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }
}

defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="form-container">

    <div class="container-heading"><h1>{{ msg }}</h1></div>
    
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="task">Tehtävä:</label>
        <input id="task" v-model="task" type="text" placeholder="Kirjoita tähän tehtävä" required />
      </div>

      <div class="form-group">
        <label for="project">Projekti:</label>
        <input id="project" v-model="project" type="text" placeholder="Kirjoita tähän projekti" required />
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="start_timestamp">Alkuaika:</label>
          <input id="start_timestamp" v-model="startTimestamp" type="datetime-local" required />
        </div>
        
        <div class="form-group">
          <label for="end_timestamp">Loppuaika:</label>
          <input id="end_timestamp" v-model="endTimestamp" type="datetime-local" />
        </div>
      </div>

    <button type="submit">Merkkaa työaika</button>
    </form>

  </div>
</template>