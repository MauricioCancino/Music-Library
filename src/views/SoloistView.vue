<template>
<div class="home">
    <div class="container row mb-0">
        <div class="card" style="width: 18rem" v-for="albums in soloist" :key="albums.id">
            <span>{{albums.artist}}</span>
            <img :src="albums.image" class="card-img" alt="..." />
            <span>{{albums.album}}</span>
            <span>Link: 
                <a :href="albums.song" target="_blank">Here</a>
            </span>
        </div>
        
    </div>
    <button @click="$router.push(`/`)" class="btn btn-primary mb-2">Back</button>
</div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'soloist-view',
    // props: {},
    data: function(){
        return {
            isActive:false
        }
    },
    computed: {
        ...mapState(['soloist'])
    },
    //methods: {}
    // watch: {},
    components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
     .container {
    gap: 20px;
    justify-content: center;
    margin: 50px auto;
    padding: 30px;
  }
  .card {
  box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
  }
  button {
    
    background-color:rgb(174, 20, 230);
    width: 20%;
    margin-top: 0;
   }
   .btn-group {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    margin: 0 22px;
    width: 20%;
    height: 40%;
   }
   .home{
  background-image: url("@/assets/bg.png");
  background-size:100%;
  background-attachment: fixed;
  
}
</style>