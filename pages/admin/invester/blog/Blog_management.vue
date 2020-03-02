<template>
  <div>
    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="main-contents">

        <div class="md:flex my-10">
          <button class="bg-white text-gray-800 py-4 px-6 mr-5">
            <img src="~/static/images/ico_ref2123.png" class="inline-block mr-5">
            User & Service Providers
          </button>
          <button class="bg-white text-gray-800 py-4 px-6 mr-5">
            <img src="~/static/images/SP-ref0234.png" class="inline-block mr-5">
            Added Parts 
          </button>
          <button class="bg-white text-gray-800 py-4 px-6 mr-5">
            <img src="~/static/images/SP-ref0235.png" class="inline-block mr-5">
            Categories
          </button>
          <button class="bg-white text-gray-800 py-4 px-6 mr-5">
            <img src="~/static/images/SP-ref0236.png" class="inline-block mr-5">
            Projects
          </button>
          <button class="bg-purple-800 text-white py-4 px-10">
             
            Blog
          </button>
        </div>
        <div class="px-5 mb-10">
          <h2 class="text-purple-800 text-4xl font-bold border-b-2 border-pink-400 ">Blog</h2>
        </div>
        <div class="md:flex">
          <div class="md:w-full">
        <div class="bg-white rounded shadow">
        <div class="flex pt-5 pl-5 pr-5 items-center mb-3">
            <div class="flex flex-1 text-xs">
              <button class="px-3 py-1 text-gray-800 text-bold">
                ALL <font-awesome-icon class="text-sm" :icon="['fa', 'chevron-down']"/>
              </button>
            
                <div class="flex w-fit-content bg-white justify-center  rounded items-center ml-5 content-center">
                    <div class="h-8 relative w-10">
                        <font-awesome-icon class="ml-1 h-4 text-gray-400 absolute-center-h-v" :icon="['fas', 'search']"/>
                    </div>
                    <input placeholder="search Projects..." class="bg-white outline-none h-8 text-gray-800 pr-3">
                </div>
            </div>
            <div class="flex-1 ml-5 text-xs text-right">
              <button class="px-3 py-1 text-gray-800 text-bold">
                Sort By <font-awesome-icon class="text-sm" :icon="['fa', 'chevron-down']"/>
              </button>
            </div>
        </div>
          
        <div class="overflow-x-auto max-96-vw px-5">
        <table class="text-left w-full">
		        <tr>
              <th>Article name</th>
              <th>Author name</th>
              <th>Role</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr> 
            <tr>
              <td class="py-2">How Ideeza can make the world a better place</td>
              <td class="py-2">Ashkan Lowes</td>
              <td class="py-2">User</td>
              <td class="py-2">01/12/2017</td>
              <td class="text-green-500">Approved</td>
              <td class="py-2"><font-awesome-icon class="text-sm" :icon="['fas', 'ellipsis-h']"/></td>
            </tr>
            <tr>
              <td class="py-2">How Ideeza can make the world a better place</td>
              <td class="py-2">Ashkan Lowes</td>
              <td class="py-2">User</td>
              <td class="py-2">01/12/2017</td>
              <td class=" ">Closed</td>
              <td class="py-2"><font-awesome-icon class="text-sm" :icon="['fas', 'ellipsis-h']"/></td>
            </tr>
            <tr>
              <td class="py-2">How Ideeza can make the world a better place</td>
              <td class="py-2">Ashkan Lowes</td>
              <td class="py-2">User</td>
              <td class="py-2">01/12/2017</td>
              <td class="text-red-500">Not approved</td>
              <td class="py-2"><font-awesome-icon class="text-sm" :icon="['fas', 'ellipsis-h']"/></td>
            </tr>
            <tr>
              <td class="py-2">How Ideeza can make the world a better place</td>
              <td class="py-2">Ashkan Lowes</td>
              <td class="py-2">User</td>
              <td class="py-2">01/12/2017</td>
              <td class="text-green-500">Approved</td>
              <td class="py-2"><font-awesome-icon class="text-sm" :icon="['fas', 'ellipsis-h']"/></td>
            </tr>
            <tr>
              <td class="py-2">How Ideeza can make the world a better place</td>
              <td class="py-2">Ashkan Lowes</td>
              <td class="py-2">User</td>
              <td class="py-2">01/12/2017</td>
              <td class="text-green-500">Approved</td>
              <td class="py-2"><font-awesome-icon class="text-sm" :icon="['fas', 'ellipsis-h']"/></td>
            </tr> 
     
	       </table>

        <ul class="flex list-reset w-auto mt-5 mb-3 justify-center">   
          <li><a class="block hover:bg-blue px-3 py-2 mx-2" href="#"><< Previous</a></li>
          <li><a class="block hover:bg-blue text-ideeza px-3 py-2 mx-2" href="#">1</a></li>
          <li><a class="block hover:bg-blue px-3 py-2 mx-2" href="#">2</a></li>
          <li><a class="block hover:bg-blue px-3 py-2 mx-2" href="#">3</a></li>
          <li><a class="block hover:bg-blue px-3 py-2 mx-2" href="#">4</a></li>
          <li><a class="block hover:bg-blue px-3 py-2 mx-2" href="#">Next >></a></li>
        </ul>
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
