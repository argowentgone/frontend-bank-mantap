<template>
  <div id="app">
    <el-container class="views" v-if="$route.name !== 'Dashboard'">
      <el-header>
        <Navigation />
      </el-header>
      <el-main>
        <div class="main-container">
          <router-view/>
        </div>
      </el-main>
      <el-footer>
        <Footer />
        <LiveChat />
      </el-footer>
    </el-container>
    <Dashboard v-else />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';
import LiveChat from '@/components/LiveChat.vue';
import Dashboard from '@/views/Admin/Dashboard/Dashboard.vue';
export default {
  components: { 
    Navigation,
    Footer,
    LiveChat,
    Dashboard,
  },
  data() {
    return {
      //
    }
  },
}
</script>
