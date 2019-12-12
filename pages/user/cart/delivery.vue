<template>
  <div class="py-10 lg:px-20  ">
    <div class="w-full border-b border-gray-500 flex pb-3 flex-col lg:flex-row justify-between items-center">
      <div class="flex items-center">
        <span class="font-semibold text-xl text-gray-500 mr-2">Shipping Services</span>
        <drop-down style-height="mini" :data="shippingServices" class="services-dropdown" />
      </div>
      <div><span class="text-gray-500 mr-2">Delivery time:</span> <span class="text-gray-800 font-semibold">2 to 5 business days</span></div>
    </div>

    <!--Shipping form-->
    <div class="cart-scroll-area">
      <smooth-scrollbar :options="{alwaysShowTracks: true}">
        <div class="my-5  lg:flex flex-wrap">
      <div class="lg:w-1/2 lg:pr-5">
        <div class="field-container mt-10">
          <div class="text-lg text-gray-800 mb-2">First name</div>
          <text-field placeholder="" />
        </div>
      </div>
      <div class="lg:w-1/2 lg:pl-5">
        <div class="field-container mt-10">
          <div class="text-lg text-gray-800 mb-2">Last name</div>
          <text-field placeholder="" />
        </div>
      </div>
      <div class="lg:w-1/2 lg:pr-5">
        <div class="field-container mt-10">
          <div class="text-lg text-gray-800 mb-2">Phone number</div>
          <text-field placeholder="" />
        </div>
      </div>
      <div class="lg:w-1/2 lg:pl-5">
        <div class="field-container mt-10">
          <div class="text-lg text-gray-800 mb-2">Email</div>
          <text-field placeholder="" />
        </div>
      </div>
      <div class="lg:w-1/2 lg:pr-5">
        <div class="field-container mt-10">
          <div class="text-lg text-gray-800 mb-2">Country</div>
          <drop-down data="" />
        </div>
      </div>
      <div class="lg:w-1/2 lg:pl-5">
        <div class="field-container mt-10">
          <div class="text-lg text-gray-800 mb-2">City</div>
          <drop-down data="" />
        </div>
      </div>
      <div class="lg:w-1/2 lg:pr-5">
        <div class="field-container mt-10">
          <div class="text-lg text-gray-800 mb-2">Address</div>
          <text-field placeholder="" />
        </div>
      </div>
      <div class="lg:w-1/6 lg:pl-5">
        <div class="field-container mt-10">
          <div class="text-lg text-gray-800 mb-2">Zip code</div>
          <text-field placeholder="" />
        </div>
      </div>
    </div>
      </smooth-scrollbar>
    </div>
  </div>
</template>

<script>
  import DropDown from '~/components/form/dropdown-field.vue'
  import TextField from '~/components/form/text-field.vue'
    export default {
        name: "delivery",
      data: function(){
          return {
            shippingServices: [
              'Ali Express Standard'
            ]
          }
      },
      mounted() {
        this.$store.commit('cartstepper/set', {position: 3})
      },
      components: {
        'text-field': TextField,
        'drop-down': DropDown
      }
    }
</script>

<style scoped>
  /deep/ .smooth-scrollbar{
    padding-right: 20px;
    margin-top: 15px;
  }
  .services-dropdown{
    width: 270px;
  }
</style>
