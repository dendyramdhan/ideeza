<template>
    <div class="email-support-container mx-auto mt-16">

      <add-search  class="mt-10" />

      <div class="font-semibold text-xl my-10">Add Cover</div>

      <Cover />

    </div>
</template>

<script>

    import Search from '~/components/technician/cover/search.vue'
    import Cover from '~/components/technician/cover/add-component.vue'
    export default {
        name: "index",
       
        data: function () {
            return {

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
            console.log("updated file ", e)

          }

        },
        mounted(){
          
        }
      }
</script>

<style scoped>

  .email-support-container{
    width: 100%;
    max-width: 1100px;
  }

</style>
