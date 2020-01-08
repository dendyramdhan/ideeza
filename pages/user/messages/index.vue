<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu :userList="userList" @select_user="select_user"/>

    <!-- Main Contents -->
    <div class="flex-grow lg:py-10 lg:px-3 xl:px-10">
      <div class="lg:flex">
        <div class="lg:w-3/4 lg:mr-3 shadow-md bg-white">
          <div class="chat-board">
            <!--Header-->
              <div class="py-5 border-b border-solid border-gray-300" v-if = "selectedUserIndex>-1">
                <h1 class="text-center text-gray-800 text-lg font-semibold ">Jasmine Mueller</h1>
                <span class="block text-gray-500 text-sm text-center">Active 8h ago</span>
              </div>

              <!--Messages-->
              <div class="p-2 lg:p-5" v-if = "selectedUserIndex>-1">

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


                <!--Message To-->
                <div class="py-4">
                  <span class="block text-gray-500 text-sm text-center">10/01/2018 8:41PM</span>
                  <div class="flex items-end flex-col mt-5">

                <div class="messages message--to">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div class="messages message--to" style="width:500px" v-if="sendmessage">
                 {{sendmessage}}

                    </div>
                    
                  </div>
                </div>
              </div>
          </div>
          


          <!--Message Input-->
          <div class="p-5 mt-5 border-t border-solid border-gray-300">
            <div class="flex">
              <div class="flex-grow">
                <input class="h-full w-full border-0 text-gray-600 outline-none pr-2" placeholder="Type Message" v-model="sendmessage" @change="sendmymessage">
              </div>
              <div class="flex-shrink ">
                <font-awesome-icon class="mr-1 h-4 text-gray-400 hover:text-gray-600 cursor-pointer " :icon="['fas', 'cloud-upload-alt']"  />
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
            <div class="flex-shrink">
              <font-awesome-icon class="mr-1 h-4 text-gray-500 hover:text-gray-600 cursor-pointer " :icon="['fas', 'cog']"/>
            </div>
          </div>
          <!--Options-->
          <div class="cursor-pointer flex justify-between items-center border-b border-solid border-gray-300 p-5">
            <div class="grow">
              <h1 class="text-lg font-semibold text-gray-600">Options</h1>
            </div>
            <div class="flex-shrink">
              <font-awesome-icon class="mr-1 h-4 text-gray-500 hover:text-gray-600 cursor-pointer " :icon="['fas', 'chevron-right']"/>
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

  import LeftMenu from '~/components/user/messages/left-side-menu.vue'

  export default {
    layout: 'user',
    name: "messages-index",
    components: {
      LeftMenu
    },
    data: function () {

      return {
        sendmessage:"",
        userList:[],
        messageHistory: [],
        selectedUserIndex : -1
      }

    },
    methods:{
      sendmymessage(e){
        this.sendmessage=e.target.value;
      },

      select_user(user_index){

        this.selectedUserIndex = user_index

        console.log("user index ", user_index)

      }
    },
    computed: {
      leftMenu() {
        return this.$store.state.usermenu.openLeftMenu;
      }
    },
    mounted() {

      this.userList=[

        { 
          "user_id": "111",
          "name": "Jasmine Mueller",
          "avarta": "https://randomuser.me/api/portraits/men/12.jpg",
          "last_time": "5min ago",
          "last_message": " great product, love the func ...."
        },

        { 
          "user_id": "112",
          "name": "Jane Doe",
          "avarta": "https://randomuser.me/api/portraits/men/8.jpg",
          "last_time": "50min ago",
          "last_message": " great product, love the func ...."
        },

        { 
          "user_id": "113",
          "name": "Jon Doe",
          "avarta": "https://randomuser.me/api/portraits/men/3.jpg",
          "last_time": "3min ago",
          "last_message": " great product, love the func ...."
        }

      ]

      this.messageHistory = [
        {
          "from_me": false,
          "last_time": "10/01/2018 8:41PM",
          "messages":[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Integer vel odio nunc.",
            "Curabitur sit amet auctor nulla. Quisque maximus nisi mauris, a fringilla arcu molestie"
          ]
        },
        {
          "from_me": true,
          "last_time": "10/01/2018 8:41PM",
          "messages":[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Integer vel odio nunc.",
            "Curabitur sit amet auctor nulla. Quisque maximus nisi mauris, a fringilla arcu molestie"
          ]
        },
        {
          "from_me": false,
          "last_time": "10/01/2018 8:42PM",
          "messages":[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Integer vel odio nunc.",
            "Curabitur sit amet auctor nulla. Quisque maximus nisi mauris, a fringilla arcu molestie"
          ]
        },
        {
          "from_me": true,
          "last_time": "10/01/2018 8:44PM",
          "messages":[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Integer vel odio nunc.",
            "Curabitur sit amet auctor nulla. Quisque maximus nisi mauris, a fringilla arcu molestie"
          ]
        }
      ]

      console.log("message page mounted ")
    }
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
  .chat-board{
    height: 682px;
    overflow: auto;
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
</style>
