<template>
  <div>
    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="main-contents">

    <div class="w-8/12 m-auto">     
      <div class="w-full bg-white shadow p-6" >
        <div class="flex mb-5">
          <div class="pr-5">
            <img src="https://randomuser.me/api/portraits/women/26.jpg" class="rounded-full">
          </div>
          <div class="pt-5">
            <h2 class="text-2xl font-bold text-gray-700">James Lakers</h2>
            <p class="text-md text-gray-600">CEO</p>
            <p class="text-md text-gray-600"><font-awesome-icon class="text-sm" :icon="['fa', 'map-marker-alt']"/> New York, USA</p>
          </div>
        </div>

        <div class="">
          <h2 class="text-2xl font-bold text-gray-700 py-4">About</h2>
          <p class="text-md text-gray-600">PCBiX is the future of the world of PCB design.<br>We enable everyone to realize technological dreams into an ideal and high quality electric circuit ready to be manufactured in a user-friendly, Today our major competitors are developing great tools for</p>
        </div>

        <div class="flex py-5 mt-5">
          <div class="flex-1">
            <h3 class="text-xl text-black">Dec 1, 1997</h3>
            <p class="text-md text-gray-600">Birthday date</p>
          </div>

          <div class="flex-1">
            <h3 class="text-xl text-black">Hiking, Read</h3>
            <p class="text-md text-gray-600">Hobbies</p>
          </div>

          <div class="flex-1">
            <h3 class="text-xl text-black">Nov 17, 2018</h3>
            <p class="text-md text-gray-600">Member Since</p>
          </div>
        </div>
      </div>

      <h2 class="text-2xl text-black py-4 mt-10">Articles</h2>
      <div class="w-full bg-white shadow p-6" >
          <div class="">
            <h3 class="text-xl text-black py-4 ">How Ideeza became famous in 1 week</h3>
            <p class="text-md text-gray-700">Nov 17, 2018</p>
            <p class="text-md text-gray-600 py-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content her <a href="" class="text-ideeza">See more</a></p>
          </div>
          <div class=" mt-3 border-b pb-4 border-b">
            <div class="px-3 text-black text-sm inline-block">
              <font-awesome-icon class="text-sm mr-3" :icon="['far', 'eye']"/>221</div> 
            <div class="px-3 text-black text-sm inline-block">
              <img src="~/static/images/ideeza-linke.png" class="mr-3 inline-block">67</div>
            <div class="px-3 text-black text-sm inline-block"> 
              <font-awesome-icon class="text-sm mr-3" :icon="['fa', 'thumbs-up']"/>76</div>
          </div>

          <div class="py-3">
            <img src="~/static/images/ref_img_1256.png">
            <h3 class="text-xl text-black py-4 ">How Ideeza became famous in 1 week</h3>  
            <p class="text-md text-gray-700">Nov 17, 2018</p>
            <p class="text-md text-gray-600 py-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content her <a href="" class="text-ideeza">See more</a></p>
          </div>
          <div class=" mt-3 border-b pb-4 border-b">
            <div class="px-3 text-black text-sm inline-block">
              <font-awesome-icon class="text-sm mr-3" :icon="['far', 'eye']"/>221</div> 
            <div class="px-3 text-black text-sm inline-block">
              <img src="~/static/images/ideeza-linke.png" class="mr-3 inline-block">67</div>
            <div class="px-3 text-black text-sm inline-block"> 
              <font-awesome-icon class="text-sm mr-3" :icon="['fa', 'thumbs-up']"/>76</div>
          </div>

          <div class="">
            <h3 class="text-xl text-black py-4 ">How Ideeza became famous in 1 week</h3>
            <p class="text-md text-gray-700">Nov 17, 2018</p>
            <p class="text-md text-gray-600 py-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content her <a href="" class="text-ideeza">See more</a></p>
          </div>
          <div class=" mt-3 border-b pb-4 border-b">
            <div class="px-3 text-black text-sm inline-block">
              <font-awesome-icon class="text-sm mr-3" :icon="['far', 'eye']"/>221</div> 
            <div class="px-3 text-black text-sm inline-block">
              <img src="~/static/images/ideeza-linke.png" class="mr-3 inline-block">67</div>
            <div class="px-3 text-black text-sm inline-block"> 
              <font-awesome-icon class="text-sm mr-3" :icon="['fa', 'thumbs-up']"/>76</div>
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
.simple-table th {
  font-size: 0.85rem;
}
.simple-table [type="checkbox"]:not(:checked) + img, .simple-table [type="checkbox"]:checked + img {
    position: relative;
    padding-left: 1.95em;
    cursor: pointer;
}
.simple-table [type="checkbox"]:not(:checked) + img:before{
    content: '';
    position: absolute;
    left: 0; top: 0;
    width: 1.25em; height: 1.25em;
    border: 2px solid #A5C9FF;
    background: #FFF;
    border-radius: 4px;
    box-shadow: inset 0 1px 3px rgba(0,0,0,.1);
}
.simple-table [type="checkbox"]:checked + img:before {
    content: '';
    position: absolute;
    left: 0; top: 0;
    width: 1.25em; height: 1.25em;
    border: 2px solid #A5C9FF;
    background: #A5C9FF;
    border-radius: 4px;
    box-shadow: inset 0 1px 3px rgba(0,0,0,.1);
}
    /* checked mark aspect */
.simple-table [type="checkbox"]:not(:checked) + img:after,
    [type="checkbox"]:checked + img:after {
    content: '\2713\0020';
    position: absolute;
    top: .22em;
    left: .23em;
    font-size: 1.0em;
    line-height: 0.8;
    color: #fff;
    transition: all .2s;
    font-family: 'Lucida Sans Unicode', 'Arial Unicode MS', Arial;
}
    /* checked mark aspect changes */
.simple-table [type="checkbox"]:not(:checked) + img:after {
    opacity: 0;
    transform: scale(0);
}
.simple-table [type="checkbox"]:checked + img:after {
    opacity: 1;
    transform: scale(1);
}
    /* disabled checkbox */
.simple-table [type="checkbox"]:disabled:not(:checked) + img:before,
    [type="checkbox"]:disabled:checked + img:before {
    box-shadow: none;
    border-color: #bbb;
    background-color: #ddd;
}
.simple-table [type="checkbox"]:disabled:checked + img:after {
    color: #999;
}
.simple-table [type="checkbox"]:disabled + img {
    color: #aaa;
}
    /* accessibility */
.simple-table [type="checkbox"]:checked:focus + img:before,
.simple-table [type="checkbox"]:not(:checked):focus + img:before {
    border: 2px solid #A5C9FF;
}
</style>
