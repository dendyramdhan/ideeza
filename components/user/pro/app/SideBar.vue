<template>
    <div class="right-bar-container" :class="{'to-left':left}">
    <div class="right-bar bg-white shadow">
        <component v-bind:is="currentMenu"></component>
    </div>
    <div class="icon">
          <div @mouseenter="left=!left" v-if="!left">
              <font-awesome-icon   class="mr-1 text-3xl" :icon="['fas', 'arrow-left']" />
          </div>
          <div v-else @click="left=!left">
              <font-awesome-icon  class="mr-1 text-3xl" :icon="['fas', 'arrow-right']" />
          </div>
      </div>
    </div>
</template>
<script>
import WebViewerSetting from './WebViewerSetting'
import LayersSetting from './LayersSetting'
import TimePickerSetting from './TimePickerSetting'
import TextBoxSetting from './TextBoxSetting'
import SpinnerSetting from './SpinnerSetting'
import PasswordTextBoxSetting from './PasswordTextBoxSetting'
import NotifierSetting from './NotifierSetting'
import ListViewSetting from './ListViewSetting'
import ListPickerSetting from './ListPickerSetting'
import LabelSetting from './LabelSetting'
import ImageSetting from './ImageSetting'
import DatePickerSetting from './DatePickerSetting'
import CheckBoxSetting from './CheckBoxSetting'
import ButtonSetting from './ButtonSetting'
import SliderSetting from './SliderSetting'
import { mapState } from 'vuex'
export default {
    data() {
        return {
            left: false
        }
    },
    components: {
        WebViewerSetting,
        LayersSetting,
        TimePickerSetting,
        TextBoxSetting,
        SpinnerSetting,
        PasswordTextBoxSetting,
        NotifierSetting,
        ListViewSetting,
        ListPickerSetting,
        LabelSetting,
        ImageSetting,
        DatePickerSetting,
        CheckBoxSetting,
        ButtonSetting,
        SliderSetting
    },
    computed:{
        ...mapState({
            currentMenu: state=> state.appMenu.currentMenu
        })
    }
}
</script>
<style scoped>
.green-btn{
    background:#03be33;
  }
  .right-bar {
    width: 300px;
    top: 0;
    right: 0;
    z-index: 0;
    height: 80vh;
    top: 15vh;
    transform:rotateY(180deg);
    -ms-transform:rotateY(180deg); /* IE 9 */
    -webkit-transform:rotateY(180deg);
    overflow-y: auto;
  }
  .right-bar > div{
    transform:rotateY(180deg);
    -ms-transform:rotateY(180deg); /* IE 9 */
    -webkit-transform:rotateY(180deg);
  }
  .right-bar::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
    }
    .right-bar::-webkit-scrollbar-thumb {
        background-color: #ff09d0;
        border: 2px solid #ff09d0;
    }
    .right-bar::-webkit-scrollbar {
        width: 5px;
        background-color: #f5f5f5;
    }
    .right-bar-container .icon {
      position: absolute;
      top: 0;
      z-index: 1;
      right: 100%;
    }
    .right-bar-container .icon div{
      background: white;
      padding: 10px;
    }
    .right-bar-container{
      position: fixed;
      z-index: 10;
      top: 15vh;
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
      left: 100%;
      margin-left: -22px;
    }
    .to-left{
      margin-left: -321px;
    }
</style>
