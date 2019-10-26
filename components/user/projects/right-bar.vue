<template>
    <div class="project-right-bar lg:ml-10 relative">
      <div class="text-right block my-5">
        <nuxt-link to="/user/add-service" class="btn btn-normal btn--ideeza px-6 py-2">Add service +</nuxt-link>
      </div>

      <div class="flex justify-between items-center mt-10">
        <div class="track-heading">Electronics</div>
        <div class="flex items-center">
          <font-awesome-icon class="mr-2 h-4 text-gray-500 text-lg hover:text-gray-800 cursor-pointer" :icon="['fas', 'chevron-left']"/>
          <font-awesome-icon class="h-4 text-gray-500 text-lg hover:text-gray-800 cursor-pointer" :icon="['fas', 'chevron-right']"/>
        </div>
      </div>

      <div class="mt-10">
        <Progress width="60" />
        <h1 class="font-semibold my-5">Manufacturers working on project</h1>
        <div class="mb-10">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <div class="mr-2">
                <img class="avatar" src="https://randomuser.me/api/portraits/men/22.jpg" alt="">
              </div>
              <div>
                <span class="block font-semibold text-sm">John Dow</span>
                <span class="block text-sm text-gray-500">Google consultant</span>
              </div>
            </div>
            <div class="flex items-center">
              <div class="text-sm text-right mr-5">
                <span class="text-ideeza block font-semibold">Google</span>
                <span class="text-gray-600 text-xs block">Dealer</span>
              </div>
              <font-awesome-icon class="mr-2 h-6 text-ideeza text-xl cursor-pointer" :icon="['fas', 'envelope']"/>
            </div>
          </div>

        </div>
        <div class="mb-10">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <div class="mr-2">
                <img class="avatar" src="https://randomuser.me/api/portraits/men/22.jpg" alt="">
              </div>
              <div>
                <span class="block font-semibold text-sm">John Dow</span>
                <span class="block text-sm text-gray-500">Google consultant</span>
              </div>
            </div>
            <div class="flex items-center">
              <div class="text-sm text-right mr-5">
                <span class="text-ideeza block font-semibold">Google</span>
                <span class="text-gray-600 text-xs block">Dealer</span>
              </div>
              <font-awesome-icon class="mr-2 h-6 text-ideeza text-xl cursor-pointer" :icon="['fas', 'envelope']"/>
            </div>
          </div>

        </div>
        <div class="mb-10">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <div class="mr-2">
                <img class="avatar" src="https://randomuser.me/api/portraits/men/22.jpg" alt="">
              </div>
              <div>
                <span class="block font-semibold text-sm">John Dow</span>
                <span class="block text-sm text-gray-500">Google consultant</span>
              </div>
            </div>
            <div class="flex items-center">
              <div class="text-sm text-right mr-5">
                <span class="text-ideeza block font-semibold">Google</span>
                <span class="text-gray-600 text-xs block">Dealer</span>
              </div>
              <font-awesome-icon class="mr-2 h-6 text-ideeza text-xl cursor-pointer" :icon="['fas', 'envelope']"/>
            </div>
          </div>

        </div>
      </div>

    </div>
</template>

<script>
  import Progress from '~/components/user/order-tracking/progress-bar.vue'
    export default {
        name: "projects-right-bar",
      components: {
        Progress
      },
    }
</script>

<style scoped>
  .project-right-bar{
    width: 100%;
    max-width: 400px;
  }
  .track-heading{
    @apply text-2xl font-semibold relative;
    width: fit-content;
  }
  .track-heading:before{
    @apply border-b-4 border-solid border-ideeza left-0;
    content: "";
    position: absolute;
    width: 80px;
    bottom: -10px;
  }
  .avatar{
    @apply rounded-full;
    width: 45px;
    height: 45px;
  }
</style>
