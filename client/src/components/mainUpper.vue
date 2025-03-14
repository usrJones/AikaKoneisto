<script setup>
import { ref } from 'vue';

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
});
</script>

<template>
  <div class="greetings"><h1 class="green">{{ msg }}</h1></div>
  <div class="form-container">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="task">Task:</label>
        <input id="task" v-model="task" type="text" placeholder="Kirjoita tehtävä" required />
      </div>
      <div class="form-group">
        <label for="project">Project:</label>
        <input id="project" v-model="project" type="text" placeholder="Kirjoita projekti" required />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="start_timestamp">Start Timestamp:</label>
          <input id="start_timestamp" v-model="startTimestamp" type="datetime-local" required />
        </div>
        <div class="form-group">
          <label for="end_timestamp">End Timestamp:</label>
          <input id="end_timestamp" v-model="endTimestamp" type="datetime-local" />
        </div>
      </div>
      <button type="submit">Merkkaa työaika</button>
    </form>
  </div>
</template>





<style scoped>
/*.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

form {
  display: flex;
  flex-direction: column;
  width: 400px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #cccccc;
}

.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.form-row {
  display: flex;
  justify-content: space-between;
}

.form-row .form-group {
  width: 48%;
}

#task {
  width: 100%;
}

#project {
  width: 100%;
}

button {
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}*/
</style>