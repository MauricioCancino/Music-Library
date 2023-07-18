<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #312967;
  
}

nav a {
  font-weight: bold;
  color: whitesmoke;
}

nav a.router-link-exact-active {
  color: #caca45;
}
background-image {
  height: 20vh;
}
</style>
