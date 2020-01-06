<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
     
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow" v-for="projectkind in Servicesproject" v-if="projectkind.id == $route.query.id ">
      <div class="main-contents">
        <div class="mt-10">
      <div class="flex justify-between items-center border-b-4 border-solid border-ideeza pb-5">
        <div class="flex">
          <span class="text-ideeza-dark text-xl inline-block font-semibold mr-5">Project: {{projectkind.projectName}}</span>
          <div class="flex items-center  text-gray-500 hover:text-gray-800 cursor-pointer">
            <span class="text-sm inline-block mr-1">Edit</span>
            <font-awesome-icon class="mr-1 h-3" :icon="['fas', 'pen']"/>
          </div>
        </div>
        <button @click.self="addNewProject=true" class="btn btn-normal btn--ideeza px-5 py-3">Create New +</button>
      </div>

      <div class="flex items-center justify-between my-5">
        <div>
          Status: <span class="text-ideeza uppercase">{{projectkind.task_status}}</span>
        </div>
        <div class="flex items-center">
          <div class="text-xl">Project Duration: <span class="text-ideeza">{{projectkind.due_date}}</span></div>
          <font-awesome-icon class="ml-3 h-4 text-gray-800" :icon="['fas', 'calendar-alt']"/>
        </div>
      </div>

      <div class="lg:flex justify-between">
        <div class="project-description lg:mr-16">
          <div class="gradient-bg px-8 py-5 text-white">
            Project Description
          </div>
          <p class="mt-5">
           {{projectkind.projectDescription}}
          </p>
        </div>

        <div class="flex-grow">
          <div class="gradient-bg px-8 py-5 text-white">
            Attachments
          </div>
          <div class="mt-5">
            <span class="block text-xs">3 pics attached</span>
            <div class="flex flex-wrap attached-images-wrapper mt-2">
              <img src="https://picsum.photos/200" alt="">
              <img src="https://picsum.photos/200" alt="">
              <img src="https://picsum.photos/200" alt="">

            </div>
            <div class="text-xs mt-5">
              link attached: <a href="https://google.com">https://google.com</a>
            </div>
          </div>
        </div>
      </div>


      <table class="mt-10 shadow-md">
        <thead>
        <tr class="text-white h16 gradient-bg">
          <th class="text-left ">Tasks</th>
          <th class="text-left">Assigned to</th>
          <th class="text-left">Due Date</th>
          <th class="text-left">Task Status</th>
          <th class="text-left">Notification</th>
        </tr>
        </thead>
        <tbody v-for="(Service, index) in articleArray" v-if="projectkind.projectName == Service.projectName">
        <tr class="bg-ideeza-100">
          <td class="cursor-pointer" @click.self="editTask=true, changeid(Service.id)" >
            {{Service.TaskName}}
          </td>
          <td>
                <span v-for="image in Service.assigned_to_profile_image">
                  <img class="avatar" :src="image[0]" />
                </span>
              </td>
              <td>{{Service.due_date}}</td>
              <td class="status status--completed">{{Service.task_status}}</td>
              <td class="notifications">{{Service.notification}}</td>
            </tr>

        </tbody>
      </table>
      <button @click.self="addNewTask=true" class="btn btn-normal btn--ideeza-dark px-5 py-3 mt-5">Add New Task +</button>


      <div class="mt-20">
        <div class="gradient-bg px-8 py-5 text-white">
          Timeline
        </div>
        <task-timeline />

      </div>

      <!--Add new project-->
      <new-project @onClose="addNewProject=false" v-if="addNewProject" />

      <!--Add new task-->
      <new-task @onClose="addNewTask=false" v-if="addNewTask" />

      <!--Edit task-->
      <edit-task @onClose="editTask=false" v-if="editTask" />
    </div>
      </div>
    </div>

  </div>
</template>

<script>

  import LeftMenu from '~/components/technician/common-left-side-menu.vue'
  import AddNewProject from "~/components/technician/management/new-project.vue"
  import AddNewTask from "~/components/technician/management/new-task.vue"
  import EditTask from "~/components/technician/management/edit-task.vue"
  import TaskTimeLine from "~/components/technician/management/task-timeline.vue"

import Services from "~/data/TechnicianProjectApi.json";

    export default {
        name: "detail",
      components: {
        'new-project': AddNewProject,
        'new-task': AddNewTask,
        'edit-task': EditTask,
        'task-timeline': TaskTimeLine,
        LeftMenu,

      },
      computed: {
        leftMenu() {
          return this.$store.state.usermenu.openLeftMenu;
        }
      },
      methods:{
        changeid(id){
          // alert(id)
          this.$store.commit("TechnicianProjectStore/projectTaskkeychange1", id);
          // alert(this.$store.state.TechnicianProjectStore.projectTaskkey)
        }
      },
      data: function () {
        return {
      Servicestask: Services.firsttask,
      Servicesproject: Services.firstproject,
      articleArray: [],
          addNewProject: false,
          addNewTask: false,
          editTask: false
        }
      },
      created: function() {
    
    this.Servicestask.map(item => {
      this.articleArray.push(item);
    });
  },
    }
</script>

<style scoped>
  .project-description{
    width: 100%;
    max-width: 1000px;
  }
  .attached-images-wrapper img{
    @apply mr-3;
    max-width: 30%;
    width: 100%;
  }
  .avatar{
    @apply w-8 rounded-full -ml-5 shadow inline cursor-pointer;
  }
  .avatar:hover{
    @apply shadow-md;
  }
  .avatar:first-child{
    @apply ml-0;
  }
  .avatar-timeline{
    @apply w-6 rounded-full shadow inline cursor-pointer;
  }
  .status {
    @apply uppercase;
  }
  .status--completed{
    @apply text-green-500;
  }
  .status--progress{
    @apply text-orange-500;
  }
  .status--over{
    @apply text-red-500;
  }
  .notifications{
    @apply text-sm text-ideeza;
  }
  .time-line-contents{
    width: 220px;
  }
  .timeline-days-container div{

  }
  .timeline-line{
    width: 5.6%;
  }
  @screen lg{

    table{
      @apply mb-5 w-full table-fixed border-collapse text-gray-600;
    }
    thead tr{
      @apply bg-white px-6 pl-16;
    }
    thead th{
      @apply p-6;
    }
    thead th:first-child{
      @apply pl-16;
    }
    tbody td{
      @apply p-6 border-r border-solid border-gray-300;
    }
    tbody tr:even{
      @apply bg-white;
    }
    tbody td:first-child{
      @apply pl-16;
    }
    tbody td:last-child{
      @apply border-r-0;
    }

  }
  @media
  only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px)  {

    /* Force table to not be like tables anymore */
    table, thead, tbody, th, td, tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr { border: 1px solid #ccc; margin-bottom: 10px; }

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
    td:nth-of-type(1):before { content: "Products"; }
    td:nth-of-type(2):before { content: "Color"; }
    td:nth-of-type(3):before { content: "Price"; }
    td:nth-of-type(4):before { content: "Quantity"; }
    td:nth-of-type(5):before { content: "Cost"; }
    td:nth-of-type(6):before { content: "Action"; }
  }
</style>
