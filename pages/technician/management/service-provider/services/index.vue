<template>
  <div class="flex main-panel">
    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="main-contents">
        <h1 class="text-indigo-800 font-bold text-2xl border-b-4 border-solid border-ideeza pb-5 mt-8">Services</h1>
        <div class="flex py-2">
          <div class="w-1/2 flex">
            <div class="relative mr-3">
              <select class="block appearance-none w-24 bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>All</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            <div class="flex w-fit-content bg-white justify-center  rounded items-center mr-2 content-center">
              <div class="h-8 relative w-10">
                <font-awesome-icon class="ml-1 h-4 text-gray-400 absolute-center-h-v" :icon="['fas', 'search']" />
              </div>
              <input placeholder="search" class="bg-white outline-none h-8 text-gray-800 pr-3">
            </div>
          </div>
          <div class="w-1/2 flex justify-end">
            <button @click="showAddService = true;" class="bg-ideeza border text-white rounded px-3 py-1">
              Add new service
            </button>
            <div class="relative ml-3">
              <select class="block appearance-none w-24 bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>Sort by</option>
                <option>asda</option>
                <option>asdasd</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded p-3">
          <table cellpadding="0" cellspacing="0" width="100%" class="text-left">
            <tr class="">
              <th class="text-gray-600 py-3 px-2">
                <font-awesome-icon class="mr-1 text-lg text-black" :icon="['fas', 'sort']" /> Title
              </th>
              <th class="text-gray-600 py-3 px-2">
                <font-awesome-icon class="mr-1 text-lg text-black" :icon="['fas', 'sort']" /> Username
              </th>
              <th class="text-gray-600 py-3 px-2 text-right">
                <font-awesome-icon class="mr-1 text-lg text-black" :icon="['fas', 'ellipsis-h']" />
              </th>
            </tr>
            <tr class="bg-white">
              <td class="px-2 py-4">Pick-up</td>
              <td class="px-2 py-4">Moran Biton</td>
              <td class="px-2 py-4 text-right">
                <font-awesome-icon class="mr-1 text-lg text-black" :icon="['fas', 'ellipsis-h']" />
              </td>
            </tr>
            <tr class="bg-gray-200">
              <td class="px-2 py-4">Ship</td>
              <td class="px-2 py-4">Moran Biton</td>
              <td class="px-2 py-4 text-right">
                <font-awesome-icon class="mr-1 text-lg text-black" :icon="['fas', 'ellipsis-h']" />
              </td>
            </tr>
            <tr class="bg-white">
              <td class="px-2 py-4">Pick-up</td>
              <td class="px-2 py-4">Moran Biton</td>
              <td class="px-2 py-4 text-right">
                <font-awesome-icon class="mr-1 text-lg text-black" :icon="['fas', 'ellipsis-h']" />
              </td>
            </tr>
            <tr class="bg-gray-200">
              <td class="px-2 py-4">Ship</td>
              <td class="px-2 py-4">Moran Biton</td>
              <td class="px-2 py-4 text-right">
                <font-awesome-icon class="mr-1 text-lg text-black" :icon="['fas', 'ellipsis-h']" />
              </td>
            </tr>
          </table>
          <div class="flex mt-8">
            <div class="w-10/12 flex justify-center py-5">
              <div class="p-3">
                <<</div> <div class="p-3">Previous
              </div>
              <div class="p-3">1</div>
              <div class="p-3 text-ideeza">2</div>
              <div class="p-3">3</div>
              <div class="p-3">Next</div>
              <div class="p-3">>></div>
            </div>
            <div class="w-2/12 py-3">
              <div class="relative ml-3">
                <select class="block appearance-none w-24 bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option>Sort by</option>
                  <option>1-6</option>
                  <option>7-11</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AddService v-if="showAddService" @close="showAddService=false" />
  </div>
</template>
<script>
import AddService from "~/components/technician/management/service-provider/AddService";
import DropDownField from "~/components/form/dropdown-field.vue";
import SearchField from "~/components/form/search.vue";
import AddNewProject from "~/components/technician/management/new-project.vue";
import Services from "~/data/TechnicianProjectApi.json";
import apiService from "~/apiService/have_token.js";

export default {
  layout: "technician",
  name: "projects-index",
  components: {
    AddService,
    "drop-down": DropDownField,
    "search-field": SearchField,
    "new-project": AddNewProject
  },
  data: function() {
    return {
      showAddService: false,
      ts: new Date(),
      Services: Services.firstproject,
      searchTerm: "",
      kindman: "All",
      kindmanworkinfo: "Sort BY",
      articleArray: [],
      currentviewpoint: this.$store.state.TechnicianProjectStore.offset + 1,
      index: 0,
      length: null,
      counter: null,
      start: this.$store.state.TechnicianProjectStore.offset * 5 - 1,
      end: this.$store.state.TechnicianProjectStore.offset * 5 + 5,
      counterarray: [],
      articleArrayaxios: [],
      articleArrayrout: [],
      randomNumber: [],
      geturl: "/api/project/technician/get_all",
      avata_img_url: process.env.avatar_base_url,
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
    // this.$store.commit("TechnicianProjectStore/viewflagchange2");
    // let i = 1;
    // let endd =
    //   this.Services.length / this.$store.state.TechnicianProjectStore.scale + 1;
    // //  alert( this.Services.length);
    // for (i = 1; i <= endd; i++) {
    //   this.counterarray.push(i);
    // }
    // // alert(this.counterarray);

    // this.Services.map(item => {
    //   this.articleArray.push(item);
    // });
  },
  mounted() {
    this.$store.commit("TechnicianProjectStore/viewflagchange2");
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

      this.length = this.articleArrayrout.length / 5 - 1;
      this.counter = this.articleArrayrout.length / this.$store.state.TechnicianProjectStore.scale;

      let i = 1;
      let endd = this.articleArrayrout.length / this.$store.state.TechnicianProjectStore.scale + 1;
      //  alert( this.Services.length);
      for (i = 1; i <= endd; i++) {
        this.counterarray.push(i);
      }
    });
  },
  methods: {
    addNewService() {
      this.$router.push('/technician/management/service-provider/services/add');
    },
    search(e) {
      this.articleArray = [];

      let article_list = this.articleArrayrout;
      article_list.map(element => {
        const a_text = element.title.toLowerCase() + "";
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
      let article_list = this.articleArrayrout;
      article_list.map(element => {
        if (e.target.value == "All") {
          this.articleArray.push(element);
        } else if (element.status == e.target.value) {
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
            var x = a.title;
            var y = b.title;
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
            var x = a.end;
            var y = b.end;
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
            var x = a.start;
            var y = b.start;
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
            var x = a.start;
            var y = b.start;
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
            var x = a.title.toLowerCase();
            var y = b.title.toLowerCase();
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
      ) {} else {
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
      if (this.currentviewpoint == 1 || this.currentviewpoint < 1) {} else {
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
select {
  min-width: auto;
  max-width: initial;
}

</style>
