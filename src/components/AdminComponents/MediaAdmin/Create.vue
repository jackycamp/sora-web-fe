<template>
  <div class="create-container">
    <div>
      <div class="input-container">
        <input
          v-model="input"
          placeholder="Title"
        >
      </div>
      <div class="input-container">
        <input
          v-model="input"
          placeholder="Year"
        >
      </div>
      <div class="input-container">
        <input
          v-model="input"
          placeholder="Anime or Manga?"
        >
      </div>
      <Button
        round
        type="primary"
      >
        Submit
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Button } from 'element-ui';

export default Vue.extend({
  name: 'MediaCreate',
  components: { Button },
});
</script>

<style>
.create-container {
    margin: 2rem;
}
input {
    appearance: none;
    border-width: 0px;
    border: none;
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
  .input-container {
    border-radius: 10px;
    border: 1px solid #DCDFE6;
    margin: 1rem;
  }
</style>
