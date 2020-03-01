<template>
  <div>
    <div class="main-contents">
      <div class="flex-grow mb-20">
        <div class="md:w-full">
          <div class="p-10 border rounded border-ideeza bg-white mb-3">
            <h1 class="text-xl text-ideeza font-semibold border-b heading-border pb-3">Adding News</h1>
            <div class="field-container mt-10">
              <div class="text-sm text-ideeza-dark font-semibold mb-2">Add Date</div>
              <vc-calendar class="mx-auto mt-5" v-model="news_date" color="pink" is-expanded />
            </div>
            <div class="flex">
              <div class="mt-10 md:w-1/2 mr-5">
                <div class="text-sm text-ideeza-dark font-semibold mb-2">Description for Development</div>
                <textarea class="ideeza-textarea" rows="5" v-model="development_description"></textarea>
              </div>
              <div class="field-container mt-10 md:w-1/2">
                <div class="text-lg text-gray-800 mb-2">Image</div>
                <img id="development_image">
                <form enctype="multipart/form-data">
                  <file-field @input="fileseleted($event,'development_image')" />
                </form>
              </div>
            </div>
            <div class="flex">
              <div class="mt-10 md:w-1/2 mr-5">
                <div class="text-sm text-ideeza-dark font-semibold mb-2">Description For Marketing</div>
                <textarea class="ideeza-textarea" rows="5" v-model="marketing_description"></textarea>
              </div>
              <div class="field-container mt-10 md:w-1/2">
                <div class="text-lg text-gray-800 mb-2">Image</div>
                <img id="marketing_image">
                <form enctype="multipart/form-data">
                  <file-field @input="fileseleted($event,'marketing_image')" />
                </form>
              </div>
            </div>
            <div class="flex">
              <div class="mt-10 md:w-1/2 mr-5">
                <div class="text-sm text-ideeza-dark font-semibold mb-2">Description for Financial</div>
                <textarea class="ideeza-textarea" rows="5" v-model="financial_description"></textarea>
              </div>
              <div class="field-container mt-10 md:w-1/2">
                <div class="text-lg text-gray-800 mb-2">Image</div>
                <img id="financial_image">
                <form enctype="multipart/form-data">
                  <file-field @input="fileseleted($event,'financial_image')" />
                </form>
              </div>
            </div>
            <div class="flex">
              <div class="mt-10 md:w-1/2 mr-5">
                <div class="text-sm text-ideeza-dark font-semibold mb-2">Description for Management</div>
                <textarea class="ideeza-textarea" rows="5" v-model="management_description"></textarea>
              </div>
              <div class="field-container mt-10 md:w-1/2">
                <div class="text-lg text-gray-800 mb-2">Image</div>
                <img id="management_image">
                <form enctype="multipart/form-data">
                  <file-field @input="fileseleted($event,'management_image')" />
                </form>
              </div>
            </div>
            <div class="mt-12 text-center lg:text-left">
              <button class="btn btn-normal btn--ideeza mr-5 py-4 px-10 text-lg" @click="publishNews">Publish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FileField from '~/components/form/file-field.vue'
import apiService from "~/apiService/have_token.js";
export default {
  name: "add-news",
  components: {
    'file-field': FileField
  },
  data: function() {
    return {
      showMyIdeeza: false,
      geturl: "/news/",
      news_date: '',
      development_description: '',
      development_image: '',
      marketing_description: '',
      marketing_image: '',
      financial_description: '',
      financial_image: '',
      management_description: '',
      management_image: '',
    }
  },
  methods: {
    fileseleted(file, type) {
      var reader = new FileReader();
      if (type == 'development_image') {
        reader.onload = function(e) {
          // get loaded data and render thumbnail.
          document.getElementById("development_image").src = e.target.result;
        };
        // read the image file as a data URL.
        reader.readAsDataURL(file);
        this.development_image = file;
      }
      if (type == 'marketing_image') {
        reader.onload = function(e) {
          // get loaded data and render thumbnail.
          document.getElementById("marketing_image").src = e.target.result;
        };
        // read the image file as a data URL.
        reader.readAsDataURL(file);
        this.marketing_image = file;
      }
      if (type == 'financial_image') {
        reader.onload = function(e) {
          // get loaded data and render thumbnail.
          document.getElementById("financial_image").src = e.target.result;
        };
        // read the image file as a data URL.
        reader.readAsDataURL(file);
        this.financial_image = file;
      }
      if (type == 'management_image') {
        reader.onload = function(e) {
          // get loaded data and render thumbnail.
          document.getElementById("management_image").src = e.target.result;
        };
        // read the image file as a data URL.
        reader.readAsDataURL(file);
        this.management_image = file;
      }
    },
    selectall(value) {
      if (value == true) {
        this.users.forEach(element => {
          element.selected = true
        });
      } else {
        this.users.forEach(element => {
          element.selected = false
        });
      }
      this.$forceUpdate()
    },
    publishNews() {
      this.$validator.validateAll().then(result => {
        if (result) {
          const formData = new FormData();
          formData.set("news_date", this.news_date);
          formData.set("development_description", this.development_description);
          formData.set("marketing_description", this.marketing_description);
          formData.set("financial_description", this.financial_description);
          formData.set("management_description", this.management_description);
          formData.append("development_image", this.development_image);
          formData.append("marketing_image", this.marketing_image);
          formData.append("financial_image", this.financial_image);
          formData.append("management_image", this.management_image);

          for (let value of formData.values()) {
            console.log(value);
          }

          let sendData = {
            method: "post",
            url: this.geturl,
            data: formData,
          };
          // apiService(sendData, response => {
          //   console.log(response);
          //   if (response.status === 201) {
          //     //this.$router.push('/service-provider/blog');
          //   }
          // });
        }
      });
    }
  }
}

</script>
<style>
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

.ideeza-textarea textarea {
  border: 1px solid #431184;
  border-radius: 0.25rem;
}

.file-select .btn--ideeza {
  background-color: #431184;
  color: #fff;
  border-color: #431184;
}

@screen lg {
  .blog-container {
    padding: 60px 50px;
  }

}

</style>
