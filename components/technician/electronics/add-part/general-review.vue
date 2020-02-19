<template>
  <div class="bg-white shadow-md">

    <div class="flex justify-between items-center  p-4">
      <div class="flex items-center">
        <img src="~/static/images/add-part.png" alt="">
        <div class="ml-5">
          <span class="block font-semibold">
            ATMEGA32M1-AU
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

    <div class="w-full flex p-4">
      <div class="w-1/2">
        <h1 class="font-semibold mb-3 pb-1 border-b border-solid border-gray-400">
          Details of the part
        </h1>
        <div class="my-2 pb-2 flex">
          <div class="font-semibold text-gray-600 w-32">Name</div>
          <div class="font-semibold ">{{part.name}}</div>

        </div>
        <div class="my-2 pb-2 flex">
          <div class="font-semibold text-gray-600 w-32">Category</div>
          <div class="font-semibold ">{{part.category}}</div>

        </div>
        <div class="my-2 pb-2 flex">
          <div class="font-semibold text-gray-600 w-32">Description</div>
          <div class="text-xs text-gray-600">
            {{part.description}}
          </div>

        </div>
      </div>
      <div class="w-1/2 ml-5">
        <h1 class="font-semibold mb-3 pb-1 border-b border-solid border-gray-400">
          Pricing
        </h1>
        <div class="my-2 pb-2 flex justify-between" v-for="price in part.pricings">
          <div class="font-semibold flex text-gray-600">
            <div class="w-20">Quantity</div>
            <div class="text-black">{{part.quantity}}</div>
          </div>

          <div class="font-semibold flex text-gray-600">
            <div class="w-20">Price</div>
            <div class="text-black">{{part.price}} $</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        name: "general-review",
        computed: {
          ...mapState({
            part: state => state.part.selected_part
          })
        }
    }
</script>

<style scoped>

</style>
