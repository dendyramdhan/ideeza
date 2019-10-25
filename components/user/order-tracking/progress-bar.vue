<template>
    <div class="progress-bar relative border border-solid border-ideeza">
      <div class="h-full bg-ideeza absolute top-0 left-0 pr-5" :style="progressWidth">
        <span class="progress-counter absolute-center-v text-white font-semibold">{{displayProgress}}</span>
      </div>

    </div>
</template>

<script>
    export default {
        name: "progress-bar",
      props: ['width'],
      computed: {
          progressWidth(){
            return `width: ${this.width}%`
          },
          displayProgress() {
            return `${this.width}%`
          }
      }
    }
</script>

<style scoped>
  .progress-bar{
    height: 45px;
  }
  .progress-counter{
    right: 10px;
  }
</style>
