<template>
  <div class="w-full">
    <div class="search-container flex w-fit-content bg-white items-center content-center border border-solid border-gray-300">
    <div class="h-12 relative w-10">
      <font-awesome-icon class="ml-1 h-4 text-gray-400 absolute-center-h-v" :icon="['fas', 'search']"/>
    </div>
    <input placeholder="search ..." class="bg-white flex-grow outline-none h-8 text-gray-800 pr-3"
      v-bind:value="searchComponent"
      v-on:input="searchComponent = $event.target.value"
      v-on:keyup="search_component"      
    >
    </div>

    <div class="flex justify-between items-center p-4" v-if="selectedFlag">
      <div class="flex items-center">
        <img src="~/static/images/add-part.png" alt />
        <div class="ml-5">
          <span class="block font-semibold">{{selectedPart.ID}}</span>
          <span
            class="text-sm, text-gray-600"
          >{{selectedPart.description}}
          </span>
        </div>
      </div>
      <div>
        <!-- <file-field label="Upload 3D" v-on:input="upload3dModel" /> -->
        <button @click="upload_component"  class="btn pill-button px-4 py-0">Load Component</button>
      </div>

    </div>

    <table>

      <thead>
        <tr class="text-gray-800 h10">
          <th class="text-left w-64">ID</th>
          <th class="text-left">Description</th>
          <th class="text-left">Created At</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>

      <tbody>   

        <tr class v-for="(article, index) in partList" :key="`${index}`">
          <td class>{{article.id}}</td>
          <td class="text-ideeza">{{article.description}}</td>
          <td class="text-ideeza">{{article.created_at}}</td>
          <td>
            <button @click="select_component(index)" class="btn pill-button px-4 py-0">Select</button>
          </td>
        </tr>

      </tbody>
    </table>

  </div>
</template>

<script>
    import apiService from "~/apiService/have_token.js"
    import FilesField from '~/components/form/file-field-button.vue'

    export default {
        name: "search-list",
        data: function() {
          return {
            // technicianaddpartsearchs: technicianaddpartsearchs,
            searchComponent: "",   
            partList : [],
            selectedPart : null,
            selectedFlag: false
          };
        },
        components: {
          'file-field': FilesField
        },

        methods: {
          search_component(e){

             if (this.searchComponent.length<3 ||  e.key != "Enter")
              return;

          },
          select_component(index){

            this.selectedPart = this.partList[index]
            this.selectedFlag = true
            // console.log("selected part : ", index, this.selectedPart)

          }
          ,
          upload_component(){

            // this.selectedPart = this.partList[index]

            console.log("selected comp : ", this.selectedPart)
            this.$emit("uploadModel", this.selectedPart)
            this.selectedFlag = false
            // console.log("selected part : ", index, this.selectedPart)

          }
          ,update_part_list(){

            let sendData ={
              url: "/api/get_cover_component_list",
              method: "post",
              data: null
            }      
            const fileUrl = "api/technician/cover_part/"
            apiService(sendData, (res)=>{

              console.log("res :", res)
             
              this.partList = []
              if(res.data.list.length>0){
                res.data.list.map(item=>{
                  
                  let partInfo = JSON.parse(item.part_info)
                  let dateTime =  new Date(item.created_at)

                  let itemData = {
                    id: item.id,
                    created_at: dateTime.toISOString().substring(0, 10),
                    partInfo,
                    description: item.descriptionText
                  }

                  this.partList.push(itemData)

                })
              }
              console.log("get part list array : ", this.partList)
            })
          }
        },
        mounted(){
          this.update_part_list()          
        }
}
</script>

<style scoped>
  @screen lg{

    table{
      @apply mb-5 w-full table-fixed border-collapse text-gray-600;
    }
    thead tr{
      @apply bg-white px-6 pl-16;
    }
    thead th{
      @apply p-6;
    }

    tbody td{
      @apply p-6;
    }
    tbody tr:even{
      @apply bg-white;
    }


  }



  @media
  only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px)  {

    /* Force table to not be like tables anymore */
    table, thead, tbody, th, td, tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr { border: 1px solid #ccc; margin-bottom: 10px; }

    td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
    }

    td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
      font-weight: 600;
    }

    /*
      Label the data
      */
    td:nth-of-type(1):before { content: "Products"; }
    td:nth-of-type(2):before { content: "Color"; }
    td:nth-of-type(3):before { content: "Price"; }
    td:nth-of-type(4):before { content: "Quantity"; }
    td:nth-of-type(5):before { content: "Cost"; }
    td:nth-of-type(6):before { content: "Action"; }
  }
</style>
