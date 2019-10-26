<template>
    <div v-on:click.stop.prevent="onClickPop" class="mt-12 bg-white absolute border border-solid border-gray-400 shadow shadow-ld z-50 p-5 flex items-center">
      <div class="invite-field-container mr-5">
        <text-field placeholder="Enter email" class="text-gray-800" />
      </div>
      <button class="btn btn-normal btn--ideeza px-6 py-5">Invite</button>
    </div>
</template>

<script>
  import TextField from '~/components/form/text-field.vue'
    export default {
        name: "add-member-popup",
      components: {
        'text-field': TextField
      },
      methods: {
        onClickPop() {

        }
      }
    }
</script>

<style scoped>
  .invite-field-container{
    width: 250px;
  }
</style>
