<template>
    <div>
        <div :style="{'background-image':'url('+backgroundUrl+');'}" class="bg-pricing"></div>
        <nuxt />
    </div>
</template>
<script>
export default {
    data() {
        return{
             backgroundUrl:require('~/static/images/curve-bg-1.png')
        }
    }
}
</script>
<style>
.bg-pricing {
    width: 100%;
    height: 100vh;
    background-position: 0 -205px;
    background-repeat: no-repeat;
    background-position: 0px -0px;
    background-size: 100% 75%;
    z-index: -1;
    position: fixed;
}
@media (min-width: 640px) {
      .bg-pricing {
          background-position: 0px -200px;
          background-size: 100%;
      }
}
</style>