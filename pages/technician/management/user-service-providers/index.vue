<template>
  <div>
    <h1 class="text-2xl border-b-4 border-solid border-ideeza pb-5 mt-8">Manage Users & Service Providers</h1>

    <div class="mt-10">
      <div>
        <div class="hidden xl:flex justify-between">
          <div class="flex">
            <select class="field field--border-light mr-1 h-12">
              <option>All roles</option>
            </select>
            <select class="field field--border-light mr-1 h-12">
              <option>All status type</option>
            </select>
            <select class="field field--border-light mr-1 h-12">
              <option>Date</option>
            </select>
            <select class="field field--border-light mr-1 h-12">
              <option>All columns</option>
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
          <th class="text-left">Status</th>
          <th class="text-left">Join Date</th>
          <th class="text-left">Rate</th>
          <th class="text-left">Actions</th>
          <th class="text-right"><font-awesome-icon class="mr-1 h-4 cursor-pointer" :icon="['fas', 'ellipsis-h']"/></th>
        </tr>
        </thead>
        <tbody>
        <tr class="">
          <td >
            <nuxt-link to="/technician/user-profile">
              Moran Biten
            </nuxt-link>


          </td>
          <td>Service Provider</td>
          <td>Active</td>
          <td>1/12/2017</td>
          <td>
            <img class="inline" src="~/static/images/star.png" alt="">
            <img class="inline" src="~/static/images/star.png" alt="">
            <img class="inline" src="~/static/images/star.png" alt="">
            <img class="inline" src="~/static/images/star.png" alt="">
            <img class="inline" src="~/static/images/star.png" alt="">
          </td>

          <td class="lg:text-right">
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
            <nuxt-link to="/technician/user-profile">
              Moran Biten
            </nuxt-link>

          </td>
          <td>Service Provider</td>
          <td>Active</td>
          <td>1/12/2017</td>
          <td>
            <img class="inline" src="~/static/images/star.png" alt="">
            <img class="inline" src="~/static/images/star.png" alt="">
            <img class="inline" src="~/static/images/star.png" alt="">
            <img class="inline" src="~/static/images/star.png" alt="">
            <img class="inline" src="~/static/images/star.png" alt="">
          </td>

          <td class="lg:text-right">
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
            <nuxt-link to="/technician/user-profile">
              Moran Biten
            </nuxt-link>

          </td>
          <td>Service Provider</td>
          <td>Active</td>
          <td>1/12/2017</td>
          <td>
            <img class="inline" src="~/static/images/star.png" alt="">
            <img class="inline" src="~/static/images/star.png" alt="">
            <img class="inline" src="~/static/images/star.png" alt="">
            <img class="inline" src="~/static/images/star.png" alt="">
            <img class="inline" src="~/static/images/star.png" alt="">
          </td>

          <td class="lg:text-right">
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
            <nuxt-link to="/technician/user-profile">
              Moran Biten
            </nuxt-link>

          </td>
          <td>Service Provider</td>
          <td>Active</td>
          <td>1/12/2017</td>
          <td>
            <img class="inline" src="~/static/images/star.png" alt="">
            <img class="inline" src="~/static/images/star.png" alt="">
            <img class="inline" src="~/static/images/star.png" alt="">
            <img class="inline" src="~/static/images/star.png" alt="">
            <img class="inline" src="~/static/images/star.png" alt="">
          </td>

          <td class="lg:text-right">
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
            <nuxt-link to="/technician/user-profile">
              Moran Biten
            </nuxt-link>

          </td>
          <td>Service Provider</td>
          <td>Active</td>
          <td>1/12/2017</td>
          <td>
            <img class="inline" src="~/static/images/star.png" alt="">
            <img class="inline" src="~/static/images/star.png" alt="">
            <img class="inline" src="~/static/images/star.png" alt="">
            <img class="inline" src="~/static/images/star.png" alt="">
            <img class="inline" src="~/static/images/star.png" alt="">
          </td>

          <td class="lg:text-right">
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
</template>

<script>

    export default {
        name: "user-service-providers",

    }
</script>

<style scoped>
  @screen lg{

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
