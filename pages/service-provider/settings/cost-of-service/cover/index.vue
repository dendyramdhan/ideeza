<template>
  <div class="bg-white shadow-md p-5">
    <div class="form-field md:flex items-center">
      <div class="field-label md:w-1/3 font-semibold">Materials</div>
      <div class="field-input flex-grow">
        <input class="field h-10" :value="materials" @change="change_material" />
      </div>
    </div>
    <hr class="my-2" />
    <div class="form-field md:flex items-center">
      <div class="field-label md:w-1/3 font-semibold">Max Dimensions</div>
      <div class="flex-1 flex">
        <div class="field-input flex-grow mr-2">
          <input class="field h-10" :value="max_dimension1" @change="change_max_dimension1" />
        </div>
        <div class="field-input flex-grow mr-2">
          <input class="field h-10" :value="max_dimension2" @change="change_max_dimension2" />
        </div>
        <div class="field-input flex-grow mr-2">
          <input class="field h-10" :value="max_dimension3" @change="change_max_dimension3" />
        </div>
        <div class="field-input flex-grow mr-2">
          <input class="field h-10" :value="max_dimension4" @change="change_max_dimension4" />
        </div>
      </div>
    </div>
    <hr class="my-2" />
    <div class="form-field md:flex items-center">
      <div class="field-label md:w-1/3 font-semibold">Quantity Ability</div>
      <div class="flex-1 flex">
        <div class="field-input flex-grow mr-2">
          <input class="field h-10" :value="quantity_ability1" @change="change_quantity_ability1" />
        </div>
        <div class="field-input flex-grow mr-2">
          <input class="field h-10" :value="quantity_ability2" @change="change_quantity_ability2" />
        </div>
      </div>
    </div>
    <hr class="my-2" />
    <div class="form-field md:flex items-center">
      <div class="field-label md:w-1/3 font-semibold">Suitable for Prototyping</div>
      <div class="field-input mr-2">
        <toggle value="true" />
      </div>
    </div>
    <hr class="my-2" />
    <div class="form-field md:flex items-center">
      <div class="field-label md:w-1/3 font-semibold">Design file type</div>
      <div class="field-input flex-grow">
        <!-- <select class="field h-10 w-full"  v-model="preferredlanguage" >
                <option value="male">English</option>
        </select>-->
        <input class="field h-10" :value="design_type" @change="change_design_type" />
      </div>
    </div>
    <hr class="my-2" />
    <div class="form-field md:flex items-center">
      <div class="field-label md:w-1/3 font-semibold">Manufacturing time</div>
      <div class="field-input flex-grow">
        <input class="field h-10" :value="manufacturing_time" @change="change_manufacturing_time" />
      </div>
    </div>
    <hr class="my-2" />
    <div>
      <button
        class="bg-gray-200 rounded-full w-full py-3 border border-gray-500 text-gray-700 font-semibold"
        @click="save_update"
      >
        + Add(update) 
        <span class="text-xs font-normal">(NEED TO BE APPROVED BY OUR TECHNICIAN)</span>
      </button>
    </div>
    <!-- <span v-for="info in articleArray ">
            {{info}}
    </span>-->
    {{design_type}}
  </div>
</template>
<script>
import Toggle from "~/components/form/switch";
import apiService from "~/apiService/have_token.js";
export default {
  components: {
    Toggle
  },
  data: function() {
    return {
      geturl2: "/api/service_provider/setting/cost_of_service/update_cover",
      geturl: "/api/service_provider/setting/cost_of_service/get_cover",
      articleArray: [],
      randomNumber: {},
      design_type: null,
      manufacturing_time: null,
      materials: null,
      max_dimension1: null,
      max_dimension2: null,
      max_dimension3: null,
      max_dimension4: null,
      quantity_ability1: null,
      quantity_ability2: null,
      suitable_prototyping: null
    };
  },
  mounted() {
    let senddata = {
      method: "get",
      url: this.geturl,
      data: null
    };
    apiService(senddata, response => {
      console.log(response.data);
      this.randomNumber = response.data;
      this.articleArray = Object.values(response.data);

      this.design_type = this.articleArray[0].design_type;
      this.manufacturing_time = this.articleArray[0].manufacturing_time;
      this.materials = this.articleArray[0].materials;
      this.max_dimension1 = this.articleArray[0].max_dimension[0];
      this.max_dimension2 = this.articleArray[0].max_dimension[1];
      this.max_dimension3 = this.articleArray[0].max_dimension[2];
      this.max_dimension4 = this.articleArray[0].max_dimension[3];
      this.quantity_ability1 = this.articleArray[0].quantity_ability[0];
      this.quantity_ability2 = this.articleArray[0].quantity_ability[1];
      this.suitable_prototyping = this.articleArray[0].suitable_prototyping;
    });
  },
  methods: {
    save_update() {
    //   alert(
    //     this.materials +
    //       "_" +
    //       this.design_type +
    //       "_" +
    //       this.manufacturing_time +
    //       "_" +
    //       this.max_dimension1 +
    //       "_" +
    //       this.max_dimension2 +
    //       "_" +
    //       this.max_dimension3 +
    //       "_" +
    //       this.max_dimension4 +
    //       "_" +
    //       this.quantity_ability1 +
    //       "_" +
    //       this.quantity_ability2 +
    //       "_" +
    //       this.suitable_prototyping
    //   );

      const formData = new FormData();
      formData.set("materials", this.materials);
      formData.set("max_dimension", this.max_dimension1);
      formData.set("max_dimension", this.max_dimension2);
      formData.set("max_dimension", this.max_dimension3);
      formData.set("max_dimension", this.max_dimension4);
      formData.set("quantity_ability", this.quantity_ability1);
      formData.set("quantity_ability", this.quantity_ability2);
      formData.set("suitable_prototyping", this.suitable_prototyping);
      formData.set("design_type", this.design_type);
      formData.set("manufacturing_time", this.manufacturing_time);
      let sendData2 = {
        method: "post",
        url: this.geturl2,
        data: formData
      };

      apiService(sendData2, response => {
        console.log(response);
      });
    },
    change_material(evt) {
      this.materials = evt.target.value;
    },
    change_max_dimension1(evt) {
      this.max_dimension1 = evt.target.value;
    },
    change_max_dimension2(evt) {
      this.max_dimension2 = evt.target.value;
    },
    change_max_dimension3(evt) {
      this.max_dimension3 = evt.target.value;
    },
    change_max_dimension4(evt) {
      this.max_dimension4 = evt.target.value;
    },
    change_quantity_ability1(evt) {
      this.quantity_ability1 = evt.target.value;
    },
    change_quantity_ability2(evt) {
      this.quantity_ability2 = evt.target.value;
    },
    change_design_type(evt) {
      this.design_type = evt.target.value;
    },
    change_manufacturing_time(evt) {
      this.manufacturing_time = evt.target.value;
    }
  }
};
</script>
<style scoped>
select.field {
  min-width: 100%;
  max-width: 100%;
}
</style>