<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow mb-20">

      <div class="main-contents"><!--Status Cards-->
        <div class="lg:flex w-full cards-wrapper">
          <div class="flex-1 lg:mr-5 mr-0 mt-5 lg:mt-0">
            <h1 class="text-xl font-semibold text-gar-800 pl-3 lg:pl-0">Money Earned</h1>
            <div class="status-card bg-white shadow-md mt-5 p-3">
              <div class="text-right">
                <font-awesome-icon class="mr-1 h-4 cursor-pointer" :icon="['fas', 'ellipsis-h']"/>
              </div>
              <div class="flex justify-between items-center content-center ">
                <div class="text-gray-800 text-semibold text-xl lg:text-6xl">$25,00</div>
                <img src="~/static/icons/coins-icon.svg" class="object-center object-right" alt="">
              </div>
            </div>
          </div>

          <div class="flex-1 mt-5 lg:mr-5 lg:mt-0">
            <h1 class="text-xl font-semibold text-gar-800 pl-3 lg:pl-0">Feedback</h1>
            <div class="status-card bg-white shadow-md mt-5 p-3">
              <div class="text-right">
                <font-awesome-icon class="mr-1 h-4 cursor-pointer" :icon="['fas', 'ellipsis-h']"/>
              </div>
              <div class="flex justify-between items-center content-center ">
                <div class="text-gray-800 text-semibold text-xl lg:text-6xl">32</div>
                <img src="~/static/icons/feedback.svg" class="object-center object-right" alt="">
              </div>
            </div>
          </div>

          <div class="flex-1 mt-5 lg:mt-0">
            <h1 class="text-xl font-semibold text-gar-800 pl-3 lg:pl-0">Stars</h1>
            <div class="status-card bg-white shadow-md mt-5 p-3">
              <div class="text-right">
                <font-awesome-icon class="mr-1 h-4 cursor-pointer" :icon="['fas', 'ellipsis-h']"/>
              </div>
              <div class="flex justify-between items-center content-center ">
                <div class="text-gray-800 text-semibold text-xl lg:text-6xl">1400</div>
                <img src="~/static/icons/star-icon.svg" class="object-center object-right" alt="">
              </div>
            </div>
          </div>

        </div>

        <div class="flex mt-10">

          <div class="lg:mr-5 w-3/5">
            <h1 class="text-xl font-semibold text-gar-800 pl-3 lg:pl-0">Products Chart</h1>
            <img src="~/static/images/chart-sp.png" class="object-center object-right" alt="">
          </div>

          <div class="w-2/5 mt-5 lg:mt-0">
            <h1 class="text-xl font-semibold text-gar-800 pl-3 lg:pl-0">Messages</h1>
            <!--List-->
            <div class="success-stories shadow-md mt-5 relative px-2 py-4 bg-white">
              <div class="flex justify-between">
                <span class="text-gray-500 text-sm">2 tasks completed out of 10</span>
                <font-awesome-icon class="mr-1 h-4 cursor-pointer" :icon="['fas', 'ellipsis-h']"/>
              </div>

              <div class="mt-5 w-full lg:flex">
                <div class="px-2">
                  <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
                </div>
                <div class="">
                  <div class="text-sm text-gray-600"><span class="text-xl text-gray-800">William Doe </span> • 5 minutes ago</div>
                  <p class="text-sm">Great product, love the function of it, pcb card...</p>
                  <nuxt-link to="" class="text-sm text-ideeza inline-block">Reply </nuxt-link>
                  <nuxt-link to="" class="text-sm text-ideeza inline-block">Delete</nuxt-link>
                </div>  
              </div>
              
              <div class="mt-5 w-full lg:flex">
                <div class="px-2">
                  <img class="avatar" src="https://randomuser.me/api/portraits/men/20.jpg">
                </div>
                <div class="">
                  <div class="text-sm text-gray-600"><span class="text-xl text-gray-800">William Doe </span> • 5 minutes ago</div>
                  <p class="text-sm">Great product, love the function of it, pcb card...</p>
                  <nuxt-link to="" class="text-sm text-ideeza inline-block">Reply </nuxt-link>
                  <nuxt-link to="" class="text-sm text-ideeza inline-block">Delete</nuxt-link>
                </div>  
              </div>

              <div class="mt-5 w-full lg:flex">
                <div class="px-2">
                  <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
                </div>
                <div class="">
                  <div class="text-sm text-gray-600"><span class="text-xl text-gray-800">William Doe </span> • 5 minutes ago</div>
                  <p class="text-sm">Great product, love the function of it, pcb card...</p>
                  <nuxt-link to="" class="text-sm text-ideeza inline-block">Reply </nuxt-link>
                  <nuxt-link to="" class="text-sm text-ideeza inline-block">Delete</nuxt-link>
                </div>  
              </div>

              <div class="mt-5 w-full lg:flex">
                <div class="px-2">
                  <img class="avatar" src="https://randomuser.me/api/portraits/men/12.jpg">
                </div>
                <div class="">
                  <div class="text-sm text-gray-600"><span class="text-xl text-gray-800">William Doe </span> • 5 minutes ago</div>
                  <p class="text-sm">Great product, love the function of it, pcb card...</p>
                  <nuxt-link to="" class="text-sm text-ideeza inline-block">Reply </nuxt-link>
                  <nuxt-link to="" class="text-sm text-ideeza inline-block">Delete</nuxt-link>
                </div>  
              </div>
              <div class="mt-5 w-full lg:flex">
                <div class="px-2">
                  <img class="avatar" src="https://randomuser.me/api/portraits/men/20.jpg">
                </div>
                <div class="">
                  <div class="text-sm text-gray-600"><span class="text-xl text-gray-800">William Doe </span> • 5 minutes ago</div>
                  <p class="text-sm">Great product, love the function of it, pcb card...</p>
                  <nuxt-link to="" class="text-sm text-ideeza inline-block">Reply </nuxt-link>
                  <nuxt-link to="" class="text-sm text-ideeza inline-block">Delete</nuxt-link>
                </div>  
              </div>

            </div>

          </div>
        </div>

        <div class="mt-10 orders">
          <h1 class="text-xl font-semibold text-gar-800 pl-3 lg:pl-0 pb-3 mb-3 border-b border-solid border-gary-300">
            New Orders</h1>

          <div>
            <div class="hidden xl:flex justify-between">
              <div class="flex">
                <select class="field field--border-light mr-1 h-12">
                  <option>All payout methods</option>
                </select>
                <select class="field field--border-light mr-1 h-12">
                  <option>All type products</option>
                </select>
                <select class="field field--border-light mr-1 h-12">
                  <option>2018</option>
                </select>
                <select class="field field--border-light mr-1 h-12">
                  <option>Order status</option>
                </select>
              </div>
              <div>
                <div class="flex w-fit-content bg-white justify-center border-light-gray items-center content-center">
                  <div class="h-12 relative w-10">
                    <font-awesome-icon class="ml-1 h-4 text-gray-400 absolute-center-h-v" :icon="['fas', 'search']"/>
                  </div>
                  <input placeholder="search users" class="bg-white outline-none h-12 text-gray-800 pr-3">
                </div>

              </div>
            </div>
            <div class="xl:hidden cursor-pointer border-light-gray w-10 h-8 relative mt-2  ml-2 bg-white">
              <font-awesome-icon class="ml-1 h-6 text-gray-600 absolute-center-h-v" :icon="['fas', 'sliders-h']"/>
            </div>
          </div>

          <table class="mt-10 shadow-md">
            <thead>
              <tr class="text-gray-800 h16">
              <th class="text-left ">Image</th>
              <th class="text-left">Title</th>
              <th class="text-left">ID</th>
              <th class="text-left">Type</th>
              <th class="text-left">Quantity</th>
              <th class="text-left">Price</th>
              <th class="text-left">Order Status</th>
              <th class="text-left">Start - End</th>
              <th class="text-left"></th>
            </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td>
                   <img src="~/static/images/SP-ref0232.png" class="" alt="">
                </td>
                <td>
                  <h3 class="text-xl text-gray-900">Lamborghini Aventado PCB</h3>
                  <p class="text-sm text-gray-600">Electronics</p>
                  <p class="text-md text-gray-800">Order ID:  <span class="text-gray-800">1123123</span></p>
                </td>
                <td>12</td>
                <td>type</td>
                <td>
                  5
                </td>

                <td class="">$ 100</td>
                <td class="">
                  Opened
                </td>
                <td >
                  <p class="text-sm text-gray-600">start</p>
                  <p class="text-md text-gray-800">04/24/2018</p>
                </td>
                <td >
                  <button class="border bg-white border-gary-900 py-4 px-6 text-gray-000">
                    Invoice
                  </button>
                  <button class="border mt-4 bg-white border-gary-900 py-4 px-6 text-gray-000">
                    Details
                  </button>
                </td>
              </tr>

              <tr class="border-b">
                <td>
                   <img src="~/static/images/SP-ref0233.png" class="" alt="">
                </td>
                <td>
                  <h3 class="text-xl text-gray-900">Lamborghini Aventado PCB</h3>
                  <p class="text-sm text-gray-600">Electronics</p>
                  <p class="text-md text-gray-800">Order ID:  <span class="text-gray-800">1123123</span></p>
                </td>
                <td>12</td>
                <td>type</td>
                <td>
                  5
                </td>

                <td class="">$ 100</td>
                <td class="">
                  Opened
                </td>
                <td >
                  <p class="text-sm text-gray-600">start</p>
                  <p class="text-md text-gray-800">04/24/2018</p>
                </td>
                <td >
                  <button class="border bg-white border-gary-900 py-4 px-6 text-gray-000">
                    Invoice
                  </button>
                  <button class="border mt-4 bg-white border-gary-900 py-4 px-6 text-gray-000">
                    Details
                  </button>
                </td>
              </tr>
              
              
              
              
            </tbody>
          </table>

          <!--Table Stats-->
          <div class="mt-5 lg:flex justify-end">
            <div class="lg:w-3/5 p-3 lg:flex justify-between">
              <!--Paging-->
              <div class="flex items-center">
                <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'angle-double-left']"/>
                page 1 0f 9
                <font-awesome-icon class="ml-2 h-4 cursor-pointer" :icon="['fas', 'angle-double-right']"/>
              </div>

              <div class="flex items-center">


                <span class="inline-block ml-32">Show</span>
                <select class="field field--border-none ml-2 h-10">
                  <option>1-3</option>
                </select>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

  </div>


</template>

<script>
  import LeftMenu from '~/components/service-providers/common-left-side-menu.vue'

  export default {
    layout: 'service-providers',
    name: "dashboard-index",
    components: {
      LeftMenu
    },
    data: function () {
      return {}
    },
    computed: {
      leftMenu() {
        return this.$store.state.usermenu.openLeftMenu;
      }
    },
    mounted() {

    },
    methods: {}
  }
</script>

<style scoped>
  .cards-wrapper{
    max-width: 1530px;
  }
  .status-card{
    width: 100%;
    height: 100px;
  }
  .success-stories{
    width: 100%;
    max-width: 860px;
    max-height: 600px;
  }
  .overlay{
    background: rgba(0,0,0, 0.2);
  }
  .messages{
    width: 100%;
    max-width: 630px;
  }
  .orders{
    width: 100%;
    max-width: 1530px;
  }

  .avatar{
    @apply w-8 rounded-full -ml-5 shadow inline cursor-pointer;
  }
  .avatar:hover{
    @apply shadow-md;
  }
  .avatar:first-child{
    @apply ml-0;
  }

  @screen md{

    .status-card{

      /*width: 200px;
      height: 100px;*/
    }

  }


  @screen lg{
    .card-container{
      @apply w-1/4;
    }

    .status-card{
      height: 160px;
    }
    table{
      @apply mb-5 w-full table-fixed border-collapse text-gray-600;
    }
    thead tr{
      @apply bg-white px-6 pl-16;
    }
    thead th{
      @apply p-6;
    }
    thead th:first-child{
      @apply pl-16;
    }
    tbody td{
      @apply p-6;
    }
    tbody tr:even{
      @apply bg-white;
    }
    tbody td:first-child{
      @apply pl-16;
    }

  }

  @screen xl{
    .messages{
      width: 100%;
      max-width: 630px;
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
    td:nth-of-type(3):before { content: "Price"; }
    td:nth-of-type(4):before { content: "Quantity"; }
    td:nth-of-type(5):before { content: "Cost"; }
    td:nth-of-type(6):before { content: "Action"; }
  }
</style>
