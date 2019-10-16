<template>
  <div >

    <div class="flex content-center items-center mt-2 font-semibold text-gray-500 text-lg hover:text-gray-700 cursor-pointer">
      <nuxt-link to="/user/settings">
        <font-awesome-icon class="mr-5 w-8 h-8 text-2xl align-text-top" :icon="['fas', 'cog']"/> Settings
      </nuxt-link>

    </div>
    <div class="flex content-center items-center mt-2 font-semibold text-gray-500 text-lg hover:text-gray-700 cursor-pointer">
      <font-awesome-icon class="mr-5 w-8 h-8 text-2xl align-text-top" :icon="['fas', 'user-tie']"/> Contact Support
    </div>
  </div>
</template>

<script>
    export default {
        name: "left-menu-bot-items"
    }
</script>

<style scoped>

</style>
