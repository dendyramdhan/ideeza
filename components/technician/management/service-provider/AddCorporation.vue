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
      <div class="w-4/12 p-4 m-auto bg-white border border-gray-600 shadow fixed z-50 top-0 left-0 right-0 m-auto mt-32">
        <h2 class="text-indigo-800 font-bold text-2xl pb-5 mt-8">Add corporation</h2>
        <div class="mb-4">
          <input class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Corporation name">
        </div>
        <div class="upload-btn-wrapper mb-4">
          <label class="text-gray-800">Add image</label>
          <button class="block mt-4 w-full bg-white text-gray-500 border border-gray-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-left">Choose from computer</button>
          <input type="file" name="myfile" />
        </div>
        <p class="text-center py-2">OR</p>
        <div class="mb-4">
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Insert URL">
        </div>
        <div class="">
          <button class="bg-ideeza text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-white" type="button">
            Add corporation
          </button>
          <button @click="$emit('close')" class="bg-white text-gray-700 border border-gray-400 ml-4 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Cancel
          </button>
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
