<template>
  <div>
    <div class="w-full px-4">
      <h2 class="text-3xl text-gray-700 py-6 font-bold">Get Paid</h2>
      <div class="bg-white rounded w-8/12 p-5 text-xl relative mt-8 flex">
        <div class="w-2/12">
          <div class="w-16 h-16 rounded-full bg-yellow-500 text-center pt-4">
            <font-awesome-icon class="text-xl text-white" :icon="['fas', 'exclamation']" />
          </div>
        </div>
        <div class="w-10/12 pr-5">
          <p>In order to withdraw earnings, please complete a <span class="text-ideeza">W8BEN Foreign status verification</span>. If you are a U.S. tax payer living outside of U.S, please complete a <span class="text-ideeza">W9 form</span>.</p>
        </div>
        <div class="absolute bottom-0 right-0 p-5">
          <font-awesome-icon class="text-xl mt-2 ml-4 text-black" :icon="['fas', 'times']" />
        </div>
      </div>
      <div class="bg-white rounded w-8/12 p-5 text-xl relative mt-8">
        <h2 class="text-3xl text-gray-700 py-6 font-bold">Balance</h2>
        <div class="flex">
          <div class="w-6/12">
            <p class="text-xl font-bold">Your balance is $0.00</p>
          </div>
          <div class="w-6/12">
            <button class="bg-gray-500 text-white text-xl py-4 px-16 rounded">Get paid now</button>
          </div>
        </div>
      </div>
      <div class="bg-white rounded w-8/12 p-5 text-xl relative mt-8">
        <div class="flex">
          <div class="w-6/12">
            <h2 class="text-3xl  font-bold">Payment details</h2>
          </div>
          <div class="w-6/12">
            <button class="bg-ideeza text-white text-xl py-4 px-16 rounded">Add method</button>
          </div>
        </div>
        <p class="text-xl text-black mt-8 font-bold">You have no setup with any payment methods yet.</p>
        <p class="text-xl text-gray-800">Tell us how you want to receive your funds.</p>
        <p class="text-xl text-gray-800">It may take up to 3 days to activate your payment method.</p>
      </div>
    </div>
  </div>
</template>
<script>
import apiService from "~/apiService/have_token.js";

export default {
  layout: 'service-provider-setting',

};

</script>
<style scoped>
select {
  max-width: none;
}

</style>
