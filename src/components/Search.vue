<template>
  <div class="wrapper">
    <div class="search-container">
      <input
        v-model="input"
        placeholder="Search Anime, Manga, etc."
      >
    </div>
  </div>
</template>
<script lang="ts">

import Vue from 'vue';

export default Vue.extend({
  props: {
    placeholder: {
      type: String,
      default: 'Search',
    },
  },
  data(): any {
    return {
      input: '',
    };
  },
  watch: {
    input(val: string): void {
      this.$store.dispatch({ type: 'fetchMedia', params: { titleLike: val } });
    },
  },
});
</script>

<style scoped>
  .wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .search-container {
    flex-basis: 40%;
    border: 1px solid #DCDFE6;
    border-radius: 20px;
  }
  input {
    appearance: none !important;
    border-width: 0px !important;
    border: none !important;
    border-radius: 20px;
    box-sizing: border-box;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 20px;
    letter-spacing: 1px;
    width: 100%;
  }

</style>
