<template>
  <div class="lg:flex justify-between">
    <div class="making-container">
      <div class="track-heading">Freelancers</div>
      <div class="mt-10" v-for="Project in Projects">
        <!--Freelancers-->
        <div class="mb-10"   v-if="Project.kind == 'Freelancers' ">
          <div class="flex justify-between items-center" >
            <div class="flex items-center">
              <div class="mr-2">
                <img class="avatar" :src="Project.profileimage"  alt />
              </div>
              <div>
                <span class="block font-semibold text-sm">{{Project.name}}</span>
                <span class="block text-sm text-gray-500">{{Project.consultantKind}}</span>
              </div>
            </div>
             <nuxt-link :to="{ path: '/user/messages', query: { id: Project.id}}">
            <font-awesome-icon
              class="mr-2 h-6 text-ideeza text-xl cursor-pointer"
              :icon="['fas', 'envelope']"
            /></nuxt-link>
          </div>
          <div class="mt-3 flex justify-between">
            <div>
              He's working on:
              <span class="font-semibold">Patent</span>
            </div>
            <div class="font-semibold text-ideeza">See his work</div>
          </div>
        </div>
        
      </div>
    </div>
    <div class="making-container">
      <div class="track-heading">Electronics</div>
      <div class="mt-10">
        <Progress width="60" />
        <h1 class="font-semibold my-5">People working on code</h1>
        <div class="mb-10" v-for="Project in Projects">
          <div class="flex justify-between items-center" v-if="Project.kind == 'Eletronics' ">
            <div class="flex items-center">
              <div class="mr-2">
                <img class="avatar" :src="Project.profileimage" alt />
              </div>
              <div>
                <span class="block font-semibold text-sm">{{Project.name}}</span>
                <span class="block text-sm text-gray-500">{{Project.consultantKind}}</span>
              </div>
            </div>
            <span class="text-sm text-gray-500">{{Project.consultantname}}</span>
             <nuxt-link :to="{ path: '/user/messages', query: { id: Project.id}}">
            <font-awesome-icon
              class="mr-2 h-6 text-ideeza text-xl cursor-pointer"
              :icon="['fas', 'envelope']"
            /></nuxt-link>
          </div>
        </div>

      </div>
    </div>
    <div class="making-container">
      <div class="track-heading">Parts</div>
      <div class="mt-10">
        <Progress width="30" />
        <h1 class="font-semibold my-5">People working on code</h1>
        <div class="mb-10" v-for="Project in Projects">
          <div class="flex justify-between items-center" v-if="Project.kind == 'Parts' ">
            <div class="flex items-center">
              <div class="mr-2">
                <img class="avatar" :src="Project.profileimage" alt />
              </div>
              <div>
                <span class="block font-semibold text-sm">{{Project.name}}</span>
                <span class="block text-sm text-gray-500">{{Project.consultantKind}}</span>
              </div>
            </div>
            <span class="text-sm text-gray-500">{{Project.consultantname}}</span>
             <nuxt-link :to="{ path: '/user/messages', query: { id: Project.id}}">
            <font-awesome-icon
              class="mr-2 h-6 text-ideeza text-xl cursor-pointer"
              :icon="['fas', 'envelope']"
            /></nuxt-link>
          </div>
        </div>
         
      </div>
      <nuxt-link to="/user/order-tracking/delivery">
          <button class="btn btn-normal btn--ideeza btn-text-bold btn--rounded px-8 py-4 text-lg" >Next</button>
          </nuxt-link>
    </div>
     
  </div>
</template>

<script>
import Progress from "~/components/user/order-tracking/progress-bar.vue";
import Projects from "~/data/UserProjectApi.json";

export default {
  name: "making-product",
  components: {
    Progress
  },
  data: function() {
    return {
      Projects: Projects.myprojectconnect,
      tabNumber: 0,
      titleList: ["Electronics", "Freelancers", "Parts"]
    };
  },
  mounted() {
    this.$store.commit("trackstepper/set", { position: 0 });
  }
};
</script>

<style scoped>
.making-container {
  @apply px-2;
  width: 100%;
  max-width: 370px;
}
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
