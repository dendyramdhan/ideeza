<template>
  <div>
    <div class="flex justify-between items-center bg-white shadow-md  p-4">
      <div class="flex items-center">
        <img src="~/static/images/add-part.png" alt="">
        <div class="ml-5">
          <span class="block font-semibold">
            {{part.name}}
          </span>

        </div>
      </div>
      <div>
        <button class="btn pill-button px-8 py-0">Legs</button>
        <button class="btn pill-button px-8 mx-3 py-0">Chart</button>
        <button class="btn pill-button px-8 py-0">2D Preview</button>
        <button class="btn pill-button px-8 mx-3 py-0">3D Preview</button>
        <button class="btn pill-button px-8 py-0">Datasheet</button>
      </div>
    </div>

    <div class="my-10 border-b border-solid border-gray-300">
      <h1 class="font-semibold text-xl">
        Add Details of the Part
      </h1>
    </div>

    <div class="flex w-full">
      <div class="w-1/2">
        <h1 class="font-semibold">Add details of the part</h1>

        <div class="p-3 bg-white shadow-md">
          <div class="flex items-center pb-1 mb-2 border-b border-solid border-gray-300">
            <div class="w-32 font-semibold">
              Name
            </div>
            <div class="flex-grow">
              <input  type="text" class="chart-input w-full" :value="part.name" name="name" @input="change">
            </div>
          </div>
          <div class="flex items-center pb-1 mb-2 border-b border-solid border-gray-300">
            <div class="w-32 font-semibold">
              Category
            </div>
            <div class="flex-grow">
              <select class="select w-full" value="part.category" name="category" @input="change">
                <option>Select</option>
              </select>
            </div>
          </div>
          <div class="flex items-center pb-1 mb-2 border-b border-solid border-gray-300">
            <div class="w-32 font-semibold">
              Description
            </div>
            <div class="flex-grow">
              <textarea rows="1" class="chart-input w-full" name="description" :value="part.description" @input="change"></textarea>
            </div>
          </div>
        </div>



      </div>
      <div class="w-1/2 pl-5">
        <h1 class="font-semibold">Pricing</h1>
        <div class="p-3 bg-white shadow-md">

          <div v-for="(price,index) in prices" :key="index" class="flex items-center pb-1 mb-2 border-b border-solid border-gray-300">
            <div class="flex items-center">
              <div class="mr-3 font-semibold">
                Quantity
              </div>
              <div class="">
                <input  type="text" class="chart-input w-32" v-model="price.quantity">
              </div>
            </div>
            <div class="mx-10 flex items-center">
              <div class="mr-3 font-semibold">
                Price
              </div>
              <div class="">
                <input  type="text" class="chart-input w-32" v-model="price.price">
              </div>
            </div>
            <div>
              <font-awesome-icon @click="removeValue(index)" class="mr-1 h-4 cursor-pointer" :icon="['fas', 'times']"/>
            </div>
          </div>

          <div @click="addPrice" class="text-center bg-gray-200 w-full cursor-pointer p-3 text-gray-600 cursor-pointer" >
            + Add new Price
          </div>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
    import { mapState } from 'vuex'
    import AddCode from '~/components/technician/add-code.vue'
    export default {
        name: "add-code",
        components: {
            AddCode
        },
        created() {
          this.prices = this.$store.state.part.selected_part.prices.map(a => {
            return a
          })
          this.part.name = this.$store.state.part.selected_part.name
          this.part.description = this.$store.state.part.selected_part.description
          this.part.category = this.$store.state.part.selected_part.category
        },
        data: () => {
            return {
                prices: [],
                part: {
                  name: null,
                  description: null,
                  category: null
                }
            }
        },
        methods: {
            addPrice() {
                this.prices.push({
                  quantity: 0,
                  price: 0
                });
                this.$forceUpdate()
            },
            removeValue(index) {
                this.prices.splice(index, 1);
            },
            change(val){
              this.$store.commit('part/savePart',{
                key: val.target.name,
                value: val.target.value
              })
            }
        },
        beforeDestroy(){
          this.$store.commit('part/savePrices',this.prices)
          this.$store.commit('part/savePart',this.part)
        }
    }
</script>

<style scoped>
  .select{
    @apply border border-gray-400 bg-white px-2 py-1 w-20 mr-2;
    height: 34px;
  }

  .chart-input{
    @apply border border-gray-400 px-2 py-1;

  }
</style>
