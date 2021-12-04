<template>
  <div class="container">
    <div
      class="sidebar-item"
      @click="toMediaAdmin()"
    >
      <h4>Media</h4>
    </div>
    <div
      class="sidebar-item"
      @click="toUserAdmin()"
    >
      <h4>Users</h4>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DashboardSidebar',
  methods: {
    toMediaAdmin() {
      if (this.$route.name !== 'MediaAdministration') {
        this.$router.push('/admin/media');
      }
    },
    toUserAdmin() {
      if (this.$route.name !== 'UserAdministration') {
        this.$router.push('/admin/users');
      }
    },
  },
});
</script>

<style scoped>
    .container {
        padding: 2rem;
    }
    .sidebar-item {
        padding: 0.25rem 0;
        border-radius: 25px;
    }
    .sidebar-item:hover {
        /* background-color: grey; */
        color: #F7ACCF;
        cursor: pointer;
    }

</style>
