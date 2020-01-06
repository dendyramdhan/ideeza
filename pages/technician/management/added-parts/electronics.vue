<template>
  <div class="mt-10">
    <div>
      <div class="hidden xl:flex justify-between">
        <div class="flex">
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

    <table class="mt-10 shadow-md">
      <thead>
      <tr class="text-gray-800 h16">
        <th class="text-left ">Role</th>
        <th class="text-left">Id</th>
        <th class="text-left">Name</th>
        <th class="text-left">Package</th>
        <th class="text-left">Category</th>
        <th class="text-left">Sub-Category</th>
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
        <td> {{Service.sub_category}}</td>

        <td class="">
          <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']"/>
          <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'envelope']"/>
          <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'check']"/>
          <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'pause']"/>
          <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'times']"/>
        </td>
        <td class="lg:text-right text-xs">
          {{Service.time}}
        </td>
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

        <div class="flex items-center">


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

export default {
  name: "added-code-index",
  data: function() {
    return {
      searchTerm: "",
      counterarray: [],
      articleArray: [],
      Services: Services.second_submenu_add_parts_electronics,
      currentviewpoint: this.$store.state.TechnicianProjectStore.offset + 1,
      index: 0,
      length: Services.length / 5 - 1,
      counter: Services.length / this.$store.state.TechnicianProjectStore.scale,
      start: this.$store.state.TechnicianProjectStore.offset * 5 - 1,
      end: this.$store.state.TechnicianProjectStore.offset * 5 + 5
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
  methods:{
    search(e) {
      this.articleArray = [];

      let article_list = this.Services;
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
