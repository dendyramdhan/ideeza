<template>
  <label class="file-select">
    <div class="flex items-center">
      <div class="btn btn--ideeza px-3 py-2 text-xs mr-5">Choose</div>
      <div class="text-sm">
        <span class="text-gray-800" v-if="files">{{files}}</span>
        <span class="text-gray-400" v-else>No file choosen</span>
      </div>
    </div>
    <input type="file" @change="handleFileChange" />
  </label>
</template>

<script>
import axios from "axios";
export default {
  name: "file-field",

  data: function() {
    return {
      files: null,
      message: " "
    };
  },
  methods: {
    async handleFileChange(e) {
      let file = e.target.files[0];
      if (file && file.name) {
        this.files = file.name;
        this.$store.commit("userBlogStore/ImageurlName", this.files);
        console.log("image url:", this.files);
        
      //    const formData = new FormData();
      // formData.append("file", this.file);
      // try {
      //   await axios.post("/upload", formData);
      //   this.message = "Upload!!";
      // } catch (err) {
      //   console.log(err);
      //   this.message = "Something went wrong!!!";
      // }
        // const formData = new FormData();
        // formData.append("myFile", this.files, this.files.name);
        // axios.post("../../assets/img/userBlog", formData);
      } else {
        this.files = null;
      }
      this.$emit("input", file);
    }
  }
};
</script>

<style scoped>
.file-select {
  @apply block w-full bg-white border border-solid border-gray-300 text-lg p-2;
}
.file-select > .select-button {
  padding: 1rem;

  color: white;
  background-color: #2ea169;

  border-radius: 0.3rem;

  text-align: center;
  font-weight: bold;
}

.file-select > input[type="file"] {
  display: none;
}
</style>
