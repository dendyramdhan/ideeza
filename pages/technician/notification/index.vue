<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <LeftMenu />
    <!-- Main Contents -->
    <div class="w-full">
      <div class="m-10 p-10 bg-white shadow">
        <h2 class="text-4xl text-gray-800 font-bold mb-16">Notifications</h2>
        <div class="flex bg-gray-300 py-2 px-4 mt-5">
          <div class="w-1/12">
            <font-awesome-icon class="text-ideeza text-4xl" :icon="['fas', 'times']"></font-awesome-icon>
          </div>
          <div class="w-9/12">
            <p class="text-gray-700 py-2">Laurentius just followed you</p>
          </div>
          <div class="w-2/12">
            <p class="text-gray-700 py-2">Feb 5, 2020</p>
          </div>
        </div>
        <div class="flex bg-gray-300 py-2 px-4 mt-5">
          <div class="w-1/12">
            <font-awesome-icon class="text-ideeza text-4xl" :icon="['fas', 'times']"></font-awesome-icon>
          </div>
          <div class="w-9/12">
            <p class="text-gray-700 py-2">Laurentius just followed you</p>
          </div>
          <div class="w-2/12">
            <p class="text-gray-700 py-2">Feb 5, 2020</p>
          </div>
        </div>
        <div class="flex bg-gray-300 py-2 px-4 mt-5">
          <div class="w-1/12">
            <font-awesome-icon class="text-ideeza text-4xl" :icon="['fas', 'times']"></font-awesome-icon>
          </div>
          <div class="w-9/12">
            <p class="text-gray-700 py-2">Laurentius just followed you</p>
          </div>
          <div class="w-2/12">
            <p class="text-gray-700 py-2">Feb 5, 2020</p>
          </div>
        </div>
        <div class="flex bg-gray-300 py-2 px-4 mt-5">
          <div class="w-1/12">
            <font-awesome-icon class="text-ideeza text-4xl" :icon="['fas', 'times']"></font-awesome-icon>
          </div>
          <div class="w-9/12">
            <p class="text-gray-700 py-2">Laurentius just followed you</p>
          </div>
          <div class="w-2/12">
            <p class="text-gray-700 py-2">Feb 5, 2020</p>
          </div>
        </div>
        <div class="flex bg-gray-300 py-2 px-4 mt-5">
          <div class="w-1/12">
            <font-awesome-icon class="text-ideeza text-4xl" :icon="['fas', 'times']"></font-awesome-icon>
          </div>
          <div class="w-9/12">
            <p class="text-gray-700 py-2">Laurentius just followed you</p>
          </div>
          <div class="w-2/12">
            <p class="text-gray-700 py-2">Feb 5, 2020</p>
          </div>
        </div>
        <div class="flex bg-gray-300 py-2 px-4 mt-5">
          <div class="w-1/12">
            <font-awesome-icon class="text-ideeza text-4xl" :icon="['fas', 'times']"></font-awesome-icon>
          </div>
          <div class="w-9/12">
            <p class="text-gray-700 py-2">Laurentius just followed you</p>
          </div>
          <div class="w-2/12">
            <p class="text-gray-700 py-2">Feb 5, 2020</p>
          </div>
        </div>
        <div class="flex bg-gray-300 py-2 px-4 mt-5">
          <div class="w-1/12">
            <font-awesome-icon class="text-ideeza text-4xl" :icon="['fas', 'times']"></font-awesome-icon>
          </div>
          <div class="w-9/12">
            <p class="text-gray-700 py-2">Laurentius just followed you</p>
          </div>
          <div class="w-2/12">
            <p class="text-gray-700 py-2">Feb 5, 2020</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LeftMenu from "~/components/technician/settings/left-side-menu.vue";
export default {
  name: "notifications",
  middleware: "auth",
  components: {
    LeftMenu,
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
};

</script>
<style scoped>
.bg-settings {
  background-color: #F8F9FA;
}

</style>
