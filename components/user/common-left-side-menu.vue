<template>
  <div class="flex flex-wrap items-start bg-white h-full shadow relative left-side-bar overflow-scroll">
    <!--Left Menu-->
    <div class="left-main-menu p-10 relative w-full">
      <CommonMenuItems />
    </div>
    <!-- <LeftBotMenu class="flex-shrink sticky bottom-0 p-10 self-end w-full" /> -->
  </div>
</template>

<script>
import CommonMenuItems from "~/components/user/user-menu-items.vue";
import LeftBotMenu from "~/components/user/left-menu-bot-items.vue";
export default {
  name: "common-left-side-menu",
  components: {
    CommonMenuItems,
    LeftBotMenu
  }
};
</script>

<style scoped>
.left-side-bar {
  width: 300px;
  min-width: 300px;
  position:fixed;
}
.left-main-menu {
}
</style>
