<script setup>
import { ref, computed } from 'vue'
import artMain from './components/artMain.vue'
import register from './components/register.vue';
import notFound from './components/notFound.vue';

const routes = {
  '/': artMain,
  '/register': register
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || notFound
})
</script>

<template>
  <header>
      <h1>Aika koneisto</h1>
      <nav>
        <a href="#/">Koti</a> |
        <a href="#/register">Rekisteröidy</a>
      </nav>
  </header>
  
  <main>
    <component :is="currentView" />
  </main>
  
  <footer></footer>
</template>
