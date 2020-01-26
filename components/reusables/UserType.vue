<template>
  <div>
    <modal wide @close="$emit('close')">
      <template slot="body">
        <div class="my-5 mx-5">
          <ul>
            <li
            v-if="!auth"
            style="cursor: pointer"
            class="md:inline-block sm:block text-left border-b md:border-0 py-4 md:py-0 border-gray-400 px-5"
            @click="openSignUpModal('creative')"
            >I am Creative</li>
            <li
            v-if="!auth"
            style="cursor: pointer"
            class="md:inline-block sm:block text-left border-b md:border-0 py-4 md:py-0 border-gray-400 px-5"
            @click="openSignUpModal('manufacturer')"
            >I am Manufacturer</li>
          </ul>
        </div>
      </template>
    </modal>

  </div>
</template>
<script>
  import {mapGetters, mapMutations} from 'vuex';
  import Modal from "~/components/reusables/Modal.vue";

  export default {
    components: {
      Modal,
    },
    data() {
      return {
        auth: false,
      }
    },
    mounted() {
      let authToken = window.$nuxt.$cookies.get("authToken");
      if (authToken != null) {
        this.auth = true;
        let firstname = window.$nuxt.$cookies.get("firstname");
        let lastname = window.$nuxt.$cookies.get("lastname");
        this.name = firstname + " " + lastname;
      } else {
        this.auth = false;
      }
    },
    methods:{
      ...mapMutations({
        setUserType: 'modal/setUserType',
        setUserTypeModal: 'modal/setUserTypeModal',
        setSignUpModal: 'modal/setSignUpModal',
      }),

      openSignUpModal(userType) {
        this.setUserTypeModal(false);
        this.setSignUpModal(true);
        this.setUserType(userType);
      }
    }

  }
</script>