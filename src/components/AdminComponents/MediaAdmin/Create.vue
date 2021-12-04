<template>
  <div class="create-container">
    <div>
      <div class="input-container">
        <input
          v-model="form.title"
          placeholder="Title"
        >
      </div>
      <div class="input-container">
        <input
          v-model="form.year"
          placeholder="Year"
        >
      </div>
      <div class="input-container">
        <input
          v-model="form.type"
          placeholder="Anime or Manga?"
        >
      </div>
      <Button
        round
        type="primary"
        @click="createMedia()"
      >
        Submit
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Button } from 'element-ui';
import api from '@/api';

export default Vue.extend({
  name: 'MediaCreate',
  components: { Button },
  data() {
    return {
      form: {
        title: '',
        year: '',
        type: '',
      },
    };
  },
  methods: {
    async createMedia() {
      // TODO: Some sort of loading
      const media = { title: this.form.title, year: Number(this.form.year), type: this.form.type };
      const createResp = await api.Media.create(media);
      if (createResp.error) {
        console.log('Error: ', createResp.error);
        // TODO: Show error message or something
        return;
      }
      console.log('Created media! ', createResp);

      // Reset the form's inputs
      this.form.title = '';
      this.form.year = '';
      this.form.type = '';
    },
  },
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
