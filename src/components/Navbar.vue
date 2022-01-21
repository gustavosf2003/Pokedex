<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img src="../assets/svg/pokeball.png" >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            weather:[]
        }
    },
    created:  function () {
        axios.get("http://api.weatherstack.com/current?access_key=69732162710af8f96edc21cb8cfd84db&query=NewYork").then(response =>{
            this.weather = response
            console.log(this.weather)
        })
  },
}
</script>

<style>

</style>