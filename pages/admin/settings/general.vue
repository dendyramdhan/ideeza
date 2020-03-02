<template>
  <div class="settings-general mx-auto"  >
    <!---->
    <!--Profile Information-->
    <!---->
    <!-- {{articleArraymid1}}
      {{articleArraymid1.userid}} -->
      <div v-if="articleArraymid1.userid == userid">

        <!---->
        <!--Profile Phote-->
        <!---->
        <div
        class="md:flex justify-between items-center pb-3 mt-20 border-b border-solid border-gray-400 p-5 lg:p-0"
        >
        <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Profile Photo</h1>
        <span class="text-gray-500 text-sm lg:text-2xl">* Required</span>
      </div>

      <!--Form Container-->
      <div class="my-5 p-5 bg-white shadow-md">
        <!--Photo Field-->
        <div class="md:flex">
          <div class="w-full h-64 mb-5 md:mb-0 md:h-48 md:w-48 md:w-max-content md:mr-6 flex-shrink">
           <img
           class="object-cover object-center h-full mx-auto"
           :src=" avata_img_url + articleArraymid1.avatar" id="image"           
           /> 
           <!-- {{infogeneral.avatar}} -->
         </div>
         <div class="flex-grow">
          <div
          class="text-gray-500 text-sm"
          >
          First impressions count, we all know this. And we only get one chance to make a good first impression. Perhaps in person, your charm and use of language can camouflage your faults, but in the online world. your first impression is made with your face – your profile picture.
          <!-- {{infogeneral.profile_description}} -->
        </div>
        <div class="mt-10">
          <form enctype="multipart/form-data">
            <input ref="file_upload" type="file"  style="display: none;"  @change="upload" />
          </form>
          <button
          class="btn pill-button w-full"
          @click="$refs.file_upload.click()"
          >Upload a file from your computer</button>     
        </div>
      </div>
    </div>
  </div>

  <!---->
  <!--Social Container-->
  <!---->
  <div
  class="md:flex justify-between items-center pb-3 mt-20 border-b border-solid border-gray-400 p-5 lg:p-0"
  >
  <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Social Media Accounts</h1>
</div>

<!--Container-->
<div class="my-5 p-5 bg-white shadow-md">
  <div class="mb-10">
    <h1
    class="text-lg font-semibold text-gray-600 pb-3 border-b border-solid border-gray-400"
    >Facebook</h1>
    <div class="lg:flex justify-between">
      <div class="text-lg text-gray-500 mt-3 pr-0 lg:pr-28">
        Sign in with Facebook and discover your trusted
        connections to people all over the world.
      </div>
      <div class="self-center mt-3 lg:mt-0">
        <button class="btn px-2" @click="disconnectfacebook">Disconnect</button>
      </div>
    </div>
  </div>

  <div class="mb-10">
    <h1
    class="text-lg font-semibold text-gray-600 pb-3 border-b border-solid border-gray-400"
    >LinkedIn</h1>
    <div class="lg:flex justify-between">
      <div class="text-lg text-gray-500 mt-3 pr-0 lg:pr-28">
        Sign in with Facebook and discover your trusted
        connections to people all over the world.
      </div>
      <div class="self-center mt-3 lg:mt-0">
        <button class="btn px-2"  @click="disconnectlinkedin">Disconnect</button>
      </div>
    </div>
  </div>

  <div class="mt-16 mb-3 text-center">
    <button class="btn pill-button px-10 lg:px-20"   @click="addsocialaccount">Add more social accounts</button>
  </div>
</div>

<div class="mt-16 mb-16 text-center">
  <button class="btn pill-button pill-button--ideeza px-20" @click="savegeneralsetting">Save</button>
</div>
</div>
<!-- {{articleArraymid1}} -->
</div>
</template>

<script>
  import Projects from "~/data/UserSettingApi.json";
  import apiService from "~/apiService/have_token.js";

  export default {
    name: "index",
    data: function() {
      return {
       geturl: "/api/user/get_profile",
       articleArray: [],
       randomNumber: {},
       avata_img_url:process.env.avatar_base_url,
       articleArraymid1:[],
       userid:null,
     };
   },
   mounted(){
    this.userid = window.$nuxt.$cookies.get("userid")
    let sendData = {
      method: "get",
      url: this.geturl,
      data: null
    };

    apiService(sendData, response => {
      console.log(response.data);
      this.randomNumber = response.data;
      this.articleArray = Object.values(response.data.data);

      
      const obj3 = { ...this.articleArray[0], ...this.articleArray[1] };
      this.articleArraymid1 =obj3;

    });

  },
  methods:{
    upload(evt){
      // alert("upload image!!!")
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

    },
    disconnectfacebook(){
      alert("disconnect_Facebook!!!")
    },
    disconnectlinkedin(){
      alert("disconnect_Linkedin!!!")
    },
    addsocialaccount(){
     alert("add_Social_Account!!!")
   },
   savegeneralsetting(){
    alert("All Setting Saved!!!")
  }
}
};
</script>

<style scoped>
.settings-general {
  max-width: 700px;
}
.form-field {
  @apply py-4 border-b border-solid border-gray-300;
}
.form-field:last-child {
  @apply border-0;
}
.field-label {
  @apply w-56 text-gray-600 text-xl font-semibold;
}

@screen md {
  .form-field {
    @apply flex;
  }
}
</style>
