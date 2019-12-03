<template>
  <div class="py-10 lg:px-20  ">
    <div class="w-full border-b border-gray-500 flex pb-3">
      <div class="flex flex-col lg:flex-row lg:items-center">
        <span class="font-semibold text-xl text-gray-500 mr-2">Choose payment method</span>
        <img class="lg:inline-block w-20 lg:w-auto mt-5 lg:mt-0  lg:mx-12" src="~/static/images/visa_logo.png">
        <img class="lg:inline-block w-20 lg:w-auto lg:mr-12 mt-5 lg:mt-0" src="~/static/images/mastercard-logo.png">
        <img class="lg:inline-block w-20 lg:w-auto mt-5 lg:mt-0" src="~/static/images/paypal-logo.png">
      </div>

    </div>

    <!--Shipping form-->
    <div class="mt-5 lg:flex flex-wrap">
      <div class="lg:w-1/2 lg:pr-5">
        <div class="field-container mt-10">
          <div class="text-lg text-gray-800 mb-2">Card holder name</div>
          <text-field placeholder="" />
        </div>
      </div>
      <div class="lg:w-1/2 lg:pl-5">
        <div class="field-container mt-10">
          <div class="text-lg text-gray-800 mb-2">Card number</div>
          <text-field placeholder="" />
        </div>
      </div>
      <div class="lg:w-1/2 lg:pr-5">
        <div class="field-container mt-10">
          <div class="text-lg text-gray-800 mb-2">End date</div>
          <drop-down class="inline-block lg:w-1/6 w-1/3 " data="" placeholder="mm" />
          <drop-down class="inline-block lg:w-1/6 w-1/3" data="" placeholder="yyyy" />
        </div>
      </div>
      <div class="lg:w-1/6 lg:pl-5">
        <div class="field-container mt-10">
          <div class="text-lg text-gray-800 mb-2">CVV <font-awesome-icon class="ml-2 h-5 text-gray-500" :icon="['fas', 'info-circle']"/></div>
          <text-field placeholder="" />
        </div>
      </div>


    </div>
  </div>
</template>

<script>
  import DropDown from '~/components/form/dropdown-field.vue'
  import TextField from '~/components/form/text-field.vue'
    export default {
        name: "payment",
      data: function(){
          return {
            shippingServices: [
              'Ali Express Standard'
            ]
          }
      },
      mounted() {
        this.$store.commit('cartstepper/set', {position: 4})
      },
      components: {
        'text-field': TextField,
        'drop-down': DropDown
      }
    }
</script>

<style scoped>
  .services-dropdown{
    width: 270px;
  }
</style>
