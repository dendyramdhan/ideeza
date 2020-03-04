<template>
    <div class="p-3 mt-5">
      <div class="font-semibold text-2xl mb-2">TQFN Package Thermal Pad Dimensions</div>
        <div class="flex">
          <div class="w-48">Pin 1 Location</div>
          <div class="flex-1">
            <input type="checkbox" v-model="checked" @input="change">
          </div>
        </div>
        <div class="flex mb-2">
          <div class="w-48">Thermal Pad Range (E2) Minimum</div>
          <div class="flex-1">
            <input type="text" class="px-2 py-1 border border-gray-400 w-full" placeholder="0.25" @input="change" :value="part.package_thermal_pad.e2_min_thermal_range" name="e2_min_thermal_range">
          </div>
        </div>
        <div class="flex mb-2">
          <div class="w-48">Thermal Pad Range (E2) Maximum</div>
          <div class="flex-1">
            <input type="text" class="px-2 py-1 border border-gray-400 w-full" placeholder="0.35" @input="change" :value="part.package_thermal_pad.e2_max_thermal_range" name="e2_max_thermal_range">
          </div>
        </div>
        <div class="flex mb-2">
          <div class="w-48">Thermal Pad Range (D2) Minimum</div>
          <div class="flex-1">
            <input type="text" class="px-2 py-1 border border-gray-400 w-full" placeholder="0.25" @input="change" :value="part.package_thermal_pad.d2_min_thermal_range" name="d2_min_thermal_range">
          </div>
        </div>
        <div class="flex mb-2">
          <div class="w-48">Thermal Pad Range (D2) Maximum</div>
          <div class="flex-1">
            <input type="text" class="px-2 py-1 border border-gray-400 w-full" placeholder="0.25" @input="change" :value="part.package_thermal_pad.d2_max_thermal_range" name="d2_max_thermal_range">
          </div>
        </div>
    </div>
    <!-- <q-step :title="part.name + 'TQFN Package Thermal Pad Dimensions'" :order="3" subtitle="Enter the required package values" name="step-3">
        <div><hr></div>

          <div class="col-2">
            <img src="statics/partModelImage/PQFP4.png" alt="">
          </div>
          <div class="col-2">
            <img src="statics/partModelImage/PQFP2.png" alt="">
          </div>
          <div><hr></div>

        </div>



        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" class="text-secondary" icon="arrow_forward">Next</q-btn>
          <q-btn flat class="text-black" @click="$refs.stepper.previous()">Back</q-btn>
        </q-stepper-navigation>
      </q-step> -->
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
    render() {
      this.$emit('can-continue', {value: true});
    },
    mounted() {
      this.$emit('can-continue', {value: true});
    },
    computed: {
      ...mapState({
        part: state => state.part.selected_part
      })
    },
    methods: {
      change(val){
        this.$store.commit('part/packageThermalPad',{
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
