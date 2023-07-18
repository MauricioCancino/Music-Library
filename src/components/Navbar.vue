<template>
  <nav class="navbar bg-dark fixed-top" data-bs-theme="dark">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-button page">Music Library</router-link>
      </div>

      <div class="navbar-buttons">
        <router-link to="/" class="navbar-button">Home</router-link> |
        <router-link to="/about" class="navbar-button">About</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar-name',
  // props: {},
  data: function() {
    return {};
  },
  // computed: {},
  // methods: {}
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>


.container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.navbar-buttons {
  display: flex;
  align-items: center;
}
.page{
  color: whitesmoke;
  text-decoration: none;
}
</style>
