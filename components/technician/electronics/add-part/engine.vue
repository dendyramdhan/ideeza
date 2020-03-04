<template>
  <div>
    <client-only placeholder="Loading..." v-if="loading==false">
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
  import * as packages from '@ideeza/vue3dengine/src/engines/electronic_tech_part'
  import { mapState } from 'vuex'
    export default {
      name: "3dengine",
      components: {
        'engine': Engine.etp,
      },
      props: [
        'package'
      ],
      computed: {
        ...mapState({
          part: state => state.part.selected_part
        })
      },
      created() {
        this.dataForm = packages[this.part.package+'data']
        this.initData = this.part.package
        this.dataForm.dimensions = this.part.dimensions
        this.loading = false
      },
      data() {
        return {
          initData: null,   // name of one package - TQFN, FEMALEHEADER, R0805
          dataForm: null, // all the informations from form
          toggle3d: false,     // show 3d
          toggle2d: true,    // show 2d
          togglesc: false,    // show schematic
          togglechecker: false, // show position checker
          loading: true
        }
      },
    }
</script>

<style scoped>

</style>
