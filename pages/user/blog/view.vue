<template>
  <div class="main-contents">
    <h1 class="text-xl text-gray-800 font-semibold border-b heading-border pb-3">Preview</h1>

    <div class="p-0 lg:py-10 lg:pl-10">
      <div class="lg:flex justify-between items-center lg:mb-10">
        <nuxt-link
          to="/user/blog/list"
          class="btn btn-normal btn--ideeza-dark px-10 py-4 block lg:inline-block"
        >Back</nuxt-link>
      </div>
      <!--Blog Preview-->
      <div class="lg:flex" v-for="descrition in articles" :key="descrition">
        <div class="lg:flex" v-if="descrition.id == $route.query.id ">
          <div class="blog-image-container mt-5 lg:mt-0 lg:mr-10">
            <img class="w-full" src="~/static/images/blog-image.png" />
          </div>
          <div>
            <div class="lg:flex flex-wrap items-center mt-5 lg:mt-0">
              <h1
                class="lg:text-5xl font-semibold text-gray-800 lg:mr-2 leading-none"
              >{{descrition.title}}</h1>
            </div>
            <div class="lg:my-10 my-3 flex items-center">
              <div v-for="index in  descrition.rating" :key="index">
                <font-awesome-icon
                  class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                  :icon="['fas', 'star']"
                />
              </div>
              Comment({{descrition.rating}})
            </div>
            <div class="lg:my-10 my-3 flex items-center">
              <img class="h-12 w-12 mr-5 rounded-full" :src="descrition.profileimage" />
              <span class="text-gray-800 font-semibold text-xl">{{descrition.ArticlesName}}</span>
            </div>

            <p class="text-base lg:text-lg">
              {{descrition.descrition}}
              <!-- -{{$route.query.id }} -->
            </p>
          </div>
        </div>
      </div>
      <!-- Add preview -->

      <div class="lg:flex" v-if="this.$store.state.userBlogStore.viewflag == 1 ">&nbsp;</div>
      <div v-else-if="this.$store.state.userBlogStore.viewflag == 2" class="lg:flex">
        <div class="blog-image-container mt-5 lg:mt-0 lg:mr-10">
          <img class="w-full" src="~/static/images/blog-image.png" />
        </div>
        <div>
          <div class="lg:flex flex-wrap items-center mt-5 lg:mt-0">
            <h1
              class="lg:text-5xl font-semibold text-gray-800 lg:mr-2 leading-none"
            >{{this.$store.state.userBlogStore.CategoryName}}</h1>
            <!-- {{this.$store.state.userBlogStore.viewflag}} -->
          </div>

          <div class="lg:my-10 my-3 flex items-center">
            <img
              class="h-12 w-12 mr-5 rounded-full"
              src="https://randomuser.me/api/portraits/women/14.jpg"
            />
            <span
              class="text-gray-800 font-semibold text-xl"
            >{{this.$store.state.userBlogStore.ArticlesName}}</span>
          </div>

          <p class="text-base lg:text-lg">
            {{this.$store.state.userBlogStore.DescriptionName}}
            <!-- -{{$route.query.id }} -->
          </p>
        </div>

        <!-- <p>{{$route.query.id }}</p>
        <p>{{this.$store.state.userBlogStore.ArticlesName }}</p>
        <p>{{this.$store.state.userBlogStore.CategoryName }}</p>
        <p>{{this.$store.state.userBlogStore.DescriptionName }}</p>
        <p>{{this.$store.state.userBlogStore.Imagename }}</p>
        <p>
          <img :src="this.$store.state.userBlogStore.Imageurl" />
        </p> -->
      </div>
    </div>
  </div>
</template>

<script>
import articles from "../../../data/BlogApi.json";
export default {
  name: "blog-view",
  data: function() {
    return {
      articles: articles,
      size: "1"
    };
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
