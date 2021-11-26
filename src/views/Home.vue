<template>
  <div class="home">
    <Search />
    <Media />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Media from '@/components/Media.vue'; // @ is an alias to /src
import Search from '@/components/Search.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Media,
    Search,
  },
});
</script>
