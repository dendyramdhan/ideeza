<template>
    <div class="mt-10 p-3">
        <div class="font-semibold text-2xl mb-2">TQFN Footprint Dimensions</div>
        <p class="mb-2">The footprint has 100 leads and a pitach (P) 0.65mm. You can modify here the calculated dimensions of the footprint.</p>
        <div class="flex mb-2">
            <div class="w-48">Use Calculated footprint values</div>
                <div class="flex-1">
                    <input
                    type="checkbox"
                    :value="part.footprint_dimension.isCalculated"
                    name="isCalculated"
                    @input="change"
                    />
            </div>
        </div>

        <p class="mb-2 font-bold">Pad Dimensions</p>

        <div class="flex mb-2">
            <div class="w-48">X</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.footprint_dimension.x" @input="change" name="x">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Y</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.footprint_dimension.y" @input="change" name="y">
            </div>
        </div>

        <p class="mb-2 font-bold">Pad Dimensions</p>

        <div class="flex mb-2">
            <div class="w-48">C1</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.footprint_dimension.c1" @input="change" name="c1">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">C2</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.footprint_dimension.c2" @input="change" name="c2">
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
        field: "footprint_dimension",
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
