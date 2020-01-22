<template>
	<div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">

  <div class="w-full px-4">

    <h2 class="text-3xl  text-gray-700 py-6 border-b">Add new technican</h2>
    <div class="bg-white shadow mx-auto mt-5">
       

      <!--Form Container-->
      <div class="w-8/12 mx-auto my-5 p-5 bg-white shadow-md">
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

        <div class="mt-8 mb-3 text-center">
          <button class="px-16 bg-ideeza rounded py-4 text-white text-xl">Sign up</button>
        </div>


      </div>
    </div>
  
  </div>
  </div>
</template>
 <script>

    export default {
        name: "add-tech-index",

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
select{
      max-width: none;
}
</style>
