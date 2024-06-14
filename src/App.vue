<template>
  <!-- <RankDetail/> -->
  <nav-bar></nav-bar>
  <div class="router-container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavBar from './components/NavBar.vue';
// import RankDetail from './components/RankDetail.vue';

@Options({
  components: {
    NavBar,
  },
})
export default class App extends Vue { }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  text-decoration: none;
  /* 去除下划线 */
  color: inherit;
  /* 继承父元素的颜色 */
}

.title {
  // margin-top: 5%;
  text-align: center;
}

.router-container {
  margin-top: 60px; /* Adjust this value according to the height of your navbar */
  padding: 20px; /* Optional: Add padding if needed */
}
</style>
