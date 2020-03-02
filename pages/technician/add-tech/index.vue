<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />
    <div class="w-full px-4">
      <div class="py-4">
        <nuxt-link to="" class="text-gray-600 px-5 py-3 bg-white inline-block mb-2">
          <img src="~/static/images/ico_ref2123.png" class="inline-block mr-2">User & Service Providers and technicans
        </nuxt-link>
        <nuxt-link to="" class="text-gray-600 px-5 py-3 bg-white inline-block mb-2">
          <img src="~/static/images/SP-ref0234.png" class="inline-block mr-2">Added Parts
        </nuxt-link>
        <nuxt-link to="" class="text-gray-600 px-5 py-3 bg-white inline-block mb-2">
          <img src="~/static/images/SP-ref0235.png" class="inline-block mr-2">Categories
        </nuxt-link>
        <nuxt-link to="" class="text-gray-600 px-5 py-3 bg-white inline-block mb-2">
          <img src="~/static/images/SP-ref0234.png" class="inline-block mr-2">Projects
        </nuxt-link>
        <nuxt-link to="" class="text-gray-600 px-5 py-3 bg-white inline-block mb-2">
          <img src="~/static/images/SP-ref0235.png" class="inline-block mr-2">Blogs
        </nuxt-link>
        <nuxt-link to="" class="text-white px-5 py-3 bg-indigo-800 inline-block mb-2">
          Add new technican
        </nuxt-link>
      </div>
      <h2 class="text-3xl  text-gray-700 py-6 border-b">Add new technican</h2>
      <div class="w-8/12 bg-white shadow mx-auto mt-5">
        <!--Form Container-->
        <div class="my-5 p-5 bg-white shadow-md">
          <!--Form Fields-->
          <div class="py-2">
            <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder="Email address" />
          </div>
          <div class="py-2">
            <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder="First name" />
          </div>
          <div class="py-2">
            <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder="Last name" />
          </div>
          <div class="py-2">
            <input class="border border-gray-400 rounded w-full h-12 px-2" type="password" placeholder="Choose a password" />
          </div>
          <div class="py-2">
            <select class="border border-gray-400 rounded w-full h-12 px">
              <option value="blogger">Blogger</option>
              <option value="blogger">Code</option>
              <option value="blogger">Customer Service</option>
              <option value="blogger">Electric</option>
              <option value="blogger">Machanics</option>
              <option value="blogger">Project Manager</option>
              <option value="blogger">Super Technician</option>
              <option value="blogger">Tracker</option>
              <option value="blogger">Other</option>
            </select>
          </div>
          <h2 class="text-4xl font-bold text-gray-700">Birthday</h2>
          <p class="text-gray-700 py-3">Other people won't see your birthday.</p>
          <div class="flex py-2">
            <div class="flex-1 px-2">
               <input
                class="border border-gray-400 rounded w-full h-12 px-2 pr-6 overflow-hidden"
                type="date"
                placeholder="Month"
                @change="changemonth"
              />
            </div>
            <!-- <div class="flex-1 px-2">
              <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder="Day" />
            </div>
            <div class="flex-1 px-2">
              <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder="Year" />
            </div> -->
          </div>
          <div class="flex-1 px-2">
            <div class="relative">
              <select class="block text-lg appearance-none w-full bg-white border border-gray-400 rounded px-4 py-3 pr-8 leading-tight focus:outline-none ">
                <option>Permission type</option>
                <option>Full</option>
                <option>Part admin</option>
                <option>Super technican</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
          <div class="mt-8 mb-3 text-center">
            <button class="px-16 bg-ideeza rounded py-4 text-white text-xl">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LeftMenu from '~/components/technician/common-left-side-menu.vue'
import AddCode from '~/components/technician/add-code.vue'

export default {
  layout: 'technician',
  name: "code-index",
  components: {
    LeftMenu,
    AddCode
  },

  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  mounted() {

  },

}

</script>
<style scoped>
select {
  max-width: none;
}

input[type="date"] {
  display:block;
  position:relative;
  background:
    white
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='22' viewBox='0 0 20 22'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23688EBB' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' transform='translate(1 1)'%3E%3Crect width='18' height='18' y='2' rx='2'/%3E%3Cpath d='M13 0L13 4M5 0L5 4M0 8L18 8'/%3E%3C/g%3E%3C/svg%3E")
    right 1rem
    center
    no-repeat;
  
  cursor:pointer;
}
input[type="date"]:focus {
  outline:none;
   
  box-shadow:0 0 0 0.25rem rgba(0, 120, 250, 0.1);
}

::-webkit-datetime-edit {}
::-webkit-datetime-edit-fields-wrapper {}
::-webkit-datetime-edit-month-field:hover,
::-webkit-datetime-edit-day-field:hover,
::-webkit-datetime-edit-year-field:hover {
 }
::-webkit-datetime-edit-text {
  opacity:0;
}
::-webkit-clear-button,
::-webkit-inner-spin-button {
  display:none;
}
::-webkit-calendar-picker-indicator {
  position:absolute;
  width:2.5rem;
  height:100%;
  top:0;
  right:0;
  bottom:0;
  
  opacity:0;
  cursor:pointer;
  
  color:rgba(0, 120, 250, 1);
  background:rgba(0, 120, 250, 1);
 
}

input[type="date"]:hover::-webkit-calendar-picker-indicator { opacity:0.05; }
input[type="date"]:hover::-webkit-calendar-picker-indicator:hover { opacity:0.15; }

</style>


