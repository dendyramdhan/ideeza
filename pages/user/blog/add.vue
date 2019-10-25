<template>
  <div class="blog-container">
    <h1 class="text-xl text-gray-800 font-semibold border-b heading-border pb-3">Add new article</h1>

    <div class="field-container mt-10">
      <div class="text-lg text-gray-800 mb-2">Article name</div>
      <text-field placeholder="name" />
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
      <file-field  />
    </div>

    <div class="mt-12 text-center lg:text-left">
      <button class="btn btn-normal btn--ideeza mr-5 py-4 px-10 text-lg">Publish</button>
      <button class="btn btn-normal btn--ideeza-dark py-4 px-10 text-lg">Preview</button>
    </div>
  </div>
</template>

<script>
  import TextField from '~/components/form/text-field.vue'
  import TextArea from '~/components/form/text-area.vue'
  import CategoryField from '~/components/form/category-field.vue'
  import FileField from '~/components/form/file-field.vue'
    export default {
        name: "add-blog",
      components: {
        'text-field': TextField,
        'text-area': TextArea,
        'category-field': CategoryField,
        'file-field': FileField
      }
    }
</script>

<style scoped>
  .blog-container{
    width: 100%;
    max-width: 1530px;
    padding: 20px 5px;
  }
  .field-container{
    width: 100%;
    max-width: 375px;
  }
  .textarea{
    width: 100%;
    max-width: 700px;
  }

  @screen lg {
    .blog-container {
      padding: 60px 50px;
    }

  }
</style>
