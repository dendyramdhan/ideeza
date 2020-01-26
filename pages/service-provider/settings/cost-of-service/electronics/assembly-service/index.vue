<template>
  <div>
    <div class="p-5 mt-2 bg-white shadow-md">
      <div class="md:flex items-center text-gray-600">
        <div class="md:w-1/4 mb-2 md:mb-0 font-semibold">Price for Quantity</div>
        <div class="flex-1">
          <div class="flex items-center text-ideeza-gray">
            <div class="flex-1 text-center text-lg mr-2">1</div>
            <div class="flex-1 text-center text-lg mr-2">100</div>
            <div class="flex-1">
              <div class="field-input flex-grow">
                <input class="field h-10 px-4 text-sm"   :value="price_for_quality" @change="change_price_for_quality" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-2" />
      <div class="md:flex items-center text-gray-600">
        <div class="md:w-1/4 text-gray-700 mb-2 md:mb-0 font-semibold">Smt Parts</div>
        <div class="flex-1">
          <div class="flex items-center text-ideeza-gray">
            <div class="flex-1 mr-2">
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" placeholder="Amount" :value="smt_part1" @change="change_smt_part1"/>
              </div>
            </div>
            <div class="flex-1 mr-2">
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" placeholder="Amount"  :value="smt_part2" @change="change_smt_part2"  />
              </div>
            </div>
            <div class="flex-1">
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" placeholder="Amount"  :value="smt_part3" @change="change_smt_part3"   />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-2" />
      <div class="md:flex items-center text-gray-600">
        <div class="md:w-1/4 text-gray-700 mb-2 md:mb-0 font-semibold">Through hole</div>
        <div class="flex-1">
          <div class="flex items-center text-ideeza-gray">
            <div class="flex-1 mr-2">
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" placeholder="Amount"   :value="through_hole1" @change="change_through_hole1"  />
              </div>
            </div>
            <div class="flex-1 mr-2">
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" placeholder="Amount"  :value="through_hole2" @change="change_through_hole2"  />
              </div>
            </div>
            <div class="flex-1">
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" placeholder="Amount"  :value="through_hole3" @change="change_through_hole3"  />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-2" />
      <div class="md:flex items-center text-gray-600">
        <div class="md:w-1/4 text-gray-700 mb-2 md:mb-0 font-semibold">Unique</div>
        <div class="flex-1">
          <div class="flex items-center text-ideeza-gray">
            <div class="flex-1 mr-2">
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" placeholder="Amount"  :value="unique1" @change="change_unique1"  />
              </div>
            </div>
            <div class="flex-1 mr-2">
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" placeholder="Amount" :value="unique2" @change="change_unique2"   />
              </div>
            </div>
            <div class="flex-1">
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" placeholder="Amount" :value="unique3" @change="change_unique3"   />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-2" />
      <div class="md:flex items-center text-gray-600">
        <div class="md:w-1/4 text-gray-700 mb-2 md:mb-0 font-semibold">Special Request</div>
        <div class="field-input flex-grow flex-1">
          <input
            class="field h-10 px-2 text-sm"
            placeholder="Fill in the detailed technical info about the PCB assembly"
             :value="special_request" @change="change_special_request"  
          />
        </div>
      </div>
    </div>
    <div class="text-center mt-5">
      <button class="bg-ideeza text-white text-base px-10 py-2 rounded-full" @click="saveupdate">Save</button>
    </div>
  </div>
</template>
<script>
import apiService from "~/apiService/have_token.js";
export default {
  data() {
    return {
      geturl2:
        "/api/service_provider/setting/cost_of_service/electronics/update_assembly",
      geturl:
        "/api/service_provider/setting/cost_of_service/electronics/get_assembly",
      articleArray: [],
      randomNumber: {},
      price_for_quality: null,
      smt_part1: null,
      smt_part2: null,
      smt_part3: null,
      through_hole1: null,
      through_hole2: null,
      through_hole3: null,
      unique1: null,
      unique2: null,
      unique3: null,
      special_request: null
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
        this.price_for_quality=this.articleArray[0].price_for_quality;
        this.smt_part1=this.articleArray[0].smt_part[0];
        this.smt_part2=this.articleArray[0].smt_part[1];
        this.smt_part3=this.articleArray[0].smt_part[2];
        this.through_hole1=this.articleArray[0].through_hole[0];
        this.through_hole2=this.articleArray[0].through_hole[1];
        this.through_hole3=this.articleArray[0].through_hole[2];
        this.unique1=this.articleArray[0].unique[0];
        this.unique2=this.articleArray[0].unique[1];
        this.unique3=this.articleArray[0].unique[2];
        this.special_request=this.articleArray[0].special_request;
    })
  
  },
  methods:{
    change_price_for_quality(evt){
      this.price_for_quality = evt.target.value
    },
    change_smt_part1(evt){
      this.smt_part1 = evt.target.value
    },
    change_smt_part2(evt){
      this.smt_part2 = evt.target.value
    },
    change_smt_part3(evt){
      this.smt_part3 = evt.target.value
    },
    change_through_hole1(evt){
      this.through_hole1 = evt.target.value
    },
    change_through_hole2(evt){
      this.through_hole2 = evt.target.value
    },
    change_through_hole3(evt){
      this.through_hole3 = evt.target.value
    },
    change_unique1(evt){
      this.unique1 = evt.target.value
    },
    change_unique2(evt){
      this.unique2 = evt.target.value
    },
    change_unique3(evt){
      this.unique3 = evt.target.value
    },
    change_special_request(evt){
      this.special_request = evt.target.value
    },
    saveupdate(){
      const formData = new FormData();
      formData.set("price_for_quality", this.price_for_quality);
      formData.append("smt_part", this.smt_part1);
      formData.append("smt_part", this.smt_part2);
      formData.append("smt_part", this.smt_part3);
      formData.append("through_hole", this.through_hole1);
      formData.append("through_hole", this.through_hole2);
      formData.append("through_hole", this.through_hole3);
      formData.append("unique", this.unique1);
      formData.append("unique", this.unique2);
      formData.append("unique", this.unique3);
      formData.set("special_request", this.special_request);
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

};
</script>
