<template>
<div class="bottom-bar">
    <v-app-bar
    hide-on-scroll
    app>
      <v-spacer />
      <v-toolbar-title><h2><strong>Bizu</strong> 🐝</h2></v-toolbar-title>
      <v-spacer />

      <v-tooltip v-if="!$vuetify.theme.dark" bottom >
        <template v-slot:activator="{ on, attrs }">

          <v-btn v-on="on" v-bind="attrs" color="transparent" small fab @click="darkMode">
            <v-icon class="mr-1">mdi-brightness-7</v-icon>

          </v-btn>
        </template>
        <span>Dark Mode Off</span>
      </v-tooltip>

      <v-tooltip v-else bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-on="on" v-bind="attrs" color="transparent" small fab @click="darkMode">
            <v-icon>mdi-brightness-4</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode On</span>
      </v-tooltip>
    </v-app-bar>


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
    methods: {
      darkMode() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      }
    }
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