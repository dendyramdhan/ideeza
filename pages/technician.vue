<template>
  <div class="flex flex-col h-full">
    <div style="width: 100%; height: 100%; background: white; z-index: 999; position: absolute; opacity: 0.5;" v-if="loaderFlag">
    </div>
    <img src="~/assets/images/new.gif" v-if="loaderFlag" style="position:absolute;top:40%;left:40%; z-index:1000" width="15%" />
    <navigation class="flex-shrink"></navigation>
    <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
      <LeftMenu v-if="$route.path.search('settings') < 0 && $route.path.search('messages') < 0" />
      <settingsLeftMenu v-else-if="$route.path.search('messages') < 0" />
      <div class="flex-grow center-content">
        <nuxt-child></nuxt-child>
      </div>
    </div>
  </div>
</template>
<script>
import navigation from "~/components/technician/header-bar.vue";
import LeftMenu from "~/components/technician/common-left-side-menu.vue";
import settingsLeftMenu from "~/components/technician/settings/left-side-menu.vue";
import { mapMutations } from "vuex";
export default {
  components: { navigation, LeftMenu, settingsLeftMenu },
  data: function() {
    return {
      loaderFlag: true
    };
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  mounted() {
    let that = this
    setInterval(function() {
      that.loaderFlag = window.$nuxt.$cookies.get("loaderFlag");
      // console.log("loaderFlag:", that.loaderFlag )
    }, 10);

    console.log(this.$device.isMobile);
    if (this.$device.isMobile) {
      this.toggleLeftMenu();
    }
  },
  methods: {
    ...mapMutations({
      toggleLeftMenu: "usermenu/toggleLeftMenu"
    })
  }
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

.center-content>.flex-grow {
  margin-left: 300px;
}

</style>
