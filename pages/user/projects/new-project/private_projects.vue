<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />
    <!-- Main Contents -->
    <div class="flex-grow ">
      <div class="main-contents">
        <h2 class="text-2xl text-gray-900 font-bold pl-4">My private projects</h2>
        <div class="flex w-full border-b pb-5 mt-5">
          <div class="w-4/12 p-4">
            <div class="border p-4">
              <div class="porject-thum-img"><img src="~/static/images/project-1.png"></div>
              <div class="flex pt-3">
                <div class=" text-lg text-gray-800">My Car</div>
              </div>
            </div>
          </div>

          <div class="w-4/12 p-4">
            <div class="border p-4">
              <div class="porject-thum-img"><img src="~/static/images/project-1.png"></div>
              <div class="flex pt-3">
                <div class=" text-lg text-gray-800">My Car</div>
              </div>
            </div>
          </div>

          <div class="w-4/12 p-4">
            <div class="border p-4">
              <div class="porject-thum-img"><img src="~/static/images/project-1.png"></div>
              <div class="flex pt-3">
                <div class=" text-lg text-gray-800">My Car</div>
                
              </div>
            </div>
          </div>

        </div>
        <h2 class="text-2xl text-gray-900 font-bold pl-4 mt-5">My public projects</h2>

        <div class="flex w-full border-b pb-5 mt-5">
          
          <div class="w-4/12 p-4">
            <div class="border p-4">
              <div class="porject-thum-img relative">
                <img src="~/static/images/project-1.png">
                <div class="absolute bottom-0 right-0 text-right px-3 py-3 text-md">
                  <div class="flex text-lg text-white ">
                    <div class="flex-1 w-32">
                      <div class="inline-block"><font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']" /></div> 211
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
          </div>

          <div class="w-4/12 p-4">
            <div class="border p-4">
              <div class="porject-thum-img relative">
                <img src="~/static/images/project-1.png">
                <div class="absolute bottom-0 right-0 text-right px-3 py-3 text-md">
                  <div class="flex text-lg text-white ">
                    <div class="flex-1 w-32">
                      <div class="inline-block"><font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']" /></div> 211
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
          </div>

          <div class="w-4/12 p-4">
            <div class="border p-4">
              <div class="porject-thum-img relative">
                <img src="~/static/images/project-1.png">
                <div class="absolute bottom-0 right-0 text-right px-3 py-3 text-md">
                  <div class="flex text-lg text-white ">
                    <div class="flex-1 w-32">
                      <div class="inline-block"><font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']" /></div> 211
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
          </div>

        </div>
        <h2 class="text-2xl text-gray-900 font-bold pl-4 mt-5">Projects I contribute to</h2>
        <div class="flex w-full border-b pb-5 mt-5">
          
          <div class="w-4/12 p-4">
            <div class="border p-4">
              <div class="porject-thum-img relative">
                <img src="~/static/images/project-1.png">
                <div class="absolute bottom-0 right-0 text-right px-3 py-3 text-md">
                  <div class="flex text-lg text-white ">
                    <div class="flex-1 w-32">
                      <div class="inline-block"><font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']" /></div> 211
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
          </div>

          <div class="w-4/12 p-4">
            <div class="border p-4">
              <div class="porject-thum-img relative">
                <img src="~/static/images/project-1.png">
                <div class="absolute bottom-0 right-0 text-right px-3 py-3 text-md">
                  <div class="flex text-lg text-white ">
                    <div class="flex-1 w-32">
                      <div class="inline-block"><font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']" /></div> 211
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
          </div>

          <div class="w-4/12 p-4">
            <div class="border p-4">
              <div class="porject-thum-img relative">
                <img src="~/static/images/project-1.png">
                <div class="absolute bottom-0 right-0 text-right px-3 py-3 text-md">
                  <div class="flex text-lg text-white ">
                    <div class="flex-1 w-32">
                      <div class="inline-block"><font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']" /></div> 211
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
          </div>

        </div>

         
        
      </div>
    </div>
   


  </div>
</template>

<script>
import LeftMenu from "~/components/user/common-left-side-menu.vue";
import RightSideBar from "~/components/user/projects/right-bar.vue";
import ShareInternal from "~/components/share/share-internal.vue";
import ShareExternal from "~/components/share/share-external.vue";
import CustomizeIcon from "~/components/partials/icons/customize-icon.vue";

import Projects from "~/data/UserProjectApi.json";
import axios from "axios";

export default {
  layout: "user",
  name: "building-index",
  components: {
    LeftMenu,
    RightSideBar,
    ShareInternal,
    ShareExternal,
    CustomizeIcon
  },
  data: function() {
    return {
      Projects: Projects.firstproject,
      tab: 0,
      mainDropDownActive: false,
      description: " ",
      currentMenu: {},
      storeCurrentMenu: null,
      menuChildren: null,
      searchVal: null,
      focus: null,

      internalShare: false,
      externalShare: false
    };
  },
  created: function() {
    axios.get("http://127.0.0.1:5000/api/getblog").then(response => {
      // console.log("response :", response.data)
      this.randomNumber = response.data;
      console.log(this.randomNumber);
    });
    console.log(this.randomNumber);
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  methods: {
    EditTextarea1() {
      this.tab = 1;
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
    saveDescription(e) {
      if (this.description === "") {
        this.$notify({
          group: "error",
          type: "error",
          text: "Please fill in the description"
        });
      } else {
        this.tab = 0;
        this.description=e.target.value;
        console.log(this.description);
      }
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
.porject-thum-img{
  width: 275px;
  height: 250px;
}
</style>
