<template>
  <div class="w-full">
    <div class="my-2">
    <div
        class="flex w-fit-content bg-white justify-center border-light-gray items-center content-center mt-3 lg:mt-0"
      >
        <input
          placeholder="Search..."
          v-model="searchTerm"
          v-on:input="search"
          class="bg-white outline-none h-12 text-gray-800 pr-3 flex-1 pl-2 font-semibold"
        />
        <div class="h-12 relative w-10">
          <font-awesome-icon
            class="ml-1 h-4 text-ideeza absolute-center-h-v"
            :icon="['fas', 'search']"
          />
        </div>
        <!-- {{searchTerm}} -->
        <!-- <button>Search</button> -->
      </div>
      <div class="flex mt-5 mb-10 text-black">
        <div class="flex-1 flex items-center mr-2">
          <div class="font-semibold text-base mr-2">Browse by tag</div>
          <drop-down class="text-sm flex-1" :value="0" :data="['select a tag']" />
        </div>
        <div class="flex-1 flex items-center mr-2">
          <div class="font-semibold text-base mr-2">Sort by</div>
          <drop-down class="text-sm flex-1" :value="0" :data="['most viewed']" />
        </div>
        <div class="flex-1 flex items-center mr-2">
          <div class="font-semibold text-base mr-2">From</div>
          <drop-down class="text-sm flex-1" :value="0" :data="['Last week']" />
        </div>
      </div>
    </div>
    <div class="scroll-area" style="overflow-y: auto; height: 1000px;">
      <!-- <smooth-scrollbar :options="{alwaysShowTracks: true}"> -->
      <div class="sm:flex mx-auto mb-10" v-for="feed in feeds">
        <img class="feed-owner-avatar rounded-full mr-5" :src="avatar_base_url + feed.avatar" alt />
        <div class="flex-grow bg-white py-5 shadow">
          <div class="text-gray-600 font-semibold text-lg mb-5 flex justify-between mx-5">
            <div>
              {{feed.name}}
              <span class="font-normal">add a new project</span>
              <span class="text-gray-800">Retro Headphones</span> •
              <span class="font-normal text-xs">3 weeks ago</span>
            </div>
            <div @click="onDetail">
              <font-awesome-icon
                class="mr-1 h-6 text-lg inline-block text-gray-500 hover:text-gray-600 cursor-pointer"
                :icon="['fas', 'ellipsis-h']"
              />
            </div>
          </div>

          <div class="px-5 my-5">
            <p>{{feed.description}}</p>
          </div>

          <nuxt-link :to="{ path: '/user/projects/detail', query: { id: feed.project_id}}" tag="div" class="bg-gray-200 mx-5 relative">
            <img class="w-full object-fit object-center" :src="project_image_url + feed.image" alt />
            <div class="absolute bottom-0 right-0 text-right px-3 py-3 text-md w-90">
              <div class="flex text-lg text-white text-sm">
                <div class="flex-1 flex items-center mr-2">
                  <div class="inline-block">
                    <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']" />
                  </div>
                  <div>211</div>
                </div>
                <div class="flex-1 flex items-center mr-2">
                  <img src="~/static/images/ideeza-play-icon.png" class="inline-block mr-2"> 
                  <div>76</div>
                </div>
                <div class="flex-1 items-center flex mr-2">
                  <img src="~/static/images/likeWhite.png" class="inline-block mr-2">
                  <div>35</div>
                </div>

              </div>
            </div>
          </nuxt-link>

          <div class="p-10 md:flex justify-between items-center">
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
              <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                <font-awesome-icon
                  class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-3"
                  :icon="['fas', 'comment-dots']"
                />COMMENT
              </div>
            </div>

            <div class="flex items-center font-semibold">
              <div
                class="mr-6 text-ideeza cursor-pointer"
                @click="onShowComments(feed.comments)"
              >{{feed.comment_count}} comments</div>
              <div
                class="mr-6 cursor-pointer"
                @click="onShowShare(feed.shared_by)"
              >{{feed.share_count}} share</div>
            </div>
          </div>

          <div
            class="text-gray-600 text-lg border-t border-b border-solid border-gray-300 py-5 px-5"
          >
            <span class="font-semibold">You</span> and
            <span class="font-semibold">{{feed.like_count}} others</span> like this
          </div>

          <!--Comments-->
          <div class="border-b border-solid border-gray-300 py-5 px-5">
            <div class="flex w-full mb-10" v-for="comment in feed.comments">
              <div class="w-16">
                <img
                  class="feed-comment-avatar rounded-full"
                  :src="avatar_base_url + comment.photo_url"
                  alt
                />
              </div>
              <div class="flex-grow bg-gray-200 rounded p-5">
                <div
                  class="flex justify-between relative cursor-pointer"
                  @click="comment.show_user_details=true;$forceUpdate()"
                  @mouseleave="comment.show_user_details=false;$forceUpdate()"
                >
                  <div>
                    <h2 class="mr-10 font-semibold">{{comment.name}}</h2>
                    <span class="text-xs font-hairline">{{comment.occupation}}</span>
                  </div>
                  <div>3 min ago.</div>
                  <div
                    class="user-tooltip top shadow-xl rounded-lg cursor-default"
                    v-show="comment.show_user_details==true"
                  >
                    <div class="flex p-3">
                      <div class="w-1/3 mr-2">
                        <img :src="avatar_base_url + comment.photo_url" alt />
                      </div>
                      <div class="flex-1">
                        <h4 class="font-bold text-2xl mb-1">{{comment.name}}</h4>
                        <h5 class="font-bold text-base mb-1 text-ideeza-dark">{{comment.occupation}}</h5>
                        <div class="text-gray-400">
                          <font-awesome-icon :icon="['fas', 'map-marker-alt']" />New york, NY
                        </div>
                      </div>
                    </div>
                    <div class="p-3 flex bg-gray-100">
                      <button class="w-1/2 block border border-600 mr-2">
                        <font-awesome-icon :icon="['fas', 'link']" />Connect
                      </button>
                      <nuxt-link
                        to="/user/messages"
                        class="w-1/2 block flex-1 items-center border border-600"
                      >
                        <button class="block flex-1 border border-600">
                          <font-awesome-icon :icon="['fas', 'envelope']" />Message
                        </button>
                      </nuxt-link>
                    </div>
                  </div>
                  <font-awesome-icon
                    class="text-gray-100 cursor-default user-tooltip-caret top"
                    :icon="['fas', 'caret-down']"
                    v-show="comment.show_user_details==true"
                  />
                </div>
                <p class="text-xs my-5">{{comment.comments_content}}</p>
                <div class="flex items-center">
                  <div
                    class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5"
                    @click="comment.like++"
                  >
                    <font-awesome-icon
                      class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-1"
                      :icon="['fas', 'thumbs-up']"
                    />
                    {{comment.like}}
                  </div>
                  <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                    <font-awesome-icon
                      class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-1"
                      :icon="['fas', 'comment-dots']"
                    />
                    {{comment.comments}}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Write Comments-->
          <div class="mt-10 mx-5 bg-gray-200 p-10">
            <input
              class="bg-gray-200 text-gray-600 text-semibold text-lg outline-none"
              placeholder="Write your comment..."
            />
          </div>
        </div>
      </div>
      <!-- </smooth-scrollbar> -->
    </div>
    <modal wide v-if="share==true" @close="share=false">
      <template slot="header">
        <div class="flex justify-between pl-10 pr-5 items-center">
          <h4 class="flex-1 text-lg font-semibold text-ideeza-black">SharedBy</h4>
          <div class="text-right py-3 px-3">
            <button @click="share=false">
              <font-awesome-icon class="text-xs text-black mt-2 mr-2" :icon="['fa', 'times']" />
            </button>
          </div>
        </div>
      </template>
      <template slot="body">
        <div class="m-10" v-for="user in shared_by">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <div class="mr-2">
                <img class="avatar" :src="user.photo_url" alt />
              </div>
              <div>
                <span class="block font-semibold text-sm">{{user.name}}</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </modal>
    <modal wide v-if="showComments==true" @close="showComments=false">
      <template slot="header">
        <div class="text-right py-3 px-3">
          <button @click="showComments=false">
            <font-awesome-icon class="text-xs text-black mt-2 mr-2" :icon="['fa', 'times']" />
          </button>
        </div>
      </template>
      <template slot="body">
        <div class="px-10 flex w-full mb-10" v-for="comment in comments">
          <div class="w-16">
            <img class="feed-comment-avatar rounded-full" :src="comment.photo_url" alt />
          </div>
          <div class="flex-grow bg-gray-200 rounded p-5">
            <div class="flex justify-between">
              <div>
                <h2 class="mr-10 font-semibold">{{comment.name}}</h2>
                <span class="text-xs font-hairline">{{comment.occupation}}</span>
              </div>
              <div>3 min ago.</div>
            </div>
            <p class="text-xs my-5">{{comment.comments_content}}</p>
            <div class="flex items-center">
              <div
                class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5"
                @click="onCommentLike"
              >
                <font-awesome-icon
                  class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-1"
                  :icon="['fas', 'thumbs-up']"
                />
                {{comment.likes}}
              </div>
              <div
                class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5"
                @click="onCommentComment"
              >
                <font-awesome-icon
                  class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-1"
                  :icon="['fas', 'comment-dots']"
                />
                {{comment.comments}}
              </div>
            </div>
          </div>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from "~/components/reusables/Modal.vue";
import apiServiceWithToken from "~/apiService/have_token.js";
import dropDown from "~/components/form/dropdown-field";
export default {
  name: "feeds",
  components: {
    Modal,
    dropDown
  },
  data: function() {
    return {
      feeds: [],
      share: false,
      showComments: false,
      shared_by: [],
      comments: [],
      avatar_base_url: process.env.avatar_base_url,
      project_image_url: process.env.project_image_url
    };
  },
  mounted() {
    let getallfeedsurl = "/api/user/get_feed";
    let getallfeedsData = {
      method: "get",
      url: getallfeedsurl,
      data: null
    };

    apiServiceWithToken(getallfeedsData, response => {
      if (response.data["success"] == true) {
        this.feeds = response.data["data"];
        console.log("feeds: ", this.feeds);
      }
    });
  },
  methods: {
    onDetail() {
      alert();
    },
    onLike() {
      alert();
    },
    onShare() {
      this.$emit("share");
    },
    onCommentLike() {
      alert();
    },
    onShowComments(comments) {
      this.showComments = true;
      this.comments = comments;
    },
    onShowShare(shared_by) {
      this.share = true;
      this.shared_by = shared_by;
    }
  }
};
</script>

<style scoped>
.feed-comment-avatar {
  width: 48px;
}

.feed-owner-avatar {
  width: 64px;
  height: 64px;
}

.pink-scroll {
  width: 100%;
  height: 700px;
  overflow-x: hidden;
}

.pink-scroll::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

.pink-scroll::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}

.pink-scroll::-webkit-scrollbar-thumb {
  background-color: #ff09d0;
  border: 2px solid #ff09d0;
}

.avatar {
  @apply rounded-full;
  width: 45px;
  height: 45px;
}
.scroll-area::-webkit-scrollbar {
    width: 20px;;
}

.scroll-area::-webkit-scrollbar-track {
    background: #8E6E87;
    border-left: 9px solid white;
    border-right: 9px solid white;
}
.scroll-area::-webkit-scrollbar-thumb {
    background: #8E6E87;
    border-left: 8px solid white;
    border-right: 8px solid white;
}
</style>
