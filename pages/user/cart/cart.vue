<template>
  <div class="lg:px-20">
    <h1 class="text-lg font-semibold heading-border border-b pb-3">Projects</h1>
    <div class="p-3 my-3 gradient-bg text-white flex justify-between gradient-bg items-center">
      <div class="text-sm mb-1 lg:mb-0 lg:text-xl">Lamborghini Aventado and Something</div>
      <font-awesome-icon class="mr-1 h-4 cursor-pointer text-white" :icon="['fas', 'trash']"/>
    </div>
    <table>
      <thead>
      <tr class="text-gray-800 h16">
        <th class="text-left ">Products</th>
        <th class="text-left lg:text-center">Color</th>
        <th class="text-left lg:text-center">Price</th>
        <th class="text-left lg:text-center">Quantity</th>
        <th class="text-left lg:text-center">Cost</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
        <tr class="" @click="details1 = !details1">
        <td class="product" >
          <div class="lg:flex">
            <div class="mr-2">
              <img src="~/static/images/Layercar.png">
            </div>
            <div class="my-auto">
                <span class="block font-semibold">
                  Lamborghini
                </span>
              <span class="block text-sm text-gray-500">
                  Electronics + Cover
                </span>
            </div>
          </div>
        </td>
        <td class="lg:text-center" >Red</td>
        <td class="lg:text-center" >
          <span class="font-semibold">$20,000</span>
        </td>
        <td class="lg:text-center" >
          <span class="inline-block mr-3">-</span>1<span class="inline-block ml-3">+</span>
        </td>
          <td class="font-semibold lg:text-center" ><font-awesome-icon class="mr-3 h-4 cursor-pointer" :icon="['fas', 'chevron-down']"/>$100,000</td>
        <td class="lg:text-right">
          <font-awesome-icon class="mr-1 h-4 cursor-pointer text-ideeza" :icon="['fas', 'trash']"/>
        </td>
      </tr>
        <tr v-if="details1" class="" >
          <td class="product" >

          </td>
          <td class="lg:text-center" ></td>
          <td class="lg:text-center" >
            <span class="font-semibold block ">Category</span>
            <span class="block mt-3">Electronics</span>
            <span class="block mt-3">Code</span>
          </td>
          <td class="lg:text-center" >
            <span class="font-semibold block">Manufacturer</span>
            <div class="block mt-3">PCB way, Cha...  <font-awesome-icon @click="openManufacturer = true" class="mr-3 h-4 cursor-pointer text-ideeza" :icon="['fas', 'pen']"/></div>
            <div class="block mt-3">Flying car N3, L...  <font-awesome-icon @click="openManufacturer = true" class="mr-3 h-4 cursor-pointer text-ideeza" :icon="['fas', 'pen']"/></div>
          </td>
          <td class="lg:text-center" >
            <span class="font-semibold block ">Price</span>
            <span class="block mt-3">$10,000</span>
            <span class="block mt-3">$5000</span>
          </td>
          <td class="lg:text-right">

          </td>
        </tr>
        <tr class="">
          <td class="product" >
            <div class="lg:flex">
              <div class="mr-2">
                <img src="~/static/images/Layercar.png">
              </div>
              <div class="my-auto">
                <span class="block font-semibold">
                  Audi
                </span>
                <span class="block text-sm text-gray-500">
                  Electronics + Cover
                </span>

              </div>
            </div>

          </td>
          <td class="lg:text-center" >Red</td>
          <td class="lg:text-center font-semibold" >$20,000</td>
          <td class="lg:text-center" ><span class="inline-block mr-3">-</span>1<span class="inline-block ml-3">+</span></td>
          <td class="font-semibold lg:text-center" ><font-awesome-icon class="mr-3 h-4 cursor-pointer" :icon="['fas', 'chevron-down']"/>$100,000</td>
          <td class="lg:text-right">
            <font-awesome-icon class="mr-1 h-4 cursor-pointer text-ideeza" :icon="['fas', 'trash']"/>
          </td>
        </tr>
      </tbody>

    </table>
    <div class="py-5 pr-5 text-right">
      Total: <span class="ml-3">$25000</span>
    </div>

    <div class="p-3 my-3 flex justify-between gradient-bg items-center text-white">
      <div class="text-sm mb-1 lg:mb-0 lg:text-xl">Washing machines</div>
      <font-awesome-icon class="mr-1 h-4 cursor-pointer text-white" :icon="['fas', 'trash']"/>
    </div>
    <table>
      <thead>
      <tr class="text-gray-800 h16">
        <th class="text-left ">Products</th>
        <th class="text-left lg:text-center">Color</th>
        <th class="text-left lg:text-center">Price</th>
        <th class="text-left lg:text-center">Quantity</th>
        <th class="text-left lg:text-center">Cost</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr class="">
        <td class="product" >
          <div class="lg:flex">
            <div class="mr-2">
              <img src="~/static/images/washing-machine.png">
            </div>
            <div class="my-auto">
                <span class="block font-semibold">
                  Bosh
                </span>
              <span class="block text-sm text-gray-500">
                  Electronics + Cover
                </span>

            </div>
          </div>

        </td>
        <td class="lg:text-center" >Silver</td>
        <td class="lg:text-center font-semibold" >$20,000</td>
        <td class="lg:text-center" ><span class="inline-block mr-3">-</span>1<span class="inline-block ml-3">+</span></td>
        <td class="font-semibold lg:text-center" ><font-awesome-icon class="mr-3 h-4 cursor-pointer" :icon="['fas', 'chevron-down']"/>$100,000</td>
        <td class="lg:text-right">
          <font-awesome-icon class="mr-1 h-4 cursor-pointer text-ideeza" :icon="['fas', 'trash']"/>
        </td>
      </tr>

      </tbody>

    </table>
    <div class="py-5 pr-5 text-right">
      Total: <span class="ml-3">$25000</span>
    </div>

    <Manufacturer @close="openManufacturer = false" v-if="openManufacturer" class="z-50" />
  </div>
</template>

<script>
    import Manufacturer from '~/components/user/cart/manufacturer.vue'
    export default {
      name: "cart",
      components: {
        Manufacturer
      },
      data: function() {
        return {
          details1: false,
          openManufacturer: false
        }
      },
      mounted() {
        this.$store.commit('cartstepper/set', {position: 2})
      },

    }
</script>

<style scoped>

  /*Table*/
  @screen lg{
    table{
      @apply mb-5 w-full table-auto border-collapse text-gray-600 mx-auto;

    }
    thead tr{
      @apply border-b-2 border-solid border-ideeza;
    }
    td.product{
      width: 350px;
    }
    td.product img{
      width: 180px;
    }
    tbody td{
      @apply py-3 my-3;
    }
    tbody tr:last-child td{
      @apply py-3 my-3;
    }
  }

  @media
  only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px)  {

    /* Force table to not be like tables anymore */
    table, thead, tbody, th, td, tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr { border: 1px solid #ccc; margin-bottom: 10px; }

    td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
    }

    td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
      font-weight: 600;
    }

    /*
      Label the data
      */
    td:nth-of-type(1):before { content: "Products"; }
    td:nth-of-type(2):before { content: "Color"; }
    td:nth-of-type(2):before { content: "Price"; }
    td:nth-of-type(4):before { content: "Quantity"; }
    td:nth-of-type(4):before { content: "Cost"; }
    td:nth-of-type(6):before { content: "Action"; }


  }
</style>
