<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="main-contents">

        <h1 class="text-2xl border-b-4 border-solid border-ideeza pb-5 mt-8">Projects</h1>
        <div class="mt-5 mb-10 lg:flex justify-between">
          <div class="flex">
            <drop-down class="w-32 mr-10" :data="dataDropDown" selected="All" />
            <search-field placeholder="Search Project..." />
          </div>
          <div>
            <button @click.self="addNewProject=true" class="btn btn-normal btn--ideeza px-5 py-3">Create New +</button>
            <drop-down class="w-48 block mt-5" styleHeight="mini" :data="sortDropDown" placeholder="Sort By" />
          </div>
        </div>

        <table class="mt-10 shadow-md">
          <thead>
          <tr class="text-white h16 gradient-bg">
            <th class="text-left ">Projects</th>
            <th class="text-left">Assigned to</th>
            <th class="text-left">Due Date</th>
            <th class="text-left">Task Status</th>
            <th class="text-left">Notification</th>
          </tr>
          </thead>
          <tbody>
          <tr class="bg-ideeza-100">
            <td >
              <nuxt-link to="/technician/projects/detail">
                Iron Making
              </nuxt-link>

            </td>
            <td>
              <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
              <img class="avatar" src="https://randomuser.me/api/portraits/men/20.jpg">
              <img class="avatar" src="https://randomuser.me/api/portraits/men/12.jpg">
            </td>
            <td>05.05.2019</td>
            <td class="status status--completed">COMPLETED</td>
            <td class="notifications">
              2 new notifications
            </td>


          </tr>
          <tr class="">
            <td >
              <nuxt-link to="/technician/projects/detail">
                Iron Making
              </nuxt-link>
            </td>
            <td>
              <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
              <img class="avatar" src="https://randomuser.me/api/portraits/men/20.jpg">
              <img class="avatar" src="https://randomuser.me/api/portraits/men/12.jpg">
            </td>
            <td>05.05.2019</td>
            <td class="status status--over">over due</td>
            <td class="notifications">
              2 new notifications
            </td>


          </tr>
          <tr class="bg-ideeza-100">
            <td >
              <nuxt-link to="/technician/projects/detail">
                Iron Making
              </nuxt-link>
            </td>
            <td>
              <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
              <img class="avatar" src="https://randomuser.me/api/portraits/men/20.jpg">
              <img class="avatar" src="https://randomuser.me/api/portraits/men/12.jpg">
            </td>
            <td>05.05.2019</td>
            <td class="status status--progress">in progress</td>
            <td class="notifications">
              2 new notifications
            </td>


          </tr>
          <tr class="">
            <td >
              <nuxt-link to="/technician/projects/detail">
                Iron Making
              </nuxt-link>
            </td>
            <td>
              <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
              <img class="avatar" src="https://randomuser.me/api/portraits/men/20.jpg">
              <img class="avatar" src="https://randomuser.me/api/portraits/men/12.jpg">
            </td>
            <td>05.05.2019</td>
            <td class="status status--completed">COMPLETED</td>
            <td class="notifications">
              2 new notifications
            </td>


          </tr>

          </tbody>
        </table>

        <!--Table Stats-->
        <div class="mt-10 lg:flex justify-center">
          <div class="flex items-center">
            <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'angle-double-left']"/>
            page 1 0f 9
            <font-awesome-icon class="ml-2 h-4 cursor-pointer" :icon="['fas', 'angle-double-right']"/>
          </div>
        </div>

        <!--Add new project-->
        <new-project @onClose="addNewProject=false" v-if="addNewProject" />


      </div>
    </div>

  </div>


</template>

<script>
  import LeftMenu from '~/components/technician/common-left-side-menu.vue'
  import DropDownField from "~/components/form/dropdown-field.vue"
  import SearchField from "~/components/form/search.vue"
  import AddNewProject from "~/components/technician/management/new-project.vue"

  export default {
    layout: 'user',
    name: "projects-index",
    components: {
      LeftMenu,
      'drop-down': DropDownField,
      'search-field': SearchField,
      'new-project': AddNewProject
    },
    data: function () {
      return {
        addNewProject: false,
        dataDropDown : ['All', 'Active', 'Completed', 'Priority', 'Over Due'],
        sortDropDown : ['None', 'Due Date First', 'Starting Day First', 'Chronologycal', 'Alphabetical']
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
  .avatar{
    @apply w-8 rounded-full -ml-5 shadow inline cursor-pointer;
  }
  .avatar:hover{
    @apply shadow-md;
  }
  .avatar:first-child{
    @apply ml-0;
  }
  .status {
    @apply uppercase;
  }
  .status--completed{
    @apply text-green-500;
  }
  .status--progress{
    @apply text-orange-500;
  }
  .status--over{
    @apply text-red-500;
  }
  .notifications{
    @apply text-sm text-ideeza;
  }
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
      @apply p-6 border-r border-solid border-gray-300;
    }
    tbody tr:even{
      @apply bg-white;
    }
    tbody td:first-child{
      @apply pl-16;
    }
    tbody td:last-child{
      @apply border-r-0;
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
