<template>
  <div class="p-3 mt-5">
    <div class="font-semibold text-2xl mb-2">TQFN Solder Filters</div>
    <p class="mb-2">
      Solder filter refers to the shape of the solder joint between the
      component lead and the PCB pad. Adequate fillet is required to ensure both
      the strength and reliability of the solder joints. A solder joint may be
      described by three fillets: toe, heel, and side. Minimum values for solder
      fillets at the toe, heel and side of the component lead have been
      determined by IPC, based on industry empirical knowledge and reliability
      testing. These values are displayed below; however they may be adjusted to
      suit specific conditions.
    </p>

    <div class="flex mb-2">
      <div class="w-48">Use default values</div>
      <div class="flex-1">
        <input
          type="checkbox"
          :value="part.solder_filters.isDefault"
          name="isDefault"
          @input="change"
        />
      </div>
    </div>

    <div class="flex mb-2">
      <div class="w-48">Board Density Level</div>
      <div class="flex-1">
        <select
          :value="part.solder_filters.board_density_level"
          class="w-full"
          name="board_density_level"
          @input="change"
        >
          <option :value="null">Select board density level</option>
          <option :value="option.value" :key="option.key" v-for="option in brdOpts">
              {{option.label}}
          </option>
        </select>
      </div>
    </div>

    <div class="flex mb-2">
        <div class="w-48">Toe Filter (JT Min)</div>
        <div class="flex-1">
        <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.solder_filters.toe_filter" @input="change" name="toe_filter">
        </div>
    </div>

    <div class="flex mb-2">
        <div class="w-48">Heel Filter (JH1 Min)</div>
        <div class="flex-1">
        <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.solder_filters.heel_filter" @input="change" name="heel_filter">
        </div>
    </div>

    <div class="flex mb-2">
        <div class="w-48">Side Filter (JS1 Min)</div>
        <div class="flex-1">
        <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.solder_filters.side_filter" @input="change" name="side_filter">
        </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
let vm;

export default {
  name: "CreateNewPart",
  select: "4",
  data() {
    return {
      checked: false,
      brdOpts: [
        {
          label: "Level B-low Density",
          value: "L"
        }
      ]
    };
  },
  render() {
      this.$emit('can-continue', {value: true});
    },
  mounted() {
    this.$emit("can-continue", { value: true });
  },
  computed: {
    ...mapState({
      part: state => state.part.selected_part
    })
  },
  methods: {
    change(val) {
      this.$store.commit("part/updateField", {
        field: "solder_filters",
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
