<template>
    <div class="mt-10 p-3">
        <div class="font-semibold text-2xl mb-2">TQFN  Component Tolerances</div>
        <p class="mb-2">Component manufactures usually specify the minimum and maximum value for each package dimension. Component tolerance ranges are derived by substracting the minimum value from the maximum. These ranges may be adjusted based upon experience from suppliers.</p>
        <div class="flex mb-2">
            <div class="w-48">Use calculated component tolerance</div>
            <div class="flex-1">
                <input
                type="checkbox"
                :value="part.component_tolerances.isCalculated"
                name="isCalculated"
                @input="change"
                />
            </div>
        </div>
        <h4 class="mb-3 font-bold text-base text-center">
            Tolerance on the overall width of the component including leads
        </h4>
        
        <div class="flex mb-2">
            <div class="w-48">Side D</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.component_tolerances.d_overall_width" @input="change" name="d_overall_width">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Side E</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.component_tolerances.e_overall_width" @input="change" name="e_overall_width">
            </div>
        </div>

        <h4 class="mb-3 font-bold text-base text-center">
            Tolerance on the inner distance between the heels of the opposing rows of leads
        </h4>

        <div class="flex mb-2">
            <div class="w-48">Side D</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.component_tolerances.d_heel_distance" @input="change" name="d_heel_distance">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Side E</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.component_tolerances.e_heel_distance" @input="change" name="e_heel_distance">
            </div>
        </div>

        <h4 class="mb-3 font-bold text-base text-center">
            Tolerance on the width of the component leads
        </h4>

        <div class="flex mb-2">
            <div class="w-48">&nbsp;</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.component_tolerances.lead_width" @input="change" name="lead_width">
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
        field: "component_tolerances",
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
