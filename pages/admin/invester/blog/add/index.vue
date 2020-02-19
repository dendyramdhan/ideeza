<template>
  <div>
    <div class="main-contents">
      <div class="bg-white rounded border-ideeza border shadow p-4 mb-10">
        <h4 class="mb-10 text-ideeza font-bold">Adding new article</h4>
        <div class="text-ideeza-dark text-sm mb-3 font-bold">Article name</div>
        <input v-model="articleName" name="articleName" data-vv-as="article name" v-validate="'required'" class="border rounded border-ideeza-dark px-4 py-2 w-full md:w-64 mb-4" />
        <div class="validate-error-msg">
          <span class="caption" v-if="errors.first('articleName')">
            {{ errors.first('articleName') }}
          </span>
        </div>
        <div class="text-ideeza-dark text-sm mb-3 font-bold">Category</div>
        <tag-input element-id="tags" v-model="categories" :typeahead-hide-discard="true" :limit="1" placeholder="Add Category" :typeahead-always-show="true" :existing-tags="[
        { key: 'code', value: 'Code' },
        { key: 'electronics', value: 'Electronics' },
        { key: 'parts', value: 'Parts' },
        ]" :typeahead="true"></tag-input>
        <div class="text-ideeza-dark text-sm mb-3 font-bold">Description</div>
        <textarea placeholder="description" v-model="articleDescription" name="articleDescription" v-validate="'required'" data-vv-as="description" cols="30" rows="8" class="border rounded border-ideeza-dark px-4 py-2 w-full md:w-128  mb-4"></textarea>
        <div class="validate-error-msg">
          <span class="caption" v-if="errors.first('articleDescription')">
            {{ errors.first('articleDescription') }}
          </span>
        </div>
        <div class="w-full md:w-64 mb-3">
          <img id="image" />
          <form enctype="multipart/form-data">
            <file-field @input="fileseleted" border-class="border-ideeza-dark rounded" btn="btn--ideeza-dark" />
          </form>
        </div>
        <div>
          <button class="btn--ideeza px-5 py-2 rounded text-xs mr-5" @click="showPreview">Preview</button>
          <button class="btn--ideeza-dark px-5 rounded py-2 text-xs mr-5" @click="uploadUserBlog">Publish</button>
        </div>
      </div>
      <MyIdeeza v-click-outside="onClickOutside" v-if="showMyIdeeza" />
    </div>
  </div>
</template>
<script>
import LeftMenu from '~/components/admin/common-left-side-menu.vue'
import FileField from '~/components/form/file-field.vue'
import TagsInput from '@voerro/vue-tagsinput/src/VoerroTagsInput.vue'
import apiService from "~/apiService/have_token.js";
export default {
  name: "add-blog",
  middleware: "auth",
  components: {
    'file-field': FileField,
    'tag-input': TagsInput
  },
  data() {
    return {
      showMyIdeeza: false,
      geturl: "/blog/",
      file: null,
      articleName: "",
      categories: [],
      articleDescription: "",
    }
  },
  mounted() {
    if (this.previewBlog != null) {
      this.articleName = this.previewBlog.article;
      this.articleDescription = this.previewBlog.description;
      this.fileseleted(this.previewBlog.image);
    }
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
          const formData = new FormData();
          formData.set("title", this.articleName);
          formData.set("category", category);
          formData.set("description", this.articleDescription);
          formData.append("image", this.file);

          let sendData = {
            method: "post",
            url: this.geturl,
            data: formData,
          };
          apiService(sendData, response => {
            if (response.status === 201) {
              this.$router.push('/admin/invester/blog');
            }
          });
        }
      });
    }
  }
}

</script>
<style>
.tags-input-wrapper-default {
  @apply border rounded border-ideeza-dark px-4 py-2 w-full mb-4;
}

.tags-input-root .tags-input-badge {
  @apply border rounded bg-ideeza-dark py-1 px-2 mr-1 text-white text-sm;
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
