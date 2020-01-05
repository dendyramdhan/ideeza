<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex builder-panel main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />
    <!-- Main Contents -->
    <div class="flex-grow lg:p-10">
      <div class="lg:flex p-2 lg:p-5 xl:p-20 bg-white shadow-md">
        <div class="left-panel">
          <img class="w-full" :src="contactinfos.potrait_url" alt />

          <div class="mt-10 mb-5 semi-border relative">
            <span class="font-semibold text-gray-500 pr-3 bg-white">SOCIAL MEDIA</span>
          </div>
          <div class>
            <font-awesome-icon
              class="mr-2 h-6 text-gray-500 text-4xl hover:text-gray-800 cursor-pointer"
              :icon="['fab', 'facebook-square']"
            />
            <font-awesome-icon
              class="mr-2 h-6 text-gray-500 text-4xl hover:text-gray-800 cursor-pointer"
              :icon="['fab', 'linkedin']"
            />
            <font-awesome-icon
              class="mr-2 h-6 text-gray-500 text-4xl hover:text-gray-800 cursor-pointer"
              :icon="['fab', 'behance-square']"
            />
            <font-awesome-icon
              class="mr-2 h-6 text-gray-500 text-4xl hover:text-gray-800 cursor-pointer"
              :icon="['fab', 'dribbble-square']"
            />
          </div>

          <div class="mt-10 mb-5 semi-border relative">
            <span class="font-semibold text-gray-500 pr-3 bg-white">SKILLS</span>
          </div>
          <div class="mt-10">
            <span class="font-semibold text-ideeza-dark block text-lg">Product Design</span>
            <span class="font-semibold text-ideeza-dark block text-lg">Electronics</span>
            <span class="font-semibold text-ideeza-dark block text-lg">3D Modeling</span>
            <span class="font-semibold text-ideeza-dark block text-lg">Prototyping</span>
            <span class="font-semibold text-ideeza-dark block text-lg">3D Max</span>
            <span class="font-semibold text-ideeza-dark block text-lg">AutoCad</span>
          </div>
        </div>
        <div class="lg:ml-16 flex-grow">
          <div class="w-full flex justify-between items-top">
            <div class="lg:flex items-top">
              <div class="text-3xl font-semibold leading-none">
                {{contactinfos.contact.name}}
                <span
                  class="block font-normal text-base text-ideeza-dark mt-3"
                >{{contactinfos.contact.occupation}}</span>
              </div>
              <div class="lg:ml-10 text-gray-500">
                <font-awesome-icon class="mr-1 h-6 align-middle" :icon="['fas', 'map-marker-alt']" />
                {{contactinfos.contact.location}}
              </div>
            </div>
            <nuxt-link to="/user/settings/notifications">
              <font-awesome-icon
                class="mr-1 h-4 text-sm inline-block cursor-pointer"
                :icon="['fas', 'cog']"
              />
            </nuxt-link>
          </div>
          <div class="lg:mt-10">
            <span class="text-gray-500 block">RATINGS</span>
            <div class="flex items-center">
              <span class="text-gray-800 font-semibold text-xl">{{contactinfos.contact.rating}}</span>
              <img class="rating-star" src="~/static/images/star.png" alt />
              <img class="rating-star" src="~/static/images/star.png" alt />
              <img class="rating-star" src="~/static/images/star.png" alt />
              <img class="rating-star" src="~/static/images/star.png" alt />
              <img class="rating-star" src="~/static/images/star-gray.png" alt />
            </div>
          </div>

          <!--Tabs-->
          <div class="tabs-container z-10 relative flex lg:mt-20">
            <div
              @click="tabItem='about'"
              class="tab-item"
              :class="{active: tabItem === 'about', 'border-bot': tabItem !== 'about'}"
            >
              <font-awesome-icon class="mr-3 h-5" :icon="['fas', 'user']" />About
            </div>
            <div
              @click="tabItem='projects'"
              class="tab-item"
              :class="{active: tabItem === 'projects', 'border-bot': tabItem !== 'projects'}"
            >
              <font-awesome-icon class="mr-3 h-5" :icon="['fas', 'lightbulb']" />Projects
            </div>
            <div
              @click="tabItem='timeline'"
              class="tab-item"
              :class="{active: tabItem === 'timeline', 'border-bot': tabItem !== 'timeline'}"
            >
              <font-awesome-icon class="mr-3 h-5" :icon="['fas', 'eye']" />Shared Projects
            </div>

            <div
              @click="tabItem='reviews'"
              class="tab-item"
              :class="{active: tabItem === 'reviews', 'border-bot': tabItem !== 'reviews'}"
            >
              <font-awesome-icon class="mr-3 h-5" :icon="['fas', 'star']" />Reviews
            </div>
          </div>
          <!--Time line-->
          <div v-if="tabItem === 'timeline'" class="mt-5">
            <!--New Feed-->

            <div class="flex mb-10" v-for="sharedproject in contactinfos.shared_project">
              <div class="flex-grow bg-white p-5 shadow">
                <div class="text-gray-600 font-semibold text-lg mb-5 flex justify-between mx-5">
                  <div>
                    {{contactinfos.contact.name}}
                    <span class="font-normal">add a new project</span>
                    <span class="text-gray-800">Retro Headphones</span> •
                    <span class="font-normal text-xs">3 weeks ago</span>
                  </div>
                  <div>
                    <font-awesome-icon
                      class="mr-1 h-6 text-lg inline-block text-gray-500 hover:text-gray-600 cursor-pointer"
                      :icon="['fas', 'ellipsis-h']"
                    />
                  </div>
                </div>
                <div class="bg-gray-200">
                  <img class="w-full object-fit object-center" :src="sharedproject.image_url" alt />
                </div>
                <div class="mt-10 flex justify-between items-center">
                  <div class="flex items-center">
                    <div
                      class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5"
                      @click="onLike"
                    >
                      <font-awesome-icon
                        class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-3"
                        :icon="['fas', 'thumbs-up']"
                      />LIKE
                    </div>
                    <div
                      class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5"
                      @click="onShare"
                    >
                      <font-awesome-icon
                        class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-3"
                        :icon="['fas', 'share-alt']"
                      />SHARE
                    </div>
                    <div
                      class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5"
                      @click="onComment"
                    >
                      <font-awesome-icon
                        class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-3"
                        :icon="['fas', 'comment-dots']"
                      />COMMENT
                    </div>
                  </div>

                  <div class="flex items-center font-semibold">
                    <div class="mr-6 text-ideeza">{{sharedproject.comments_count}} comments</div>
                    <div class="mr-6">{{sharedproject.share_count}} share</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--About-->
          <div class="mt-5" v-if="tabItem === 'about'">
            <div class="flex justify-between items-center">
              <h1 class="text-gray-500 font-semibold txt-xl my-10">CONTACT INFORMATION</h1>
              <nuxt-link to="/user/settings/general">
                <button class="btn btn-normal btn-small px-2">Edit profile</button>
              </nuxt-link>
            </div>

            <div class="flex mb-5 font-semibold text-lg">
              <div class="heading-contact">Phone:</div>
              <div class="text-ideeza-dark">{{contactinfos.contact.phone}}</div>
            </div>
            <div class="flex mb-5 font-semibold text-lg">
              <div class="heading-contact">Address:</div>
              <div class>{{contactinfos.contact.address}}</div>
            </div>
            <div class="flex mb-5 font-semibold text-lg">
              <div class="heading-contact">Email:</div>
              <div class="text-ideeza-dark">{{contactinfos.contact.email}}</div>
            </div>
            <div class="flex mb-5 font-semibold text-lg">
              <div class="heading-contact">Website:</div>
              <div class="text-ideeza-dark">{{contactinfos.contact.website}}</div>
            </div>

            <h1 class="text-gray-500 font-semibold txt-xl my-10">BASIC INFORMATION</h1>
            <div class="flex mb-5 font-semibold text-lg">
              <div class="heading-contact">Birthday:</div>
              <div class>{{contactinfos.contact.birthday}}</div>
            </div>
            <div class="flex mb-5 font-semibold text-lg">
              <div class="heading-contact">Gender:</div>
              <div class>{{contactinfos.contact.gender}}</div>
            </div>
          </div>

          <!--Projects-->
          <div class="mt-5 flex flex-wrap" v-if="tabItem === 'projects'">
            <img
              class="project-image"
              v-for="project in contactinfos.projects"
              :src="project.pimage_url"
              alt
            />
          </div>

          <!--Reviews-->
          <div class="mt-5" v-if="tabItem === 'reviews'">
            <div class="mb-10 mt-5" v-for="review in contactinfos.reviews">
              <div class="flex justify-between items-center w-full">
                <div class="flex items-center">
                  <img class="feed-avatar w-16 rounded-full mr-5" :src="review.potrait_url" alt />
                  <div class>
                    <span class="font-semibold text-ideeza-dark inline-block mr-5">{{review.name}}</span>
                    <span class="font-sm text-gray-500">Reviewed {{review.date_ago}} days ago</span>
                  </div>
                </div>
                <div
                  class="flex items-center text-gray-500 text-sm hover:text-gray-800 cursor-pointer"
                @click="onReport">
                  <font-awesome-icon class="mr-2 h-4" :icon="['fas', 'flag']" />Report
                </div>
              </div>
              <div class="mt-5 border rounded-lg border-solid border-gray-500 p-5 text-sm">
                <div class="flex justify-between">
                  <div class="text-lg font-semibold">"{{review.review_title}}"</div>
                  <div>
                    <img class="rating-star" src="~/static/images/star.png" alt />
                    <img class="rating-star" src="~/static/images/star.png" alt />
                    <img class="rating-star" src="~/static/images/star.png" alt />
                    <img class="rating-star" src="~/static/images/star.png" alt />
                    <img class="rating-star" src="~/static/images/star.png" alt />
                  </div>
                </div>
                <p class="font-sm my-5">{{review.review_description}}</p>
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
import contactinfos from "~/json/contactinfos";
export default {
  layout: "user",
  name: "profile-index",
  components: {
    LeftMenu
  },
  data: function() {
    return {
      tabItem: "timeline",
      focusMore: false,
      showComments: false,
      contactinfos: contactinfos.contactinfos
    };
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  methods: {
    onClickOutside() {
      this.focusMore = false;
    },
    onLike() {
      alert();
    },
    onShare() {
      alert();
    },
    onComment() {
      alert();
    },
    onReport() {
      alert();
    }
  }
};
</script>

<style scoped>
.profile-panel {
  width: 100%;
  max-width: 1533px;
}
.left-panel {
  width: 100%;
}
.semi-border {
  @apply z-10;
}

.semi-border:before {
  @apply border-t-4 border-solid border-gray-200;
  content: "";
  margin: 0 auto; /* this centers the line to the full width specified */
  position: absolute; /* positioning must be absolute here, and relative positioning must be applied to the parent */
  left: 0;
  right: 0;
  bottom: 4px;
  z-index: -1;
}
.rating-star {
  @apply inline ml-3;
  width: 20px;
  height: 20px;
}
.tab-item {
  @apply cursor-pointer z-50 bg-white px-5 py-5 font-semibold text-xl text-gray-500 flex items-center;
}
.tab-item.border-bot {
  border-bottom: 4px solid #edf2f7;
}
.tab-item.active {
  @apply border-t-4 border-l-4 border-r-4 border-solid border-gray-200 text-ideeza;
}
.tabs-container:before {
  @apply border-t-4 border-solid border-gray-200;
  content: "";
  margin: 0 auto; /* this centers the line to the full width specified */
  position: absolute; /* positioning must be absolute here, and relative positioning must be applied to the parent */
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
.heading-contact {
  width: 150px;
}
.project-image {
  @apply mr-2 mb-2;
  max-width: 285px;
}
.feed-comment-avatar {
  width: 48px;
}
@screen lg {
  .left-panel {
    max-width: 366px;
  }
}
</style>
