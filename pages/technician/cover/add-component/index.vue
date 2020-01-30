<template>
  <div class="email-support-container mx-auto mt-16">
    <Search  class="mt-10" @uploadModel ="updateModel"  />
    <div class="font-semibold text-xl my-10">Add Component</div>
    <Cover ref="coverComponent"  />
  </div>
</template>

<script>

  import Search from '~/components/technician/cover/search-part-component.vue'
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
      updateModel(e){

        let transData = e.partInfo.transData
        console.log("slected poart : ", e, transData)
        
        let obj = {'transform':{'position':[transData.transform.position[0],transData.transform.position[1],transData.transform.position[2]],
        'rotation':[transData.transform.rotation[0], transData.transform.rotation[1], transData.transform.rotation[2]],'scale':[transData.transform.scale[0], transData.transform.scale[1], transData.transform.scale[2]],
        'color': transData.transform.color},'url': transData.url}
        this.$refs.coverComponent.addImage(obj)        
        
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
