<template>
  <div @click.self="close" class="popup-overlay">
    <div class="popup-overlay--contents add-new-container">
      <!--Header-->
      <div class="flex justify-between border-b-2 border-solid border-ideeza pb-5 px-20 pt-20">
        <input type="text" class="outline-none border-0 text-ideeza text-xl placeholder-ideeza lg:w-1/2" @change="taskname" placeholder="Add name for the task...." />
        <font-awesome-icon @click="close" class="mr-1 h-4 cursor-pointer text-gray-500 hover:text-gray-800" :icon="['fas', 'times']" />
      </div>
      <!--Contents-->
      <div class="p-5 md:p-20 mt-10 md:flex popup-body">
        <div class="lg:w-1/2">
          <div class="flex justify-between items-center">
            <h1 class="text-ideeza-dark font-semibold">Task Description</h1>
            <!-- <div class="flex items-center text-gray-500 hover:text-gray-800 cursor-pointer">
              <span class="text-sm inline-block mr-1">Edit</span>
              <font-awesome-icon @click="close" class="mr-1 h-3" :icon="['fas', 'pen']" />
            </div> -->
          </div>
          <div class="mt-5">
            <textarea placeholder="Add project description here ...." @change="taskdescription" style="width:100%;height:150px;"></textarea>
          </div>
          <div class="mt-10">
            <span class="inline-block mb-2">Attach</span>
            <!-- <FileField /> -->
            <img id="image" />
            <form enctype="multipart/form-data">
              <input type="file" @change="fileseleted" ref="file_upload" class="btn btn-normal btn--ideeza px-10 py-4 block lg: iinline-block" style="display:none" />
            </form>
            <button class="ml-5 btn btn-small btn--ideeza px-2 text-xs" @click="$refs.file_upload.click()">SelectImage</button>
          </div>
        </div>
        <div class="lg:ml-20">
          <div class="flex items-center">
            <span class="text-gray-800 inline-block">Task Duration</span>
            <!--Calendar-->
            <vc-date-picker v-model="dateRange" color="pink" mode="range" :value="dateRange" :popover="{ placement: 'bottom', visibility: 'click' }" @change="taskdeadline">
              <font-awesome-icon class="ml-2 h-4 cursor-pointer text-gray-800" :icon="['fas', 'calendar-alt']" />
            </vc-date-picker>
          </div>
          <div class="mt-5 w-40">
            <span class="inline-block mb-2">Mark Status</span>
            <!-- <DropDownField :data="markStatusData" styleHeight="mini" /> -->
            <select @change="taskstatus" styleHeight="mini">
              <option v-for="options in markStatusData" :value="options">{{options}}</option>
            </select>
          </div>
          <div class="mt-10 relative">
            Assigned members:
            <button @click.self="showMembers = true" class="ml-5 btn btn-small btn--ideeza px-2 text-xs">Add +</button>
            <div v-click-outside="hideMembers" v-if="showMembers" class="members-container absolute left-0 z-50 bg-white shadow-md p-2">
              <div>
                <SearchField bg="bg-gray-100" placeholder="search member" />
              </div>
              <div class="mt-2 flex justify-between items-center" v-for="info in articleArray">
                <div class="flex items-center">
                  <!-- <img class="avatar" :src="avata_img_url+info.avatar" alt /> -->
                  <span class="member-name">{{info.first_name}}</span>
                </div>
                <input type="checkbox" @click="taskuser(info.id)" />
                <!-- <CheckBoxField  /> -->
              </div>
            </div>
          </div>
          <div class="mt-10">
            Notification center:
            <button @click.self="showNotifications = true" class="ml-5 btn btn-small btn--ideeza px-2 text-xs">
              Compose
              <font-awesome-icon class="ml-2 h-3 text-white" :icon="['fas', 'paper-plane']" />
            </button>
          </div>
          <div class="mt-10 rounded-lg p-5 bg-gray-200">
            <span class="text-xs">Inbox is empty</span>
          </div>
          <div class="my-10">
            <span class="inline-block mb-2">Assigned Layer</span>
            <select @change="taskasignlayer" styleHeight="mini">
              <option v-for="options in layers" :value="options">{{options}}</option>
            </select>
            <!-- <DropDownField :data="layers" styleHeight="mini" /> -->
          </div>
        </div>
      </div>
      <div class="text-center">
        <button @click="send_add_request" class="mt-5 btn btn-normal btn--ideeza px-6 py-2">Add Task +</button>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import TextAreaField from "~/components/form/text-area.vue";
import DropDownField from "~/components/form/dropdown-field.vue";
import SearchField from "~/components/form/search-mini.vue";
import CheckBoxField from "~/components/form/checkbox-plus.vue";
import FileField from "~/components/form/file-field.vue";

import apiService from "~/apiService/have_token.js";
import apiService2 from "~/apiService/get_param.js";

export default {
  name: "new-project",
  data: function() {
    return {
      dateRange: new Date().toISOString().slice(0, 10),
      showMembers: false,
      showNotifications: false,
      markStatusData: ["waiting", "active", "completed", "overdue"],
      layers: ["electronics", "code", "cover"],
      geturl: "/tasks/",
      geturl2: "/accounts/users/",
      geturl3: "/task-attachments/",
      name: null,
      description: null,
      start: null,
      end: null,
      status: null,
      domain: null,
      file: null,
      user: [],
      articleArray: [],
      articleArrayaxios: [],
      articleArrayrout: [],
      randomNumber: [],
      projectid: null,
    };
  },
  mounted() {
    this.projectid = window.$nuxt.$cookies.get("technicianprojectid");
    this.$store.commit("TechnicianProjectStore/viewflagchange2");
    let sendData = {
      method: "get",
      url: this.geturl2,
      data: null
    };

    apiService2(sendData, response => {
      console.log(response.data);
      // this.randomNumber = response.data;
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
    taskdescription(event) {
      this.description = event.target.value;
    },
    taskdeadline(event) {
      this.dateRange = event.target.value;
      console.log("datapicker:", this.dateRange)
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
    taskstatus(event) {
      this.status = event.target.value;
    },
    taskasignlayer(event) {
      this.domain = event.target.value;
      console.log(this.domain);
    },
    taskuser(event) {
      this.user.push(event)
    },
    send_add_request() {
      let startDate = new Date(this.dateRange.start);
      this.start = moment(startDate).format('YYYY-MM-DD');
      let endDate = new Date(this.dateRange.end);
      this.end = moment(endDate).format('YYYY-MM-DD');

      if (this.start == null || this.end == null || this.name == null || this.description == null || this.status == null || this.file == null) {
        alert("please input/select all data!!!")
      } else {


        // Save Project File
        const imageFormData = new FormData();
        imageFormData.append("file", this.file);
        let sendImage = {
          method: "post",
          url: this.geturl3,
          data: imageFormData
        };

        apiService(sendImage, imageResponse => {
          let imageId = imageResponse.data.id;
          const formData = new FormData();
          this.user.map(item => {
            formData.append("users", item);
          })

          formData.set("title", this.name);
          formData.set("description", this.description);
          formData.set("start_date", this.start);
          formData.set("time_passed", 0);
          formData.set("end_date", this.end);
          formData.set("status", this.status);
          formData.set("domain", this.domain);
          formData.set("user", window.$nuxt.$cookies.get("userid"));
          formData.append("attachments", imageId);
          let sendData = {
            method: "post",
            url: this.geturl,
            data: formData
          };

          for (let value of formData.values()) {
            console.log("value", value);
          }

          apiService(sendData, response => {
            console.log("responseeeeeee", response);
            // window.location.reload();
          });
        });

        this.$emit("onClose");
      }

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
