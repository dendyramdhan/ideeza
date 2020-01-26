<template>
  <div>
    <div class="font-semibold text-lg">We have already made the cover and electronics part of your product. Now it;s
      time to combine them</div>
    <div class="mt-10 mx-auto w-1/3">
      <Progress width="60" />
      <div class="my-10" v-for="Project in Projects">
        <div class="flex justify-between items-center" v-if="Project.kind == 'Eletronics' ">
          <div class="flex items-center">
            <div class="mr-2">
              <img class="avatar" :src="Project.profileimage" alt />
            </div>
            <div>
              <span class="block font-semibold text-base text-black">{{Project.name}}</span>
              <span class="block text-sm text-gray-500">{{Project.consultantKind}}</span>
            </div>
          </div>
          <div class="flex items-center">
            <div class="text-sm text-gray-500 mr-2">
              <span class="block font-semibold text-sm text-ideeza">{{Project.consultantname}}</span>
              <span class="block text-xs font-bold text-gray-500">{{Project.state}}</span>
            </div>
            <nuxt-link :to="{ path: '/user/messages', query: { id: Project.id}}">
              <font-awesome-icon class="mr-2 h-6 text-ideeza text-xl cursor-pointer" :icon="['far', 'envelope']" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="text-right absolute right-0 bottom-0">
    <nuxt-link to="/user/order-tracking/delivery">
      <button class="btn btn-normal btn--ideeza btn-text-bold btn--rounded px-8 py-4 text-lg m-3" >Next</button>
    </nuxt-link>
    </div>
  </div>
</template>
<script>
  import Progress from "~/components/user/order-tracking/progress-bar.vue";
  import Projects from "~/data/UserProjectApi.json";

  export default {
    middleware: "auth",
    name: "making-product",
    components: {
      Progress
    },
    data: function () {
      return {
        Projects: Projects.myprojectconnect,
        tabNumber: 0,
        titleList: ["Electronics", "Freelancers", "Parts"]
      };
    },
    mounted() {
      this.$store.commit("trackstepper/set", {
        position: 0
      });
    }
  };

</script>
<style scoped>
  .track-heading {
    @apply text-2xl font-semibold relative;
    width: fit-content;
  }

  .track-heading:before {
    @apply border-b-4 border-solid border-ideeza left-0;
    content: "";
    position: absolute;
    width: 80px;
    bottom: -10px;
  }

  .avatar {
    @apply rounded-full;
    width: 45px;
    height: 45px;
  }

</style>
