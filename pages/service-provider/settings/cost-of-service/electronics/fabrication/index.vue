<template>
<div class="">
      <div class="p-5 mt-2 bg-white shadow-md">

      <!--Form Fields-->
      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >Board Type</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black" v-model="board_type" @change="change_board_type">
            <option>
              Single Pieces
            </option>
             <option>
              Pane by Customer
            </option>
             <option>
              Pane by PCBway
            </option>
          </select>
        </div>
      </div>
      <hr class="my-2">

      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >Different Design in Panel</div>
        <div class="field-input flex-grow mb-2">
          <input class="field h-10"  :value="different_design_in_panel" @change="change_different_design_in_panel" />
        </div>
      </div>
      <hr class="my-2">
      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold">Size(single)</div>
        <div class="field-input md:flex flex-1">
          <input class="border border-black mr-2 h-10 flex-1 mb-2 md:mb-0" v-model="size1"     @change="change_size1"/>
          <input class="border border-black mr-2 h-10 flex-1 mb-2 md:mb-0" v-model="size2"   @change="change_size2"/>
          <div class="flex-1">
          <select class="w-full border border-black flex-1 h-10" v-model="size3" @change="change_size3">
            <option>unit</option>
          </select>
          </div>
        </div>
      </div>
       <hr class="my-2">

      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold">Quantity</div>
        <div class="field-input flex-grow mb-2">
          <input class="field h-10" placeholder="pcs" :value="quantity" @change="change_quantity"/>
        </div>
      </div>
      <hr class="my-2">

      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold">Layers</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full" v-model="layers" @change="change_layers">
            <option>1 Layer</option>
            <option>2 Layers</option>
            <option>4 Layers</option>
            <option>6 Layers</option>
            <option>8 Layers</option>
            <option>10 Layers</option>
            <option>12 Layers</option>
            <option>14 Layers</option>
          </select>
        </div>
      </div>
      <hr class="my-2">

      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >Material</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full" v-model="material" @change="change_material">
            <option>
              Normal FR-4 Board
            </option>
            <option>Aluminum Board</option>
            <option>Rigid-flexBox</option>
            <option>Rogers</option>
            <option>Copper Base</option>
          </select>
        </div>
      </div>
      <hr class="my-2">
      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >FR4-TG</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full" v-model="fr4_tg" @change="change_fr4_tg">
            <option>TG 130-140</option>
            <option>TG 150-160</option>
            <option>TG 170-180</option>
          </select>
        </div>
      </div>
      <hr class="my-2">

      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold">Thickness</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full" v-model="thickness" @change="change_thickness">
            <option>0.2</option>
            <option>0.4</option>
            <option>0.6</option>
            <option>0.8</option>
            <option>1.0</option>
            <option>1.2</option>
            <option>1.6</option>
            <option>2.0</option>
            <option>2.4</option>
            <option>2.6</option>
            <option>2.8</option>
            <option>3.0</option>
            <option>3.2</option>
            <option> >= 1.7-6.0</option>
          </select>
        </div>
      </div>
      <hr class="my-2">

      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold">Min Track/Spacing</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full" v-model="min_track" @change="change_min_track">
            <option>3/3mil</option>
            <option>4/4mil</option>
            <option>5/5mil</option>
            <option>6/6mil</option>
            <option>8/8mil</option>
          </select>
        </div>
      </div>
      <hr class="my-2">

      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold">Min Hole Size</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full" v-model="min_hole_size" @change="change_min_hole_size">
            <option>0.15mm</option>
            <option>0.2mm</option>
            <option>0.25mm</option>
            <option>0.3mm</option>
            <option>0.8mm</option>
            <option>1.0mm</option>
            <option>No Drill</option>
          </select>
        </div>
      </div>
      <hr class="my-2">

       <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >Solder Mask</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full" v-model="solder_mask" @change="change_solder_mask">
            <option>Red</option>
            <option>green</option>
            <option>yellow</option>
            <option>blue</option>
            <option>white</option>
            <option>black</option>
          </select>
        </div>
      </div>
       <hr class="my-2">

       <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >silkscreen</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full" v-model="silkscreen" @change="change_silkscreen">
            <option>White</option>
            <option>Black</option>
            <option>None</option>
          </select>
        </div>
      </div>
       <hr class="my-2">

       <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >Gold Fingers</div>
        <div class="field-input flex-grow">
          <input type="checkbox">
        </div>
      </div>
       <hr class="my-2">
       <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >Surface finish</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full" v-model="surface_finish" @change="change_surface_finish">
            <option>
              HASL with lead
            </option>
            <option>
              HASL lead free
            </option>

            <option>
              Immersion gold(ENIG)
            </option>

            <option>
              OSP
            </option>

            <option>
              HArd Gold
            </option>

            <option>
              Immersion Silver
            </option>

            <option>
              ENEPIG
            </option>

            <option>
              None(Plain copper)
            </option>
          </select>
        </div>
      </div>
     <hr class="my-2">
      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >Via Process</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full" v-model="via_process" @change="change_via_process">
            <option>
              Tenting Vias
            </option>
            <option>
              Plugged vias
            </option>
            <option>
              Vias not covered
            </option>
          </select>
        </div>
      </div>
      <hr class="my-2">
       <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >Finished copper</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full" v-model="finished_copper" @change="change_finished_copper">
            <option>
              1 oz cu
            </option>
            <option>
              2 oz cu
            </option>
            <option>
              3 oz cu
            </option>
            <option>
              4 oz cu
            </option>
            <option>
              5 oz cu
            </option>
            <option>
              6 oz cu
            </option>
            <option>
              7 oz cu
            </option>
            <option>
              8 oz cu
            </option>
            <option>
              9 oz cu
            </option>
            <option>
              10 oz cu
            </option>
            <option>
              11 oz cu
            </option>
            <option>
              12 oz cu
            </option>
            <option>
              13 oz cu
            </option>
          </select>
        </div>
      </div>

      <hr class="my-2">
      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold">Extra pcb product number</div>
        <div class="field-input flex-grow">
          <input type="checkbox">  Not to add extra pcb product number on board (extra+$3)
        </div>
      </div>
    </div>
    <div class="mt-10">
        <h1 class="font-semibold">Additional Board Specification</h1>
      </div>
      <div class="flex my-2">
        <h1 class="text-ideeza mr-8 font-semibold">
          Aluminum board
        </h1>
        <h1 class="font-semibold mr-8 text-ideeza-gray-700">
          Normal FR Board
        </h1>
        <h1 class="font-semibold mr-8 text-ideeza-gray-700">
          Rigid-Flex-Board
        </h1>
        <h1 class="font-semibold text-ideeza-gray-700">
          Card Board
        </h1>
      </div>
      <hr class="my-2">
      <div class="p-5 bg-white shadow-md">

      <!--Form Fields-->
      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >Max Layers</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full" v-model="add_max_layers" @change="change_add_max_layers">
            <option>
              1 Layer
            </option>
            <option>
              2 Layer
            </option>
            <option>
              4 Layer
            </option>
            <option>
              6 Layer
            </option>
            <option>
              8 Layer
            </option>
            <option>
              10 Layer
            </option>
            <option>
              12 Layer
            </option>
            <option>
              14 Layer
            </option>
          </select>
        </div>
      </div>


       <hr class="my-2">

      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >Copper layers</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full" v-model="add_copper_layers" @change="change_add_copper_layers">
            <option>
              1 oz Cu
            </option>
            <option>
              2 oz Cu
            </option>
            <option>
              3 oz Cu
            </option>
            <option>
              4 oz Cu
            </option>
            <option>
              5 oz Cu
            </option>
            <option>
              6 oz Cu
            </option>
            <option>
              7 oz Cu
            </option>
            <option>
              8 oz Cu
            </option>
            <option>
              9 oz Cu
            </option>
            <option>
              10 oz Cu
            </option>
            <option>
              11 oz Cu
            </option>
            <option>
              12 oz Cu
            </option>
            <option>
              13 oz Cu
            </option>
          </select>
        </div>
      </div>
      <hr class="my-2">
       <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >Solder Mask</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full" v-model="add_solder_mask" @change="change_add_solder_mask">
            <option>Red</option>
            <option>green</option>
            <option>yellow</option>
            <option>blue</option>
            <option>white</option>
            <option>black</option>
          </select>
        </div>
      </div>
       <hr class="my-2">
       <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >FR4-TG</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full" v-model="add_fr4_tg" @change="change_add_fr4_tg">
            <option>
              TG 130-140
              </option>
              <option>
              TG 140-150
              </option>
              <option>
              TG 150-160
              </option>
          </select>
        </div>
      </div>
 <hr class="my-2">

      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >Min Thickness</div>
        <div class="field-input flex-grow mb-2">
          <select class="h-10 border border-black w-full" v-model="add_min_thickness" @change="change_add_min_thickness">
             <option>0.2</option>
            <option>0.4</option>
            <option>0.6</option>
            <option>0.8</option>
            <option>1.0</option>
            <option>1.2</option>
            <option>1.4</option>
            <option>1.6</option>
            <option>1.8</option>
            <option>2.0</option>
            <option>2.1</option>
            <option>2.2</option>
            <option>2.4</option>
            <option>2.6</option>
            <option>2.8</option>
            <option>3.0</option>
            <option>3.2</option>
          </select>
        </div>
      </div>
  </div>
  <div class="text-center mt-5">
    <button class="bg-ideeza text-white text-base px-10 py-2 rounded-full" @click="saveupdate">Save</button>
  </div>
  <!-- {{articleArray}} -->
</div>
</template>
<script>
import apiService from "~/apiService/have_token.js";
export default {
  layout:'user',
  data: function() {
    return {
      geturl2: "/api/service_provider/setting/cost_of_service/electronics/update_fabrication",
      geturl: "/api/service_provider/setting/cost_of_service/electronics/get_fabrication",
      articleArray: [],
      randomNumber: {},
      board_type: null,
      different_design_in_panel: null,
      size1: null,
      size2: null,
      size3: null,
      quantity: null,
      layers: null,
      material: null,
      fr4_tg: null,
      thickness: null,
      min_track: null,
      min_hole_size: null,
      solder_mask: null,
      silkscreen: null,
      gold_fingers: null,
      surface_finish: null,
      via_process: null,
      finished_copper: null,
      extra_product_number: null,
      add_max_layers: null,
      add_copper_layers: null,
      add_solder_mask: null,
      add_fr4_tg: null,
      add_min_thickness: null,
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

      this.board_type = this.articleArray[0].board_type;
      this.different_design_in_panel = this.articleArray[0].different_design_in_panel;
      this.size1 = this.articleArray[0].size[0];
      this.size2 = this.articleArray[0].size[1];
      this.size3 = this.articleArray[0].size[2];
      this.quantity = this.articleArray[0].quantity;
      this.layers = this.articleArray[0].layers;
      this.material = this.articleArray[0].material;
      this.fr4_tg = this.articleArray[0].fr4_tg;
      this.thickness = this.articleArray[0].thickness;
      this.min_track = this.articleArray[0].min_track;
      this.min_hole_size = this.articleArray[0].min_hole_size;
      this.solder_mask = this.articleArray[0].solder_mask;
      this.silkscreen = this.articleArray[0].silkscreen;
      this.gold_fingers = this.articleArray[0].gold_fingers;
      this.surface_finish = this.articleArray[0].surface_finish;
      this.via_process = this.articleArray[0].via_process;
      this.finished_copper = this.articleArray[0].finished_copper;
      this.extra_product_number = this.articleArray[0].extra_product_number;
      this.add_max_layers = this.articleArray[0].add_max_layers;
      this.add_copper_layers = this.articleArray[0].add_copper_layers;
      this.add_solder_mask = this.articleArray[0].add_solder_mask;
      this.add_fr4_tg = this.articleArray[0].add_fr4_tg;
      this.add_min_thickness = this.articleArray[0].add_min_thickness;
    });
  },
  methods:{
    change_board_type(evt){
      this.board_type = evt.target.value
    },
    change_different_design_in_panel(evt){
      this.different_design_in_panel = evt.target.value
    },
    change_size1(evt){
      this.size1 = evt.target.value
    },
    change_size2(evt){
      this.size2 = evt.target.value
    },
    change_size3(evt){
      this.size3 = evt.target.value
    },
    change_quantity(evt){
      this.quantity = evt.target.value
    },
    change_layers(evt){
      this.layers = evt.target.value
    },
    change_material(evt){
      this.material = evt.target.value
    },
    change_fr4_tg(evt){
      this.fr4_tg = evt.target.value
    },
    change_thickness(evt){
      this.thickness = evt.target.value
    },
    change_min_track(evt){
      this.min_track = evt.target.value
    },
    change_min_hole_size(evt){
      this.min_hole_size = evt.target.value
    },
    change_solder_mask(evt){
      this.solder_mask = evt.target.value
    },
    change_silkscreen(evt){
      this.silkscreen = evt.target.value
    },
    change_surface_finish(evt){
      this.surface_finish = evt.target.value
    },
    change_via_process(evt){
      this.via_process = evt.target.value
    },
    change_finished_copper(evt){
      this.finished_copper = evt.target.value
    },
    change_add_max_layers(evt){
      this.add_max_layers = evt.target.value
    },
    change_add_copper_layers(evt){
      this.add_copper_layers = evt.target.value
    },
    change_add_solder_mask(evt){
      this.add_solder_mask = evt.target.value
    },
    change_add_fr4_tg(evt){
      this.add_fr4_tg = evt.target.value
    },
    change_add_min_thickness(evt){
      this.add_min_thickness = evt.target.value
    },
    saveupdate(){

      const formData = new FormData();
      formData.set("board_type", this.board_type);
      formData.set("different_design_in_panel", this.different_design_in_panel);
      formData.append("size", this.size1);
      formData.append("size", this.size2);
      formData.append("size", this.size3);
      formData.set("quantity", this.quantity);
      formData.set("layers", this.layers);
      formData.set("material", this.material);
      formData.set("fr4_tg", this.fr4_tg);
      formData.set("thickness", this.thickness);
      formData.set("min_track", this.min_track);
      formData.set("min_hole_size", this.min_hole_size);
      formData.set("solder_mask", this.solder_mask);
      formData.set("gold_fingers", this.gold_fingers);
      formData.set("surface_finish", this.surface_finish);
      formData.set("via_process", this.via_process);
      formData.set("finished_copper", this.finished_copper);
      formData.set("extra_product_number", this.extra_product_number);
      formData.set("add_max_layers", this.add_max_layers);
      formData.set("add_copper_layers", this.add_copper_layers);
      formData.set("add_solder_mask", this.add_solder_mask);
      formData.set("add_fr4_tg", this.add_fr4_tg);
      formData.set("add_min_thickness", this.add_min_thickness);
      formData.append("silkscreen", this.silkscreen);
      let sendData2 = {
        method: "post",
        url: this.geturl2,
        data: formData
      };

      apiService(sendData2, response => {
        console.log(response);
        alert("Successful!!!")

      });

    },
  },
}
</script>
<style scoped>
.field-input select {
  max-width: 100%;
  min-width: 100%;
}
</style>
