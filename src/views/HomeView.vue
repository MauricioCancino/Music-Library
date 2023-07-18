<template>
  <div class="home">
    
    <div class="introduction">
    <h1>Welcome to your music web page</h1>

    <p>Here you can find the discography or your fave albums from your fave artists.</p>

    <span>Click here to open the library and select the genre:</span>
    <div class="btn">
    <button @click="isActive = !isActive" class="btn btn-primary">Show</button>
    </div>

<div class="row" v-if="isActive">
<div>
    <div class="d-grid gap-2 d-md-inline-flex" id="btn-group">
  <button @click="$router.push(`/kpop`)" class="btn btn-primary col-4" type="button">Kpop</button>
  <button @click="$router.push(`/anime`)" class="btn btn-primary col-4" type="button">Anime</button>
  <button @click="$router.push(`/soloist`)" class="btn btn-primary col-4" type="button">Soloist</button>
   
</div>
    </div> 
    <Add/>
    </div>
  </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Add from '@/components/Add.vue'

export default {
  name: 'HomeView',
  data: function(){
    return{
      isActive:false
    }
  },
  components: {
    Add
  }
}
</script>

<style scoped>
  .introduction {
    color:rgb(255, 225, 0);;
        background-color:rgba(107, 35, 152, 0.61) ;
        display: inline-block;
        margin-top: 10%;
        padding: 30px;
  }
  .btn{
    display: flex;
    justify-content: center;
    padding: 0 auto;
    margin: 0 auto;
  }
  button {
    margin-top: 10px;
    background-color:rgba(130, 13, 173, 0.83);
    
   }
   #btn-group {
    padding: 0 10px;
    margin: 0 22px;
    width: 90%;
   }

  .home{
  background-image: url("@/assets/lofiFondo.png");
  background-size:100%;
  background-attachment: fixed;
  height: 100vh;
}

  
</style>
