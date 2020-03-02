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
      <div class="flex w-6/12 p-4 m-auto bg-white border border-gray-600 shadow fixed z-50 top-0 left-0 right-0 m-auto mt-32">
        <div class="w-1/3">
          <div class="text-center">
            <img src="~/static/images/product_ref_1223.png" class="inline-block">
          </div>
          <div class="py-2">
            <p class="text-lg text-gray-800">Flame reducers for military</p>
            <p class="text-sm text-gray-600">Note</p>
          </div>
          <div class="py-2">
            <p class="text-lg text-gray-600">Process</p>
            <p class="text-lg text-gray-800">Note</p>
          </div>
          <div class="py-2">
            <p class="text-lg text-gray-600">Sub-process</p>
            <p class="text-lg text-gray-800">Binder jetting - BJ</p>
          </div>
          <div class="py-2">
            <p class="text-lg text-gray-600">Producer</p>
            <p class="text-lg text-gray-800">Google Inc.</p>
          </div>
        </div>
        <div class="w-2/3">
          <div class="flex">
            <h2 class="text-2xl font-bold text-gray-800">Description: </h2>
            <font-awesome-icon class=" text-gray-800 mt-0 ml-4 text-4xl" :icon="['fas', 'edit']" />
          </div>
          <p class="text-lg text-gray-800 py-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
          </p>
          <div class="flex">
            <div class="">
              <p class="text-lg text-gray-600">Year produced</p>
              <p class="text-lg text-gray-800">2020</p>
            </div>
            <div class="">
              <p class="text-lg text-gray-600">Accuracy</p>
              <p class="text-lg text-gray-800">0.2<span class="text-sm">mm</span></p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </modal>
</template>
<script>
import Modal from "~/components/reusables/Modal.vue";
export default {
  components: {
    Modal,
  },
  data() {
    return {};
  },
  methods: {

  },
};

</script>
