<template>
  <div>

    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="main-contents">

        <div class="flex">
          <div class="flex w-1/2">
            <h1 class="flex text-3xl text-ideeza">Documents</h1>
            <div class="flex items-center ml-5 text-xs">14,234 Total</div>
            <div class="flex items-center ml-5 text-xs">
              Sort By:
              <button class="px-3 py-1 text-gray-800 text-bold">
              File type <font-awesome-icon class="text-sm" :icon="['fa', 'chevron-down']"/>
              </button>

            </div>


          </div>
          <div class="flex w-fit-content bg-white justify-center border border-ideeza rounded items-center mr-2 content-center">
                    <div class="h-8 relative w-10">
                        <font-awesome-icon class="ml-1 h-4 text-gray-400 absolute-center-h-v" :icon="['fas', 'search']"/>
                    </div>
                    <input placeholder="search" class="bg-white outline-none h-8 text-gray-800 pr-3">
                </div>
          <div class="flex w-1/2 justify-end">

            <button class="items-center bg-white border border-gray-300 rounded px-3 py-1 text-gray-600">
              <font-awesome-icon class="text-sm" :icon="['fas', 'bars']"/>
            </button>
            <button class="items-center bg-white border border-gray-300 rounded px-3 py-1 text-gray-600 ml-2">
              Filter <font-awesome-icon class="text-sm" :icon="['fas', 'filter']"/>
            </button>
            <button class="items-center bg-ideeza border rounded px-3 py-1 text-white ml-2">
              <font-awesome-icon class="text-sm" :icon="['fas', 'user-plus']"/> Add Document
            </button>
            <button class="items-center light-pink rounded px-3 py-1 text-ideeza ml-2">
              <font-awesome-icon class="text-sm" :icon="['fas', 'ellipsis-h']"/>
            </button>
          </div>
        </div>

        <div class="md:flex">
          <table class="text-left w-full border-collapse mt-5">
		      <thead class="">
			        <tr class="mb-4">
                <th class="p-2">
                  <input type="checkbox" />
                </th>
                <th class="py-2 uppercase">Title</th>
                <th class="py-2 uppercase">Owner</th>
                <th class="py-2 uppercase">Related Contacts</th>
                <th class="py-2 uppercase">Created Date</th>
                <th class="py-2 uppercase">File Types</th>
            </tr>
		      </thead>
    <tbody class="bg-grey-light overflow-y-auto text-gray-700">
      <tr class="w-full mb-4 bg-white rounded" v-for="index in 8" :key="index">
              <td class="p-2 text-sm border-b-4">
                <input type="checkbox" />
              </td>
              <td class="py-2 text-sm border-b-4">
                Heston
                <div class="text-xs text-gray-500">Local drive</div>
              </td>
              <td class="py-2 text-sm border-b-4"><img class="inline-flex h-10 w-10 rounded-full" src="~/static/images/product.png"> Andrew</td>
              <td class="py-2 text-sm border-b-4">abc@xyz.com</td>
              <td class="py-2 text-sm border-b-4">Fri, Nov 29, 2019, 09:00 PM</td>
            </tr>

      </tbody>
	</table>
        </div>

      </div>
    </div>
    <MyIdeeza v-click-outside="onClickOutside" v-if="showMyIdeeza" />
  </div>
</template>
<script>
  import MyIdeeza from '~/components/user/my-ideeza/new-ideeza.vue'
  import SimpleTable from '~/components/reusables/Table.vue'

  export default {
    components: {
      MyIdeeza,
      SimpleTable,
    },
    data: function () {
      return {
        showMyIdeeza: false,
      }
    },
    methods: {
      selectall(value) {
        if (value == true) {
          this.users.forEach(element => {
            element.selected = true
          });
        } else {
          this.users.forEach(element => {
            element.selected = false
          });
        }
        this.$forceUpdate()
      }
    },
  }

</script>
<style>
  .user-chart {
    height: calc(32rem + 0.75rem);
    width: 100%;
  }
.sales-table{
  height: calc(13rem + 0.29rem);
}
.simple-table tbody td {
  padding: 0.5rem;
}
.simple-table th {
  font-size: 0.85rem;
}
.light-pink{
  background: #ffc5f2;
}
</style>
