<template>
  <div>
    <client-only placeholder="Loading...">
      <engine
        :initData = initData
        :defaultData="dataForm"
        :toggle3d="toggle3d"
        :toggle2d="toggle2d"
        :togglesc="togglesc"
        :togglechecker="togglechecker"
      />
    </client-only>
  </div>

</template>

<script>
  import Engine from '@ideeza/vue3dengine'
  import {
    TQFNdata,
    FemaleHeaderdata,
    R0805data
  } from '@ideeza/vue3dengine/src/engines/electronic_tech_part'
    export default {
      name: "3dengine",
      components: {
        'engine': Engine.etp,
      },
      data() {
        return {
          initData: 'R0805',   // name of one package - TQFN, FEMALEHEADER, R0805
          dataForm: R0805data, // all the informations from form
          toggle3d: false,     // show 3d
          toggle2d: true,    // show 2d
          togglesc: false,    // show schematic
          togglechecker: false, // show position checker
        }
      },
    }
</script>

<style scoped>

</style>
