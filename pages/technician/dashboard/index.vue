<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />
    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="main-contents">
        <!--Status Cards-->
        <div class="lg:flex w-full cards-wrapper items-center">
          <div class="card-container lg:mr-5 mr-0 mt-5 lg:mt-0">
            <h1 class="text-3xl font-semibold text-gar-800 pl-3 lg:pl-0">Good morning, {{name}}!</h1>
          </div>
          <div class="card-container lg:mr-5 mr-0 mt-5 lg:mt-0">
            <div class="mx-auto lg:mx-none status-card bg-white shadow-lg rounded-lg mt-5 px-3 py-5 relative">
              <div class="text-base">Open Tasks</div>
              <div class="flex justify-between items-center content-center">
                <div class="text-gray-800 text-bold text-xl lg:text-3xl">
                  <div>56</div>
                </div>
                <img src="~/static/images/opened-tickets.png" class="w-12 object-center object-right mr-5" alt />
              </div>
            </div>
          </div>
          <div class="card-container lg:mr-5 mr-0 mt-5 lg:mt-0">
            <div class="mx-auto lg:mx-none status-card bg-white shadow-lg rounded-lg mt-5 px-3 py-5 relative">
              <div class="text-base">New Tasks</div>
              <div class="flex justify-between items-center content-center">
                <div class="text-gray-800 text-bold text-xl lg:text-3xl">
                  <div>56</div>
                </div>
                <img src="~/static/images/un-opened-tickets.png" class="w-12 object-center object-right mr-5" alt />
              </div>
            </div>
          </div>
          <div class="card-container mt-5 lg:mr-5 lg:mt-0">
            <div class="mx-auto lg:mx-none status-card bg-white shadow-lg rounded-lg mt-5 px-3 py-5 relative">
              <div class="text-base">On Hold Tasks</div>
              <div class="flex justify-between items-center content-center">
                <div class="text-gray-800 text-bold text-xl lg:text-3xl">
                  <div>56</div>
                </div>
                <img src="~/static/images/on-hold-tickets.png" class="w-12 object-center object-right mr-5" alt />
              </div>
            </div>
          </div>
          <div class="card-container mt-5 lg:mt-0">
            <div class="mx-auto lg:mx-none status-card bg-white shadow-lg rounded-lg mt-5 px-3 py-5 relative">
              <div class="text-base">Finished Tasks</div>
              <div class="flex justify-between items-center content-center">
                <div class="text-gray-800 text-bold text-xl lg:text-3xl">
                  <div>56</div>
                </div>
                <img src="~/static/images/finished-tickets.png" class="w-12 object-center object-right mr-5" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="md:flex mt-10 justify-between">
          <div class="md:w-2/3 md:mr-5 w-full">
            <h1 class="text-xl font-semibold text-gar-800 pl-3 lg:pl-0">Task Management</h1>
            <!--List-->
            <table class="mt-10 shadow-lg">
              <thead>
                <tr class="text-black font-semibold h16">
                  <th colspan="2" class="text-left">Tasks&nbsp;
                    <font-awesome-icon class="mr-1 text-lg text-black" :icon="['fas', 'sort']" />
                  </th>
                  <th class="text-left">Domain&nbsp;
                    <font-awesome-icon class="mr-1 text-lg text-black" :icon="['fas', 'sort']" />
                  </th>
                  <th class="text-left">Due Date&nbsp;
                    <font-awesome-icon class="mr-1 text-lg text-black" :icon="['fas', 'sort']" />
                  </th>
                  <th class="text-left">Task Status&nbsp;
                    <font-awesome-icon class="mr-1 text-lg text-black" :icon="['fas', 'sort']" />
                  </th>
                  <th class="text-right">
                    <font-awesome-icon class="mr-1 text-lg h-4" :icon="['fas', 'ellipsis-h']" />
                  </th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(task,index) in articleArray2">
                  <tr class="bg-white">
                    <td colspan="2" class="cursor-pointer text-black" @click="taskdetailtrue(task.id)">
                      <!-- @click.self="detailTask=true;window.$nuxt.$cookies.set('techniciantaskid', task.id)" -->
                      <!-- <font-awesome-icon class="mr-1 text-lg text-ideeza" :icon="['fas', 'caret-up']" /> -->
                      {{task.name}}
                    </td>
                    <td class="text-black">{{task.domain}}</td>
                    <td class="text-center">
                      <div class="text-sm text-gray-600 w-3/4 bg-gray-700 h-8 text-center rounded-full relative">
                        <span class="absolute due-date text-white">{{(task.end - task.start)/100000000}}</span>
                        <div class="bg-ideeza rounded-full h-8" :style="{ width: ((task.end - task.start)/100000000) +'%'}"></div>
                      </div>
                    </td>
                    <td class="text-black">{{task.status}}</td>
                    <td class="notifications">
                      <font-awesome-icon v-if="index == 1" class="mr-1 text-lg text-blue-700" :icon="['fas', 'bell']" />
                      <font-awesome-icon v-else-if="index == 2" class="mr-1 text-lg text-red-500" :icon="['far', 'clock']" />
                      <font-awesome-icon v-else class="mr-1 text-lg text-ideeza-gold" :icon="['fas', 'exclamation-circle']" />
                    </td>
                    <!-- <td class="cursor-pointer" @click.self="expand(task.id)">
              <font-awesome-icon
                class="mr-1 text-lg text-ideeza"
                :icon="['fas', 'caret-up']"
                v-if="task.id in expanded&&expanded[task.id]==true"
              />
              <font-awesome-icon
                class="mr-1 text-lg text-ideeza"
                :icon="['fas', 'caret-down']"
                v-else
              />
              {{task.name}}
            </td>
            <td>{{task.domain}}</td>
            <td>
                <img v-for="image in task.assigned_to" :src="image.url" class="avatar" />-->
                    <!-- <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
                                              <img class="avatar" src="https://randomuser.me/api/portraits/men/20.jpg">
                <img class="avatar" src="https://randomuser.me/api/portraits/men/12.jpg">-->
                    <!-- </td>
            <td class="text-center">
              <div
                class="text-sm text-gray-600 w-3/4 bg-white h-8 text-center rounded-full relative"
              >
                <span class="absolute due-date text-black">{{task.timeline.date}}</span>
                <div
                  class="bg-ideeza rounded-full h-8"
                  :style="{ width: task.timeline.progress+'%'}"
                ></div>
              </div>
            </td>
            <td class="status status--completed" v-if="task.status == 1">completed</td>
            <td v-if="task.status == 2" class="status status--over">over due</td>
                <td v-if="task.status == 3" class="status status--progress">in progress</td>-->
                    <!-- 1 for completed, 2 for over_due, 3 for in_progress -->
                    <!-- <td class="notifications">
              <font-awesome-icon
                v-if="task.status == 1"
                class="mr-1 text-lg text-ideeza-gold"
                :icon="['fas', 'exclamation-circle']"
              />
              <font-awesome-icon
                v-else-if="task.status == 2"
                class="mr-1 text-lg text-blue-700"
                :icon="['fas', 'bell']"
              />
              <font-awesome-icon
                v-else-if="task.status == 3"
                class="mr-1 text-lg text-red-500"
                :icon="['far', 'clock']"
              />
                </td>-->
                  </tr>
                  <!-- <template v-if="task.id in expanded&&expanded[task.id]==true">
            <tr class="bg-pink-200" v-for="(subtask) in task.subtasks">
              <td
                class="cursor-pointer md:text-right"
                @click.self="detailTask=true"
              >{{subtask.name}}</td>
              <td>{{subtask.domain}}</td>
              <td>
              <img v-for="image in subtask.assigned_to" :src="image.url" class="avatar" />-->
                  <!-- <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/20.jpg">
              <img class="avatar" src="https://randomuser.me/api/portraits/men/12.jpg">-->
                  <!-- </td>
              <td class="text-center">
                <div
                  class="text-sm text-gray-600 w-3/4 bg-white h-8 text-center rounded-full relative"
                >
                  <span class="absolute due-date text-black">{{subtask.timeline.date}}</span>
                  <div
                    class="bg-ideeza rounded-full h-8"
                    :style="{ width: subtask.timeline.progress+'%'}"
                  ></div>
                </div>
              </td>
              <td class="status status--completed" v-if="subtask.status == 1">completed</td>
              <td v-if="subtask.status == 2" class="status status--over">over due</td>
              <td v-if="subtask.status == 3" class="status status--progress">in progress</td>-->
                  <!-- 1 for completed, 2 for over_due, 3 for in_progress -->
                  <!-- <td class="notifications">
                <font-awesome-icon
                  v-if="subtask.status == 1"
                  class="mr-1 text-lg text-ideeza-gold"
                  :icon="['fas', 'exclamation-circle']"
                />
                <font-awesome-icon
                  v-else-if="subtask.status == 2"
                  class="mr-1 text-lg text-blue-700"
                  :icon="['fas', 'bell']"
                />
                <font-awesome-icon
                  v-else-if="subtask.status == 3"
                  class="mr-1 text-lg text-red-500"
                  :icon="['far', 'clock']"
                />
              </td>
            </tr>
              </template>-->
                </template>
                <!-- <tr class="cursor-pointer" @click.self="editTask=true">
          <td >
            <font-awesome-icon class="mr-1 text-lg text-ideeza" :icon="['fas', 'caret-down']"/> 
            Iron Making
          </td>
          <td>Cover</td>
          <td>
            <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/12.jpg">
          </td>
          <td class="text-center">
            <div class="text-sm text-gray-600 w-3/4 bg-white h-8 text-center rounded-full relative">
              <span class="absolute due-date text-black">16.11.2019</span>
              <div class="bg-ideeza rounded-full h-8" style="width:80%;">
              </div>
            </div>
          </td>
          <td class="status status--over">over due</td>
          <td class="notifications">
            <font-awesome-icon class="mr-1 text-lg text-blue-700" :icon="['fas', 'bell']"/>
          </td>


        </tr>
        <tr class="bg-ideeza-100">
          <td class="cursor-pointer" @click.self="editTask=true" >
            <font-awesome-icon class="mr-1 text-lg text-ideeza" :icon="['fas', 'caret-down']"/> 
            Iron Making
          </td>
          <td>Code</td>
          <td>
            <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/12.jpg">
          </td>
          <td class="text-center">
            <div class="text-sm text-gray-600 w-3/4 bg-white h-8 text-center rounded-full relative">
              <span class="absolute due-date text-black">16.11.2019</span>
              <div class="bg-ideeza rounded-full h-8" style="width:60%;">
              </div>
            </div>
          </td>
          <td class="status status--progress">in progress</td>
          <td class="notifications">
            <font-awesome-icon class="mr-1 text-lg text-red-500" :icon="['far', 'clock']"/>
          </td>


        </tr>
        <tr class="">
          <td class="cursor-pointer" @click.self="editTask=true" >
            <font-awesome-icon class="mr-1 text-lg text-ideeza" :icon="['fas', 'caret-down']"/> 
            Iron Making
          </td>
          <td>Electronics</td>
          <td>
            <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/12.jpg">
          </td>
          <td class="text-center">
            <div class="text-sm text-gray-600 w-3/4 bg-white h-8 text-center rounded-full relative">
              <span class="absolute due-date text-black">16.11.2019</span>
              <div class="bg-ideeza rounded-full h-8" style="width:90%;">
              </div>
            </div>
          </td>
          <td class="status status--completed">COMPLETED</td>
          <td class="notifications">
            <font-awesome-icon class="mr-1 text-lg text-ideeza-gold" :icon="['fas', 'exclamation-circle']"/> 
          </td>


            </tr>-->
              </tbody>
            </table>
            <h1 class="text-xl font-semibold text-gar-800 pl-3 lg:pl-0 pb-3 mb-3 mt-3">Message Center</h1>
            <div>
              <div class="xl:hidden cursor-pointer border-light-gray w-10 h-8 relative mt-2 ml-2 bg-white">
                <font-awesome-icon class="ml-1 h-6 text-gray-600 absolute-center-h-v" :icon="['fas', 'sliders-h']" />
              </div>
            </div>
            <div class="shadow-lg">
              <table class="mt-10">
                <thead>
                  <tr class="text-gray-800 h16">
                    <th class="text-center">Username &nbsp;
                      <font-awesome-icon class="mr-1 text-lg text-black" :icon="['fas', 'sort']" />
                    </th>
                    <th class="text-center">Role &nbsp;
                      <font-awesome-icon class="mr-1 text-lg text-black" :icon="['fas', 'sort']" />
                    </th>
                    <th class="text-center">Actions</th>
                    <th class="text-right">
                      <font-awesome-icon class="mr-1 h-4 cursor-pointer" :icon="['fas', 'ellipsis-h']" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr :class="index%2!=0?'bg-white':'bg-gray-100'" v-for="(tabledata, index) in articleArray" v-if="start < index && index < end ">
                    <td class="texct-center" @click="$router.push('/technician/messages')">{{tabledata.ArticlesName}}{{index}}{{tabledata.id}}</td>
                    <td class="text-center" @click="$router.push('/technician/messages')">{{tabledata.role}}</td>
                    <td class="lg:text-right">
                      <nuxt-link :to="{ path: '/technician/profile', query: { id: tabledata.id}}">
                        <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']" />
                      </nuxt-link>
                      <nuxt-link @click.stop :to="{ path: '/technician/messages', query: { id: tabledata.id}}">
                        <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'envelope']" />
                      </nuxt-link>
                      <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'check']" @click.stop="onApproveWork" />
                      <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'pause']" @click.stop="onPauseWork" />
                      <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'times']" @click.stop="onCancelWork" />
                    </td>
                    <td class="lg:text-right text-xs">5 mins ago</td>
                  </tr>
                </tbody>
              </table>
              <!--Table Stats-->
              <div class="mt-5 lg:flex justify-end">
                <div class="p-3 lg:flex justify-between">
                  <!--Paging-->
                  <div class="flex items-center">
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
                      <font-awesome-icon class="ml-2 h-4 cursor-pointer" :icon="['fas', 'angle-double-right']" />
                    </span>
                  </div>
                  <div class="flex items-center">
                    <span class="inline-ock ml-32">Show</span>
                    <select class="field field--border-none ml-2 h-10" @change="changeshowperiod">
                      <option v-for="(tabledata, index) in articleArray" v-if="length > index ">{{(index)*5+1}}-{{(index)*5+5}}</option>
                      <option>All</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 lg:mt-0 md:w-1/3">
            <vc-calendar class="mx-auto bg-white box-shadow rounded mb-3" color="pink" is-expanded :theme="theme" :attributes="attributes" @dayclick="dayClick" />
            <div class="bg-white shadow rounded pink-scroll overflow-y-auto" style="height: 370px">
              <div class="py-3 px-5 bg-ideeza text-white text-center rounded">{{date}}</div>
              <hr class="my-1" />
              <ul class="shadow-lg">
                <li class="flex justify-between hover:bg-ideeza-dark py-3 px-5 event" v-for="task in tasks">
                  <div>
                    <div class="text text-sm font-bold">{{task.title}}</div>
                    <div class="text text-xs">{{task.duration}}</div>
                  </div>
                  <div class="event-icons text-right">
                    <font-awesome-icon class="text text-xs text-gray-500 mr-2 cursor-pointer" :icon="['fa', 'pen']" @click="onEditTask" />
                    <font-awesome-icon class="text text-sm text-gray-500 cursor-pointer" :icon="['fas', 'times']" @click="onDeleteTask" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- <div class="messages mt-5 lg:mt-0 lg:w-1/3">
            <h1 class="text-xl font-semibold text-gar-800 pl-3 lg:pl-0">Task List</h1>
            <div class="bg-white shadow-md mt-5">
              <div class="flex justify-between p-6">
                <span class="text-gray-500 text-sm">2 tasks completed out of {{tasks.length}}</span>
                <div class="text-gray-500 text-sm flex justify-between items-center">
                  <font-awesome-icon class="h-4 cursor-pointer" :icon="['fas', 'chevron-left']" />
                  <span class="mx-2">January 2020</span>
                  <font-awesome-icon class="h-4 cursor-pointer" :icon="['fas', 'chevron-right']" />
                </div>
                <font-awesome-icon class="mr-1 h-4 cursor-pointer" :icon="['fas', 'ellipsis-h']" />
              </div>
              <div
                class="p-6 border-t border-solid border-gray-300 flex justify-between items-center text-gray-600 hover:bg-ideeza-dark hover:text-white"
                v-for="task in tasks"
              >
                <div>
                  <span class="font-semibold text-sm block">
                    <nuxt-link to="/technician/tasklist">{{task.title}}</nuxt-link>
                  </span>
                  <span class="text-xs block">{{task.duration}}</span>
                </div>
                <div>
                  <font-awesome-icon
                    class="mr-3 h-4 cursor-pointer inline"
                    :icon="['fas', 'pen']"
                    @click="onEditTask"
                  />
                  <font-awesome-icon
                    class="h-4 cursor-pointer inline"
                    :icon="['fas', 'times']"
                    @click="onDeleteTask"
                  />
                </div>
              </div>
            </div>
          </div>-->
        </div>
      </div>
    </div>
    <detail-task :edit="false" @onClose="detailTask=false" @onEdit="detailTask=false;editTask=true" v-if="detailTask" @complete="detailTask=false;completeTask=true" :parentData="sendparentdata" />
  </div>
</template>
<script>
import LeftMenu from "~/components/technician/common-left-side-menu.vue";

import articles from "~/json/messageCenter.json";
import projects from "~/data/TechnicianProjectApi.json";
import tasklists from "~/json/tasklist.json";
import apiServiceWithToken from "~/apiService/have_token.js";
import DetailTask from "~/components/technician/management/detail-task.vue";
export default {
  layout: "technician",
  name: "dashboard-index",
  components: {
    LeftMenu,
    DetailTask
  },
  data: function() {
    return {
      avatar_base_url: process.env.avatar_base_url,
      detailTask: false,
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
      years: [
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021"
      ],
      monthNames: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ],
      projects: projects.firstproject,
      tasks: [],
      theme: {
        container: {
          light: "ideeza-date-picker"
        },
        arrows: {
          light: "ideeza-arrow"
        }
      },
      searchTerm: "",
      articles: articles,
      articleArray: [],
      currentSort: "name",
      currentSortDir: "asc",
      currentviewpoint: this.$store.state.userBlogStore.offset + 1,
      index: 0,
      length: articles.length / 5 - 1,
      counter: articles.length / this.$store.state.userBlogStore.scale,
      start: this.$store.state.userBlogStore.offset * 5 - 1,
      end: this.$store.state.userBlogStore.offset * 5 + 5,
      counterarray: [],
      name: "",
      date: null,
      projectidd: '00f604de-d205-48e9-888c-a2fea41b0f06',
      articleArrayaxios2: null,
      randomNumber2: null,
      articleArray2: [],
      geturl2: "/api/project/get_tasks"
    };
  },

  created: function() {
    this.date = new Date();
    this.date = this.date.getDate() + ' ' + this.monthNames[this.date.getMonth()]
    this.$store.commit("userBlogStore/viewflagchange2");
    let i = 1;
    let array1 = [];
    let endd = articles.length / this.$store.state.userBlogStore.scale + 1;
    for (i = 1; i <= endd; i++) {
      array1.push(i);
    }
    this.counterarray = array1;
    // console.log("array1:", array1);
    // console.log("articles:", this.articles);

    this.articles.map(item => {
      this.articleArray.push(item);
    });
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  mounted() {
    let firstname = window.$nuxt.$cookies.get("firstname");
    let lastname = window.$nuxt.$cookies.get("lastname");
    this.name = firstname + " " + lastname;

    let getalltasksurl = "/api/project/technician/get_all";
    let getalltasksData = {
      method: "get",
      url: getalltasksurl,
      data: null
    };

    apiServiceWithToken(getalltasksData, response => {
      if (response.data["success"] == true) {
        this.tasks = response.data["data"];
        console.log("tasks: ", response.data["data"]);
      }
    });
    const formData = new FormData();
    formData.set("projectid", this.projectidd);
    let sendData2 = {
      method: "post",
      url: this.geturl2,
      data: formData
    };

    apiServiceWithToken(sendData2, response => {
      console.log(response.data);
      this.randomNumber2 = response.data;
      this.articleArrayaxios2 = Object.values(response.data.tasks);

      this.articleArrayaxios2.map(item => {
        this.articleArray2.push(item);
      });
    });
  },
  methods: {
    taskdetailtrue(myid) {
      window.$nuxt.$cookies.set("techniciantaskid", myid);
      console.log("taskid:", window.$nuxt.$cookies.get("techniciantaskid"));
      this.sendparentdata = myid;
      this.detailTask = true;
    },
    dayClick(day) {
      console.log(this.monthNames[day.date.getMonth()])
      console.log(day.date.getDay())
      this.date = day.date.getDate() + ' ' + this.monthNames[day.date.getMonth()]
    },
    changeshowperiod(e) {
      this.articleArray = [];
      if (e.target.value == "all") {
        this.articles.map(item => {
          this.articleArray.push(item);
        });
      } else {
        var a = e.target.value.split("-");
        var a1 = a[0];
        var a2 = a[1];
        // alert("a1:" + a1 + "a2:" + a2);
        this.articles.map((item, index) => {
          if (index >= a1 && index <= a2) {
            this.articleArray.push(item);
          }
        });
      }
    },
    search(e) {
      this.articleArray = [];

      let article_list = this.articles;
      article_list.map(element => {
        const a_text = element.ArticlesName.toLowerCase() + "";
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

    onEditTask() {},
    onDeleteTask() {},
    onApproveWork() {},
    onPauseWork() {},
    onCancelWork() {}
  }
};

</script>
<style scoped>
.pink-scroll::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

.pink-scroll::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}

.pink-scroll::-webkit-scrollbar-thumb {
  background-color: #ff09d0;
  border: 2px solid #ff09d0;
}

.due-date {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.cards-wrapper {
  max-width: 1530px;
}

.status-card {
  width: 100%;
  height: 100px;
}

.success-stories {
  width: 100%;
  max-width: 860px;
  max-height: 600px;
}

.overlay {
  background: rgba(0, 0, 0, 0.2);
}

.orders {
  width: 100%;
  max-width: 1530px;
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

@screen md {
  .status-card {
    /*width: 200px;
      height: 100px;*/
  }
}

@screen lg {
  .card-container {
    @apply w-1/4;
  }

  .status-card {
    height: 160px;
  }

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

@screen lg {
  .card-container {
    @apply w-1/4;
  }

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
