<template>
  <div >

    <div class="w-full">
      <component :is="loadForm" @next="$emit('next')"></component>
        <!-- <div class="flex justify-between items-center mb-5">
          <span class="font-semibold">
            Edit QFN Square Package Overall Dimensions
          </span>
          <span class="text-gray-600">
            {{step}}/{{maxStep}}
          </span>
        </div>

        <div v-if="step === 1">
          <div class="shadow-md px-5 py-3 bg-white">
            <div class="flex justify-between items-center pb-2 border-b border-solid border-gray-400">
              <span class="font-semibold ">Body Span Range (E)</span>
              <div class="flex items-center">
                <span class="inline-block mr-5">Min</span>
                <input type="text" class="px-2 py-1 border border-gray-400 w-24" :value="part.dimensions.t_min_bandwidth" name="t_min_bandwidth" @input="change">
              </div>
              <div class="flex items-center">
                <span class="inline-block mr-5">Max</span>
                <input type="text" class="px-2 py-1 border border-gray-400 w-24" :value="part.dimensions.t_max_bandwidth" name="t_max_bandwidth" @input="change">
              </div>
            </div>
          </div>
          <div class="shadow-md px-5 py-3 bg-white">
            <div class="flex justify-between items-center pb-2 border-b border-solid border-gray-400">
              <span class="font-semibold ">Body Span Range (D)</span>
              <div class="flex items-center">
                <span class="inline-block mr-5">Min</span>
                <input type="text" class="px-2 py-1 border border-gray-400 w-24" :value="part.dimensions.min_body_width_w" name="min_body_width_w" @input="change">
              </div>
              <div class="flex items-center">
                <span class="inline-block mr-5">Max</span>
                <input type="text" class="px-2 py-1 border border-gray-400 w-24" :value="part.dimensions.max_body_width_w" name="max_body_width_w" @input="change">
              </div>
            </div>
          </div>
          <div class="shadow-md px-5 py-3 bg-white ">

            <div class="w-392 flex items-center justify-between pb-2 border-b border-solid border-gray-400 relative">
              <span class="font-semibold ">Height (H)</span>
              <div class="flex items-center">
                <span class="inline-block mr-5">Max</span>
                <input type="text" class="px-2 py-1 border border-gray-400 w-24 " :value="part.dimensions.maximum_height" name="maximum_height" @input="change">
              </div>
            </div>

          </div>

          <div class="shadow-md px-5 py-3 bg-white ">
            <div class="w-392 flex items-center justify-between pb-2 border-b border-solid border-gray-400 relative">
              <span class="font-semibold ">Standoff Height (A1)</span>
              <div class="flex items-center">
                <span class="inline-block mr-5">Min</span>
                <input type="text" class="px-2 py-1 border border-gray-400 w-24 " :value="part.dimensions.minimum_height" name="minimum_height" @input="change">
              </div>
            </div>
          </div>

          <div class="shadow-md px-5 py-3 bg-white ">
            <div class="w-392 flex items-center justify-between pb-2 border-b border-solid border-gray-400 relative">
              <span class="font-semibold ">Chamfered Corner (CH)</span>
              <input type="text" class="px-2 py-1 border border-gray-400 w-24 " name="chamfered_corner" :value="part.dimensions.chamfered_corner" @input="change">
            </div>
          </div>

          <div class="shadow-md px-5 py-3 bg-white ">
            <div class="w-392 flex items-center justify-between pb-2 border-b border-solid border-gray-400 relative">
              <span class="font-semibold ">Pin 1 location</span>
              <select class="bg-white border border-gray-400 p-2" :value="part.dimensions.pin_location" name="pin_location" @input="change">
                <option value="sided">Side of D</option>
              </select>


            </div>
          </div>
        </div>

        <div v-if="step === 2">
          <div class="shadow-md px-5 py-3 bg-white ">
            <div class="w-392 flex items-center justify-between pb-2 border-b border-solid border-gray-400 relative">
              <span class="font-semibold ">Height (H)</span>
              <div class="flex items-center">
                <span class="inline-block mr-5">Max</span>
                <input type="text" class="px-2 py-1 border border-gray-400 w-24 " v-model="part.dimensions.minimum_height" name="minimum_height" @input="change">
              </div>

            </div>
          </div>
          <div class="shadow-md px-5 py-3 bg-white ">
            <div class="w-392 flex items-center justify-between pb-2 border-b border-solid border-gray-400 relative">
              <span class="font-semibold ">Standoff Height (A1)</span>
              <div class="flex items-center">
                <span class="inline-block mr-5">Min</span>
                <input type="text" class="px-2 py-1 border border-gray-400 w-24 " v-model="part.dimensions.maximum_height" name="maximum_height" @input="change">
              </div>

            </div>
          </div>
          <div class="shadow-md px-5 py-3 bg-white ">
            <div class="w-392 flex items-center justify-between pb-2 border-b border-solid border-gray-400 relative">
              <span class="font-semibold ">Chamfered Corner (CH)</span>
              <input type="text" class="px-2 py-1 border border-gray-400 w-24 " name="chamfered_corner" :value="part.dimensions.chamfered_corner" @input="change">
            </div>
          </div>
          <div class="shadow-md px-5 py-3 bg-white ">
            <div class="w-392 flex items-center justify-between pb-2 border-b border-solid border-gray-400 relative">
              <span class="font-semibold ">Pin 1 location</span>
              <select class="bg-white border border-gray-400 p-2" :value="part.dimensions.pin_location" name="pin_location" @input="change">
                <option value="side_d">Side of D</option>
              </select>
            </div>
          </div>
        </div>

        <div v-if="step === 3">
          <div class="shadow-md px-5 py-3 bg-white ">

            <div class="w-392 flex items-center justify-between pb-2 border-b border-solid border-gray-400 relative">
              <span class="font-semibold ">2D Image</span>
              <div class="flex items-center">
                <input type="file" style="width: 235px" class="px-2 py-1 border border-gray-400 w-24 ">
              </div>
            </div>

          </div>
          <div class="shadow-md px-5 py-3 bg-white ">

            <div class="w-392 flex items-center justify-between pb-2 border-b border-solid border-gray-400 relative">
              <span class="font-semibold ">3D Image</span>
              <div class="flex items-center">
                  <input type="file" style="width: 235px" class="px-2 py-1 border border-gray-400 w-24 ">
              </div>
            </div>
          </div>
          
        </div>

        <div class="md:flex justify-between mt-10">
          <button @click="back" class="btn pill-button px-16 py-0 mb-2 md:mb-0">Back</button>
          <button @click="next" class="btn pill-button px-16 py-0 mb-2 md:mb-0">Next</button>
          <button @click="$emit('next')" class="btn pill-button pill-button--ideeza px-16 py-0 mb-2 md:mb-0">Finish</button>
        </div> -->
      </div>



      <!-- <div class="md:w-2/5 md:pl-5">
        <div class="md:flex items-center mb-5 justify-end">
          <div class="view-button-container">
            <div @click="activeView = '2D'" :class="{'active': activeView === '2D'}" class="view-style b-right">2D Preview</div>
            <div @click="activeView = '3D'" :class="{'active': activeView === '3D'}" class="view-style b-left">3D Preview</div>
          </div>
        </div>
        <div class="view-container bg-gray-500">
          <Engine v-if="loading==false" :package="part.package"/>
        </div>
      </div> -->
  </div>
</template>

<script>
  // import Engine from '~/components/technician/electronics/add-part/engine.vue'
  import { mapState } from 'vuex'
    export default {
        name: "configure",
        data: () => {
            return {
                step: 1,
                maxStep: 3,
                activeView: '3D',
                loading: true
            }
        },
      // components: {
      //     Engine
      // },
      computed:{
        ...mapState({
          part: state => state.part.selected_part
        })
      },
      mounted() {
        let that = this
        setTimeout(() => {
          that.loading = false
        }, 3000);
      },
        methods: {
            loadForm() {
              return import(`./forms/${this.part.package}/index.vue`)
            },
            back () {
                if(this.step > 1)
                    this.step -= 1;
            },
            next () {
                if(this.step < this.maxStep)
                    this.step += 1;
            },
            change(val){
              console.log(val)
              this.$store.commit('part/saveDimension',{
                key: val.target.name,
                value: val.target.value
              })
            }
        }
    }
</script>

<style scoped>
.w-392{
  width: 392px;
}
.view-button-container{
  @apply flex justify-between rounded-full border border-solid border-gray-400 relative bg-gray-300;
  width: 300px;
  height: 25px;
}
  .view-style {
    @apply text-center px-12 h-full align-middle text-xs absolute cursor-pointer;
    line-height: 26px;
  }

.view-style:hover{
  @apply rounded-full z-40 bg-white;
}

  .view-style.active{
    @apply bg-ideeza-dark rounded-full text-white absolute z-50;
  }
  .b-right{
    @apply left-0;
  }

.b-left{
  @apply right-0;
}

</style>
