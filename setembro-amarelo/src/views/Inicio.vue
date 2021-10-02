<template>
  <v-container>
     <p class="text-home text-justify mt-5 ml-4 mr-4">O Setembro Amarelo é uma campanha criada com o intuito de informar as pessoas sobre o suicídio, uma prática normalmente motivada pela depressão. Mesmo com tantos casos notórios, crescentes a cada ano, ainda existe uma expressiva barreira para falar sobre o problema.</p>
<div class="btn-contato text-center">
<router-link to="/informacoes">
        <v-btn outlined rounded color="#f9d71c" elevation="2">
          <span class="text-btn"><strong>Saiba mais</strong></span>
        </v-btn>
      </router-link>
    </div>

    </v-container>
</template>

<script>
  
  export default {
    name: 'Inicio',
    
    components: {
      //
    },
  }
</script>

<style scoped>
.btn-contato a {
    text-decoration: none;
  }

</style>
 

    