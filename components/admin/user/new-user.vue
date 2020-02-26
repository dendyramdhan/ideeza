<template>
<div @click.self="close" class="popup-overlay">

    <div class="popup-overlay--contents add-new-container">

 <div class="settings-general mx-auto"  >
  <div class="w-full px-4">
    <div class="flex justify-between">
        <h2
          class="outline-none border-0 text-ideeza text-xl placeholder-ideeza lg:w-1/2"
        >Add User
        </h2>
        <font-awesome-icon
          @click="close"
          class="mr-1 h-4 cursor-pointer text-gray-500 hover:text-gray-800"
          :icon="['fas', 'times']"
        />
      </div>
    <div class="w-8/12 bg-white shadow mx-auto mt-5">


      <!--Form Container-->
      <div class="my-5 p-5 bg-white shadow-md">
        <!--Form Fields-->
        <div class="py-2">
          <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder="Email address"/>
        </div>

        <div class="py-2">
          <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder="First name"/>
        </div>

        <div class="py-2">
          <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder="Last name"/>
        </div>


        <div class="py-2">
          <input class="border border-gray-400 rounded w-full h-12 px-2" type="password" placeholder="Choose a password"/>
        </div>



        <h2 class="text-4xl font-bold text-gray-700">Birthday</h2>
        <p class="text-gray-700 py-3">Other people won't see your birthday.</p>

        <div class="flex py-2">
          <div class="flex-1 px-2">
            <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder="Month"/>
          </div>
          <div class="flex-1 px-2">
            <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder="Day"/>
          </div>
          <div class="flex-1 px-2">
            <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder="Year"/>
          </div>
        </div>

        <div class="flex-1 px-2">
          <div class="relative mb-2">
            <select class="block text-lg appearance-none w-full bg-white border border-gray-400 rounded px-4 py-3 pr-8 leading-tight focus:outline-none ">
              <option>Permission type</option>
              <option>Full</option>
              <option>Part admin</option>
              <option>Super technican</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <div class="relative mb-2">

            <select class="block text-lg appearance-none w-full bg-white border border-gray-400 rounded px-4 py-3 pr-8 leading-tight focus:outline-none ">
              <option class="font-semibold">Type</option>
              <option>User</option>
              <option>Technician</option>
              <option>Service Providers</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <div class="relative mb-2">

            <select class="block text-lg appearance-none w-full bg-white border border-gray-400 rounded px-4 py-3 pr-8 leading-tight focus:outline-none ">
              <option class="font-semibold">User</option>
              <option>Personal</option>
              <option>Team</option>
              <option>Agent</option>
              <option>Other</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <div class="relative mb-2">

            <select class="block text-lg appearance-none w-full bg-white border border-gray-400 rounded px-4 py-3 pr-8 leading-tight focus:outline-none ">
              <option class="font-semibold">Technician</option>
              <option>Project Manager</option>
              <option>Customer Service</option>
              <option>Electronical</option>
              <option>Cover</option>
              <option>Code</option>
              <option>Tracker</option>
              <option>Super Technician</option>
              <option>Blogger</option>
              <option>Others</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <div class="relative">

            <select class="block text-lg appearance-none w-full bg-white border border-gray-400 rounded px-4 py-3 pr-8 leading-tight focus:outline-none ">
              <option class="font-semibold">Service Providers</option>
              <option>Company</option>
              <option>Agent</option>
              <option>Freelancers</option>
              <option>Others</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>


        <div class="mt-8 mb-3 text-center">
          <button class="px-16 bg-ideeza rounded py-4 text-white text-xl">Create</button>
        </div>


      </div>
    </div>

  </div>

</div>
</div>
</div>
</template>
<script>
  export default {
    name: "user-add-new",
    methods:{
      close()
      {
        this.$emit("onClose");
      },
    }
  };
</script>
<style scoped>

select{
  max-width: none;
}
</style>
