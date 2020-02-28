<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="main-contents p-5">
         <div class="bg-white shadow p-5 rounded relative">
           
           <div class="flex py-2 border-b-4 border-ideeza">
            <div class="w-1/2">
              <div class="flex">
               <h2 class="text-purple-900 font-bold text-2xl pt-2">Project: Metal Making</h2>
               <div class="text-gray-600 mt-5 pl-5">Edit <font-awesome-icon class="text-sm mt-2 ml-1 text-gray-600" :icon="['fas', 'pencil-alt']"/></div>
              </div>
             </div>
             <div class="w-1/2">
               <div class="flex justify-end">
                 <button class="bg-purple-900 text-white ml-2 py-3 px-6">Manage dispute</button>
                 <button class="bg-ideeza text-white  font-bold ml-2 py-3 px-6">Complete project</button>
                 <button class="bg-gray-800 text-white  font-bold ml-2 py-3 px-6">Back</button>
               </div>
             </div>
           </div>

           <div class="flex py-3">
             <div class="w-1/2 font-bold">
               Status: <span class="text-ideeza"> Active</span>
             </div>
             <div class="w-1/2 text-right justify-end">Project Duration: <span class="text-ideeza">29 Sep -16 Oct</span>
              <font-awesome-icon class="text-2xl mt-2 ml-1 text-gray-800 ml-3" :icon="['fas', 'calendar-alt']"/>
             </div>
           </div>
            
          <div class="flex">
            <div class="w-8/12">
              <div class="gradient-bg py-2 px-2">
                <h2 class="text-white text-2xl">Project Description</h2>
              </div>
              <div class="">
                <p class="p-3 text-gray-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
has been the industry's standard dummy text ever since the 1500s, when an unknown 
printer took a galley of type and scrambled it to make a type specimen book.
It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised in the 1960s with the release of 
Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
              </div>
            </div>
            <div class="w-4/12 pl-3">
              <div class="gradient-bg py-2 px-2">
                <h2 class="text-white text-2xl">Attachments</h2>
              </div>
              <p class="text-gray-800 p-3">3 Pics attached</p>
              <div class="flex p-2">
                <div class="flex-1 px-2"><img src="~/static/images/img_ref_2447.png"></div>
                <div class="flex-1 px-2"><img src="~/static/images/img_ref_2448.png"></div>
                <div class="flex-1 px-2"><img src="~/static/images/img_ref_2449.png"></div>
              </div>
              <p class="text-gray-800 pt-3 pl-4">Link attached:</p>
              <p class="text-teal-300 pb-3 pl-4">https://www.youtube.com/watch?v=0SPwwpruGIA</p>

            </div>
          </div> 

          <div  class="">
            <table class="text-left w-full border-collapse simple-table">
              <thead class="gradient-bg text-white">
                <tr class="mb-4">
                  <td class="border-r border-purple-900 p-2 w-4/12">Tasks</td>
                  <td class="border-r border-purple-900 p-2 w-2/12">Domain</td>
                  <td class="border-r border-purple-900 p-2 w-2/12">Assigned to</td>
                  <td class="border-r border-purple-900 p-2 w-2/12">Timeline</td>
                  <td class="border-r border-purple-900 p-2 w-2/12">Task status</td>
                  <td class="">notifications</td>
                </tr>
              </thead>
              <tr class="mb-4">
                  <td class="border-r border-purple-900 p-2">Make iron from steal: first phase </td>
                  <td class="border-r border-purple-900 p-2">Electronics</td>
                  <td class="border-r border-purple-900 p-2">
                    <div class="h-12 w-12 ml-3 inline-flex align-middle"><img class=" h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/men/20.jpg"></div>
                  </td>
                  <td class="border-r border-purple-900 p-2">
                    <div class="">
                      02.10..2019
                    </div>
                  </td>
                  <td class="border-r border-purple-900 p-2"><span>COMPLETED</span></td>
                  <td class=""></td>
                </tr>

            </table>
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
.gradient-bg{
  background: rgb(98,18,156);
  background: linear-gradient(270deg, rgba(98,18,156,1) 0%, rgba(242,3,210,1) 100%);

}
</style>