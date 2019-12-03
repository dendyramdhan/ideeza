<template>
  <div class="lg:px-20">
    <h1 class="text-lg font-semibold heading-border border-b pb-3">Projects</h1>

    <div class="cart-scroll-area">
      <smooth-scrollbar :options="{alwaysShowTracks: true}">
        <div v-for="project in projects" :key="project.id">
      <div class="p-3 my-3 gradient-bg text-white flex justify-between gradient-bg items-center">
        <div class="text-sm mb-1 lg:mb-0 lg:text-xl">{{project.name}}</div>
        <font-awesome-icon class="mr-1 h-4 cursor-pointer text-white" :icon="['fas', 'trash']"/>
      </div>
      <v-client-table :ref="`products_table_${project.id}`" :data="project.tableData" :columns="columns" :options="options">
        <CheckBox slot="id" slot-scope="props" />
        <div class="flex items-center" slot="detail" slot-scope="props" >
          <div class="mr-2">
            <img src="~/static/images/Layercar.png">
          </div>
          <div class="my-auto">
                <span class="block font-semibold">
                  {{props.row.product.name}}
                </span>
            <span class="block text-sm text-gray-500 ">
                  {{props.row.product.detail}}
                </span>
          </div>
        </div>
        <span class="font-semibold" slot="price" slot-scope="props">{{props.row.price | currency}}</span>
        <span class="font-semibold" slot="cost" slot-scope="props">{{props.row.cost | currency}}</span>
        <div class="flex items-center justify-end" slot="actions" slot-scope="props">
          <font-awesome-icon class="mr-2 h-4 cursor-pointer text-ideeza" :icon="['fas', 'trash']"/>
          <font-awesome-icon @click="toggleChildRow('products_table_'+project.id, props.row.id)" class="mr-2 h-4 cursor-pointer text-ideeza" :icon="['fas', 'pen']"/>
          <nuxt-link to="/user/add-service">
            <font-awesome-icon class="mr-2 h-4 cursor-pointer text-ideeza" :icon="['fas', 'plus']"/>
          </nuxt-link>

        </div>

        <div slot="child_row" slot-scope="props" class="pb-10 pr-32">
          <div class="text-center font-semibold mb-3 flex justify-end px-5" >
            <h1 class="text-center font-semibold  w-32">Category</h1>
            <h1 class="text-center font-semibold  w-48">Manufacturers</h1>
            <h1 class="text-center font-semibold  w-32">Price</h1>
          </div>
          <div v-for="manufacturer in props.row.manufacturers" class="flex justify-end px-5">
            <div class="w-32 text-center">{{manufacturer.category}}</div>
            <div class="w-48 text-center ">
              <nuxt-link to="/user/add-manufacturer">
                <span>
                {{manufacturer.name}}
              </span>
                <font-awesome-icon class="ml-2 h-4 cursor-pointer text-ideeza" :icon="['fas', 'pen']"/>
              </nuxt-link>

            </div>
            <div class="w-32 text-center">{{manufacturer.price | currency}}</div>

          </div>
        </div>

      </v-client-table>
      <div class="py-5 pr-5 text-right">
        Total: <span class="ml-3">{{project.total | currency}}</span>
      </div>
    </div>
      </smooth-scrollbar>
    </div>


  </div>
</template>

<script>
    import CheckBox from '~/components/form/checkbox-dark.vue'
    export default {
      name: "cart",
      components: {
        CheckBox
      },
      data: function() {
        return {
          details1: false,
          columns: ['id', 'detail', 'color', 'price', 'quantity', 'cost', 'actions'],
          projects: [
            {
              id: 0,
              name: 'Lamborghini Aventado and Something',
              total: 25000,
              tableData: [
                {
                  id: 1,
                  product: {
                    image: 'Layercar.png',
                    name: 'Lamborghini',
                    detail: 'Electronics + Cover'
                  },
                  color: 'Red',
                  price: 20000,
                  quantity: 1,
                  cost: 10000,
                  manufacturers: [
                    {
                      id: 1,
                      category: 'Electronics',
                      name: 'PCB, Way',
                      price: 2000
                    },
                    {
                      id: 2,
                      category: 'Code',
                      name: 'The Other Way',
                      price: 4000
                    }
                  ]

                },
                {
                  id: 2,
                  product: {
                    image: 'Layercar.png',
                    name: 'Lamborghini',
                    detail: 'Electronics + Cover'
                  },
                  color: 'Red',
                  price: 20000,
                  quantity: 1,
                  cost: 10000,
                  manufacturers: [
                    {
                      id: 1,
                      category: 'Electronics',
                      name: 'PCB, Way',
                      price: 2000
                    },
                    {
                      id: 2,
                      category: 'Code',
                      name: 'The Other Way',
                      price: 4000
                    }
                  ]
                }
              ],
            },
            {
              id: 1,
              name: 'Washing machines',
              total: 25000,
              tableData: [
                {
                  id: 1,
                  product: {
                    image: 'Layercar.png',
                    name: 'Lamborghini',
                    detail: 'Electronics + Cover'
                  },
                  color: 'Red',
                  price: 20000,
                  quantity: 1,
                  cost: 10000,
                  manufacturers: [
                    {
                      id: 1,
                      category: 'Electronics',
                      name: 'PCB, Way',
                      price: 2000
                    },
                    {
                      id: 2,
                      category: 'Code',
                      name: 'The Other Way',
                      price: 4000
                    }
                  ]

                }
              ],
            }
          ],

          options: {
            headings: {
              id: '',
              detail: 'Products',
              color: 'Color',
              price: 'Price',
              quantity: 'Quantity',
              cost: 'Cost',
              actions: ''
            },
            sortable: [],
            filterable: false,
            childRowTogglerFirst: false
          }
        }
      },
      mounted() {
        this.$store.commit('cartstepper/set', {position: 2})
      },
      methods: {
        addManufacturer () {
        },
        toggleChildRow(ref, id){
          this.$refs[ref][0].toggleChildRow(id);
        }
      }
    }
</script>

<style scoped>



  /*Table*/

  /deep/ table{
      @apply mb-5 w-full table-auto border-collapse text-gray-600 mx-auto;

    }
  /deep/ thead tr th{
      @apply text-ideeza-black border-b-2 border-solid border-ideeza;
    }
  /deep/ thead tr th:first-child{
      @apply border-b-0;
    }
  /deep/ thead tr th:nth-child(2){
    text-align: left;
  }
  /deep/ tr td:first-child{
      width: 50px;
      text-align: left;
    }
  /deep/ tr td:nth-child(2){
      width: 450px;
      text-align: left;
    }
  /deep/ tr td img{
      width: 180px;
    }
  /deep/ tbody td{
      @apply py-3 my-3 text-center;
    }
  /deep/ tbody td:last-child{
    @apply text-right;
  }
  /deep/ tbody tr:last-child td{
      @apply py-3 my-3;
    }

  /deep/ .VuePagination{
    @apply hidden;
  }

  /*    */

</style>
