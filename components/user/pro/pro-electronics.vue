<template>
  <div class="hello">





  </div>
</template>

<script>

    export default {
        name: "pro-electronics",

      data() {
        return {
          visibleGrid: true,        // show the grid
          initDataForEngine: {},    // the entire object need to init the engine, at the begining is empty
          initDataForPins: {
            need: {},
            pass: {}
          },                        // the entire object need on adding pins
          doAction: "move",         // move, rotate, copy, delete, label, route, highlight
          resolution: 100,           // min: 1, max: 100.
          partDataForImport: {}     // the entire object need to import a part
        }
      },
      methods: {

      }
    }
</script>

<style scoped>

</style>
