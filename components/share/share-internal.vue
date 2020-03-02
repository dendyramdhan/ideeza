<template>
  <div @click.self="$emit('close')" class="popup-overlay">
    <div class="popup-overlay--contents add-new-container">
      <h1 class="font-semibold">Share in news feed</h1>
      <textarea
        name
        id
        cols="30"
        rows="10"
        class="w-full border border-solid border-light-gray my-5"
        @change="descriptionchange"
      ></textarea>
      <div class="flex items-center">
        <div>
          <font-awesome-icon
            class="mr-1 h-8 text-gray-500 hover:text-gray-600 cursor-pointer text-4xl"
            :icon="['fas', 'laugh']"
          />
        </div>
        <div class="flex-grow">
          <input class="w-full p-2 border-0 outline-none" />
        </div>
        <div>
          <button class="btn pill-button--ideeza px-4 py-1" @click="shareproject">Share</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from "~/apiService/have_token.js";

export default {
  name: "share-internal",
  data: function() {
    return {
      geturl: "/api/project/share",
      description: null,
      projectid: null
    };
  },
  mounted() {
    this.projectid = window.$nuxt.$cookies.get("userprojectid");
  },
  methods: {
    descriptionchange(e){
      this.description = e.target.value;
    },
    shareproject() {
      // alert(this.description+"_sdf_"+this.projectid);
      const formData = new FormData();
      formData.set("projectid", this.projectid);
      formData.set("description", this.description);
      let sendData = {
        method: "post",
        url: this.geturl,
        data: formData
      };
      apiService(sendData, response => {
        console.log(response);
      });
    }
  }
};
</script>

<style scoped>
.add-new-container {
  @apply w-full p-5 shadow-lg;
  max-width: 600px;
}
</style>
