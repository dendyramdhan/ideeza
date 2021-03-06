<template>
  <div class="lg:px-20">
    <h1 class="text-lg font-semibold heading-border border-b pb-3">Projects</h1>

    <div class="cart-scroll-area">
      <!-- <smooth-scrollbar :options="{alwaysShowTracks: true}"> -->
      <div class="pink-scroll overflow-y-auto" style="height: 480px">
        <div v-for="project in projects" :key="project.project_id">
          <div
            class="p-3 my-3 gradient-bg text-white flex justify-between gradient-bg items-center"
          >
            <div class="text-sm mb-1 lg:mb-0 lg:text-xl">{{project.title}}</div>
            <font-awesome-icon
              class="mr-1 h-4 cursor-pointer text-white"
              :icon="['fas', 'trash']"
              @click="onRemoveAll(project.project_id)"
            />
          </div>
          <v-client-table
            :ref="project.project_id"
            :data="project.products"
            :columns="columns"
            :options="options"
          >
            <CheckBox
              slot="id"
              slot-scope="props"
              :value="props.row.product_id"
              @onChange="checkBoxClicked"
            />
            <div class="flex items-center" slot="detail" slot-scope="props">
              <div class="mr-2">
                <img :src="project_image_url + props.row.product_image" />
              </div>
              <div class="my-auto">
                <span class="block font-semibold">{{props.row.product_title}}</span>
                <span class="block text-sm text-gray-500">{{props.row.product_description}}</span>
              </div>
            </div>
            <div class="flex items-center" slot="quantity" slot-scope="props">
              <div class="mx-auto flex">
                <font-awesome-icon
                  class="mr-2 h-3 cursor-pointer my-auto"
                  :icon="['fas', 'minus']"
                  @click="onDecrement(props.index, project.project_id, props.row.product_id)"
                />
                <div class="w-5">{{props.row.quantity}}</div>
                <font-awesome-icon
                  class="mr-2 h-3 cursor-pointer my-auto"
                  :icon="['fas', 'plus']"
                  @click="onIncrement(props.index, project.project_id, props.row.product_id)"
                />
              </div>
            </div>
            <span
              class="font-semibold"
              slot="price"
              slot-scope="props"
            >{{props.row.price | currency}}</span>
            <span class="font-semibold" slot="cost" slot-scope="props">{{props.row.cost | currency}}</span>
            <div class="flex items-center justify-center" slot="actions" slot-scope="props">
              <font-awesome-icon
                class="mr-2 h-4 cursor-pointer text-ideeza"
                :icon="['fas', 'trash']"
                @click="onRemove(props.row.product_id)"
              />
              <font-awesome-icon
                @click="toggleChildRow(project.project_id, props.row.product_id)"
                class="mr-2 h-4 cursor-pointer text-ideeza"
                :icon="['fas', 'pen']"
              />
              <font-awesome-icon
                @click="onAddService(project.project_id)"
                class="mr-2 h-4 cursor-pointer text-ideeza"
                :icon="['fas', 'plus']"
              />
            </div>

            <div slot="child_row" slot-scope="props" class="pb-10 pr-32">
              <div class="text-center font-semibold mb-3 flex justify-end px-5">
                <h1 class="text-center font-semibold w-32">Category</h1>
                <h1 class="text-center font-semibold w-48">Manufacturers</h1>
                <h1 class="text-center font-semibold w-32">Price</h1>
              </div>
              <div v-for="manufacturer in manufacturers" class="flex justify-end px-5">
                <div class="w-32 text-center">{{manufacturer.type}}</div>
                <div class="w-48 text-center">
                  <nuxt-link to="/user/add-manufacturer">
                    <span>{{manufacturer.name}}</span>
                    <font-awesome-icon
                      class="ml-2 h-4 cursor-pointer text-ideeza"
                      :icon="['fas', 'pen']"
                    />
                  </nuxt-link>
                </div>
                <div class="w-32 text-center">{{manufacturer.cost | currency}}</div>
              </div>
            </div>
          </v-client-table>
          <div class="py-5 pr-5 text-right">
            Total:
            <span class="ml-3">{{project.total | currency}}</span>
          </div>
        </div>
      </div>
      <!-- </smooth-scrollbar> -->
    </div>
    <div class="py-10 lg:px-20 flex flex-col lg:flex-row justify-between relative">
      <button @click="moveBack" class="order-2 lg:order-1 my-4 lg:my-0 btn pill-button px-8 py-1">
        <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'long-arrow-alt-left']" />Back
      </button>
      <nuxt-link
        to="/user/dashboard"
        class="order-1 lg:order-2 my-4 lg:my-0 btn pill-button px-8 py-1"
      >Continue shopping</nuxt-link>
      <button @click="moveNext" class="order-3 btn pill-button pill-button--ideeza px-8 py-1">
        Next Step
        <font-awesome-icon class="ml-2 h-4 cursor-pointer" :icon="['fas', 'long-arrow-alt-right']" />
      </button>
    </div>
  </div>
</template>

<script>
import CheckBox from "~/components/form/checkbox-dark.vue";
import apiServiceWithToken from "~/apiService/have_token.js";
import products from "~/json/products.json";
export default {
  middleware: "auth",
  name: "cart",
  components: {
    CheckBox
  },
  data: function() {
    return {
      count: 0,
      details1: false,
      columns: [
        "id",
        "detail",
        "color",
        "price",
        "quantity",
        "cost",
        "actions"
      ],
      projects: [],
      manufacturers: [],
      allmanufacturers: [],
      manufs: [],
      checkedproducts: [],

      options: {
        headings: {
          id: "",
          detail: "Products",
          color: "Color",
          price: "Price",
          quantity: "Quantity",
          cost: "Cost",
          actions: "Actions"
        },
        sortable: [],
        filterable: false,
        childRowTogglerFirst: false
      },
      project_image_url: process.env.project_image_url
    };
  },
  mounted() {
    this.$store.commit("cartstepper/set", { position: 2 });
    let getallprojectsurl = "/api/project/get_all";
    let getallprojectsData = {
      method: "get",
      url: getallprojectsurl,
      data: null
    };

    apiServiceWithToken(getallprojectsData, response => {
      console.log(response.data);
      console.log(response.data["success"]);
      if (response.data["success"] == true) {
        this.projects = response.data["data"];
        console.log("projects: ", response.data["data"]);
      }
    });

    let getallmanufacturersurl = "/api/project/get_all_manufacturers";
    let getallmanufacturersData = {
      method: "get",
      url: getallmanufacturersurl,
      data: null
    };

    apiServiceWithToken(getallmanufacturersData, response => {
      if (response.data["success"] == true) {
        this.allmanufacturers = response.data["data"];
        console.log("all manufactures: ", response.data["data"]);
      }
    });
  },
  methods: {
    checkBoxClicked(status, value) {
      window.$nuxt.$cookies.set("productid", value);
      this.allmanufacturers.map(element => {
        if (element.product_id == value && status == true) {
          this.manufs.push(element.manufacturer);
        } else if (element.product_id == value && status == false) {
          const index = this.manufs.indexOf(element.manufacturer);
          if (index > -1) {
            this.manufs.splice(index, 1);
          }
        }
      });

      this.projects.map(element => {
        element.products.map(child_element => {
          if (child_element.product_id == value && status == true) {
            this.checkedproducts.push(child_element);
          } else if (child_element.product_id == value && status == false) {
            const index = this.checkedproducts.indexOf(child_element);
            if (index > -1) {
              this.checkedproducts.splice(index, 1);
            }
          }
        });
      });

      this.manufacturers = this.manufs;
      console.log("manufacturers per products: ", this.manufacturers);
      console.log("this.checkedproducts: ", this.checkedproducts);
    },

    addManufacturer() {},
    toggleChildRow(ref, product_id) {
      window.$nuxt.$cookies.set("productid", product_id);
      this.allmanufacturers.map(element => {
        if (element.product_id == product_id) {
          this.manufs.push(element.manufacturer);
          console.log("element: ", element.manufacturer);
        }
      });

      this.manufacturers = this.manufs;
      this.manufs = [];

      console.log("product_id: ", product_id);
      this.$refs[ref][0].toggleChildRow();
    },
    onRemove(product_id) {
      var d = confirm("Do you really want to remove?");
      if (d == true) {
      }
    },
    onRemoveAll(project_id) {
      var d = confirm("Do you really want to remove?");
      if (d == true) {
      }
    },
    onAddService(id) {
      window.$nuxt.$cookies.set("userprojectid", id);
      this.$router.push("/user/add-service");
    },

    onDecrement(index, pg_id, pd_id) {
      this.projects.map(element => {
        if (element.project_id == pg_id) {
          element.products.map(p => {
            if (p.product_id == pd_id) {
              if (p.quantity > 0) {
                p.quantity--;
              }
            }
          });
        }
      });
    },

    onIncrement(index, pg_id, pd_id) {
      this.projects.map(element => {
        if (element.project_id == pg_id) {
          element.products.map(p => {
            if (p.product_id == pd_id) {
              p.quantity++;
            }
          });
        }
      });
    },

    moveNext() {
      this.$store.commit("cartstepper/checkedproduct", this.checkedproducts);
      this.$store.commit(
        "cartstepper/checkedmanufacturers",
        this.manufacturers
      );
      console.log("this.checkedproducts: ", this.checkedproducts);
      console.log(
        "checkedproducts: ",
        this.$store.state.cartstepper.checkedproducts
      );
      this.$router.push("/user/cart/delivery");
    },

    moveBack() {
      this.$router.push("/user/cart/options");
    }
  }
};
</script>

<style scoped>
/*Table*/

.pink-scroll::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

.pink-scroll::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}

.pink-scroll::-webkit-scrollbar-thumb {
  background-color: #ff09d0;
  border: 2px solid #ff09d0;
}

/deep/ table {
  @apply mb-5 w-full table-auto border-collapse text-gray-600 mx-auto;
}
/deep/ thead tr th {
  @apply text-ideeza-black border-b-2 border-solid border-ideeza;
}
/deep/ thead tr th:first-child {
  @apply border-b-0;
}
/deep/ thead tr th:nth-child(2) {
  text-align: left;
}
/deep/ tr td:first-child {
  width: 50px;
  text-align: left;
}
/deep/ tr td:nth-child(2) {
  width: 450px;
  text-align: left;
}
/deep/ tr td img {
  width: 180px;
}
/deep/ tbody td {
  @apply py-3 my-3 text-center;
}
/deep/ tbody td:last-child {
  @apply text-right;
}
/deep/ tbody tr:last-child td {
  @apply py-3 my-3;
}

/deep/ .VuePagination {
  @apply hidden;
}

/*    */
</style>
