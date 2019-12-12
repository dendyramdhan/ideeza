<template>
  <label class="file-select">
    <div class="flex items-center">
      <div class="btn pill-button py-0 px-5">{{label}}</div>
    </div>

    <input type="file" multiple @change="handleFileChange"/>
  </label>
</template>

<script>
    export default {
        name: "file-field",
      props: {
        label: {
          type: String,
          default: 'Choose Files'
        }
      },

      data: function(){
        return {
          files: null
        }
      },
      methods: {
        handleFileChange(e) {
          this.$emit('input', e)
        }
      }
    }
</script>

<style scoped>
  .file-select{
    @apply bg-white px-5;
  }
  .file-select > .select-button {
    padding: 1rem;

    color: white;
    background-color: #2EA169;

    border-radius: .3rem;

    text-align: center;
    font-weight: bold;
  }

  .file-select > input[type="file"] {
    display: none;
  }
</style>
