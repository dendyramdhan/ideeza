<template>
  <div @click.self="close" class="popup-overlay">
    <div v-for="(info,index) in articleArray" v-if="index==0">
      <div class="popup-overlay--contents add-new-container">
        <!--Header-->
        <div class="flex justify-between border-b-2 border-solid border-ideeza pb-5 px-20 pt-20">
          <div class="lg:w-1/2">
            <input
              v-model="info.name"
              type="text"
              class="outline-none border-0 text-ideeza text-xl placeholder-ideeza"
              placeholder="Add new task...."
            />

            <div>Project: {{info.name}}</div>
          </div>
          <div class="flex items-center">
            <span class="text-gray-800 inline-block">
              Task Duration:
              <span class="text-ideeza">{{ts.toLocaleDateString(0 - info.start)}} -</span>
              <span class="text-ideeza">{{ts.toLocaleDateString(info.end - 0)}}</span>
              <!-- <span class="text-ideeza">
              26 Oct - 29 Nov</span>-->
            </span>
            <!--Calendar-->
            <vc-date-picker
              v-model="dateRange"
              color="pink"
              mode="range"
              value
              :popover="{ placement: 'bottom', visibility: 'click' }"
            >
              <font-awesome-icon
                class="ml-2 h-4 cursor-pointer text-gray-800"
                :icon="['fas', 'calendar-alt']"
              />
            </vc-date-picker>
          </div>
          <font-awesome-icon
            @click="close"
            class="mr-1 h-4 cursor-pointer text-gray-500 hover:text-gray-800"
            :icon="['fas', 'times']"
          />
        </div>

        <!--Contents-->
        <div class="p-5 md:px-20 mt-5 md:flex flex-wrap popup-body">
          <div class="w-full">
            <div class="flex min-h">
              <div class="w-2/3 pr-10 mr-10">
                <div class="flex justify-between items-center">
                <h1 class="text-ideeza-dark font-bold text-2xl">Here is Task Description</h1>
                <div v-if="edit"
                  class="flex items-center text-gray-500 hover:text-gray-800 cursor-pointer"
                  @click="$emit('onEdit')"
                >
                  <span class="text-sm inline-block mr-1">Edit</span>
                  <font-awesome-icon class="mr-1 h-3" :icon="['fas', 'pen']" />
                  </div>
                </div>
                <div class="mt-5 min-h">
                  <p class="rounded-sm text-black tracking-wider leading-loose">{{info.description}}</p>
                </div>
              </div>
              <div class="flex-1">
                <div>
                  <check-box>Mark as Complete</check-box>
                </div>
                <div class="flex justify-between mt-2">
                  <div class="text-xl">Assigned members</div>
                  <div class="bg-ideeza text-white p-2">Add +</div>
                </div>
                <div class="mt-2">
                <div v-for="n in 5" class="mt-2 flex members justify-between items-center">
                  <div class="flex items-center">
                    <img src="https://picsum.photos/200" class="mr-2 rounded-full w-8">
                    <div class="font-semibold text-black mr-2">She is someone, manager</div>
                  </div>
                  <div>
                    <font-awesome-icon
                    @click="close"
                    class="mr-1 h-4 cursor-pointer text-ideeza hover:text-gray-800"
                    :icon="['fas', 'trash']"
                  />
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div class="flex-grow">
              <div class="flex min-h">
                <div class="w-2/3">
              <div class="mb-2 text-black text-2xl font-bold">Attachments</div>
              <div class="bg-white">
                <span class="block text-xs">3 pics attached</span>
                <div class="flex flex-wrap attached-images-wrapper mt-2">
                  <span v-for="image in info.attach">
                    <img :src="task_img_url + image.image" />
                  </span>
                  <img src="https://picsum.photos/200" alt class="mr-2" />
                </div>
                <div class="text-xs mt-5">
                  link attached:
                  <a
                    class="text-blue-500"
                    href="https://google.com"
                  >https://google.com</a>
                </div>
                <div class="mt-5">
                  <image-upload  @selected="sendapi" />
                 
                </div>
              </div>
                </div>
                <div class="flex-1">
                  <div class="mt-5 mb-2 ml-5 flex justify-between">
                  <span>Notification Center:</span>
                  <nuxt-link :to="{ path: '/technician/messages', query: { id:  userid}}">
                    <button class="btn--ideeza px-3 py-1">
                      Compose
                      <font-awesome-icon
                        class="text text-xs text-gray-500"
                        :icon="['far', 'paper-plane']"
                      />
                    </button>
                  </nuxt-link>
                </div>
                <ul class="events mt-2 mb-5">
                  <li
                    class="flex justify-between hover:bg-ideeza-dark py-3 px-5 event"
                    v-for="member in info.assigned_users"
                  >
                    <div v-if="member.id == null">&nbsp;</div>
                    <div v-else>
                      <div class="text text-sm font-bold">{{member.name}}</div>
                      <div class="text text-xs">Completed</div>
                    </div>
                    <!-- <div class="event-icons text-right">
                      <font-awesome-icon class="text text-xs text-gray-500 mr-2" :icon="['fa', 'pen']" />
                      <font-awesome-icon class="text text-sm text-gray-500" :icon="['fas', 'times']" />
                    </div> -->
                  </li>
                </ul>
                </div>
              </div>
            </div>
            <div class="flex">
              <div class="w-2/3">&nbsp;</div>
              <div class="flex-1">
                <div class="mb-10 ml-5" v-if="edit">
                  <button class="px-3 py-2 bg-ideeza-dark text-white">Make a Call</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-right py-10 px-20" v-if="edit" @click="$emit('complete')">
          <button class="btn--ideeza bg-ideeza text-white px-3 py-2">Complete Task</button>
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
import ImageUpload from "~/components/form/image-upload";
import FileFieldButton from "~/components/form/file-field-button.vue";
import CheckBox from "~/components/form/checkbox.vue"

import apiService from "~/apiService/have_token.js";

export default {
  name: "new-project",
  props: {
    parentData: String,
    edit: {
      default: true,
      type: Boolean
    }
  },
  data: function() {
    return {
      dateRange: null,
      showMembers: false,
      showNotifications: false,
      markStatusData: ["Waiting", "Active", "Completed", "Over Due"],
      taskTitle: "Make Iron from steel",
      ts: new Date(),
      geturl: "/api/project/get_task_detail",
      geturl2: "/api/project/task/add_attach",
      articleArray: [],
      articleArrayrout: [],
      articleArrayaxios: [],
      projectidd: null,
      randomNumber: {},
      task_img_url: process.env.task_image_url,
      userid: null,
      file: null,
      flag:0,
    };
  },
  mounted() {
    console.log("parent data:", this.parentData);
    this.projectidd = this.parentData;
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
    FileField,
    FileFieldButton,
    ImageUpload,
    CheckBox
  },
  methods: {
    sendapi(value){
      
      this.file=value;
      this.flag = 1;
      console.log(this.file)
      console.log(this.projectidd)
      if(this.file)
        this.uploadapi();
    },
    uploadapi(){
      const formData = new FormData();
      formData.set("taskid", this.projectidd);
      formData.append("attach", this.file);
      let sendData3 = {
        method: "post",
        url: this.geturl2,
        data: formData
      };
      apiService(sendData3, response => {
        console.log(response.data);
      });
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
  @apply w-full;
  max-width: 1300px;
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
  max-height: 70vh;
  overflow-y: auto;
}
.events {
  min-height: 300px;
  max-height: 300px;
  overflow-y: auto;
}
.min-h{
  min-height: 200px;
}
</style>
