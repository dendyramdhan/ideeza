<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow lg:py-10 lg:px-3 xl:px-10">
      <div class="lg:flex">
        <div class="lg:w-3/4 lg:mr-3 shadow-md bg-white">
          <!--Header-->
          <div class="py-5 border-b border-solid border-gray-300">
            <h1 class="text-center text-gray-800 text-lg font-semibold ">Jasmine Mueller</h1>
            <span class="block text-gray-500 text-sm text-center">Active 8h ago</span>
          </div>

          <!--Messages-->
          <div class="p-2 lg:p-5">

            <!--Message To-->
            <div class="py-4">
              <span class="block text-gray-500 text-sm text-center">10/01/2018 8:41PM</span>
              <div class="flex items-end flex-col mt-5">
                <div class="messages message--to">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div class="messages message--to">
                  Integer vel odio nunc.
                </div>
                <div class="messages message--to">
                  Curabitur sit amet auctor nulla. Quisque maximus nisi mauris, a fringilla arcu molestie
                </div>
              </div>
            </div>

            <!--Message From-->
            <div class="py-4">
              <span class="block text-gray-500 text-sm text-center">10/01/2018 8:41PM</span>
              <div class="flex mt-5">
                <div class="message-from-avatar">
                  <img class="h-10 w-10 rounded-full"
                       src="https://randomuser.me/api/portraits/women/20.jpg">
                </div>
                <div class="ml-2 flex flex-col">
                  <div class="messages message--from">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div class="messages message--from">
                    Integer vel odio nunc.
                  </div>
                  <div class="messages message--from">
                    Curabitur sit amet auctor nulla. Quisque maximus nisi mauris, a fringilla arcu molestie
                  </div>
                </div>
              </div>

            </div>

            <!--Message To-->
            <div class="py-4">
              <span class="block text-gray-500 text-sm text-center">10/01/2018 8:41PM</span>
              <div class="flex items-end flex-col mt-5">
                <div class="messages message--to">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div class="messages message--to">
                  Integer vel odio nunc.
                </div>
                <div class="messages message--to">
                  Integer vel odio nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div class="messages message--to">
                  Curabitur sit amet auctor nulla. Quisque maximus nisi mauris, a fringilla arcu molestie
                </div>
              </div>
            </div>

            <!--Message From-->
            <div class="py-4">
              <span class="block text-gray-500 text-sm text-center">10/01/2018 8:41PM</span>
              <div class="flex mt-5">
                <div class="message-from-avatar">
                  <img class="h-10 w-10 rounded-full"
                       src="https://randomuser.me/api/portraits/women/20.jpg">
                </div>
                <div class="ml-2 flex flex-col">
                  <div class="messages message--from">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div class="messages message--from">
                    Integer vel odio nunc.
                  </div>
                  <div class="messages message--from">
                    Curabitur sit amet auctor nulla. Quisque maximus nisi mauris, a fringilla arcu molestie
                  </div>
                </div>
              </div>

            </div>

            <!--Message From-->
            <div class="py-4">
              <span class="block text-gray-500 text-sm text-center">10/01/2018 8:41PM</span>
              <div class="flex mt-5">
                <div class="mr-2 message-from-avatar">
                  <img class="h-10 w-10 rounded-full"
                       src="https://randomuser.me/api/portraits/women/20.jpg">
                </div>
                <div class="ml-2 flex flex-col">
                  <div class="messages message--from">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div class="messages message--from">
                    Integer vel odio nunc.
                  </div>
                  <div class="messages message--from">
                    Curabitur sit amet auctor nulla. Quisque maximus nisi mauris, a fringilla arcu molestie
                  </div>
                </div>
              </div>

            </div>


          </div>

          <!--Message Input-->
          <div class="p-5 mt-5 border-t border-solid border-gray-300">
            <div class="flex">
              <div class="flex-grow">
                <input class="h-full w-full border-0 text-gray-600 outline-none pr-2" placeholder="Type Message">
              </div>
              <div class="flex-shrink ">
                <font-awesome-icon class="mr-1 h-4 text-gray-400 hover:text-gray-600 cursor-pointer " :icon="['fas', 'cloud-upload-alt']"/>
                <font-awesome-icon class="mr-1 h-4 text-gray-400 hover:text-gray-600 cursor-pointer " :icon="['fas', 'camera']"/>
                <font-awesome-icon class="mr-1 h-4 text-gray-400 hover:text-gray-600 cursor-pointer " :icon="['fas', 'microphone']"/>
              </div>
            </div>
          </div>


        </div>
        <div class="mt-10 lg:mt-0 lg:w-2/6 bg-white shadow-md">
          <!--User-->
          <div class="flex justify-between items-center border-b border-solid border-gray-300 p-5">
            <div class="grow">
              <div class="flex">
                <div class="mr-5">
                  <img class="w-16 rounded-full"
                       src="https://randomuser.me/api/portraits/women/20.jpg">
                </div>
                <div>
                  <h1 class="text-lg font-semibold text-gray-800">Jasmine Mueller</h1>
                  <span class="text-base text-gray-500">Active 8h ago</span>
                </div>
              </div>
            </div>
            <div class="flex-shrink relative">
              <font-awesome-icon class="mr-1 h-4 text-gray-500 hover:text-gray-600 cursor-pointer " :icon="['fas', 'cog']" @click="showDropDown=true"/>
              <setting-drop-down @close="showDropDown=false"  v-if="showDropDown==true">
                <div class="mb-3 mt-2">Mute</div>
                <div class="mb-3">Archive chat</div>
                <div class="mb-3">Delete chat</div>
                <hr class="mb-3">
                <div class="mb-3">Create group</div>
                <div class="mb-3">Add participants</div>
                <hr class="mb-3">
                <div class="mb-3">Block</div>
                <div class="mb-3">Suspend</div>
                <div class="mb-3">Confirm</div>
                <div class="mb-3">Report</div>
              </setting-drop-down>
            </div>
          </div>
          <!--Options-->
          <div class="cursor-pointer border-b border-solid border-gray-300 p-5" >
            <div class="flex justify-between items-center" @click="showOptions=!showOptions">
            <div class="grow ">
              <h1 class="text-lg font-semibold text-gray-600">Options</h1>
            </div>
            <div class="flex-shrink">
              <font-awesome-icon class="mr-1 h-4 text-gray-500 hover:text-gray-600 cursor-pointer " :icon="['fas', showOptions?'chevron-down':'chevron-right']"/>
            </div>
            </div>
            <div v-if="showOptions" class="text-ideeza-black mt-10 font-semibold">
              <div class="mb-2 ">Search in conversation</div>
              <div class="relative">
                <input type="text" class="p-2 border rounded border-gray-400 w-full">
                <font-awesome-icon class="absolute font-base right-0 text-gray-500 hover:text-gray-600 cursor-pointer mt-3 mr-2" :icon="['fas','search']"/>
              </div>
              <div class="mt-5 mb-2">Mark as unread</div>
              <div class="mb-2">Edit message</div>
              <div class="mb-2">Forward message</div>
              <div class="mb-2">Go to project 
                <nuxt-link to="admin/projects" class="text-ideeza inline">Magic car with bluetooth</nuxt-link>
              </div>
            </div>
          </div>
          <!--Shared Files-->
          <div class=" border-b border-solid border-gray-300 p-5">
            <div class="cursor-pointer flex justify-between items-center">
              <div class="grow">
                <h1 class="text-lg font-semibold text-gray-600">Shared Files</h1>
              </div>
              <div class="flex-shrink">
                <font-awesome-icon class="mr-1 h-4 text-gray-500 hover:text-gray-600 cursor-pointer " :icon="['fas', 'chevron-down']"/>
              </div>
            </div>

            <div class="flex mt-3 cursor-pointer items-center">
              <div class="mr-3">
                <font-awesome-icon class="mr-1 h-4 text-gray-400 hover:text-gray-500 " :icon="['fas', 'file']"/>
              </div>
              <div>
                <h1 class="font-semibold text-ideeza">final-project-files.pdf</h1>
              </div>
            </div>

          </div>

          <!--Shared Photos-->
          <div class="p-5">
            <div class="cursor-pointer flex justify-between items-center">
              <div class="grow">
                <h1 class="text-lg font-semibold text-gray-600">Shared Photos</h1>
              </div>
              <div class="flex-shrink">
                <font-awesome-icon class="mr-1 h-4 text-gray-500 hover:text-gray-600 cursor-pointer " :icon="['fas', 'chevron-down']"/>
              </div>
            </div>

            <div class="flex mt-5 flex-wrap">
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
            </div>

          </div>
        </div>
      </div>


    </div>

  </div>


</template>

<script>
  import LeftMenu from '~/components/admin/messages/left-side-menu.vue'
  import SettingDropDown from '~/components/admin/messages/setting-drop-down.vue'
  export default {
    layout: 'user',
    name: "messages-index",
    components: {
      LeftMenu,
      SettingDropDown
    },
    data: function () {
      return {
        showOptions: false,
        showDropDown: false
      }
    },
    computed: {
      leftMenu() {
        return this.$store.state.usermenu.openLeftMenu;
      }
    },
    mounted() {

    },
    methods: {}
  }
</script>

<style scoped>
  .messages{
    @apply py-1 px-2 text-base;
    width: fit-content;
    margin-bottom: 2px;
  }
  .message-from-avatar{
    width: 40px;
    height: 40px;
    display: contents;
  }
  .message--to{
    @apply text-right  text-white  bg-ideeza-dark rounded-l-lg;

  }
  .message--to:first-child{
    @apply rounded-tr-lg;
  }
  .message--to:last-child{
    @apply rounded-br-lg;
  }

  .message--from{
    @apply text-left text-gray-800 bg-gray-200 rounded-r-lg;
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
  .dropdown{
    top: 100%;
    width: 200px;
  }
</style>
