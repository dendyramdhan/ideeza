<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />
    <span class="inline-block mb-2">Attach</span>
    <!-- <FileField /> -->
    <img id="image" />
    <form enctype="multipart/form-data">
      <input
        type="file"
        @change="fileseleted"
        ref="file_upload2"
        class="btn btn-normal btn--ideeza px-10 py-4 block lg: iinline-block"
        style="display:none"
      />
    </form>
    <button
      class="ml-5 btn btn-small btn--ideeza px-2 text-xs"
      @click="$refs.file_upload2.click()"
    >SelectImage</button>
  </div>
</template>

<script>
import LeftMenu from "~/components/user/common-left-side-menu.vue";
import Projects from "~/data/UserProjectApi.json";
import apiService from "~/apiService/have_token.js";

export default {
  middleware: "auth",
  layout: "user",
  name: "projects-index",
  data: function() {
    return {
      longview: true,
      Projects: Projects.firstproject,
      geturl: "/api/project/get_all",
      articleArray: [],
      randomNumber: {},
      project_img_url: process.env.project_image_url,
      file: null

    };
  },
  created: function() {
  },
  components: {
    LeftMenu
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  mounted() {
    let sendData = {
      method: "get",
      url: this.geturl,
      data: null
    };

    apiService(sendData, response => {
      console.log(response.data);
      this.randomNumber = response.data;
      this.articleArray = Object.values(response.data.data);
      // this.articleArray.map(item=>{
      //   this.pagerlength=item.products.length
      // })
    });
  },
  methods: {
     fileseleted(evt) {
      var reader = new FileReader();
      reader.onload = function(e) {
        // get loaded data and render thumbnail.
        document.getElementById("image").src = e.target.result;
      };
      // read the image file as a data URL.
      reader.readAsDataURL(evt.target.files[0]);

      // this.file = this.$refs.file.files[0];
      console.log("file_upload:", evt);
      this.file = evt.target.files[0];
     }
  }
};
</script>

<style scoped>
.projects-container {
  width: 100%;
}
.project-item-container {
  width: 100%;
}
.project-item-image {
  width: 100%;
  min-width: auto;
}
.w-45 {
  width: auto;
}
@screen lg {
  .projects-container {
    padding: 60px 50px;
  }
  .project-item-container {
    padding: 10px;
    max-width: 500px;
    margin-right: 10px;
  }

  .project-item-container.double {
    max-width: 1000px;
  }

  .double:before {
    @apply border border-solid border-ideeza;
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    width: 101%;
    height: 102%;
  }

  .project-item-container--image {
    @apply object-center object-cover;
    height: 370px;
  }
  .pop-over {
    width: 500px;
    top: 70%;
    left: 20%;
    background: #f2eef6;
  }
  .project-item-container:hover .pop-over {
    @apply block;
  }
  .w-32p {
    width: 32%;
  }
  .w-64p {
    width: 64%;
    margin-left: 10px;
  }
}
.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}
.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}
#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}
.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}
#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #2b6cb0; /*Set to match the Tailwind colour you want the active one to be */
}
</style>
