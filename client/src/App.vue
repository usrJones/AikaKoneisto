<script setup>
import mainUpper from './components/mainUpper.vue'
import mainDowner from './components/mainDowner.vue'
</script>

<template>
  <header>
      <h1>Aika koneisto</h1>
      <nav></nav>
  </header>
  
  <main>
    <section>
      <article class="art1-green"><!-- #1 green -->
        <mainUpper msg="Uusi tuntimerkintä" />
      </article>
      <article class="art2-blue"><!-- #2 blue -->
        <mainDowner msg="Tuntimerkinnät" />
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
