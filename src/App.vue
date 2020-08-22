<template>
  <div id="app">
    <svg-sprite/>
    <svg-icon 
      class="icon--default icon-animation"
      v-for="icon in icons" 
      :key="icon" 
      :icon="icon"
    /> 
  </div>
</template>

<script>

import SvgSprite from '@/mixins/SvgSprite.vue';
import SvgIcon from '@/mixins/SvgIcon.vue';

export default {
  name: 'App',
  data: function() {
    return {
      icons: new Array()
    }
  },
  components: {
    SvgSprite,
    SvgIcon
  },
   mounted: function(){
    {
      require.context(
          '@/assets/icons',
          false,
          /\w+.svg$/i
      )
      .keys().forEach(element => {
        this.icons.push(
            element.replace(/.svg/i, '').replace(/.\//i, '')   
        );
      });
      console.log(this.icons)
    }
  }
}
</script>

<style>
html{
  width: 100%;
  height: 100%;
  background-color: #eceff4;
}
body{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
}
#app{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon--default{
  cursor: pointer;
  padding: 10px;
  color: #3b4252;
  font-size: 20px;
}
</style>
