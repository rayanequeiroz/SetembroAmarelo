<template>
    <v-container class="mb-10">
        <v-card
        class="mx-auto mb-5"
        color="#FFF8DC"
         v-for="(item, id) in listaAjuda"
          :key="id"

        >
        <div class="d-flex flex-no-wrap justify-space-between">
    
            <v-avatar
                    class="ma-3 d-flex right"
                    size="125"
                    tile
                >
                    <v-img :src="item.imagem"></v-img>
            </v-avatar>

    
            <v-card-title>{{ item.nome }}</v-card-title>
            
        </div>

        <v-card-text>
            <div class="font-weight-medium text">
                {{ item.descricao }}
            </div>
        </v-card-text>
        <v-card-actions>
            <v-btn
                class="ml-2 mt-5 botao"
                outlined
                rounded
                small
            ><a v-bind:href="item.link">
                VER SITE
                </a>
            </v-btn>
        </v-card-actions>
  </v-card>
    </v-container>

</template>

<script>
export default {
    name: 'Card',
  data() {
    return {
      listaAjuda: []
    }
  },

  created() {
    fetch('https://it3zxc-default-rtdb.firebaseio.com/setembroamarelo.json')
      .then(response => response.json())
      .then(json => {
        this.listaAjuda = json;
      })
  }
  }

</script>

<style scoped>
    
    .botao a {
        text-decoration: none;
        
    }

    
</style>