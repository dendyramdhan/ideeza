<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="main-contents">
        <h1 class="text-2xl border-b-4 border-solid border-ideeza pb-5 mt-8">Projects</h1>
        <div class="mt-5 mb-10 lg:flex justify-between">
          <div class="flex">
            <select
              class="w-32 mr-10"
              selected="All"
              @change="selectkindman"
              v-model="kindman"
              style="height:40px;font-size:20px "
            >
              <option>All</option>
              <option>Active</option>
              <option>completed</option>
              <option>Priority</option>
              <option>Over Due</option>
            </select>
            <!-- <drop-down class="w-32 mr-10" :data="dataDropDown" selected="All" /> -->
            <!-- <search-field placeholder="Search Project..." /> -->
            <input
              placeholder="search Project..."
              class="bg-white outline-none h-8 text-gray-800 pr-3"
              v-model="searchTerm"
              v-on:input="search"
            />
          </div>
          <div>
            <button
              @click.self="addNewProject=true"
              class="btn btn-normal btn--ideeza px-5 py-3"
            >Create New +</button>
            <select
              class="w-48 block mt-5"
              placeholder="Sort By"
              style="height:40px;font-size:20px "
              v-model="kindmanworkinfo"
              @change="selectkindmanworkinfo"
            >
              <option>None</option>
              <option>Due Date First</option>
              <option>Starting Day First</option>
              <option>Chronologycal</option>
              <option>Alphabetical</option>
            </select>
            <!-- <drop-down
              class="w-48 block mt-5"
              styleHeight="mini"
              :data="sortDropDown"
              placeholder="Sort By"
            />-->
          </div>
        </div>

        <table class="mt-10 shadow-md">
          <thead>
            <tr class="text-white h16 gradient-bg">
              <th class="text-left">Projects</th>
              <th class="text-left">Domain</th>
              <th class="text-left">Assigned to</th>
              <th class="text-left">Due Date</th>
              <th class="text-left">Task Status</th>
              <th class="text-left">Notification</th>
            </tr>
          </thead>
          <tbody v-for="(Service, index) in articleArray">
            <tr class="bg-ideeza-100" v-if="start < index && index < end ">
              <td>
                <nuxt-link :to="{ path: '/service-provider/projects/'+Service.id}" >{{Service.projectName}}</nuxt-link>
              </td>
              <td>{{Service.domain}}</td>
              <td>
                <span v-for="image in Service.assigned_to_profile_image">
                  <img class="avatar" :src="image" />
                </span>
              </td>
              <td>
                <div class="text-sm text-gray-600 w-3/4 bg-white h-8 text-center rounded-full relative">
                  <span class="absolute due-date text-black">{{Service.due_date}}</span>
                  <div class="bg-ideeza rounded-full h-8" :style="{ width:'60%'}">
                  </div>
                </div>
              </td>
              <td class="status status--completed" v-if="Service.task_status=='completed'">
                completed
              </td>
              <td v-else-if="Service.task_status == 'Over Due'" class="status status--over">Over Due</td>
              <td v-else-if="Service.task_status== 'Active'" class="status status--progress">Active</td>
              <td v-else class="status status--progress">Priority</td>
              <td class="notifications">
                <font-awesome-icon v-if="Service.task_status=='completed'" class="mr-1 text-lg text-ideeza-gold" :icon="['fas', 'exclamation-circle']"/> 
                <font-awesome-icon v-else-if="Service.task_status == 'Active'" class="mr-1 text-lg text-red-500" :icon="['far', 'clock']"/> 
                <font-awesome-icon v-else class="mr-1 text-lg text-blue-700" :icon="['fas', 'bell']"/> 
              </td>
            </tr>
          </tbody>
        </table>

        <!--Table Stats-->
        <!-- <div class="mt-10 lg:flex justify-center">
          <div class="flex items-center">
            <font-awesome-icon
              class="mr-2 h-4 cursor-pointer"
              :icon="['fas', 'angle-double-left']"
            />page 1 0f 9
            <font-awesome-icon
              class="ml-2 h-4 cursor-pointer"
              :icon="['fas', 'angle-double-right']"
            />
          </div>
        </div>-->

        <!--Paging-->
        <div class="mx-auto w-content">
          <span class="inline-block mr-4 cursor-pointer" @click="decreasekey">
            <font-awesome-icon class="mr-1 h-4" :icon="['fas', 'angle-double-left']" />Previous
          </span>

          <span v-for="inde in counterarray " :key="inde">
            <span v-if="currentviewpoint == inde " class="text-lg text-ideeza">
              <button style="width:35px;" @click="selectedkey(inde)">{{inde}}</button>
            </span>
            <span v-else>
              <button style="width:35px;" @click="selectedkey(inde)">{{inde}}</button>
            </span>
          </span>

          <span class="inline-block ml-4 cursor-pointer" @click="increasekey">
            Next
            <font-awesome-icon class="ml-2 h-4" :icon="['fas', 'angle-double-right']" />
          </span>
        </div>

        <!--Add new project-->
        <new-project @onClose="addNewProject=false" v-if="addNewProject" />
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from "~/components/technician/common-left-side-menu.vue";
import DropDownField from "~/components/form/dropdown-field.vue";
import SearchField from "~/components/form/search.vue";
import AddNewProject from "~/components/technician/management/new-project.vue";

import Services from "~/data/TechnicianProjectApi.json";

export default {
  layout: "user",
  name: "projects-index",
  components: {
    LeftMenu,
    "drop-down": DropDownField,
    "search-field": SearchField,
    "new-project": AddNewProject
  },
  data: function() {
    return {
      Services: Services.firstproject,
      searchTerm: "",
      kindman: "All",
      kindmanworkinfo: "Sort BY",
      articleArray: [],
      currentviewpoint: this.$store.state.TechnicianProjectStore.offset + 1,
      index: 0,
      length: Services.length / 5 - 1,
      counter: Services.length / this.$store.state.TechnicianProjectStore.scale,
      start: this.$store.state.TechnicianProjectStore.offset * 5 - 1,
      end: this.$store.state.TechnicianProjectStore.offset * 5 + 5,
      counterarray: [],
      addNewProject: false,
      dataDropDown: ["All", "Active", "Completed", "Priority", "Over Due"],
      sortDropDown: [
        "None",
        "Due Date First",
        "Starting Day First",
        "Chronologycal",
        "Alphabetical"
      ]
    };
  },
  created: function() {
    this.$store.commit("TechnicianProjectStore/viewflagchange2");
    let i = 1;
    let endd =
      this.Services.length / this.$store.state.TechnicianProjectStore.scale + 1;
    //  alert( this.Services.length);
    for (i = 1; i <= endd; i++) {
      this.counterarray.push(i);
    }
    // alert(this.counterarray);

    this.Services.map(item => {
      this.articleArray.push(item);
    });
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  mounted() {},
  methods: {
    search(e) {
      this.articleArray = [];

      let article_list = this.Services;
      article_list.map(element => {
        const a_text = element.projectName.toLowerCase() + "";
        const b_text = e.target.value.toLowerCase() + "";
        // const b_text = "master"

        let s_index = a_text.indexOf(b_text) + 1;
        // console.log("search ", a_text, b_text, s_index);

        if (s_index > 0 || e.target.value == "") {
          this.articleArray.push(element);
        }
      });

      console.log("search array :", this.articleArray, e.target.value);
    },
    selectkindman(e) {
      this.searchTerm = "";
      this.articleArray = [];
      // alert(e.target.value)
      this.kindman = e.target.value;
      let article_list = this.Services;
      article_list.map(element => {
        if (e.target.value == "All") {
          this.articleArray.push(element);
        } else if (element.task_status == e.target.value) {
          this.articleArray.push(element);
        }
      });
    },
    selectkindmanworkinfo(e) {
      this.searchTerm = "";
      //  alert(e.target.value)
      this.kindmanworkinfo = e.target.value;
      let article_list = this.articleArray;
      let S_index = e.target.value;
      switch (S_index) {
        case "None":
          article_list.sort(function(a, b) {
            var x = a.projectName;
            var y = b.projectName;
            if (x < y) {
              return -1;
            }
            if (x > y) {
              return 1;
            }
            return 0;
          });

          // console.log("sorted : ", article_list);
          break;
        case "Due Date First":
          article_list.sort(function(a, b) {
            var x = a.due_date;
            var y = b.due_date;
            if (x < y) {
              return -1;
            }
            if (x > y) {
              return 1;
            }
            return 0;
          });

          // console.log("sorted : ", article_list);
          break;
        case "Starting Day First":
          article_list.sort(function(a, b) {
            var x = a.start_date;
            var y = b.start_date;
            if (x < y) {
              return -1;
            }
            if (x > y) {
              return 1;
            }
            return 0;
          });

          // console.log("sorted : ", article_list);
          break;

        case "Chronologycal":
          article_list.sort(function(a, b) {
            var x = a.Chronologycal;
            var y = b.Chronologycal;
            if (x < y) {
              return -1;
            }
            if (x > y) {
              return 1;
            }
            return 0;
          });

          // console.log("sorted : ", article_list);
          break;

        case "Alphabetical":
          article_list.sort(function(a, b) {
            var x = a.projectName.toLowerCase();
            var y = b.projectName.toLowerCase();
            if (x < y) {
              return -1;
            }
            if (x > y) {
              return 1;
            }
            return 0;
          });

          // console.log("sorted : ", article_list);
          break;

        default:
          break;
      }
    },
    selectedkey(e) {
      this.$store.commit("TechnicianProjectStore/selectedkeyChange", e - 1);
      // $router.go({path:'/news', force: true})
      console.log(this.currentviewpoint + "_");
      this.currentviewpoint =
        this.$store.state.TechnicianProjectStore.offset + 1;
      this.counter =
        this.articleArray.length /
        this.$store.state.TechnicianProjectStore.scale;
      this.start = this.$store.state.TechnicianProjectStore.offset * 5 - 1;
      this.end = this.$store.state.TechnicianProjectStore.offset * 5 + 5;
      console.log("start and end :", this.start, this.end);
      // this.$refs.page.$forceUpdate();
    },
    increasekey() {
      if (
        this.currentviewpoint == this.counter ||
        this.currentviewpoint > this.counter
      ) {
      } else {
        this.$store.commit("TechnicianProjectStore/increasekeyChange");
        this.currentviewpoint =
          this.$store.state.TechnicianProjectStore.offset + 1;
        this.counter =
          this.articleArray.length /
          this.$store.state.TechnicianProjectStore.scale;
        this.start = this.$store.state.TechnicianProjectStore.offset * 5 - 1;
        this.end = this.$store.state.TechnicianProjectStore.offset * 5 + 5;
        // $router.go({path:'/news', force: true})
        // this.$refs.page.$forceUpdate();
      }
    },
    decreasekey() {
      if (this.currentviewpoint == 1 || this.currentviewpoint < 1) {
      } else {
        this.$store.commit("TechnicianProjectStore/decreasekeyChange");
        this.currentviewpoint =
          this.$store.state.TechnicianProjectStore.offset + 1;
        this.counter =
          this.articleArray.length /
          this.$store.state.TechnicianProjectStore.scale;
        this.start = this.$store.state.TechnicianProjectStore.offset * 5 - 1;
        this.end = this.$store.state.TechnicianProjectStore.offset * 5 + 5;
        // $router.go({path:'/news', force: true})
        // this.$refs.page.$forceUpdate();
      }
    }
  }
};
</script>

<style scoped>
.avatar {
  @apply w-8 rounded-full -ml-5 shadow inline cursor-pointer;
}
.avatar:hover {
  @apply shadow-md;
}
.avatar:first-child {
  @apply ml-0;
}
.status {
  @apply uppercase;
}
.status--completed {
  @apply text-green-500;
}
.status--progress {
  @apply text-orange-500;
}
.status--over {
  @apply text-red-500;
}
.notifications {
  @apply text-sm text-ideeza;
}
@screen lg {
  table {
    @apply mb-5 w-full table-fixed border-collapse text-gray-600;
  }
  thead tr {
    @apply bg-white px-6 pl-16;
  }
  thead th {
    @apply p-6;
  }
  thead th:first-child {
    @apply pl-16;
  }
  tbody td {
    @apply p-6 border-r border-solid border-gray-300;
  }
  tbody tr:even {
    @apply bg-white;
  }
  tbody td:first-child {
    @apply pl-16;
  }
  tbody td:last-child {
    @apply border-r-0;
  }
}
@media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
  /* Force table to not be like tables anymore */
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }

  td {
    /* Behave  like a "row" */
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
  }

  td:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    font-weight: 600;
  }

  /*
      Label the data
      */
    td:nth-of-type(1):before { content: "Projects"; }
    td:nth-of-type(2):before { content: "Domain"; }
    td:nth-of-type(3):before { content: "Assigned To"; }
    td:nth-of-type(4):before { content: "Due Date"; }
    td:nth-of-type(5):before { content: "Task Status"; }
    td:nth-of-type(6):before { content: "Notification"; }
    td:nth-of-type(7):before { content: "Action"; }
  }
  .due-date{
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>
