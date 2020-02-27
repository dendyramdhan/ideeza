<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="main-contents">
          <h1 class="text-indigo-800 font-bold text-2xl border-b-4 border-solid border-ideeza pb-5 mt-8">Create process</h1>
        <div class="w-full max-w-lg">
            <form class="rounded px-8 pt-6 pb-8 mb-4">
              <div class="mb-4">
                <input class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Name of the process">
              </div>

              <div class="mb-4">
                <textarea class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Name subprocesses ( divide with commas )" rows="6"></textarea>
              </div>

              <div class="mb-4">
                <textarea class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Name Machines ( divide with commas )" rows="6"></textarea>
              </div>
               
              <div class="">
                <button class="bg-ideeza text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-white" type="button">
                  Create process
                </button>

                <button class="bg-white text-gray-700 border border-gray-400 ml-4 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Cancel
                </button>
                 
              </div>
            </form>
             
          </div>


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

import apiService from "~/apiService/have_token.js";



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
      avata_img_url:process.env.avatar_base_url,
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
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
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
      let endd = this.articleArrayrout.length /this.$store.state.TechnicianProjectStore.scale + 1;
      //  alert( this.Services.length);
      for (i = 1; i <= endd; i++) {
        this.counterarray.push(i);
      }
    });
  },
  methods: {
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
select {
    min-width: auto;
    max-width: initial;
}
</style>