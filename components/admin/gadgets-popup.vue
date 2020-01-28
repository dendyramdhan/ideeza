<template>
  <div @click.self="close" class="popup-overlay">
    <div class="popup-overlay--contents add-new-container">
      <div>
        <!-- Main Contents -->
        <div class="flex-grow mb-20">
          <div class="main-contents">

            <div class="md:flex">
              <div class="md:w-4/12 p-2">
                <div class="border rounded text-ideeza border-ideeza bg-white">
                  <div class="flex">
                    <div class="w-3/12 p-3">
                      <img src="~/static/images/users.png">
                    </div>
                    <div class="w-6/12">
                      <h2 class="text-3xl font-bold text-ideeza">132K</h2>
                      <p class="text-gray-600 text-md">All Users</p>
                    </div>
                    <div class="w-3/12 relative">
                      <div class="text-green-400 font-bold text-sm  absolute bottom-0 right-0 p-2">
                        <img src="~/static/images/trend-up.png" class="inline-block">
                        <span class="inline-block">18.3%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="md:w-4/12 p-2">
                <div class="border rounded text-ideeza border-ideeza bg-white">
                  <div class="flex">
                    <div class="w-3/12 p-3">
                      <img src="~/static/images/Bounced.png">
                    </div>
                    <div class="w-6/12">
                      <h2 class="text-3xl font-bold text-ideeza">2K</h2>
                      <p class="text-gray-600 text-md">Bounced Session</p>
                    </div>
                    <div class="w-3/12 relative">
                      <div class="text-red-700 font-bold text-sm  absolute bottom-0 right-0 p-2">
                        <img src="~/static/images/trend-down.png" class="inline-block">
                        <span class="inline-block">2.3%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="md:w-4/12 p-2">
                <div class="border rounded text-ideeza border-ideeza bg-white">
                  <div class="flex">
                    <div class="w-3/12 p-3">
                      <img src="~/static/images/trend.png">
                    </div>
                    <div class="w-6/12">
                      <h2 class="text-3xl font-bold text-ideeza">44K</h2>
                      <p class="text-gray-600 text-md">Direct Traffic</p>
                    </div>
                    <div class="w-3/12 relative">
                      <div class="text-green-400 font-bold text-sm  absolute bottom-0 right-0 p-2">
                        <img src="~/static/images/trend-up.png" class="inline-block">
                        <span class="inline-block">18.3%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
     
            </div>

            <div class="md:flex">
            <div class="md:w-2/3">
            <div class="border rounded text-ideeza border-ideeza bg-white mb-3  mr-3">
                  <div class="flex justify-between pt-5 pl-5 pr-5 items-center mb-3">
                <h6 class="text-ideeza font-bold text-sm flex-shrink">Overview</h6>
                <div class="flex w-full justify-center items-center">
                    
                    <button class="bg-white border border-gray-300 rounded px-3 py-1 text-gray-500">
                        Users <font-awesome-icon class="text-sm" :icon="['fa', 'chevron-down']"/>
                    </button>
                    <div class="text-gray-500 text-xs mx-2">vs.</div>
                    <button class="bg-white border border-gray-300 rounded px-3 py-1 text-gray-500">
                        Choose <font-awesome-icon class="text-sm" :icon="['fa', 'chevron-down']"/>
                    </button>
                </div>
            </div>
                <img src="~/static/images/chart-1.png">  
                </div>
            </div>
            <div class="md:w-1/3">
            <div class="border rounded text-ideeza border-ideeza bg-white mb-3">
                  <div class="flex justify-between pt-5 pl-5 pr-5 items-center mb-3">
                <h6 class="text-ideeza font-bold text-sm flex-shrink">Devices</h6>
                <div class="flex justify-between flex-none">
                    <div v-if="searchbox" class="flex w-fit-content bg-white justify-center border border-ideeza rounded items-center mr-2 content-center">
                        <div class="h-12 relative w-10">
                            <font-awesome-icon class="ml-1 h-4 text-gray-400 absolute-center-h-v" :icon="['fas', 'search']"/>
                        </div>
                        <input placeholder="search users" class="bg-white outline-none h-12 text-gray-800 pr-3">
                    </div>
                    <button class="bg-white border border-gray-300 rounded px-3 py-1 text-gray-500">
                        Operating System <font-awesome-icon class="text-sm" :icon="['fa', 'chevron-down']"/>
                    </button>

                </div>
            </div>
              <img src="~/static/images/chart-2.png">     
                </div>
            </div>
          </div>

          <div class="md:flex">
            <div class="md:w-4/12">
            <div class="border rounded text-ideeza border-ideeza bg-white mb-3  mr-3">
                  <div class="flex justify-between pt-5 pl-5 pr-5 items-center mb-3">
                <h6 class="text-ideeza font-bold text-sm flex-shrink">User Comparision</h6>
                 
            </div>
                <img src="~/static/images/chart-3.png">  
                </div>
            </div>
            <div class="md:w-4/12 pr-2">
            <div class="border rounded text-ideeza border-ideeza bg-white mb-3">
                  <div class="flex justify-between pt-5 pl-5 pr-5 items-center mb-3">
                <h6 class="text-ideeza font-bold text-sm flex-shrink">Users</h6>
                <div class="flex justify-between flex-none">
                    <div v-if="searchbox" class="flex w-fit-content bg-white justify-center border border-ideeza rounded items-center mr-2 content-center">
                        <div class="h-12 relative w-10">
                            <font-awesome-icon class="ml-1 h-4 text-gray-400 absolute-center-h-v" :icon="['fas', 'search']"/>
                        </div>
                        <input placeholder="search users" class="bg-white outline-none h-12 text-gray-800 pr-3">
                    </div>
                    <button class="bg-white border border-gray-300 rounded px-3 py-1 text-gray-500">
                        Session <font-awesome-icon class="text-sm" :icon="['fa', 'chevron-down']"/>
                    </button>

                </div>
            </div>
            <div class="p-3">
              <div class="flex py-3">
                <div class="w-6/12">All Users</div>
                <div class="w-3/12 text-center text-gray-500">97,496</div>
                <div class="w-3/12 text-center text-gray-800">4</div>
              </div>

              <div class="flex py-3">
                <div class="w-6/12">Bounced Session</div>
                <div class="w-3/12 text-center text-gray-500">97,496</div>
                <div class="w-3/12 text-center text-gray-800">4</div>
              </div>

              <div class="flex py-3">
                <div class="w-6/12">Direct Traffic</div>
                <div class="w-3/12 text-center text-gray-500">97,496</div>
                <div class="w-3/12 text-center text-gray-800">4</div>
              </div>

              <div class="flex py-3">
                <div class="w-6/12">Direct, email, IM</div>
                <div class="w-3/12 text-center text-gray-500">97,496</div>
                <div class="w-3/12 text-center text-gray-800">4</div>
              </div>    
              <div class="text-right">
                <a href="" class="text-ideeza font-bold pr-6">View all</a>
              </div>
            </div>
          </div>
          </div>

            <div class="md:w-4/12">
            <div class="border rounded text-ideeza border-ideeza bg-white mb-3">
                  <div class="flex justify-between pt-5 pl-5 pr-5 items-center mb-3">
                <h6 class="text-ideeza font-bold text-sm flex-shrink">Demographic</h6>
                <div class="flex justify-between flex-none">
                    <div v-if="searchbox" class="flex w-fit-content bg-white justify-center border border-ideeza rounded items-center mr-2 content-center">
                        <div class="h-12 relative w-10">
                            <font-awesome-icon class="ml-1 h-4 text-gray-400 absolute-center-h-v" :icon="['fas', 'search']"/>
                        </div>
                        <input placeholder="search users" class="bg-white outline-none h-12 text-gray-800 pr-3">
                    </div>
                    <button class="bg-white border border-gray-300 rounded px-3 py-1 text-gray-500">
                        Country <font-awesome-icon class="text-sm" :icon="['fa', 'chevron-down']"/>
                    </button>

                </div>
            </div>
              <img src="~/static/images/chart-4.png">     
                </div>
            </div>

          </div>
          

          <div class="md:flex">
            <div class="md:w-2/3 mr-2">
              <div class="flex">
                  <div class="text-center md:w-1/4 py-5 mr-2 rounded">
                    <div class="h-16">
                      <img src="~/static/images/customers.png" class="inline-block">
                    </div>
                    <div class="text-ideeza text-lg font-bold text-center py-3">CUSTOMERS</div>
                    <div class="text-gray-800 text-3xl  text-center py-3">7684</div>
                    <div class="text-gray-600 text-mf italic  text-center py-3">Increased by 20%</div>
                  </div>

                  <div class="text-center md:w-1/4 bg-gray-700 py-5 mr-2 rounded">
                    <div class="h-16">
                      <img src="~/static/images/bag.png" class="inline-block">
                    </div>
                    <div class="text-white text-lg font-bold text-center py-3">ORDERS</div>
                    <div class="text-white text-3xl  text-center py-3">7684</div>
                    <div class="text-white text-mf italic  text-center py-3">Increased by 20%</div>
                  </div>

                  <div class="text-center md:w-1/4 bg-ideeza py-5 mr-2 rounded">
                    <div class="h-16">
                      <img src="~/static/images/delivery.png" class="inline-block">
                    </div>
                    <div class="text-white text-lg font-bold text-center py-3">DELIVERY</div>
                    <div class="text-white text-3xl  text-center py-3">7684</div>
                    <div class="text-white text-mf italic  text-center py-3">Increased by 20%</div>
                  </div>

                  <div class="text-center md:w-1/4 py-5 gradient-box rounded">
                    <div class="h-16">
                      <img src="~/static/images/safe.png" class="inline-block">
                    </div>
                    <div class="text-white text-lg font-bold text-center py-3">USERS</div>
                    <div class="text-white text-3xl  text-center py-3">7684</div>
                    <div class="text-white text-mf italic  text-center py-3">Increased by 20%</div>
                  </div>
              </div>
            </div>
            <div class="md:w-1/3">
              <div class="border bg-white mb-2">
                <div class="bg-gray-300 text-lg rounded-t p-3 font-bold text-gray-800">Invoices</div>     
                <div class="flex bg-gray-400 rounded-b py-3">
                  <div class="flex-1 border-r border-gray-500">
                    <p class="text-center">Dua</p>
                    <p class="text-center">$1,212</p>
                  </div>
                  <div class="flex-1">
                    <p class="text-center">OVERDUE</p>
                    <p class="text-center">$1,212</p>
                  </div>
                </div> 
              </div>

              <div class="border bg-white mb-4 mt-4">
                <div class="bg-purple-600 rounded-t p-3  text-white">Monthly Revenue</div>     
                <div class="flex gradient-box rounded-b py-3">
                  <div class="flex-1 border-gray-500">
                    <p class="text-center text-white">GROWTH</p>
                    <p class="text-center text-white">$1,212</p>
                  </div>
                  <div class="flex-1 text-center">
                     <img src="~/static/images/growth.png" class="inline-block">
                  </div>
                </div> 
              </div>
            </div>
          </div>


          <div class="md:flex">
            <div class="md:w-4/12">
            <div class="border rounded text-ideeza border-ideeza bg-white mb-3  mr-3">
                  <div class="flex justify-between pt-5 pl-5 pr-5 items-center mb-3">
                <h6 class="text-ideeza font-bold text-sm flex-shrink">Projects</h6>
                 
            </div>
                <img src="~/static/images/chart-5.png">  
                </div>
            </div>
            <div class="md:w-4/12 pr-2">
            <div class="border rounded text-ideeza border-ideeza bg-white mb-3">
                  <div class="flex justify-between pt-5 pl-5 pr-5 items-center mb-3">
                <h6 class="text-ideeza font-bold text-sm flex-shrink">Risks</h6>
                 
            </div>
             <img src="~/static/images/chart-6.png">  
          </div>
          </div>

            <div class="md:w-4/12">
            <div class="border rounded text-ideeza border-ideeza bg-white mb-3">
                  <div class="flex justify-between pt-5 pl-5 pr-5 items-center mb-3">
                <h6 class="text-ideeza font-bold text-sm flex-shrink">RECENT REPORT</h6>
                 
            </div>
              <img src="~/static/images/chart-7.png">       
                </div>
            </div>

          </div>

          <div class="md:flex">
            <div class="md:w-6/12">
              <div class="border rounded text-ideeza border-ideeza bg-white mb-3  mr-3">
                    <div class="flex justify-between pt-5 pl-5 pr-5 items-center mb-3">
                  <h6 class="text-ideeza font-bold text-sm flex-shrink">USER STATISTICS</h6>
                   
              </div>
                  <img src="~/static/images/chart-8.png">  
                  </div>
              </div>
              <div class="md:w-6/12 pr-2">
              <div class="border rounded text-ideeza border-ideeza bg-white mb-3">
                    <div class="flex justify-between pt-5 pl-5 pr-5 items-center mb-3">
                  <h6 class="text-ideeza font-bold text-sm flex-shrink">SOCIAL CAMPAIGNS</h6>
                   
              </div>
               <img src="~/static/images/chart-9.png">  
            </div>
            </div>
          </div>

          <div class="md:flex">
            <div class="md:w-6/12">
              <div class="border rounded text-ideeza border-ideeza bg-white mb-3  mr-3">
                <div class="flex justify-between pt-5 pl-5 pr-5 items-center mb-3">
                  <h6 class="text-ideeza font-bold text-sm flex-shrink">Best Sellers</h6>
                  <button class="bg-white border border-gray-300 rounded px-3 py-1 text-ideeza">
                        January <font-awesome-icon class="text-sm" :icon="['fa', 'chevron-down']"/>
                    </button>
                </div>
              
                <div class="flex p-4 mt-3">
                  <div class="w-3/12">
                    <img src="~/static/images/bestsaller-thumb.png">
                  </div>
                  <div class="w-5/12 pl-2">
                    <h2 class="text-xl font-bold text-gray-800">Bathing Shampoo</h2>
                    <p class="text-sm text-gray-600">Lorem ipsum is some dummy text generator, some dummy text generator</p>
                    <img src="~/static/images/bestsaller.png">
                  </div>
                  <div class="w-2/12 text-right">
                    <h2 class="text-xl font-bold text-gray-700">89,423</h2>
                    <p class="text-sm  text-gray-800">Sales</p>
                  </div>

                  <div class="w-2/12 text-right">
                    <h2 class="text-xl font-bold text-gray-700">423</h2>
                    <p class="text-sm  text-gray-800">Likes</p>
                  </div>
                   
                </div>

                <div class="flex p-4 mt-3">
                  <div class="w-3/12">
                    <img src="~/static/images/bestsaller-thumb.png">
                  </div>
                  <div class="w-5/12 pl-2">
                    <h2 class="text-xl font-bold text-gray-800">Bathing Shampoo</h2>
                    <p class="text-sm text-gray-600">Lorem ipsum is some dummy text generator, some dummy text generator</p>
                    <img src="~/static/images/bestsaller.png">
                  </div>
                  <div class="w-2/12 text-right">
                    <h2 class="text-xl font-bold text-gray-700">89,423</h2>
                    <p class="text-sm  text-gray-800">Sales</p>
                  </div>

                  <div class="w-2/12 text-right">
                    <h2 class="text-xl font-bold text-gray-700">423</h2>
                    <p class="text-sm  text-gray-800">Likes</p>
                  </div>
                   
                </div>        

                <div class="flex p-4 mt-3">
                  <div class="w-3/12">
                    <img src="~/static/images/bestsaller-thumb.png">
                  </div>
                  <div class="w-5/12 pl-2">
                    <h2 class="text-xl font-bold text-gray-800">Bathing Shampoo</h2>
                    <p class="text-sm text-gray-600">Lorem ipsum is some dummy text generator, some dummy text generator</p>
                    <img src="~/static/images/bestsaller.png">
                  </div>
                  <div class="w-2/12 text-right">
                    <h2 class="text-xl font-bold text-gray-700">89,423</h2>
                    <p class="text-sm  text-gray-800">Sales</p>
                  </div>

                  <div class="w-2/12 text-right">
                    <h2 class="text-xl font-bold text-gray-700">423</h2>
                    <p class="text-sm  text-gray-800">Likes</p>
                  </div>
                   
                </div>

                <div class="flex p-4 mt-3">
                  <div class="w-3/12">
                    <img src="~/static/images/bestsaller-thumb.png">
                  </div>
                  <div class="w-5/12 pl-2">
                    <h2 class="text-xl font-bold text-gray-800">Bathing Shampoo</h2>
                    <p class="text-sm text-gray-600">Lorem ipsum is some dummy text generator, some dummy text generator</p>
                    <img src="~/static/images/bestsaller.png">
                  </div>
                  <div class="w-2/12 text-right">
                    <h2 class="text-xl font-bold text-gray-700">89,423</h2>
                    <p class="text-sm  text-gray-800">Sales</p>
                  </div>

                  <div class="w-2/12 text-right">
                    <h2 class="text-xl font-bold text-gray-700">423</h2>
                    <p class="text-sm  text-gray-800">Likes</p>
                  </div>
                   
                </div>

              </div>
            </div>
              <div class="md:w-6/12 pr-2">
              <div class="border rounded text-gray-700 border-ideeza bg-white mb-3">
                    <div class="flex justify-between text-ideeza pt-5 pl-5 pr-5 items-center mb-3">
                  <h6 class="text-ideeza font-bold text-sm flex-shrink">SOCIAL CAMPAIGNS</h6>
                   
              </div>
              <div class="p-5">
                <div class="py-3 px-3 my-3 border-l-4 border-indigo-300">
                  <input  type="checkbox" id="task1"/>
                  <label for="task1">Lorem ipsum is some dummy text generator used for print and content testing.</label>
                </div>

                <div class="py-3 px-3 my-3 border-l-4 border-yellow-600">
                  <input  type="checkbox" id="task2"/>
                  <label for="task2">Lorem ipsum is some dummy text generator us </label>
                </div>

                <div class="py-3 px-3 my-3 border-l-4 border-gray-900">
                  <input  type="checkbox" id="task3"/>
                  <label for="task3">Lorem ipsum is some dummy text generator used for print  </label>
                </div>

                <div class="py-3 px-3 my-3 border-l-4 border-green-400">
                  <input  type="checkbox" id="task4"/>
                  <label for="task4">Lorem ipsum is some dummy text generator used for print and content testing.</label>
                </div>

                <div class="py-3 px-3 my-3 border-l-4 border-red-600 ">
                  <input  type="checkbox" id="task5"/>
                  <label for="task5">Lorem ipsum is some dummy  content testing.</label>
                </div>
              </div> 
            </div>
            </div>
          </div>

            
          </div>
        </div>
        <MyIdeeza v-click-outside="onClickOutside" v-if="showMyIdeeza" />
      </div>
    </div>
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
      close() {
        this.$emit("onClose");
      },
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
    },
    computed: {
      leftMenu() {
        return this.$store.state.usermenu.openLeftMenu;
      }
    },
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

.gradient-box{
  background: rgb(178,36,239);
  background: linear-gradient(180deg, rgba(178,36,239,1) 0%, rgba(117,120,255,1) 100%);
 
}
.popup-overlay--contents{
  width:96%;
  height:96%;
  overflow:auto;
}
</style>
