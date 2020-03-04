<template>
    <div class="p-3 mt-5">
        <div class="font-semibold text-2xl mb-2">TQFN Package Heel Spacing</div>
        <p class="mb-3">
            he minimum heel spacing is calculated by subtracking twice the Maximum Lead Length Range from the Minimum Body Width Range. <br>
            The maximum heel spacing is calculated by adding the tolerance on the inner distance between the heels of the opposing rows of leads to the minimum heel spacing.
        </p>
        <div class="flex mb-2">
            <div class="w-48">Use calculated values</div>
            <div class="flex-1">
            <input type="checkbox" :value="part.package_heel.isCalculated" name="isCalculated" @input="change">
            </div>
        </div>
        <div class="flex mb-2">
            <div class="w-48">SE Minimum</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.package_heel.semin" @input="change" name="semin" placeholder="Minimum">
            </div>
        </div>
        <div class="flex mb-2">
            <div class="w-48">SE Maximum</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.package_heel.semax" @input="change" name="semax" placeholder="Maximum">
            </div>
        </div>
        <div class="flex mb-2">
            <div class="w-48">SD Minimum</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.package_heel.sdmin" @input="change" name="sdmin" placeholder="Minimum">
            </div>
        </div>
        <div class="flex mb-2">
            <div class="w-48">SD Maximum</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.package_heel.sdmax" @input="change" name="sdmax" placeholder="Maximum">
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex"
let vm

  export default {
    name: 'CreateNewPart',
    select: '4',
    data() {
      return  {
        checked: false,
      }
    },
    mounted() {
      this.$emit('can-continue', {value: true});
    },
    computed: {
      ...mapState({
        part: state => state.part.selected_part
      })
    },
    render() {
      this.$emit('can-continue', {value: true});
    },
    methods: {
      change(val){
        this.$store.commit('part/updateField',{
          field: 'package_heel',
          key: val.target.name,
          value: val.target.value
        })
      },
      changeDimension(val){
        this.$store.commit('part/saveDimension',{
          key: val.target.name,
          value: val.target.value
        })
      }
    }
  }
</script>
<style>
select.w-full{
  width: 100% !important;
  max-width: 100% !important;
  min-width: 100% !important;
}
</style>
