<template>
  <div @click.self="close" class="popup-overlay">
    <div class="popup-overlay--contents add-new-container">
      <!--Header-->
      <div class="flex justify-between">
        <input type="text" class="outline-none border-0 text-ideeza text-xl placeholder-ideeza lg:w-1/2" placeholder="Add Project Name..." @change="projectname" />
        <font-awesome-icon @click="close" class="mr-1 h-4 cursor-pointer text-gray-500 hover:text-gray-800" :icon="['fas', 'times']" />
      </div>
      <!--Contents-->
      <div class="mt-10 flex">
        <div class="lg:w-1/2">
          <div class="flex justify-between items-center">
            <h1 class="text-ideeza-dark font-semibold">Project Description</h1>
          </div>
          <div class="mt-5">
            <textarea placeholder="Add project description here ...." @change="projectdescription" style="width:100%;height:150px;"></textarea>
          </div>
          <button @click="send_add_request" class="mt-5 btn btn-normal btn--ideeza px-6 py-2">Add project +</button>
        </div>
        <div class="lg:ml-20">
          <div class="flex items-center">
            <span class="text-gray-800 inline-block">Project Duration</span>
            <!--Calendar-->
            <vc-date-picker v-model="dateRange" color="pink" mode="range" :value="dateRange" :popover="{ placement: 'bottom', visibility: 'click' }" @change="projectdeadline">
              <font-awesome-icon class="ml-2 h-4 cursor-pointer text-gray-800" :icon="['fas', 'calendar-alt']" />
            </vc-date-picker>
          </div>
          <div class="mt-5 w-40">
            <span class="inline-block mb-2">Mark Status</span>
            <select @change="projectstatus" styleHeight="mini">
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
                  <img class="avatar" :src="avata_img_url+info.avatar" alt />
                  <span class="member-name">{{info.first_name}}</span>
                </div>
                <input type="checkbox" @click="projectuser(info.id)" />
                <!-- <CheckBoxField  /> -->
              </div>
            </div>
          </div>
          <div class="mt-10">
            <span class="inline-block mb-2">Attach</span>
            <img id="image" />
            <form enctype="multipart/form-data">
              <input type="file" @change="fileseleted" ref="file_upload" class="btn btn-normal btn--ideeza px-10 py-4 block lg: iinline-block" style="display:none" />
            </form>
            <button class="ml-5 btn btn-small btn--ideeza px-2 text-xs" @click="$refs.file_upload.click()">SelectImage</button>
            <!-- <FileField /> -->
          </div>
        </div>
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
      markStatusData: ["waiting", "active", "completed", "overdue"],
      geturl: "/projects/",
      name: null,
      description: null,
      start: null,
      end: null,
      status: null,
      file: null,
      user: [],
      geturl2: "/accounts/users/",
      geturl3: "/project-attachments/",
      articleArray: [],
      articleArrayaxios: [],
      articleArrayrout: [],
      randomNumber: [],
      projectidd: null,
      avata_img_url: process.env.avatar_base_url,

    };
  },
  mounted() {
    this.$store.commit("TechnicianProjectStore/viewflagchange2");
    let sendData = {
      method: "get",
      url: this.geturl2,
      data: null
    };

    apiService2(sendData, response => {
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
    uploadUserBlog() {
      const formData = new FormData();
      formData.set("user", this.articlena);
      formData.set("user", this.articlena);
      formData.set("name", this.name);
      formData.set("description", this.description);
      formData.set("start", this.start);
      formData.set("end", this.end);
      formData.set("status", this.status);
      formData.append("attached", this.file);
      let sendData = {
        method: "post",
        url: this.geturl,
        data: formData
      };

      apiService(sendData, response => {
        console.log(response);
      });
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
    projectname(event) {
      this.name = event.target.value;
    },
    projectdescription(event) {
      this.description = event.target.value;
    },
    projectdeadline(event) {
      this.dateRange = event.target.value;
      console.log("datapicker:", this.dateRange)
    },
    projectstatus(event) {
      this.status = event.target.value;
    },
    projectuser(event) {
      this.user.push(event)
    },
    send_add_request() {
      let startDate = new Date(this.dateRange.start);
      this.start = moment(startDate).format('YYYY-MM-DD');
      let endDate = new Date(this.dateRange.end);
      this.end = moment(endDate).format('YYYY-MM-DD');

      if (this.start == null || this.end == null || this.user == null || this.name == null || this.description == null || this.status == null || this.file == null) {
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
          formData.set("end_date", this.end);
          formData.set("status", this.status);
          formData.set("user", window.$nuxt.$cookies.get("userid"));
          formData.append("attachments", imageId);
          let sendData = {
            method: "post",
            url: this.geturl,
            data: formData
          };

          apiService(sendData, response => {
            console.log("responseeeeeee", response);
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
  },
  computed: {
    activityDate: {
      get() {
        return new Date(this.dateRange);
      },
      set(val) {
        console.log(val);
        this.dateRange = val.toISOString().slice(0, 10);
      },
    },
  }
};

</script>
<style scoped>
.add-new-container {
  @apply w-full h-full p-20;
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

</style>
