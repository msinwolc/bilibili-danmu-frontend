<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <router-link to="/" exact>
        <el-menu-item index="home" :class="{ 'is-active': isActive('/') }">首页</el-menu-item>
      </router-link>
      <router-link to="/rank" exact>
        <el-menu-item index="rank" :class="{ 'is-active': isActive('/rank') }">排行</el-menu-item>
      </router-link>
      <router-link to="/other" exact>
        <el-menu-item index="other" :class="{ 'is-active': isActive('/other') }">其他</el-menu-item>
      </router-link>
    </el-menu>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  
  export default {
    setup() {
      const activeIndex = ref('')
      const route = useRoute()
  
      const handleSelect = (key: string, keyPath: string[]) => {
        console.log(key, keyPath)
      }
  
      const isActive = (path: string) => {
        return route.path === path
      }
  
      return {
        activeIndex,
        handleSelect,
        route,
        isActive
      }
    }
  }
  </script>
  
<style scoped>
.el-menu-demo {
    position: fixed;
    /* 使用 fixed 定位使菜单固定在页面上 */
    top: 0;
    /* 距离页面顶部的距离为 0 */
    width: 100%;
    /* 宽度占满整个页面 */
    z-index: 1000;
    /* 背景颜色 */
    color: #fff;
    /* 文字颜色 */
    border: none;
    /* 去除边框 */
}
</style>
