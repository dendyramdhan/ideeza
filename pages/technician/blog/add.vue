<template>
  <div class="main-contents">
    <h1 class="text-xl text-gray-800 font-semibold border-b heading-border pb-3">Add new article</h1>
    <div class="field-container mt-10">
      <div class="text-lg text-gray-800 mb-2">Article name</div>
      <input v-model="articleName" name="articleName" data-vv-as="article name" v-validate="'required'" class="w-full bg-white border border-solid border-gray-300 text-lg" />
      <div class="validate-error-msg">
        <span class="caption" v-if="errors.first('articleName')">
          {{ errors.first('articleName') }}
        </span>
      </div>
    </div>
    <div class="field-container mt-10">
      <div class="text-lg text-gray-800 mb-2">Category</div>
      <tag-input element-id="tags" v-model="categories" :typeahead-hide-discard="true" :limit="1" placeholder="Add Category" :typeahead-always-show="true" :existing-tags="[
        { key: 'code', value: 'Code' },
        { key: 'electronics', value: 'Electronics' },
        { key: 'parts', value: 'Parts' },
        ]" :typeahead="true"></tag-input>
    </div>
    <div class="mt-10">
      <div class="text-lg text-gray-800 mb-2">Description</div>
      <textarea placeholder="description" v-model="articleDescription" name="articleDescription" v-validate="'required'" data-vv-as="description" rows="10" class="w-full"></textarea>
      <div class="validate-error-msg">
        <span class="caption" v-if="errors.first('articleDescription')">
          {{ errors.first('articleDescription') }}
        </span>
      </div>
    </div>
    <div class="field-container mt-10">
      <div class="text-lg text-gray-800 mb-2">Image</div>
      <img id="image" class="w-full" />
      <form enctype="multipart/form-data">
        <file-field @input="fileseleted" border-class="border-ideeza-dark rounded" btn="btn--ideeza-dark" />
      </form>
      <div class="validate-error-msg">
        <span class="caption" v-if="fileError">
          {{ fileError }}
        </span>
      </div>
    </div>
    <div class="mt-12 text-center lg:text-left">
      <button @click="showPreview" class="btn btn-normal btn--ideeza-dark py-4 px-10 text-lg">Preview</button>
      <button class="btn btn-normal btn--ideeza px-10 py-4 lg: iinline-block" @click="uploadUserBlog">Publish</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import apiService from "~/apiService/have_token.js";

import articles from "../../../data/BlogApi.json";
import TextField from "~/components/form/text-field.vue";
import TextArea from "~/components/form/text-area.vue";
import CategoryField from "~/components/form/category-field.vue";
import FileField from "~/components/form/file-field.vue";
import TagsInput from '@voerro/vue-tagsinput/src/VoerroTagsInput.vue'

export default {
  middleware: "auth",
  name: "add-blog",
  layout: "technician",
  components: {
    "text-field": TextField,
    "text-area": TextArea,
    "category-field": CategoryField,
    "file-field": FileField,
    'tag-input': TagsInput
  },
  data: function() {
    return {
      articles: articles,
      counter: articles.length + 1,
      geturl: "/api/add_blog",
      file: null,
      fileError: null,
      articlena: "",
      categoryna: "",
      descripttionname2: "",
      selectedFile: null,
      images: [],
      image_fields: ["id", "name"],
      total_images: 1,
      selectedTags: null
    };
  },
  mounted() {
    if (this.previewBlog != null) {
      this.articleName = this.previewBlog.article;
      this.articleDescription = this.previewBlog.description;
      this.fileseleted(this.previewBlog.image);
    }
  },
  methods: {
    previewimage(evt) {
      var reader = new FileReader();
      reader.onload = function(e) {
        // get loaded data and render thumbnail.
        document.getElementById("image").src = e.target.result;
      };
      // read the image file as a data URL.
      reader.readAsDataURL(evt.target.files[0]);
    },
    fileseleted(file) {
      var reader = new FileReader();
      reader.onload = function(e) {
        // get loaded data and render thumbnail.
        document.getElementById("image").src = e.target.result;
      };
      // read the image file as a data URL.
      reader.readAsDataURL(file);

      // this.file = this.$refs.file.files[0];
      console.log("file_upload:", file);
      this.file = file;
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
    // previewclick() {
    //   window.$nuxt.$cookies.set("blogarticlename", this.articlena);
    //   window.$nuxt.$cookies.set("blogcategoryna", this.articlena);
    //   window.$nuxt.$cookies.set("blogdescriptionNameChange", this.articlena);
    //   this.$router.push("/user/blog/preview?" + this.foobar);
    // },
    showPreview(e) {
      let blog = {};
      let category = '';
      if (this.categoryna[0]) {
        category = this.categoryna[0].value;
      }
      blog.article = this.articlena;
      blog.category = category;
      blog.description = this.descripttionname2;
      if (!this.file) {
        e.preventDefault();
        this.fileError = 'No file chosen';
        return;
      }
      blog.image = this.file;
      this.$store.commit('blog/cacheBlog', blog);
      this.$router.push({ path: '/technician/blog/pre' })
    },
    uploadUserBlog() {
      let category = '';
      if (this.categoryna[0]) {
        category = this.categoryna[0].value;
      }
      const formData = new FormData();
      formData.set("article", this.articlena);
      formData.set("category", category);
      formData.set("description", this.descripttionname2);
      formData.append("image", this.file);
      let sendData = {
        method: "post",
        url: this.geturl,
        data: formData,
      };

      apiService(sendData, response => {
        console.log(response);
      });

      // // this.file = this.$refs.file.files[0];

      // var url = this.base_url + "/api/add_blog";
      // console.log("upload data", formData);
      // let tokenStr =
      //   "eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjI0NDI3NjgxMjYsImlhdCI6MTU3ODc2ODEyNiwianRpIjoiZm5NeFB2NlR3cVJPa2RlZVhFalRFQSIsIm5iZiI6MTU3ODc2ODEyNiwidXNlcmlkIjoiZmU1MDVhNjEtNzQ3ZS00MzJhLWE5ODQtNjdhNTc2NDQxYzFjIn0.TfJiSeX1deYBM_Cvf6wJSZQDG2vgitJ2DI8NwYKLn9gTvxMAKPjuyWmGWu_ZsxqgI1DgfkUZs5Ix8MQMRLh8ZKTc2IpLhH4icmsVdUdIGruLkvrNMFmdtXW_lpQuvIFi0Ge9TnLOra3akPv4RbjB9n6aFyTsFr7jvxL4S_CZJ1pwtknAVfaj3zkw32318HgOPfonuj62jBvujesp46uTHTyCnOrscTrBkbEFvdA_zlk563pGbudgqd3BhW2f64gZSnyhMGdp4ggdAvPDAk2fq1TYBLQ4aMtpqz4DbiIZD3_0XTyp6n_nzdhxdoy2k8Ve5ja-87zXI8YnxBH77Qgtjw";
      // axios({
      //   method: "post",
      //   url: url,
      //   data: formData,
      //   headers: { Authorization: `Bearer ${tokenStr}` }
      // })
      //   .then(function(response) {
      //     //handle success
      //     console.log(response);
      //   })
      //   .catch(error => {
      //     //handle error
      //     console.log(error);
      //   });

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

.file-select>.select-button {
  padding: 1rem;

  color: white;
  background-color: #2ea169;

  border-radius: 0.3rem;

  text-align: center;
  font-weight: bold;
}

.file-select>input[type="file"] {
  display: none;
}

</style>
<style>
.tags-input-wrapper-default {
  @apply border rounded border-ideeza-dark px-4 py-2 w-full mb-4;
}

.tags-input-root .tags-input-badge {
  @apply border rounded bg-ideeza-dark py-1 px-2 mr-1 text-white text-sm;
}

.tags-input-root input {
  background: transparent;
}

@screen md {
  .tags-input-wrapper-default {
    @apply w-64;
  }
}

.validate-error-msg {
  height: 1.25rem;
  color: red;
}

</style>
