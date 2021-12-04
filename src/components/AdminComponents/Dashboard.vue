<template>
  <div class="dashboard">
    <div class="header-container">
      <Header />
    </div>
    <div class="sidebar-content-wrapper">
      <div class="sidebar-container">
        <SideBar />
      </div>
      <div class="content-container">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Header from './Header.vue';
import SideBar from './SideBar.vue';

export default {
  name: 'AdminDashboard',
  components: { Header, SideBar },
};
</script>
<style scoped>
    .dashboard {
        height: 100vh;
    }
    .header-container {
        border-bottom: 1px solid #F7ACCF;
        height: 5vh;
    }
    .sidebar-content-wrapper {
        display: flex;
        /* margin-top: 1rem; */
        /* margin: 1rem 5rem; */
        margin: 1rem 5rem 0 3rem;
        justify-content: space-between;
    }
    .sidebar-container {
        flex-basis: 20%;
        height: 70vh;
        border-radius: 10px;
        border: 1px solid #ABD2FA;
    }
    .content-container {
        flex-basis: 75%;
        /* border: 1px solid purple; */
        border-radius: 10px;
        /* background-color: #E0C6CB; */
        border: 1px solid #E0C6CB;
    }

</style>
