<template>
  <v-container>
    <h1 class="text-home text-center m1-4 mr-4">Onde encontrar ajuda?</h1>
    <v-main>
      <Card/>
    </v-main>
  </v-container>
</template>

<script>
import Card from '../components/Card.vue'

export default ({
  name: 'Ajuda',
  components: {
    Card
  }
})
</script>
