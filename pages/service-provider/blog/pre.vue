<template>
  <div class="main-contents">
    <div class="bg-white rounded border-ideeza border shadow p-4">
      <nuxt-link to="/service-provider/blog/add" class="float-right py-1 px-2 border border-ideeza rounded text-ideeza text-sm">Go Back</nuxt-link>
      <div class="text-ideeza font-bold text-sm mb-5">Article Preview</div>
      <div class="md:flex">
        <div class="flex-1 mr-4">
          <img id="image" alt="blog-image" class="w-full mb-3">
          <div class="text-gray-700">Jul 19, 2019
            <span class="cirlce"></span> 5 mins read</div>
        </div>
        <div class="flex-1 ml-4">
          <div class="text-2xl my-1 text-black font-bold">
            {{blog.article}}
          </div>
          <div class="ratings">
            <font-awesome-icon class="mr-1 text-ideeza-gold" :icon="['fas', 'star']" />
            <font-awesome-icon class="mr-1 text-ideeza-gold" :icon="['fas', 'star']" />
            <font-awesome-icon class="mr-1 text-ideeza-gold" :icon="['fas', 'star']" />
            <font-awesome-icon class="mr-1 text-black" :icon="['fas', 'star']" />
            <font-awesome-icon class="mr-1 text-black" :icon="['fas', 'star']" />
            Comments (3)
          </div>
          <nuxt-link to="/service-provider/profile" class="flex items-center my-2">
            <img class="h-10 w-10 rounded-full mr-2 " :src="avatar_base_url + avatar">
            <span class="text-black inline-block">{{name}}</span>
          </nuxt-link>
          <p class="leading-loose text-black">{{blog.description}}</p>
        </div>
      </div>
    </div>
    <MyIdeeza v-click-outside="onClickOutside" v-if="showMyIdeeza" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  layout: 'service-provider',
  data() {
    return {
      name: "",
      avatar: "",
      avatar_base_url: process.env.avatar_base_url,
    }
  },
  computed: {
    ...mapState({
      blog: state => state.blog.blog
    })
  },
  mounted() {
    let firstname = window.$nuxt.$cookies.get('firstname');
    let lastname = window.$nuxt.$cookies.get('lastname');
    let useravatar = window.$nuxt.$cookies.get("useravatar");
    this.name = firstname + ' ' + lastname;
    this.avatar = useravatar;
    var reader = new FileReader();
    reader.onload = function(e) {
      // get loaded data and render thumbnail.
      document.getElementById("image").src = e.target.result;
    };
    reader.readAsDataURL(this.blog.image);
  }
}

</script>
