<template>
  <div @click.self="close" class="popup-overlay">
    <div class="popup-overlay--contents add-new-container">
      <!--Header-->
      <div class="flex justify-between px-10 pt-5">
        <h1 class="font-semibold text-xl">Add new note</h1>
        <font-awesome-icon @click="close" class="mr-1 h-4 cursor-pointer text-gray-500 hover:text-gray-800" :icon="['fas', 'times']" />
      </div>
      <div class="my-5 md:flex justify-between px-5 md:px-10">
        <div class="md:w-1/2">
          <div class="input-container">
            <label>Link to (Option)</label>
            <input placeholder="Project or layer" v-model="taskLink" required />
          </div>
          <div class="input-container">
            <label>Name</label>
            <input placeholder="name" v-model="taskName" />
          </div>
          <div class="input-container">
            <label>Description</label>
            <textarea rows="5" class="taskDescription" v-model="taskDescription"></textarea>
          </div>
          <div class="input-container">
            <label>Note contacts</label>
            <div class="flex items-center">
              <!-- <img
                class="h-10 w-10 mr-2 rounded-full"
                src="https://randomuser.me/api/portraits/women/17.jpg"
              />
              <img
                class="h-10 w-10 mr-2 rounded-full"
                src="https://randomuser.me/api/portraits/men/16.jpg"
              /> -->
              <div class="add-member h-10 w-10 mr-2 bg-gray-300 rounded-full relative">
                <font-awesome-icon class="absolute-center-h-v mr-1 h-4 text-gray-600 hover:text-gray-800 cursor-pointer" :icon="['fas', 'plus']" @click="onAddTaskers" />
                <InvitePopup v-if="requestAddTasker" />
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-2/3 md:pl-10">
          <h1 class="font-semibold text-lg block">Deadline</h1>
          <!--Calendar-->
          <!-- <vc-calendar
            v-model="dateRange"
            @change="taskdeadline"
            mode="range"
            :value="dateRange"
            :popover="{ placement: 'bottom', visibility: 'click' }"
            class="mx-auto mt-5"
            color="pink"
            is-expanded
            :attributes="attributes"
            :theme="theme"
          />-->
          <vc-date-picker v-model="dateRange" color="pink" mode="range" :value="dateRange" is-expanded is-inline @change="taskdeadline" :theme="theme">
            <font-awesome-icon class="ml-2 h-4 cursor-pointer text-gray-800" :icon="['fas', 'calendar-alt']" />
          </vc-date-picker>
        </div>
      </div>
      <div class="px-10">
        <h1 class="font-semibold text-lg block">Attachments</h1>
        <FileField @input="saveFile" />
        <!-- in the below div we have to append the  -->
        <div v-if="file">
          <div class="flex items-center mt-2">
            <span class="text-ideeza text-xs" v-if="file">{{file.name}}</span>
            <font-awesome-icon @click="file=null" class="ml-2 h-3 inline text-ideeza-gray-300 cursor-pointer :hover:text-ideeza-gray-500" :icon="['fas', 'trash']" />
          </div>
        </div>
      </div>
      <div class="flex justify-end px-10 mb-5">
        <button class="btn btn--ideeza px-3 py-1" @click="addNewTask">Add Task</button>
      </div>
    </div>
  </div>
</template>
<script>
import FileField from "~/components/form/file-field.vue";
import InvitePopup from "~/components/user/add-member/add-member-popup.vue";
import apiServiceWithToken from "~/apiService/have_token.js";
export default {
  name: "add-task",
  data: function() {
    return {
      date: new Date(),
      requestAddTasker: false,
      // dateRange: new Date().setHours(0, 0, 0, 0),
      dateRange: new Date().toISOString().slice(0, 10),
      taskLink: null,
      taskName: null,
      taskDescription: null,
      taskTaskers: null,
      taskAttachments: null,
      showMembers: false,
      file: null,
      task: null,
      theme: {
        container: {
          light: "ideeza-date-picker"
        },
        arrows: {
          light: "ideeza-arrow"
        }
      },
      attributes: [{
        key: "today",
        highlight: true,
        dates: new Date()
      }]
    };
  },
  components: {
    FileField,
    InvitePopup
  },
  methods: {
    taskdeadline(event) {
      this.dateRange = event.target.value;
      console.log("datapicker:", this.dateRange);
    },
    saveFile(file) {
      this.file = file
    },
    close() {
      this.$emit("onClose");
    },
    hideMembers() {
      this.showMembers = false;
    },
    addNewTask() {
      let start = new Date(this.dateRange.start).getTime();
      let end = new Date(this.dateRange.end).getTime();
      let timestamp = new Date().setHours(0, 0, 0, 0);
      console.log('timestamp: ', typeof(timestamp));
      var addTaskFormData = new FormData();
      addTaskFormData.set("link", this.taskLink);
      addTaskFormData.set("title", this.taskName);
      addTaskFormData.set("description", this.taskDescription);
      addTaskFormData.set("timestamp", timestamp);
      addTaskFormData.set("start", start);
      addTaskFormData.set("end", end);
      console.log(addTaskFormData);
      if (start === NaN) {
        alert("Please Enter Deadline!");
        return;
      } else if (end === NaN) {
        alert("Please Enter Deadline!");
        return;
      } else if (this.taskName === '') {
        alert("Please Enter Task Name!");
        return;
      } else if (this.taskDescription === '') {
        alert("Please Enter Description!");
        return;
      } else {
        var r = confirm("Do you want to add new note?");
        if (r == true) {
          // addTaskFormData.append("attachments", value, filename);

          let addTaskurl = "/tasks/";
          let addTaskData = {
            method: "post",
            url: addTaskurl,
            data: addTaskFormData
          };

          apiServiceWithToken(addTaskData, response => {
            console.log(response);
            // if (response.data["success"] == true) {
            //   window.location.reload();
            // }
          });
        } else {}
      }
    },
    onAddTaskers() {
      this.requestAddTasker = true;
      // alert();
    }
  }
};

</script>
<style scoped>
.input-container {
  @apply my-5;
}

label {
  @apply font-semibold text-lg block mb-2 text-ideeza-black;
}

input {
  @apply p-2 rounded-sm outline-none border border-solid border-ideeza-gray-300;
  width: 90%;
}

textarea {
  @apply p-2 rounded-sm outline-none border border-solid border-ideeza-gray-300;
  width: 90%;
}

.add-new-container {
  @apply w-full;
  max-width: 1000px;
  max-height: 100vh;
  overflow-y: auto;
}

.avatar {
  @apply w-4 rounded-full inline;
}

</style>
