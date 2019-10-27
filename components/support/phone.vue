<template>
  <div class="phone-support lg:flex flex-wrap justify-center">
    <div class="lg:w-1/3 mt-10">
      <img src="~/static/images/map.png" class="object-cover object-center w-full" alt="">
    </div>
    <div class="lg:w-1/3 lg:px-5 mt-10">
      <img src="~/static/images/city.png" class="object-cover object-center w-full h-full" alt="">
    </div>
    <div class="lg:w-1/3 mt-10">
      <h1 class="text-xl lg:text-4xl font-semibold">City name, Isreal</h1>
      <div class="my-10 text-lg text-ideeza font-semibold">+1122334455</div>
      <div class="text-gray-700 leading-loose">
        Ideeza LTD,<br>
        The unreachable Building,<br>
        Happy Lane, LS1 2A0<br>
        (+1) 0123 45678990
      </div>
      <div class="mt-20 flex items-center cursor-pointer">
        <span class="font-semibold text-2xl inline-block">Get directions</span>
        <font-awesome-icon class="text-ideeza ml-5 h-4 inline-block" :icon="['fas', 'chevron-right']"/>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "phone"
    }
</script>

<style scoped>
  .phone-support{
    width: 100%;
  }
</style>
