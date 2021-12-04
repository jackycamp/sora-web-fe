<template>
  <div>
    <h2>Sign Up for a free account!</h2>
    <div class="split-view">
      <div class="img-container">
        <img
          src="../assets/kawaii_one.png"
          alt="Cute image"
        >
      </div>
      <div class="inputs">
        <div class="input-container">
          <input
            v-model="input"
            placeholder="your@email.com"
          >
        </div>
        <div class="input-container">
          <input
            v-model="input"
            placeholder="username"
          >
        </div>
        <div class="input-container">
          <input
            v-model="input"
            placeholder="password"
          >
        </div>
        <div class="input-container">
          <input
            v-model="input"
            placeholder="verify password"
          >
        </div>
        <Button
          round
          type="primary"
        >
          Sign Up
        </Button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Button } from 'element-ui';

// TODO: This component should probably have labels for the input fields

export default Vue.extend({
  name: 'SignUpPage',
  components: { Button },
});
</script>

<style scoped>
  .split-view {
    display: flex;
    justify-content: space-between;
    padding: 5rem;
  }
  .img-container {
    flex-basis: 30%;
  }
  .inputs {
    flex-basis: 50%;
  }
  .input-container {
    border-radius: 10px;
    border: 1px solid #DCDFE6;
    margin: 1rem;
  }
  img {
    /* TODO: Media queries for responsiveness */
    width: 20rem;
    height: 25rem;
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

</style>
