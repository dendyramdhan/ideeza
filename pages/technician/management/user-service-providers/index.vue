<template>
  <div>
    <h1 class="text-2xl border-b-4 border-solid border-ideeza pb-5 mt-8">Manage Users & Service Providers & Technician</h1>
    <div class="mt-10">
      <div>
        <div class="hidden xl:flex justify-between">
          <div class="flex">
            <select class="field field--border-light mr-1 h-12">
              <option>All roles</option>
            </select>
            <select class="field field--border-light mr-1 h-12">
              <option>All status type</option>
            </select>
            <select class="field field--border-light mr-1 h-12">
              <option>Date</option>
            </select>
            <select class="field field--border-light mr-1 h-12">
              <option>All columns</option>
            </select>
          </div>
          <div>
            <div class="flex w-fit-content bg-white justify-center border-light-gray items-center content-center">
              <div class="h-12 relative w-10">
                <font-awesome-icon class="ml-1 h-4 text-gray-400 absolute-center-h-v" :icon="['fas', 'search']" />
              </div>
              <input placeholder="search Project..." class="bg-white outline-none h-8 text-gray-800 pr-3" v-model="searchTerm" v-on:input="search" />
              <!-- <input
                placeholder="search users"
                class="bg-white outline-none h-12 text-gray-800 pr-3"
              />-->
            </div>
          </div>
        </div>
        <div class="xl:hidden cursor-pointer border-light-gray w-10 h-8 relative mt-2 ml-2 bg-white">
          <font-awesome-icon class="ml-1 h-6 text-gray-600 absolute-center-h-v" :icon="['fas', 'sliders-h']" />
        </div>
      </div>
      <table id="mytableapp" class="mt-10 shadow-md">
        <thead>
          <tr class="text-gray-800 h16">
            <th class="text-left" @click="sort('username')">
              <font-awesome-icon class="mr-1 text-lg text-black" :icon="['fas', 'sort']" />Username</th>
            <th class="text-left" @click="sort('role')">
              <font-awesome-icon class="mr-1 text-lg text-black" :icon="['fas', 'sort']" />Role</th>
            <th class="text-left" @click="sort('status')">
              <font-awesome-icon class="mr-1 text-lg text-black" :icon="['fas', 'sort']" />Status</th>
            <th class="text-left" @click="sort('join_date')">
              <font-awesome-icon class="mr-1 text-lg text-black" :icon="['fas', 'sort']" />Join Date</th>
            <th class="text-left">Actions</th>
            <!-- <th class="text-right">
              <font-awesome-icon class="mr-1 h-4 cursor-pointer" :icon="['fas', 'ellipsis-h']" />
            </th>-->
          </tr>
        </thead>
        <tbody v-for="(Service, index) in articleArray">
          <tr v-if="start < index && index < end ">
            <td>
              <nuxt-link :to="{ path: '/technician/user-profile', query: { id: Service.userid}}">{{Service.first_name}}</nuxt-link>
            </td>
            <td>{{Service.role}}</td>
            <td>{{Service.status}}</td>
            <td v-if="Service.date_joined != null ">{{new Date(Service.date_joined).toLocaleDateString()}}</td>
            <td v-else>{{Service.date_joined}}</td>
            <td class="lg:text-right">
              <nuxt-link :to="{ path: '/technician/user-profile', query: { id: Service.userid}}">
                <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']" />
              </nuxt-link>
              <nuxt-link :to="{ path: '/technician/messages', query: { id: Service.userid}}">
                <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'envelope']" />
              </nuxt-link>
              <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'check']" @click="setstatus(Service.userid,'Active')" />
              <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'pause']" @click="setstatus(Service.userid,'Pause')" />
              <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'times']" @click="setstatus(Service.userid,'Close')" />
            </td>
            <!-- <td class="lg:text-right text-xs">{{ts.toLocaleDateString(Service.created_at)}}</td> -->
          </tr>
        </tbody>
      </table>
      <!--Table Stats-->
      <!-- <div class="mt-5 lg:flex justify-end">
      <div class="lg:w-3/5 p-3 lg:flex justify-between">-->
      <!--Paging-->
      <!-- <div class="flex items-center">
            <font-awesome-icon
              class="mr-2 h-4 cursor-pointer"
              :icon="['fas', 'angle-double-left']"
            />page 1 0f 9
            <font-awesome-icon
              class="ml-2 h-4 cursor-pointer"
              :icon="['fas', 'angle-double-right']"
            />
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
      <div class="flex items-center">
        <!-- <span class="inline-block ml-32">Show</span>
            <select class="field field--border-none ml-2 h-10">
              <option>1-3</option>
        </select>-->
      </div>
    </div>
    <!-- {{articleArray}}- -->
  </div>
</template>
<script>
import Services from "~/data/TechnicianmanagementApi.json";
import apiService from "~/apiService/have_token.js";
import apiService2 from "~/apiService/have_data.js";

export default {
  name: "user-service-providers",
  data: function() {
    return {
      ts: new Date(),
      searchTerm: "",
      counterarray: [],
      articleArray: [],
      currentSort: "username",
      currentSortDir: "asc",
      Services: Services.first_submenu_User_provider,
      currentviewpoint: this.$store.state.TechnicianProjectStore.offset + 1,
      index: 0,
      length: null,
      counter: null,
      start: this.$store.state.TechnicianProjectStore.offset * 5 - 1,
      end: this.$store.state.TechnicianProjectStore.offset * 5 + 5,
      articleArrayaxios: [],
      articleArrayrout: [],
      randomNumber: {},
      geturl: "/accounts/users/",
      geturl2: "/api/user/change_status"
    };
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
      // this.randomNumber = response.data;
      this.articleArrayaxios = Object.values(response.data);

      this.articleArrayaxios.map(item => {
        this.articleArrayrout.push(item);
        this.articleArray.push(item);
      });

      this.length = this.articleArrayrout.length / 5 - 1;
      this.counter =
        this.articleArrayrout.length /
        this.$store.state.TechnicianProjectStore.scale;

      let i = 1;
      let endd =
        this.articleArrayrout.length /
        this.$store.state.TechnicianProjectStore.scale +
        1;
      //  alert( this.Services.length);
      for (i = 1; i <= endd; i++) {
        this.counterarray.push(i);
      }
    });
  },
  created: function() {},
  methods: {
    setstatus(userid, status) {
      const formData = new FormData();
      formData.set("status", status);
      formData.set("userid", userid);
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
    // @click="setstatus(Service.userid,'Active')" />
    //           <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'pause']"   @click="setstatus(Service.userid,'Pause')" />
    //           <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'times']"   @click="setstatus(Service.userid,'Close')" />

    search(e) {
      this.articleArray = [];

      let article_list = this.articleArrayrout;
      article_list.map(element => {
        const a_text = element.firstname.toLowerCase() + "";
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
        case "username":
          article_list.sort(function(a, b) {
            var x = a.first_name.toLowerCase();
            var y = b.first_name.toLowerCase();
            if (x < y) {
              return -1 * direction;
            }
            if (x > y) {
              return 1 * direction;
            }
            return 0;
          });

          break;
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
        case "status":
          article_list.sort(function(a, b) {
            var x = a.status ? a.status.toLowerCase() : a.status;
            var y = b.status ? b.status.toLowerCase() : b.status;
            if (x < y) {
              return -1 * direction;
            }
            if (x > y) {
              return 1 * direction;
            }
            return 0;
          });

          break;
        case "join_date":
          article_list.sort(function(a, b) {
            var x = new Date(a.date_joined).toLocaleDateString().toLowerCase();
            var y = new Date(b.date_joined).toLocaleDateString().toLowerCase();
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
#mytableapp thead tr th {
  cursor: pointer;
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
    @apply p-6;
  }

  tbody tr:even {
    @apply bg-white;
  }

  tbody td:first-child {
    @apply pl-16;
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
  td:nth-of-type(1):before {
    content: "Products";
  }

  td:nth-of-type(2):before {
    content: "Color";
  }

  td:nth-of-type(3):before {
    content: "Price";
  }

  td:nth-of-type(4):before {
    content: "Quantity";
  }

  td:nth-of-type(5):before {
    content: "Cost";
  }

  td:nth-of-type(6):before {
    content: "Action";
  }
}

</style>
