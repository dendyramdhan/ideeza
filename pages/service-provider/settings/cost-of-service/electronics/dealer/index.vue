<template>
  <div>
    <div>
      <div class="hidden xl:flex justify-between">
        <div class="flex">
          <button class="bg-gray px-2 py-1 border border-gray mr-1 text-ideeza" @click="addfileld">+ Add new Part</button>
          <select class="field field--border-light mr-1 h-12">
            <option>Category</option>
          </select>
          <select class="field field--border-light mr-1 h-12">
            <option>Subcategory</option>
          </select>
        </div>
        <div>
          <div class="flex w-fit-content bg-white justify-center border-light-gray items-center content-center">
            <!-- <div class="h-12 relative w-10">
                <font-awesome-icon
                  class="ml-1 h-4 text-gray-400 absolute-center-h-v"
                  :icon="['fas', 'search']"
                />
              </div>
              <input
              placeholder="Search..."
              class="bg-white outline-none h-8 text-gray-800 pr-3 border-gray"
              v-model="searchTerm"
              v-on:input="search"
            /> -->
            <!-- <input
                placeholder="search users"
                class="bg-white outline-none h-12 text-gray-800 pr-3"
              /> -->
          </div>
        </div>
      </div>
      <div class="xl:hidden cursor-pointer border-light-gray w-10 h-8 relative mt-2 ml-2 bg-white">
        <font-awesome-icon class="ml-1 h-6 text-gray-600 absolute-center-h-v" :icon="['fas', 'sliders-h']" />
      </div>
    </div>
    <!-- <table class="mt-10 shadow-md">
        <thead>
          <tr class="text-gray-800 h16">
            <th class="text-left">Name</th>
            <th class="text-left">2D</th>
            <th class="text-left">3D</th>
            <th class="text-left">Manufacturer</th>
            <th class="text-left">Unit in stock</th>
            <th class="text-left">Price</th>
            <th class="text-left">Package</th>
            <th class="text-left">Product</th>
            <th class="text-left">Availability</th>
            <th class="text-left">ROHS?</th>
            <th class="text-left">Category</th>
            <th class="text-left">Subcategory</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td>
              Test1
            </td>
            <td>2D File</td>
            <td>3D File</td>
            <td>PCBWay</td>
            <td>
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" value="10" />
              </div>
            </td>
            <td>
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" value="10" />
              </div>
            </td>
            <td>
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" value="10" />
              </div>
            </td>
            <td>2018</td>
            <td>
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" value="Yes" />
              </div>
            </td>
            <td>Yes</td>
            <td>Category</td>
            <td>Subcategory</td>\
          </tr>
        </tbody>
      </table> -->
    <simple-table title="" :header="false" border="border-0 shadow-md" class="mt-4">
      <template v-slot:header>
      </template>
      <template v-slot:th>
        <th class="text-left w-32 p-1">Name</th>
        <th class="text-left w-20 p-1">2D</th>
        <th class="text-left w-20 p-1">3D</th>
        <th class="text-left w-32 p-1">Manufacturer</th>
        <th class="text-left w-32 p-1">Unit in stock</th>
        <th class="text-left w-32 p-1">Price</th>
        <th class="text-left w-32 p-1">Package</th>
        <th class="text-left w-24 p-1">Product</th>
        <th class="text-left w-32 p-1">Availability</th>
        <th class="text-left w-24 p-1">ROHS?</th>
        <th class="text-left w-32 p-1">Category</th>
        <th class="text-left w-32 p-1">Subcategory</th>
        <!-- <th class="p-4 border-t border-b border-blue-300" :class="'w-1/'+fields.length" v-for="(field,index) in fields">
                    <template v-if="index==0">
                        <input  type="checkbox" id="ad" v-model="selected" @change="$emit('selectall',selected)"/>
                        <label for="ad">{{field}}</label>
                        <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']"/>
                    </template>
                    <template v-else>
                        {{field}}
                        <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']"/>
                    </template>
                </th> -->
      </template>
      <tr class="flex w-full">
        <td class="text-left w-32 p-1 border-b border-gray-400">
          <div class="field-input flex-grow">
            <input class="field h-10" />
          </div>
        </td>
        <td class="text-left w-20 p-1 border-b border-gray-400">
          <button @click="$refs.upload2D.click()" class="trigger">Uploads</button>
          <input style="display: none;" type="file" ref="upload2D" />
        </td>
        <td class="text-left w-20 p-1 border-b border-gray-400">
          <button @click="$refs.upload3D.click()" class="trigger">Uploads</button>
          <input style="display: none;" type="file" ref="upload3D" />
        </td>
        <td class="text-left w-32 p-1 border-b border-gray-400">
          <select name="manufacturerList">
            <option value="">Manufacturer 1</option>
            <option value="">Manufacturer 2</option>
            <option value="">Manufacturer 3</option>
            <option value="">Manufacturer 4</option>
          </select>
        </td>
        <td class="text-left w-32 p-1 border-b border-gray-400">
          <div class="field-input flex-grow">
            <input class="field h-10" :value="unit_stock" @change="change_unit_stock" />
          </div>
        </td>
        <td class="text-left w-32 p-1 border-b border-gray-400">
          <div class="field-input flex-grow">
            <input class="field h-10" :value="price" @change="change_price" />
          </div>
        </td>
        <td class="text-left w-32 p-1 border-b border-gray-400">
          <div class="field-input flex-grow">
            <input class="field h-10" :value="package2" @change="change_package" />
          </div>
        </td>
        <td class="text-left w-24 p-1 border-b border-gray-400">Product</td>
        <td class="text-left w-32 p-1 border-b border-gray-400">
          <div class="field-input flex-grow">
            <input class="field h-10" :value="availability" @change="change_availability" />
          </div>
        </td>
        <td class="text-left w-24 p-1 border-b border-gray-400">ROHS?</td>
        <td class="text-left w-32 p-1 border-b border-gray-400">
          <select name="category">
            <option value="">Electronics</option>
            <option value="">Code</option>
            <option value="">Cover</option>
          </select>
        </td>
        <td class="text-left w-32 p-1 border-b border-gray-400">
          <select name="subCategory">
            <option value="">Placement</option>
            <option value="">Show Top Layer</option>
            <option value="">Show Bottom Layer</option>
            <option value="">VR</option>
            <option value="">Add Text</option>
            <option value="">Create Routes</option>
            <option value="">Get Data</option>
            <option value="">Send Data</option>
            <option value="">Save Board</option>
          </select>
        </td>
      </tr>
      <tr class="flex w-full">
        <td class="text-left w-32 p-1 border-b border-gray-400">
          <div class="field-input flex-grow">
            <input class="field h-10" />
          </div>
        </td>
        <td class="text-left w-20 p-1 border-b border-gray-400">
          <button @click="$refs.upload2D.click()" class="trigger">Uploads</button>
          <input style="display: none;" type="file" ref="upload2D" />
        </td>
        <td class="text-left w-20 p-1 border-b border-gray-400">
          <button @click="$refs.upload3D.click()" class="trigger">Uploads</button>
          <input style="display: none;" type="file" ref="upload3D" />
        </td>
        <td class="text-left w-32 p-1 border-b border-gray-400">
          <select name="manufacturerList">
            <option value="">Manufacturer 1</option>
            <option value="">Manufacturer 2</option>
            <option value="">Manufacturer 3</option>
            <option value="">Manufacturer 4</option>
          </select>
        </td>
        <td class="text-left w-32 p-1 border-b border-gray-400">
          <div class="field-input flex-grow">
            <input class="field h-10" />
          </div>
        </td>
        <td class="text-left w-32 p-1 border-b border-gray-400">
          <div class="field-input flex-grow">
            <input class="field h-10" />
          </div>
        </td>
        <td class="text-left w-32 p-1 border-b border-gray-400">
          <div class="field-input flex-grow">
            <input class="field h-10" />
          </div>
        </td>
        <td class="text-left w-24 p-1 border-b border-gray-400">Product</td>
        <td class="text-left w-32 p-1 border-b border-gray-400">
          <div class="field-input flex-grow">
            <input class="field h-10" />
          </div>
        </td>
        <td class="text-left w-24 p-1 border-b border-gray-400">ROHS?</td>
        <td class="text-left w-32 p-1 border-b border-gray-400">
          <select name="category">
            <option value="">Electronics</option>
            <option value="">Code</option>
            <option value="">Cover</option>
          </select>
        </td>
        <td class="text-left w-32 p-1 border-b border-gray-400">
          <select name="subCategory">
            <option value="">Placement</option>
            <option value="">Show Top Layer</option>
            <option value="">Show Bottom Layer</option>
            <option value="">VR</option>
            <option value="">Add Text</option>
            <option value="">Create Routes</option>
            <option value="">Get Data</option>
            <option value="">Send Data</option>
            <option value="">Save Board</option>
          </select>
        </td>
      </tr>
    </simple-table>
  </div>
</template>
<script>
import SimpleTable from '~/components/reusables/Table.vue'
import apiService from "~/apiService/have_token.js";
export default {
  components: {
    SimpleTable
  },
  data: function() {
    return {
      geturl2: "/api/service_provider/setting/cost_of_service/electronics/update_dealer",
      geturl: "/api/service_provider/setting/cost_of_service/electronics/get_dealer",
      articleArray: [],
      randomNumber: {},
      unit_stock: null,
      price: null,
      package2: null,
      availability: null,
    }
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

      this.unit_stock = this.articleArray[0].unit_stock;
      this.price = this.articleArray[0].price;
      this.package2 = this.articleArray[0].package;
      this.availability = this.articleArray[0].availability;
    })

  },
  methods: {
    addfileld() {
      alert("add");
      const formData = new FormData();
      formData.set("unit_stock", this.unit_stock);
      formData.set("price", this.price);
      formData.set("package", this.package2);
      formData.set("availability", this.availability);
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
    change_unit_stock(evt) {
      this.unit_stock = evt.target.value
    },
    change_price(evt) {
      this.price = evt.target.value
    },
    change_package(evt) {
      this.package2 = evt.target.value
    },
    change_availability(evt) {
      this.availability = evt.target.value
    },

  }
}

</script>
