<template>
    <div class="w-full">
      <div class="scroll-area">
        <smooth-scrollbar :options="{alwaysShowTracks: true}">
          <div class="flex mx-auto mb-10 ">
            <img class="feed-owner-avatar rounded-full mr-5" src="https://randomuser.me/api/portraits/women/14.jpg" alt="">
            <div class="flex-grow bg-white p-5 shadow">
              <div class="text-gray-600 font-semibold text-lg mb-5 flex justify-between mx-5">
                <div>Sarah Doe <span class="font-normal"> Loves a project</span></div>
                <div class="relative">
                  <font-awesome-icon class="mr-1 h-6 text-lg inline-block text-gray-500 hover:text-gray-600 cursor-pointer" :icon="['fas', 'ellipsis-h']"/>
                </div>
              </div>
              <div class="my-5">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                </p>
              </div>
              <div class="bg-gray-200">
                <img class="w-full object-fit object-center" src="~/static/images/car-big.png" alt="">
              </div>
              <div class="mt-10 flex justify-between items-center">
                <div class="flex items-center">
                  <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                    <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-3" :icon="['fas', 'thumbs-up']"/> LIKE
                  </div>
                  <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                    <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-3" :icon="['fas', 'share-alt']"/> SHARE
                  </div>
                  <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                    <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-3" :icon="['fas', 'comment-dots']"/> COMMENT
                  </div>
                </div>

                <div class="flex items-center font-semibold">
                  <div class="mr-6 text-ideeza">26 comments</div>
                  <div class="mr-6">3 share</div>
                </div>


              </div>
            </div>
          </div>
          <div class="flex mx-auto mb-10">
            <img class="feed-owner-avatar rounded-full mr-5" src="https://randomuser.me/api/portraits/men/14.jpg" alt="">
            <div class="flex-grow bg-white py-5 shadow">
              <div class="text-gray-600 font-semibold text-lg mb-5 flex justify-between mx-5">
                <div>Sarah Doe <span class="font-normal">add a new project</span> <span class="text-gray-800">Retro Headphones</span> • <span class="font-normal text-xs">3 weeks ago</span></div>
                <div>
                  <font-awesome-icon class="mr-1 h-6 text-lg inline-block text-gray-500 hover:text-gray-600 cursor-pointer" :icon="['fas', 'ellipsis-h']"/>
                </div>

              </div>

              <div class="px-5 my-5">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                </p>
              </div>

              <div class="bg-gray-200 mx-5">
                <img class="w-full object-fit object-center" src="~/static/images/headphone-big.png" alt="">
              </div>

              <div class="p-10 flex justify-between items-center">
                <div class="flex items-center">
                  <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                    <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-3" :icon="['fas', 'thumbs-up']"/> LIKE
                  </div>
                  <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                    <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-3" :icon="['fas', 'share-alt']"/> SHARE
                  </div>
                  <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                    <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-3" :icon="['fas', 'comment-dots']"/> COMMENT
                  </div>
                </div>

                <div class="flex items-center font-semibold">
                  <div class="mr-6 text-ideeza">26 comments</div>
                  <div class="mr-6">3 share</div>
                </div>


              </div>

              <div class="text-gray-600 text-lg border-t border-b border-solid border-gray-300 py-5 px-5">
                <span class="font-semibold">You</span> and <span class="font-semibold">35 others</span> like this
              </div>

              <!--Comments-->
              <div class="border-b border-solid border-gray-300 py-5 px-5">
                <div class="flex w-full mb-10">
                  <div class="w-16">
                    <img class="feed-comment-avatar rounded-full" src="https://randomuser.me/api/portraits/men/15.jpg" alt="">
                  </div>
                  <div class="flex-grow bg-gray-200 rounded p-5" >
                    <div class="flex justify-between">
                      <div>
                        <h2 class="mr-10 font-semibold">William Doe</h2>
                        <span class="text-xs font-hairline">Consultant at Google Inc.</span>
                      </div>
                      <div>3 min ago.</div>
                    </div>
                    <p class="text-xs my-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus libero at odio vestibulum, at blandit justo sagittis. Vestibulum eget dui massa.
                    </p>
                    <div class="flex items-center">
                      <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                        <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-1" :icon="['fas', 'thumbs-up']"/> 90
                      </div>
                      <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                        <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-1" :icon="['fas', 'comment-dots']"/> 90
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex w-full pl-16 mb-10">
                  <div class="w-16">
                    <img class="feed-comment-avatar rounded-full" src="https://randomuser.me/api/portraits/men/15.jpg" alt="">
                  </div>
                  <div class="flex-grow bg-gray-200 rounded p-5" >
                    <div class="flex justify-between">
                      <div>
                        <h2 class="mr-10 font-semibold">William Doe</h2>
                        <span class="text-xs font-hairline">Consultant at Google Inc.</span>
                      </div>
                      <div>3 min ago.</div>
                    </div>
                    <p class="text-xs my-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus libero at odio vestibulum, at blandit justo sagittis. Vestibulum eget dui massa.
                    </p>
                    <div class="flex items-center">
                      <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                        <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-1" :icon="['fas', 'thumbs-up']"/> 90
                      </div>
                      <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                        <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-1" :icon="['fas', 'comment-dots']"/> 90
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex w-full mb-10">
                  <div class="w-16">
                    <img class="feed-comment-avatar rounded-full" src="https://randomuser.me/api/portraits/men/15.jpg" alt="">
                  </div>
                  <div class="flex-grow bg-gray-200 rounded p-5" >
                    <div class="flex justify-between">
                      <div>
                        <h2 class="mr-10 font-semibold">William Doe</h2>
                        <span class="text-xs font-hairline">Consultant at Google Inc.</span>
                      </div>
                      <div>3 min ago.</div>
                    </div>
                    <p class="text-xs my-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus libero at odio vestibulum, at blandit justo sagittis. Vestibulum eget dui massa.
                    </p>
                    <div class="flex items-center">
                      <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                        <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-1" :icon="['fas', 'thumbs-up']"/> 90
                      </div>
                      <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                        <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-1" :icon="['fas', 'comment-dots']"/> 90
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex w-full mb-10">
                  <div class="w-16">
                    <img class="feed-comment-avatar rounded-full" src="https://randomuser.me/api/portraits/men/15.jpg" alt="">
                  </div>
                  <div class="flex-grow bg-gray-200 rounded p-5" >
                    <div class="flex justify-between">
                      <div>
                        <h2 class="mr-10 font-semibold">William Doe</h2>
                        <span class="text-xs font-hairline">Consultant at Google Inc.</span>
                      </div>
                      <div>3 min ago.</div>
                    </div>
                    <p class="text-xs my-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus libero at odio vestibulum, at blandit justo sagittis. Vestibulum eget dui massa.
                    </p>
                    <div class="flex items-center">
                      <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                        <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-1" :icon="['fas', 'thumbs-up']"/> 90
                      </div>
                      <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                        <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-1" :icon="['fas', 'comment-dots']"/> 90
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <!--Write Comments-->
              <div class="mt-10 mx-5 bg-gray-200 p-10">
                <input class="bg-gray-200 text-gray-600 text-semibold text-lg outline-none" placeholder="Write your comment...">
              </div>

            </div>
          </div>
        </smooth-scrollbar>
      </div>
    </div>
</template>

<script>
    export default {
        name: "feeds"
    }
</script>

<style scoped>
  .feed-comment-avatar{
    width: 48px;
  }
  .feed-owner-avatar{
    width: 64px;
    height: 64px;
  }
  .scroll-area{
    width: 100%;
    height: 700px;
  }
</style>
