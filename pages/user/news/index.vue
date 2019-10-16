<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="bg-gray-200 flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow lg:pt-16 lg:pl-10">

      <div class="lg:flex">

        <!--Feed Panel-->
        <div class="feed-panel">

          <!--New Feed-->
          <div class="flex mb-10">
            <div class="hidden lg:block">
              <img class="feed-avatar rounded-full mr-5" src="https://randomuser.me/api/portraits/men/6.jpg" alt="">
            </div>
            <div class="flex-grow bg-white shadow-md p-5">
              <div class="text-ideeza font-semibold text-lg mb-5">
                <font-awesome-icon class="mr-1 h-4 inline-block" :icon="['fas', 'pen']"/>
                Share Project
              </div>
              <div class="bg-gray-200 py-5 px-3 flex justify-center items-center">
                <div class="flex-grow">
                  <input class="w-full px-1 bg-gray-200 text-lg text-gray-600 font-semibold outline-none" placeholder="Lorem ipsum dolores sit ?" >
                </div>
                <div>
                  <font-awesome-icon class="mr-1 h-4 text-lg inline-block text-gray-500 hover:text-gray-600 cursor-pointer" :icon="['fas', 'paperclip']"/>
                  <font-awesome-icon class="mr-1 h-4 text-lg inline-block text-gray-500 hover:text-gray-600 cursor-pointer" :icon="['fas', 'camera']"/>
                </div>

              </div>
            </div>
          </div>


          <div class="flex mb-10">
            <div class="hidden lg:block">
              <img class="feed-avatar rounded-full mr-5" src="https://randomuser.me/api/portraits/men/9.jpg" alt="">
            </div>
            <div class="flex-grow bg-white shadow-md p-5">
              <div class="text-gray-600 font-semibold text-lg mb-5 flex justify-between">
                <div>John Doe <span class="font-normal">likes a project</span> • <span class="font-normal text-xs">2 hours ago</span></div>
                <div>
                  <font-awesome-icon class="mr-1 h-6 text-lg inline-block text-gray-500 hover:text-gray-600 cursor-pointer" :icon="['fas', 'ellipsis-h']"/>
                </div>
              </div>
              <div class="bg-gray-200">
                <img class="w-full object-fit object-center" src="~/static/images/car-big.png" alt="">
              </div>
              <div class="mt-10">
                <button class="btn pill-button px-6 mr-3">Like</button>
                <button class="btn pill-button px-6 mr-3">Share</button>
                <button class="btn pill-button px-6 mr-3">Comment</button>
              </div>
            </div>
          </div>

          <div class="flex mb-10">
            <div class="hidden lg:block">
              <img class="feed-avatar rounded-full mr-5" src="https://randomuser.me/api/portraits/women/11.jpg" alt="">
            </div>
            <div class="flex-grow bg-white shadow-md py-5">
              <div class="text-gray-600 font-semibold text-lg mb-5 flex justify-between mx-5">
                <div>Sarah Doe <span class="font-normal">add a new project</span> <span class="text-gray-800">Retro Headphones</span> • <span class="font-normal text-xs">3 weeks ago</span></div>
                <div>
                  <font-awesome-icon class="mr-1 h-6 text-lg inline-block text-gray-500 hover:text-gray-600 cursor-pointer" :icon="['fas', 'ellipsis-h']"/>
                </div>
              </div>
              <div class="bg-gray-200 mx-5">
                <img class="w-full object-fit object-center" src="~/static/images/headphone-big.png" alt="">
              </div>
              <div class="mt-10 lg:flex justify-between mx-5">
                <img class="mt-2 lg:mt-0" src="~/static/images/headphone-1.png" alt="">
                <img class="mt-2 lg:mt-0" src="~/static/images/headphone-2.png" alt="">
              </div>
              <div class="my-10 mx-5">
                <button class="btn pill-button pill-button--ideeza px-3 lg:px-6 mr-1 lg:mr-3">Don't Like</button>
                <button class="btn pill-button px-3 lg:px-6 mr-1 lg:mr-3">Share</button>
                <button class="btn pill-button px-3 lg:px-6 mr-1 lg:mr-3">Comment</button>
              </div>

              <div class="text-gray-600 text-lg border-t border-b border-solid border-gray-300 py-5 px-5">
                <span class="font-semibold">You</span> and <span class="font-semibold">35 others</span> like this
              </div>

              <!--Comments-->
              <div class="border-b border-solid border-gray-300 py-5 px-5">
                <div class="flex">
                  <div class="mr-10 w-16">
                    <img class="feed-comment-avatar rounded-full" src="https://randomuser.me/api/portraits/men/15.jpg" alt="">
                  </div>
                  <div >
                     <div class="text-gray-600 text-lg">
                       <span class="mr-10 inline-block font-semibold">William Doe</span> Great product, love the design and function of it,
                        <br>
                       pcb card is beautifully arranged... keep on going :)
                     </div>
                    <div class="text-base text-gray-600 mt-5">
                      <span class="text-ideeza">Like</span> • <span class="text-ideeza">Reply</span> • <span class="text-sm">2 week ago</span>
                    </div>
                  </div>
                </div>
              </div>

              <!--Write Comments-->
              <div class="mt-10 mx-5 bg-gray-200 p-10">
                <input class="bg-gray-200 text-gray-600 text-semibold text-lg outline-none" placeholder="Write your comment...">
              </div>

            </div>
          </div>

        </div>

        <!--Right Side Bar-->
        <div class="rigt-bar lg:ml-12">

          <!--Sponsor-->
          <div class="bg-white shadow-md">
            <div>
              <img class="w-full object-fit object-center" src="~/static/images/sponsor.png" alt="">
            </div>
            <div class="p-8 text-xl uppercase text-gray-400 font-semibold">
              <font-awesome-icon class="mr-5 h-6 inline-block" :icon="['fas', 'star']"/>SPONSORED
            </div>
            <div class="px-5 pb-5 text-gray-500">
              <h1 class="text-gray-800 mb-2 font-semibold">Ahmed Doe’s new way of Tech Product</h1>

                Lorem ipsum dolores sit, amanet dolisi isilti
                as hat why souriti lalola. That’s why he
                wanted to create something unordinary....
            </div>
            <div class="border-t border-solid border-gray-300 py-5 px-5 mb-5 text-gray-500">
              Nov 12, 2018 • Electronics
            </div>
          </div>


          <!--Connect-->
          <div class="bg-white shadow-md px-4 py-8 mt-12">
            <div class="text-lg border-b font-semibold border-solid border-gray-300 pb-5 text-gray-500">
              PEOPLE YOU SHOULD CONNECT
            </div>

            <div class="flex justify-between items-center bg-white my-5">
              <div class="flex items-center">
                <img class="h-10 w-10 md:h-14 md:w-14 rounded-full mr-3"
                     src="https://randomuser.me/api/portraits/men/10.jpg">
                <div class="text-left mr-3">
                  <h2 class="font-semibold text-gray-800">John Doe</h2>
                  <div class="text-gray-600">Product Designer</div>
                </div>
              </div>

              <button class="btn btn-small btn-small--white">
                <font-awesome-icon class="mr-1 h-4" :icon="['fas', 'link']"/> Connect
              </button>
            </div>
            <div class="flex justify-between items-center bg-white my-5">
              <div class="flex items-center">
                <img class="h-10 w-10 md:h-14 md:w-14 rounded-full mr-3"
                     src="https://randomuser.me/api/portraits/men/10.jpg">
                <div class="text-left mr-3">
                  <h2 class="font-semibold text-gray-800">John Doe</h2>
                  <div class="text-gray-600">Product Designer</div>
                </div>
              </div>

              <button class="btn btn-small btn-small--white">
                <font-awesome-icon class="mr-1 h-4" :icon="['fas', 'link']"/> Connect
              </button>
            </div>
            <div class="flex justify-between items-center bg-white my-5">
              <div class="flex items-center">
                <img class="h-10 w-10 md:h-14 md:w-14 rounded-full mr-3"
                     src="https://randomuser.me/api/portraits/men/10.jpg">
                <div class="text-left mr-3">
                  <h2 class="font-semibold text-gray-800">John Doe</h2>
                  <div class="text-gray-600">Product Designer</div>
                </div>
              </div>

              <button class="btn btn-small btn-small--white">
                <font-awesome-icon class="mr-1 h-4" :icon="['fas', 'link']"/> Connect
              </button>
            </div>
            <div class="flex justify-between items-center bg-white my-5">
              <div class="flex items-center">
                <img class="h-10 w-10 md:h-14 md:w-14 rounded-full mr-3"
                     src="https://randomuser.me/api/portraits/men/10.jpg">
                <div class="text-left mr-3">
                  <h2 class="font-semibold text-gray-800">John Doe</h2>
                  <div class="text-gray-600">Product Designer</div>
                </div>
              </div>

              <button class="btn btn-small btn-small--white">
                <font-awesome-icon class="mr-1 h-4" :icon="['fas', 'link']"/> Connect
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>


</template>
<script>
  import LeftMenu from '~/components/user/common-left-side-menu.vue'

  export default {
    layout: 'user',
    name: "news-index",
    components: {
      LeftMenu
    },
    data: function () {
      return {}
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
  .main-panel {
    transition: all 0.3s ease-in;
  }
  .main-panel.hide-left-bar {
    margin-left: -300px;
  }
  .feed-panel{
    width: 100%;
    max-width: 850px;
  }
  .rigt-bar{
    width: 100%;
    max-width: 390px;
  }
  .feed-avatar{
    width: 80px;
    height: 80px;
  }
  .feed-comment-avatar{
    width: 40px;
    height: 40px;
  }
</style>
