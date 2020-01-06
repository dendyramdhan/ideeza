<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="main-contents">
        <h1 class="font-semibold lg:text-5xl">Good morning, Moran!</h1>

        <div class="mt-10 lg:flex welcome-container">
          <div class="lg:w-1/2 lg:h-full relative text-white">
            <img src="~/static/images/user-dash-main.png" class="object-center object-contain" alt />
            <div class="absolute top-0 left-0 w-full text-center flex flex-col items-center">
              <h1
                class="font-semibold lg:text-5xl mt-10 mb-5 text-white text-center w-full"
              >Let's get you started</h1>
              <span
                class="font-semibold block text-3xl mb-3 w-full text-center"
              >Now is your time to change the world.</span>
              <span
                class="font-semibold block text-3xl mb-10 w-full text-center"
              >Dream, invent, create.</span>

              <img
                @click="showMyIdeeza=true"
                class="cursor-pointer"
                src="~/static/images/float-ideeza.png"
                alt
              />
            </div>
          </div>
          <div class="lg:w-1/2 pl-10">
            <div class="flex justify-between items-center pb-5 border-b border-light-gray">
              <h2 class="font-semibold block text-3xl">Last Activity</h2>
              <button
                class="btn pill-button px-10 text-lg"
                @click="viewLastActivity"
              >View last activity</button>
            </div>

            <div class="flex justify-between">
              <nuxt-link to="/user/projects">
                <div class="status-button p-6">
                  <div class="flex items-center">
                    <font-awesome-icon
                      class="mr-6 h-10 text-2xl text-ideeza"
                      :icon="['fas', 'layer-group']"
                    />
                    <span
                      class="text-6xl text-ideeza-black mb-5 leading-none"
                    >{{activities.projectsmark}}</span>
                  </div>
                  <div class="pl-16">
                    <span class="text-ideeza-blue-gray text-lg block">Projects</span>
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link to="/user/profile">
                <div class="status-button p-6">
                  <div class="flex items-center">
                    <img class="mr-6" src="~/static/icons/users.svg" alt />
                    <span
                      class="text-6xl text-ideeza-black mb-5 leading-none"
                    >{{activities.contactsmark}}</span>
                  </div>
                  <div class="pl-16">
                    <span class="text-ideeza-blue-gray text-lg block">Contacts</span>
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link to="/user/dashboard">
                <div class="status-button p-6">
                  <div class="flex items-center">
                    <img class="mr-6" src="~/static/icons/bullseye.svg" alt />
                    <span
                      class="text-6xl text-ideeza-black mb-5 leading-none"
                    >{{activities.myscore}}</span>
                  </div>
                  <div class="pl-16">
                    <span class="text-ideeza-blue-gray text-lg block">My Score</span>
                  </div>
                </div>
              </nuxt-link>
            </div>

            <div>
              <div class="table relative mb-5" v-for="datas in activities.data">
                <div class="table-cell timeline-diaplay"></div>
                <div class="table-cell pl-5">
                  <div>{{datas.timestamp}}</div>
                  <div class="my-1">{{datas.title}}</div>
                  <div class="font-semibold">{{datas.description}}</div>
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
                  <div class="blog-container mr-2" v-for="innovation in innovations">
                    <nuxt-link to="">
                      <div class="blog-image-container mb-8">
                        <img :src="innovation.image_url" class="object-center object-contain" alt />
                      </div>
                    </nuxt-link>
                    <h3 class="font-semibold tex-2xl mb-2">{{innovation.title}}</h3>
                    <p>{{innovation.description}}</p>
                    <div class="flex justify-between items-center mt-5">
                      <small>{{innovation.date}}</small>
                      <button class="btn btn--ideeza px-4 py-2" @click="readMore">Read more</button>
                    </div>
                  </div>
                  <!-- <li v-for="breed in breeds" :key="breed">
                    <p class="breed button--green">{{breed}}</p>
                  </li>-->
                </div>
              </smooth-scrollbar>
            </div>
          </div>
          <div class="w-1/3">
            <h1 class="font-semibold lg:text-3xl my-5">Top projects</h1>
            <div class="scroll-area">
              <smooth-scrollbar :options="{alwaysShowTracks: true}">
                <div class="flex flex-wrap">
                  <div class="w-1/2 p-2" v-for="topproject in topprojects">
                    <div class="p-2 border border-solid border-light-gray">
                      <div class="w-full projects-image">
                        <img
                          :src="topproject.image_url"
                          class="object-contain object-center w-full"
                          alt
                        />
                        <div class="my-1 flex justify-between items-center">
                          <div class="flex items-center">
                            <font-awesome-icon
                              class="mr-1 h-4 text-ideeza-gold"
                              :icon="['fas', 'star']"
                            />
                            <small class="text-xs">{{topproject.mark}}</small>
                          </div>

                          <span class="text-xs">{{topproject.like}} likes</span>
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
import LeftMenu from "~/components/user/common-left-side-menu.vue";
import MyIdeeza from "~/components/user/my-ideeza/new-ideeza.vue";
import axios from "axios";
import innovation from "~/json/innovation.json";
import topprojects from "~/json/topprojects.json";
import activity from "~/json/activity.json";

export default {
  // asyncData({ params }) {
  //   return axios.get(`https://dog.ceo/api/breeds/list`).then(res => {
  //     console.log("Here: ", res.data.message);
  //     return { breeds: res.data.message };
  //   });
  // },
  // asyncData({ params }, callback) {
  //   axios.get("https://dog.ceo/api/breeds/list").then(res => {
  //     callback(null, { breeds: res.data.message });
  //     console.log("Here: ", res.data.message);
  //   });
  // },

  layout: "user",
  name: "dashboard-index",
  components: {
    LeftMenu,
    MyIdeeza
  },
  data: function() {
    return {
      showMyIdeeza: false,
      topprojects: topprojects,
      innovations: innovation,
      activities: activity.activity
    };
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  mounted() {},
  methods: {
    onClickOutside() {
      this.showMyIdeeza = false;
    },
    showMyProjects() {
      alert("Hello");
    },
    showMyProfile() {},
    readMore() {
      alert("Read More");
    },
    viewLastActivity() {
      window.location.reload();
    }
  }
};
</script>

<style scoped>
.welcome-container {
  height: 455px;
}
.blog-image-container {
  width: 315px;
  height: 215px;
}
.projects-image {
  /*height: 170px;*/
}
.scroll-area {
  height: 430px;
}
.blog-container {
  @apply mr-2 mt-2;
  width: 320px;
  height: 420px;
}
.status-button {
  @apply p-3 m-3 border border-solid border-ideeza cursor-pointer rounded;
}
/deep/ .scrollbar-thumb {
  @apply bg-ideeza opacity-75;
}
</style>
