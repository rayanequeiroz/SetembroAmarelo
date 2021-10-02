<template>
  <v-app>
    <BottomBar/>
 <v-main>
    </v-main>
  </v-app>
</template>

<script>
import BottomBar from './components/BottomBar.vue'

export default {
  name: 'App',
  components: {
    BottomBar
  },
  data: () => ({
    //
  }),
};
</script>
