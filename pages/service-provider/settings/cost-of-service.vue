<template>
    <div class="md:m-8 lg:m-8 m-2">
      <div class="flex">
        <div class="mr-4">
          <button class="px-5 border border-gray-300 md:px-20 py-2 font-semibold">
             <font-awesome-icon class="mr-2 text-sm" :icon="['fas', 'times']" />Electronics</button>
        </div>
        <div>
          <button class="px-5 border border-gray-300 md:px-20 py-2 bg-white font-semibold">
           <font-awesome-icon class="mr-2 text-sm" :icon="['fas', 'times']" />
            Cover</button>
        </div>
      </div>
      <div class="flex my-2">
        <nuxt-link to="/service-provider/settings/cost-of-service/electronics-fabrication" class="mr-8 font-semibold">
          Fabrication
        </nuxt-link >
        <nuxt-link to="/service-provider/settings/cost-of-service/assembly-service" class="font-semibold mr-8 text-ideeza-gray-700">
          Assembly Service
        </nuxt-link >
        <nuxt-link to="/service-provider/settings/cost-of-service/electronics-dealer" class="font-semibold text-ideeza-gray-700">
          Dealer
        </nuxt-link>
      </div>
      <hr class="mt-2 mb-5">
      <nuxt-child class="xl:max-w-4xl"/>


    </div>
</template>
<script>
export default {
  layout:'service-provider-setting'
}
</script>
<style scoped>
.field-input select {
  max-width: 100%;
  min-width: 100%;
}
.active-link{
  @apply text-ideeza;
}
</style>
