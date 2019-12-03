<template>
  <div class="mx-auto  lg:mx-0 lg:mr-8 pb-5 shadow-md bg-white">
    <div class="py-6 px-5 text-xl font-semibold text-gray-800 border-b border-solid border-gray-400">
      02nd Thursday
    </div>

    <div v-for="(task, index) in tasks" :key="task.id" class="border-light-gray carousal-border">
      <div @click="task.active = !task.active" class="cursor-pointer py-3 flex flex items-center" :class="{'font-semibold text-ideeza-black': task.active}">
        <div class="text-center flex-grow">Task {{index+1}}</div>
        <div class="mr-5" v-html="task.active ? '-' : '+'"></div>
      </div>


      <!--Task content-->
      <div :class="{'important': task.important, 'task-contents-hide': !task.active, 'task-contents': task.active}" class="task">
        <div class="task-time">09:00 AM - 10:30 AM</div>
        <div class="task-name">Finish electronics part</div>

        <div class="mt-8 flex justify-between items-center">
          <div class="flex items-center">
            <img class="h-10 w-10 mr-2 rounded-full"
                 src="https://randomuser.me/api/portraits/women/17.jpg">
            <img class="h-10 w-10 mr-2 rounded-full"
                 src="https://randomuser.me/api/portraits/men/16.jpg">
            <div @click="task.addNewMember = !task.addNewMember" class="add-member h-10 w-10 mr-2 bg-gray-300 rounded-full relative " :class="{'active': task.addNewMember}" >
              <font-awesome-icon class="absolute-center-h-v mr-1 h-4 " :icon="['fas', 'plus']"/>
              <InvitePopup v-if="task.addNewMember" />
            </div>
          </div>

          <!--Attachments-->
          <div class="flex items-center">
            <div class="mr-2">
              <font-awesome-icon class="h-4 text-ideeza  cursor-pointer " :icon="['far', 'comment']"/> <span class="attachment-no">5</span>
            </div>
            <div class="mr-2">
              <font-awesome-icon class="h-4 text-ideeza  cursor-pointer " :icon="['fas', 'paperclip']"/> <span class="attachment-no">2</span>
            </div>
          </div>
        </div>
      </div>

    </div>





    <div class="my-5 text-center">
      <button @click="$emit('showAddTask')" class="btn pill-button px-5">+Add new task</button>
    </div>
  </div>
</template>

<script>
  import InvitePopup from '~/components/user/add-member/add-member-popup.vue'
    export default {
        name: "task-col",
      components: {
        InvitePopup
      },
      data: function() {
          return {
            showAddTask: false,
            tasks: [
              {
                active: false,
                id: 0,
                important: false,
                addNewMember: false,
              },
              {
                active: false,
                id: 1,
                important: true,
                addNewMember: false,
              },
              {
                active: false,
                id: 2,
                important: false,
                addNewMember: false,
              }

            ]
          }
      }
    }
</script>

<style scoped>
  .carousal-border{
    @apply border-b border-t border-solid mt-5;
  }

  .task-col{
    @apply mt-5;
    width: 100%;
    max-width: 370px;
    min-width: 360px;
  }
  .task-wrapper{
    max-width: 1200px;
  }
  .task{
    transition: all 0.2s;
  }
  .task-contents{
   @apply my-16 mx-3 p-3;
  }
  .task-contents-hide{
    @apply h-0 overflow-hidden;
  }
  .task-time{
    @apply text-gray-500;
  }
  .task-name{
    @apply text-gray-800 text-xl font-semibold mt-5;
  }
  .attachment-no{
    @apply text-gray-500 text-sm
  }
  .add-member{
    @apply h-10 w-10 mr-2 bg-gray-300 rounded-full relative cursor-pointer text-gray-600;
  }
  .add-member:hover{
    @apply text-gray-800;
  }
  .add-member.active{
    @apply bg-ideeza-dark text-white;
  }
  .add-member.active:hover{
    @apply text-white;
  }
  .important{
    @apply bg-ideeza-dark
  }
  .important .task-time,
  .important .task-name,
  .important .attachment-no{
    @apply text-white;
  }
  .important .add-member{
    @apply bg-white;
  }
</style>
