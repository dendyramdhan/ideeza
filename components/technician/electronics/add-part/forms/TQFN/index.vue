<template>
    <div v-if="loading==false" class="relative flex w-full">
        <div class="flex-1 w-1/2">
          <horizontal-stepper @stepper-finished	="$emit('next')" :keep-alive="false" :steps="steps" :top-buttons="false"></horizontal-stepper>
        </div>
        <div class="flex-1">
          <div>
            <div class="md:flex items-center mb-5 justify-center">
              <div class="view-button-container">
                <div @click="activeView = '2D';toggle2d=!toggle2d" :class="{'active': toggle2d}" class="view-style b-right">2D Preview</div>
                <div @click="activeView = '3D';toggle3d=!toggle3d" :class="{'active': toggle3d}" class="view-style b-left">3D Preview</div>
              </div>
            </div>
            <div v-if="loading==false">
            <no-ssr placeholder="Loading..." >
              <etp
                ref="engine"
                :initData = initData
                :defaultData="dataForm"
                :toggle3d="toggle3d"
                :toggle2d="toggle2d"
                :togglesc="togglesc"
                :togglechecker="togglechecker"
              />
            </no-ssr>
            </div>
          </div>
          <button class="bg-ideeza p-3" @click="save">save</button>
          {{url}}
        </div>
    </div>
</template>
<script>
import HorizontalStepper from 'vue-stepper';
import StepOne from './step1';
import StepTwo from './step2';
import StepThree from './step3';
import StepFour from './step4.vue';
import StepFive from './step5.vue';
import StepSix from './step6.vue';
import StepSeven from './step7.vue';
import StepEight from './step8.vue';
import StepNine from './step9.vue';
import StepTen from './step10.vue';
import StepEleven from './step11';
import { mapState } from 'vuex';
// import Engine from '@ideeza/vue3dengine'
import * as packages from '@ideeza/vue3dengine/src/engines/electronic_tech_part'
export default {
    components: {
        HorizontalStepper,
        // 'engine': Engine.etp
    },
    computed:{
        ...mapState({
            part: state => state.part.selected_part,
            packageSelected: state => state.part.packageSelected
        })
    },
    methods: {
      save() {
        this.$refs.engine.save().then(a => {
          a.forEach(blob => {
            var objectUrl = (window.webkitURL || window.URL).createObjectURL(blob)

            var link = window.document.createElement('a')
            link.href = objectUrl
            link.download = 'absd.glb';
            var click = document.createEvent('MouseEvents')
            click.initEvent('click', true, false)
            link.dispatchEvent(click)

            window.URL.revokeObjectURL(objectUrl)
          });
        })
      }
    },
    data() {
        return {
            url : null,
            activeView: '3D',
            loading: true,
            initData: null,   // name of one package - TQFN, FEMALEHEADER, R0805
            dataForm: null, // all the informations from form
            toggle3d: true,     // show 3d
            toggle2d: false,    // show 2d
            togglesc: false,    // show schematic
            togglechecker: false, // show position checker
            steps: [
                    {
                        icon: 'check_circle',
                        name: 'first',
                        title: 'TQFN Square  Package Overall Dimensions',
                        subtitle: null,
                        component: StepOne,
                        completed: true
 
                    },
                    {
                        icon: 'check_circle',
                        name: 'Second',
                        title: 'TQFN Package Pin Dimensions',
                        subtitle: null,
                        component: StepTwo,
                        completed: true
                    },
                    {
                        icon: 'check_circle',
                        name: 'Third',
                        title: 'TQFN Package Thermal Pad Dimensions',
                        subtitle: null,
                        component: StepThree,
                        completed: true
                    },
                    {
                        icon: 'check_circle',
                        name: 'Fourth',
                        title: 'TQFN Package Heel Spacing',
                        subtitle: null,
                        component: StepFour,
                        completed: true
                    },
                    {
                        icon: 'check_circle',
                        name: 'Fifth',
                        title: 'TQFN Solder Filters',
                        subtitle: null,
                        component: StepFive,
                        completed: true
                    },
                    {
                        icon: 'check_circle',
                        name: 'Sixth',
                        title: 'TQFN  Component Tolerances',
                        subtitle: null,
                        component: StepSix,
                        completed: true
                    },
                    {
                        icon: 'check_circle',
                        name: 'Seventh',
                        title: 'TQFN  Component Tolerances',
                        subtitle: null,
                        component: StepSeven,
                        completed: true
                    },
                    {
                        icon: 'check_circle',
                        name: 'Seventh',
                        title: 'TQFN  Component Tolerances',
                        subtitle: null,
                        component: StepEight,
                        completed: true
                    },
                    {
                        icon: 'check_circle',
                        name: 'Seventh',
                        title: 'TQFN  Component Tolerances',
                        subtitle: null,
                        component: StepNine,
                        completed: true
                    },
                    {
                        icon: 'check_circle',
                        name: 'Seventh',
                        title: 'TQFN  Component Tolerances',
                        subtitle: null,
                        component: StepTen,
                        completed: true
                    },
                    {
                        icon: 'check_circle',
                        name: 'Seventh',
                        title: 'TQFN  Component Tolerances',
                        subtitle: null,
                        component: StepEleven,
                        completed: true
                    }
            ],
        }
    },
    mounted() {
      this.loading = true
        if(this.packageSelected == false){
        this.$store.commit('part/updatePart',{
          hasValue: false,
          value: '',
          isClockwise: false,
          PinStartAt: 1,
          dimensions: {
            pinNumber: '32',
            d_min_lead_span: 0,
            d_max_lead_span: 7,
            e_min_lead_span: 0,
            e_max_lead_span: 7,
            min_standoff: '0.1',
            maximum_height: '0.8',
            pin_location: '0'
          },
          package_pin: {
            min_lead_width: '0',
            max_lead_width: '0.45', // 0.55
            min_lead_length: '0',
            max_lead_length: '1.17', // 1.27
            min_body_width: '14',
            max_body_width: '14',
            min_body_length: '20',
            max_body_length: '20',
            e_number_pins: '8',
            d_number_pins: '8',
            pitch: '0.8'
          },
          package_thermal_pad: {
            pin_location: true,
            e2_min_thermal_range: '',
            e2_max_thermal_range: '',
            d2_min_thermal_range: '',
            d2_max_thermal_range: ''
          },
          package_heel: {semin: '', semax: '', sdmin: '', sdmax: '', isCalculated: false},
          solder_filters: {toe_filter: '', side_filter: '', heel_filter: '', board_density_level: '', isDefault: false},
          component_tolerances: {d_overall_width: '', e_overall_width: '', d_heel_distance: '', e_heel_distance: '', lead_width: '', isCalculated: false},
          IPC_tolerances: {
            fabrication: '',
            assembly: '',
            courtyard: '',
            isDefault: false
          },
          footprint_dimension: {x: '', y: '', c1: '', c2: '', isCalculated: false},
          silkscreen: {
            isCalculated: true,
            LineWidth: '0.1',
            r1: '7',
            r2: '7'
          },
          courtyard: {
            isCourtyardCalculated: false,
            isAssemblyCalculated: false,
            isCompBodyCalculated: false,
            addCourtYardInfo: false,
            addAssemblyInfo: true,
            addCompBodyInfo: true,
            courtV1: '11.5',
            courtV1LineWidth: '0.5',
            courtV2: '11.5',
            courtV2layer: '1',
            assemblyA: '11.5',
            assemblyALineWidth: '0.5',
            assemblyB: '11.5',
            assemblyBlayer: '1',
            addCompWidth: '11.5',
            addCompLength: '0.5',
            addCompLayer: '12'
          },
          footprint_description: {
            suggested: false,
            suggestedName: '',
            suggestedDesc: ''
          }
        })
        // this.dataForm = packages[this.part.package+'data']
        this.initData = this.part.package
        this.dataForm = this.part
        this.$store.commit('part/packageSelected',true)
        }
        this.loading = false
    }
}
</script>
<style>
.stepper-box {
  margin: 44px 0;
}
.stepper-box .content{
  margin: 0 !important;
  height: 171px;
  overflow-y: auto !important;
}
.stepper-box .top{
  display: none !important;
}
.view-button-container{
  @apply flex justify-between rounded-full border border-solid border-gray-400 relative bg-gray-300;
  width: 300px;
  height: 25px;
}
  .view-style {
    @apply text-center px-12 h-full align-middle text-xs absolute cursor-pointer;
    line-height: 26px;
  }

.view-style:hover{
  @apply rounded-full z-40 bg-white;
}

  .view-style.active{
    @apply bg-ideeza-dark rounded-full text-white absolute z-50;
  }
  .b-right{
    @apply left-0;
  }

.b-left{
  @apply right-0;
}

</style>