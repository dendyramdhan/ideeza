<template>
    <div class="p-3 mt-5">
        <div class="font-semibold text-2xl mb-2">TQFN Package Pin Dimensions</div>
        <div class="flex mb-2">
            <div class="w-48">Lead Width Range (B) Minimum</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" placeholder="0.25" :value="part.package_pin.min_lead_width" name="min_lead_width" @input="change">
            </div>
        </div>
        <div class="flex mb-2">
            <div class="w-48">Lead Width Range (B) Maximum</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" placeholder="0.25" :value="part.package_pin.max_lead_width" name="max_lead_width" @input="change">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Lead Length Range (L) Minimum</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" placeholder="0.25" :value="part.package_pin.min_lead_length" name="min_lead_length" @input="change">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Lead Length Range (L) Maximum</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" placeholder="0.25" :value="part.package_pin.max_lead_length" name="max_lead_length" @input="change">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Body Width Range (E1) Minimum</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" placeholder="0.25" :value="part.package_pin.min_body_width" name="min_body_width" @input="change">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Body Width Range (E1) Maximum</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" placeholder="0.25" :value="part.package_pin.min_body_width" name="min_body_width" @input="change">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Body Width Range (E1) Maximum</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" placeholder="0.25" :value="part.package_pin.max_body_width" name="max_body_width" @input="change">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Body Length Range (D1) Minimum</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" placeholder="0.25" :value="part.package_pin.min_body_length" name="min_body_length" @input="change">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Body Length Range (D1) Maximum</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" placeholder="0.25" :value="part.package_pin.max_body_length" name="max_body_length" @input="change">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Number of pins (D)</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" placeholder="0.25" :value="part.package_pin.d_number_pins" name="d_number_pins" @input="change">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Number of pins (E)</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" placeholder="0.25" :value="part.package_pin.e_number_pins" name="e_number_pins" @input="change">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Pitch (e)</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" placeholder="0.25" :value="part.package_pin.pitch" name="pitch" @input="change">
            </div>
        </div>

    </div>
    <!-- <q-step :title="part.name + 'TQFN Package Pin Dimensions'" :order="2" subtitle="Enter the required package values" name="step-2">
        <div><hr></div>



        <div class="row md-gutter">
          <div class="col-8">

            <div><br><br></div>
            <strong>This package has 100 leads</strong>

          </div>

          <div class="col-2">
            <img src="statics/partModelImage/PQFP3.png" alt="">
          </div>
          <div class="col-2">
            <img src="statics/partModelImage/PQFP2.png" alt="">
          </div>
          <div><hr></div>

        </div>

        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" class="text-secondary" icon="arrow_forward">Next</q-btn>
        </q-stepper-navigation>
      </q-step> -->
</template>
<script>
import CheckBox from "~/components/form/checkbox"
import { mapState } from "vuex"
let vm

  export default {
    name: 'CreateNewPart',
    select: '4',
    components: {
      CheckBox
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
        this.$store.commit('part/savePackagePin',{
          key: val.target.name,
          value: val.target.value
        })
      },
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