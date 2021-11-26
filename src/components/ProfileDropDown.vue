<template>
  <div id="container">
    <Popover
      trigger="hover"
      placement="bottom"
      width="200"
    >
      <p>With an account you can:</p>
      <ul>
        <li>Build lists</li>
        <li>Provide Reviews</li>
        <li>And more!</li>
      </ul>
      <Button
        round
        size="small"
        @click="loginHandler"
      >
        Login or Sign Up
      </Button>
      <Button
        slot="reference"
        circle
        icon="el-icon-user"
        @click="profileClickHandler"
      />
    </Popover>
  </div>
</template>
<script lang="ts">

import { Button, Popover } from 'element-ui';
import Vue from 'vue';

export default Vue.extend({
  name: 'ProfileDropDown',
  components: {
    Button, Popover,
  },
  methods: {
    loginHandler(): void {
      if (this.$route.name !== 'Login') {
        this.$router.push('/login');
      }
    },
    profileClickHandler(): void {
      if (this.$route.name !== 'Profile') {
        this.$router.push('/profile');
      }
    },
  },
});
</script>
<style scoped>
  #container {
    text-align: center;
  }
  button:hover {
    background-color: #FFADF5;
    /* background-color: lightgray; */
    border-color: none;
    color: #606266;
  }

</style>
