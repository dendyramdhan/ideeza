<template>
    <div class="mt-10 p-3">
        <div class="font-semibold text-2xl mb-2">TQFN Footprint Description</div>
        <div class="flex mb-2">
            <div class="w-48">Use Suggested Values</div>
            <div class="flex-1">
                <input
                type="checkbox"
                :value="part.footprint_description.suggested"
                name="suggested"
                @input="change"
                />
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Name</div>
            <div class="flex-1">
            <input type="text" class="px-2 py-1 border border-gray-400 w-full" :value="part.footprint_description.suggestedName" @input="change" name="suggestedName">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Description</div>
            <div class="flex-1">
            <input type="text" class="px-2 py-1 border border-gray-400 w-full" :value="part.footprint_description.suggestedDesc" @input="change" name="suggestedDesc">
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
let vm;

export default {
  mounted() {
    this.$emit("can-continue", { value: true });
  },
  computed: {
    ...mapState({
      part: state => state.part.selected_part
    })
  },
  render() {
    this.$emit('can-continue', {value: true});
  },
  methods: {
    change(val) {
      this.$store.commit("part/updateField", {
        field: "footprint_description",
        key: val.target.name,
        value: val.target.value
      });
    }
  }
};
</script>
<style>
select.w-full {
  width: 100% !important;
  max-width: 100% !important;
  min-width: 100% !important;
}
</style>
