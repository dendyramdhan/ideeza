<template>
  <div class="flex flex-col h-full">
    <navigation class="flex-shrink"></navigation>
    <!--  Left Side Bar  -->
    <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
      <LeftMenu v-if="$route.path.search('settings') < 0 && $route.path.search('messages') < 0" />
      <settingsLeftMenu v-else-if="$route.path.search('messages') < 0" />
      <div class="flex-grow center-content">
        <nuxt-child></nuxt-child>
      </div>
    </div>
    <notifications group="error" position="top right" >
      <template slot="body" slot-scope="props">
        <div class="notify notify--error">
          <div class="flex items-center text-white font-semibold">
            <img class="mr-3" src="~/static/icons/exclaimation-icon.png" alt="">
            {{props.item.text}}
          </div>

          <a class="close cursor-pointer" @click="props.close">
            <font-awesome-icon class="mr-3 h-3 text-red-200 text-xs" :icon="['fas', 'times']"/>
          </a>

        </div>
      </template>
    </notifications>
    <notifications group="success" position="top right" >
      <template slot="body" slot-scope="props">
        <div class="notify notify--success">
          <div class="flex items-center text-white font-semibold">
            <img class="mr-3" src="~/static/icons/notificication-success-icon.png" alt="">
            {{props.item.text}}
          </div>

          <a class="close cursor-pointer" @click="props.close">
            <font-awesome-icon class="mr-3 h-3 text-green-200 text-xs" :icon="['fas', 'times']"/>
          </a>

        </div>
      </template>
    </notifications>
    <FloatButton />
  </div>
</template>

<script>
  import LeftMenu from '~/components/admin/common-left-side-menu.vue'
  import settingsLeftMenu from "~/components/admin/settings/left-side-menu.vue";
  import navigation from '~/components/admin/header-bar.vue'
  import FloatButton from '~/components/user/float-button/right-bot-float-button.vue'
  import { mapMutations } from 'vuex'
  export default {
    components: {
      navigation, 
      FloatButton, 
      LeftMenu,
      settingsLeftMenu
    },
    data() {
      return {
        settingLeftMenu: false
      }
    },
    mounted() {
      if(this.$route.path.search('settings')){
        this.settingLeftMenu = true;
      }
      else {
        this.settingLeftMenu = false;
      }

      console.log(this.$device.isMobile);
      if(this.$device.isMobile){
        this.toggleLeftMenu();
      }
    },
    computed: {
      leftMenu() {
        return this.$store.state.usermenu.openLeftMenu;
      }
    },
    methods: {
      ...mapMutations({
        toggleLeftMenu: 'usermenu/toggleLeftMenu'
      })
    }
  }
</script>

<style>
#__nuxt{
  height: 100%;
}
#__layout{
  height: 100%;
}
.vue-notification-group{
  width: 350px !important;
  top: 30px !important;
  right: 30px !important;
}
.notify{
  @apply  flex justify-between items-center px-3 py-2;
  width: 350px;
}
.notify--error{
  @apply bg-ideeza-red;
}
.notify--success{
  @apply  bg-ideeza-green;
}
.center-content {
  overflow-y: auto;
  height: calc(100vh - 55px);
}
.center-content> .flex-grow{
  margin-left: 300px;
}
</style>
