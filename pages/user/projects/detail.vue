<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>
    <!-- Main Contents -->
    <div class="flex-grow">

      <div class="main-contents lg:flex">
        <div class="detail-main">
          <!--Panel Menu-->
          <div class="flex justify-between flex-col lg:flex-row border-b border-gray-400 pl-5 pr-5 lg:pl-0 lg:pr-0 pb-3">
            <div class="text-xl font-bold m-3 lg:m-0 text-center lg:text-left">Lamborghini Aventado Project</div>
            <div class="flex flex-wrap items-center">

                    <span class="panel-menu text-center"><font-awesome-icon class="mr-1 panel-menu-icon"
                                                                            :icon="['fas', 'bolt']"/>Electronics</span>
              <span class="ml-5 panel-menu text-center active"><font-awesome-icon class="mr-1 panel-menu-icon"
                                                                                  :icon="['fas', 'code']"/>Code</span>
              <span class="ml-5 panel-menu text-center"><font-awesome-icon class="mr-1 panel-menu-icon"
                                                                           :icon="['fas', 'cube']"/>Cover</span>
              <nuxt-link to="/user/pro" class="ml-5 panel-menu text-center"><font-awesome-icon class="mr-1 panel-menu-icon"
                                                                           :icon="['fas', 'wrench']"/>General</nuxt-link>
              <nuxt-link to="/user/pro" class="ml-5 panel-menu text-center"><CustomizeIcon class="fill-current mr-1 w-4" />Customize</nuxt-link>
            </div>
          </div>

          <div class="my-5 bg-white shadow">
            <img class="w-full" src="~/static/images/car-big.png">
            <div class="py-5 px-5 lg:flex justify-between items-center">
              <div class="relative" v-click-outside="onClickOutside">
                <div class="btn btn--ideeza px-6 py-1 mr-5" @click="focus = !focus">
                  Share Inventions <font-awesome-icon class="ml-5 h-6 text-xl" :icon="['fas', 'star']"/>
                </div>
                <div class="z-50 absolute bg-white shadow-md py-2 px-1" v-show="focus" >
                  <div @click="showInternalShare" class="px-2 py-3 text-ideeza-black hover:text-ideeza block cursor-pointer">Share in news feed</div>
                  <div @click="showExternalShare" class="px-1 py-2 text-ideeza-black hover:text-ideeza block cursor-pointer">Share external</div>
                </div>
              </div>

              <div class="flex items-center mt-5 lg:mt-0">
                <div>
                  <nuxt-link to="/user/order-tracking/making-product" class="btn btn-normal btn--ideeza font-semibold px-5 py-2">
                    Track the order
                  </nuxt-link>
                </div>
                <div class="mx-5 text-sm text-gray-500 font-semibold">
                  <font-awesome-icon class="mr-1 h-4" :icon="['fas', 'eye']"/>
                  2.8k
                </div>
                <div>
                  <button class="btn btn-normal font-semibold p-2 text-gray-500">
                    <font-awesome-icon class="mr-1 h-4" :icon="['fas', 'star']"/>
                    39
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="my-10 bg-white shadow">

              <div class="flex py-5 px-5 border-b border-solid border-gray-300 justify-between items-center w-full">
                <span class="text-lg font-semibold text-ideeza">Description</span>
                <button @click="tab=1" class="btn btn-small px-3 text-ideeza"><font-awesome-icon class="mr-2 h-3 align-baseline inline"  :icon="['fa', 'pen']"/> Edit</button>
              </div>



            <div class="py-10 px-5 text-gray-600" v-if="tab===0">
              {{description}}
            </div>
            <div class="py-10 px-5 text-gray-600 w-full" v-if="tab===1">
              <textarea name="" id="" cols="30" rows="10" class="w-full border-light-gray border border-solid p-3" v-model="description"></textarea>
              <div class="mt-5 flex justify-end">
                <button class="btn pill-button--ideeza px-5 py-1" @click="saveDescription">Save</button>
              </div>
            </div>
          </div>
        </div>

        <!--Right Sidebar-->
        <RightSideBar class="flex-grow" />

      </div>

    </div>
    <ShareInternal v-if="internalShare" @close="closeShareInternal" />
    <ShareExternal v-if="externalShare" @close="closeShareExternal" />
  </div>
</template>

<script>
  import LeftMenu from '~/components/user/common-left-side-menu.vue'
  import RightSideBar from '~/components/user/projects/right-bar.vue'
  import ShareInternal from '~/components/share/share-internal.vue'
  import ShareExternal from '~/components/share/share-external.vue'
  import CustomizeIcon from '~/components/partials/icons/customize-icon.vue'
    export default {
      layout: 'user',
      name: "building-index",
      components: {
        LeftMenu,
        RightSideBar,
        ShareInternal,
        ShareExternal,
        CustomizeIcon
      },
      data: function () {
        return {
          tab: 0,
          mainDropDownActive: false,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n' +
            '              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n' +
            '              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n' +
            '              fugiat\n' +
            '              nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
          currentMenu: {},
          storeCurrentMenu: null,
          menuChildren: null,
          searchVal: null,
          focus: null,

          internalShare: false,
          externalShare: false
        }
      },
      computed: {
        leftMenu () {
          return this.$store.state.usermenu.openLeftMenu;
        }
      },
      methods: {
        onClickOutside (event, el) {
          this.focus = false;
        },
        saveDescription(){
          if(this.description === '') {
            this.$notify({group: 'error', type: "error", text: 'Please fill in the description'})
          } else {
            this.tab = 0;
          }
        },
        closeShareInternal() {
          this.internalShare = false;
        },
        closeShareExternal() {
          this.externalShare = false;
        },
        showInternalShare() {
          this.focus = false;
          this.internalShare = true;
        },
        showExternalShare() {
          this.focus = false;
          this.externalShare = true;
        }
      }

    }
</script>

<style scoped>

  .detail-main{
    width: 100%;
    max-width: 1100px;
  }

  .panel-menu{
    @apply inline-block font-semibold text-gray-700 cursor-pointer;
  }
  .panel-menu.active{
    @apply text-ideeza;
  }
  .panel-menu:hover{
    @apply text-ideeza;
  }
  .panel-menu-icon{
    height: 11px;
    display: inline-block;
  }
  .tab.active{
    @apply text-ideeza;
  }
  @screen lg{
    .builder-panel{
      width: 100%;
      max-width: 1235px;
    }
  }
</style>
