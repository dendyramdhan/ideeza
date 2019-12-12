<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow mb-20">

      <div class="main-contents">

        <h1 class="font-semibold lg:text-5xl">Good morning, Moran!</h1>

        <div class="mt-10 lg:flex welcome-container">
          <div class="lg:w-1/2 lg:h-full relative text-white">
            <img src="~/static/images/user-dash-main.png" class="object-center object-contain" alt="">
            <div class="absolute top-0 left-0 w-full text-center flex flex-col items-center">
              <h1 class="font-semibold lg:text-5xl mt-10 mb-5 text-white text-center w-full">Let's get you started</h1>
              <span class="font-semibold block text-3xl mb-3 w-full text-center">Now is your time to change the world.</span>
              <span class="font-semibold block text-3xl mb-10 w-full text-center">Dream, invent, create.</span>

              <img @click="showMyIdeeza=true" class="cursor-pointer" src="~/static/images/float-ideeza.png" alt="">
            </div>

          </div>
          <div class="lg:w-1/2 pl-10">
            <div class="flex justify-between items-center pb-5 border-b border-light-gray">
              <h2 class="font-semibold block text-3xl">Last Activity</h2>
              <button class="btn pill-button px-10 text-lg">View last activity</button>
            </div>

            <div class="flex justify-between">
              <div class="status-button p-6">
                <div class="flex items-center">
                  <font-awesome-icon class="mr-6 h-10 text-2xl  text-ideeza" :icon="['fas', 'layer-group']"/>
                  <span class="text-6xl text-ideeza-black mb-5 leading-none">812</span>
                </div>
                <div class="pl-16">
                  <span class="text-ideeza-blue-gray text-lg block ">Projects</span>
                </div>
              </div>
              <div class="status-button p-6">
                <div class="flex items-center">
                  <img class="mr-6" src="~/static/icons/users.svg" alt="">
                  <span class="text-6xl text-ideeza-black mb-5 leading-none">388</span>
                </div>
                <div class="pl-16">
                  <span class="text-ideeza-blue-gray text-lg block ">Contacts</span>
                </div>
              </div>
              <div class="status-button p-6">
                <div class="flex items-center">
                  <img class="mr-6" src="~/static/icons/bullseye.svg" alt="">
                  <span class="text-6xl text-ideeza-black mb-5 leading-none">4.9</span>
                </div>
                <div class="pl-16">
                  <span class="text-ideeza-blue-gray text-lg block ">My score</span>
                </div>
              </div>
            </div>

            <div>
              <div class="table relative mb-5">
                <div class="table-cell timeline-diaplay"></div>
                <div class="table-cell pl-5">
                  <div>29/03/2019, 23:00</div>
                  <div class="my-1">User Log in</div>
                  <div class="font-semibold">Karen Allen logged into a system</div>
                </div>
              </div>
              <div class="table relative mb-5">
                <div class="table-cell timeline-diaplay"></div>
                <div class="table-cell pl-5">
                  <div>29/03/2019, 23:00</div>
                  <div class="my-1">User Log in</div>
                  <div class="font-semibold">Karen Allen logged into a system</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="w-2/3">
            <h1 class="font-semibold lg:text-3xl my-5">World's last innovation</h1>
            <div class="scroll-area">
              <smooth-scrollbar :options="{alwaysShowTracks: true}">
                <div class="flex flex-wrap">
                  <div class="blog-container mr-2">
                    <div class="blog-image-container mb-8">
                      <img src="~/static/images/dashboard-blog-image.png" class="object-center object-contain" alt="">
                    </div>
                    <h3 class="font-semibold tex-2xl  mb-2">Google was working with us</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget interdum urna, ac ornare risus. Vivamus
                    </p>
                    <div class="flex justify-between items-center mt-5">
                      <small>21 October, 2019</small>
                      <button class="btn btn--ideeza px-4 py-2">Read more</button>
                    </div>
                  </div>
                  <div class="blog-container mr-2">
                    <div class="flex justify-between items-center mb-5">
                      <small>21 October, 2019</small>
                      <button class="btn btn--ideeza px-4 py-2">Read more</button>
                    </div>

                    <h3 class="font-semibold tex-2xl  mb-2">Google was working with us</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget interdum urna, ac ornare risus. Vivamus
                    </p>
                    <div class="blog-image-container mt-8">
                      <img src="~/static/images/dashboard-blog-image.png" class="object-center object-contain" alt="">
                    </div>

                  </div>
                  <div class="blog-container mr-2">
                    <div class="blog-image-container mb-8">
                      <img src="~/static/images/dashboard-blog-image.png" class="object-center object-contain" alt="">
                    </div>
                    <h3 class="font-semibold tex-2xl  mb-2">Google was working with us</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget interdum urna, ac ornare risus. Vivamus
                    </p>
                    <div class="flex justify-between items-center mt-5">
                      <small>21 October, 2019</small>
                      <button class="btn btn--ideeza px-4 py-2">Read more</button>
                    </div>
                  </div>
                  <div class="blog-container mr-2">
                    <div class="blog-image-container mb-8">
                      <img src="~/static/images/dashboard-blog-image.png" class="object-center object-contain" alt="">
                    </div>
                    <h3 class="font-semibold tex-2xl  mb-2">Google was working with us</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget interdum urna, ac ornare risus. Vivamus
                    </p>
                    <div class="flex justify-between items-center mt-5">
                      <small>21 October, 2019</small>
                      <button class="btn btn--ideeza px-4 py-2">Read more</button>
                    </div>
                  </div>
                  <div class="blog-container mr-2">
                    <div class="blog-image-container mb-8">
                      <img src="~/static/images/dashboard-blog-image.png" class="object-center object-contain" alt="">
                    </div>
                    <h3 class="font-semibold tex-2xl  mb-2">Google was working with us</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget interdum urna, ac ornare risus. Vivamus
                    </p>
                    <div class="flex justify-between items-center mt-5">
                      <small>21 October, 2019</small>
                      <button class="btn btn--ideeza px-4 py-2">Read more</button>
                    </div>
                  </div>
                  <div class="blog-container mr-2">
                    <div class="blog-image-container mb-8">
                      <img src="~/static/images/dashboard-blog-image.png" class="object-center object-contain" alt="">
                    </div>
                    <h3 class="font-semibold tex-2xl  mb-2">Google was working with us</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget interdum urna, ac ornare risus. Vivamus
                    </p>
                    <div class="flex justify-between items-center mt-5">
                      <small>21 October, 2019</small>
                      <button class="btn btn--ideeza px-4 py-2">Read more</button>
                    </div>
                  </div>
                </div>

              </smooth-scrollbar>
            </div>

          </div>
          <div class="w-1/3">
            <h1 class="font-semibold lg:text-3xl my-5">Top projects</h1>
            <div class="scroll-area">
              <smooth-scrollbar :options="{alwaysShowTracks: true}">
                <div class="flex flex-wrap">
                  <div class="w-1/2 p-2">
                    <div class="p-2 border border-solid border-light-gray">
                      <div class="w-full projects-image">
                        <img src="~/static/images/dashboard-audi.png" class="object-contain object-center w-full" alt="">
                        <div class="my-1 flex justify-between items-center">
                          <div class="flex items-center">
                            <font-awesome-icon class="mr-1 h-4 text-ideeza-gold" :icon="['fas', 'star']"/>
                            <small class="text-xs">4.5</small>
                          </div>

                          <span class="text-xs">34 likes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-1/2 p-2">
                    <div class="p-2 border border-solid border-light-gray">
                      <div class="w-full projects-image">
                        <img src="~/static/images/dashboard-audi.png" class="object-contain object-center w-full" alt="">
                        <div class="my-1 flex justify-between items-center">
                          <div class="flex items-center">
                            <font-awesome-icon class="mr-1 h-4 text-ideeza-gold" :icon="['fas', 'star']"/>
                            <small class="text-xs">4.5</small>
                          </div>

                          <span class="text-xs">34 likes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-1/2 p-2">
                    <div class="p-2 border border-solid border-light-gray">
                      <div class="w-full projects-image">
                        <img src="~/static/images/dashboard-audi.png" class="object-contain object-center w-full" alt="">
                        <div class="my-1 flex justify-between items-center">
                          <div class="flex items-center">
                            <font-awesome-icon class="mr-1 h-4 text-ideeza-gold" :icon="['fas', 'star']"/>
                            <small class="text-xs">4.5</small>
                          </div>

                          <span class="text-xs">34 likes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-1/2 p-2">
                    <div class="p-2 border border-solid border-light-gray">
                      <div class="w-full projects-image">
                        <img src="~/static/images/dashboard-audi.png" class="object-contain object-center w-full" alt="">
                        <div class="my-1 flex justify-between items-center">
                          <div class="flex items-center">
                            <font-awesome-icon class="mr-1 h-4 text-ideeza-gold" :icon="['fas', 'star']"/>
                            <small class="text-xs">4.5</small>
                          </div>

                          <span class="text-xs">34 likes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-1/2 p-2">
                    <div class="p-2 border border-solid border-light-gray">
                      <div class="w-full projects-image">
                        <img src="~/static/images/dashboard-audi.png" class="object-contain object-center w-full" alt="">
                        <div class="my-1 flex justify-between items-center">
                          <div class="flex items-center">
                            <font-awesome-icon class="mr-1 h-4 text-ideeza-gold" :icon="['fas', 'star']"/>
                            <small class="text-xs">4.5</small>
                          </div>

                          <span class="text-xs">34 likes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-1/2 p-2">
                    <div class="p-2 border border-solid border-light-gray">
                      <div class="w-full projects-image">
                        <img src="~/static/images/dashboard-audi.png" class="object-contain object-center w-full" alt="">
                        <div class="my-1 flex justify-between items-center">
                          <div class="flex items-center">
                            <font-awesome-icon class="mr-1 h-4 text-ideeza-gold" :icon="['fas', 'star']"/>
                            <small class="text-xs">4.5</small>
                          </div>

                          <span class="text-xs">34 likes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-1/2 p-2">
                    <div class="p-2 border border-solid border-light-gray">
                      <div class="w-full projects-image">
                        <img src="~/static/images/dashboard-audi.png" class="object-contain object-center w-full" alt="">
                        <div class="my-1 flex justify-between items-center">
                          <div class="flex items-center">
                            <font-awesome-icon class="mr-1 h-4 text-ideeza-gold" :icon="['fas', 'star']"/>
                            <small class="text-xs">4.5</small>
                          </div>

                          <span class="text-xs">34 likes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-1/2 p-2">
                    <div class="p-2 border border-solid border-light-gray">
                      <div class="w-full projects-image">
                        <img src="~/static/images/dashboard-audi.png" class="object-contain object-center w-full" alt="">
                        <div class="my-1 flex justify-between items-center">
                          <div class="flex items-center">
                            <font-awesome-icon class="mr-1 h-4 text-ideeza-gold" :icon="['fas', 'star']"/>
                            <small class="text-xs">4.5</small>
                          </div>

                          <span class="text-xs">34 likes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </smooth-scrollbar>
            </div>


          </div>
        </div>

      </div>

    </div>


    <!--MyIdeeza Popup-->
    <MyIdeeza v-click-outside="onClickOutside" v-if="showMyIdeeza" />
  </div>


</template>

<script>
  import LeftMenu from '~/components/user/common-left-side-menu.vue'
  import MyIdeeza from '~/components/user/my-ideeza/new-ideeza.vue'

  export default {
    layout: 'user',
    name: "dashboard-index",
    components: {
      LeftMenu,
      MyIdeeza
    },
    data: function () {
      return {
        showMyIdeeza: false
      }
    },
    computed: {
      leftMenu() {
        return this.$store.state.usermenu.openLeftMenu;
      }
    },
    mounted() {

    },
    methods: {
      onClickOutside() {
        this.showMyIdeeza = false;
      }
    }
  }
</script>

<style scoped>

  .welcome-container{
    height: 455px;
  }
  .blog-image-container{
    width: 315px;
    height: 215px;
  }
  .projects-image{
    /*height: 170px;*/
  }
  .scroll-area{
    height: 430px;
  }
  .blog-container{
    @apply mr-2 mt-2;
    width: 320px;
    height: 420px;
  }
  .status-button{
    @apply p-3 m-3 border border-solid border-ideeza cursor-pointer rounded;
  }
  /deep/ .scrollbar-thumb{
    @apply bg-ideeza opacity-75;
  }
</style>
