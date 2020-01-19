<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <div class="flex-shrink flex flex-col justify-between p-10 bg-white h-full shadow left-side-bar">
      <div class="flex-shrink">
        <!--Search-->
        <div class="flex bg-gray-200 border border-solid border-gray-500 rounded-sm">
          <div class="flex-shrink flex contents-center p-2 bg-gary-400">
            <img src="https://img.icons8.com/ios-glyphs/22/a0aec0/search.png">
          </div>
          <div class="flex-grow">
            <input v-model="searchVal" @input="searchMenu($event.target.value)"
              class="w-full h-full border-0 outline-none bg-gray-200" placeholder="search">
          </div>
        </div>

        <!--Left Menu-->
        <div class="mt-10 ">
          <div class="menu-button-container" v-if="$route.name === 'user-pro-electronics'">

            <div class="mb-3 flex relative content-center font-semibold text-ideeza-dark">
              Electronics
            </div>
            <!--Sub Menu Items-->
            <button>Placement</button>
            <button>Show Top Layer</button>
            <button>Show Bottom Layer</button>
            <button>VR</button>
            <button>Add Text</button>
            <button>Create Routes</button>
            <button>Get Data</button>
            <button>Send Data</button>
            <button>Save Board</button>
            <button>Save Component</button>
            <button>Reset Save Data</button>
            <button>Empty Board</button>

            <hr />

            <check-box class="mb-2">Toggle Interaction</check-box>
            <check-box class="mb-2">Draw Text</check-box>
            <check-box class="mb-2">Build Holes</check-box>
            <check-box class="mb-2">Component Area</check-box>
            <check-box class="mb-2">Grid</check-box>
            <check-box class="mb-2">Background</check-box>
            <div class="flex items-center font-semibold text-lg text-ideeza-black"><input class="mr-3" type="color"> BG
              Color </div>

            <hr />

            <nuxt-link class="button" to="/technician/electronics/add-part">Add Part</nuxt-link>
            <nuxt-link class="button" to="technician/electronics/add-component">Add Component</nuxt-link>
            <nuxt-link class="button" to="technician/electronics/add-pcb">Add PCB</nuxt-link>
          </div>
          <div class="menu-button-container" v-if="$route.name === 'user-pro-code'">

            <div class="block relative content-center font-semibold text-ideeza-dark">
              <font-awesome-icon class="text-xs text-ideeza" :icon="['fas', 'chevron-down']" /> Code
            </div>
            <hr class="my-5">
            <!--Sub Menu Items-->
            <ul class="code-menu">
              <li v-for="item in menuData.code.children" class="pb-10 border-b border-gray">
                <font-awesome-icon class="text-xs text-ideeza" :icon="['fas', 'chevron-down']" /> {{item.name}}
                <ul>
                  <li class="pl-2" v-for="itemA in item.children">
                    <font-awesome-icon class="text-xs" :icon="['fas', 'chevron-right']" /> {{itemA.name}}
                    <ul>
                      <li class="pl-2" v-for="child in itemA.children">
                        <font-awesome-icon class="text-xs" :icon="['fas', 'chevron-right']" /> {{child.name}}</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="menu-button-container" v-if="$route.name === 'user-pro-cover'">

            <div class="block relative content-center font-semibold text-ideeza-dark">
              <font-awesome-icon class="text-xs text-ideeza" :icon="['fas', 'chevron-down']" /> Cover
            </div>
            <hr class="my-5">
            <!--Sub Menu Items-->
            <ul class="code-menu">
              <li v-for="item in menuData.cover.children">
                <font-awesome-icon class="text-xs text-ideeza" :icon="['fas', 'chevron-down']" /> {{item.name}}
                <ul>
                  <li class="pl-2" v-for="itemA in item.children">
                    <font-awesome-icon class="text-xs" :icon="['fas', 'chevron-right']" /> {{itemA.name}}
                    <ul>
                      <li class="pl-2" v-for="child in itemA.children">
                        <font-awesome-icon class="text-xs" :icon="['fas', 'chevron-right']" /> {{child.name}}</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="menu-button-container" v-if="$route.path.includes('/user/pro/app')">

            <div class="block relative content-center font-semibold text-ideeza-dark">
              <font-awesome-icon class="text-xs text-ideeza" :icon="['fas', 'chevron-down']" /> App
            </div>
            <hr class="my-5">
            <!--Sub Menu Items-->
            <ul class="code-menu">
              <nuxt-link class="pl-2 cursor-pointer" to="/user/pro/app" tag="li" >
                <font-awesome-icon class="text-xs" :icon="['fas', 'chevron-right']" /> App Info
              </nuxt-link>
              <li class="pl-2 cursor-pointer" @click="showChooseLayout=true">
                <font-awesome-icon class="text-xs" :icon="['fas', 'chevron-right']" /> Templates
              </li>
              <nuxt-link class="pl-2 cursor-pointer" to="/user/pro/app/design" tag="li">
                <font-awesome-icon class="text-xs" :icon="['fas', 'chevron-right']" /> User interface
              </nuxt-link>
              <li class="pl-2">
                <font-awesome-icon class="text-xs" :icon="['fas', 'chevron-right']" /> Prototyping
              </li>
            </ul>
          </div>
          <!-- <div class="mt-10 " v-if="$route.name==='user-pro-app'">
          <div class="menu-button-container" >

            <div class="mb-3 flex relative content-center font-semibold" >
              Electronics
            </div>
               
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Button</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Checkbox</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Datepicker</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Image</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Label</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Listview</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Listpicker</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Notifier</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Passwordtextbox</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Slider</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Spinner</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Textbox</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Spinner</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Timepicker </check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Webviewer</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Layout</check-box>
             

            <div class="flex items-center font-semibold text-lg text-ideeza-black">
              <input class="mr-3" type="color" > BG Color  </div>

            <hr />

            <nuxt-link class="button" to="/technician/electronics/add-part">Add Part</nuxt-link>
            <nuxt-link class="button" to="technician/electronics/add-component">Add Component</nuxt-link>
            <nuxt-link class="button" to="technician/electronics/add-pcb">Add PCB</nuxt-link>
          </div>
        </div> -->
        </div>
      </div>



    </div>

    <!-- Main Contents -->
    <div class="flex-grow">
      <!--Panel Menu-->
      <div class="main-contents" :class="{'app-layout':$route.path.includes('/user/pro/app/design')}">
        <div class="flex justify-between flex-col lg:flex-row border-b border-gray-400 pl-5 pr-5 lg:pl-0 lg:pr-0 pb-3">
          <div class="text-xl font-bold m-3 lg:m-0 text-center lg:text-left">Circuit Board</div>
          <div class="flex items-center justify-center content-center">
            <nuxt-link class="panel-menu text-center" to="/user/pro/electronics">
              <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'bolt']" />Electronics</nuxt-link>
            <nuxt-link class="ml-5 panel-menu text-center" to="/user/pro/code">
              <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'code']" />Code</nuxt-link>
            <nuxt-link class="ml-5 panel-menu text-center" to="/user/pro/cover">
              <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'cube']" />Cover</nuxt-link>
            <nuxt-link class="ml-5 panel-menu text-center" to="/user/pro/app">
              <font-awesome-icon class="mr-1 mobile" :icon="['fas', 'wrench']" />App</nuxt-link>
            <nuxt-link class="ml-5 panel-menu text-center" to="/user/pro/customize">
              <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'wrench']" />General</nuxt-link>
          </div>
        </div>
        <nuxt-child></nuxt-child>
        <!-- <Electronics v-if="currentMenu.name === 'Electronics'" />
        <Cover v-if="currentMenu.name === 'Cover'" />
        <template v-if="currentMenu.name === 'App'">
          <nuxt-child></nuxt-child>
        </template> -->
      </div>
    </div>
    <choose-layout v-if="showChooseLayout" @close="showChooseLayout=false" />
  </div>
</template>
<script>
  import _ from 'lodash'
  import LeftMenu from '~/components/user/pro/left-menu.vue'
  import Electronics from '~/components/user/pro/pro-electronics.vue'
  import Cover from '~/components/user/pro/pro-cover.vue'
  import CheckBox from '~/components/form/checkbox.vue'
  import ChooseLayout from '~/components/user/pro/choose-layout.vue'
  export default {
    middleware: "auth",
      layout: 'user',
      name: "index",
      components: {
        LeftMenu,
        Electronics,
        Cover,
        ChooseLayout,
        'check-box': CheckBox
      },
      data: function () {
        return {
          mainDropDownActive: false,
          showChooseLayout: false,
          menuData: {
            electronic: {
              name: 'Electronics',
              children: [
                {
                  name: 'Core',
                  children: [
                    {
                      name: 'CPU',
                      children: [
                        {
                          name: 'Atmega',
                        },
                        {
                          name: 'Pic',
                        },
                        {
                          name: 'St',
                        },
                        {
                          name: 'Raspberry Pi',
                        },
                        {
                          name: 'Intel',
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'Sensors',
                },
                {
                  name: 'Networks',
                }

              ]
            },
            code: {
              name: 'Code',
              children: [
                {
                  name: 'Core Code',
                  children: [
                    {
                      name: 'CPU',
                      children: [
                        {
                          name: 'Atmega',
                        },
                        {
                          name: 'Pic',
                        },
                        {
                          name: 'St',
                        },
                        {
                          name: 'Raspberry Pi',
                        },
                        {
                          name: 'Intel',
                        }
                      ]
                    },
                    {
                      name: 'Sensors',
                    },
                    {
                      name: 'Networks',
                    }
                  ]
                },
                {
                  name: 'Built In',
                  children: [
                    { name: 'Logic'},
                    { name: 'Math'},
                    { name: 'Lists'},
                    { name: 'Colors'},
                    { name: 'Variables'},
                    { name: 'Procedures'},
                  ]
                }
              ]
            },
            cover: {
              name: 'Cover',
              children: [
                {name: 'Plastic Cover1'},
                {name: 'Metal Net'},
                {
                  name: 'Sheet Metal',
                  children:[
                    { name: 'Button1'},
                    { name: 'Button2'},
                    { name: 'Button3'},
                    { name: 'Button4'},
                    { name: 'Button5'},
                    { name: 'Button6'}
                  ]
                },
                {name: 'Buttons'},
                {name: 'Display'},
                {name: 'Transparence Sheet'},
                {name: 'Indicator'}
              ]
            },
            app: {
              name: 'App',
              children: [
                  { name: 'App Info', link:'/user/pro/app'},
                  { name: 'Templates'},
                  { name: 'User interface'},
                  { name: 'Prototyping'}
              ]
            },
            general: {
              name: 'General',
              children: []
            },

          },
          currentMenu: {},
          storeCurrentMenu: null,
          menuChildren: null,
          searchVal: null
        }
      },
      computed: {
        leftMenu () {
          return this.$store.state.usermenu.openLeftMenu;
        }
      },
      mounted() {
        this.addMenuState(this.menuData.electronic, 1);
        console.log(this.$route.path)
        console.log(this.$route.path.includes('/user/pro/app'))
      },
      methods: {
        changeState(item){
          let name = item.name;
          item.isActive = !item.isActive;
          item.name = item.isActive;
          item.name = name;
        },
        addMenuState (menu, id) {
          for (let item of menu.children) {
            item['id'] = id;
            if(item.children) {
              item['isActive'] = false;
              this.addMenuState(item, id+100);
            }
            id += 1;
          }
          this.mainDropDownActive = false;
          this.storeCurrentMenu = _.cloneDeep(menu);
          this.currentMenu = _.cloneDeep(menu);
          this.searchVal = null;
        },
        searchMenu(val) {
          this.mainDropDownActive = true;
          let searchData = _.cloneDeep(this.storeCurrentMenu.children);
          if(_.isEmpty(val)){
            this.currentMenu.children = _.cloneDeep(this.storeCurrentMenu.children);
          } else {
            let results = [];
            _.filter(searchData, (obj) => {
              if(!_.isNil(obj.children)) {
                this.recursiveSearch(obj, val, results);
              } else if(_.toLower(obj.name).includes(val.toLowerCase())){
                results.push(obj)
              }
            });
            this.currentMenu.children = _.flattenDeep(results);
          }
        },
        recursiveSearch(obj, val, results){
          _.filter(obj.children, (obj) => {
            if(!_.isNil(obj.children)) {
              this.recursiveSearch(obj, val, results)
            } else if(_.toLower(obj.name).includes(val.toLowerCase())){
              results.push(obj)
            }
          });
        }
      }
  }

</script>
<style scoped>
.left-side-bar{
    width: 300px;
    min-width: 300px;
  }
  .panel-menu{
    @apply inline-block font-semibold text-gray-700 cursor-pointer;
  }
  .panel-menu.active{
    @apply text-ideeza;
  }
  .panel-menu:hover{
    @apply text-ideeza;
  }
  .panel-menu-icon{
    height: 11px;
    display: inline-block;
  }
  .main-arrow{
    transition: all 0.4s;
  }
  .main-arrow.active{
    transform: rotate(90deg);
    margin-top: -5px;
  }
  .sub-menu{
    transition: all 0.1s;
  }
  .left-dropdown-enter-active,
  .left-dropdown-leave-active {
    transition: all 0.3s;
  }
  .left-dropdown-enter,
  .left-dropdown-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }
  .menu-button-container button{
    @apply text-center rounded-sm border border-solid outline-none cursor-pointer w-full py-1 mb-2;
    transition: all 0.2s;;
  }
  .menu-button-container button:hover{
    @apply shadow bg-gray-200;
  }

  .button{
    @apply w-full block text-center rounded-sm border border-solid outline-none cursor-pointer w-full py-1 mb-2;
    transition: all 0.2s;
  }
  .button:hover{
    @apply shadow bg-gray-200;
  }
  .menu-button-container hr{
    @apply border-t-0 border-b border-solid border-gray-300 my-5;
    height: 1px;
  }
  .code-menu li {
    @apply pt-2 pl-2;
  }
  .app-layout {
      padding-right: 325px;
  }
</style>