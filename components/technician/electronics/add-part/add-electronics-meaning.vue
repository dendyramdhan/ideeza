<template>
  <div class="flex justify-between w-full">
    <div class="w-3/5 ">
      <div class="bg-white shadow-md mr-5">
        <div v-for="(leg, index) in legs" :key="index" class="bg-white p-3 flex justify-between items-center">
          <input placeholder="number" type="text" class="leg-input" v-model="leg.number">
          <input placeholder="name" type="text" class="leg-input" v-model="leg.name">
          <select class="select" v-model="leg.unit">
            <option>Property</option>
          </select>
          <input placeholder="min" type="text" class="leg-input" v-model="leg.min">
          <input placeholder="max" type="text" class="leg-input" v-model="leg.max">
          <div>
            <font-awesome-icon @click="removeLeg(index)" class="mr-1 h-4 cursor-pointer" :icon="['fas', 'times']"/>
          </div>
        </div>
        <div @click="addLeg" class="text-center bg-gray-200 w-full cursor-pointer p-3 text-gray-600 cursor-pointer" >
          + Add new leg meaning
        </div>
      </div>

      <!--Navigation-->
      <div class="flex justify-between mt-10 mr-5">
        <button @click="$emit('back')" class="btn pill-button px-16 py-0">Back</button>
        <button @click="next" class="btn pill-button pill-button--ideeza px-16 py-0">Next</button>
      </div>
    </div>

    <div class="w-2/5 bg-gray-300">

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        name: "add-electronics-meaning",
      data() {
        return {
          legs: []
        }
      },
      created() {
        this.legs = this.$store.state.part.selected_part.legs.map(a => {
          return a
        })
      },
      methods: {
        removeLeg(index) {
          this.legs.splice(index, 1);
        },
        addLeg(){
          this.legs.push({
            number: 0,
            name: null,
            unit: null,
            min: null,
            max: null
          })
        },
        next() {
          this.$store.commit('part/saveLegs',this.legs)
          this.$emit('next')
        }
      }
    }
</script>

<style scoped>
  .select{
    @apply border border-gray-400 bg-white px-2 py-1 w-20 mr-2;
    height: 34px;
  }
  .leg-input{
    @apply border border-gray-400 px-2 py-1 mr-2;
    width: 115px;
  }
</style>
