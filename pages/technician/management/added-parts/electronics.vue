<template>
  <div class="mt-10">
    <div>
      <div class="lg:flex flex-wrap justify-between">
        <div class="flex flex-wrap justify-center md:justify-start">
          <select class="field field--border-light mr-1 h-12">
            <option>All roles</option>
          </select>
          <select class="field field--border-light mr-1 h-12">
            <option>All packages</option>
          </select>
          <select class="field field--border-light mr-1 h-12">
            <option>Category</option>
          </select>
          <select class="field field--border-light mr-1 h-12">
            <option>Sub-Category</option>
          </select>
          <select class="field field--border-light mr-1 h-12">
            <option>All columns</option>
          </select>
        </div>
        <div>
          <div class="flex w-fit-content bg-white justify-center border-light-gray items-center content-center">
            <div class="h-12 relative w-10">
              <font-awesome-icon class="ml-1 h-4 text-gray-400 absolute-center-h-v" :icon="['fas', 'search']"/>
            </div>
            <input
              placeholder="search Project..."
              class="bg-white outline-none h-8 text-gray-800 pr-3"
              v-model="searchTerm"
              v-on:input="search"
            />
          </div>

        </div>
      </div>
      <div class="xl:hidden cursor-pointer border-light-gray w-10 h-8 relative mt-2  ml-2 bg-white">
        <font-awesome-icon class="ml-1 h-6 text-gray-600 absolute-center-h-v" :icon="['fas', 'sliders-h']"/>
      </div>
    </div>

    <table id="mytableapp" class="mt-10 shadow-md">
      <thead>
      <tr class="text-gray-800 h16">
        <th class="text-left"  @click="sort('role')"><font-awesome-icon
                  class="mr-1 text-lg text-black"
                  :icon="['fas', 'sort']"
                />Role</th>
        <th class="text-left"  @click="sort('id')"><font-awesome-icon
                  class="mr-1 text-lg text-black"
                  :icon="['fas', 'sort']"
                />Id</th>
        <th class="text-left"  @click="sort('name')"><font-awesome-icon
                  class="mr-1 text-lg text-black"
                  :icon="['fas', 'sort']"
                />Name</th>
        <th class="text-left"  @click="sort('package')"><font-awesome-icon
                  class="mr-1 text-lg text-black"
                  :icon="['fas', 'sort']"
                />Package</th>
        <th class="text-left"  @click="sort('category')"><font-awesome-icon
                  class="mr-1 text-lg text-black"
                  :icon="['fas', 'sort']"
                />Category</th>
        <th class="text-left"  @click="sort('subcategory')"><font-awesome-icon
                  class="mr-1 text-lg text-black"
                  :icon="['fas', 'sort']"
                />Sub-Category</th>
        <th class="text-left">Actions</th>
        <th class="text-right"><font-awesome-icon class="mr-1 h-4 cursor-pointer" :icon="['fas', 'ellipsis-h']"/></th>
      </tr>
      </thead>
      <tbody v-for="(Service, index) in articleArray">
      <tr v-if="start < index && index < end ">
        <td >
          {{Service.role}}

        </td>
        <td> {{Service.id}}</td>
        <td> {{Service.name}}</td>
        <td> {{Service.package}}</td>
        <td> {{Service.category}}</td>
        <td> {{Service.sub_cat}}</td>

        <td class="">
          
          <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']"/>
           <nuxt-link
                :to="{ path: '/technician/messages', query: { id: Service.id}}"
              ><font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'envelope']" /></nuxt-link>

          <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'check']" @click="setstatus(Service.id,'Active')" />
          <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'pause']"  @click="setstatus(Service.id,'Pause')" />
          <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'times']" @click="setstatus(Service.id,'Close')" />
        </td>
                 <td class="lg:text-right text-xs">{{ts.toLocaleDateString(Service.created_at)}}</td>

      </tr>


      </tbody>
    </table>

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

    <!--Table Stats-->
    <!-- <div class="mt-5 lg:flex justify-end">
      <div class="lg:w-3/5 p-3 lg:flex justify-between"> -->
        <!--Paging-->
        <!-- <div class="flex items-center">
          <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'angle-double-left']"/>
          page 1 0f 9
          <font-awesome-icon class="ml-2 h-4 cursor-pointer" :icon="['fas', 'angle-double-right']"/>
        </div>

        <div class="flex items-center justify-end">


          <span class="inline-block ml-32">Show</span>
          <select class="field field--border-none ml-2 h-10">
            <option>1-3</option>
          </select> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Services from "~/data/TechnicianmanagementApi.json";
  import apiService from "~/apiService/have_token.js";
import apiService2 from "~/apiService/have_data.js";

export default {
  name: "added-code-index",
  data: function() {
    return {
      ts: new Date(),
      searchTerm: "",
      counterarray: [],
      articleArray: [],
      currentSort: "username",
      currentSortDir: "asc",
      Services: Services.second_submenu_add_parts_electronics,
      currentviewpoint: this.$store.state.TechnicianProjectStore.offset + 1,
      index: 0,
      length: null,
      counter: null,
      start: this.$store.state.TechnicianProjectStore.offset * 5 - 1,
      end: this.$store.state.TechnicianProjectStore.offset * 5 + 5,
      articleArrayaxios: [],
      articleArrayrout: [],
      randomNumber: [],
      geturl: "/api/electronics/added_part",
      geturl2: "/api/electronics/change_status",
    };
  },
  mounted(){
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
  created: function() {
    
  },
  methods:{
    setstatus(userid, status){
          const formData = new FormData();
      formData.set("part_id", userid);
      formData.set("status", status);
      let sendData = {
        method: "post",
        url: this.geturl2,
        data: formData
      };
      apiService2(sendData, response => {
        console.log(response);

        this.articleArray = [];
        let sendData5 = {
          method: "get",
          url: this.geturl,
          data: null
        };

        apiService(sendData5, response5 => {
          console.log(response5.data);
          // this.randomNumber = response.data;
          this.articleArrayaxios = Object.values(response5.data.data);

          this.articleArrayaxios.map(item => {
            this.articleArrayrout.push(item);
            this.articleArray.push(item);
          });
        });

        
      });
      },
      sort: function(s) {
      let direction = 1;

      if (s === this.currentSort) {
        if (this.currentSortDir == "asc") {
          direction = 1;
        } else if (this.currentSortDir == "desc") {
          direction = -1;
        }

        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }

      this.currentSortDir;
      let article_list = this.articleArray;
      switch (s) {
        case "role":
          article_list.sort(function(a, b) {
            var x = a.role ? a.role.toLowerCase() : a.role;
            var y = b.role ? b.role.toLowerCase() : b.role;
            if (x < y) {
              return -1 * direction;
            }
            if (x > y) {
              return 1 * direction;
            }
            return 0;
          });

          break;
        case "id":
          article_list.sort(function(a, b) {
            var x = a.id ? a.id.toLowerCase() : a.id;
            var y = b.id ? b.id.toLowerCase() : b.id;
            if (x < y) {
              return -1 * direction;
            }
            if (x > y) {
              return 1 * direction;
            }
            return 0;
          });

          break;
        case "name":
          article_list.sort(function(a, b) {
            var x = a.name ? a.name.toLowerCase() : a.name;
            var y = b.name ? b.name.toLowerCase() : b.name;
            if (x < y) {
              return -1 * direction;
            }
            if (x > y) {
              return 1 * direction;
            }
            return 0;
          });

          break;
        case "package":
          article_list.sort(function(a, b) {
            var x = a.package ? a.package.toLowerCase() : a.package;
            var y = b.package ? b.package.toLowerCase() : b.package;
            if (x < y) {
              return -1 * direction;
            }
            if (x > y) {
              return 1 * direction;
            }
            return 0;
          });

          break;
        case "category":
          article_list.sort(function(a, b) {
            var x = a.category ? a.category.toLowerCase() : a.category;
            var y = b.category ? b.category.toLowerCase() : b.category;
            if (x < y) {
              return -1 * direction;
            }
            if (x > y) {
              return 1 * direction;
            }
            return 0;
          });

          break;
        case "subcategory":
          article_list.sort(function(a, b) {
            var x = a.subcategory ? a.subcategory.toLowerCase() : a.subcategory;
            var y = b.subcategory ? b.subcategory.toLowerCase() : b.subcategory;
            if (x < y) {
              return -1 * direction;
            }
            if (x > y) {
              return 1 * direction;
            }
            return 0;
          });

          break;
        default:
          break;
      }
      this.currentSort = s;
    },
    search(e) {
      this.articleArray = [];

      let article_list = this.articleArrayrout;
      article_list.map(element => {
        const a_text = element.name.toLowerCase() + "";
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
  #mytableapp thead tr th {
    cursor: pointer;
  }

  @screen lg{

    table{
      @apply mb-5 w-full table-fixed border-collapse text-gray-600;
    }
    thead tr{
      @apply bg-white px-6 pl-16;
    }
    thead th{
      @apply p-6;
    }
    thead th:first-child{
      @apply pl-16;
    }
    tbody td{
      @apply p-6;
    }
    tbody td svg {
      @apply text-xs;
    }
    tbody tr:even{
      @apply bg-white;
    }
    tbody td:first-child{
      @apply pl-16;
    }

  }

  @media
  only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px)  {

    /* Force table to not be like tables anymore */
    table, thead, tbody, th, td, tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr { border: 1px solid #ccc; margin-bottom: 10px; }

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
    td:nth-of-type(1):before { content: "Products"; }
    td:nth-of-type(2):before { content: "Color"; }
    td:nth-of-type(3):before { content: "Price"; }
    td:nth-of-type(4):before { content: "Quantity"; }
    td:nth-of-type(5):before { content: "Cost"; }
    td:nth-of-type(6):before { content: "Action"; }
  }
</style>
