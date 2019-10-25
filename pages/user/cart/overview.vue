<template>
  <div class="lg:px-20">
    <h1 class="text-lg font-semibold heading-border border-b pb-3">Projects</h1>
    <div class="p-3 my-3 gradient-bg text-white">
      <div class="text-sm mb-1 lg:mb-0 lg:text-xl">Lamborghini Aventado and Something</div>
    </div>
    <table>
      <thead>
      <tr class="text-gray-800 h16">
        <th class="text-left ">Products</th>
        <th class="text-left lg:text-center">Color</th>
        <th class="text-left lg:text-center">Quantity</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr class="">
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
        <td class="lg:text-center" ><span class="inline-block mr-3">-</span>1<span class="inline-block ml-3">+</span></td>

        <td class="lg:text-right">
          <font-awesome-icon class="mr-1 h-4 cursor-pointer text-ideeza" :icon="['fas', 'trash']"/>
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
        <td class="lg:text-center" ><span class="inline-block mr-3">-</span>1<span class="inline-block ml-3">+</span></td>

        <td class="lg:text-right">
          <font-awesome-icon class="mr-1 h-4 cursor-pointer text-ideeza" :icon="['fas', 'trash']"/>
        </td>
      </tr>
      </tbody>
    </table>

    <div class="p-3 my-3 gradient-bg text-white">
      <div class="text-sm mb-1 lg:mb-0 lg:text-xl">Washing machines</div>
    </div>
    <table>
      <thead>
      <tr class="text-gray-800 h16">
        <th class="text-left ">Products</th>
        <th class="text-left lg:text-center">Color</th>
        <th class="text-left lg:text-center">Quantity</th>
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
        <td class="lg:text-center" ><span class="inline-block mr-3">-</span>1<span class="inline-block ml-3">+</span></td>

        <td class="lg:text-right">
          <font-awesome-icon class="mr-1 h-4 cursor-pointer text-ideeza" :icon="['fas', 'trash']"/>
        </td>
      </tr>
      </tbody>
    </table>


  </div>
</template>

<script>

    export default {
        name: "overview",
        mounted() {
          this.$store.commit('cartstepper/set', {position: 0})
        }
    }
</script>

<style scoped>
  .promo-field-container{
    width: 100%;
    max-width: 422px;
  }
  /*Table*/
  @screen lg{
    table{
      @apply mb-5 w-full table-auto border-collapse text-gray-600 mx-auto;
      max-width: 1050px;
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
      @apply border-t border-solid border-gray-400 py-3 my-3;
    }
    tbody tr:last-child td{
      @apply border-b border-solid border-gray-400 py-3 my-3;
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
    td:nth-of-type(4):before { content: "Quantity"; }
    td:nth-of-type(6):before { content: "Action"; }
  }
</style>
