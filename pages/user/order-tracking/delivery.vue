<template>
  <div class="">
    <div class="track-heading">Delivering your order</div>
    <div class="progress-bar">
      <div class="h-full bg-ideeza flex justify-end items-center relative" :style="`width: ${width}%`">
        <img class="mr-5" src="~/static/icons/truck-icon.svg" alt="">
        <div class="percent-container">{{`${width}%`}}</div>
      </div>
    </div>

    <div class="flex justify-center mt-10">
      <div>
        <span class="text-xl text-gray-500 font-semibold block">FROM</span>
        <span class="text-2xl text-gray-800 font-semibold block">Oklahoma, Ohio</span>
      </div>
      <div class="mx-5">
        <span class="text-xl text-gray-500 font-semibold block">TO</span>
        <span class="text-2xl text-gray-800 font-semibold block">Toronto, Canada</span>
      </div>
      <div class="">
        <span class="text-xl text-gray-500 font-semibold block">Estimated time</span>
        <span class="text-2xl text-gray-800 font-semibold block">~ 44 minutes left</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Truck from '~/components/partials/icons/track-truck-icon.vue'
    export default {
        name: "making-product",
      components: {
        Truck
      },
      data: function(){
        return {
          width: 40
        }
      },
      mounted() {
        this.$store.commit('trackstepper/set', {position: 1})
      }
    }
</script>

<style scoped>
  .track-heading{
    @apply text-2xl font-semibold relative;
    width: fit-content;
  }
  .track-heading:before{
    @apply border-b-4 border-solid border-ideeza left-0;
    content: "";
    position: absolute;
    width: 80px;
    bottom: -10px;
  }
  .progress-bar{
    @apply my-10 w-full border border-solid border-ideeza relative;
    height: 100px;
  }
  .percent-container{
    @apply flex items-center h-full pl-16 font-semibold text-ideeza text-xl bg-gray-100;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 60% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 60% 100%);
  }
</style>
