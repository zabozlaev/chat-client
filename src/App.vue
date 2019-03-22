<template>
  <div id="app">
    <side-menu/>
    <router-view/>
  </div>
</template>

<script>
import SideMenu from "./components/VSideMenu.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    SideMenu
  }
};
</script>


<style>
#app {
  font-family: "Proxima";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
}
</style>
