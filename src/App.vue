<template>
  <div>
    
    <Navbar />

   

    
    <div class="app column is-half is-offset-one-quarter">
      <div class="control has-icons-left has-icons-right mb-4">
        <input class="input is-medium" type="text" placeholder="Buscar" v-model="busca">
        <span class="icon is-left">
          <i class="fas fa-search"></i>
        </span>
      </div>
      <div v-for="(poke,index) in resultadoBusca" :key="poke.url">
         <Pokemon class="mb-3" :name="poke.name" :url="poke.url" :num="index + 1"/>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Pokemon from './components/Pokemon'
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components:{
    Pokemon,
    Navbar
  },
  data(){
    return{
      pokemons:[],
      busca:''
    }
  },
 
  created:  function () {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0").then(NOME =>{
      console.log("Requisição Feita")
      this.pokemons = NOME.data.results;
    })
  },
   computed:{
    resultadoBusca:function () {
      if (this.busca == '' || this.busca == ' ') {
        return this.pokemons
      }else{
        return this.pokemons.filter(pokemon =>
          pokemon.name.indexOf(this.busca.toLowerCase())!=-1)
        
      }
  }
  },
}
</script>
<style>

</style>