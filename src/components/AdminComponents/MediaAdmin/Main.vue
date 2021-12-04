<template>
  <div>
    <div class="media-nav-wrapper">
      <div
        :class="['media-nav-item', isActive('create') ? 'active-nav-item' : '']"
        @click="toMediaCreate()"
      >
        Create
      </div>
      <div class="media-nav-item">
        Modify
      </div>
      <div class="media-nav-item">
        Delete
      </div>
    </div>
    <div class="media-content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MediaMain',
  methods: {
    isActive(label: string): boolean {
      if (label === 'create' && this.$route.name === 'MediaCreate') {
        return true;
      }
      return false;
    },

    toMediaCreate() {
      if (this.$route.name !== 'MediaCreate') {
        this.$router.push('/admin/media/create');
      }
    },
  },
});

</script>

<style>
    .media-nav-wrapper {
        display: flex;
        padding: 1rem;
        border-bottom: 1px solid #F7ACCF;
    }
    .media-nav-item {
        padding: 0.25rem 0.5rem;
        font-weight: bold;
    }
    .active-nav-item {
        color: #F7ACCF;
    }
    .media-nav-item:hover {
        color: #F7ACCF;
        cursor: pointer;
    }

</style>
