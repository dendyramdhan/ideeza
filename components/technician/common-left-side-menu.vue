<template>
  <div class="flex flex-wrap items-start bg-white h-full shadow relative left-side-bar">
    <!--Left Menu-->
    <div class="left-main-menu p-10 relative w-full tech-menu">
      <CommonMenuItems />
    </div>

  </div>
</template>

<script>
import CommonMenuItems from "~/components/technician/user-menu-items.vue";

export default {
  name: "common-left-side-menu",
  components: {
    CommonMenuItems,
  }
};
</script>

<style scoped>
.left-side-bar {
  width: 300px;
  min-width: 300px;
  /*position: fixed;*/
  position: relative;
  overflow-y: auto;
  height: 100%;
}
.left-main-menu {
}
.tech-menu{
  max-height: 95vh;
  overflow-y: auto;
}
</style>
