<template>
  <div>
    <div class="w-full">
      <img id="image" class="inline-block w-full">
    </div>
    <div class="container lg m-auto my-20 px-4">
      <div class="w-full md:w-3/4 m-auto">
        <div class="text-center">
          <h1 class="text-5xl text-gray-900 py-5">{{blog.article}}</h1>
        </div>
        <p class="py-10 text-gray-600 text-lg text-left">{{blog.description}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({
      blog: state => state.blog.blog
    })
  },
  mounted() {
    var reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("image").src = e.target.result;
    };
    reader.readAsDataURL(this.blog.image);
  }
}

</script>
