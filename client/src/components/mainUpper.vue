<script setup>
import { ref } from 'vue';

const startTimestamp = ref('');
const endTimestamp = ref('');
const task = ref('');
const project = ref('');
const createdTimestamp = ref(new Date().toISOString());

function calculateHourAmount(start, end) {
  if (!end) return null;
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diffMs = endDate - startDate;
  const diffHrs = diffMs / (1000 * 60 * 60);
  return diffHrs.toFixed(2);
}

function submitForm() {
  const hourAmount = calculateHourAmount(startTimestamp.value, endTimestamp.value);
  console.log('Form submitted with data:', {
    created_timestamp: createdTimestamp.value,
    start_timestamp: startTimestamp.value,
    end_timestamp: endTimestamp.value,
    hour_amount: hourAmount,
    task: task.value,
    project: project.value,
  });
}

defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings"><h1 class="green">{{ msg }}</h1><h3>Tämmönen teksti tässä</h3></div>
  <div class="form-container">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="task">Task:</label>
        <input id="task" v-model="task" type="text" required />
      </div>
      <div class="form-group">
        <label for="project">Project:</label>
        <input id="project" v-model="project" type="text" required />
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
.form-container {
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
  color: #cccccc;
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
}
</style>