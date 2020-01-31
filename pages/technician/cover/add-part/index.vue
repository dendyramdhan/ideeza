<template>
    <div class="email-support-container mx-auto mt-16">
      <div class="font-semibold text-xl my-10">Import From Api</div>      
      <Search  class="mt-10"   @onUpdate="upload_files" ref="search_part" />
      <div class="font-semibold text-xl my-10">Add Part</div>
      <Cover ref="cover_engine"  @updatePartList ="update_part_list"  />
      <div class="font-semibold text-xl my-10">Saved Part List</div>
      <SearchPart ref="part_list_show"  />
    </div>
</template>

<script>
    import Search from '~/components/technician/cover/search.vue'
    import SearchPart from '~/components/technician/cover/search-part.vue'
    import Cover from '~/components/technician/cover/add-part.vue'

    export default {

        name: "index",
        data: function () {
            return {
              selectedPart: null

            }
        },
        components: {
            Search,
            Cover,
            SearchPart
        },
        computed: {
        },
        methods: {
          upload_files(e) {
            this.selectedPart = this.$refs.search_part.$data.selectedPart            
            if(!this.selectedPart) return

            if(event.target.files.length){
              window.$nuxt.$cookies.set("loaderFlag",true)
              this.$refs.cover_engine.uploadData = e
            }
          }  
          ,update_part_list(){
            this.$refs.part_list_show.update_part_list()
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
