<template>
  <div class="flex main-panel">
    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="main-contents">
        <h1 class="text-indigo-800 font-bold text-2xl border-b-4 border-solid border-ideeza pb-5 mt-8">Add machine</h1>
        <div class="flex mt-8">
          <div class="w-1/2">
            <form class="rounded px-8 pt-6 pb-8 mb-4">
              <div class="relative mb-4 ml-3">
                <select class="shadow block appearance-none bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option>Choose processes</option>
                  <option>processes 1</option>
                  <option>processes 2</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
              <div class="relative mb-4 ml-3">
                <select class="shadow block appearance-none bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option>Choose sub-processes</option>
                  <option>processes 1</option>
                  <option>processes 2</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
              <div class="mb-4">
                <input class=" appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight shadow focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Machine name">
              </div>
              <div class="mb-4">
                <input class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Machine line">
              </div>
              <div class="mb-4">
                <input class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Year produced">
              </div>
              <div class="mb-4">
                <input class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="file">
              </div>
              <div class="upload-btn-wrapper mb-4">
                <label class="text-gray-800">Add image</label>
                <button class="block mt-4 w-full bg-white text-gray-500 border border-gray-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-left">Choose from computer</button>
                <input type="file" name="myfile" />
              </div>
              <p class="text-center py-2">OR</p>
              <div class="mb-4">
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Insert URL">
              </div>
              <div class="">
                <button class="bg-ideeza text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-white" type="button">
                  Add machine
                </button>
                <button class="bg-white text-gray-700 border border-gray-400 ml-4 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <div class="w-1/2">
            <form class="rounded px-8 pt-6 pb-8 mb-4">
              <div class="mb-4">
                <label class="text-gray-800 font-bold pb-3 block">Description:</label>
                <textarea class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Name subprocesses ( divide with commas )" rows="6"></textarea>
              </div>
              <div class="mb-4 relative">
                <input class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Accuracy">
                <span class="absolute right-0 top-0 text-xl text-gray-800 pr-3 pt-2">mm</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DropDownField from "~/components/form/dropdown-field.vue";
import SearchField from "~/components/form/search.vue";
import AddNewProject from "~/components/technician/management/new-project.vue";
import Services from "~/data/TechnicianProjectApi.json";
import apiService from "~/apiService/have_token.js";

export default {
  layout: "technician",
  name: "projects-index",
  components: {
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
  max-width: 100%;
  width: 100%;
}

.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
}


.upload-btn-wrapper input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

</style>
