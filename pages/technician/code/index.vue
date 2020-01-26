<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>
    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="code-contents w-full mx-auto">
        <h1 class="text-3xl my-10">Code Editor</h1>
        <AddCode ref="childComponent"/>
        <div class="mt-1" style="padding: 3%; padding-bottom: 0;">
          <table>
            <thead>
              <tr class="text-gray-800 h10">
                <th class="text-left w-12">No</th>
                <th class="text-left w-64">File List</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  1
                </td>
                <td>
                  file1.pcb
                </td>
                <td>
                  <button class="block md:inline-block mb-2 md:mb-0 btn pill-button px-5">Delete</button>
                </td>
              </tr>
              <tr>
                <td>
                  2
                </td>
                <td>
                  file2.cpp
                </td>
                <td>
                  <button class="block md:inline-block mb-2 md:mb-0 btn pill-button px-5">Delete</button>
                </td>
              </tr>       
              <!-- <tr class v-for="(article, index) in partList" :key="`${index}`">
                <td class>{{article.name}}</td>
                <td>{{article.country}}</td>
                <td>{{article.package}}</td>
                <td class="text-ideeza">{{article.manufacturer}}</td>
                <td>
                  <button @click="select_part(index)" class="btn pill-button px-4 py-0">select</button>
                </td>
              </tr> -->
            </tbody>
          </table>
          <input type="file" style="display: none;" />
        </div>
        <div class="md:flex text-center justify-between mt-10 mx-2">
          <button class="block md:inline-block mb-2 md:mb-0 btn pill-button px-12 ">+ Add New File</button>
          <button class="block md:inline-block mb-2 md:mb-0 btn pill-button pill-button--ideeza px-12" @click="save_data" >Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import LeftMenu from '~/components/technician/common-left-side-menu.vue'
    import AddCode from '~/components/technician/add-code.vue'

    export default {
        layout: 'technician',
        name: "code-index",
        components: {
            LeftMenu,
            AddCode
        },

         data: function () {
            return {
              childData : AddCode.data,
              uploadFiles: []
            }
        },

        computed: {
            leftMenu() {
                return this.$store.state.usermenu.openLeftMenu;
            }
        },
        methods:{
          save_data(){
            
            console.log("save data", this.$refs.childComponent.$data.editor.getValue())
          },
          handleFileChange(e){

            let file = e.target.files[0];
            this.uploadFile.push(e.target.files[0]);

            if (file && file.name) {
              this.files = file.name;
            } else {
              this.files = null;
            }

            this.$emit("input", file);

          }

        },
        mounted() {


        },

    }
</script>

<style scoped>
  .code-contents{
    max-width: 1200px;
  }
</style>
