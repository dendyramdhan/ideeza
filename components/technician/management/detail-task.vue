<template>
    <div @click.self="close" class="popup-overlay">
      <div class="popup-overlay--contents add-new-container">
        <!--Header-->
        <div class="flex justify-between border-b-2 border-solid border-ideeza pb-5 px-20 pt-20">
          <div class="lg:w-1/2">
          <input v-model="taskTitle" type="text" class="outline-none border-0 text-ideeza text-xl placeholder-ideeza" placeholder="Add new task...." >
          <div>Project: Iron Making</div>
          </div>
          <div class="flex items-center">
            <span class="text-gray-800 inline-block">Task Duration: <span class="text-ideeza">26 Oct - 29 Nov</span></span>
            <!--Calendar-->
            <vc-date-picker v-model="dateRange" color="pink" mode='range' value=""
                          :popover="{ placement: 'bottom', visibility: 'click' }" >
              <font-awesome-icon class="ml-2 h-4 cursor-pointer text-gray-800" :icon="['fas', 'calendar-alt']"/>
            </vc-date-picker>

          </div>
          <font-awesome-icon @click="close" class="mr-1 h-4 cursor-pointer text-gray-500 hover:text-gray-800" :icon="['fas', 'times']"/>
        </div>

        <!--Contents-->
        <div class="p-5 md:px-20 mt-5 md:flex popup-body">
          <div class="lg:w-2/3" >
            <div class="flex justify-between items-center">
              <h1 class="text-ideeza-dark font-bold text-2xl">Here is Task Description</h1>
              <div class="flex items-center  text-gray-500 hover:text-gray-800 cursor-pointer" @click="$emit('onEdit')">
                <span class="text-sm inline-block mr-1">Edit</span>
                <font-awesome-icon @click="close" class="mr-1 h-3" :icon="['fas', 'pen']"/>
              </div>

            </div>
            <div class="mt-5">
              <p class="rounded-sm text-gray-500 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur fermentum consectetur. Pellentesque et velit mattis, sagittis magna ac, vulputate neque. Suspendisse dolor sem, blandit ac dolor vitae, fermentum rhoncus augue. Fusce scelerisque posuere neque, in accumsan mi sagittis vitae. Phasellus purus purus, pulvinar vel diam sit amet, auctor feugiat purus. Donec nulla est, convallis nec tempor ac, molestie in massa. Morbi molestie varius ex, vel molestie dui. Phasellus accumsan velit eget efficitur condimentum.
              </p>
            </div>
            <div class="flex-grow">
                <div class="mb-2 text-black text-2xl font-bold">
                    Attachments
                </div>
                <div class="bg-white">
                    <span class="block text-xs">3 pics attached</span>
                    <div class="flex flex-wrap attached-images-wrapper mt-2">
                    <img src="https://picsum.photos/200" alt="" class="mr-2">
                    <img src="https://picsum.photos/200" alt="" class="mr-2">
                    <img src="https://picsum.photos/200" alt="" class="mr-2">

                    </div>
                    <div class="text-xs mt-5">
                    link attached: <a class="text-blue-500" href="https://google.com">https://google.com</a>
                    </div>
                    <div class="text-xs mt-5">
                     <file-field-button :icon="true" label="Add Attachment *"/>
                    </div>
                </div>
            </div>
          </div>

          <div class="lg:ml-5 w-1/3 ">
            <div class="mb-2 ml-5 flex justify-between">
              <span>
                Notification Center:</span> 
                <button class="btn--ideeza px-3 py-1">
                    Compose
                    <font-awesome-icon class="text text-xs text-gray-500" :icon="['far', 'paper-plane']" />
                </button>
            </div>
            <ul class="events mb-5">
                 <li class="flex justify-between hover:bg-ideeza-dark py-3 px-5 event">
                    <div>
                        <div class="text text-sm font-bold">Finish ELectronics Part</div>
                        <div class="text text-xs">Completed</div>
                    </div>
                    <div class="event-icons text-right">
                         <font-awesome-icon class="text text-xs text-gray-500 mr-2" :icon="['fa', 'pen']" />
                        <font-awesome-icon class="text text-sm text-gray-500" :icon="['fas', 'times']" />
                    </div>
                </li>
                <li class="flex justify-between hover:bg-ideeza-dark py-3 px-5 event">
                    <div>
                        <div class="text text-sm font-bold">Finish ELectronics Part</div>
                        <div class="text text-xs">Completed</div>
                    </div>
                    <div class="event-icons text-right">
                         <font-awesome-icon class="text text-xs text-gray-500 mr-2" :icon="['fa', 'pen']" />
                        <font-awesome-icon class="text text-sm text-gray-500" :icon="['fas', 'times']" />
                    </div>
                </li>
                <li class="flex justify-between hover:bg-ideeza-dark py-3 px-5 event">
                    <div>
                        <div class="text text-sm font-bold">Finish ELectronics Part</div>
                        <div class="text text-xs">Completed</div>
                    </div>
                    <div class="event-icons text-right">
                         <font-awesome-icon class="text text-xs text-gray-500 mr-2" :icon="['fa', 'pen']" />
                        <font-awesome-icon class="text text-sm text-gray-500" :icon="['fas', 'times']" />
                    </div>
                </li>
                <li class="flex justify-between hover:bg-ideeza-dark py-3 px-5 event">
                    <div>
                        <div class="text text-sm font-bold">Finish ELectronics Part</div>
                        <div class="text text-xs">Completed</div>
                    </div>
                    <div class="event-icons text-right">
                        <font-awesome-icon class="text text-xs text-gray-500 mr-2" :icon="['fa', 'pen']" />
                        <font-awesome-icon class="text text-sm text-gray-500" :icon="['fas', 'times']" />
                    </div>
                </li>
                <li class="flex justify-between hover:bg-ideeza-dark py-3 px-5 event">
                    <div>
                        <div class="text text-sm font-bold">Finish ELectronics Part</div>
                        <div class="text text-xs">Completed</div>
                    </div>
                    <div class="event-icons text-right">
                        <font-awesome-icon class="text text-xs text-gray-500 mr-2" :icon="['fa', 'pen']" />
                        <font-awesome-icon class="text text-sm text-gray-500" :icon="['fas', 'times']" />
                    </div>
                </li>
                <li class="flex justify-between hover:bg-ideeza-dark py-3 px-5 event">
                    <div>
                        <div class="text text-sm font-bold">Finish ELectronics Part</div>
                        <div class="text text-xs">Completed</div>
                    </div>
                    <div class="event-icons text-right">
                        <font-awesome-icon class="text text-xs text-gray-500 mr-2" :icon="['fa', 'pen']" />
                        <font-awesome-icon class="text text-sm text-gray-500" :icon="['fas', 'times']" />
                    </div>
                </li>
                <li class="flex justify-between hover:bg-ideeza-dark py-3 px-5 event">
                    <div>
                        <div class="text text-sm font-bold">Finish ELectronics Part</div>
                        <div class="text text-xs">Completed</div>
                    </div>
                    <div class="event-icons text-right">
                        <font-awesome-icon class="text text-xs text-gray-500 mr-2" :icon="['fa', 'pen']" />
                        <font-awesome-icon class="text text-sm text-gray-500" :icon="['fas', 'times']" />
                    </div>
                </li>
            </ul>
            <div class="mb-10 ml-5">
                <button class="px-3 py-2 bg-ideeza-dark text-white">
                    Make a Call
                </button>
            </div>
            <div class="ml-5 mb-2 text-base font-bold text-black">
                Category:
            </div>
            <div class="ml-5 mb-2 text-ideeza">
                <u>Electronics</u>
            </div>
          </div>
        </div>
        <div class="text-right px-20" @click="$emit('complete')">
          <button class="btn--ideeza bg-ideeza text-white px-3 py-2">Complete Task</button>
        </div>
      </div>
    </div>
</template>

<script>
  import TextAreaField from "~/components/form/text-area.vue"
  import DropDownField from "~/components/form/dropdown-field.vue"
  import SearchField from "~/components/form/search-mini.vue"
  import CheckBoxField from "~/components/form/checkbox-plus.vue"
  import FileField from "~/components/form/file-field.vue"
  import FileFieldButton from "~/components/form/file-field-button.vue"
    export default {
        name: "new-project",
      data: function() {
        return {
          dateRange: null,
          showMembers: false,
          showNotifications: false,
          markStatusData: ['Waiting', 'Active', 'Completed', 'Over Due'],
          taskTitle: "Make Iron from steel"
        }
      },
      components: {
        TextAreaField,
        DropDownField,
        SearchField,
        CheckBoxField,
        FileField,
        FileFieldButton
      },
      methods: {
          close(){
            this.$emit('onClose');
          },
        hideMembers() {
            this.showMembers = false;
        }

      }
    }
</script>

<style scoped>
  .add-new-container{
    @apply w-full h-full;
    max-width: 1300px;
    max-height: 900px;
  }
  .members-container{
    height: 200px;
    overflow-y: auto;
  }
  .member-name{
    @apply text-gray-600 ml-2;
    font-size: 10px;
    font-weight: lighter;
  }
  .avatar{
    @apply w-4 rounded-full inline;
  }
  .popup-body {
    max-height: 60vh;
    overflow-y: auto;
  }
  .events {
    max-height: 300px;
    overflow-y: auto;
  }
</style>
