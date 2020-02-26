<template>
  <div>
    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="main-contents">

    <div class="w-11/12 m-auto">     
      <div class="w-full bg-white shadow p-6" >
        <div class="flex mb-5">
          <div class="w-4/12 pr-5">
            <img src="~/static/images/ref_img_1257.png" class=" ">
          </div>
          <div class="w-8/12 pt-5 text-left">
            <div class="flex">
              <div class="w-10/12 flex">
                 <h2 class="text-2xl font-bold text-gray-700">James Lakers</h2>
                 <p class="text-md text-gray-600 font-bold pt-2 pl-5"><font-awesome-icon class="text-sm" :icon="['fa', 'map-marker-alt']"/> New York, USA</p>  
              </div>
              <div class="w-2/12"><h3 class="text-xl font-bold text-gray-500">Report User</h3></div>
            </div>
            <p class="text-xl text-purple-800 font-bold">Product designer</p>
            
            <div class="flex my-8">
              <div class="text-lg text-gray-500 font-bold py-3">
               <font-awesome-icon class="text-xl" :icon="['fa', 'envelope']"/>
                Send message
              </div>
              <div class="px-5">
                <button class="text-lg text-gray-500 font-bold border py-3 px-10">
                  <font-awesome-icon class="text-xl" :icon="['fa', 'check']"/>
                  Conect
                </button>
              </div>
            </div>

            <div class=" mt-3 border-b pb-4">
              <button class="px-3 py-3 text-lg text-gray-600 text-black text-sm inline-block">
                <font-awesome-icon class="text-lg mr-2" :icon="['far', 'eye']"/> Timeline</button> 
              <button class="px-3 py-3 text-lg text-gray-600 text-black text-sm inline-block">
                <font-awesome-icon class="text-lg mr-2" :icon="['fa', 'user']"/> About</button>
              <button class="px-3 py-3 text-lg text-gray-600 text-black text-sm inline-block"> 
                <font-awesome-icon class="text-lg mr-2" :icon="['fa', 'square']"/> Projects</button>
              <button class="px-3 py-3 text-lg text-gray-600 text-black text-sm inline-block"> 
                <font-awesome-icon class="text-lg mr-2" :icon="['fa', 'star']"/>Reviews</button>
              <button class="px-3 py-3 text-lg text-ideeza text-black text-sm inline-block"> 
                <font-awesome-icon class="text-lg mr-2" :icon="['fa', 'newspaper']"/>Articles</button>

            </div> 

          </div>
           
        </div>

          <div class="flex">

            <div class="w-4/12 pr-5">
              <h2 class="text-xl font-bold text-gray-700 border-b-2 pb-3">SOCIAL MEDIA</h2>
              <div class="flex mt-4">
                <div class="w-8 h-8 bg-gray-500 rounded-full text-center text-white mr-2">
                  <font-awesome-icon class="text-lg mt-2 " :icon="['fab', 'facebook-f']"/>
                </div>
                <div class="w-8 h-8 bg-gray-500 rounded-full text-center text-white mr-2">
                  <font-awesome-icon class="text-lg mt-2 " :icon="['fab', 'instagram']"/>
                </div>
                <div class="w-8 h-8 bg-gray-500 rounded-full text-center text-white mr-2">
                  <font-awesome-icon class="text-lg mt-2 " :icon="['fab', 'behance']"/>
                </div>
                <div class="w-8 h-8 bg-gray-500 rounded-full text-center text-white mr-2">
                  <font-awesome-icon class="text-lg mt-2 " :icon="['fab', 'dribbble']"/>
                </div>
                
              </div>
              <h2 class="text-xl font-bold text-gray-700 border-b-2 pb-3 mt-8">SKILLS</h2>
              <div class="">
                <div class="py-2 text-lg text-purple-800 font-bold">Product design </div>
                <div class="py-2 text-lg text-purple-800 font-bold">Electronics </div>
                <div class="py-2 text-lg text-purple-800 font-bold">3D Modeling </div>
                <div class="py-2 text-lg text-purple-800 font-bold">Prototyping </div>
                <div class="py-2 text-lg text-purple-800 font-bold">3d Max </div>
                <div class="py-2 text-lg text-purple-800 font-bold">AutoCad </div>
                <div class="py-2 text-lg text-purple-800 font-bold">Wood</div>
              </div>
            </div>
            <div class="w-8/12">
            <div class="border-l-2 border-gray-400 relative pl-8 mt-8">
            	<div class="w-5 h-5 rounded-full bg-gray-400 timeline-dot-pos absolute"></div>
              <h2 class="text-xl text-gray-700">29/03/2019, 23:00</h2>
              <p class="text-md text-gray-600 py-2">User Log in</p>
              <p class="text-md text-gray-600 font-bold">UsKaren Allen logged into a system</p>
            </div>
            <div class="border-l-2 border-gray-400 relative pl-8 mt-8">
            	<div class="w-5 h-5 rounded-full bg-gray-400 timeline-dot-pos absolute"></div>
              <h2 class="text-xl text-gray-700">29/03/2019, 23:00</h2>
              <p class="text-md text-gray-600 py-2">User Log in</p>
              <p class="text-md text-gray-600 font-bold">UsKaren Allen logged into a system</p>
            </div>
            <div class="border-l-2 border-gray-400 relative pl-8 mt-8">
            	<div class="w-5 h-5 rounded-full bg-gray-400 timeline-dot-pos absolute"></div>
              <h2 class="text-xl text-gray-700">29/03/2019, 23:00</h2>
              <p class="text-md text-gray-600 py-2">User Log in</p>
              <p class="text-md text-gray-600 font-bold">UsKaren Allen logged into a system</p>
            </div>
            <div class="border-l-2 border-gray-400 relative pl-8 mt-8">
            	<div class="w-5 h-5 rounded-full bg-gray-400 timeline-dot-pos absolute"></div>
              <h2 class="text-xl text-gray-700">29/03/2019, 23:00</h2>
              <p class="text-md text-gray-600 py-2">User Log in</p>
              <p class="text-md text-gray-600 font-bold">UsKaren Allen logged into a system</p>
            </div>
            <div class="border-l-2 border-gray-400 relative pl-8 mt-8">
            	<div class="w-5 h-5 rounded-full bg-gray-400 timeline-dot-pos absolute"></div>
              <h2 class="text-xl text-gray-700">29/03/2019, 23:00</h2>
              <p class="text-md text-gray-600 py-2">User Log in</p>
              <p class="text-md text-gray-600 font-bold">UsKaren Allen logged into a system</p>
            </div>
            <div class="border-l-2 border-gray-400 relative pl-8 mt-8">
            	<div class="w-5 h-5 rounded-full bg-gray-400 timeline-dot-pos absolute"></div>
              <h2 class="text-xl text-gray-700">29/03/2019, 23:00</h2>
              <p class="text-md text-gray-600 py-2">User Log in</p>
              <p class="text-md text-gray-600 font-bold">UsKaren Allen logged into a system</p>
            </div>
            <div class="border-l-2 border-gray-400 relative pl-8 mt-8">
            	<div class="w-5 h-5 rounded-full bg-gray-400 timeline-dot-pos absolute"></div>
              <h2 class="text-xl text-gray-700">29/03/2019, 23:00</h2>
              <p class="text-md text-gray-600 py-2">User Log in</p>
              <p class="text-md text-gray-600 font-bold">UsKaren Allen logged into a system</p>
            </div>
            <div class="border-l-2 border-gray-400 relative pl-8 mt-8">
            	<div class="w-5 h-5 rounded-full bg-gray-400 timeline-dot-pos absolute"></div>
              <h2 class="text-xl text-gray-700">29/03/2019, 23:00</h2>
              <p class="text-md text-gray-600 py-2">User Log in</p>
              <p class="text-md text-gray-600 font-bold">UsKaren Allen logged into a system</p>
            </div>
            <div class="border-l-2 border-gray-400 relative pl-8 mt-8">
            	<div class="w-5 h-5 rounded-full bg-gray-400 timeline-dot-pos absolute"></div>
              <h2 class="text-xl text-gray-700">29/03/2019, 23:00</h2>
              <p class="text-md text-gray-600 py-2">User Log in</p>
              <p class="text-md text-gray-600 font-bold">UsKaren Allen logged into a system</p>
            </div>
            <div class="border-l-2 border-gray-400 relative pl-8 mt-8">
            	<div class="w-5 h-5 rounded-full bg-gray-400 timeline-dot-pos absolute"></div>
              <h2 class="text-xl text-gray-700">29/03/2019, 23:00</h2>
              <p class="text-md text-gray-600 py-2">User Log in</p>
              <p class="text-md text-gray-600 font-bold">UsKaren Allen logged into a system</p>
            </div>

             
           

           
           
        </div>
      </div>
    </div> 
      </div>
    </div>
  </div>
    <MyIdeeza v-click-outside="onClickOutside" v-if="showMyIdeeza" />
  </div>
</template>
<script>
  import MyIdeeza from '~/components/user/my-ideeza/new-ideeza.vue'
  import SimpleTable from '~/components/reusables/Table.vue'
  import CoverIcon from '~/components/partials/icons/cover-icon.vue'
  import CodeIcon from '~/components/partials/icons/code-icon.vue'
  import LightIcon from '~/components/partials/icons/light-icon.vue'

  export default {
    components: {
      MyIdeeza,
      SimpleTable,
      CoverIcon,
      CodeIcon,
      LightIcon
    },
    data: function () {
      return {
        showMyIdeeza: false,
        users: [{
            id: 1,
            name: 'Michael Scott',
            email: 'marchas@gmail.com',
            type: 1,
            date_modified: '07/04/1927',
            role: 1
          },
          {
            id: 2,
            name: 'Michael Scott',
            email: 'marchas@gmail.com',
            type: 2,
            date_modified: '07/04/1927',
            role: 2
          },
          {
            id: 3,
            name: 'Michael Scott',
            email: 'marchas@gmail.com',
            type: 1,
            date_modified: '07/04/1927',
            role: 2
          },
          {
            id: 4,
            name: 'Michael Scott',
            email: 'marchas@gmail.com',
            type: 3,
            date_modified: '07/04/1927',
            role: 1
          },
          {
            id: 5,
            name: 'Michael Scott',
            email: 'marchas@gmail.com',
            type: 3,
            date_modified: '07/04/1927',
            role: 1
          },
          {
            id: 6,
            name: 'Michael Scott',
            email: 'marchas@gmail.com',
            type: 3,
            date_modified: '07/04/1927',
            role: 1
          },
        ],
      }
    },
    methods: {
      selectall(value) {
        if (value == true) {
          this.users.forEach(element => {
            element.selected = true
          });
        } else {
          this.users.forEach(element => {
            element.selected = false
          });
        }
        this.$forceUpdate()
      }
    }
  }

</script>
<style>
.timeline-dot-pos{
	top:-1px;
	left:-11px;
}
</style>
