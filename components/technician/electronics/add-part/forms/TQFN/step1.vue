<template>
    <div v-if="part" class="p-3">
            <div class="font-semibold text-2xl mb-2">TQFN Square  Package Overall Dimensions</div>
            <div class="flex mb-2">
              <div class="w-48">Name</div>
              <div class="flex-1">
                <input type="text" class="px-2 py-1 border border-gray-400 w-full" placeholder="Part name" @input="change" :value="part.name" name="name">
              </div>
            </div>

            <div class="flex mb-2">
              <div class="w-48">Name2D</div>
              <div class="flex-1">
                <input type="text" class="px-2 py-1 border border-gray-400 w-full" placeholder="Part name2d" :value="part.name2d" name="name2d" @input="change">
              </div>
            </div>

            <div class="flex mb-2">
              <div class="w-48">Font Size</div>
              <div class="flex-1">
                <select :value="part.nameFontSize" class="w-full" name="nameFontSize" @input="change">
                  <option :value="null">FontSize</option>
                  <option :value="0">small</option>
                  <option :value="1">normal</option>
                  <option :value="2">big</option>
                </select>
              </div>
            </div>

            <div class="flex mb-2">
              <div class="w-48">Has Value</div>
              <div class="flex-1">
                <input type="checkbox" :value="part.hasValue" name="hasValue" @input="change">
              </div>
            </div>

            <div v-if="part.hasValue" class="mb-2">
                <input type="text" class="px-2 py-1 border border-gray-400 w-24" placeholder="value" :value="part.value" @input="change" name="value">
            </div>

            <div class="flex mb-2">
              <div class="w-48">Is Clockwise</div>
              <div class="flex-1">
                <input type="checkbox" :value="part.isClockwise" name="hasValue" @input="change">
              </div>
            </div>

            {{part.dimensions.pinNumber}}
            <!-- <div class="flex mb-2">
              <div class="w-48">Legs</div>
              <div class="flex-1">
                <select v-model="part.PinStartAt" class="w-full">
                  <option v-for="leg in parseInt(part.dimensions.pinNumber,10)" :key="leg">{{leg}}</option>
                </select>
              </div>
            </div> -->

            <!-- <q-field label="Lead Span Range (E)"></q-field> -->

            <div class="flex mb-2">
              <div class="w-48">Lead Span Range (E) Minimum</div>
              <div class="flex-1">
                <input type="text" class="px-2 py-1 border border-gray-400 w-full" :value="part.dimensions.e_min_lead_span" @input="changeDimension" name="e_min_lead_span" placeholder="Minimum">
              </div>
            </div>

            <div class="flex mb-2">
              <div class="w-48">Lead Span Range (E) Maximum</div>
              <div class="flex-1">
                <input class="px-2 py-1 border border-gray-400 w-full" type="number" :value="part.dimensions.e_max_lead_span" @input="changeDimension" name="e_max_lead_span">
              </div>
            </div>

            <div class="flex mb-2">
              <div class="w-48">Lead Span Range (D) Minimum</div>
              <div class="flex-1">
                <input class="px-2 py-1 border border-gray-400 w-full" type="number" :value="part.dimensions.d_min_lead_span" @input="changeDimension" name="d_min_lead_span">
              </div>
            </div>

            <div class="flex mb-2">
              <div class="w-48">Lead Span Range (D) Maximum</div>
              <div class="flex-1">
                <input class="px-2 py-1 border border-gray-400 w-full" type="number" :value="part.dimensions.d_max_lead_span" @input="changeDimension" name="d_max_lead_span">
              </div>
            </div>

            <div class="flex mb-2">
              <div class="w-48">Maximum Height (H)</div>
              <div class="flex-1">
                <input class="px-2 py-1 border border-gray-400 w-full" type="number" :value="part.dimensions.maximum_height" @input="changeDimension" name="maximum_height">
              </div>
            </div>

            <div class="flex mb-2">
              <div class="w-48">Minimum Standoff Height (A1)</div>
              <div class="flex-1">
                <input class="px-2 py-1 border border-gray-400 w-full" type="number" :value="part.dimensions.min_standoff" @input="changeDimension" name="dimensions.min_standoff">
              </div>
            </div>

            <div class="flex mb-2">
              <div class="w-48">Pin 1 location</div>
              <div class="flex-1">
                <select :Value="part.dimensions.pin_location" class="w-full" @input="changeDimension" name="pin_location">
                  <option :value="null">Pin 1 location</option>
                  <option value="opt1">Side of D</option>
                  <option value="opt2">Center of E</option>
                </select>
              </div>
            </div>
            <!-- 

            <br><br>

          </div>

          <div class="col-2">
            <img src="statics/partModelImage/PQFP1.png" alt="">
          </div>
          <div class="col-2">
            <img src="statics/partModelImage/PQFP2.png" alt="">
          </div>

        </div>


        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" class="text-secondary" icon="arrow_forward">Next</q-btn>
        </q-stepper-navigation> -->
    </div>
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
    render() {
      this.$emit('can-continue', {value: true});
    },
    computed: {
      ...mapState({
        part: state => state.part.selected_part
      })
    },
    methods: {
      change(val){
        this.$store.commit('part/savePart',{
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