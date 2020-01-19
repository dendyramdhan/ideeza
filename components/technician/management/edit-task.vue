<template>
  <div @click.self="close" class="popup-overlay">
    <div
      class="popup-overlay--contents add-new-container"
      v-for="(info,index) in articleArray"
      v-if="index==0"
    >
      <!--Header-->
      <div class="flex justify-between border-b-2 border-solid border-ideeza pb-5 px-20 pt-20">
        <input
          v-model="info.name"
          type="text"
          class="outline-none border-0 text-ideeza text-xl placeholder-ideeza lg:w-1/2"
          placeholder="Add new task...."
          @change="taskname"
        />
        <!-- <span
          class="outline-none border-0 text-ideeza text-xl placeholder-ideeza lg:w-1/2"
        >{{info.name}}</span> -->
        <font-awesome-icon
          @click="close"
          class="mr-1 h-4 cursor-pointer text-gray-500 hover:text-gray-800"
          :icon="['fas', 'times']"
        />
      </div>

      <!--Contents-->
      <div class="p-20 mt-10 flex">
        <div class="lg:w-1/2">
          <div class="flex justify-between items-center">
            <h1 class="text-ideeza-dark font-semibold">Task Description</h1>
            <!-- {{articleArray}} -->
            <div class="flex items-center text-gray-500 hover:text-gray-800 cursor-pointer">
              <!-- <span class="text-sm inline-block mr-1">Edit</span>
              <font-awesome-icon @click="close" class="mr-1 h-3" :icon="['fas', 'pen']" /> -->
            </div>
          </div>
          <div class="mt-5">
            <textarea
        placeholder="Add project description here ...." @change="taskdescription" style="width:100%;height:150px;"
      >{{info.description}}</textarea>
            <!-- <p class="p-3 bg-gray-100 rounded-sm">{{info.description}}</p> -->
          </div>
          <div class="mt-10">
            <span class="inline-block mb-2">Attach</span>
            <img id="image" />
            <form enctype="multipart/form-data">
            <input
          type="file"
          @change="fileseleted"
          ref="file_upload2"
          class="btn btn-normal btn--ideeza px-10 py-4 block lg: iinline-block"
          style="display:none"
        />
         </form>
         <button
       class="ml-5 btn btn-small btn--ideeza px-2 text-xs"
        @click="$refs.file_upload2.click()"
      >SelectImage</button>
            <!-- <FileField /> -->
          </div>
        </div>

        <div class="lg:ml-20">
          <div class="flex items-center">
            <span class="text-gray-800 inline-block">
              Task Duration:
              <span class="text-ideeza">26 Oct - 29 Nov</span>
            </span>
            <!--Calendar-->
            <vc-date-picker
              v-model="dateRange"
              color="pink"
              mode="range"
              value
              :popover="{ placement: 'bottom', visibility: 'click' }"
              @change="taskdeadline"

            >
              <font-awesome-icon
                class="ml-2 h-4 cursor-pointer text-gray-800"
                :icon="['fas', 'calendar-alt']"
              />
            </vc-date-picker>
          </div>

          <div class="mt-5 w-40">
            <span class="inline-block mb-2">Mark Status</span>
             <select  @change="taskstatus"   styleHeight="mini">
              <option v-for="options in markStatusData" :value="options">{{options}}</option>
            </select>
            <!-- <DropDownField :data="markStatusData" selected="Completed" styleHeight="mini" /> -->
          </div>

          <div class="mt-10 relative">
            Assigned members:
            <button
              @click.self="showMembers = true"
              class="ml-5 btn btn-small btn--ideeza px-2 text-xs"
            >Add +</button>

            <div
              v-click-outside="hideMembers"
              v-if="showMembers"
              class="members-container absolute left-0 z-50 bg-white shadow-md p-2"
            >
              <div>
                <SearchField bg="bg-gray-100" placeholder="search member" />
              </div>
              <div
                class="mt-2 flex justify-between items-center"
                v-for="info2 in articleArray2"
              >
                <div class="flex items-center">
                  <img class="avatar" :src="avata_img_url+info2.avatar" alt />
                  <span class="member-name">{{info2.firstname}}</span>
                </div>
                 <input type="checkbox" @click="taskuser(info2.userid)"/>
                <!-- <CheckBoxField /> -->
              </div>
            </div>

            <div>
              <div class="mt-2 flex justify-between items-center"  v-for="member in info.assigned_users" >
                <div class="flex items-center">
                  <img class="avatar" :src="avata_img_url + member.avatar" />
                  <span class="member-name">{{member.name}}</span>
                  
                </div>
               

                <font-awesome-icon
                  class="mr-2 h-3 cursor-pointer text-ideeza"
                  :icon="['fas', 'trash']"
                />
              </div>
            </div>
          </div>

          <div class="mt-10">
            Notification center:
            <button
              @click.self="showNotifications = true"
              class="ml-5 btn btn-small btn--ideeza px-2 text-xs"
            >
              Compose
              <font-awesome-icon class="ml-2 h-3 text-white" :icon="['fas', 'paper-plane']" />
            </button>
          </div>
          <div class="mt-10">
            <div class="flex">
              <div class="mr-2">
                <img class="avatar" src="https://randomuser.me/api/portraits/men/20.jpg" />
              </div>
              <div class>
                <div class="flex justify-between">
                  <span class="inline-block">
                    <span class="text-xs block">He Someone</span>
                    <span class="text-xs font-semibold">Due date problem</span>
                  </span>
                  <span class="text-xs text-ideeza-dark">30 min ago</span>
                </div>

                <p class="text-sm mt-3">
                  Lorem ipsum dolor sit amet, consectetur
                  <br />adipiscing elit. Etiam efficitur
                  <br />fermentum consectetur.
                  <br />Pellentesque et velit mattis,
                  <br />sagittis magna ac, vulputate neque.
                </p>

                <div class="mt-5 flex">
                  <div class="mr-5 text-xs text-gray-500 cursor-pointer">
                    <font-awesome-icon class="mr-1 h-3" :icon="['fas', 'reply']" />Reply
                  </div>
                  <div class="mr-5 text-xs text-gray-500 cursor-pointer">
                    <font-awesome-icon class="mr-1 h-3" :icon="['fas', 'share']" />forward
                  </div>
                  <div class="mr-5 text-xs text-gray-500 cursor-pointer">
                    <font-awesome-icon class="mr-1 h-3" :icon="['fas', 'trash']" />delete
                    <!-- 
                       <span v-for="(info,index) in articleArray" v-if="index==0">
           {{info.name}}

          </span>
                    {{articleArray}}-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextAreaField from "~/components/form/text-area.vue";
import DropDownField from "~/components/form/dropdown-field.vue";
import SearchField from "~/components/form/search-mini.vue";
import CheckBoxField from "~/components/form/checkbox-plus.vue";
import FileField from "~/components/form/file-field.vue";

import Services from "~/data/TechnicianProjectApi.json";

import apiService from "~/apiService/have_token.js";

export default {
  name: "new-project",
  data: function() {
    return {
      dateRange: null,
      showMembers: false,
      showNotifications: false,
      markStatusData: ["Waiting", "Active", "Completed", "Over Due"],
      taskTitle: "Make Iron from steel",
      ts: new Date(),
      geturl: "/api/project/get_task_detail",
      articleArray: [],
      articleArrayrout: [],
      articleArrayaxios: [],
      geturl2: "/api/user/get_list",
      articleArray2: [],
      articleArrayaxios2: [],
      articleArrayrout2: [],
      randomNumber2: [],
      projectidd: null,
      randomNumber: {},
      avata_img_url: process.env.avatar_base_url,
      project_img_url: process.env.project_image_url,
      userid: null,
      name: null,
      description: null,
      start: null,
      end: null,
      status: null,
      domain: null,
      file: null,
      user: [],
    };
  },
  mounted() {

    let sendData = {
      method: "get",
      url: this.geturl2,
      data: null
    };

    apiService(sendData, response => {
      console.log(response.data);
      // this.randomNumber = response.data;
      this.articleArrayaxios2 = Object.values(response.data.data);

      this.articleArrayaxios2.map(item => {
        this.articleArrayrout2.push(item);
        this.articleArray2.push(item);
      });      
    });


    this.projectidd = window.$nuxt.$cookies.get("techniciantaskid");
    this.userid = window.$nuxt.$cookies.get("userid");
    const formData = new FormData();
    formData.set("taskid", this.projectidd);
    let sendData2 = {
      method: "post",
      url: this.geturl,
      data: formData
    };

    apiService(sendData2, response => {
      console.log(response.data);
      this.randomNumber = response.data;
      this.articleArrayaxios = Object.values(response.data);

      this.articleArrayaxios.map(item => {
        this.articleArrayrout.push(item);
        this.articleArray.push(item);
      });
    });


  },
  components: {
    TextAreaField,
    DropDownField,
    SearchField,
    CheckBoxField,
    FileField
  },
  methods: {
    taskname(event) {
      this.name = event.target.value;
    },
    taskdescription(event){
      this.description = event.target.value;
    },
    taskdeadline(event){
      this.dateRange = event.target.value;
      console.log("datapicker:",this.dateRange )      
    },
    fileseleted(evt) {
      var reader = new FileReader();
      reader.onload = function(e) {
        // get loaded data and render thumbnail.
        document.getElementById("image").src = e.target.result;
      };
      // read the image file as a data URL.
      reader.readAsDataURL(evt.target.files[0]);

      // this.file = this.$refs.file.files[0];
      console.log("file_upload:", evt);
      this.file = evt.target.files[0];
    },
    taskstatus(event){
      this.status = event.target.value;
    },
    taskasignlayer(event){
      this.domain = event.target.value;
    },
    taskuser(event){
      this.user.push(event)      
    },
    close() {
      this.$emit("onClose");
    },
    hideMembers() {
      this.showMembers = false;
    }
  }
};
</script>

<style scoped>
.add-new-container {
  @apply w-full h-full;
  max-width: 1300px;
  max-height: 900px;
}
.members-container {
  height: 200px;
  overflow-y: auto;
}
.member-name {
  @apply text-gray-600 ml-2;
  font-size: 10px;
  font-weight: lighter;
}
.avatar {
  @apply w-4 rounded-full inline;
}
.popup-body {
  max-height: 60vh;
  overflow-y: auto;
}
</style>
