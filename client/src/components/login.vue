<script setup>
import { ref } from 'vue';

const email = ref('');

async function submitLoginForm() {
  
  const data = {
    email: email.value,
    password: password.value,
  };
  
  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    
    if (result.success) {
      console.log(result.message);
      console.log(result.isFirstLogin);
    } else {
      console.error(result.message);
    }
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
    <section class="grid-container">
        <article class="art1-green">   <p>&nbsp;</p>
          <h3>Kirjaudu tästä</h3>&nbsp;&nbsp;
          <form @submit.prevent="submitLoginForm">
            <p><span>sähköposti: </span> <input type="text" id="email" v-model="email" required /></p>
            <p><span>salasana: </span> <input type="password" id="password" v-model="password" required /></p>
            <p>&nbsp;</p>
            <p><button type="submit">Kirjaudu</button></p>
            <p>&nbsp;</p>
          </form>
        </article>
      </section>
</template>
