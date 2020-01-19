<template>
    <div class="right-bar fixed bg-white shadow">
        <component v-bind:is="currentMenu"></component>
    </div>
</template>
<script>
import WebViewer from './WebViewer'
import Layers from './Layers'
import TimePicker from './TimePicker'
export default {
    components: {
        WebViewer,
        Layers,
        TimePicker
    },
    data() {
        return{
            currentMenu: 'time-picker'
        }
    }
}
</script>
<style scoped>
.green-btn{
    background:#03be33;
  }
</style>
