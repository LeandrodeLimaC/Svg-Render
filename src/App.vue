<template>
  <div id="app">
      <div>
        <div style="display: flex;
                    align-items: center;
                    height: 150px;">
          <svg-sprite/>
          <svg-icon 
            :style="{color: active_color}"
            class="icon--default icon-animation"
            v-for="icon in icons" 
            :key="icon" 
            :icon="icon"
          /> 
        </div>
        <div style="display: flex">
          <a href v-for="color in theme_colors" :key="color.name" @click.prevent="changeClass(color.value)">
            <span 
              :style="{background:color.value}"
            />
          </a>
          <p style="margin:0" :style="{color: active_color}">
            {{active_color}}
          </p>
        </div>
      </div>
  </div>
</template>

<script>

import SvgSprite from '@/mixins/SvgSprite.vue';
import SvgIcon from '@/mixins/SvgIcon.vue';

export default {
  name: 'App',
  data: function() {
    return {
      icons: new Array(),
      active_color : '#3b4252',
      theme_colors:[
        {
          name : '--primary', 
          value : '#b48ead'
        },
        {
          name : '--secondary',
          value : '#88c0d0'
        },
        {
          name : '--thirdary', 
          value : '#d08770'
        },
        {
          name : '--quadry', 
          value : '#3b4252'
        },
      ]
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
  },
  methods:{
    changeClass(color){
      console.log( color + " Mudou")
      this.active_color = color
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
  font-size: 20px;
}
span{
  height: 20px;
  width: 20px;
  background: black;
  display: flex;
  border-radius: 20px;
  margin: 0 10px;
}
</style>
