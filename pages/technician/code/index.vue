<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />
    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="code-contents w-full mx-auto">
        <h1 class="text-3xl my-10">Code Editor</h1>
        <AddCode ref="childComponent" />
        <div class="mt-1" style="padding: 3%; padding-bottom: 0;">
          <table>
            <thead>
              <tr class="text-gray-800 h10">
                <th class="text-left w-12">No</th>
                <th class="text-left w-64">File List</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(file, index) in uploadFiles" :key="`${index}`">
                <td>
                  {{index + 1}}
                </td>
                <td>
                  {{file.name}}
                </td>
                <td>
                  <button class="block md:inline-block mb-2 md:mb-0 btn pill-button px-5">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <input type="file" style="display: none;" @change="handleFileChange" ref="file_upload" />
        </div>
        <div class="md:flex text-center justify-between mt-10 mx-2">
          <button class="block md:inline-block mb-2 md:mb-0 btn pill-button px-12 " @click="$refs.file_upload.click()">+ Add New File</button>
          <button class="block md:inline-block mb-2 md:mb-0 btn pill-button pill-button--ideeza px-12" @click="save_data">Save</button>
        </div>
        <h1 class="text-3xl my-10">Code List</h1>
        <div class="mt-1" style="padding: 3%; padding-bottom: 0;">
          <table>
            <thead style="border-bottom: 1px dotted">
              <tr class="text-gray-800 h10">
                <th class="text-left w-12">No</th>
                <th class="text-left w-64">File Name</th>
                <th class="text-left w-64">Code Type</th>
                <th class="text-left w-64">Attached Files</th>
                <th class="text-left w-64">Created At</th>
                <th class="text-left w-64">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(file, index) in codeList" :key="`${index}`">
                <td>
                  {{index + 1}}
                </td>
                <td>
                  {{file.filename}}
                </td>
                <td>
                  {{file.type}}
                </td>
                <td>
                  {{file.attached}}
                </td>
                <td>
                  {{file.createdAt}}
                </td>
                <td>
                  <button class="block md:inline-block mb-2 md:mb-0 btn pill-button px-5">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <input type="file" style="display: none;" @change="handleFileChange" ref="file_upload" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LeftMenu from '~/components/technician/common-left-side-menu.vue'
import AddCode from '~/components/technician/add-code.vue'
import apiService from "~/apiService/have_token.js"


export default {
  layout: 'technician',
  name: "code-index",
  components: {
    LeftMenu,
    AddCode
  },

  data: function() {
    return {
      childData: AddCode.data,
      uploadFiles: [],
      codeList: []
    }
  },

  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  methods: {
    save_data() {
      let data = new FormData()
      this.uploadFiles.map(item => {
        data.append("attach", item)
      })

      if (!this.$refs.childComponent.$data.file_name) return

      data.append("file_name", this.$refs.childComponent.$data.file_name)
      data.append("type", this.$refs.childComponent.$data.selectedLanguage)
      data.append("code", this.$refs.childComponent.$data.editor.getValue())

      let sendData = {
        url: "/api/save_technician_code",
        method: "post",
        data
      }

      apiService(sendData, (res) => {
        console.log("upload code : ", res)
      })
      console.log("data : ", sendData)

    },

    handleFileChange(e) {
      // console.log("handleFileChange :", e.target.files)
      let file = e.target.files[0];
      this.uploadFiles.push(e.target.files[0]);
      if (file && file.name) {
        this.files = file.name;
      } else {
        this.files = null;
      }
      this.$emit("input", file)
      console.log("uploaded files  :", this.uploadFiles)
    }

  },
  mounted() {
    let sendData = {
      url: "/api/get_technician_code_list",
      method: "post",
      data: null
    }
    apiService(sendData, (res) => {

      console.log("res for teh technician code : ", res.data)


      if (res.data.list.length > 0) {
        res.data.list.map(item => {

          var date = new Date(item.created_at)
          var createdAt = date.toISOString()

          let codeItem = {
            id: item.id,
            type: item.type,
            filename: item.filename,
            attached: item.attach.length,
            code: item.code,
            createdAt
          }

          this.codeList.push(codeItem)

        })
      }

      console.log("res for teh technician code : ", this.codeList)



    })
  },

}

</script>
<style scoped>
.code-contents {
  max-width: 1200px;
}

</style>
