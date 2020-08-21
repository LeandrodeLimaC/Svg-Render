<template>
  <div id="app">
    <svg-sprite/>
    <svg-icon icon="pica-pau"/>
  </div>
</template>

<script>

import SvgSprite from '@/mixins/SvgSprite.vue';
import SvgIcon from '@/mixins/SvgIcon.vue';

export default {
  name: 'App',
  components: {
    SvgSprite,
    SvgIcon
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
