<template>
  <div class="flex flex-col h-full">
    <navigation class="flex-shrink"></navigation>
    <nuxt class="flex-grow center-content technician-content" />
  </div>
</template>
<script>
import navigation from "~/components/technician/header-bar.vue";
export default {
  components: { navigation },
};

</script>
<style>
#__nuxt {
  height: 100%;
}

#__layout {
  height: 100%;
}

.center-content {
  overflow-y: auto;
  height: calc(100vh - 55px);
}

.technician-content .main-contents {
  margin-left: 300px;
}

</style>
