<template>
  <div class="absolute-center-h-v myIdeeza">
    <div class="relative w-full h-full">

      <div class="layer-icon-container">
        <LayersIcon class="fill-current absolute-center-h-v" />
      </div>

      <div class="my-ideeza-contents">
        <div class="flex justify-between items-center font-semibold">
          <span>My ideeza...</span>
          <font-awesome-icon class="mr-1 h-4" :icon="['fas', 'microphone']"/>
        </div>
      </div>

      <img class="ideeza-go-icon absolute-center-h cursor-pointer bottom-0" src="~/static/icons/my-ideeza-go.png">
    </div>
  </div>
</template>

<script>
  import LayersIcon from "~/components/partials/icons/layers-icon.vue"
    export default {
        name: "new-ideeza",
        components: {
          LayersIcon
        }

    }
</script>

<style scoped>
  .myIdeeza{
    @apply bg-white w-full border border-solid border-ideeza-dark z-50;
    max-width: 780px;
    height: 230px;
  }
  .layer-icon-container{
    @apply bg-ideeza-dark text-white rounded-full absolute;
    width: 75px;
    height: 75px;
    margin-left: -35px;
    margin-top: -35px;
  }
  .my-ideeza-contents{
    @apply px-5;
    padding-top: 40px;
  }
  .ideeza-go-icon{
    margin-bottom: -75px;
  }
  .layer-icon{
    width: 33px;
    height: 33px;
  }
</style>
