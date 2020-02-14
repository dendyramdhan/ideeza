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
      <img id="image" />
      <form enctype="multipart/form-data">
        <file-field @input="fileseleted" border-class="border-ideeza-dark rounded" btn="btn--ideeza-dark" />
      </form>
    </div>
    <div class="mt-12 text-center lg:text-left">
      <button @click="showPreview" class="btn btn-normal btn--ideeza-dark py-4 px-10 text-lg">Preview</button>
      <button class="btn btn-normal btn--ideeza px-10 py-4 lg: iinline-block" @click="uploadUserBlog">Publish</button>
    </div>
  </div>
</template>
<script>
import apiService from "~/apiService/have_token.js";
import FileField from "~/components/form/file-field.vue";
import TagsInput from '@voerro/vue-tagsinput/src/VoerroTagsInput.vue'

export default {
  middleware: "auth",
  name: "add-blog",
  components: {
    "file-field": FileField,
    'tag-input': TagsInput
  },
  data: function() {
    return {
      geturl: "/blog/",
      file: null,
      articleName: "",
      categories: [],
      articleDescription: "",
    };
  },
  methods: {
    fileseleted(file) {
      var reader = new FileReader();
      reader.onload = function(e) {
        // get loaded data and render thumbnail.
        document.getElementById("image").src = e.target.result;
      };
      // read the image file as a data URL.
      reader.readAsDataURL(file);

      this.file = file;
    },
    showPreview() {
      this.$validator.validateAll().then(result => {
        if (result) {
          let blog = {};
          let category = '';
          if (this.categories[0]) {
            category = this.categories[0].key;
          }
          blog.article = this.articleName;
          blog.category = category;
          blog.description = this.articleDescription;
          blog.image = this.file;
          this.$store.commit('blog/cacheBlog', blog);
          this.$router.push({ path: '/user/blog/pre' });
        }
      });
    },
    uploadUserBlog() {
      this.$validator.validateAll().then(result => {

        if (result) {
          let category = '';
          if (this.categories[0]) {
            category = this.categories[0].key;
          }
          console.log('this.categories', this.categories);
          console.log('this.categories[0]', this.categories[0]);
          const formData = new FormData();
          formData.set("title", this.articleName);
          formData.set("category", category);
          // formData.set("description", this.articleDescription);
          // formData.append("image", this.file);

          let sendData = {
            method: "post",
            url: this.geturl,
            data: formData,
          };
          console.log('sendData', sendData);
          apiService(sendData, response => {
            console.log(response);
          });
        }
      });
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
