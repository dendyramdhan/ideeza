<template>
  <div class="settings-transaction-history mx-auto p-5">
    <!---->
    <!--Orders-->
    <!---->

    <div class="my-10">
      <div class="flex justify-end items-center text-xl">
        <h1 class="mr-5">Your balance:</h1>
        <h1 class="font-semibold">$50</h1>
      </div>

      <div class="flex justify-end items-center text-lg">
        <h1 class="mr-5">Fixed price deposits(Not included in deposits):</h1>
        <h1 class="font-semibold text-ideeza">$23</h1>
      </div>
    </div>

    <div
      class="md:flex pb-3 border-b border-solid border-gray-400 p-5 lg:p-0"
    >
      <h1 class="text-gray-600 text-xl lg:text-3xl font-semibold mr-3">Orders</h1>
      <h1 class="text-ideeza text-xl lg:text-3xl font-semibold mr-3">System</h1>
    </div>

    <!--Panel Menu-->
    <div class="hidden xl:flex mt-10 justify-between items-center">
      <div class="flex flex-wrap">
        <select class="field field--border-light mr-1 h-12 mb-3">
          <option>All payout methods</option>
        </select>
        <select class="field field--border-light mr-1 h-12 mb-3">
          <option>All type products</option>
        </select>
        <select class="field field--border-light mr-1 h-12 mb-3">
          <option>2018</option>
          <option>2019</option>
          <option>2020</option>
        </select>
        <select class="field field--border-light mr-1 h-12 mb-3">
          <option>Order status</option>
        </select>
      </div>
      <div class="flex flex-wrap justify-between items-center">
        <button class="btn btn-normal btn--ideeza px-3 py-3 mr-3">Download invoices</button>
        <button class="btn btn-normal btn-hollow--ideeza px-3 py-3 mr-3">Download CSV</button>
        <div
          class="flex w-fit-content bg-white justify-center border-light-gray items-center content-center"
        >
          <div class="h-12 relative w-10">
            <font-awesome-icon
              class="ml-1 h-4 text-gray-400 absolute-center-h-v"
              :icon="['fas', 'search']"
            />
          </div>
          <input
            placeholder="search by details"
            class="bg-white outline-none h-12 text-gray-800 pr-3"
          />
        </div>
      </div>
    </div>
    <div class="xl:hidden cursor-pointer border-light-gray w-10 h-8 relative mt-2 ml-2 bg-white">
      <font-awesome-icon
        class="ml-1 h-6 text-gray-600 absolute-center-h-v"
        :icon="['fas', 'sliders-h']"
      />
    </div>

    <!--Container-->
    <div class="my-5 p-5 bg-white shadow-md">
      <table class="text-gray-800 text-left">
        <thead>
          <tr class="text-gray-800 h16">
            <th class="product-head">Date</th>
            <th class="py-2">Description</th>
            <th class="py-2">Type</th>
            <th class="py-2">Service provider</th>
            <th class="py-2">Amount</th>
            <th class="py-2">Invoice</th>
            
          </tr>
        </thead>
        <tbody>
           <tr>
            <td class="">
              12/12/20
            </td>
            <td class="">Refund from dispute</td>
            <td class="font-semibold">Refund</td>
            <td class="font-semibold">Alex Meiweather</td>
            <td class="font-semibold">Jan 23, 2018</td>
            <td class="font-semibold">$100,000</td>
            <td class="font-semibold">
              <div class="flex">
                  <div
                    class="text-center cursor-pointer text-semibold text-gary-600 border border-solid border-gray-500  px-5 py-2 mr-2"
                  >Invoice</div>
                  <div
                    class="bg-green-500  text-center cursor-pointer text-semibold text-white  px-5 py-2"
                  >refunded</div>
                </div>
            </td>
             
          </tr>

          <tr>
            <td class="">
              12/12/20
            </td>
            <td class="">Refund from dispute</td>
            <td class="font-semibold">Refund</td>
            <td class="font-semibold">Alex Meiweather</td>
            <td class="font-semibold">Jan 23, 2018</td>
            <td class="font-semibold">$100,000</td>
            <td class="font-semibold">
              <div class="flex">
                <div
                  class="text-center cursor-pointer text-semibold text-gary-600 border border-solid border-gray-500 px-5 py-2 mr-2"
                >Invoice</div>
                <div
                  class="bg-gray-500  text-center cursor-pointer text-semibold text-white px-5 py-2 te"
                >In progress</div>
              </div>
            </td>
             
          </tr>

        </tbody>
      </table>
    </div>  
  </div>
</template>
<script>
// import Projects from "~/data/UserSettingApi.json";
import apiService from "~/apiService/have_token.js";

export default {
  middleware: "auth",
  name: "transaction-history",
  data: function() {
    return {
      longview: true,
      Projects: null,
      geturl: "/api/setting/transaction_history",
      articleArray: [],
      randomNumber: {},
       ts: new Date(),
      project_img_url:process.env.project_image_url,

    };
  },
  mounted(){

    let sendData = {
      method: "get",
      url: this.geturl,
      data: null
    };

    apiService(sendData, response => {
      console.log(response.data);
      this.randomNumber = response.data;
      this.articleArray = Object.values(response.data.data);

      this.articleArray.map(element => {
        this.Projects.push(element.transaction);
        // this.Servicesaxios.push(element.service);
      });

    });

  },
};
</script>

<style scoped>
.product-head {
  @apply text-left;
}
.settings-transaction-history {
  max-width: 1500px;
}
@screen md {
  thead td,
  tbody td {
    @apply text-center px-1;
  }
}
@screen lg {
  thead td {
    @apply text-left;
  }
  .product {
    width: 290px;
  }
  table {
    @apply mb-5 w-full table-auto border-collapse text-gray-600;
  }
  tbody td {
    @apply border-t border-solid border-gray-400 py-3 my-3;
  }
  tbody tr:last-child td {
    @apply border-b border-solid border-gray-400 py-3 my-3;
  }
}

@media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
  /* Force table to not be like tables anymore */
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }

  td {
    /* Behave  like a "row" */
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
  }

  td:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    font-weight: 600;
  }

  /*
      Label the data
      */
  td:nth-of-type(1):before {
    content: "Product";
  }
  td:nth-of-type(2):before {
    content: "Product No";
  }
  td:nth-of-type(3):before {
    content: "Build Time";
  }
  td:nth-of-type(4):before {
    content: "Quantity";
  }
  td:nth-of-type(5):before {
    content: "Price";
  }
  td:nth-of-type(6):before {
    content: "Manufacturers";
  }
  td:nth-of-type(7):before {
    content: "Order Status";
  }
  td:nth-of-type(8):before {
    content: "Action";
  }
}
</style>
