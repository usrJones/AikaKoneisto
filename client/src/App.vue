<script setup>
import art1 from './components/art1.vue'
import art2 from './components/art2.vue'
</script>

<template>
  <header>
      <h1>Aika koneisto</h1>
      <nav></nav>
  </header>
  
  <main>
    <section>
      <article class="art1-green"><!-- #1 green -->
        <art1 msg="Artikkeli 1" />
      </article>
      <article class="art2-blue"><!-- #2 blue -->
        <art2 msg="Artikkeli 2" />
      </article>
      <article class="art3-yellow"><!-- #3 yellow -->
        <h1>artikkeli 3</h1>
      </article>
      <article class="art4-orange"><!-- #4 orange -->
        <h1>artikkeli 4</h1>
      </article>
    </section>
  </main>
  
  <footer>

  </footer>
</template>






<style scoped>
/*header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}*/
</style>
