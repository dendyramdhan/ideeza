<template>
  <div class="blog-container">
    <h1 class="text-xl text-gray-800 font-semibold border-b heading-border pb-3">Preview</h1>

    <div class="p-0 lg:py-10 lg:pl-10">
      <div class="lg:flex justify-between items-center lg:mb-10">
        <nuxt-link to="/user/blog/list" class="btn btn-normal btn--ideeza-dark px-10 py-4 block lg:inline-block">Back</nuxt-link>
      </div>

      <!--Blog Preview-->
      <div class=" lg:flex">
        <div class="blog-image-container mt-5 lg:mt-0 lg:mr-10">
          <img class="w-full" src="~/static/images/blog-image.png">
        </div>
        <div>

          <div class="lg:flex flex-wrap items-center mt-5 lg:mt-0">
            <h1 class="lg:text-5xl font-semibold text-gray-800 lg:mr-2 leading-none">Making electro cup</h1>
            <div>
              <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600" :icon="['fas', 'star']"/>
              <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600" :icon="['fas', 'star']"/>
              <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600" :icon="['fas', 'star']"/>
              <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600" :icon="['fas', 'star']"/>
              <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600" :icon="['fas', 'star']"/>
            </div>
          </div>

          <div class="lg:my-10 my-3 flex items-center">
            <img class="h-12 w-12 mr-5 rounded-full"
                 src="https://randomuser.me/api/portraits/women/14.jpg">
            <span class="text-gray-800 font-semibold text-xl">Samantha</span>
          </div>

          <p class="text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget
            interdum urna, ac ornare risus. Vivamus finibus nisl at mauris condimentum,
            vitae semper tellus aliquam. In ante sapien, congue ut feugiat vel, placerat ut
            erat. Quisque at nulla nisl. Vivamus a egestas magna. Cras condimentum
            est arcu, eget gravida diam congue sed. Phasellus ut fringilla magna, nec
            sodales turpis. Aliquam in velit nunc.
          </p>

        </div>
      </div>
    </div>




  </div>
</template>

<script>
    export default {
        name: "blog-view"
    }
</script>

<style scoped>
  .blog-container{
    width: 100%;
    max-width: 1530px;
    padding: 20px 5px;
  }
  .blog-image-container{
    width: 100%;
    max-width: 520px;
  }

  @screen lg {
    .blog-container {
      padding: 60px 50px;
    }
  }
</style>
