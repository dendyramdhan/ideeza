<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="" v-if="articleArray.length>0">
        <div class="projects-container">
          <div class="lg:flex justify-between items-center pb-3 ml-4">
            <h1 class="text-2xl text-black font-bold">My private projects</h1>
          </div>

          <div class="lg:flex flex-wrap private-projects">
            <template v-for="(info,index) in articleArray">
              <div v-if="info.products.length>1" :key="index+'d'" class="w-4/12 p-4 relative">
                <carousel :per-page="1">
                  <slide v-for="product in info.products" :key="'d'+product.product_id"
                    class="project-item-container relative">
                    <nuxt-link tag="div" :to="'/user/projects/'+info.project_id">
                      <div class="cursor-pointer border p-4 bg-white"
                        @mouseover="product.showDetails=true;$forceUpdate()"
                        @mouseleave="product.showDetails=false;$forceUpdate()">
                        <div class="porject-thum-img relative">
                          <img class="product-img" :src="project_img_url+product.product_image">
                          <div class="absolute bottom-0 right-0 text-right px-3 py-3 text-md">
                            <div class="flex text-lg text-white ">
                              <div class="flex-1 w-32">
                                <div class="inline-block">
                                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']" />
                                </div> 211
                              </div>
                              <div class="flex-1">
                                <img src="~/static/images/ideeza-play-icon.png" class="inline-block"> 76
                              </div>
                              <div class="flex-1">
                                <img src="~/static/images/likeWhite.png" class="inline-block"> 34
                              </div>

                            </div>
                          </div>
                        </div>
                        <div class="pt-3 text-black font-semibold text-lg">
                          {{product.product_title}}
                        </div>
                      </div>
                    </nuxt-link>
                  </slide>
                </carousel>
                <template v-for="product in info.products">
                  <div :key="product.product_id+'as'"
                    class="absolute p-5 rounded-lg border-light-gray border-solid border shadow-md z-50 pop-over"
                    :class="{'hidden':product.showDetails==undefined||product.showDetails==false}">
                    <div class="flex justify-between items-center">
                      <div class="flex items-center">
                        <h1 class="font-semibold text-lg">{{product.product_title}}</h1>
                        <span class="text-sm text-gray-600 ml-3">{{info.title}}</span>
                      </div>
                      <div class="font-semibold text-ideeza-black">${{product.cost}}</div>
                    </div>
                    <div class="text-sm mt-5">{{product.product_description}}</div>
                  </div>
                </template>
              </div>
              <div class="project-item-container relative w-4/12 p-4 relative" :key="index+'s'">
                <nuxt-link tag="div" class="border p-4 cursor-pointer bg-white"
                  :to="{ path: '/user/projects/detail', query: { id: info.project_id}}">
                  <div class="porject-thum-img relative">
                    <img class="product-img" :src="project_img_url+info.products[0].product_image">
                    <div class="absolute bottom-0 right-0 text-right px-3 py-3 text-md">
                      <div class="flex text-lg text-white ">
                        <div class="flex-1 w-32">
                          <div class="inline-block">
                            <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']" />
                          </div> 211
                        </div>
                        <div class="flex-1">
                          <img src="~/static/images/ideeza-play-icon.png" class="inline-block"> 76
                        </div>
                        <div class="flex-1">
                          <img src="~/static/images/likeWhite.png" class="inline-block"> 34
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="pt-3 text-black font-semibold text-lg">
                    {{info.products[0].product_title}}
                  </div>
                </nuxt-link>

                <div
                  class="absolute p-5 rounded-lg border-light-gray border-solid border shadow-md z-50 hidden pop-over">
                  <div class="flex justify-between items-center">
                    <div class="flex items-center">
                      <h1 class="font-semibold text-lg">{{info.products[0].product_title}}</h1>
                      <span class="text-sm text-gray-600 ml-3">{{info.title}}</span>
                    </div>
                    <div class="font-semibold text-ideeza-black">${{info.products[0].cost}}</div>
                  </div>

                  <div class="text-sm mt-5">{{info.products[0].product_description}}</div>
                </div>
              </div>
            </template>
          </div>
          <div class="lg:flex justify-between items-center pb-3 ml-4 mt-2">
            <h1 class="text-2xl text-black font-semibold">My public projects</h1>
          </div>
          <div class="lg:flex flex-wrap private-projects">
            <template v-for="(info,index) in articleArray">
              <div v-if="info.products.length>1" :key="index+'d'" class="w-4/12 p-4 relative">
                <carousel :per-page="1">
                  <slide v-for="product in info.products" :key="'d'+product.product_id"
                    class="project-item-container relative">
                    <nuxt-link tag="div" :to="'/user/projects/'+info.project_id">
                      <div class="cursor-pointer border bg-white"
                        @mouseover="product.showDetails=true;$forceUpdate()"
                        @mouseleave="product.showDetails=false;$forceUpdate()">
                        <div class="porject-thum-img relative">
                          <img class="product-img" :src="project_img_url+product.product_image">
                          <div class="absolute bottom-0 right-0 text-right px-3 py-3 text-md">
                            <div class="flex text-lg text-white ">
                              <div class="flex-1 w-32">
                                <div class="inline-block">
                                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']" />
                                </div> 211
                              </div>
                              <div class="flex-1">
                                <img src="~/static/images/ideeza-play-icon.png" class="inline-block"> 76
                              </div>
                              <div class="flex-1">
                                <img src="~/static/images/likeWhite.png" class="inline-block"> 34
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </nuxt-link>
                  </slide>
                </carousel>
                <template v-for="product in info.products">
                  <div v-if="product.showDetails==true" :key="product.product_id+'as'"
                    class="absolute p-5 rounded-lg border-light-gray border-solid border shadow-md z-50 pop-over"
                    :class="{'hidden':product.showDetails==undefined||product.showDetails==false}">
                    <div class="flex justify-between items-center">
                      <div class="flex items-center">
                        <h1 class="font-semibold text-lg">{{product.product_title}}</h1>
                        <span class="text-sm text-gray-600 ml-3">{{info.title}}</span>
                      </div>
                      <div class="font-semibold text-ideeza-black">${{product.cost}}</div>
                    </div>
                    <div class="text-sm mt-5">{{product.product_description}}</div>
                  </div>
                </template>
              </div>
              <div class="project-item-container relative w-4/12 p-4 relative" :key="index+'s'">
                <nuxt-link tag="div" class="border cursor-pointer bg-white"
                  :to="{ path: '/user/projects/detail', query: { id: info.project_id}}">
                  <div class="porject-thum-img relative">
                    <img class="product-img" :src="project_img_url+info.products[0].product_image">
                    <div class="porject-thum-img relative">
                      <div class="absolute bottom-0 right-0 text-right px-3 py-3 text-md">
                        <div class="flex text-lg text-white ">
                          <div class="flex-1 w-32">
                            <div class="inline-block">
                              <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']" />
                            </div> 211
                          </div>
                          <div class="flex-1">
                            <img src="~/static/images/ideeza-play-icon.png" class="inline-block"> 76
                          </div>
                          <div class="flex-1">
                            <img src="~/static/images/likeWhite.png" class="inline-block"> 34
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </nuxt-link>

                <div
                  class="absolute p-5 rounded-lg border-light-gray border-solid border shadow-md z-50 hidden pop-over">
                  <div class="flex justify-between items-center">
                    <div class="flex items-center">
                      <h1 class="font-semibold text-lg">{{info.products[0].product_title}}</h1>
                      <span class="text-sm text-gray-600 ml-3">{{info.title}}</span>
                    </div>
                    <div class="font-semibold text-ideeza-black">${{info.products[0].cost}}</div>
                  </div>

                  <div class="text-sm mt-5">{{info.products[0].product_description}}</div>
                </div>
              </div>
            </template>
          </div>
          <div class="lg:flex justify-between items-center pb-3 ml-4 mt-2">
            <h1 class="text-2xl text-black font-semibold">Projects I contribute to</h1>
          </div>
          <div class="lg:flex flex-wrap private-projects">
            <template v-for="(info,index) in articleArray">
              <div v-if="info.products.length>1" :key="index+'d'" class="w-4/12 p-4 relative">
                <carousel :per-page="1">
                  <slide v-for="product in info.products" :key="'d'+product.product_id"
                    class="project-item-container relative">
                    <nuxt-link tag="div" :to="'/user/projects/'+info.project_id">
                      <div class="cursor-pointer border bg-white"
                        @mouseover="product.showDetails=true;$forceUpdate()"
                        @mouseleave="product.showDetails=false;$forceUpdate()">
                        <div class="porject-thum-img relative">
                          <img class="product-img" :src="project_img_url+product.product_image">
                          <div class="absolute bottom-0 right-0 text-right px-3 py-3 text-md">
                            <div class="flex text-lg text-white ">
                              <div class="flex-1 w-32">
                                <div class="inline-block">
                                  <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']" />
                                </div> 211
                              </div>
                              <div class="flex-1">
                                <img src="~/static/images/ideeza-play-icon.png" class="inline-block"> 76
                              </div>
                              <div class="flex-1">
                                <img src="~/static/images/likeWhite.png" class="inline-block"> 34
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </nuxt-link>
                  </slide>
                </carousel>
                <template v-for="product in info.products">
                  <div v-if="product.showDetails==true" :key="product.product_id+'as'"
                    class="absolute p-5 rounded-lg border-light-gray border-solid border shadow-md z-50 pop-over"
                    :class="{'hidden':product.showDetails==undefined||product.showDetails==false}">
                    <div class="flex justify-between items-center">
                      <div class="flex items-center">
                        <h1 class="font-semibold text-lg">{{product.product_title}}</h1>
                        <span class="text-sm text-gray-600 ml-3">{{info.title}}</span>
                      </div>
                      <div class="font-semibold text-ideeza-black">${{product.cost}}</div>
                    </div>
                    <div class="text-sm mt-5">{{product.product_description}}</div>
                  </div>
                </template>
              </div>
              <div class="project-item-container relative w-4/12 p-4 relative" :key="index+'s'">
                <nuxt-link tag="div" class="border cursor-pointer bg-white"
                  :to="{ path: '/user/projects/detail', query: { id: info.project_id}}">
                  <div class="porject-thum-img relative">
                    <img class="product-img" :src="project_img_url+info.products[0].product_image">
                    <div class="porject-thum-img relative">
                      <div class="absolute bottom-0 right-0 text-right px-3 py-3 text-md">
                        <div class="flex text-lg text-white ">
                          <div class="flex-1 w-32">
                            <div class="inline-block">
                              <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']" />
                            </div> 211
                          </div>
                          <div class="flex-1">
                            <img src="~/static/images/ideeza-play-icon.png" class="inline-block"> 76
                          </div>
                          <div class="flex-1">
                            <img src="~/static/images/likeWhite.png" class="inline-block"> 34
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </nuxt-link>

                <div
                  class="absolute p-5 rounded-lg border-light-gray border-solid border shadow-md z-50 hidden pop-over">
                  <div class="flex justify-between items-center">
                    <div class="flex items-center">
                      <h1 class="font-semibold text-lg">{{info.products[0].product_title}}</h1>
                      <span class="text-sm text-gray-600 ml-3">{{info.title}}</span>
                    </div>
                    <div class="font-semibold text-ideeza-black">${{info.products[0].cost}}</div>
                  </div>

                  <div class="text-sm mt-5">{{info.products[0].product_description}}</div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LeftMenu from "~/components/user/common-left-side-menu.vue";
  import Projects from "~/data/UserProjectApi.json";
  import apiService from "~/apiService/have_token.js";

  export default {
    middleware: "auth",
    layout: "user",
    name: "projects-index",
    data: function () {
      return {
        longview: true,
        Projects: Projects.firstproject,
        geturl: "/api/project/get_all",
        articleArray: [],
        randomNumber: {},
        project_img_url: process.env.project_image_url,

      };
    },
    created: function () {

      // let authToken = window.$nuxt.$cookies.get("authToken");
      // let sendData = {
      //   method: "get",
      //   url: this.geturl,
      //   data: null,
      //   authToken: authToken
      // };
      // apiService(sendData, response => {
      //   console.log(response.data);
      //   this.randomNumber = response.data;
      //   this.articleArray = Object.values(response.data.data);
      // });
      // axios.get("http://127.0.0.1:5000/api/getblog").then(response => {
      //   // console.log("response :", response.data)
      //   this.randomNumber = response.data;
      //   console.log(this.randomNumber);
      // });
      // console.log(this.randomNumber);
    },
    components: {
      LeftMenu
    },
    computed: {
      leftMenu() {
        return this.$store.state.usermenu.openLeftMenu;
      }
    },
    mounted() {
      let sendData = {
        method: "get",
        url: this.geturl,
        data: null
      };

      apiService(sendData, response => {
        console.log(response.data);
        this.randomNumber = response.data;
        this.articleArray = Object.values(response.data.data);
        // this.articleArray.map(item=>{
        //   this.pagerlength=item.products.length
        // })

      });
    },
    methods: {}
  };

</script>

<style scoped>
  .VueCarousel-pagination {
    position: absolute;
    bottom: 5%;
  }

  .projects-container {
    width: 100%;
  }

  .project-item-image {
    width: 100%;
    min-width: auto;
  }

  .w-45 {
    width: auto;
  }

  @screen lg {
    .projects-container {
      padding: 60px 50px;
    }

    .double:before {
      @apply border border-solid border-ideeza;
      content: "";
      position: absolute;
      top: -4px;
      left: -4px;
      width: 101%;
      height: 102%;
    }

    .project-item-container--image {
      @apply object-center object-cover;
      height: 370px;
    }

    .pop-over {
      width: 500px;
      top: 54%;
      left: 25%;
      background: #fff;
    }

    .project-item-container:hover .pop-over {
      @apply block;
    }

    .w-32p {
      width: 32%;
    }

    .w-64p {
      width: 64%;
      margin-left: 10px;
    }
  }

  .carousel-open:checked+.carousel-item {
    position: static;
    opacity: 100;
  }

  .carousel-item {
    -webkit-transition: opacity 0.6s ease-out;
    transition: opacity 0.6s ease-out;
  }

  #carousel-1:checked~.control-1,
  #carousel-2:checked~.control-2,
  #carousel-3:checked~.control-3 {
    display: block;
  }

  .carousel-indicators {
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 2%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;
  }

  #carousel-1:checked~.control-1~.carousel-indicators li:nth-child(1) .carousel-bullet,
  #carousel-2:checked~.control-2~.carousel-indicators li:nth-child(2) .carousel-bullet,
  #carousel-3:checked~.control-3~.carousel-indicators li:nth-child(3) .carousel-bullet {
    color: #2b6cb0;
    /*Set to match the Tailwind colour you want the active one to be */
  }

  img.product-img {
    height: 330px;
    width: 100%;
  }
  
</style>
