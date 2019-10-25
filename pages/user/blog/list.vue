<template>
    <div class="blog-container">
      <h1 class="text-xl text-gray-800 font-semibold border-b heading-border pb-3">Your articles</h1>

      <div class="lg:flex justify-between items-center my-5">
        <nuxt-link to="/user/blog/add" class="btn btn-normal btn--ideeza px-10 py-4 block lg: iinline-block">Add new article <span class="ml-5">+</span></nuxt-link>
        <div class="flex w-fit-content bg-white justify-center border-light-gray items-center content-center mt-3 lg:mt-0">
          <div class="h-12 relative w-10 ">
            <font-awesome-icon class="ml-1 h-4 text-gray-400 absolute-center-h-v" :icon="['fas', 'search']"/>
          </div>
          <input placeholder="search article" class="bg-white outline-none h-12 text-gray-800 pr-3">
        </div>
      </div>


      <!--Blog List-->
      <div class="bg-white shadow-md p-0 lg:p-5">
        <table>
          <thead>
            <tr>
              <td >
                <img class="inline-block mr-1 align-baseline" src="~/static/icons/sort-arrows.png" alt="">
                Article name
              </td>
              <td class="flex items-center">
                <img class="inline-block mr-1 align-baseline" src="~/static/icons/sort-arrows.png" alt="">
                Date
              </td>
              <td>
                <img class="inline-block mr-1 align-baseline" src="~/static/icons/sort-arrows.png" alt="">
                Status
              </td>
              <td>
                <img class="inline-block mr-1 align-baseline" src="~/static/icons/sort-arrows.png" alt="">
                Actions
              </td>
              <td class="text-right">
                <font-awesome-icon class="mr-1 h-4 cursor-pointer" :icon="['fas', 'ellipsis-h']"/>
              </td>
            </tr>
          </thead>
          <tbody class="text-gray-800">
            <tr class="">
              <td class="font-semibold ">How Ideeza can make the world a better place</td>
              <td class="">1/12/2017</td>
              <td class="text-green-500 font-semibold">Approved</td>
              <td class="text-gray-500">
                <nuxt-link to="/user/blog/view">
                  <font-awesome-icon class="mr-1 h-3 cursor-pointer hover:text-gray-800" :icon="['fas', 'eye']"/>
                </nuxt-link>
                <font-awesome-icon class="mr-1 h-3 cursor-pointer hover:text-gray-800" :icon="['fas', 'envelope']"/>
                <font-awesome-icon class="mr-1 h-3 cursor-pointer hover:text-gray-800" :icon="['fas', 'check']"/>
                <font-awesome-icon class="mr-1 h-3 cursor-pointer hover:text-gray-800" :icon="['fas', 'times']"/>
              </td>
              <td></td>
            </tr>
            <tr class="">
              <td class="font-semibold ">How Ideeza can make the world a better place</td>
              <td class="">1/12/2017</td>
              <td class="font-semibold">Closed</td>
              <td class="text-gray-500">
                <nuxt-link to="/user/blog/view">
                  <font-awesome-icon class="mr-1 h-3 cursor-pointer hover:text-gray-800" :icon="['fas', 'eye']"/>
                </nuxt-link>
                <font-awesome-icon class="mr-1 h-3 cursor-pointer hover:text-gray-800" :icon="['fas', 'envelope']"/>
                <font-awesome-icon class="mr-1 h-3 cursor-pointer hover:text-gray-800" :icon="['fas', 'check']"/>
                <font-awesome-icon class="mr-1 h-3 cursor-pointer hover:text-gray-800" :icon="['fas', 'times']"/>
              </td>
              <td></td>
            </tr>
            <tr class="">
              <td class="font-semibold ">How Ideeza can make the world a better place</td>
              <td class="">1/12/2017</td>
              <td class="text-red-500 font-semibold">Not Approved</td>
              <td class="text-gray-500">
                <nuxt-link to="/user/blog/view">
                  <font-awesome-icon class="mr-1 h-3 cursor-pointer hover:text-gray-800" :icon="['fas', 'eye']"/>
                </nuxt-link>

                <font-awesome-icon class="mr-1 h-3 cursor-pointer hover:text-gray-800" :icon="['fas', 'envelope']"/>
                <font-awesome-icon class="mr-1 h-3 cursor-pointer hover:text-gray-800" :icon="['fas', 'check']"/>
                <font-awesome-icon class="mr-1 h-3 cursor-pointer hover:text-gray-800" :icon="['fas', 'times']"/>
              </td>
              <td></td>
            </tr>
            <tr class="">
              <td class="font-semibold ">How Ideeza can make the world a better place</td>
              <td class="">1/12/2017</td>
              <td class="text-green-500 font-semibold">Approved</td>
              <td class="text-gray-500">
                <nuxt-link to="/user/blog/view">
                  <font-awesome-icon class="mr-1 h-3 cursor-pointer hover:text-gray-800" :icon="['fas', 'eye']"/>
                </nuxt-link>
                <font-awesome-icon class="mr-1 h-3 cursor-pointer hover:text-gray-800" :icon="['fas', 'envelope']"/>
                <font-awesome-icon class="mr-1 h-3 cursor-pointer hover:text-gray-800" :icon="['fas', 'check']"/>
                <font-awesome-icon class="mr-1 h-3 cursor-pointer hover:text-gray-800" :icon="['fas', 'times']"/>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <!--Table Stats-->
        <div class="mt-5 relative">

          <!--Paging-->
          <div class="mx-auto w-content">
            <span class="inline-block mr-4 cursor-pointer"><font-awesome-icon class="mr-1 h-4" :icon="['fas', 'angle-double-left']"/> Previous</span>
            1 <span class="text-lg text-ideeza">2</span> 3
            <span class="inline-block ml-4 cursor-pointer">Next <font-awesome-icon class="ml-2 h-4" :icon="['fas', 'angle-double-right']"/></span>
          </div>

          <div class="lg:absolute flex items-center top-0 w-content lg:w-auto right-0 my-3 lg:my-0 mx-auto lg:mx-0">


            <span class="inline-block">Show</span>
            <select class="inline field ml-2 h-10">
              <option>1-3</option>
            </select>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "blog-list"
    }
</script>

<style scoped>
  .blog-container{
    width: 100%;
    max-width: 1530px;
    padding: 20px 5px;
  }


  @screen lg{
    .blog-container{
      padding: 60px 50px;
    }
    /*Table*/
    table{
      @apply mb-5 w-full border-collapse text-gray-600;
    }

    tbody td{
      @apply py-5 pr-2;
    }

    tbody tr:nth-child(odd){
      @apply bg-gray-100;
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
    td:nth-of-type(1):before { content: "Article name"; }
    td:nth-of-type(2):before { content: "Date"; }
    td:nth-of-type(3):before { content: "Status"; }
    td:nth-of-type(4):before { content: "Actions"; }
  }

</style>
