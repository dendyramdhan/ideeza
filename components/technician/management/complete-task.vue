<template>
    <div @click.self="close" class="popup-overlay">
      <div class="popup-overlay--contents add-new-container">
        <!--Header-->
        <!--Contents-->
        <div class="p-5 mt-10 popup-body">
          <h1 class="font-bold text-2xl mb-2">Congratulations, you have finished the task!</h1>
          <h4 class="text-lg font-bold text-ideeza mb-2">Tell us about your opinion about this task</h4>
          <textarea class="border border-gray-300 w-full mb-5 p-5" rows="8" placeholder="Tell us about your opinion about this task " v-model="message"></textarea>
          <div class="text-right mb-5">
              <button class="bg-ideeza px-3 py-2 text-white">Complete Project</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import TextAreaField from "~/components/form/text-area.vue"
    export default {
        name: "new-project",
      data: function() {
        return {
            message: null
        }
      },
      components: {
        TextAreaField
      },
      methods: {
          close(){
            this.$emit('onClose');
          },
      }
    }
</script>

<style scoped>
  .add-new-container{
    @apply w-1/2;
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
    max-height: 80vh;
    overflow-y: auto;
  }
</style>
