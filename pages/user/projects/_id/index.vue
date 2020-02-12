<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="main-contents">
        <div class="p-5">
          <div class="bg-white shadow p-5">
            <div class="lg:flex justify-between items-center pb-3">
              <nuxt-link
                to="/user/projects"
                class="border rounded-lg border-pink-600 px-8 py-3 text-pink-600"
              >Go Back</nuxt-link>
            </div>
            <div class>
              <h2 class="text-pink-900 mt-5 font-bold text-4xl">Lamborgini toy car</h2>
              <nuxt-link tag="div" to="/user/profile" class="flex mt-4">
                <div class="w-16 h-16 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/17.jpg" />
                </div>
                <div class="pl-3">
                  <h3 class="text-pink-700 font-bold text-2xl">Alex Gordon</h3>
                  <p class="text-pink-700">Technican at Google</p>
                </div>
              </nuxt-link>
            </div>

            <div class="lg:flex flex-wrap">
              <div class="w-6/12 project-description">
                <h2 class="text-pink-900 font-bold text-2xl mt-10 mb-8 btm-underline">Description</h2>
                <p
                  class="text-pink-900"
                >Curabitur varius fringilla est, sed rhoncus ligula sagittis vel. Suspendisse vel dapibus orci, volutpat bibendum lacus. Nullam cursus metus felis, at consectetur turpis aliquet non. Sed eu ante interdum, pellentesque ex quis, semper dolor.</p>

                <div class="flex text-pink-900 border-t border-b border-pink-200 py-3 my-5 text-sm">
                  <div class="w-4/12">
                    <div class="inline-block px-2">
                      <img src="~/static/images/like2.png" class="inline-block mr-2" />Like
                    </div>
                    <div class="inline-block px-2">
                      <img src="~/static/images/share.png" class="inline-block mr-2" />Share
                    </div>
                  </div>
                  <div class="w-8/12">
                    <div class="inline-block px-2">121 Likes</div>
                    <div class="inline-block px-2">11 Comments</div>
                    <div class="inline-block px-2">11 Shares</div>
                  </div>
                </div>
                <template v-for="comment in comments">
            <div class="flex mt-4" :key="comment">
                  <div class="p-3">
                    <div class="w-16 h-16 rounded-full overflow-hidden">
                      <img src="https://randomuser.me/api/portraits/women/23.jpg" />
                    </div>
                  </div>
                  <div>
                    <div class="p-3 bg-gray-300 rounded-lg">
                      <div class="flex">
                        <div class="flex-1">
                          <h3 class="text-gray-700 font-bold text-xl">Mike Tayson</h3>
                        </div>
                        <div class="flex-1 text-right">3 min ago</div>
                      </div>
                      <p class="text-gray-700 text-md">Technican at Google</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud
                      </p>
                      <div class="py-3">
                        <span class="inline-block">
                          <img src="~/static/images/like-min.png" class="inline-block mr-2" /> 92 Likes
                        </span>
                        <span class="inline-block" @click="comment.show_text_box=!comment.show_text_box">
                          <img src="~/static/images/comment.png" class="inline-block mr-2" />92 comments
                        </span>
                      </div>
                    </div>
                    <div class="flex mt-4" v-for="com in comment.childs" :key="com">
                      <div class="p-3">
                        <div class="w-16 h-16 rounded-full overflow-hidden">
                          <img src="https://randomuser.me/api/portraits/women/21.jpg" />
                        </div>
                      </div>
                      <div>
                        <div class="p-3 bg-gray-300 rounded-lg">
                          <div class="flex">
                            <div class="flex-1">
                              <h3 class="text-gray-700 font-bold text-xl">Mike Tayson</h3>
                            </div>
                            <div class="flex-1 text-right">3 min ago</div>
                          </div>
                          <p class="text-gray-700 text-md">Technican at Google</p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                          </p>
                          <div class="py-3">
                            <span class="inline-block">
                              <img src="~/static/images/like-min.png" class="inline-block mr-2" /> 92 Likes
                            </span>
                            <span class="inline-block">
                              <img src="~/static/images/comment.png" class="inline-block mr-2" />92 comments
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <input type="text" v-if="comment.show_text_box==true" placeholder="Write your comment..." class="mt-2 px-3 py-6 bg-gray-200 text-gray-700 w-full">
                  </div>
                </div>
            </template>
                <div class="py-3">
                  <input type="text" placeholder="Write your comment..." class="px-3 py-6 bg-gray-200 text-gray-700 w-full">
                </div>
              </div>
              <div class="w-6/12 pl-3" v-if="project">
                <h2 class="text-pink-900 font-bold text-2xl mt-10 mb-8 btm-underline">Products</h2>
                <div class="flex flex-wrap">
                  <template v-for="product in project.products">
                  <nuxt-link :to="{ path: '/user/projects/detail', query: { id: product.product_id}}" :key="product.product_id" class="w-full md:w-1/2 pr-1 mb-1 cursor-pointer">
                    <div class="shadow-lg relative">
                      <img :src="project_image_url + product.product_image" />
                      <div class="absolute bottom-0 right-0 text-right px-3 py-3 text-md w-90">
                    <div class="flex text-lg text-white text-sm">
                      <div class="flex-1 flex items-center mr-2 tooltip">
                        <div class="inline-block">
                          <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']" />
                        </div>
                        <div>211</div>
                        <span class="tooltiptext">Views</span>
                      </div>
                      <div class="flex-1 flex items-center mr-2 tooltip">
                        <img src="~/static/images/ideeza-play-icon.png" class="inline-block mr-2"> 
                        <div>76</div>
                        <span class="tooltiptext">Activities</span>
                      </div>
                      <div class="flex-1 items-center flex mr-2 tooltip">
                        <img src="~/static/images/likeWhite.png" class="inline-block mr-2">
                        <div>35</div>
                        <span class="tooltiptext">Likes</span>
                      </div>

                    </div>
                  </div>
                    </div>
                    <h2 class="text-pink-900 font-bold text-xl pt-3">{{product.product_title}}</h2>
                    <p class="text-gray-700 text-md">{{product.product_description}}</p>
                  </nuxt-link>
                  </template>
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
import LeftMenu from "~/components/user/common-left-side-menu.vue";
import apiServiceWithToken from "~/apiService/have_token.js";
export default {
  layout: "user",
  name: "agency-index",
  components: {
    LeftMenu
  },
  data: function() {
    return {
      projects: [],
      project: null,
      project_image_url: process.env.project_image_url,
      comments:[
        {
          childs: 1,
          show_text_box: false
        },
        {
          childs: 3,
          show_text_box: false
        },
        {
          childs: 2,
          show_text_box: false
        },
        {
          childs: 0,
          show_text_box: false
        },
        {
          childs: 1,
          show_text_box: false
        }
      ]
    };
  },
  asyncData({params}){
    return{id: params.id}
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  mounted() {
    let getallmyprojectsurl = "/api/project/get_all";
    let getallmyprojectsData = {
      method: "get",
      url: getallmyprojectsurl,
      data: null
    };

    apiServiceWithToken(getallmyprojectsData, response => {
      if (response.data["success"] == true) {
        this.projects = response.data["data"];
        console.log("projects: ", response.data["data"]);
        this.project = this.projects.find(a =>  a.project_id == this.id.toString())
      }
    });
  },
  methods: {}
};
</script>

<style scoped>
.btm-underline {
  position: relative;
}
.btm-underline:after {
  content: "";
  position: absolute;
  width: 150px;
  height: 3px;
  background: #febef0;
  bottom: -10px;
  left: 0;
}
.project-description{
  height: 500px;
  overflow-y: auto;
}
.project-description::-webkit-scrollbar {
    width: 20px;
}

.project-description::-webkit-scrollbar-track {
    background: #8E6E87;
    border-left: 9px solid white;
    border-right: 9px solid white;
}

.project-description::-webkit-scrollbar-thumb {
    background: #8E6E87;
    border-left: 8px solid white;
    border-right: 8px solid white;
}
</style>
