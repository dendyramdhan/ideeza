<template>
  <div class="settings-privacy mx-auto p-2">
    <!---->
    <!--Social Connections-->
    <!---->
    <div class="md:flex justify-between items-center pb-3 border-b border-solid border-gray-400">
      <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Social Connections</h1>
    </div>
    <!--Container-->
    <div class="my-5 pb-10 bg-white shadow-md">
      <!--Head-->
      <div class="p-10 mb-5 text-gray-500 border-b border-solid border-gray-300" v-for="Project in Projects" v-if="Project.id == 1">
        {{Project.content1}}<br />
        <br />{{Project.content2}}
        <br />
        <br />{{Project.content3}}
      </div>
      <div class="px-10">
        <CheckBox
          :checked="false"
          value
        >Share my activity with my Facebook friends that are also on Ideeza (recommended)</CheckBox>
      </div>
    </div>

    <!---->
    <!--facebook-->
    <!---->
    <div
      class="md:flex justify-between items-center pb-3 mt-10 border-b border-solid border-gray-400"
    >
      <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Add Ideeza to Facebook Timeline</h1>
    </div>
    <!--Container-->
    <div class="my-5 pb-10 bg-white shadow-md">
      <!--Head-->
      <div class="p-10 mb-5 text-gray-500 border-b border-solid border-gray-300" v-for="Project in Projects" v-if="Project.id == 2">
        {{Project.content1}}
        <br />
        <br />{{Project.content2}}
      </div>
      <div class="px-10">
        <CheckBox
          :checked="false"
          value
        >Share my activity with my Facebook friends that are also on Ideeza (recommended)</CheckBox>
      </div>
    </div>

    <!---->
    <!--Products-->
    <!---->
    <div
      class="md:flex justify-between items-center pb-3 mt-10 border-b border-solid border-gray-400"
    >
      <h1
        class="text-gray-800 text-xl lg:text-3xl font-semibold"
      >Your Products & Profile in Search Engines</h1>
    </div>
    <!--Container-->
    <div class="my-5 pb-10 bg-white shadow-md">
      <!--Head-->
      <div class="p-10 mb-5 text-gray-500 border-b border-solid border-gray-300" v-for="Project in Projects" v-if="Project.id == 3">
        {{Project.content1}}
        <br />
        <br />{{Project.content2}}
        <br />
        <br />{{Project.content3}}
      </div>
      <div class="px-10">
        <CheckBox
          :checked="false"
          value
        >Include my profile and products in search engines like Google and Bing (recommended)</CheckBox>
      </div>
    </div>

    <div class="mt-16 mb-16 text-center">
      <button class="btn px-20 pill-button pill-button--ideeza" @click="savesetting">Save</button>
    </div>
  </div>
</template>

<script>
import CheckBox from "~/components/form/checkbox.vue";
import Projects from "~/data/TechnicianSettingApi.json";

export default {
  name: "privacy",
  data: function() {
    return {
      longview: true,
      Projects: Projects.Privacy
    };
  },
  methods:{
    savesetting(){
      alert("all setting saved!!!")
    }
  },
  components: {
    CheckBox
  }
};
</script>

<style scoped>
.settings-privacy {
  max-width: 950px;
}
</style>
