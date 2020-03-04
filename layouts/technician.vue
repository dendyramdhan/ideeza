<template>
  <div class="flex flex-col h-full">
    <div style="width: 100%; height: 100%; background: white; z-index: 999; position: absolute; opacity: 0.5;" v-if="loaderFlag">
    </div>
    <img src="~/assets/images/new.gif" v-if="loaderFlag" style="position:absolute;top:40%;left:40%; z-index:1000" width="15%" />
    <navigation class="flex-shrink"></navigation>
    <nuxt class="flex-grow center-content technician-content" />
  </div>
</template>
<script>
import navigation from "~/components/technician/header-bar.vue";
import { mapMutations } from "vuex";
export default {
  components: { navigation },
  data: function() {
    return {
      loaderFlag: true
    };
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
.technician-content .main-contents{
  margin-left: 300px;
}
 

</style>
