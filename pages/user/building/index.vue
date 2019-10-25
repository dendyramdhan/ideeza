<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>
    <!-- Main Contents -->
    <div class="builder-panel flex-grow lg:p-10">
      <!--Panel Menu-->
      <div class="flex justify-between flex-col lg:flex-row border-b border-gray-400 pl-5 pr-5 lg:pl-0 lg:pr-0 pb-3">
        <div class="text-xl font-bold m-3 lg:m-0 text-center lg:text-left">Lamborghini Aventado Project</div>
        <div class="flex items-center justify-center content-center">
          <span class="panel-menu text-center" ><font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'bolt']"/>Electronics</span>
          <span class="ml-5 panel-menu text-center active" ><font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'code']"/>Code</span>
          <span class="ml-5 panel-menu text-center" ><font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'cube']"/>Cover</span>
          <span class="ml-5 panel-menu text-center" ><font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'wrench']"/>General</span>
        </div>
      </div>

      <div class="my-5 bg-white shadow">
        <img class="w-full" src="~/static/images/car-big.png">
        <div class="py-5 px-5 lg:flex justify-between items-center">
          <div class="flex">
            <div class="mr-5 font-semibold text-gray-500 cursor-pointer text-sm"><font-awesome-icon class="mr-1 h-4" :icon="['fas', 'plus']"/> Add To</div>
            <div class="mr-5 font-semibold text-gray-500 cursor-pointer text-sm"><font-awesome-icon class="mr-1 h-4" :icon="['fas', 'code']"/> Embed</div>
            <div class="mr-5 font-semibold text-gray-500 cursor-pointer text-sm"><font-awesome-icon class="mr-1 h-4" :icon="['fas', 'share']"/> Share</div>
          </div>

          <div class="flex items-center mt-5 lg:mt-0">
            <div>
              <nuxt-link to="/user/cart/overview" class="btn btn-normal text-ideeza font-semibold p-2"><font-awesome-icon class="mr-1 h-4" :icon="['fas', 'shopping-cart']"/> Buy now</nuxt-link>
            </div>
            <div class="mx-5 text-sm text-gray-500 font-semibold">
              <font-awesome-icon class="mr-1 h-4" :icon="['fas', 'eye']"/> 2.8k
            </div>
            <div>
              <button class="btn btn-normal font-semibold p-2 text-gray-500"><font-awesome-icon class="mr-1 h-4" :icon="['fas', 'star']"/> 39</button>
            </div>
          </div>
        </div>
      </div>

      <div class="my-10 bg-white shadow">
        <div class="flex py-5 border-b border-solid border-gray-300">
          <div @click="tab=0" class="tab px-5 text-gray-700 font-semibold text-lg lg:text-xl cursor-pointer" :class="{'active': tab===0}" >
            Description
          </div>
          <div @click="tab=1" class="tab px-5 text-gray-700 font-semibold text-lg lg:text-xl cursor-pointer" :class="{'active': tab===1}" >
            Project Information
          </div>
        </div>

        <div class="py-10 px-5 text-gray-600" v-if="tab===0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </div>
        <div class="py-10 px-5 text-gray-600" v-if="tab===1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LeftMenu from '~/components/user/common-left-side-menu.vue'
    export default {
      layout: 'user',
      name: "building-index",
      components: {
        LeftMenu,
      },
      data: function () {
        return {
          tab: 0,
          mainDropDownActive: false,

          currentMenu: {},
          storeCurrentMenu: null,
          menuChildren: null,
          searchVal: null
        }
      },
      computed: {
        leftMenu () {
          return this.$store.state.usermenu.openLeftMenu;
        }
      }
    }
</script>

<style scoped>

  .builder-panel{
    width: auto;
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
