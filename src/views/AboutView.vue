<template>
  <div class="about">
    <div class="text">
    
    <p>We are a new page, so we don't have all the discs or information of the groups.</p>
     
     <span>But if you want, you can add information inside of the Genres category to help us to be a more complete page.</span>

    <p>Thank you for all the support.</p>

    <br>
      
    <span>Music Library team.</span>
    <div>
    <button @click="$router.push(`/`)" class="btn btn-primary">Go back</button>
    </div>
    </div>
    
  </div>
</template>

<style scoped>
.text {
  color:rgb(255, 225, 0);
        background-color:rgba(107, 35, 152, 0.789) ;
        display: inline-block;
        margin-top: 10%;
        padding: 30px;
}
 button {
    margin-top: 15px;
    background-color:rgb(174, 20, 230);
   }
   .about{
  background-image: url("@/assets/lofiFondo.png");
  background-size:100%;
  background-attachment: fixed;
  height: 100vh;
}
</style>
