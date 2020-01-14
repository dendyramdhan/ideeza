<template>
  <modal wide  @close="$emit('close')">
    <template slot="header">
    </template>
    <template slot="body">
      <div class="flex justify-between">
          <div class="creative border-r flex-1 py-2">
              <div class="p-3 text-left font-bold text-2xl">
                <div>I’am</div>
                <div>Creative</div>
              </div>
              <img @click="$emit('signup')" class="mx-auto" width="150px" src="~/static/images/creative.png">
          </div>
          <div class="manufacturer flex-1 pl-2 py-2">
              <div class="p-3 text-left font-bold text-2xl">
                <div>I’am</div>
                <div>Manufacturer</div>
              </div>
              <img @click="$emit('signup')" class="mx-auto" width="150px" src="~/static/images/factory.png">
          </div>
      </div>
    </template>
  </modal>
</template>
<script>
import Modal from "~/components/reusables/Modal.vue";

export default {
  components: {
    Modal
  },
  data() {
    return {
    };
  },
  computed: {},

  methods: {
    
  }
}
</script>