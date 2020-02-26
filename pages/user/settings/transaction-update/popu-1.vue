<template>
  <div class="settings-transaction-history mx-auto">
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
      class="md:flex justify-between items-center pb-3 border-b border-solid border-gray-400 p-5 lg:p-0"
    >
      <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">My Oasdfasdfrders</h1>
    </div>

    <!--Panel Menu-->
    <div class="hidden xl:flex mt-10 justify-between items-center">
      <div class="flex">
        <select class="field field--border-light mr-1 h-12">
          <option>All payout methods</option>
        </select>
        <select class="field field--border-light mr-1 h-12">
          <option>All type products</option>
        </select>
        <select class="field field--border-light mr-1 h-12">
          <option>2018</option>
          <option>2019</option>
          <option>2020</option>
        </select>
        <select class="field field--border-light mr-1 h-12">
          <option>Order status</option>
        </select>
      </div>
      <div class="flex justify-between items-center">
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
      <table>
         
          <tr class="text-gray-800 h16">
            <th class="product-head">Product</th>
            <th>Product No</th>
            <th>Build Time</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Manufacturers</th>
            <th>Order Status</th>
            <th></th>
          </tr>

         
          <tr>
            <td class="product">
              <div class="lg:flex">
                <div class="mr-2">
                  <img src="~/static/images/Layercar.png">
                </div>
                <div>
                  <span class="block font-semibold">Lamborghini Aventado Project</span>
                  <span class="block text-sm text-gray-500">
                    Electronics + Cover
                  </span>
                  <span class="text-sm block mt-3">Order ID:  1123123</span>
                </div>
              </div>
            </td>
            <td class="lg:text-center">12</td>
            <td class="font-semibold">1 month</td>
            <td class="font-semibold">1</td>
            <td class="font-semibold">$100,000</td>
            <td class="font-semibold">



              <span class="text-sm text-gray-500 block">Electronics:</span>
              <span class="font-semibold block">PCB Way</span>
              <span class="text-sm text-gray-500 block">Cover:</span>
              <span class="font-semibold block">Flying Car N3</span>
            </td>
            <td class="font-semibold">
 

              <span class="text-sm text-gray-500 block">Status:</span>
              <span class="font-semibold block">In progress</span>
              <span class="text-sm text-gray-500 block">Order Time and Date:</span>
              <span class="font-semibold block">12/11/2018</span>
            </td>
            <td class="lg:text-right">
              <div
                class="text-center w-20 cursor-pointer text-semibold text-gary-600 border border-solid border-gray-500 p-2"
              >Invoice</div>
              <div
                class="text-center w-20 mt-2 cursor-pointer text-semibold text-gary-600 border border-solid border-gray-500 p-2"
              >Details</div>
              <div
                class="text-center w-20 mt-2 cursor-pointer text-semibold text-gary-600 border border-solid border-gray-500 p-2"
              >Ask refund</div>
            </td>
          </tr>

          <tr>
            <td class="product">
              <div class="lg:flex">
                <div class="mr-2">
                  <img src="~/static/images/Layercar.png">
                </div>
                <div>
                  <span class="block font-semibold">Lamborghini Aventado Project</span>
                  <span class="block text-sm text-gray-500">
                    Electronics + Cover
                  </span>
                  <span class="text-sm block mt-3">Order ID:  1123123</span>
                </div>
              </div>
            </td>
            <td class="lg:text-center">12</td>
            <td class="font-semibold">1 month</td>
            <td class="font-semibold">1</td>
            <td class="font-semibold">$100,000</td>
            <td class="font-semibold">



              <span class="text-sm text-gray-500 block">Electronics:</span>
              <span class="font-semibold block">PCB Way</span>
              <span class="text-sm text-gray-500 block">Cover:</span>
              <span class="font-semibold block">Flying Car N3</span>
            </td>
            <td class="font-semibold">
 

              <span class="text-sm text-gray-500 block">Status:</span>
              <span class="font-semibold block">In progress</span>
              <span class="text-sm text-gray-500 block">Order Time and Date:</span>
              <span class="font-semibold block">12/11/2018</span>
            </td>
            <td class="lg:text-right">
              <div
                class="text-center w-20 cursor-pointer text-semibold text-gary-600 border border-solid border-gray-500 p-2"
              >Invoice</div>
              <div
                class="text-center w-20 mt-2 cursor-pointer text-semibold text-gary-600 border border-solid border-gray-500 p-2"
              >Details</div>
              <div
                class="text-center w-20 mt-2 cursor-pointer text-semibold text-gary-600 border border-solid border-gray-500 p-2"
              >Ask refund</div>
            </td>
          </tr>
         
      </table>


      <div class="w-6/12 p-4 m-auto bg-white shadow fixed z-50 top-0 left-0 right-0 m-auto mt-24" style="max-height:80%;overflow:auto">
         <div class="flex relative">
          <img src="~/static/images/comments.png" class="mr-3">
           <h2 class="text-2xl font-bold text-gray-800">Dispute: </h2>
           <div class="text-gray-600 absolute top-0 right-0">1/2</div>
         </div>
         
        <div class="w-2/3">
           <p class="text-lg text-gray-800 py-3">1. To start the dispute process, please tell us your problem:
           </p>
           <div class="pl-3">
             <p class="text-lg text-gray-600 py-3">Dud you receive your package?</p>
             <p>
              <input type="radio" id="radB1" name="radio-group1" checked>
              <label for="radB1">Yes</label>
            </p>
            <p>
              <input type="radio" id="radB2" name="radio-group1">
              <label for="radB2">No</label>
            </p>
          </div>

          <div class="pl-3">

             <p class="text-lg text-gray-800 py-3 border-b">Select your problem from the options below:</p>
             <p class="text-lg text-gray-600 py-3">Logistics tracking problem</p>
             <p class="py-2">
              <input type="radio" id="radB3" name="radio-group2" checked>
              <label for="radB3">Purchase Protection is running out, but package is still in transit</label>
            </p>
            <p class="py-2">
              <input type="radio" id="radB4" name="radio-group2">
              <label for="radB4">Package was returned to seller by shipping company</label>
            </p>
            <p class="py-2">
              <input type="radio" id="radB5" name="radio-group2">
              <label for="radB5">No tracking information</label>
            </p>

            <p class="text-lg text-gray-600 py-3">Customs problem</p>
             <p class="py-2">
              <input type="radio" id="radB11" name="radio-group3" checked>
              <label for="radB11">Customs is holding the package</label>
            </p>
            <p class="py-2">
              <input type="radio" id="radB12" name="radio-group3">
              <label for="radB12">Package sent to a wrong address</label>
            </p>
          </div>
          <div class="border-t flex justify-between py-6 mt-5">
            <button class="bg-white text-gray-700 border border-gray-700 rounded py-2 px-5">Cancel</button>
            <button class="bg-ideeza border text-white rounded py-3 px-6">Next</button>
          </div>

        </div>
      </div>


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
[type="radio"]:checked,
[type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label
{
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
}
[type="radio"]:checked + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #fc00c5;
    border-radius: 100%;
    background: #fff;
}
[type="radio"]:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #fff;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
    content: '';
    width: 12px;
    height: 12px;
    background: #fc00c5;
    position: absolute;
    top: 3px;
    left: 3px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
}
[type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}
</style>
