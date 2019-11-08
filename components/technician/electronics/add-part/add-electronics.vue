<template>
  <div>
    <div class="flex justify-between items-center bg-white shadow-md  p-4">
      <div class="flex items-center">
        <img src="~/static/images/add-part.png" alt="">
        <div class="ml-5">
          <span class="block font-semibold">
            ATMEGA32M1-AU
          </span>
          <span class="text-sm, text-gray-600">
            AVR microcontroller, EEPROM: 1KB; SRAM: 2KB;...
          </span>
        </div>
      </div>
      <div>
        <button class="btn pill-button px-8 py-0">2D Preview</button>
        <button class="btn pill-button px-8 mx-3 py-0">3D Preview</button>
        <button class="btn pill-button px-8 py-0">Datasheet</button>
      </div>
    </div>

    <div class="my-10 border-b border-solid border-gray-300">
      <h1 class="font-semibold text-xl">
        Add Electronics Configuration
      </h1>
    </div>

    <div class="flex mb-10 justify-between w-full">
      <div @click="electronic = 'leg'" :class="{'active': electronic === 'leg'}" class="big-button">Leg Meaning</div>
      <div @click="electronic = 'chart'" :class="{'active': electronic === 'chart'}" class="big-button">Chart</div>
    </div>

    <div class="flex">
      <div class="w-3/5 ">

        <div class="shadow-md bg-white">
          <div v-if="electronic === 'leg'">
            <div v-for="(leg, index) in legs" :key="index" class="bg-white p-3 flex justify-between items-center">
              <input placeholder="number" type="text" class="leg-input">
              <input placeholder="name" type="text" class="leg-input">
              <select class="select">
                <option>Property</option>
              </select>
              <input placeholder="min" type="text" class="leg-input">
              <input placeholder="max" type="text" class="leg-input">
              <div>
                <font-awesome-icon @click="removeLeg(index)" class="mr-1 h-4 cursor-pointer" :icon="['fas', 'times']"/>
              </div>
            </div>
            <div @click="addLeg" class="text-center bg-gray-200 w-full cursor-pointer p-3 text-gray-600 cursor-pointer" >
              + Add new leg meaning
            </div>
          </div>

          <div v-if="electronic === 'chart'">

            <div class="flex items-center bg-white p-3 pb-1 border-b border-solid border-gray-300">
              <div class="w-32 font-semibold">
                Chart Title
              </div>
              <div class="flex-grow">
                <input  type="text" class="chart-input w-full">
              </div>
            </div>
            <div class="flex items-center bg-white p-3 pb-1 border-b border-solid border-gray-300">
              <div class="w-32 font-semibold">
                Label
              </div>
              <div class="flex-grow flex justify-between">
                <div class="flex items-center">
                  <span class="text3-xl inline-block ">X</span>
                  <input  type="text" class="chart-input w-32 mx-2">
                  <select class="select">
                    <option>mV</option>
                  </select>
                </div>
                <div class="flex items-center justify-end">
                  <span class="text3-xl inline-block mr-2">Y</span>
                  <input  type="text" class="chart-input w-32 mx-2">
                  <select class="select">
                    <option>mV</option>
                  </select>
                </div>
              </div>
            </div>

            <div v-for="(chart,index) in chartVals" :key="index" class="flex items-center bg-white p-3 pb-1 border-b border-solid border-gray-300">
              <div class="w-32 font-semibold">
                Add Value
              </div>
              <div class="flex-grow flex justify-between">
                <div class="flex items-center">
                  <span class="text3-xl inline-block mr-2">X</span>
                  <input  type="text" class="chart-input w-48">

                </div>
                <div class="flex items-center">
                  <span class="text3-xl inline-block mr-2">Y</span>
                  <input  type="text" class="chart-input w-48">

                </div>
                <div>
                  <font-awesome-icon @click="removeChartValue(index)" class="mr-1 h-4 cursor-pointer" :icon="['fas', 'times']"/>
                </div>
              </div>
            </div>

              <div @click="addChartValue" class="text-center bg-gray-200 w-full cursor-pointer p-3 text-gray-600 cursor-pointer" >
                + Add new value
              </div>

          </div>

        </div>

        <!--Navigation-->
        <div class="flex justify-between mt-10">
          <button @click="$emit('back')" class="btn pill-button px-16 py-0">Back</button>
          <button @click="$emit('next')" class="btn pill-button pill-button--ideeza px-16 py-0">Next</button>
        </div>
      </div>

      <div class="w-2/5 pl-5">
        <div v-if="electronic === 'leg'" class="view-container bg-gray-500">

        </div>

        <div v-if="electronic === 'chart'" class="view-container bg-gray-200">

        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "add-electronics",
        data: () => {
            return {
                electronic: 'leg',
                legs: [
                    {id: 1},
                    {id: 1},
                    {id: 1},
                    {id: 1},
                ],
                chartVals: [
                    {id: 1},
                    {id: 1},
                    {id: 1},
                    {id: 1},
                ]
            }
        },
        methods: {
            removeLeg(index) {
                this.legs.splice(index, 1);
            },
            addLeg(){
              this.legs.push({id: 1});
            },
            removeChartValue(index) {
                this.chartVals.splice(index, 1);
            },
            addChartValue() {
                this.chartVals.push({id: 1});
            }
        }
    }
</script>

<style scoped>
  .view-container{
    height: 400px;
  }

  .big-button{
    @apply bg-white border border-solid border-gray-300 text-center p-3 font-semibold text-xl cursor-pointer;
    width: 49%;
  }
  .big-button.active{
    @apply bg-transparent text-ideeza;
  }
  .select{
    @apply border border-gray-400 bg-white px-2 py-1 w-20 mr-2;
    height: 34px;
  }
  .leg-input{
    @apply border border-gray-400 px-2 py-1 mr-2;
    width: 115px;
  }
  .chart-input{
    @apply border border-gray-400 px-2 py-1;

  }
</style>
