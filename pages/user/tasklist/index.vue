<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow lg:pt-16 lg:px-10">

      <div class="flex justify-between items-center pb-3 mb-5 border-b border-solid border-gray-400 p-5 lg:p-0">
        <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Task List</h1>
        <div class="flex items-center">
          <span class="text-lg font-semibold cursor-pointer mr-5 text-ideeza-black hover:text-ideeza" :class="{'text-ideeza': tab === 'daily'}" @click="tab='daily'">Daily</span>
          <span class="text-lg font-semibold cursor-pointer text-ideeza-black hover:text-ideeza" :class="{'text-ideeza': tab === 'weekly'}" @click="tab='weekly'">Weekly</span>
        </div>
      </div>



      <div class="w-full scroll-container mx-auto">


          <div v-if="tab==='daily'" class="task-wrapper flex mb-10">

            <!--Task Col-->
            <div class="mx-auto task-col">
              <TaskCol @showAddTask="displayAddTask" />
            </div>



          </div>

          <div v-if="tab==='weekly'" class=" mb-10">
            <smooth-scrollbar :options="{alwaysShowTracks: true}">
              <div class="task-wrapper flex">

                <!--Task Col-->
                <div v-for="task in tasksWeekly" :key="task.id" class="task-col ">
                  <TaskCol @showAddTask="displayAddTask" />

                </div>
              </div>

            </smooth-scrollbar>
          </div>




      </div>

    </div>

    <!--RightBar-->
    <div class="hidden lg:block task-right-bar bg-white shadow-md py-16">
      <div class="text-gray-800 text-2xl font-semibold text-center">
        Calendar
      </div>
      <!--Calendar-->
      <vc-calendar @dayclick="addTasks" class="mx-auto mt-5" color="pink" is-expanded :theme="theme" />

      <div class="mt-5 py-5 px-5 border-t border-solid border-gray-300">
        <div class="text-xl text-gray-500 font-semibold">
          Latest Activity
        </div>

        <div class="my-5">
          <div class="flex">
            <img class="h-10 w-10 md:h-14 md:w-14 rounded-full mr-3"
                 src="https://randomuser.me/api/portraits/men/10.jpg">
            <div class="text-left mr-3">
              <div class=" text-gray-600 text-sm">
                <span class="font-semibold text-gray-800">John D.</span> added comment
                <br>
                <span class="underline font-semibold">to usability testing</span>
              </div>
              <div class="mt-2 text-gray-500 text-xs">Apr 21, 2018 at 8:20</div>
            </div>
          </div>

        </div>
        <div class="my-5">
          <div class="flex">
            <img class="h-10 w-10 md:h-14 md:w-14 rounded-full mr-3"
                 src="https://randomuser.me/api/portraits/men/4.jpg">
            <div class="text-left mr-3">
              <div class=" text-gray-600 text-sm">
                <span class="font-semibold text-gray-800">John D.</span> attached image
                <br>
                <span class="underline font-semibold">o Cover Sketching</span>
              </div>
              <div class="mt-2 text-gray-500 text-xs">Apr 21, 2018 at 8:20</div>
            </div>
          </div>
          <img class="mt-2" src="~/static/images/attach_image.png">

        </div>
      </div>

    </div>

    <!--Add Task-->
    <AddTask @onClose="closeAddTask" v-if="showAddTask" />
  </div>


</template>
<script>
  import AddTask from '~/components/user/tasklist/add-task'
  import TaskCol from '~/components/user/tasklist/task-col'
  import LeftMenu from '~/components/user/common-left-side-menu.vue'
  import CheckBox from '~/components/form/checkbox.vue'
  import InvitePopup from '~/components/user/add-member/add-member-popup.vue'
  export default {
    layout: 'user',
    name: "task-index",
    components: {
      LeftMenu,
      CheckBox,
      InvitePopup,
      AddTask,
      TaskCol
    },
    data: function () {
      return {
        tab: 'daily',
        showAddTask: false,
        addNewMember: false,
        theme: {
          container: {
            light: 'ideeza-date-picker',
          },
          arrows: {
            light:
              'ideeza-arrow',
          },
        },
        tasksDaily: [],
        tasksWeekly: [{id: 1}],
        id: 0
      }
    },
    computed: {
      leftMenu() {
        return this.$store.state.usermenu.openLeftMenu;
      }
    },
    mounted() {

    },
    methods: {
      displayAddTask(){
        this.showAddTask = true;
      },
      closeAddTask(){
        this.showAddTask = false;
      },
      addTasks(){
        if(this.tab === 'weekly'){
          this.tasksWeekly.push({
            id: this.id
          })
          this.id ++;
        }
      }
    }
  }
</script>

<style scoped>
  .my-scrollbar{
    width: 100%;
    min-width: 300px;
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

  /*Right Bar*/
  .task-right-bar{
    width: 300px;
    min-width: 300px;
  }

  .accordion-container{
    @apply border-t border-b border-solid border border-gray-300;
  }
  .accordion-container--title{
    @apply flex py-2 px-1;
  }

</style>
