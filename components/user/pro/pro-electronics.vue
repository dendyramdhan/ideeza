<template>
  <div >

    <!--Stepper-->
    <div class="hidden lg:block stepper-bar bg-gray-200 relative mx-auto mb-20">
      <div class="stepper-bar-overlay bg-ideeza-dark" :style="`width: ${overlayWidth}%` "></div>
      <div class="absolute top-0 left-0 h-full w-full z-50 flex justify-between">

        <!--1-->
        <div class="stepper-icon-wrapper relative" :class="{'active': step >= 0}">
          <span class="absolute-center-h-v" >1</span>
          <div class="stepper-text stepper-text--ask" :class="{'active': step >=0 }">Schematic</div>
        </div>
        <!--2-->
        <div class="stepper-icon-wrapper relative" :class="{'active': step >= 1}">
          <span  class="absolute-center-h-v" >2</span>
          <div class="stepper-text stepper-text--review" :class="{'active': step >= 1}">Design</div>
        </div>

      </div>
    </div>

      <div v-if="step === 0" class="engine-container schematic">
        <div class="absolute flex mx-auto z-10 main-menu">
          <div class="p-3 flex items-center rounded-b icon-main cursor-pointer relative shadow-md" @click.stop="hide_main_menu('pcb_menu');">
            <img src="~static/icons/pcb-icon.png" class="w-6 h-6">
            <div class="flex absolute sub-pcb" v-if="pcb_menu">
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75">
                <img src="~static/icons/icon_ref_4345.png" class="w-6 h-8">
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75">
                <img src="~static/icons/icon_ref_4346.png" class="w-8 h-8">
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75">
                <img src="~static/icons/icon_ref_4357.png" class="w-8 h-8">
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75">
                <img src="~static/icons/icon_ref_4358.png" class="w-8 h-8">
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75">
                <img src="~static/icons/icon_ref_4359.png" class="w-8 h-8">
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75 relative" @click.stop="hideSubMenus();layer_menu=!layer_menu">
                <img src="~static/icons/icon_ref_4360.png" class="w-8 h-8">
                <div class="flex absolute sub-pcb" v-if="layer_menu">
                  <div class="p-3 rounded-b text-center icon-sub cursor-pointer shadow-md opacity-75">
                    <div class="w-8 h-8 bg-white mx-auto"></div>
                    <div class="text-black">Show top</div>
                  </div>
                  <div class="p-3 rounded-b text-center icon-sub cursor-pointer shadow-md opacity-75">
                    <div class="w-8 h-8 bg-white mx-auto"></div>
                    <div class="text-black">Show bottom</div>
                  </div>
                </div>
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75 relative" @click.stop="hideSubMenus();text_menu=!text_menu">
                <img src="~static/icons/ref170.png" class="w-8 h-8">
                <div class="flex absolute sub-pcb" v-if="text_menu">
                  <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md">
                    <img src="~static/icons/icon_ref_4348.png" class="w-8 h-6">
                  </div>
                  <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md">
                    <img src="~static/icons/icon_ref_4344.png" class="w-8 h-8">
                  </div>
                  <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md">
                    <img src="~static/icons/icon_ref_4345.png" class="w-8 h-8">
                  </div>
                </div>
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md relative opacity-75" @click.stop="hideSubMenus();sub_hole_menu=!sub_hole_menu">
                <img src="~static/icons/hole-icon.png" class="w-8 h-8">
                <div class="flex absolute sub-pcb" v-if="sub_hole_menu">
                  <div class="p-3 rounded-b text-center icon-sub cursor-pointer shadow-md">
                    <div class="mx-auto w-8"><img src="~static/icons/icon_ref_4348.png" class="w-8 h-6"></div>
                    <div class="text-black">Show top</div>
                  </div>
                  <div class="p-3 rounded-b text-center icon-sub cursor-pointer shadow-md">
                    <div class="w-8 h-8 bg-white mx-auto" @click.stop><input type="text" value="2" class="w-full"></div>
                    <div class="text-black">diameter</div>
                  </div>
                </div>
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75 relative" @click.stop="hideSubMenus();background_menu=!background_menu">
                <img src="~static/icons/icon_ref_4350.png" class="w-8 h-8">
                <div class="flex absolute sub-pcb" v-if="background_menu">
                  <div class="p-3 rounded-b text-center icon-sub cursor-pointer shadow-md">
                    <div class="w-8 h-8 bg-white mx-auto"></div>
                    <div class="text-black">Color</div>
                  </div>
                  <div class="p-3 rounded-b text-center icon-sub cursor-pointer shadow-md">
                    <div class="mx-auto w-8"><img src="~static/icons/icon_ref_4348.png" class="w-8 h-6"></div>
                    <div class="text-black">Show</div>
                  </div>
                  <div class="p-3 rounded-b text-center icon-sub cursor-pointer shadow-md">
                    <div class="mx-auto w-8"><img src="~static/icons/icon-grid.png" class="w-8 h-6"></div>
                    <div class="text-black">Grid</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-3 flex items-center rounded-b icon-main cursor-pointer shadow-md relative" @click.stop="hide_main_menu('component_menu');">
            <img src="~static/icons/components-icon.png" class="w-12 h-12">
            <div class="flex absolute sub-pcb" v-if="component_menu">
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75">
                <img src="~static/icons/icon_ref_4345.png" class="w-8 h-8">
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75">
                <img src="~static/icons/icon_ref_4346.png" class="w-8 h-8">
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75">
                <img src="~static/icons/icon_ref_4347.png" class="w-8 h-8">
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75">
                <img src="~static/icons/icon_ref_4348.png" class="w-8 h-8">
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75 relative" @click.stop="hideSubMenus();text_menu=!text_menu">
                <img src="~static/icons/text-icon.png" class="w-8 h-8">
                <div class="flex absolute sub-pcb" v-if="text_menu">
                  <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md">
                    <img src="~static/icons/icon_ref_4348.png" class="w-8 h-6">
                  </div>
                  <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md">
                    <img src="~static/icons/icon_ref_4344.png" class="w-8 h-8">
                  </div>
                  <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md">
                    <img src="~static/icons/icon_ref_4345.png" class="w-8 h-8">
                  </div>
                </div>
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75 relative" @click.stop="hideSubMenus();background_menu=!background_menu">
                <img src="~static/icons/icon_ref_4350.png" class="w-8 h-8">
                <div class="flex absolute sub-pcb" v-if="background_menu">
                  <div class="p-3 rounded-b text-center icon-sub cursor-pointer shadow-md">
                    <div class="w-8 h-8 bg-white mx-auto"></div>
                    <div class="text-black">Color</div>
                  </div>
                  <div class="p-3 rounded-b text-center icon-sub cursor-pointer shadow-md">
                    <div class="mx-auto w-8"><img src="~static/icons/icon_ref_4348.png" class="w-8 h-6"></div>
                    <div class="text-black">Show</div>
                  </div>
                  <div class="p-3 rounded-b text-center icon-sub cursor-pointer shadow-md">
                    <div class="mx-auto w-8"><img src="~static/icons/icon-grid.png" class="w-8 h-6"></div>
                    <div class="text-black">Grid</div>
                  </div>
                </div>
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75">
                <img src="~static/icons/icon_ref_4351.png" class="w-8 h-8">
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75">
                <img src="~static/icons/icon_ref_4352.png" class="w-8 h-8">
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75">
                <img src="~static/icons/icon_ref_4353.png" class="w-8 h-8">
              </div>
            </div>
          </div>
          <div class="p-3 flex items-center rounded-b icon-main cursor-pointer shadow-md" @click="hide_main_menu('part_menu')">
            <img src="~static/icons/part-icon.png" class="w-8 h-8">
            <div class="flex absolute sub-pcb" v-if="part_menu">
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75">
                <img src="~static/icons/icon_ref_4345.png" class="w-8 h-8">
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75">
                <img src="~static/icons/icon_ref_4346.png" class="w-8 h-8">
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75">
                <img src="~static/icons/icon_ref_4347.png" class="w-8 h-8">
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75">
                <img src="~static/icons/icon_ref_4348.png" class="w-8 h-8">
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75 relative" @click.stop="hideSubMenus();text_menu=!text_menu">
                <img src="~static/icons/text-icon.png" class="w-8 h-8">
                <div class="flex absolute sub-pcb" v-if="text_menu">
                  <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md">
                    <img src="~static/icons/icon_ref_4348.png" class="w-8 h-6">
                  </div>
                  <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md">
                    <img src="~static/icons/icon_ref_4344.png" class="w-8 h-8">
                  </div>
                  <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md">
                    <img src="~static/icons/icon_ref_4345.png" class="w-8 h-8">
                  </div>
                </div>
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75">
                <img src="~static/icons/icon_ref_4352.png" class="w-8 h-8">
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75">
                <img src="~static/icons/icon_ref_4353.png" class="w-8 h-8">
              </div>
            </div>
          </div>
          <div class="p-3 flex items-center rounded-b icon-main cursor-pointer shadow-md relative" @click.stop="hide_main_menu('wire_menu')">
            <img src="~static/icons/wire-icon.png" class="w-8 h-6">
            <div class="flex absolute sub-pcb" v-if="wire_menu">
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75">
                <img src="~static/icons/icon_ref_4345.png" class="w-8 h-8">
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75">
                <img src="~static/icons/icon_ref_4346.png" class="w-8 h-8">
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75">
                <img src="~static/icons/icon_ref_4347.png" class="w-8 h-8">
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75">
                <img src="~static/icons/icon_ref_4348.png" class="w-8 h-8">
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75 relative" @click.stop="hideSubMenus();text_menu=!text_menu">
                <img src="~static/icons/text-icon.png" class="w-8 h-8">
                <div class="flex absolute sub-pcb" v-if="text_menu">
                  <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md">
                    <img src="~static/icons/icon_ref_4348.png" class="w-8 h-6">
                  </div>
                  <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md">
                    <img src="~static/icons/icon_ref_4344.png" class="w-8 h-8">
                  </div>
                  <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md">
                    <img src="~static/icons/icon_ref_4345.png" class="w-8 h-8">
                  </div>
                </div>
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75">
                <img src="~static/icons/icon_ref_4352.png" class="w-8 h-8">
              </div>
              <div class="p-3 flex items-center rounded-b icon-sub cursor-pointer shadow-md opacity-75">
                <img src="~static/icons/icon_ref_4353.png" class="w-8 h-8">
              </div>
            </div>
          </div>
          <div class="p-3 flex items-center rounded-b icon-main cursor-pointer shadow-md">
            <img src="~static/icons/hole-icon.png" class="w-8 h-8">
          </div>
          <div class="p-3 flex items-center rounded-b icon-main cursor-pointer shadow-md" @click="setting_menu=!setting_menu">
            <font-awesome-icon class="text-black text-3xl" :icon="['fas', 'cog']"></font-awesome-icon>
          </div>
      </div>
        <SchematicEngine />
      </div>

    <div v-if="step === 1" class="engine-container design">
      <div class="absolute flex mx-auto z-10 main-menu">
          <div class="p-3 flex items-center rounded-b icon-main" @click="setting_menu=!setting_menu">
              <font-awesome-icon class="text-xl text-black" :icon="['fas', 'cog']"></font-awesome-icon>
          </div>
          <div class="p-3 flex items-center rounded-b icon-main" v-if="!setting_menu">
              <font-awesome-icon class="text-xl text-black" :icon="['fas', 'door-open']"></font-awesome-icon>
          </div>
          <div class="p-3 flex items-center rounded-b icon-main" v-if="!setting_menu">
              <font-awesome-icon class="text-xl text-black" :icon="['fas', 'list-alt']"></font-awesome-icon>
          </div>
          <div class="p-3 flex items-center rounded-b icon-main" v-if="!setting_menu">
              <font-awesome-icon class="text-xl text-black" :icon="['fas', 'edit']"></font-awesome-icon>
          </div>
      </div>
      <DesignEngine />
    </div>

    <!--Bot Buttons-->
    <div class="mt-10 w-full flex items-center" :class="{'justify-end': step === 0, 'justify-between': step === 1}">
      <button v-if="step > 0 " @click="step=0" class="self-start btn pill-button px-16 py-0">Back</button>
      <button v-if="step === 0" @click="step=1" class="self-end btn pill-button pill-button--ideeza px-16 py-0">Next</button>
    </div>


  </div>
</template>

<script>
  import SchematicEngine from '~/components/user/pro/schematic-engine.vue'
  import DesignEngine from '~/components/user/pro/design-engine.vue'
    export default {
        name: "pro-electronics",

      data() {
        return {
          step: 0,
          setting_menu: false,
          pcb_menu: false,
          layer_menu: false,
          text_menu: false,
          sub_hole_menu: false,
          background_menu: false,
          component_menu: false,
          part_menu: false,
          wire_menu: false
        }
      },
      components: {
        SchematicEngine,
        DesignEngine
      },
      computed: {
        overlayWidth () {
          if(this.step === 0)
            return 0;
          else {
            return 99;
          }
        },
      },
      methods: {
        hideSubMenus() {
          this.layer_menu=false
          this.text_menu=false
          this.sub_hole_menu=false
          this.background_menu=false
        },
        hide_main_menu(val) {
          let value = this[val]
          this.pcb_menu = false
          this.component_menu = false
          this.part_menu = false
          this.wire_menu = false
          this[val] = !value
        }
      }
    }
</script>

<style scoped>
  .engine-container{
    @apply relative bg-gray-200;
  }
  .stepper-bar{
    margin-top: 100px;
    width: 300px;
    height: 15px;
  }
  .stepper-bar-overlay{
    @apply rounded-r-lg;
    transition: all 0.3s ease-in;
    height: 100%;
    width: 97%;
    margin-left: 2px;
  }
  .stepper-icon-wrapper{
    @apply rounded-full bg-gray-200 font-semibold;
    width: 50px;
    height: 50px;
    margin-top: -20px;
    transition: all 0.3s ease-in;
  }

  .stepper-icon-wrapper.active{
    @apply bg-ideeza-dark;
  }
  .stepper-icon-wrapper.active {
    @apply text-white;
  }
  .stepper-text{
    @apply absolute font-semibold text-gray-600;
    margin-top: 60px;
  }
  .stepper-text--ask{
    margin-left: -15px;
    width: 70px;
  }
  .stepper-text--review{
    margin-left: 0px;
  }
  .icon-main {
    background: white;
    margin-right: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .icon-sub {
    background: #e0e0e0;
    margin-right: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .main-menu{
    left: 50%;
    transform: translateX(-50%);
  }
  .sub-pcb {
    top: 113%;
    width: max-content;
    left: 50%;
    transform: translateX(-50%);
  }

</style>
