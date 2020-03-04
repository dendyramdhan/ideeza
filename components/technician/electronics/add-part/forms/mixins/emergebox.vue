<template>
  <div class="emergebox-wrapper">
    <scene v-on:sceneMount="mountScene"></scene>
  </div>
</template>

<script>
  import emergebox from '../../../mixins/engines/electronic_tech_part/emergebox'

  export default {
    mixins: [emergebox]
  }
</script>

<style scoped>
.canvasBut {
  position: absolute;
  cursor: pointer;
  border-radius: 5px;
  background-color: white;
  bottom: 0px;
  border: 1px solid black;
}
</style>
