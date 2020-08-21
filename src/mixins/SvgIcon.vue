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
svg.icon {
  stroke: none;
  fill: currentColor;
  height: 1.5em;
  vertical-align: middle;
  width: 1.5em;
}
</style>
