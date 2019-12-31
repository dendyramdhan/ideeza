<template>
    <div class="header-bar gradient-bg">
      <!--Logo-->
      <div class="flex items-center">
        <div class="w-6 h-full relative">
          <transition name="slide-fade">
            <font-awesome-icon key="on" v-if="!leftMenu" @click="toggleLeftMenu()" class="absolute-center-v text-white cursor-pointer ml-1 mr-2 absolute h-4" :icon="['fas', 'chevron-left']"/>
            <font-awesome-icon key="off" v-else @click="toggleLeftMenu()" class="absolute-center-v text-white cursor-pointer ml-1 mr-2 absolute h-4" :icon="['fas', 'bars']" />

          </transition>
        </div>

        <div class="logo">
          <nuxt-link to="/"><img class="logo ml-1" src="~/static/images/logo-1.png"></nuxt-link>
        </div>

      </div>

      <div class="flex items-center justify-center w-6/12">
        <div class="search_section w-full">
        <div class="searchbox">
            <button class="btn-search">
                <img src="~/static/images/search-ico.png" class="img-fluid" alt="search">
            </button>
            <input id="search" type="text" name="search" class="search">
            <div class="searchbox_right_icon">
                <button class="btn-camera">
                    <font-awesome-icon class="mr-2" :icon="['fas', 'camera']"/>
                </button>
                <button class="btn-microphone">
                    <font-awesome-icon class="mr-2" :icon="['fas', 'microphone']"/>
                </button>
            </div>
        </div>
        <div class="toggle_icons">
            <label class="switch">
                <input type="checkbox" />
                <div class="slider round"></div>
            </label>
        </div>
        </div>
      </div>

      <!--Menu-->
      <div class="flex items-center justify-end">
        <div class="flex items-center relative mr-5 " v-click-outside="onClickOutside">
          <font-awesome-icon class="text-white text-2xl h-6 cursor-pointer" @click="showInfoAlert = !showInfoAlert" :icon="['far', 'bell']"/>
          <font-awesome-icon class="text-ideeza h-2 absolute bell-info" :icon="['fas', 'circle']"/>
          <div class="info-alert text-xs" v-show="showInfoAlert">
            <div class="text-ideeza-black px-2 py-4 font-semibold">New</div>
            <div class="info-contents">
              <img class="info-avatar" src="https://randomuser.me/api/portraits/women/65.jpg">
              <div class="flex-grow">
                <span class="font-semibold">Laurentius</span> just followed<br>
                you
              </div>
            </div>
            <div class="info-contents">
              <img class="info-avatar" src="https://randomuser.me/api/portraits/men/65.jpg">
              <div class="flex-grow">
                Your project <span class="font-semibold">"My new<br>
                Lamborgini"</span> is finished
              </div>
            </div>
            <div class="text-ideeza text-center px-2 py-4 font-semibold cursor-pointer">See more</div>
          </div>
        </div>

        <div class="flex justify-center items-center content-center w-m-c">
          <nuxt-link to="/user/profile" class="flex items-center">
            <img class="h-10 w-10 rounded-full mr-2 " src="https://randomuser.me/api/portraits/men/17.jpg">
            <span class="text-white inline-block">John Doe</span>
          </nuxt-link>

        </div>
      </div>
    </div>
</template>

<script>
  import { mapMutations } from 'vuex'
    export default {
        name: "header-bar",
      data: function () {
        return {
          showInfoAlert: false,
          showHelpAlert: false,
        }
      },
      computed: {
        leftMenu () {
          return this.$store.state.usermenu.openLeftMenu;
        }
      },
      methods: {
        ...mapMutations({
          toggleLeftMenu: 'usermenu/toggleLeftMenu'
        }),
        onClickOutside(){
          this.showInfoAlert = false;
        },
        onClickOutsideHelp(){
          this.showHelpAlert = false;
        }
      }
    }
</script>

<style scoped>
  .w-m-c{
    width: max-content;
  }
  .bell-info{
    top: 3px;
    right: -3px;
    z-index: 50;
  }
  .info-alert{
    @apply shadow-lg absolute z-50 bg-white;
    width: 285px;
    left: -132px;
    top: 35px;
  }
  .help-alert{
    @apply shadow-lg absolute z-50 bg-white;
    width: 150px;
    left: -60px;
    top: 35px;
  }
  .info-alert:before{
    border: solid;
    border-color: white transparent;
    border-width: 0 6px 6px 6px;
    top: -6px;
    content: "";
    display: block;
    left: 50%;
    margin-left: -6px;
    position: absolute;
    z-index: 99;
  }
  .info-avatar{
    @apply rounded-full mr-1;
    width: 41px;
  }
  .info-contents{
    @apply p-4 flex mb-1;
    background: rgba(67,16,131, 0.07);
  }
  .header-bar{
    @apply flex justify-between pl-5 pr-5 pt-2 pb-2;
  }
  .logo{
    width: 70px;
    height: 35px;
  }
  .search-form-container{
    max-width: 912px;
  }
  .search-input{
    @apply w-full bg-white border-0 outline-none;
  }
  .search-logo{
    @apply absolute m-0;
    width: 13px;
    height: 16px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .cart-button{
    @apply ;
    transition: .12s ease-in;
  }
  .cart-button:hover{
    background-color: rgba(255,255,255,0.1);
  }
  .cart-icon{
    width: 25px;
    height: 24px;
  }
  .side-bar-toggler{
    width: 17px;
    height: 17px;
  }
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.3s;
  }
  .slide-fade-enter,
  .slide-fade-leave-active {
    opacity: 0;
  }
  .slide-fade-enter {
    transform: translateX(10px);
  }
  .slide-fade-leave-active {
    transform: translateX(-10px);
  }
  .search_section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.searchbox {
    background-color: #F4ECF7;
    display: flex;
    justify-content: space-between;
    padding: 5px 2px;
}
.searchbox {
    flex: 0 0 calc(100% - 75px);
    max-width: calc(100% - 75px);
}
.searchbox input {
    width: 100%;
    background-color: transparent;
    border: 0;
}
.searchbox button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
}
.searchbox .searchbox_right_icon {
    display: flex;
}
.toggle_icons .switch {
    display: inline-block;
    height: 34px;
    position: relative;
    width: 60px;
    margin-bottom: 0;
    margin-left: 15px;
    margin-top: 10px;
}
.toggle_icons .switch input {
    display: none;
}
.toggle_icons .slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: .4s;
}
.toggle_icons .slider.round {
    border-radius: 34px;
}
.toggle_icons .slider:before {
    background-image: url(~static/images/button_toggle.png);
    bottom: 2px;
    content: "";
    height: 30px;
    left: 2px;
    position: absolute;
    transition: .4s;
    width: 30px;
}
.toggle_icons input:checked + .slider {
    background-color: #5C0E8C;
}
.toggle_icons input:checked + .slider:before {
    transform: translateX(26px);
}
</style>
