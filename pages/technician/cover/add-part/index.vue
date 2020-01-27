<template>
    <div class="email-support-container mx-auto mt-16">
      <Search  class="mt-10"   @onUpdate="upload_files" />
      <div class="font-semibold text-xl my-10">Add Part</div>
      <Cover ref="cover_engine"/>
    </div>
</template>

<script>

    import Search from '~/components/technician/cover/search.vue'

    import Cover from '~/components/technician/cover/add-part.vue'

    export default {
        name: "index",
        data: function () {
            return {
              upload_file: null
            }
        },

        components: {
            Search,
            Cover
        },

        computed: {
        },

        methods: {
          upload_files(e) {
            if(e.target.files.length){
              this.upload_file = e.target.files[0]
            }
          }
        }
    }
</script>

<style scoped>

  .email-support-container{
    width: 100%;
    max-width: 1100px;
  }

</style>
