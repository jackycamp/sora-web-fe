<template>
  <div id="app">
    <div id="nav">
      <div id="col-1">
        <router-link to="/">
          Home
        </router-link>
        <router-link to="/about">
          About
        </router-link>
      </div>
      <div id="col-2" />
      <div id="col-3">
        <ProfileDropDown />
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import ProfileDropDown from './components/ProfileDropDown.vue';

export default {
  components: { ProfileDropDown },

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  display: flex;
}
#col-1 {
  flex-basis: 20%;
  display: flex;
}
#col-2 {
  flex-basis: 60%;
}
#col-3 {
  flex-basis: 20%;
  display: flex;
  justify-content: right;
}

#nav a {
  padding: 1rem;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #FFADF5;
}

</style>
