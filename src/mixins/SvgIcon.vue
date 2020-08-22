<template>
  <svg 
    :class="['icon', { 'icon-outlined': outline }]">
    <use :xlink:href="`#${icon}`"/>
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    icon: {
      type: String,
      required: true,
    },
    outline: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.icon-outlined {
  fill: none!important;
  stroke: currentColor!important;
}
.icon {
  stroke: none;
  fill: currentColor;
  height: 1.5em;
  width: 1.5em;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 200ms 50ms;
}
.icon:hover{
  font-size: 3.5em;
}
</style>
