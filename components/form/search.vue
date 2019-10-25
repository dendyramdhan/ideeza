<template>
  <div class="flex w-fit-content bg-white justify-center items-center content-center">
    <div class="h-12 relative w-10">
      <font-awesome-icon class="ml-1 h-4 text-gray-400 absolute-center-h-v" :icon="['fas', 'search']"/>
    </div>
    <input :placeholder="placeholder" class="bg-white outline-none h-12 text-gray-800 pr-3">
  </div>
</template>

<script>
    export default {
        name: "search",
      props: ['placeholder']
    }
</script>

<style scoped>

</style>
