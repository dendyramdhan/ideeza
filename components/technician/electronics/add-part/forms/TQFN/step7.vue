<template>
    <div class="mt-10 p-3">
        <div class="font-semibold text-2xl mb-2">TQFN  IPC Tolerances</div>
        <p class="mb-2">IPC specifies certain tolerances for a number of standarized surface-mount package types. These tolerances are assumed by this wizard in order to calcuate a corresponding PCB footprint.</p>

        <p class="mb-2">You can modify here the tolerances related to fabrication and placement. Such modification may result in the creation of non IPC complaint PCB footprints.</p>

        <div class="flex mb-2">
            <div class="w-48">Use default values</div>
                <div class="flex-1">
                    <input
                    type="checkbox"
                    :value="part.IPC_tolerances.isDefault"
                    name="isDefault"
                    @input="change"
                    />
            </div>
        </div>

        <p class="mb-2">
            This alloance may be adjusted according to the accuracy of the PCB febricator to reproduce the PCB footprint dimensions on the printed board.
        </p>

        <div class="flex mb-2">
            <div class="w-48">&nbsp;</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.IPC_tolerances.fabrication" @input="change" name="fabrication">
            </div>
        </div>

        <p class="mb-2">Placement Tolerance Assumption</p>

        <div class="flex mb-2">
            <div class="flex-1">This alloance may be adjusted according to the accuracy of the assembler to center the component on the PCB footprint.</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.IPC_tolerances.assembly" @input="change" name="assembly">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="flex-1">The Courtyard of a PCB footprint defines the area required for electrical and mechanical clearance of both the component and its footprint. The dimensions of the courtyard boundary are calculated by the addition of a courtyard excess to the maximum dimensions of the combined component and footprint. The calue of the coutyard excess differs according to the desity level of the printed circuit board.</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.IPC_tolerances.courtyard" @input="change" name="courtyard">
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
        field: "IPC_tolerances",
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
