<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="main-contents" v-if="articleArray.length>0">
        <div class="projects-container">
          <div class="lg:flex justify-between items-center pb-3 ml-4">
            <h1 class="text-xl text-gray-800 font-semibold">My projects</h1>
          </div>

          <div class="lg:flex flex-wrap">
            <template v-for="(info,index) in articleArray">
            <div v-if="info.products.length>1" :key="index+'d'" class="w-4/12 p-4 relative">
              <carousel :per-page="1">
                <slide v-for="product in info.products" :key="'d'+product.product_id" class="project-item-container relative">
                  <!-- <nuxt-link :to="{ path: '/user/projects/detail', query: { id: info.project_id}}">
                  <div class="image-container">
                    <img class="project-item-container--image" :src="project_img_url + product.product_image" alt />asdf
                  </div>
                  <div class="flex justify-between items-center text-xs text-ideeza-black mt-5">
                    <div class="flex items-center">
                      <font-awesome-icon class="mr-2 h-4 text-ideeza-gold" :icon="['fas', 'star']" />
                      <span>{{product.rating}}</span>
                    </div>
                    <span
                      class="font-semibold"
                    >{{product.like}} &nbsp; likes &nbsp; {{product.dislike}}&nbsp; dislikes </span>
                  </div>
                </nuxt-link> -->
                <nuxt-link tag="div" :to="'/user/projects/'+product.product_id">
                <div class="cursor-pointer border p-4 bg-white" @mouseover="product.showDetails=true;$forceUpdate()" @mouseleave="product.showDetails=false;$forceUpdate()">
                  <div class="porject-thum-img"><img class="product-img" :src="project_img_url+product.product_image"></div>
                  <div class="flex pt-3">
                    <div class="flex-1">
                      <img src="~/static/images/star-icon-2.png" class="inline-block mr-4">{{product.rating}}
                    </div>
                    <div class="flex-1 text-right">{{product.like}} Likes</div>
                  </div>
                </div>
                </nuxt-link>
                </slide>
              </carousel>
              <template v-for="product in info.products">
              <div :key="product.product_id+'as'"
                class="absolute p-5 rounded-lg border-light-gray border-solid border shadow-md z-50 pop-over"
                :class="{'hidden':product.showDetails==undefined||product.showDetails==false}"
              >
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
            <!-- <div :key="index" v-else
              class="w-32p project-item-container w-full shadow border border-solid border-light-gray mt-12 relative"
            > -->
             <!-- v-if="Project.flag == 1" -->
              <!-- <nuxt-link :to="{ path: '/user/projects/detail', query: { id: info.project_id}}">
                <div class="image-container">
                  <img class="project-item-container--image" :src="project_img_url + info.products[0].product_image" alt />asdf
                </div>
                <div class="flex justify-between items-center text-xs text-ideeza-black mt-5">
                  <div class="flex items-center">
                    <font-awesome-icon class="mr-2 h-4 text-ideeza-gold" :icon="['fas', 'star']" />
                    <span>{{info.products[0].rating}}</span>
                  </div>
                  <span
                    class="font-semibold"
                  >{{info.products[0].like}} &nbsp; likes &nbsp; {{info.products[0].dislike}}&nbsp; dislikes </span>
                </div>
              </nuxt-link> -->
              <div class="project-item-container relative w-4/12 p-4 relative" :key="index+'s'">
                <nuxt-link tag="div" class="border p-4 cursor-pointer bg-white" :to="{ path: '/user/projects/detail', query: { id: info.project_id}}">
                  <div class="porject-thum-img"><img class="product-img" :src="project_img_url+info.products[0].product_image"></div>
                  <div class="flex pt-3">
                    <div class="flex-1">
                      <img src="~/static/images/star-icon-2.png" class="inline-block mr-4">{{info.products[0].rating}}
                    </div>
                    <div class="flex-1 text-right">{{info.products[0].like}} Likes</div>
                  </div>
                </nuxt-link>

              <div
                class="absolute p-5 rounded-lg border-light-gray border-solid border shadow-md z-50 hidden pop-over"
              >
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

            <!-- <div
              v-else
              class="w-64p double flex justify-between project-item-container w-full shadow border border-solid border-light-gray mt-12 relative"
            >
              <nuxt-link :to="{ path: '/user/projects/detail', query: { id: Project.id}}">
                <div class="image-container">
                  <img class="project-item-container--image" src="~/static/images/car-big.png" alt />
                </div>
                <div class="flex justify-between items-center text-xs text-ideeza-black mt-5">
                  <div class="flex items-center">
                    <font-awesome-icon class="mr-2 h-4 text-ideeza-gold" :icon="['fas', 'star']" />
                    <span>{{Project.mark.first}}</span>
                  </div>
                  <span
                    class="font-semibold"
                  >{{Project.commitmember1.first}} &nbsp; {{Project.commitkind1}}&nbsp; {{Project.commitmember2.first}}&nbsp; {{Project.commitkind2}}</span>
                </div>
              </nuxt-link>
              <nuxt-link
                :to="{ path: '/user/projects/detail', query: { id: Project.id}}"
                class="ml-5"
              >
                <div class="image-container">
                  <img class="project-item-container--image" src="~/static/images/car-big.png" alt />
                </div>
                <div class="flex justify-between items-center text-xs text-ideeza-black mt-5">
                  <div class="flex items-center">
                    <font-awesome-icon class="mr-2 h-4 text-ideeza-gold" :icon="['fas', 'star']" />
                    <span>{{Project.mark.second}}</span>
                  </div>
                  <span
                    class="font-semibold"
                  >{{Project.commitmember1.second}} &nbsp; {{Project.commitkind1}}&nbsp; {{Project.commitmember2.second}}&nbsp; {{Project.commitkind2}}</span>
                </div>
              </nuxt-link>

              <div
                class="absolute p-5 rounded-lg border-light-gray border-solid border hidden shadow-md z-50 bg-white pop-over"
              >
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <h1 class="font-semibold text-lg">{{Project.projectName.first}}</h1>
                    <span class="text-sm text-gray-600 ml-3">{{Project.projecttitle.first}}</span>
                  </div>
                  <div class="font-semibold text-ideeza-black">{{Project.Cost.first}}</div>
                </div>

                <div class="text-sm mt-5">{{Project.ShortDescription.first}}</div>

                <div class="flex justify-between items-center mt-10">
                  <div class="flex items-center">
                    <h1 class="font-semibold text-lg">{{Project.projectName.second}}</h1>
                    <span class="text-sm text-gray-600 ml-3">{{Project.projecttitle.first}}</span>
                  </div>
                  <div class="font-semibold text-ideeza-black">{{Project.Cost.second}}</div>
                </div>

                <div class="text-sm mt-5">{{Project.ShortDescription.second}}</div>
              </div>
            </div>-->
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
  data: function() {
    return {
      longview: true,
      Projects: Projects.firstproject,
      geturl: "/api/project/get_all",
      articleArray: [],
      randomNumber: {},
      project_img_url:process.env.project_image_url,     

    };
  },
  created: function() {
    
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
    left:25%;
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
.carousel-open:checked + .carousel-item {
				position: static;
				opacity: 100;
			}
			.carousel-item {
				-webkit-transition: opacity 0.6s ease-out;
				transition: opacity 0.6s ease-out;
			}
			#carousel-1:checked ~ .control-1,
			#carousel-2:checked ~ .control-2,
			#carousel-3:checked ~ .control-3 {
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
			#carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
			#carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
			#carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
				color: #2b6cb0;  /*Set to match the Tailwind colour you want the active one to be */
      }
      img.product-img{
        height: 330px;
        width: 100%;
      }
</style>
