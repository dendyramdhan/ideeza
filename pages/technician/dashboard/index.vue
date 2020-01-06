<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow mb-20">

      <div class="main-contents"><!--Status Cards-->
        <div class="lg:flex w-full cards-wrapper items-center">
          <div class="card-container lg:mr-5 mr-0 mt-5 lg:mt-0">
            <h1 class="text-3xl font-semibold text-gar-800 pl-3 lg:pl-0">Good morning, Chan!</h1>
          </div>
          <div class="card-container lg:mr-5 mr-0 mt-5 lg:mt-0">
            <div class="mx-auto lg:mx-none status-card bg-white shadow-lg rounded-lg mt-5 px-3 py-5 relative">
              <div class="text-base">Open Tickets</div>
              <div class="flex justify-between items-center content-center ">
                <div class="text-gray-800 text-bold text-xl lg:text-3xl">
                  <div>56</div>
                </div>
                <img src="~/static/images/opened-tickets.png" class="w-12 object-center object-right mr-5" alt="">
              </div>
            </div>
          </div>


          <div class="card-container lg:mr-5 mr-0 mt-5 lg:mt-0">
            <div class="mx-auto lg:mx-none status-card bg-white shadow-lg rounded-lg mt-5 px-3 py-5 relative">
              <div class="text-base">Unopened Tickets</div>
              <div class="flex justify-between items-center content-center ">
                <div class="text-gray-800 text-bold text-xl lg:text-3xl">
                  <div>56</div>
                </div>
                <img src="~/static/images/un-opened-tickets.png" class="w-12 object-center object-right mr-5" alt="">
              </div>
            </div>
          </div>

          <div class="card-container mt-5 lg:mr-5 lg:mt-0">
            <div class="mx-auto lg:mx-none status-card bg-white shadow-lg rounded-lg mt-5 px-3 py-5 relative">
              <div class="text-base">On Hold Tickets</div>
              <div class="flex justify-between items-center content-center ">
                <div class="text-gray-800 text-bold text-xl lg:text-3xl">
                  <div>56</div>
                </div>
                <img src="~/static/images/on-hold-tickets.png" class="w-12 object-center object-right mr-5" alt="">
              </div>
            </div>
          </div>

          <div class="card-container mt-5 lg:mt-0">
            <div class="mx-auto lg:mx-none status-card bg-white shadow-lg rounded-lg mt-5 px-3 py-5 relative">
              <div class="text-base">Finished Tickets</div>
              <div class="flex justify-between items-center content-center ">
                <div class="text-gray-800 text-bold text-xl lg:text-3xl">
                  <div>56</div>
                </div>
                <img src="~/static/images/finished-tickets.png" class="w-12 object-center object-right mr-5" alt="">
              </div>
            </div>
          </div>

        </div>

        <div class="xl:flex mt-10 justify-between">

          <div class="lg:mr-5 lg:w-2/3 md:w-full">
            <h1 class="text-xl font-semibold text-gar-800 pl-3 lg:pl-0">Project Management</h1>
            <!--List-->
            <div class="shadow-md mt-5 relative p-6 bg-white">
              <div class="flex justify-between">
                <span class="text-gray-500 text-sm">2 tasks completed out of 10</span>
                <font-awesome-icon class="mr-1 h-4 cursor-pointer" :icon="['fas', 'ellipsis-h']"/>
              </div>

              <div class="mt-5 w-full lg:flex justify-between items-center">
                <div class="text-sm font-bold text-black w-1/3">
                  Title
                </div>
                <div class="text-sm font-bold text-black w-1/5">
                  Domain
                </div>
                <div class="text-sm font-bold text-black w-1/5">
                  Due Date
                </div>
                <div class="text-sm font-bold text-black w-1/5">
                  Progress
                </div>
              </div>

              <div class="mt-5 w-full lg:flex justify-between items-center">
                <div class="text-sm text-gray-600 w-1/3">
                  <nuxt-link to="/technician/projects/technician-detail">
                    Washing Machine Repairments
                  </nuxt-link>

                </div>
                <div class="w-1/5">
                  Electronics
                </div>
                <div class="text-sm text-gray-600 w-1/5 bg-gray-700 text-center rounded-full relative">
                <span class="absolute due-date text-white">16.11.2019</span>
                <div class="bg-ideeza rounded-full h-6" style="width:30%;">

                </div>
                </div>
                <div class="text-sm text-orange-600 w-1/5">IN PROGRESS</div>
              </div>
              <div class="mt-5 w-full lg:flex justify-between items-center">
                <div class="text-sm text-gray-600 w-1/3">
                  <nuxt-link to="/technician/projects/technician-detail">
                    Washing Machine Repairments
                  </nuxt-link>

                </div>
                <div class="w-1/5">
                  Electronics
                </div>
                <div class="text-sm text-gray-600 w-1/5 bg-gray-700 text-center rounded-full relative">
                <span class="absolute due-date text-white">16.11.2019</span>
                <div class="bg-ideeza rounded-full h-6" style="width:40%;">

                </div>
                </div>
                <div class="text-sm text-orange-600 w-1/5">IN PROGRESS</div>
              </div>
              <div class="mt-5 w-full lg:flex justify-between items-center">
                <div class="text-sm text-gray-600 w-1/3">
                  <nuxt-link to="/technician/projects/technician-detail">
                    Washing Machine Repairments
                  </nuxt-link>

                </div>
                <div class="w-1/5">
                  Code
                </div>
                <div class="text-sm text-gray-600 w-1/5 bg-gray-700 text-center rounded-full relative">
                <span class="absolute due-date text-white">16.11.2019</span>
                <div class="bg-ideeza rounded-full h-6" style="width:80%;">

                </div>
                </div>
                <div class="text-sm text-orange-600 w-1/5">IN PROGRESS</div>
              </div>
              <div class="mt-5 w-full lg:flex justify-between items-center">
                <div class="text-sm text-gray-600 w-1/3">
                  <nuxt-link to="/technician/projects/technician-detail">
                    Washing Machine Repairments
                  </nuxt-link>

                </div>
                <div class="w-1/5">
                  Electronics
                </div>
                <div class="text-sm text-gray-600 w-1/5 bg-gray-700 text-center rounded-full relative">
                <span class="absolute due-date text-white">16.11.2019</span>
                <div class="bg-ideeza rounded-full h-6" style="width:40%;">

                </div>
                </div>
                <div class="text-sm text-orange-600 w-1/5">IN PROGRESS</div>
              </div>
              <div class="mt-5 w-full lg:flex justify-between items-center">
                <div class="text-sm text-gray-600 w-1/3">
                  <nuxt-link to="/technician/projects/technician-detail">
                    Washing Machine Repairments
                  </nuxt-link>

                </div>
                <div class="w-1/5">
                  Code
                </div>
                <div class="text-sm text-gray-600 w-1/5 bg-gray-700 text-center rounded-full relative">
                <span class="absolute due-date text-white">16.11.2019</span>
                <div class="bg-ideeza rounded-full h-6" style="width:20%;">

                </div>
                </div>
                <div class="text-sm text-orange-600 w-1/5">IN PROGRESS</div>
              </div>
            </div>
            <div class="mt-10 orders">
          <h1 class="text-xl font-semibold text-gar-800 pl-3 lg:pl-0 pb-3 mb-3 border-b border-solid border-gary-300">
            Message Center</h1>

          <div>
            <div class="hidden xl:flex justify-between">
              <div class="flex flex-wrap">
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
              <th class="text-left ">Username</th>
              <th class="text-left">Role</th>
              <th class="text-left">Actions</th>
              <th class="text-right"><font-awesome-icon class="mr-1 h-4 cursor-pointer" :icon="['fas', 'ellipsis-h']"/></th>
            </tr>
            </thead>
            <tbody>
              <tr class="">
                <td >
                  Moran Biten

                </td>
                <td>Service Provider</td>

                <td>
                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']"/>
                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'envelope']"/>
                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'check']"/>
                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'pause']"/>
                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'times']"/>
                </td>
                <td class="lg:text-right text-xs">
                  5 mins ago
                </td>
              </tr>
              <tr class="bg-white">
                <td >
                  Moran Biten

                </td>
                <td>Service Provider</td>
                <td>
                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']"/>
                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'envelope']"/>
                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'check']"/>
                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'pause']"/>
                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'times']"/>
                </td>
                <td class="lg:text-right text-xs">
                  5 mins ago
                </td>
              </tr>
              <tr class="">
                <td >
                  Moran Biten

                </td>
                <td>Service Provider</td>
                <td>
                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']"/>
                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'envelope']"/>
                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'check']"/>
                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'pause']"/>
                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'times']"/>
                </td>
                <td class="lg:text-right text-xs">
                  5 mins ago
                </td>
              </tr>
              <tr class="bg-white">
                <td >
                  Moran Biten

                </td>
                <td>Service Provider</td>
                <td>
                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']"/>
                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'envelope']"/>
                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'check']"/>
                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'pause']"/>
                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'times']"/>
                </td>
                <td class="lg:text-right text-xs">
                  5 mins ago
                </td>
              </tr>
              <tr class="">
                <td >
                  Moran Biten

                </td>
                <td>Service Provider</td>
                <td>
                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']"/>
                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'envelope']"/>
                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'check']"/>
                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'pause']"/>
                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'times']"/>
                </td>
                <td class="lg:text-right text-xs">
                  5 mins ago
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

          <div class="mt-5 lg:mt-0 md:w-1/3">
            <vc-calendar class="mx-auto bg-white box-shadow rounded mb-3" color="pink" is-expanded :theme="theme" />
            <div class="bg-white shadow rounded">
            <div class="py-3 px-5 bg-ideeza text-white text-center rounded">3rd March</div>
            <hr class="my-1">
            <ul class="shadow-lg">
                 <li class="flex justify-between hover:bg-ideeza-dark py-3 px-5 event">
                    <div>
                        <div class="text text-sm font-bold">Finish ELectronics Part</div>
                        <div class="text text-xs">Completed</div>
                    </div>
                    <div class="event-icons text-right">
                         <font-awesome-icon class="text text-xs text-gray-500 mr-2" :icon="['fa', 'pen']" />
                        <font-awesome-icon class="text text-sm text-gray-500" :icon="['fas', 'times']" />
                    </div>
                </li>
                <li class="flex justify-between hover:bg-ideeza-dark py-3 px-5 event">
                    <div>
                        <div class="text text-sm font-bold">Finish ELectronics Part</div>
                        <div class="text text-xs">Completed</div>
                    </div>
                    <div class="event-icons text-right">
                         <font-awesome-icon class="text text-xs text-gray-500 mr-2" :icon="['fa', 'pen']" />
                        <font-awesome-icon class="text text-sm text-gray-500" :icon="['fas', 'times']" />
                    </div>
                </li>
                <li class="flex justify-between hover:bg-ideeza-dark py-3 px-5 event">
                    <div>
                        <div class="text text-sm font-bold">Finish ELectronics Part</div>
                        <div class="text text-xs">Completed</div>
                    </div>
                    <div class="event-icons text-right">
                         <font-awesome-icon class="text text-xs text-gray-500 mr-2" :icon="['fa', 'pen']" />
                        <font-awesome-icon class="text text-sm text-gray-500" :icon="['fas', 'times']" />
                    </div>
                </li>
                <li class="flex justify-between hover:bg-ideeza-dark py-3 px-5 event">
                    <div>
                        <div class="text text-sm font-bold">Finish ELectronics Part</div>
                        <div class="text text-xs">Completed</div>
                    </div>
                    <div class="event-icons text-right">
                         <font-awesome-icon class="text text-xs text-gray-500 mr-2" :icon="['fa', 'pen']" />
                        <font-awesome-icon class="text text-sm text-gray-500" :icon="['fas', 'times']" />
                    </div>
                </li>
            </ul>
        </div>
          </div>
        </div>
      </div>

    </div>

  </div>


</template>

<script>
  import LeftMenu from '~/components/technician/common-left-side-menu.vue'

  export default {
    layout: 'technician',
    name: "dashboard-index",
    components: {
      LeftMenu
    },
    data: function () {
      return {
        theme: {
          container: {
            light: 'ideeza-date-picker',
          },
          arrows: {
            light: 'ideeza-arrow',
          },
        },
      }
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
  .due-date{
    transform: translateX(-50%);
  }
  .cards-wrapper{
    max-width: 1530px;
  }
  .status-card{
    width: 100%;
  }
  .status-card img{
    top: 60%;
    position: absolute;
    right: 0;
    transform: translateY(-50%);
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
