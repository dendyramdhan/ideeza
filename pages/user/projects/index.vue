<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow">

      <div class="main-contents">
        <div class="projects-container">
          <div class="lg:flex justify-between items-center pb-3">
            <h1 class="text-xl text-gray-800 font-semibold ">My projects</h1>

          </div>

          <div class="lg:flex flex-wrap">
            <div class="w-32p project-item-container w-full shadow border border-solid border-light-gray mt-12 relative">
              <nuxt-link to="/user/projects/detail">
                <div class="image-container">
                  <img class="project-item-container--image" src="~/static/images/car-big.png" alt="">
                </div>
                <div class="flex justify-between items-center text-xs text-ideeza-black mt-5">
                  <div class="flex items-center">
                    <font-awesome-icon class="mr-2 h-4 text-ideeza-gold" :icon="['fas', 'star']"/>
                    <span>4.5</span>
                  </div>
                  <span class="font-semibold">24 likes</span>
                </div>
              </nuxt-link>

              <div  class="absolute p-5 rounded-lg border-light-gray border-solid border shadow-md z-50 pop-over">
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <h1 class="font-semibold text-lg">Project name</h1>
                    <span class="text-sm text-gray-600 ml-3">Electronics + Cover</span>
                  </div>
                  <div class="font-semibold text-ideeza-black">
                    $20,000
                  </div>
                </div>

                <div class="text-sm mt-5">
                  Sed in porta nunc, a interdum massa. Donec elementum id leo in pulvinar.
                  Cras purus erat, feugiat vel lectus ut, hendrerit porttitor sem. Curabitur
                  tempor sem ex
                </div>


              </div>

            </div>
            <div class="w-64p double flex justify-between project-item-container w-full shadow border border-solid border-light-gray mt-12 relative">

              <nuxt-link to="/user/projects/detail">
                <div class="image-container">
                  <img class="project-item-container--image" src="~/static/images/car-big.png" alt="">
                </div>
                <div class="flex justify-between items-center text-xs text-ideeza-black mt-5">
                  <div class="flex items-center">
                    <font-awesome-icon class="mr-2 h-4 text-ideeza-gold" :icon="['fas', 'star']"/>
                    <span>4.5</span>
                  </div>
                  <span class="font-semibold">24 likes</span>
                </div>
              </nuxt-link>
              <nuxt-link to="/user/projects/detail" class="ml-5">
                <div class="image-container">
                  <img class="project-item-container--image" src="~/static/images/car-big.png" alt="">
                </div>
                <div class="flex justify-between items-center text-xs text-ideeza-black mt-5">
                  <div class="flex items-center">
                    <font-awesome-icon class="mr-2 h-4 text-ideeza-gold" :icon="['fas', 'star']"/>
                    <span>4.5</span>
                  </div>
                  <span class="font-semibold">24 likes</span>
                </div>
              </nuxt-link>

              <div  class="absolute p-5 rounded-lg border-light-gray border-solid border shadow-md z-50 bg-white pop-over">



                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <h1 class="font-semibold text-lg">Project name</h1>
                    <span class="text-sm text-gray-600 ml-3">Electronics + Cover</span>
                  </div>
                  <div class="font-semibold text-ideeza-black">
                    $20,000
                  </div>
                </div>

                <div class="text-sm mt-5">
                  Sed in porta nunc, a interdum massa. Donec elementum id leo in pulvinar.
                  Cras purus erat, feugiat vel lectus ut, hendrerit porttitor sem. Curabitur
                  tempor sem ex
                </div>

                <div class="flex justify-between items-center mt-10">
                  <div class="flex items-center">
                    <h1 class="font-semibold text-lg">Project name</h1>
                    <span class="text-sm text-gray-600 ml-3">Electronics + Cover</span>
                  </div>
                  <div class="font-semibold text-ideeza-black">
                    $20,000
                  </div>
                </div>

                <div class="text-sm mt-5">
                  Sed in porta nunc, a interdum massa. Donec elementum id leo in pulvinar.
                  Cras purus erat, feugiat vel lectus ut, hendrerit porttitor sem. Curabitur
                  tempor sem ex
                </div>

              </div>

            </div>

            <div class="w-32p project-item-container w-full shadow border border-solid border-light-gray mt-12 relative">
              <nuxt-link to="/user/projects/detail">
                <div class="image-container">
                  <img class="project-item-container--image" src="~/static/images/car-big.png" alt="">
                </div>
                <div class="flex justify-between items-center text-xs text-ideeza-black mt-5">
                  <div class="flex items-center">
                    <font-awesome-icon class="mr-2 h-4 text-ideeza-gold" :icon="['fas', 'star']"/>
                    <span>4.5</span>
                  </div>
                  <span class="font-semibold">24 likes</span>
                </div>
              </nuxt-link>

              <div  class="absolute p-5 rounded-lg border-light-gray border-solid border shadow-md z-50 bg-white pop-over">
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <h1 class="font-semibold text-lg">Project name</h1>
                    <span class="text-sm text-gray-600 ml-3">Electronics + Cover</span>
                  </div>
                  <div class="font-semibold text-ideeza-black">
                    $20,000
                  </div>
                </div>

                <div class="text-sm mt-5">
                  Sed in porta nunc, a interdum massa. Donec elementum id leo in pulvinar.
                  Cras purus erat, feugiat vel lectus ut, hendrerit porttitor sem. Curabitur
                  tempor sem ex
                </div>


              </div>

            </div>
            <div class="w-32p project-item-container w-full shadow border border-solid border-light-gray mt-12 relative">
              <nuxt-link to="/user/projects/detail">
                <div class="image-container">
                  <img class="project-item-container--image" src="~/static/images/car-big.png" alt="">
                </div>
                <div class="flex justify-between items-center text-xs text-ideeza-black mt-5">
                  <div class="flex items-center">
                    <font-awesome-icon class="mr-2 h-4 text-ideeza-gold" :icon="['fas', 'star']"/>
                    <span>4.5</span>
                  </div>
                  <span class="font-semibold">24 likes</span>
                </div>
              </nuxt-link>

              <div  class="absolute p-5 rounded-lg border-light-gray border-solid border shadow-md z-50 bg-white pop-over">
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <h1 class="font-semibold text-lg">Project name</h1>
                    <span class="text-sm text-gray-600 ml-3">Electronics + Cover</span>
                  </div>
                  <div class="font-semibold text-ideeza-black">
                    $20,000
                  </div>
                </div>

                <div class="text-sm mt-5">
                  Sed in porta nunc, a interdum massa. Donec elementum id leo in pulvinar.
                  Cras purus erat, feugiat vel lectus ut, hendrerit porttitor sem. Curabitur
                  tempor sem ex
                </div>


              </div>

            </div>
            <div class="w-32p project-item-container w-full shadow border border-solid border-light-gray mt-12 relative">
              <nuxt-link to="/user/projects/detail">
                <div class="image-container">
                  <img class="project-item-container--image" src="~/static/images/car-big.png" alt="">
                </div>
                <div class="flex justify-between items-center text-xs text-ideeza-black mt-5">
                  <div class="flex items-center">
                    <font-awesome-icon class="mr-2 h-4 text-ideeza-gold" :icon="['fas', 'star']"/>
                    <span>4.5</span>
                  </div>
                  <span class="font-semibold">24 likes</span>
                </div>
              </nuxt-link>

              <div  class="absolute p-5 rounded-lg border-light-gray border-solid border shadow-md z-50 bg-white pop-over">
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <h1 class="font-semibold text-lg">Project name</h1>
                    <span class="text-sm text-gray-600 ml-3">Electronics + Cover</span>
                  </div>
                  <div class="font-semibold text-ideeza-black">
                    $20,000
                  </div>
                </div>

                <div class="text-sm mt-5">
                  Sed in porta nunc, a interdum massa. Donec elementum id leo in pulvinar.
                  Cras purus erat, feugiat vel lectus ut, hendrerit porttitor sem. Curabitur
                  tempor sem ex
                </div>


              </div>

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
      name: "projects-index",
      data: function() {
        return {
          longview: true
        }
      },
      components: {
        LeftMenu
      },
      computed: {
        leftMenu() {
          return this.$store.state.usermenu.openLeftMenu;
        }
      },
      methods: {

      }
    }
</script>

<style scoped>
  .projects-container{
    width: 100%;

  }
  .project-item-container{
    width: 100%;

  }
  .project-item-image{
    width: 100%;
    min-width: auto;
  }
  .w-45{
    width: auto;
  }
  @screen lg {
    .projects-container {
      padding: 60px 50px;
    }
    .project-item-container{
      padding: 10px;
      max-width: 500px;
      margin-right: 10px;
    }

    .project-item-container.double{
      max-width: 1000px;
    }

    .double:before{
      @apply border border-solid border-ideeza;
      content: "";
      position: absolute;
      top: -4px;
      left: -4px;
      width: 101%;
      height: 102%;
    }

    .project-item-container--image{
      @apply object-center object-cover;
      height: 370px;
    }
    .pop-over{
      @apply hidden;
      width: 500px;
      top: 70%;
      left: 20%;
      background: #f2eef6;
    }
    .project-item-container:hover .pop-over{
      @apply block;
    }
    .w-32p{
      width: 32%;
    }
    .w-64p{
      width: 64%;
      margin-left: 10px;
    }
  }
</style>
