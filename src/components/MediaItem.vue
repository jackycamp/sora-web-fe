<template lang="">
  <div
    class="media-item"
    @click="clickHandler"
  >
    <p class="media-title">
      {{ title }}
    </p>
    <p class="media-year">
      {{ year }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MediaItem',
  props: {
    id: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: 'Not Available',
    },
    year: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    clickHandler(event: any): void {
      console.log(`Click reg: Media id: ${this.id}, title: ${this.title}`);
      this.$router.push(`media/${this.id}`);
    },
  },
});
</script>
<style>

.media-item{
    border-radius: 10px;
    height: 17rem;
    width: 15rem;
    margin: 1rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition-property: transform;
    transition-duration: 500ms;
}
.media-title {
  padding: 1rem;
}
.media-year {
  font-size: 0.8rem;
}
.media-item:hover{
    transform: translate(0, -20px);
    cursor: pointer;
}

</style>
