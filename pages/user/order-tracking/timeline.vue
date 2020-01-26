<template>
<div class="mt-20">
    <div class="px-10 py-6 gradient-bg text-white mb-5">Time Line</div>
    <div class="lg:flex ">
    <div class="time-line-contents text-xs border-r border-solid border-gray400 p-2 text-black">
      <div class="pl-10 text-base">Project Timing</div>
      <div class="flex justify-between items-center my-2 mx-2 text-sm" @click="showProjectModal=true">
        <img class="avatar-timeline mr-2" src="https://randomuser.me/api/portraits/men/33.jpg">
        <div>Make iron from steal</div>
      </div>
      <div class="flex justify-between items-center my-2 mx-2 text-sm" @click="showProjectModal=true">
        <img class="avatar-timeline mr-2" src="https://randomuser.me/api/portraits/men/33.jpg">
        <div>Make iron from steal</div>
      </div>
      <div class="flex justify-between items-center my-2 mx-2 text-sm" @click="showProjectModal=true">
        <img class="avatar-timeline mr-2" src="https://randomuser.me/api/portraits/men/33.jpg">
        <div>Make iron from steal</div>
      </div>

    </div>

    <div class="flex-grow ml-5">
      <div class="flex justify-between">
        <div class="text-center flex-grow" v-for="(n) in 18" :key="n">{{n}}</div>
      </div>
      <div class="w-full task-line-container relative">
        <div class="bg-ideeza-dark drag-task relative flex justify-end w-64">
          <div v-dragged="onDragged" class="dragger bg-ideeza-dark"></div>
        </div>
      </div>

      <div class="w-full task-line-container relative">
        <div class="bg-ideeza drag-task relative flex justify-end w-56">
          <div v-dragged="onDragged" class="dragger bg-ideeza"></div>
        </div>
      </div>

      <div class="w-full task-line-container relative">
        <div class="bg-orange-500 drag-task relative flex justify-end w-32">
          <div v-dragged="onDragged" class="dragger bg-orange-500"></div>
        </div>
      </div>
    </div>
  </div>
  <project-detail id="1" v-if="showProjectModal" @close="showProjectModal=false"/>
</div>
</template>
<script>
import ProjectDetail from '~/components/user/order-tracking/project-detail.vue'
export default {
    components: {
        ProjectDetail
    },
    data() {
        return {
            showProjectModal: false
        }
    }
}
</script>
<style scoped>
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
  .time-line-contents{
    width: 220px;
  }
  .timeline-days-container div{

  }
  .timeline-line{
    width: 5.6%;
  }
  .drag-task{
    height: 15px;
  }
  .dragger{
    transition: all 0.3s ease-in;
    height: 15px;
    width: 15px;
    cursor: pointer;
  }
  .dragger:hover{
    transform: scale(1.2);
  }
  .task-line-container{
    margin-top: 15px;
    transition: all 0.05s;
  }
</style>