<template>
    <modal wide @close="$emit('close')">
      <template slot="header">
        <div class="text-right py-3 px-3">
          <button @click="$emit('close')">
            <font-awesome-icon class="text-xs text-black mt-2 mr-2" :icon="['fa', 'times']" />
          </button>
        </div>
      </template>
      <template slot="body">
        <div class="mx-5">
          <div class="text-center">
              Sign up with <span class="text-ideeza font-bold">Facebook</span> or <span class="text-ideeza font-bold">Google</span>
          </div>
          <div class="flex items-center justify-between mb-3">
            <hr class="flex-1 mt-1">
            <span class="mx-1">or</span>
            <hr class="flex-1 mt-1">
          </div>
          <form>
          <div class="text-left">
          <input type="text" class="block w-full border border-gray px-3 py-3 mb-3" placeholder="Email Address">
          <input type="text" class="block w-full border border-gray px-3 py-3 mb-3" placeholder="First Name">
          <input type="text" class="block w-full border border-gray px-3 py-3 mb-3" placeholder="Last Name">
          <input type="text" class="block w-full border border-gray px-3 py-3 mb-3" placeholder="Create a Password">
          <div class="font-bold text-lg text-black mb-2">Birthday</div>
          <div class="text-base mb-1">Other people won't see your birthday.</div>
          <div class="flex justify-between mb-3">
              <input type="text" class="border border-gray px-3 py-3 mr-1 w-1/3" placeholder="Month">
              <input type="text" class="border border-gray px-3 py-3 mr-1 w-1/3" placeholder="Day">
              <input type="text" class="border border-gray px-3 py-3 mr-1 w-1/3" placeholder="Year">
          </div>
          <label class="leading-normal flex text-sm mb-1">
          <input type="checkbox" class="mt-1 mr-2">
          <span> i'd like to recieve marketing promotions, special offers, inspiration and policy updates from ideeza. You can opt out any time.</span>
          </label>
          <button class="rounded-full bg-ideeza text-white text-center w-full py-3 mb-1">
            Sign up</button>
          </div>
          </form>
          <div class="text-center mb-5">
            Already have an ideeza account? <a href="#" @click="$emit('login')" class="text-ideeza font-bold">Log in</a>
          </div>
        </div>
      </template>
    </modal>
</template>
<script>
import Modal from '~/components/reusables/Modal.vue'
export default {
    components: {
        Modal
    }
}
</script>
