<template>
  <div class="main-contents">
    <h1 class="text-xl text-gray-800 font-semibold border-b heading-border pb-3">View</h1>
    <!-- {{$route.query.id}} -->
    <div class="p-0 lg:py-10 lg:pl-10">
      <div class="lg:flex justify-between items-center lg:mb-10">
        <nuxt-link to="/user/blog" class="btn btn-normal btn--ideeza-dark px-10 py-4 block lg:inline-block">Back</nuxt-link>
      </div>
      <!--Blog Preview-->
      <div>
        <div class="md:flex" v-if="articleArray.id == $route.query.id">
          <div class="flex-1 mr-4">
            <img :src=" articleArray.image" alt="blog-image" class="w-full mb-3">
            <div class="text-gray-700">{{createdAtArticle(articleArray.created_at)}} <span class="cirlce"></span> 5 mins read</div>
          </div>
          <div class="flex-1 ml-4">
            <div class="flex items-center">
              <div class="text-2xl my-1 text-black font-bold">
                {{articleArray.title}}
              </div>
              <!-- <div class="ratings ml-3">
                <font-awesome-icon v-for="n in articleArray.rating" :key="n+'star'" class="mr-1 text-ideeza-gold" :icon="['fas', 'star']" />
                <font-awesome-icon v-for="n in 5-articleArray.rating" :key="n+'blank'" class="mr-1 text-black" :icon="['fas', 'star']" />
              </div> -->
            </div>
            <nuxt-link to="/user/profile" class="flex items-center my-2">
              <img class="h-10 w-10 rounded-full mr-2 " src="https://randomuser.me/api/portraits/men/17.jpg">
              <span class="text-black inline-block">John Doe</span>
            </nuxt-link>
            <p class="leading-loose text-black font-semibold">{{articleArray.description}}</p>
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
import moment from 'moment';
import apiService from "~/apiService";
export default {
  middleware: "auth",
  name: "blog-view",
  data: function() {
    return {
      geturl: "/blog/",
      articleArray: [],
      blog_img_url: process.env.blog_post_url,

    };
  },
  mounted() {

    var id = this.$route.query.id;
    let sendData = {
      method: "get",
      url: this.geturl + id + '/',
      data: null
    };
    apiService(sendData, response => {
      console.log(response.data);
      this.articleArray = response.data;
      console.log('this.articleArray', this.articleArray);
      // console.log('this.length', this.articleArray.length);
    });
  },
  methods: {
    createdAtArticle(date) {
      return moment(date).format('MM MMMM YYYY');
    },
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
