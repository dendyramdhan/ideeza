<template>
  <div>
    <textarea :rows="rows" :placeholder="placeholder"></textarea>
  </div>

</template>

<script>
    export default {
        name: "text-area",
        props: ['placeholder', 'rows'],
        methods: {
          handleInput (e){
            this.$emit('input', e.target.value)
          }
        }
    }
</script>

<style scoped>
  textarea{
    @apply w-full h-full bg-white border border-solid border-gray-300;
    padding: 12px 24px;
  }
</style>
