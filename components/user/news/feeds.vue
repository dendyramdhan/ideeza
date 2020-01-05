<template>
  <div class="w-full">
    <div class="scroll-area">
      <smooth-scrollbar :options="{alwaysShowTracks: true}">
        <div class="flex mx-auto mb-10" v-for="feed in feeds">
          <img class="feed-owner-avatar rounded-full mr-5" :src="feed.potrait_url" alt />
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

            <div class="bg-gray-200 mx-5">
              <img class="w-full object-fit object-center" :src="feed.image_url" alt />
            </div>

            <div class="p-10 flex justify-between items-center">
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
                <div
                  class="mr-6 text-ideeza cursor-pointer"
                  @click="onShowComments"
                >{{feed.comments_count}} comments</div>
                <div class="mr-6 cursor-pointer" @click="onShowShare">{{feed.share_count}} share</div>
              </div>
            </div>

            <div
              class="text-gray-600 text-lg border-t border-b border-solid border-gray-300 py-5 px-5"
            >
              <span class="font-semibold">You</span> and
              <span class="font-semibold">{{feed.likes_count}} others</span> like this
            </div>

            <!--Comments-->
            <div class="border-b border-solid border-gray-300 py-5 px-5">
              <div class="flex w-full mb-10" v-for="comment in feed.comments">
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
      </smooth-scrollbar>
    </div>
  </div>
</template>

<script>
import feeds from "~/json/feeds.json";
export default {
  name: "feeds",
  data: function() {
    console.log("feeds: ", feeds.feeds);
    return {
      feeds: feeds.feeds
    };
  },
  methods: {
    onDetail() {
      alert();
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
    onCommentLike() {
      alert();
    },
    onCommentComment() {
      alert();
    },
    onShowComments() {
      alert();
    },
    onShowShare() {
      alert();
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
.scroll-area {
  width: 100%;
  height: 700px;
}
</style>
