<template>
  <div class="flex flex-col h-full">
    <div style="width: 100%; height: 100%; background: white; z-index: 999; position: absolute; opacity: 0.5;" 
      v-if="loaderFlag"
    >

    </div>

    <img
      src="~/assets/images/new.gif"

      v-if="loaderFlag"
      
      style="position:absolute;top:40%;left:40%; z-index:1000"
      width="15%"
    />

    <div>
      <navigation class="flex-shrink"></navigation>
      <nuxt class="flex-grow" />
      <FloatButton />
    </div>

    <client-only>
      <notifications group="error" position="top right">
        <template slot="body" slot-scope="props">
          <div class="notify notify--error">
            <div class="flex items-center text-white font-semibold">
              <img class="mr-3" src="~/static/icons/exclaimation-icon.png" alt />
              {{props.item.text}}
            </div>
            <a class="close cursor-pointer" @click="props.close">
              <font-awesome-icon class="mr-3 h-3 text-red-200 text-xs" :icon="['fas', 'times']" />
            </a>
          </div>
        </template>
      </notifications>
    </client-only>

    <client-only>
      <notifications group="success" position="top right">
        <template slot="body" slot-scope="props">
          <div class="notify notify--success">
            <div class="flex items-center text-white font-semibold">
              <img class="mr-3" src="~/static/icons/notificication-success-icon.png" alt />
              {{props.item.text}}
            </div>
            <a class="close cursor-pointer" @click="props.close">
              <font-awesome-icon class="mr-3 h-3 text-green-200 text-xs" :icon="['fas', 'times']" />
            </a>
          </div>
        </template>
      </notifications>
    </client-only>
  </div>
</template>

<script>
import navigation from "~/components/user/header-bar.vue";
import FloatButton from "~/components/user/float-button/right-bot-float-button.vue";
import { mapMutations } from "vuex";
export default {
  components: { navigation, FloatButton },
  data: function() {
    return {
      loaderFlag: true
    };
  },
  created() {
    
  },
  // layout (context) {
  //   this.loaderFlag = window.$nuxt.$cookies.get("loaderFlag");
  //   return this.loaderFlag
  // },
  mounted() {

    let that  = this
    setInterval(function(){
      that.loaderFlag = window.$nuxt.$cookies.get("loaderFlag");
      // console.log("loaderFlag:", that.loaderFlag )
       }, 10);
       
    //  this.loaderFlag = false;

    // if (window.$nuxt.$cookies.get("loaderFlag")) {
    //   this.loaderFlag = window.$nuxt.$cookies.get("loaderFlag");
    // }
    

    // this.loaderFlag = this.$store.state.loaderStorage.loaderFlag;

    // window.$nuxt.$cookies.set("loaderFlag",true)

    console.log("mymobile:",this.$device.isMobile);
    if (this.$device.isMobile) {
      this.toggleLeftMenu();
    }
  },

  // watch: {
  //   name(newName) {
  //     if (window.$nuxt.$cookies.get("loaderFlag")) {
  //       this.loaderFlag = window.$nuxt.$cookies.get("loaderFlag");
  //     }
  //   }
  // },

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
.vue-notification-group {
  width: 350px !important;
  top: 30px !important;
  right: 30px !important;
}
.notify {
  @apply flex justify-between items-center px-3 py-2;
  width: 350px;
}
.notify--error {
  @apply bg-ideeza-red;
}
.notify--success {
  @apply bg-ideeza-green;
}
</style>
