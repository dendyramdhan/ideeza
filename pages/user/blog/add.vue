<template>
  <div class="main-contents">
    <h1 class="text-xl text-gray-800 font-semibold border-b heading-border pb-3">Add new article</h1>
    <div class="field-container mt-10">
      <div class="text-lg text-gray-800 mb-2">Article name</div>
      <text-field />
    </div>
    <div class="field-container mt-10">
      <div class="text-lg text-gray-800 mb-2">Category</div>
      <category-field placeholder="category" />
    </div>
    <div class="textarea mt-10">
      <div class="text-lg text-gray-800 mb-2">Description</div>
      <text-area placeholder="description" rows="7" />
    </div>
    <div class="field-container mt-10">
      <div class="text-lg text-gray-800 mb-2">Image</div>
      <form @submit.prevent="onSubmit" enctype="multipart/form-data">
        <file-field v-model="files" />
      </form>
    </div>

    <div class="mt-12 text-center lg:text-left">
      <button
        class="btn btn-normal btn--ideeza-dark py-4 px-10 text-lg"
        @click="uploadUserBlog"
      >Publish</button>
      <nuxt-link :to="{ path: '/user/blog/view', query: { id: counter, name:ArticlesName}}">
        <button class="btn btn-normal btn--ideeza-dark py-4 px-10 text-lg" >Preview</button>
      </nuxt-link>
      <!-- {{this.$store.state.userBlogStore.viewflag }} -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'

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
      base_url:process.env.base_url,
    };
  },
  methods: {
      async uploadUserBlog() {
      const formData = new FormData();
      formData.append("file", this.file);
      // alert(this.files);alert(articles.length + 1);
      let articlesId = articles.length + 1;
      let articlesName = this.$store.state.userBlogStore.ArticlesName;
      let articlesCategory = this.$store.state.userBlogStore.CategoryName;
      let articlesDescription = this.$store.state.userBlogStore.DescriptionName;
      let articlesImageFile = this.files;
      let body = {
        userid: articlesId,
        article: articlesName,
        category: articlesCategory,
        description: articlesDescription,
        image: articlesImageFile
      };
      console.log(body);
      try {
        var url=this.base_url+"add_blog"
        // await axios.post(url, body);
        
                    
        await axios.post(this.base_url+"/api/add_blog", {headers: {"token": "Brearer user_login_token", "Content-Type": "application/json"},
                    data: {
                      userid: articlesId,
        article: articlesName,
        category: articlesCategory,
        description: articlesDescription,
        image: articlesImageFile
                    }}).then(response => {
                        // If request is good...
                        console.log(response.data);
                      })
                      .catch((error) => {
                        console.log('error 3 ' + error);
                      });




        console.log("Upload", body);
      } catch (err) {
        console.log(err);
         console.log("Something went wrong!!!");
      }

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
</style>
