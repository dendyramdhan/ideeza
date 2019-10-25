<template>
  <div class="py-10 lg:px-20   flex flex-col lg:flex-row lg:justify-center justify-center items-center">
     <div class="options-container flex flex-col items-center lg:mr-32">
       <BluePrintIcon class="fill-current" />
       <span>Download the blueprint</span>
     </div>

    <div @click="moveNext" class="options-container flex flex-col items-center">
      <ShoppingBasketIcon class="fill-current" />
      <span>Go to checkout</span>
    </div>
  </div>
</template>

<script>
  import BluePrintIcon from '~/components/partials/icons/blueprint-icon.vue'
  import ShoppingBasketIcon from '~/components/partials/icons/shopping-basket-icon.vue'
  import { mapMutations } from 'vuex'
    export default {
        name: "cart-options",
      mounted() {
        this.$store.commit('cartstepper/set', {position: 1})
      },
      components: {
        BluePrintIcon,
        ShoppingBasketIcon
      },
      methods: {
        moveNext() {
          this.next();
          this.$router.push({
            path: '/user/cart/cart'
          });
        },
        ...mapMutations({
          next: 'cartstepper/incrementStep',
          back: 'cartstepper/decrementStep'
        })
      }
    }
</script>

<style scoped>
  .options-container{
    @apply text-xl text-gray-300 cursor-pointer font-semibold;
  }
  .options-container svg{
    max-width: 230px;
  }
  .options-container:hover{
    @apply text-ideeza-dark;
  }

  @screen lg{
    .options-container{
      @apply text-2xl;
    }
  }
</style>
