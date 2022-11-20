<template>
  <!-- <div id="nav">
    <router-link to="/">Sign In</router-link> |
    <router-link to="/signup">Sign Up</router-link>
  </div> -->
  <Header v-if="layout!=='auth'" :openSidebar="openSidebar" @toggleSidebar="toggleSidebar"/>
  <div class="flex">
    <Sidebar :openSidebar="openSidebar" />
    <router-view />
  </div>
  <Footer v-if="layout!=='auth'" />

</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue'
export default {
  components: {
    Footer,
    Header,
    Sidebar
  },
  computed: {
    layout: function () {
      return this.$route.meta.layout;
    },
  },
  data: function () {
    return {
      openSidebar: true,
    };
  },
  methods: {
    toggleSidebar: function () {
      this.openSidebar = !this.openSidebar;
    },
    handleResize: function () {
      window.innerWidth <= 1000 && (this.openSidebar = false);
      window.innerWidth > 1000 && (this.openSidebar = true);
    }
  },
  mounted: function () {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
}
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
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>