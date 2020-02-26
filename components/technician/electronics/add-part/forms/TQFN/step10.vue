<template>
    <div class="mt-10 p-3">
        <div class="font-semibold text-2xl mb-2">TQFN Courtyard, Assembly and Component Body Infomation'" :order="10" subtitle="The mechanical dimensions can now be inferred from the package dimensions. You can review and moidy them here.</div>
        <p class="mb-3">Choose here wheather to add Courtyard and Assembly information to the component drawing. For each of these, you can use either the IPC calculated dimensions values, or enter the values manually. You can also choose the mechanical layer on which the drawing will be added, and the used line thickness. Finally you can decide whether or not to add a component body, which contains the volumetric information corresponding to the package dimensions.</p>

        <div class="flex mb-2">
            <div class="w-48">Add Courtyard Information</div>
            <div class="flex-1">
                <input
                type="checkbox"
                :value="part.courtyard.addCourtYardInfo"
                name="addCourtYardInfo"
                @input="change"
                />
            </div>
        </div>
        
        <div class="flex mb-2">
            <div class="w-48">V1</div>
            <div class="flex-1">
                <input
                type="checkbox"
                :value="part.courtyard.courtV1"
                name="courtV1"
                @input="change"
                />
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Line Width</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.courtyard.courtV1LineWidth" @input="change" name="courtV1LineWidth">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">V2</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.courtyard.courtV2" @input="change" name="courtV2" placeholder="15.7mm">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Layer</div>
            <div class="flex-1">
                <select
                :value="part.courtyard.courtV2layer"
                class="w-full"
                name="board_density_level"
                @input="change"
                >
                <option :value="null">Select Layer</option>
                <option :value="option.value" :key="option.key" v-for="option in mechanOpts">
                    {{option.label}}
                </option>
                </select>
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Add Assembly Information</div>
            <div class="flex-1">
                <input
                type="checkbox"
                :value="part.courtyard.addAssemblyInfo"
                name="addAssemblyInfo"
                @input="change"
                />
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Use calculated values</div>
            <div class="flex-1">
                <input
                type="checkbox"
                :value="part.courtyard.isAssemblyCalculated"
                name="isAssemblyCalculated"
                @input="change"
                />
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">A</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.courtyard.assemblyA" @input="change" name="assemblyA" placeholder="15.7mm">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Line Width</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.courtyard.assemblyALineWidth" @input="change" name="assemblyALineWidth" placeholder="15.7mm">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">B</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.courtyard.assemblyB" @input="change" name="assemblyB" placeholder="15.7mm">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Layer</div>
            <div class="flex-1">
                <select
                :value="part.courtyard.assemblyBlayer"
                class="w-full"
                name="board_density_level"
                @input="change"
                >
                <option :value="null">Select Layer</option>
                <option :value="option.value" :key="option.key" v-for="option in mechanOpts">
                    {{option.label}}
                </option>
                </select>
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Add Component Body Information</div>
            <div class="flex-1">
                <input
                type="checkbox"
                :value="part.courtyard.addCompBodyInfo"
                name="addCompBodyInfo"
                @input="change"
                />
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Use calculated values</div>
            <div class="flex-1">
                <input
                type="checkbox"
                :value="part.courtyard.isCompBodyCalculated"
                name="isCompBodyCalculated"
                @input="change"
                />
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Width</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.courtyard.addCompBodyInfoWidth" @input="change" name="addCompBodyInfoWidth" placeholder="15.7mm">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Length</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.courtyard.addCompBodyInfoLength" @input="change" name="addCompBodyInfoLength" placeholder="15.7mm">
            </div>
        </div>

        <div class="flex mb-2">
            <div class="w-48">Layer</div>
            <div class="flex-1">
            <input type="number" class="px-2 py-1 border border-gray-400 w-full" :value="part.courtyard.addCompBodyInfoLayer" @input="change" name="addCompBodyInfoLayer" placeholder="15.7mm">
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
  data() {
    return {
        mechanOpts:
        [
            {
                label: 'Mechanicak Layer 15',
                value: 'M15'
            }
        ],
    }
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
        field: "courtyard",
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
