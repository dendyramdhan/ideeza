<template>
<div class="settings-privacy mx-auto p-2">

  <!---->
  <!--Social Connections-->
  <!---->
  <div class="md:flex justify-between items-center pb-3 border-b border-solid border-gray-400 ">
    <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Social Connections</h1>
  </div>
  <!--Container-->
  <div class="my-5 pb-10 bg-white shadow-md">

    <!--Head-->
    <div class="p-10 mb-5 text-gray-500 border-b border-solid border-gray-300">
      Social Connections highlights your Ideeza activity, which may include your username, Facebook profile photo, and recent locations you visited to your Facebook friends who are also on Ideeza.
      <br >
      <br >
      If you turn off this feature, you will still be connected to Facebook, but your Ideeza activity will not be shared to other Facebook friends on Ideeza. Your public Ideeza activity (such as public reviews) on the platform will still be shown to other Ideeza users.
      <br >
      <br >
      If you want to disconnect your Facebook account from Ideeza, go to General to learn more.
    </div>
    <div class="px-10 ">
      <CheckBox :checked="false" value="" >Share my activity with my Facebook friends that are also on Ideeza (recommended)</CheckBox>
    </div>

  </div>

  <!---->
  <!--facebook-->
  <!---->
  <div class="md:flex justify-between items-center pb-3 mt-10 border-b border-solid border-gray-400 ">
    <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Add Ideeza to Facebook Timeline</h1>
  </div>
  <!--Container-->
  <div class="my-5 pb-10 bg-white shadow-md">

    <!--Head-->
    <div class="p-10 mb-5 text-gray-500 border-b border-solid border-gray-300">
      Check this box to automatically publish your Wish Lists to Facebook.
      <br><br>
      They'll show up in your Facebook Timeline and your friends' News Feed and Ticker.
    </div>
    <div class="px-10 ">
      <CheckBox :checked="false" value="" >Share my activity with my Facebook friends that are also on Ideeza (recommended)</CheckBox>
    </div>

  </div>

  <!---->
  <!--Products-->
  <!---->
  <div class="md:flex justify-between items-center pb-3 mt-10 border-b border-solid border-gray-400 ">
    <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Your Products & Profile in Search Engines</h1>
  </div>
  <!--Container-->
  <div class="my-5 pb-10 bg-white shadow-md">

    <!--Head-->
    <div class="p-10 mb-5 text-gray-500 border-b border-solid border-gray-300">
      Search engines attract lots of traffic to your profile and generate interest and connections for our users.
      <br>
      <br>
      Perhaps you want to be listed on Ideeza but have concerns about your products and profile being advertised more widely. You can turn off search indexing, preventing search engines such as Google and Bing from displaying your pages in their search results.
      <br>
      <br>
      Note: This may reduce your profile opportunities and will take a few days to take effect.
    </div>
    <div class="px-10 ">
      <CheckBox :checked="false" value="" >Include my profile and products in search engines like Google and Bing (recommended)</CheckBox>
    </div>

  </div>


  <div class="mt-16 mb-16 text-center">
    <button class="btn px-20 pill-button pill-button--ideeza">Save</button>
  </div>


</div>
</template>

<script>
  import CheckBox from '~/components/form/checkbox.vue'
    export default {
        name: "privacy",
      components: {
          CheckBox
      }
    }
</script>

<style scoped>
  .settings-privacy{
    max-width: 950px;
  }

</style>
