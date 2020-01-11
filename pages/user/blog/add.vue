<template>
  <div class="main-contents">
    <h1 class="text-xl text-gray-800 font-semibold border-b heading-border pb-3">Add new article</h1>
    <div class="field-container mt-10">
      <div class="text-lg text-gray-800 mb-2">Article name</div>
      <!-- <text-field /> -->
      <input
        @change="articlename"
        placeholder
        class="w-full bg-white border border-solid border-gray-300 text-lg"
      />
    </div>
    <div class="field-container mt-10">
      <div class="text-lg text-gray-800 mb-2">Category</div>
      <!-- <category-field placeholder="category" /> -->
      <input
        @change="categoryname"
        placeholder="category"
        class="w-full bg-white border border-solid border-gray-300 text-lg"
      />
    </div>
    <div class="textarea mt-10">
      <div class="text-lg text-gray-800 mb-2">Description</div>
      <!-- <text-area placeholder="description" rows="7" /> -->
      <textarea
        placeholder="description"
        @change="descriptionNameChange"
        v-model="descriptionName"
        rows="10"
      ></textarea>
    </div>
    <div class="field-container mt-10">
      <div class="text-lg text-gray-800 mb-2">Image</div>
      <form   enctype="multipart/form-data">
        <!-- <file-field v-model="files" ref="file" id="file" @change="fileseleted"/> -->
        
      <input type="file" @change="fileseleted" ref="file_upload" style="display:none"/>
       <button
       class="btn btn-normal btn--ideeza px-10 py-4 block lg: iinline-block"
        @click="$refs.file_upload.click()"
      >select</button>
  <!-- 
        <label class="file-select" :class="borderClass">
    <div class="flex items-center">
      <div class="btn px-3 py-2 text-xs mr-5" :class="btn">Choose</div>
      <div class="text-sm">
        <span class="text-gray-800" v-if="files">{{files}}</span>
        <span class="text-gray-400" v-else>No file choosen</span>
      </div>
    </div>
    <input type="file" @change="handleFileChange" />
  </label> -->

      </form>
    </div>

    <div class="mt-12 text-center lg:text-left">
      <button
        class="btn btn-normal btn--ideeza-dark py-4 px-10 text-lg"
        @click="uploadUserBlog"
      >Publish</button>
      <nuxt-link :to="{ path: '/user/blog/view', query: { id: counter, name:ArticlesName}}">
        <button class="btn btn-normal btn--ideeza-dark py-4 px-10 text-lg">Preview</button>
      </nuxt-link>
      <!-- {{this.$store.state.userBlogStore.viewflag }} -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

import articles from "../../../data/BlogApi.json";
import TextField from "~/components/form/text-field.vue";
import TextArea from "~/components/form/text-area.vue";
import CategoryField from "~/components/form/category-field.vue";
import FileField from "~/components/form/file-field.vue";

export default {
  name: "add-blog",
  components: {
    "text-field": TextField,
    "text-area": TextArea,
    "category-field": CategoryField,
    "file-field": FileField
  },
  data: function() {
    return {
      articles: articles,
      counter: articles.length + 1,
      base_url: process.env.base_url,
      file: null,
      articlena: "",
      categoryna: "",
      descripttionname2: ""
    };
  },
  methods: {
    fileseleted(event) {
      // this.file = this.$refs.file.files[0];
      console.log("file_upload:", event);
      this.file = event.target.files[0];
    },
    articlename(event) {
      this.articlena = event.target.value;
    },
    categoryname(event) {
      this.categoryna = event.target.value;
    },
    descriptionNameChange(event) {
      this.descripttionname2 = event.target.value;
    },

    uploadUserBlog() {
      // this.file = this.$refs.file.files[0];
      const formData = new FormData();
      formData.set("article", this.articlena);
      formData.set("category", this.categoryna);
      formData.set("description", this.descripttionname2);
      formData.append("image", this.file);
      var url = this.base_url + "/api/add_blog";
      console.log("upload data", formData);
      let tokenStr =
        "eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjI0NDI3NDY4OTYsImlhdCI6MTU3ODc0Njg5NiwianRpIjoiSU5RYVhrN05KOVdaY2VQSEY1dW1VUSIsIm5iZiI6MTU3ODc0Njg5NiwidXNlcmlkIjoiZmU1MDVhNjEtNzQ3ZS00MzJhLWE5ODQtNjdhNTc2NDQxYzFjIn0.EuXK2Ps63HSqXwgGH3oSF_08P_rsOMD8rfFD9y8UwHr25bXFmlL_fxR9ZX-4NURn_TnU63VGF9ihRBiBnePzcyO1HGi1GjM3f_iOxFPan5WxTAobQo7BZ-SWEVxcWGpdva23sdhGHDU1yUKz_pddkfwl7x6U29qnHm8bLNDUDsmXgUS5v5OmRYCcmr9c7TD8XUYm95AX3UN5kVXd3U1Z8XX9V8wPDa-T1ETDjRNZqHOHobxITsGnOJelVDx8F9Y4iQVxNpgemDY8Q8SfMLfhy3tPtpkcX0m2Yz2vD2mS5dFIy5wKjFqdaxW6Y5yiLJsGpeghkPG_D5EiALbJgqKDEQ";
      axios({
        method: "post",
        url: url,
        data: formData,
        headers: { Authorization: `Bearer ${tokenStr}` }
      })
        .then(function(response) {
          //handle success
          console.log(response);
        })
        .catch(error => {
          //handle error
          console.log(error);
        });

      // // alert(this.files);alert(articles.length + 1);
      // let articlesId = articles.length + 1;
      // let articlesName = this.$store.state.userBlogStore.ArticlesName;
      // let articlesCategory = this.$store.state.userBlogStore.CategoryName;
      // let articlesDescription = this.$store.state.userBlogStore.DescriptionName;
      // let articlesImageFile = this.files;
      // let body = {
      //   userid: articlesId,
      //   article: articlesName,
      //   category: articlesCategory,
      //   description: articlesDescription,
      //   image: articlesImageFile
      // };
      // console.log(body);
      // try {
      //   var url=this.base_url+"/api/add_blog"
      //   // await axios.post(url, body);

      //   await axios.post(this.base_url+"/api/add_blog", {headers: {"token": "Brearer user_login_token", "Content-Type": "application/json"},
      //               data: {
      //                 userid: articlesId,
      //   article: articlesName,
      //   category: articlesCategory,
      //   description: articlesDescription,
      //   image: articlesImageFile
      //               }}).then(response => {
      //                   // If request is good...
      //                   console.log(response.data);
      //                 })
      //                 .catch((error) => {
      //                   console.log('error 3 ' + error);
      //                 });

      //   console.log("Upload", body);
      // } catch (err) {
      //   console.log(err);
      //    console.log("Something went wrong!!!");
      // }

      //  alert(body);
      // axios.post('http://192.168.1.190:3003/todos/addplan', body)
    }
  }
};
</script>

<style scoped>
.blog-container {
  width: 100%;
  max-width: 1530px;
  padding: 20px 5px;
}
.field-container {
  width: 100%;
  max-width: 375px;
}
.textarea {
  width: 100%;
  max-width: 700px;
}

@screen lg {
  .blog-container {
    padding: 60px 50px;
  }
}

input {
  padding: 12px 24px;
}
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
