<template>
    <div class="mt-10 p-3">
        <div class="font-semibold text-2xl mb-2">TQFN Skillscreen Dimensions</div>
        <p class="mb-2">The recommended skillscreen dimensions have been calculated based on the above selection of package and dimensions.On this page you can further refine the skillscreen aspect by defining the used line width and by modifying the calcuated skillscreen dimensions.</p>

        <div class="flex mb-2">
            <div class="w-48">Skillscreen Line Width</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.silkscreen.LineWidth" @input="change" name="LineWidth">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">X</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.silkscreen.x" @input="change" name="x">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Use calculated skillscreen dimensionslculated footprint values</div>
            <div class="flex-1">
                <input
                type="checkbox"
                :value="part.silkscreen.isCalculated"
                name="isCalculated"
                @input="change"
                />
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">R1</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.silkscreen.r1" @input="change" name="r1">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">R2</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.silkscreen.r2" @input="change" name="r2">
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
  render() {
    this.$emit('can-continue', {value: true});
  },
  computed: {
    ...mapState({
      part: state => state.part.selected_part
    })
  },
  methods: {
    change(val) {
      this.$store.commit("part/updateField", {
        field: "silkscreen",
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
