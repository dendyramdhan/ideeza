<template>
  <div @click.self="close" class="popup-overlay">
    <div class="popup-overlay--contents add-new-container">
      <!--Header-->
      <div class="flex justify-between px-10 pt-5">
        <h1 class="font-semibold text-xl">Add new task</h1>
        <font-awesome-icon @click="close" class="mr-1 h-4 cursor-pointer text-gray-500 hover:text-gray-800" :icon="['fas', 'times']"/>
      </div>

      <div class="my-5 flex justify-between px-10">
        <div class="w-1/2">
          <div class="input-container">
            <label>Link to (Option)</label>
            <input placeholder="Project or layer">
          </div>
          <div class="input-container">
            <label>Name</label>
            <input placeholder="Project or layer">
          </div>
          <div class="input-container">
            <label>Description</label>
            <textarea rows="5" ></textarea>
          </div>
          <div class="input-container">
            <label>Taskers</label>
            <div class="flex items-center">
              <img class="h-10 w-10 mr-2 rounded-full"
                   src="https://randomuser.me/api/portraits/women/17.jpg">
              <img class="h-10 w-10 mr-2 rounded-full"
                   src="https://randomuser.me/api/portraits/men/16.jpg">
              <div class="add-member h-10 w-10 mr-2 bg-gray-300 rounded-full relative">
                <font-awesome-icon class="absolute-center-h-v mr-1 h-4 text-gray-600 hover:text-gray-800  cursor-pointer " :icon="['fas', 'plus']"/>
              </div>
            </div>
          </div>
        </div>
        <div class="w-2/3 pl-10">
          <h1 class="font-semibold text-lg block">Deadline</h1>
          <!--Calendar-->
          <vc-calendar v-model="dateRange" mode='range' value="" class="mx-auto mt-5" color="pink" is-expanded :theme="theme" />

        </div>
      </div>

      <div class="px-10">
        <h1 class="font-semibold text-lg block">Attachments</h1>
        <FileField />
        <div>
          <div class="flex items-center mt-2">
            <span class="text-ideeza text-xs">introduction to the task 4 attachment</span>
            <font-awesome-icon class="ml-2 h-3 inline text-ideeza-gray-300 cursor-pointer :hover:text-ideeza-gray-500" :icon="['fas', 'trash']"/>
          </div>
          <div class="flex items-center mt-2">
            <span class="text-ideeza text-xs">introduction to the task 4 attachment</span>
            <font-awesome-icon class="ml-2 h-3 inline text-ideeza-gray-300 cursor-pointer :hover:text-ideeza-gray-500" :icon="['fas', 'trash']"/>
          </div>
          <div class="flex items-center mt-2">
            <span class="text-ideeza text-xs">introduction to the task 4 attachment</span>
            <font-awesome-icon class="ml-2 h-3 inline text-ideeza-gray-300 cursor-pointer :hover:text-ideeza-gray-500" :icon="['fas', 'trash']"/>
          </div>
        </div>
      </div>

      <div class="flex justify-end px-10 mb-5">
        <button class="btn btn--ideeza px-3 py-1">Add Task</button>
      </div>


    </div>
  </div>
</template>

<script>

  import FileField from "~/components/form/file-field.vue"
  export default {
    name: "add-task",
    data: function() {
      return {
        dateRange: null,
        showMembers: false,
        theme: {
          container: {
            light: 'ideeza-date-picker',
          },
          arrows: {
            light:
              'ideeza-arrow',
          },
        },

      }
    },
    components: {

      FileField
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
  .input-container{
    @apply my-5
  }
  label{
    @apply font-semibold text-lg block mb-2 text-ideeza-black
  }
  input{
    @apply p-2 rounded-sm outline-none border border-solid border-ideeza-gray-300;
    width: 90%;
  }
  textarea{
    @apply p-2 rounded-sm outline-none border border-solid border-ideeza-gray-300;
    width: 90%;
  }
  .add-new-container{
    @apply w-full;
    max-width: 1000px;
  }

  .avatar{
    @apply w-4 rounded-full inline;
  }
</style>
