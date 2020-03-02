<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />
    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="main-contents p-5">
        <div class="bg-white shadow p-5 border border-ideeza rounded relative">
          <div class="absolute right-0 top-0">
            <button>
              <font-awesome-icon class="text-3xl mt-2 ml-1 mt-4 mr-4 text-gray-300" :icon="['fas', 'cog']" /></button>
          </div>
          <div class="">
            <h2 class="text-ideeza text-2xl">Projects</h2>
            <div class="flex mt-5">
              <button class="text-purple-900 font-bold mr-2">Delete</button>
              <button class="text-purple-900 font-bold mr-2">Print</button>
              <button class="text-purple-900 font-bold mr-2">Export</button>
            </div>
          </div>
          <table class="text-left w-full border-collapse simple-table mt-5">
            <thead class="bg-white text-ideeza-dark">
              <tr class="mb-4">
                <th class="p-4 border-t border-b border-blue-300">
                  <input type="checkbox" id="ad" />
                  <label for="ad">User name</label>
                  <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']" />
                </th>
                <th class="p-4 border-t border-b border-blue-300">
                  Project name
                  <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']" />
                </th>
                <th class="p-4 border-t border-b border-blue-300">
                  Service providers
                  <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']" />
                </th>
                <th class="p-4 border-t border-b border-blue-300">
                  Deadline
                  <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']" />
                </th>
                <th class="p-4 border-t border-b border-blue-300">
                  Completed
                  <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']" />
                </th>
                <th class="p-4 border-t border-b border-blue-300"></th>
                <th class="p-4 border-t border-b border-blue-300"></th>
              </tr>
            </thead>
            <tbody class="bg-grey-light overflow-y-auto text-ideeza-dark">
              <tr class="w-full mb-4">
                <td class="p-4 text-sm border-b">
                  <input type="checkbox" id="ad2" />
                  <label for="ad2"></label>
                  <div class="h-12 w-12 ml-3 inline-flex align-middle"><img class=" h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/men/20.jpg"></div>
                  <span class="inline-flex ml-2  align-middle">Michael Scott</span>
                </td>
                <td class="p-4 text-sm border-b">Porsche 219mm</td>
                <td class="p-4 text-sm border-b relative">
                  <img class="avatar" src="https://randomuser.me/api/portraits/men/26.jpg">
                  <img class="avatar" src="https://randomuser.me/api/portraits/men/25.jpg">
                  <img class="avatar" src="https://randomuser.me/api/portraits/men/24.jpg">
                  <img class="avatar" src="https://randomuser.me/api/portraits/men/23.jpg">
                  <img class="avatar" src="https://randomuser.me/api/portraits/men/22.jpg">
                  +30 </td>
                <td class="p-4 text-sm border-b">Dispute in progress</td>
                <td class="p-4 text-sm border-b">
                  <button class="border rounded border-gray-800 text-gray-800 py-3 px-8">Track order
                  </button>
                </td>
                <td class="p-4 text-sm border-b">
                  <font-awesome-icon class="text-2xl mt-2 ml-1 text-green-300" :icon="['fas', 'ellipsis-v']" />
                  <font-awesome-icon class="text-2xl mt-2 text-green-300" :icon="['fas', 'ellipsis-v']" />
                </td>
              </tr>
              <tr class="w-full mb-4">
                <td class="p-4 text-sm border-b">
                  <input type="checkbox" id="ad3" />
                  <label for="ad3"></label>
                  <div class="h-12 w-12 ml-3 inline-flex align-middle"><img class=" h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/men/20.jpg"></div>
                  <span class="inline-flex ml-2  align-middle">Michael Scott</span>
                </td>
                <td class="p-4 text-sm border-b">Porsche 219mm</td>
                <td class="p-4 text-sm border-b relative">
                  <img class="avatar" src="https://randomuser.me/api/portraits/men/26.jpg">
                  <img class="avatar" src="https://randomuser.me/api/portraits/men/25.jpg">
                  <img class="avatar" src="https://randomuser.me/api/portraits/men/24.jpg">
                  <img class="avatar" src="https://randomuser.me/api/portraits/men/23.jpg">
                  <img class="avatar" src="https://randomuser.me/api/portraits/men/22.jpg">
                  +30 </td>
                <td class="p-4 text-sm border-b">Dispute in progress</td>
                <td class="p-4 text-sm border-b">
                  <button class="border rounded border-gray-800 text-gray-800 py-3 px-8">Track order
                  </button>
                </td>
                <td class="p-4 text-sm border-b">
                  <font-awesome-icon class="text-2xl mt-2 ml-1 text-green-300" :icon="['fas', 'ellipsis-v']" />
                  <font-awesome-icon class="text-2xl mt-2 text-green-300" :icon="['fas', 'ellipsis-v']" />
                </td>
              </tr>
              <tr class="w-full mb-4">
                <td class="p-4 text-sm border-b">
                  <input type="checkbox" id="ad4" />
                  <label for="ad4"></label>
                  <div class="h-12 w-12 ml-3 inline-flex align-middle"><img class=" h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/men/20.jpg"></div>
                  <span class="inline-flex ml-2  align-middle">Michael Scott</span>
                </td>
                <td class="p-4 text-sm border-b">Porsche 219mm</td>
                <td class="p-4 text-sm border-b relative">
                  <img class="avatar" src="https://randomuser.me/api/portraits/men/26.jpg">
                  <img class="avatar" src="https://randomuser.me/api/portraits/men/25.jpg">
                  <img class="avatar" src="https://randomuser.me/api/portraits/men/24.jpg">
                  <img class="avatar" src="https://randomuser.me/api/portraits/men/23.jpg">
                  <img class="avatar" src="https://randomuser.me/api/portraits/men/22.jpg">
                  +30 </td>
                <td class="p-4 text-sm border-b">Dispute in progress</td>
                <td class="p-4 text-sm border-b">
                  <button class="border rounded border-gray-800 text-gray-800 py-3 px-8">Track order
                  </button>
                </td>
                <td class="p-4 text-sm border-b">
                  <font-awesome-icon class="text-2xl mt-2 ml-1 text-green-300" :icon="['fas', 'ellipsis-v']" />
                  <font-awesome-icon class="text-2xl mt-2 text-green-300" :icon="['fas', 'ellipsis-v']" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- <span v-for="(info,index) in articleArray"  >
       <span v-for="info2 in info.assigned_users">{{info2.avatar}}</span>
    </span>
    -->
  </div>
</template>
<script>
import LeftMenu from "~/components/technician/common-left-side-menu.vue";
import SimpleTable from "~/components/reusables/Table.vue";

import apiService from "~/apiService/have_token.js";

export default {
  layout: "user",
  components: {
    LeftMenu,
    SimpleTable
  },
  data() {
    return {
      ts: new Date(),
      articleArray: [],
      articleArrayaxios: [],
      articleArrayrout: [],
      randomNumber: [],
      geturl: "/api/project/technician/get_all",
      avata_img_url: process.env.avatar_base_url,
      username: null,
      useravatar: null,
      selected: false,
      projects: [{
          id: 1,
          user: {
            name: "Michael Scott",
            avatar: "https://randomuser.me/api/portraits/women/20.jpg"
          },
          name: "Porsche 219mm",
          service_providers: [{
              url: "https://randomuser.me/api/portraits/women/20.jpg"
            },
            {
              url: "https://randomuser.me/api/portraits/men/20.jpg"
            },
            {
              url: "https://randomuser.me/api/portraits/men/12.jpg"
            }
          ],
          deadline: "07/04/1927",
          completed: 30,
          selected: false
        },
        {
          id: 2,
          user: {
            name: "Michael Scott",
            avatar: "https://randomuser.me/api/portraits/men/20.jpg"
          },
          name: "Porsche 219mm",
          service_providers: [{
              url: "https://randomuser.me/api/portraits/women/20.jpg"
            },
            {
              url: "https://randomuser.me/api/portraits/men/20.jpg"
            },
            {
              url: "https://randomuser.me/api/portraits/men/12.jpg"
            }
          ],
          deadline: "07/04/1927",
          completed: 30,
          selected: false
        }
      ]
    };
  },
  mounted() {
    this.username = window.$nuxt.$cookies.get("firstname") + " " + window.$nuxt.$cookies.get("lastname");
    this.useravatar = window.$nuxt.$cookies.get("useravatar");
    let sendData = {
      method: "get",
      url: this.geturl,
      data: null
    };

    apiService(sendData, response => {
      console.log(response.data);
      this.randomNumber = response.data;
      this.articleArrayaxios = Object.values(response.data.data);

      this.articleArrayaxios.map(item => {
        this.articleArrayrout.push(item);
        this.articleArray.push(item);
      });
    });
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  methods: {
    selectall() {
      if (this.selected == true) {
        this.projects.forEach(element => {
          element.selected = true;
        });
      } else {
        this.projects.forEach(element => {
          element.selected = false;
        });
      }
      this.$forceUpdate();
    }
  }
};

</script>
<style scoped>
.w-13 {
  width: 13.333333%;
}

.avatar {
  @apply w-8 rounded-full -ml-5 shadow inline cursor-pointer;
}

.avatar:hover {
  @apply shadow-md;
}

.avatar:first-child {
  @apply ml-0;
}

.avatar-timeline {
  @apply w-6 rounded-full shadow inline cursor-pointer;
}

</style>
