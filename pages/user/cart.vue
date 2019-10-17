<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="cart-container">
        <div class="shadow-md">
          <CartStepper />
          <nuxt-child></nuxt-child>
        </div>
      </div>



    </div>

  </div>


</template>

<script>
  import LeftMenu from '~/components/user/common-left-side-menu.vue'
  import CartStepper from '~/components/user/cart/stepper.vue'

  export default {
    layout: 'user',
    name: "cart-index",
    components: {
      LeftMenu,
      CartStepper
    },
    data: function () {
      return {}
    },
    computed: {
      leftMenu() {
        return this.$store.state.usermenu.openLeftMenu;
      }
    },
    mounted() {

    },
    methods: {}
  }
</script>

<style scoped>
  .cart-container{
    width: 100%;
    max-width: 1530px;
    padding: 20px 5px;
  }
  @screen lg {
    .cart-container {
      padding: 60px 50px;
    }
  }


</style>
