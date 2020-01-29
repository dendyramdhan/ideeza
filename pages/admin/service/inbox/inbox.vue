<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!-- Main Contents -->
    <div class="flex-grow lg:py-5 lg:px-3 xl:px-3">
      <div class="lg:flex">
        <div class="mt-10 lg:mt-0 lg:w-4/12 bg-white mr-3">

            <div class="relative w-full">

              <div class="flex p-3 ">
                <button class="py-3 px-10 bg-ideeza text-white rounded-md"> Compose</button>
                <button class="h-12 w-12 ml-3 bg-white text-gray-600 border border-gray-600 rounded-sm rounded-md"> R </button>
              </div>

              <div class="p-3">
                <div class="text-sm font-bold text-white py-3 px-5 bg-pink-300 border-ideeza border-l-2 mb-3">Sent</div>
                <div class="text-sm font-bold text-gray-800 py-3 px-5 relative mb-3">Draft
                  <div class="absolute bg-pink-300 w-6 h-6 rounded-full text-center font-light right-0 top-0 text-sm text-ideeza">4</div>
                </div>
                <div class="text-sm font-bold text-gray-800 py-3 px-5 relative mb-3">Trash
                  <div class="absolute bg-pink-300 w-6 h-6 rounded-full text-center font-light right-0 top-0 text-sm text-ideeza">4</div>
                </div>
                 
              </div>
              <!--Left Menu-->
               
            </div>
        </div>
        <div class="w-8/12">
          <div class="flex">
            <div class="flex-1">
              <div class="relative w-12">
                  <input type="checkbox" name="" class="w-6 h-6">
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-ideeza">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
            </div>
            <div class="flex-1 text-right">
              <button class="h-12 w-12 ml-3 bg-pink-300 text-ideeza rounded-sm rounded-md"> ... </button>
            </div>
          </div>
         <p class="text-xl text-gray-600 font-bold text-center">You do not currently have any mails</p>
        </div>
      </div>


    </div>
    <MyIdeeza v-click-outside="onClickOutside" v-if="showMyIdeeza" />
  </div>
</template>
<script>
  import LeftMenu from '~/components/admin/common-left-side-menu.vue'
  import MyIdeeza from '~/components/user/my-ideeza/new-ideeza.vue'
  import SimpleTable from '~/components/reusables/Table.vue'

  export default {
    layout: 'admin',
    components: {
      LeftMenu,
      MyIdeeza,
      SimpleTable,
    },
    data: function () {
      return {
        showMyIdeeza: false,
      }
    },
    methods: {
      selectall(value) {
        if (value == true) {
          this.users.forEach(element => {
            element.selected = true
          });
        } else {
          this.users.forEach(element => {
            element.selected = false
          });
        }
        this.$forceUpdate()
      }
    },
    computed: {
      leftMenu() {
        return this.$store.state.usermenu.openLeftMenu;
      }
    },
  }

</script>
<style>
  .messages{
    @apply py-1 px-2 text-base;
    width: fit-content;
    margin-bottom: 2px;
  }
  .message-from-avatar{
    width: 40px;
    height: 40px;
  }
  .message--to{
    @apply text-right text-white bg-ideeza rounded-l-lg p-6;
  }
  .message--to:first-child{
    @apply rounded-tr-lg;
  }
  .message--to:last-child{
    @apply rounded-br-lg;
  }

  .message--from{
    @apply text-left text-gray-800 bg-white border rounded-r-lg p-6;
  }
  .message--from:first-child{
    @apply rounded-tl-lg;
  }
  .message--from:last-child{
    @apply rounded-bl-lg;
  }
  .shared-photo{
    height: 80px;
  }
  .message-menu-button{
    @apply font-semibold border border-solid border-gray-400 text-center py-2 bg-transparent w-32 cursor-pointer;
  }
  .message-menu-button.active{
    @apply border-ideeza bg-ideeza text-white;
  }
  .messages-left-toggler{
    @apply cursor-pointer font-semibold text-xs py-1 border-b-4 border-transparent mr-3;
  }
  .messages-left-toggler.active{
    @apply border-ideeza;
  }
</style>
