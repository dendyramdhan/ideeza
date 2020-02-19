<template>
  <div class="main-contents">
    <h1 class="text-xl text-gray-800 font-semibold border-b heading-border pb-3">View</h1>
    <!-- {{$route.query.id}} -->
    <div class="p-0 lg:py-10 lg:pl-10">
      <div class="lg:flex justify-between items-center lg:mb-10">
        <nuxt-link to="/service-provider/blog" class="btn btn-normal btn--ideeza-dark px-10 py-4 block lg:inline-block">Back</nuxt-link>
      </div>
      <!--Blog Preview-->
      <div v-for="descrition in articleArray">
        <div class="md:flex" v-if="descrition.id == $route.query.id">
          <div class="flex-1 mr-4">
            <img :src="blog_img_url + descrition.postimage" alt="blog-image" class="w-full mb-3">
            <div class="text-gray-700">Jul 19, 2019 <span class="cirlce"></span> 5 mins read</div>
          </div>
          <div class="flex-1 ml-4">
            <div class="flex items-center">
              <div class="text-2xl my-1 text-black font-bold">
                {{descrition.article}}
              </div>
              <div class="ratings ml-3">
                <font-awesome-icon v-for="n in descrition.rating" :key="n+'star'" class="mr-1 text-ideeza-gold" :icon="['fas', 'star']" />
                <font-awesome-icon v-for="n in 5-descrition.rating" :key="n+'blank'" class="mr-1 text-black" :icon="['fas', 'star']" />
              </div>
            </div>
            <nuxt-link to="/service-provider/profile" class="flex items-center my-2">
              <img class="h-10 w-10 rounded-full mr-2 " src="https://randomuser.me/api/portraits/men/17.jpg">
              <span class="text-black inline-block">John Doe</span>
            </nuxt-link>
            <p class="leading-loose text-black font-semibold">{{descrition.description}}</p>
          </div>
        </div>
      </div>
      <!-- <p>{{$route.query.id }}</p>
        <p>{{this.$store.state.userBlogStore.ArticlesName }}</p>
        <p>{{this.$store.state.userBlogStore.CategoryName }}</p>
        <p>{{this.$store.state.userBlogStore.DescriptionName }}</p>
        <p>{{this.$store.state.userBlogStore.Imagename }}</p>
        <p>
          <img :src="this.$store.state.userBlogStore.Imageurl" />
      </p>-->
    </div>
  </div>
</template>
<script>
import axios from "axios";
import apiService from "~/apiService";

// import articles from "~/data/BlogApi.json";
export default {
  middleware: "auth",
  name: "blog-view",
  layout: 'service-provider',
  data: function() {
    return {
      // articles: articles,
      geturl: "/api/get_blogs",
      articleArray: [],
      randomNumber: {},
      blog_img_url: process.env.blog_post_url,

    };
  },
  created: function() {

    let sendData = {
      method: "get",
      url: this.geturl,
      data: null
    };

    apiService(sendData, response => {
      console.log(response.data);
      this.randomNumber = response.data;
      this.articleArray = Object.values(response.data.data);
    });

  }
};

// export default {
//     name: "blog-view"
// }

</script>
<style scoped>
.blog-container {
  width: 100%;
  max-width: 1530px;
  padding: 20px 5px;
}

.blog-image-container {
  width: 100%;
  max-width: 520px;
}

@screen lg {
  .blog-container {
    padding: 60px 50px;
  }
}

</style>
