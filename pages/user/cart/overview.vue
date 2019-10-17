<template>
  <div class="my-20 px-20 py-20">
    <button @click="back" class="btn pill-button pill-button--ideeza px-10 py-2 mr-3">Back</button>
    <button @click="next" class="btn pill-button pill-button--ideeza px-10 py-2">Next</button>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
    export default {
        name: "overview",
      methods: {

        ...mapMutations({
          next: 'cartstepper/incrementStep',
          back: 'cartstepper/decrementStep'
        })
      }
    }
</script>

<style scoped>

</style>
