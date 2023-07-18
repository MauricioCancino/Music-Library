<template>
    <div class="container">
        <h3>Add new album:</h3>
        <div>
            <label for="">Artist </label>
            <input v-model="artista" type="text">
            <label for="">Album </label>
            <input v-model="album" type="text">
            <label for="">Album cover </label>
            <input v-model="portada" type="text">
            <label for="">Link </label>
            <input v-model="song" type="text">
            <label for="">Genre </label>
            <select v-model="genero" name="" id="">
                <option value="kpop">Kpop</option>
                <option value="anime">Anime</option>
                <option value="soloist">Soloist</option>
            </select>
        </div>
        <button class="btn btn-primary" @click="addAlbum">Add</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'add-comp',
    // props: {},
    data: function(){
        return {
            artista: "",
            album:"",
            portada:"",
            genero:"",
            song:"",
        }
    },
    // computed: {},
    methods: {
        ...mapActions(['add_album']),
        addAlbum(){
            //tengo que validar
            if(this.artista==""){
                alert("El nombre del artista debe estar relleno")
                return
            }
            if(this.album==""){
                alert("El nombre del álbum debe estar relleno")
                return
            }
            if(this.portada==""){
                alert("La portada debe estar rellena")
                return
            }
            if(this.genero==""){
                alert("Selecciona un género")
                return
            }
            let album = {
                artist:this.artista,
                image: this.portada,
                category: this.genero,
                album: this.album,
                song: this.song,
            }
            this.add_album(album)
            this.$router.push('/'+this.genero)
        }
    }
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .container {
    color:rgb(255, 225, 0);
        background-color:transparent ;
        display: inline-block;
        margin: 0 auto;
        padding: 0;
        
  }
  .btn {
    margin-top: 25px;
    background-color:rgba(130, 13, 173, 0.83);
   }
   label {
    margin: 0 10px;
   }
</style>