<template>
    <section class="card has-text-centered">
        <img :src="currentImg" alt="Placeholder image">
        <section class="card-content">
            <article class="media">
                <div class="media-content">
                    <p class="title is-4 is-capitalized">{{ name }}</p>
                    <button @click="mudarSprite" class="button is-success mt-1 mr-2" src="../assets/svg/change.svg" >
                        <i class="fas fa-sync-alt"></i>
                    </button>
                    <b-button label="Info" type="is-primary" size="is-medium" @click="isCardModalActive = true" />
                </div>
            </article>
            <b-modal v-model="isCardModalActive" :width="640">
                <section class="card">
                    <article class="card-content">
                        <div class="columns is-vcentered">
                            <div class="media column is-one-quarter">
                                <article class="media-content">
                                    <img :src="currentImg" alt="Placeholder image" >
                                    <button @click="mudarSprite" class="button is-success" src="../assets/svg/change.svg" >
                                        <i class="fas fa-sync-alt"></i>
                                    </button>
                                </article>
                            </div>
                            <div class="content column">
                                <h3 class="title is-4"><span class="subtitle is-4 has-text-weight-normal is-capitalized">#0{{ pokemon.id }} </span>{{ name }}</h3>
                                <hr />
                                <div class="has-text-left">
                                    <p>
                                        Type:  
                                        <span class="is-capitalized" v-if="!pokemonTypes">
                                            {{ pokemon.type }}
                                        </span>
                                        
                                        <span v-if="pokemon.type == 'grass' " class="tag is-white is-medium is-light">
                                            <i class="fas fa-leaf has-text-success"></i>
                                        </span>
                                        <span v-if="pokemon.type == 'fire' " class="tag is-white is-medium is-light">
                                            <i class="fas fa-fire has-text-danger"></i>
                                        </span>                           
                                        <span v-if="pokemon.type == 'water' " class="tag is-white is-medium is-light">
                                            <i class="fas fa-tint has-text-link"></i>
                                        </span>
                                        <span v-if="pokemon.type == 'electric' " class="tag is-white is-medium is-light">
                                            <i class="fas fa-bolt has-text-warning"></i>
                                        </span>
                                    </p>
                                    <p>Height:  {{ pokemon.height | height }}</p>
                                    <p>Weight:  {{ pokemon.weight | weight }}</p>
                                    <p class="is-capitalized">Abilities:  {{ pokemon.ability }}</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </b-modal>
        </section>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    components:{

    },
    data(){
        return{
            isCardModalActive: false,
            isFront:true,
            currentImg:'',
            pokemonTypes:['fire','water','electric','grass'],
            pokemon:{
                type: '',
                front: '',
                back: '',
                weight: '',
                height: '',
                ability: '',
            }
        }
    },
    created: function () {
      axios.get(this.url).then(RESPOSTA =>{
          this.pokemon.id = RESPOSTA.data.id
          this.pokemon.type = RESPOSTA.data.types[0].type.name
          this.pokemon.front = RESPOSTA.data.sprites.front_default
          this.pokemon.back = RESPOSTA.data.sprites.back_default
          this.pokemon.weight = RESPOSTA.data.weight
          this.pokemon.height = RESPOSTA.data.height
          this.pokemon.ability = RESPOSTA.data.abilities[0].ability.name
          this.currentImg = this.pokemon.front
      })  
    },
    props:{
        num:Number,
        name:String,
        url:String
    },
    filters:{
        height: function (value) {
            var newHeight  = value / 10
            if (newHeight < 1) {
                return newHeight * 100 + ' cm'
            }else{
                return newHeight + 'm'
            }
        },
        weight: function (value) {
            var newWeight  = value / 10
            if (newWeight < 1) {
                return newWeight * 100 + ' g'
            }else{
                return newWeight + ' kg'
            }
        }
    },
    methods:{
        mudarSprite:function () {
            if (this.isFront) {
                this.isFront = false;
                this.currentImg = this.pokemon.back
            }else{
                this.isFront= true
                this.currentImg = this.pokemon.front
            }
        }
    }
}
</script>

<style>
</style>