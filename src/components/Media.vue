<template>
  <div class="media-wrapper">
    <MediaItem
      v-for="(mediaItem) in items"
      :id="mediaItem.id"
      :key="mediaItem.id"
      :title="mediaItem.title"
      :year="mediaItem.year"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MediaItem from './MediaItem.vue';

export default Vue.extend({
  name: 'Media',
  components: { MediaItem },
  computed: {
    items(): Array<any> {
      return this.$store.state.media;
    },
  },
  beforeCreate(): void {
    this.$store.dispatch({ type: 'fetchMedia', params: {} });
  },
});
</script>

<style scoped>
 .media-wrapper {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   height: 38rem;
   overflow-y: scroll;
 }
</style>
