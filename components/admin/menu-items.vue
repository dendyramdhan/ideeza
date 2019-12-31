<template>
  <div class="left-main-menu ">
    <div class="menu-item">
      <nuxt-link to="/admin/dashboard">
        <DashBoardIcon class="fill-current mr-5" /> Dashboard
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/admin/users">
        <UserIcon class="fill-current mr-5" /> Users
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/admin/products">
        <ProductIcon class="fill-current mr-5" /> Products
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/admin/order">
        <font-awesome-icon class="mr-5 w-8 h-8 text-2xl align-text-top" :icon="['fas', 'shopping-cart']"/> Orders
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/user/messages">
        <font-awesome-icon class="mr-5 w-8 h-8 text-2xl align-text-top" :icon="['far', 'comments']"/> Messages
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  import DashBoardIcon from '~/components/partials/icons/dashboard-icon.vue'
  import ProductIcon from '~/components/partials/icons/product-icon.vue'
  import TaskIcon from '~/components/partials/icons/list-icon.vue'
  import UserIcon from '~/components/partials/icons/user-icon.vue'
    export default {
      name: "menu-items",
      components: {
        DashBoardIcon,
        ProductIcon,
        TaskIcon,
        UserIcon
      }
    }
</script>

<style scoped>
  .menu-item{
    @apply flex mb-8 content-center items-center mt-2 text-gray-700 text-xl font-semibold cursor-pointer;
  }

  .menu-item:hover{
    @apply text-ideeza;
  }
  .left-main-menu svg{
    @apply text-gray-500;
  }
  .menu-item:hover svg{
    @apply text-ideeza;
  }
  .active-link,
  .active-link svg{
    @apply text-ideeza;
  }
</style>
