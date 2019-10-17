<template>
    <div class="py-10">
      <div class="stepper-container mx-auto">
        <div class="stepper-bar bg-gray-200 relative">
          <div class="stepper-bar-overlay bg-ideeza-dark" :style="`width: ${overlayWidth}%` "></div>
          <div class="absolute top-0 left-0 h-full w-full z-50 flex justify-between">

            <!--1-->
            <div class="stepper-icon-wrapper active relative">
              <check-list-icon class="fill-current absolute-center-h-v" />
            </div>
            <!--2-->
            <div class="stepper-icon-wrapper relative" :class="{'active': cartStep > 0}">
              <tap-icon class="fill-current absolute-center-h-v" />
            </div>
            <!--3-->
            <div class="stepper-icon-wrapper relative" :class="{'active': cartStep > 1}">
              <cart-icon class="fill-current absolute-center-h-v" />
            </div>
            <!--4-->
            <div class="stepper-icon-wrapper relative" :class="{'active': cartStep > 2}">
              <services-icon class="fill-current absolute-center-h-v" />
            </div>
            <!--5-->
            <div class="stepper-icon-wrapper relative" :class="{'active': cartStep > 3}">
              <font-awesome-icon class="w-8 h-8 text-xl absolute-center-h-v" :icon="['fas', 'truck-loading']"/>
            </div>
            <!--6-->
            <div class="stepper-icon-wrapper relative" :class="{'active': cartStep > 4}">
              <font-awesome-icon class="w-8 h-8 text-xl absolute-center-h-v" :icon="['fas', 'money-check-alt']"/>
            </div>
            <!--7-->
            <div class="stepper-icon-wrapper relative" :class="{'active': cartStep > 5}">
              <font-awesome-icon class="w-8 h-8 text-xl absolute-center-h-v" :icon="['fas', 'clipboard-check']"/>
            </div>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import CheckListIcon from '~/components/partials/icons/checklist-icon.vue'
  import TapIcon from '~/components/partials/icons/tap-icon.vue'
  import CartIcon from '~/components/partials/icons/cart-icon.vue'
  import ServicesIcon from '~/components/partials/icons/services-icon.vue'
    export default {
        name: "cart-stepper",
      components: {
          CheckListIcon,
          TapIcon,
        CartIcon,
        ServicesIcon
      },
      computed: {
        overlayWidth () {
          return this.$store.state.cartstepper.cartStep * 16.6;
        },
        cartStep () {
          return this.$store.state.cartstepper.cartStep;
        }
      }
    }
</script>

<style scoped>
  .stepper-container{
    width: 100%;
    max-width: 1000px;
  }
  .stepper-bar{
    width: 945px;
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
    @apply rounded-full bg-gray-200;
    width: 50px;
    height: 50px;
    margin-top: -20px;
    transition: all 0.3s ease-in;
  }
  .stepper-icon-wrapper svg{
    @apply text-gray-800;
  }
  .stepper-icon-wrapper.active{
    @apply bg-ideeza-dark;
    transform: scale(1.1);
  }
  .stepper-icon-wrapper.active svg{
    @apply text-white;
  }
</style>
