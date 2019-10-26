<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <div class="flex-shrink flex flex-col justify-between p-10 bg-white h-full shadow left-side-bar">
      <div class="flex-shrink">
        <!--Search-->
        <div class="flex bg-gray-200 border border-solid border-gray-500 rounded-sm">
          <div class="flex-shrink flex contents-center p-2 bg-gary-400">
            <img  src="https://img.icons8.com/ios-glyphs/22/a0aec0/search.png" >
          </div>
          <div class="flex-grow">
            <input v-model="searchVal" @input="searchMenu($event.target.value)" class="w-full h-full border-0 outline-none bg-gray-200" placeholder="search">
          </div>
        </div>

        <!--Left Menu-->
        <div class="mt-10 ">
          <div v-if="currentMenu">

            <div class="cursor-pointer  mb-3 flex relative content-center " @click="mainDropDownActive=!mainDropDownActive">
              <div class="relative block w-5" ><img :class="{'active': mainDropDownActive}" class="absolute-center-v main-arrow" src="https://img.icons8.com/ios-glyphs/11/ff00c7/chevron-right.png"></div>
              <div :class="{'text-ideeza': mainDropDownActive}" class="text-lg font-semibold">{{currentMenu.name}}</div>
            </div>
            <!--Sub Menu Items-->

            <div v-if="currentMenu.children" :class="{'border-b': mainDropDownActive}" class="pb-3 pt-3 border-t border-solid border-gray-300">
              <transition-group name="left-dropdown">
                <ul v-if="mainDropDownActive" :class="{active: mainDropDownActive}" v-for="(childItem, index) in currentMenu.children" :key="childItem.id"  class="sub-menu ml-3 text-gray-600 hover:text-black">
                  <li class="cursor-pointer pb-3 flex relative content-center" @click="changeState(childItem)">
                    <div v-if="childItem.children" class="relative block w-5" ><img :class="{'active': childItem.isActive}" class="absolute-center-v main-arrow" src="https://img.icons8.com/ios-glyphs/11/718096/chevron-right.png"></div>
                    <div class="text-lg ">{{childItem.name}}</div>
                  </li>
                  <!--Sub Sub Menu Items-->
                  <li class="sub-menu" :class="{'block': childItem.isActive, 'hidden': !childItem.isActive}" v-if="childItem.children">

                    <ul v-for="subChildItem in childItem.children" :key="subChildItem.id" class="sub-menu ml-3 text-gray-600">
                      <li class="cursor-pointer pb-3 flex relative content-center" @click="changeState(subChildItem)">
                        <div v-if="subChildItem.children" class="relative block w-5" ><img :class="{'active': subChildItem.isActive}" class="absolute-center-v main-arrow" src="https://img.icons8.com/ios-glyphs/11/718096/chevron-right.png"></div>
                        <div class="text-lg ">{{subChildItem.name}}</div>
                      </li>
                      <!--Sub Sub Sub Menu Items-->
                      <li class="sub-menu" :class="{'block': childItem.isActive, 'hidden': !childItem.isActive}" v-if="subChildItem.children">
                        <ul v-for="subSubChildItem in subChildItem.children" :key="subSubChildItem.id" class="sub-menu ml-3 text-gray-600">
                          <li class="cursor-pointer pb-3 flex relative content-center">
                            <div v-if="subSubChildItem.children" class="relative block w-5" ><img class="absolute-center-v" src="https://img.icons8.com/ios-glyphs/11/718096/chevron-right.png"></div>
                            <div class="text-lg ">{{subSubChildItem.name}}</div>
                          </li>
                          <!--Sub Sub Sub Sub Menu Items-->
                          <li v-if="subSubChildItem.children" class="cursor-pointer pb-3 flex relative content-center">
                            <ul v-for="subSubSubChildItem in subSubChildItem.children" :key="subSubSubChildItem.id" class="sub-menu ml-3 text-gray-600">
                              <li class="cursor-pointer pb-3 flex relative content-center">
                                <div v-if="subSubSubChildItem.children" class="relative block w-5" ><img class="absolute-center-v" src="https://img.icons8.com/ios-glyphs/11/718096/chevron-right.png"></div>
                                <div class="text-lg ">{{subSubSubChildItem.name}}</div>
                              </li>


                              <li v-if="subSubSubChildItem.children" class="cursor-pointer pb-3 flex relative content-center">
                                <ul v-for="lastItem in subSubSubChildItem.children" :key="lastItem.id" class="sub-menu ml-3 text-gray-600">
                                  <li class="cursor-pointer pb-3 flex relative content-center">
                                    <div class="text-lg ">{{lastItem.name}}</div>
                                  </li>


                                </ul>


                              </li>

                            </ul>


                          </li>

                        </ul>
                      </li>

                    </ul>

                  </li>
                </ul>
              </transition-group>
            </div>




          </div>
        </div>
      </div>

      <LeftBotMenu class="flex-shrink border-t border-solid border-gray-300"/>

    </div>

    <!-- Main Contents -->
    <div class="flex-grow">
      <!--Panel Menu-->
      <div class="main-contents">
        <div class="flex justify-between flex-col lg:flex-row border-b border-gray-400 pl-5 pr-5 lg:pl-0 lg:pr-0 pb-3">
          <div class="text-xl font-bold m-3 lg:m-0 text-center lg:text-left">Circuit Board</div>
          <div class="flex items-center justify-center content-center">
            <span class="panel-menu text-center" :class="{'active': currentMenu.name === 'Electronics'}"
                  @click="addMenuState(menuData.electronic, 1)"><font-awesome-icon class="mr-1 panel-menu-icon"
                                                                                   :icon="['fas', 'bolt']"/>Electronics</span>
            <span class="ml-5 panel-menu text-center" :class="{'active': currentMenu.name === 'Code'}"
                  @click="addMenuState(menuData.code,1)"><font-awesome-icon class="mr-1 panel-menu-icon"
                                                                            :icon="['fas', 'code']"/>Code</span>
            <span class="ml-5 panel-menu text-center" :class="{'active': currentMenu.name === 'Cover'}"
                  @click="addMenuState(menuData.cover,1)"><font-awesome-icon class="mr-1 panel-menu-icon"
                                                                             :icon="['fas', 'cube']"/>Cover</span>
            <span class="ml-5 panel-menu text-center" :class="{'active': currentMenu.name === 'General'}"
                  @click="addMenuState(menuData.general,1)"><font-awesome-icon class="mr-1 panel-menu-icon"
                                                                               :icon="['fas', 'wrench']"/>General</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import LeftBotMenu from '~/components/user/left-menu-bot-items.vue'
  import LeftMenu from '~/components/user/pro/left-menu.vue'
    export default {
      layout: 'user',
      name: "index",
      components: {
        LeftMenu,
        LeftBotMenu
      },
      data: function () {
        return {
          mainDropDownActive: false,
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
                {name: 'Plastic Cover'},
                {name: 'Metal Net'},
                {name: 'Sheet Metal'},
                {name: 'Buttons'},
                {name: 'Display'},
                {name: 'Transparence Sheet'},
                {name: 'Indicator'}
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
</style>
