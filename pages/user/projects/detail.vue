<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />
    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="main-contents md:flex">
        <div class="detail-main md:w-2/3">
          <!--Panel Menu-->
          <nuxt-link tag="button" to="/user/projects/" class="p-2 bg-white border border-gray-300 mb-2">
            <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'arrow-left']" />
            back
          </nuxt-link>
          <div
            class="flex justify-between flex-col lg:flex-row border-b border-gray-400 pl-5 pr-5 lg:pl-0 lg:pr-0 pb-3"
          >
            <div class="text-xl font-bold m-3 lg:m-0 text-center lg:text-left">
              <div v-for="Project in articleArray">
                <div v-if="Project.project_id == $route.query.id ">
                  <!-- Lamborghini Aventado Project -->
                  {{Project.title}}
                </div>
              </div>
            </div>
            <div class="flex flex-wrap items-center">
              <span class="panel-menu text-center">
                <div @click="tab='electronics'" :class="{'text-ideeza':tab=='electronics'}">
                  <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'bolt']" />Electronics
                </div>
              </span>
              <span class="ml-5 panel-menu text-center">
                <div @click="tab='code'" :class="{'text-ideeza':tab=='code'}">
                  <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'code']" />Code
                </div>
              </span>
              <span class="ml-5 panel-menu text-center">
                <div @click="tab='cover'" :class="{'text-ideeza':tab=='cover'}">
                  <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'cube']" />Cover
                </div>
              </span>
              <nuxt-link to="/user/pro" class="ml-5 panel-menu text-center">
                <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'wrench']" />General
              </nuxt-link>
              <nuxt-link to="/user/pro" class="ml-5 panel-menu text-center">
                <CustomizeIcon class="fill-current mr-1 w-4" />Customize
              </nuxt-link>
            </div>
          </div>
          <template v-if="tab=='cover'">
            <Cover />
          </template>
          <template v-if="tab=='electronics'">
            <Electronics/>
          </template>
          <template v-if="tab=='code'">
          <div class="my-5 bg-white shadow">
            <div v-for="Project in articleArray">
              <div v-if="Project.project_id == $route.query.id ">
                <img
                  class="w-full"
                  :src=" project_img_url + Project.products[0].product_image"
                />
              </div>
            </div>

            <div class="py-5 px-5 lg:flex justify-between items-center">
              <div class="flex flex-start">
                <div class="relative" v-click-outside="onClickOutside">
                  <div class="btn btn--ideeza px-6 py-1 mr-5" @click="focus = !focus">
                    Share Inventions
                    <font-awesome-icon class="ml-5 h-6 text-xl" :icon="['fas', 'star']" />
                  </div>
                  <div class="z-50 absolute bg-white shadow-md py-2 px-1" v-show="focus">
                    <div
                      @click="showInternalShare"
                      class="px-2 py-3 text-ideeza-black hover:text-ideeza block cursor-pointer"
                    >Share in news feed</div>
                    <div
                      @click="showExternalShare"
                      class="px-1 py-2 text-ideeza-black hover:text-ideeza block cursor-pointer"
                    >Share external</div>
                  </div>
                </div>
                <div class="btn btn--ideeza px-6 py-1 mr-5">
                    Join this project
                  <font-awesome-icon class="ml-5 h-6 text-xl" :icon="['fas', 'user']" />
                </div>
              </div>
              <div
                class="flex items-center mt-5 lg:mt-0"
                v-for="Project in articleArray"
                v-if="Project.project_id == $route.query.id"
              >
                <div>
                  <nuxt-link
                    :to="{path:'/user/order-tracking/making-product',query: { id: $route.query.id}}"
                    class="btn btn-normal btn--ideeza font-semibold px-5 py-2"
                  >Track the order</nuxt-link>
                </div>
                <div class="mx-5 text-sm text-gray-500 font-semibold">
                  <font-awesome-icon class="mr-1 h-4" :icon="['fas', 'eye']" />
                  {{Project.products[0].cost}}
                </div>
                <div>
                  <button class="btn btn-normal font-semibold p-2 text-gray-500">
                    <font-awesome-icon class="mr-1 h-4" :icon="['fas', 'star']" />
                    {{Project.products[0].rating}}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="my-10 bg-white shadow">
            <div
              class="flex py-5 px-5 border-b border-solid border-gray-300 justify-between items-center w-full"
            >
              <span class="text-lg font-semibold text-ideeza">Description</span>
              <button @click="EditTextarea1" class="btn btn-small px-3 text-ideeza">
                <font-awesome-icon class="mr-2 h-3 align-baseline inline" :icon="['fa', 'pen']" />Edit
              </button>
            </div>

            <div class="py-10 px-5 text-gray-600" v-if="edit===0">
              <div class="lg:flex" v-for="Project in articleArray">
                <span
                  class="lg:flex "
                  v-if="Project.project_id == $route.query.id "
                >{{Project.description}}</span>
              </div>
            </div>
            <div class="py-10 px-5 text-gray-600 w-full">
              <div v-if="edit===1" v-for="Project in articleArray">
                <textarea
                  name
                  id
                  cols="30"
                  rows="10"
                  class="w-full border-light-gray border border-solid p-3"
                  v-if="Project.project_id == $route.query.id "
                  @change="changedescription"
                >{{Project.description}}</textarea>
              </div>

              <div class="mt-5 flex justify-end" v-if="edit===1">
                <button class="btn pill-button--ideeza px-5 py-1" @click="saveDescription">Save</button>
              </div>
            </div>
            <div class="mx-3 mb-3">
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
            </div>
            <hr>
            <div class="p-3">
            <input type="text" placeholder="Write your comment..." class="px-3 py-6 bg-gray-200 text-gray-700 w-full">
            </div>
          </div>
          </template>
        </div>

        <!--Right Sidebar-->
        <RightSideBar class="flex-grow md:w-1/3" />
      </div>
    </div>
    <ShareInternal v-if="internalShare" @close="closeShareInternal" />
    <ShareExternal v-if="externalShare" @close="closeShareExternal" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import LeftMenu from "~/components/user/common-left-side-menu.vue";
import RightSideBar from "~/components/user/projects/right-bar.vue";
import ShareInternal from "~/components/share/share-internal.vue";
import ShareExternal from "~/components/share/share-external.vue";
import CustomizeIcon from "~/components/partials/icons/customize-icon.vue";

import Projects from "~/data/UserProjectApi.json";

import apiService from "~/apiService/have_token.js";
import apiService2 from "~/apiService/have_data.js";
import Electronics from '~/components/user/pro/pro-electronics.vue'
import Cover from '~/components/user/pro/pro-cover.vue'

export default {
  middleware: "auth",
  layout: "user",
  name: "building-index",
  components: {
    LeftMenu,
    RightSideBar,
    ShareInternal,
    ShareExternal,
    CustomizeIcon,
    Electronics,
    Cover
  },
  data: function() {
    return {
      Projects: Projects.firstproject,
      edit: 0,
      mainDropDownActive: false,
      description: " ",
      currentMenu: {},
      storeCurrentMenu: null,
      menuChildren: null,
      searchVal: null,
      focus: null,
      internalShare: false,
      externalShare: false,
      geturl: "/api/project/get_all",
      geturl2: "/api/project/update_description",
      articleArray: [],
      randomNumber: {},
      project_img_url:process.env.project_image_url,
      tab: 'code',
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
  created: function() {},
  mounted() {
    window.$nuxt.$cookies.set("userprojectid", this.$route.query.id);

    let sendData = {
      method: "get",
      url: this.geturl,
      data: null
    };

    apiService(sendData, response => {
      console.log(response.data);
      this.randomNumber = response.data;
      this.articleArray = Object.values(response.data.data);
    });
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  methods: {
    EditTextarea1() {
      this.edit = 1;
      for (const [key, value] of Object.entries(this.Projects)) {
        console.log(key, value.id);
        if (this.$route.query.id == value.id) {
          this.description = value.Description;
          console.log("id_:", value.id);
        }
      }
    },
    onClickOutside(event, el) {
      this.focus = false;
    },
    changedescription(e){
      this.description = e.target.value;
    },
    saveDescription(e) {
      console.log("change description:",this.description);
        console.log("change idid description:",this.$route.query.id);

        let rouu = this.$route.query.id
        // let description = e.target.value;

        const formData = new FormData();
      formData.set("projectid", rouu);
      formData.set("description", this.description);
      let sendData = {
        method: "post",
        url: this.geturl2,
        data: formData
      };
      apiService(sendData, response => {
        console.log(response);

        this.articleArray.map(item=>{
            if(item.project_id == this.$route.query.id)
              {
                item.description = this.description
              }
          })

      });
      
         this.edit = 0;

      // if (this.description === "") {
      //   this.$notify({
      //     group: "error",
      //     type: "error",
      //     text: "Please fill in the description"
      //   });
      // } else {
       
      //   // this.description = e.target.value;
        
      // }
    },
    closeShareInternal() {
      this.internalShare = false;
    },
    closeShareExternal() {
      this.externalShare = false;
    },
    showInternalShare() {
      this.focus = false;
      this.internalShare = true;
    },
    showExternalShare() {
      this.focus = false;
      this.externalShare = true;
    }
  }
};
</script>

<style scoped>
.detail-main {
  width: 100%;
  max-width: 1100px;
}

.panel-menu {
  @apply inline-block font-semibold text-gray-700 cursor-pointer;
}
.panel-menu.active {
  @apply text-ideeza;
}
.panel-menu:hover {
  @apply text-ideeza;
}
.panel-menu-icon {
  height: 11px;
  display: inline-block;
}
.tab.active {
  @apply text-ideeza;
}
@screen lg {
  .builder-panel {
    width: 100%;
    max-width: 1235px;
  }
}
</style>
