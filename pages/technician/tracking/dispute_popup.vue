<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="main-contents p-5">
        <div class="flex">  
          <div class="p-5 w-7/12">
            <div class="flex relative">
            <img src="~/static/images/comments.png" class="mr-3">
             <h2 class="text-2xl font-bold text-gray-800">Dispute: </h2>
             <div class="text-gray-600 ">Opened 24th Jan.</div>
           </div>


           <div  class="">
             <p class="text-gray-600 py-3">You have new dispute from Giorgi.</p>

             <p class="text-gray-600 py-3">Dud you receive your package?</p>
             <h2 class="text-gray-600 py-3 text-3xl font-bold">Yes</h2>

             <p class="text-gray-600 py-3">Logistics tracking problem</p>
             <h2 class="text-gray-600 py-3 text-3xl font-bold">Purchase Protection is running out, but package is still in transit</h2>


             <p class="text-gray-600 py-3">Customs problem</p>
             <h2 class="text-gray-600 py-3 text-3xl font-bold"></h2>

             <p class="text-gray-600 py-3">Other</p>
             <h2 class="text-gray-600 py-3 text-3xl font-bold"></h2>

             <p class="text-gray-600 py-3">Refund Request:</p>
             <h2 class="text-gray-600 py-3 text-3xl font-bold">Full refund</h2>
             <p class="text-md text-gray-500 py-3">
                <font-awesome-icon class=" text-gray-800 text-xl" :icon="['fas', 'exclamation-circle']"/> You can ask a refund as high as: US $ 5.75</p>

             <p class="text-gray-600 py-3">User request details:</p>
             <h2 class="text-gray-600 py-3 text-3xl font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h2>

             <p class="text-gray-600 py-3">User evidence:</p>
             <h2 class="text-ideeza py-3 text-3xl font-bold">Text.txt</h2>

           </div>
        </div>

      <div class="w-5/12">
        <div class="text-right">
          <button class="py-3 px-6 border border-gray-600 text-gray-600 rounded">Back</button>
          <button class="py-3 px-6 bg-ideeza text-white rounded">Complete</button>
        </div>
        <div class="flex mt-5 justify-between">
          <h2 class="text-2xl">Notification Centre:</h2>
          <button class="py-2 px-6 bg-ideeza text-white">Compose <font-awesome-icon
        class="ml-1 h-6 text-white"
        :icon="['fas', 'paper-plane']"
      /></button>
        </div>

        <div class="">
          <p class="font-bold text-gray-900 py-2 mt-3">Manufacturer answer</p>
          <p class="text-gray-700">23 Sep, 9:09 PM</p>

          <p class="font-bold text-gray-900 py-2 mt-3">Your answer</p>
          <p class="text-gray-700">23 Sep, 9:09 PM</p>

          <p class="font-bold text-gray-900 py-2 mt-3">Manufacturer answer</p>
          <p class="text-gray-700">23 Sep, 9:09 PM</p>
          
          <p class="font-bold text-gray-900 py-2 mt-3">Your answer</p>
          <p class="text-gray-700">23 Sep, 9:09 PM</p>

          <p class="font-bold text-gray-900 py-2 mt-3">Manufacturer answer</p>
          <p class="text-gray-700">23 Sep, 9:09 PM</p>
        </div>
      </div>
      </div>

    </div>



    <div class="w-4/12 p-4 m-auto bg-white shadow fixed z-50 top-0 left-0 right-0 m-auto mt-24" style="">
         <div class="flex relative">
           
           <h2 class="text-2xl font-bold text-purple-900">Choose the step</h2>
            
         </div>
         
        <div class="">
            
           <div class="pl-3">
             <p class="text-lg text-gray-600 py-3">Dud you receive your package?</p>
              
            <p class="text-purple-900 text-xl">
              <input type="checkbox"> Refund
            </p>

            <p class="text-purple-900 text-xl py-3">
              <input type="text" class="w-full border py-2 px-3" placeholder="Type amount"> Refund
            </p>

            <p class="text-purple-900 text-xl">
              <input type="checkbox"> Refund
            </p>
          </div>

           
          <div class="border-t flex justify-end py-6 mt-5">
            <button class="bg-ideeza border text-white rounded py-3 mr-3 px-6">Complete</button>
            <button class="bg-white text-gray-700 border border-gray-700 rounded py-2 px-5">Cancel</button>
          </div>

        </div>
      </div>



    </div>
    </div>
    <!-- <span v-for="(info,index) in articleArray"  >
       <span v-for="info2 in info.assigned_users">{{info2.avatar}}</span>
    </span>
    -->
  </div>
</template>
<script>
import LeftMenu from "~/components/technician/common-left-side-menu.vue";
import SimpleTable from "~/components/reusables/Table.vue";

import apiService from "~/apiService/have_token.js";

export default {
  layout: "user",
  components: {
    LeftMenu,
    SimpleTable
  },
  data() {
    return {
      ts: new Date(),
      articleArray: [],
      articleArrayaxios: [],
      articleArrayrout: [],
      randomNumber: [],
      geturl: "/api/project/technician/get_all",
      avata_img_url: process.env.avatar_base_url,
      username:null,
      useravatar:null,
      selected: false,
      projects: [
        {
          id: 1,
          user: {
            name: "Michael Scott",
            avatar: "https://randomuser.me/api/portraits/women/20.jpg"
          },
          name: "Porsche 219mm",
          service_providers: [
            {
              url: "https://randomuser.me/api/portraits/women/20.jpg"
            },
            {
              url: "https://randomuser.me/api/portraits/men/20.jpg"
            },
            {
              url: "https://randomuser.me/api/portraits/men/12.jpg"
            }
          ],
          deadline: "07/04/1927",
          completed: 30,
          selected: false
        },
        {
          id: 2,
          user: {
            name: "Michael Scott",
            avatar: "https://randomuser.me/api/portraits/men/20.jpg"
          },
          name: "Porsche 219mm",
          service_providers: [
            {
              url: "https://randomuser.me/api/portraits/women/20.jpg"
            },
            {
              url: "https://randomuser.me/api/portraits/men/20.jpg"
            },
            {
              url: "https://randomuser.me/api/portraits/men/12.jpg"
            }
          ],
          deadline: "07/04/1927",
          completed: 30,
          selected: false
        }
      ]
    };
  },
  mounted() {
    this.username = window.$nuxt.$cookies.get("firstname") + " "+ window.$nuxt.$cookies.get("lastname");
    this.useravatar = window.$nuxt.$cookies.get("useravatar");
    let sendData = {
      method: "get",
      url: this.geturl,
      data: null
    };

    apiService(sendData, response => {
      console.log(response.data);
      this.randomNumber = response.data;
      this.articleArrayaxios = Object.values(response.data.data);

      this.articleArrayaxios.map(item => {
        this.articleArrayrout.push(item);
        this.articleArray.push(item);
      });
    });
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  methods: {
    selectall() {
      if (this.selected == true) {
        this.projects.forEach(element => {
          element.selected = true;
        });
      } else {
        this.projects.forEach(element => {
          element.selected = false;
        });
      }
      this.$forceUpdate();
    }
  }
};
</script>
<style scoped>
.w-13 {
  width: 13.333333%;
}
  .avatar{
    @apply w-8 rounded-full -ml-5 shadow inline cursor-pointer;
  }
  .avatar:hover{
    @apply shadow-md;
  }
  .avatar:first-child{
    @apply ml-0;
  }
  .avatar-timeline{
    @apply w-6 rounded-full shadow inline cursor-pointer;
  }
</style>