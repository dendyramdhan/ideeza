<template>
  <div>
    <div class="md:flex items-center justify-between">
      <h1 class="text-2xl font-bold mr-5">Good Morning {{firstname}}!</h1>
      <div class="md:flex justify-end">
        <div class="bg-white rounded border shadow md:mr-3 mb-3 md:mb-0 py-3 px-5 md:w-48 relative">
          <div class="flex items-center">
            <div>
              <div class="text-sm">Reviews</div>
              <div class="text-3xl font-bold">20</div>
            </div>
            <div class="absolute bottom-0 right-0 m-5">
              <img src="~/static/images/chat-icon.png" class="h-8" alt="chat-icon" />
            </div>
          </div>
        </div>
        <div class="bg-white rounded border shadow md:mr-3 mb-3 md:mb-0 py-3 px-5 md:w-48 relative">
          <div class="flex items-center">
            <div>
              <div class="text-sm">Money earned</div>
              <div class="text-3xl font-bold">350 $</div>
            </div>
            <div class="absolute bottom-0 right-0 m-5">
              <img src="~/static/images/money.png" class="h-8" alt="chat-icon" />
            </div>
          </div>
        </div>
        <div class="bg-white rounded border shadow md:mr-3 mb-3 md:mb-0 py-3 px-5 md:w-48 relative">
          <div class="flex items-center">
            <div>
              <div class="text-sm">Opened orders</div>
              <div class="text-3xl font-bold">25</div>
            </div>
            <div class="absolute bottom-0 right-0 m-5">
              <img src="~/static/images/order-box.png" class="h-8" alt="chat-icon" />
            </div>
          </div>
        </div>
        <div class="bg-white rounded border shadow md:mr-3 mb-3 md:mb-0 py-3 px-5 md:w-48 relative">
          <div class="flex items-center">
            <div>
              <div class="text-sm">Stars</div>
              <div class="text-3xl font-bold">15</div>
            </div>
            <div class="absolute bottom-0 right-0 m-5">
              <img src="~/static/images/star-icon.png" class="h-8" alt="chat-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-sm font-bold text-black md:ml-5 mb-3">My Feed</div>
    <div class="flex mb-2">
      <input type="text" placeholder="Search" class="p-3">
    </div>
    <div class="md:flex">
      <div class="md:w-9/12 mb-5 md:mb-0">
        <simple-table :header="false" :searchbox="true" title="Manage articles" border="border-gray">
          <template v-slot:th>
            <th class="border-t border-b border-blue-300 w-2/5 text-ideeza p-3">
              <font-awesome-icon class="mr-1 text-lg text-black" :icon="['fas', 'sort']" />
              Description</th>
            <th class="border-t border-b border-blue-300 w-1/5 text-ideeza p-3">
              <font-awesome-icon class="mr-1 text-lg text-black" :icon="['fas', 'sort']" />
              Domain</th>
            <th class="border-t border-b border-blue-300 w-1/5 text-ideeza p-3">
              <font-awesome-icon class="mr-1 text-lg text-black" :icon="['fas', 'sort']" />
              Due Date</th>
            <th class="border-t border-b border-blue-300 w-1/5 text-ideeza p-3">
              <font-awesome-icon class="mr-1 text-lg text-black" :icon="['fas', 'sort']" />
              Price</th>
            <th class="border-t border-b border-blue-300 w-1/5 text-ideeza p-3">
              <font-awesome-icon class="mr-1 text-lg text-black" :icon="['fas', 'sort']" />
              Posted before</th>
          </template>
          <tr class="flex w-full mb-4 cursor-pointer" v-for="(project,index) in articleArray" @click="$router.push('/service-provider/projects/detail?id='+project.id)">
            <td class="w-2/5">
              <div class="font-bold text-black">{{project.title}}</div>
              <div class="text-sm">{{project.description}}</div>
            </td>
            <td class="w-1/6">PCB & Asamble</td>
            <td class="w-1/6">{{ts.toLocaleDateString(project.end - project.start)}}</td>
            <td class="w-1/6">10$</td>
            <td class="w-1/6">{{ts.toLocaleDateString(0-project.start)}}</td>
          </tr>
        </simple-table>
        <div class="mt-5 relative">
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
          <div class="lg:absolute flex items-center top-0 w-content lg:w-auto right-0 my-3 lg:my-0 mx-auto lg:mx-0">
            <span class="inline-block">Show</span>
            <select class="inline field ml-2 h-10" @change="changeshowperiod">
              <option v-for="(tabledata, index) in articleArray" v-if="length > index ">{{(index)*5+1}}-{{(index)*5+5}}</option>
              <option>all</option>
            </select>
          </div>
        </div>
      </div>
      <div class="md:w-3/12 md:mx-3">
        <!-- <vc-calendar color="pink" is-expanded :theme="theme" /> -->
        <vc-calendar class="mx-auto bg-white box-shadow rounded mb-3" color="pink" is-expanded :theme="theme" v-model="date" :attributes="attributes" @dayclick="dayClick" />
        <div class="bg-white shadow rounded">
          <div class="py-3 px-5 bg-ideeza text-white text-center rounded">{{date}}</div>
          <hr class="my-1" />
          <ul class="shadow-lg">
            <li class="flex justify-between hover:bg-ideeza-dark py-3 px-5 event" v-for="(Service, index) in articleArray2">
              <div>
                <div class="text text-sm font-bold">{{Service.title}}</div>
                <div class="text text-xs">Completed</div>
              </div>
              <!-- <div class="event-icons text-right">
                <font-awesome-icon class="text text-xs text-gray-500 mr-2" :icon="['fa', 'pen']" />
                <font-awesome-icon class="text text-sm text-gray-500" :icon="['fas', 'times']" />
              </div> -->
            </li>
          </ul>
        </div>
        <!-- <div id="myCalendar" class="vanilla-calendar"></div> -->
      </div>
    </div>
    <!-- {{articleArray2}} -->
  </div>
</template>
<script>
import SimpleTable from "~/components/reusables/Table.vue";
import apiService from "~/apiService/have_token.js";

export default {
  components: {
    SimpleTable
  },
  created() {
    this.date = new Date();
    this.date = this.date.getDate() + ' ' + this.monthNames[this.date.getMonth()]
  },
  mounted() {
    this.firstname = window.$nuxt.$cookies.get('firstname');
    new VanillaCalendar({
      selector: "#myCalendar"
    });

    let sendData = {
      method: "get",
      url: this.geturl,
      data: null
    };

    apiService(sendData, response => {
      console.log(response.data);
      //this.randomNumber = response.data;
      this.articleArrayaxios = response.data;

      this.articleArrayaxios.map(item => {
        this.articleArrayrout.push(item);
        this.articleArray.push(item);
      });

      let endd =
        this.articleArrayrout.length /
        this.$store.state.TechnicianProjectStore.scale +
        1;
      for (let i = 1; i <= endd; i++) {
        this.counterarray.push(i);
      }
    });
  },
  methods: {
    dayClick(day) {
      console.log(this.monthNames[day.date.getMonth()])
      console.log(day.date.getDay())
      this.date = day.date.getDate() + ' ' + this.monthNames[day.date.getMonth()]
    },
    changeshowperiod(e) {
      this.articleArray = [];
      if (e.target.value == "all") {
        this.articleArrayrout.map(item => {
          this.articleArray.push(item);
        });
      } else {
        var a = e.target.value.split("-");
        var a1 = a[0];
        var a2 = a[1];
        // alert("a1:" + a1 + "a2:" + a2);
        this.articleArrayrout.map((item, index) => {
          if (index >= a1 && index <= a2) {
            this.articleArray.push(item);
          }
        });
        this.selectedkey(1);
      }
    },
    selectedkey(e) {
      this.$store.commit("userBlogStore/selectedkeyChange", e - 1);
      // $router.go({path:'/news', force: true})
      console.log(this.currentviewpoint + "_");
      this.currentviewpoint = this.$store.state.userBlogStore.offset + 1;
      this.counter =
        this.articleArray.length / this.$store.state.userBlogStore.scale;
      this.start = this.$store.state.userBlogStore.offset * 5 - 1;
      this.end = this.$store.state.userBlogStore.offset * 5 + 5;
      console.log("start and end :", this.start, this.end);
      // this.$refs.page.$forceUpdate();
    },
    increasekey() {
      if (
        this.currentviewpoint == this.counter ||
        this.currentviewpoint > this.counter
      ) {} else {
        this.$store.commit("userBlogStore/increasekeyChange");
        this.currentviewpoint = this.$store.state.userBlogStore.offset + 1;
        this.counter =
          this.articleArray.length / this.$store.state.userBlogStore.scale;
        this.start = this.$store.state.userBlogStore.offset * 5 - 1;
        this.end = this.$store.state.userBlogStore.offset * 5 + 5;
        // $router.go({path:'/news', force: true})
        // this.$refs.page.$forceUpdate();
      }
    },
    decreasekey() {
      if (this.currentviewpoint == 1 || this.currentviewpoint < 1) {} else {
        this.$store.commit("userBlogStore/decreasekeyChange");
        this.currentviewpoint = this.$store.state.userBlogStore.offset + 1;
        this.counter =
          this.articleArray.length / this.$store.state.userBlogStore.scale;
        this.start = this.$store.state.userBlogStore.offset * 5 - 1;
        this.end = this.$store.state.userBlogStore.offset * 5 + 5;
        // $router.go({path:'/news', force: true})
        // this.$refs.page.$forceUpdate();
      }
    },
  },
  data() {
    return {
      firstname: null,
      date: new Date(),
      monthNames: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ],
      attributes: [{
          key: "today",
          highlight: true,
          dates: new Date()
        },
        {
          dot: {
            color: 'red',
            class: 'my-dot-class',
          },
          dates: [
            new Date(2020, 1, 6), // Jan 1st
            new Date(2020, 1, 10), // Jan 10th
            new Date(2020, 1, 22), // Jan 22nd
          ],
        }
      ],
      ts: new Date(),
      articleArray: [],
      articleArrayaxios: [],
      articleArrayrout: [],
      randomNumber: [],
      counterarray: [],
      geturl: "/feeds/",
      articleArray2: [],
      articleArrayaxios2: [],
      articleArrayrout2: [],
      randomNumber2: [],
      geturl2: "/api/project/completed_project",
      theme: {
        container: {
          light: "ideeza-date-picker"
        },
        arrows: {
          light: "ideeza-arrow"
        }
      },
      blogs: [{
          id: 1,
          name: "How ideeza can make the world a better place",
          date: "10 jul, 2019"
        },
        {
          id: 2,
          name: "How ideeza can make the world a better place",
          date: "10 jul, 2019"
        },
        {
          id: 3,
          name: "How ideeza can make the world a better place",
          date: "10 jul, 2019"
        },
        {
          id: 4,
          name: "How ideeza can make the world a better place",
          date: "10 jul, 2019"
        }
      ],
      projects: [{
          description: {
            title: "Washing machine requirements",
            text: "lorem asdsad asd asd asdas dasd asd asd asd asdasd asd asd qweqwe qwe wqe"
          },
          domain: "PCB & Asamble",
          due_date: "01.01.2020",
          posted_before: "10 mins"
        },
        {
          description: {
            title: "Washing machine requirements",
            text: "lorem asdsad asd asd asdas dasd asd asd asd asdasd asd asd qweqwe qwe wqe"
          },
          domain: "PCB & Asamble",
          due_date: "01.01.2020",
          posted_before: "10 mins"
        },
        {
          description: {
            title: "Washing machine requirements",
            text: "lorem asdsad asd asd asdas dasd asd asd asd asdasd asd asd qweqwe qwe wqe"
          },
          domain: "PCB & Asamble",
          due_date: "01.01.2020",
          posted_before: "10 mins"
        },
        {
          description: {
            title: "Washing machine requirements",
            text: "lorem asdsad asd asd asdas dasd asd asd asd asdasd asd asd qweqwe qwe wqe"
          },
          domain: "PCB & Asamble",
          due_date: "01.01.2020",
          posted_before: "10 mins"
        },
        {
          description: {
            title: "Washing machine requirements",
            text: "lorem asdsad asd asd asdas dasd asd asd asd asdasd asd asd qweqwe qwe wqe"
          },
          domain: "PCB & Asamble",
          due_date: "01.01.2020",
          posted_before: "10 mins"
        }
      ]
    };
  }
};

</script>
<style>
.event:hover .text {
  color: white;
}

</style>
