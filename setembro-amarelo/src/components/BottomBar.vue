<template>
  <div class="bottom-bar">
    <v-bottom-navigation
    :value="value"
    grow
    app>

    <router-link to="/">
    <v-btn>
      <span>Início</span>

      <v-icon>mdi-home</v-icon>
    </v-btn>
    </router-link>

  <router-link to ="/informacoes">
    <v-btn>
      <span>Informações</span>

      <v-icon>mdi-information</v-icon>
    </v-btn>
</router-link>

  <router-link to="/ajuda">
    <v-btn>
      <span>Ajuda</span>

      <v-icon>mdi-help</v-icon>
    </v-btn>
    </router-link>

  </v-bottom-navigation>
  </div>
</template>

<script>
  export default {
    name: 'BottomBar',

    data: () => ({
      value: 0,
    }),
  }
</script>

<style scoped>

.bottom-bar a {
  text-decoration: none;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  color: #d8ac00;
}
</style>