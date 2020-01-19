<template>
  <div class="py-10 lg:px-20">
    <div class="w-full border-b border-gray-500 flex pb-3">
      <div class></div>
      <div class="tabs-container z-10 relative flex lg:mt-20">
        <span class="font-semibold text-xl text-gray-500 mr-2">Choose payment method</span>
        <div
          @click="tabItem='visa'"
          class="tab-item"
          :class="{active: tabItem === 'visa', 'border-bot': tabItem !== 'visa'}"
        >
          <img
            class="lg:inline-block w-20 lg:w-auto mt-5 lg:mt-0 lg:mx-12"
            src="~/static/images/visa_logo.png"
          />
        </div>
        <div
          @click="tabItem='marketcard'"
          class="tab-item"
          :class="{active: tabItem === 'marketcard', 'border-bot': tabItem !== 'marketcard'}"
        >
          <img
            class="lg:inline-block w-20 lg:w-auto lg:mr-12 mt-5 lg:mt-0"
            src="~/static/images/mastercard-logo.png"
          />
        </div>
        <div
          @click="tabItem='paypal'"
          class="tab-item"
          :class="{active: tabItem === 'paypal', 'border-bot': tabItem !== 'paypal'}"
        >
          <img
            class="lg:inline-block w-20 lg:w-auto mt-5 lg:mt-0"
            src="~/static/images/paypal-logo.png"
          />
        </div>
      </div>
    </div>

    <!--Shipping form-->
    <div class="mt-5 lg:flex flex-wrap" v-if="tabItem === 'visa'">
      <div class="lg:w-1/2 lg:pr-5">
        <div class="field-container mt-10">
          <div class="text-lg text-gray-800 mb-2">Card holder name</div>
          <text-field placeholder />
        </div>
      </div>
      <div class="lg:w-1/2 lg:pl-5">
        <div class="field-container mt-10">
          <div class="text-lg text-gray-800 mb-2">Card number</div>
          <text-field placeholder />
        </div>
      </div>
      <div class="lg:w-1/2 lg:pr-5">
        <div class="field-container mt-10">
          <div class="text-lg text-gray-800 mb-2">End date</div>
          <drop-down class="inline-block lg:w-1/3 w-1/3" :data="months" placeholder="mm" />
          <drop-down class="inline-block lg:w-1/3 w-1/3" :data="years" placeholder="yyyy" />
        </div>
      </div>
      <div class="lg:w-1/6 lg:pl-5">
        <div class="field-container mt-10">
          <div class="text-lg text-gray-800 mb-2">
            CVV
            <font-awesome-icon class="ml-2 h-5 text-gray-500" :icon="['fas', 'info-circle']" />
          </div>
          <text-field placeholder />
        </div>
      </div>
    </div>
    <div class="mt-5 lg:flex flex-wrap" v-if="tabItem === 'marketcard'">
    </div>
    <div class="mt-5 lg:flex flex-wrap" v-if="tabItem === 'paypal'">
      <h5 class="title-pay">Pay via <span>PayPal</span></h5>
    </div>
  </div>
</template>

<script>
import DropDown from "~/components/form/dropdown-field.vue";
import TextField from "~/components/form/text-field.vue";
export default {
  middleware: "auth",
  name: "payment",
  data: function() {
    return {
      tabItem: "visa",
      shippingServices: ["Ali Express Standard"],
      years: [
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021"
      ],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "Sepetember",
        "Octobor",
        "November",
        "December"
      ]
    };
  },
  mounted() {
    this.$store.commit("cartstepper/set", { position: 4 });
  },
  components: {
    "text-field": TextField,
    "drop-down": DropDown
  }
};
</script>

<style scoped>
.services-dropdown {
  width: 270px;
}

.profile-panel {
  width: 100%;
  max-width: 1533px;
}
.left-panel {
  width: 100%;
}
.semi-border {
  @apply z-10;
}

.semi-border:before {
  @apply border-t-4 border-solid border-gray-200;
  content: "";
  margin: 0 auto; /* this centers the line to the full width specified */
  position: absolute; /* positioning must be absolute here, and relative positioning must be applied to the parent */
  left: 0;
  right: 0;
  bottom: 4px;
  z-index: -1;
}
.rating-star {
  @apply inline ml-3;
  width: 20px;
  height: 20px;
}
.tab-item {
  @apply cursor-pointer z-50 bg-white px-5 py-5 font-semibold text-xl text-gray-500 flex items-center;
}
.tab-item.border-bot {
  border-bottom: 4px solid #edf2f7;
}
.tab-item.active {
  @apply border-t-4 border-l-4 border-r-4 border-solid border-gray-200 text-ideeza;
}
.tabs-container:before {
  @apply border-t-4 border-solid border-gray-200;
  content: "";
  margin: 0 auto; /* this centers the line to the full width specified */
  position: absolute; /* positioning must be absolute here, and relative positioning must be applied to the parent */
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
.heading-contact {
  width: 150px;
}
.project-image {
  @apply mr-2 mb-2;
  max-width: 285px;
}
.feed-comment-avatar {
  width: 48px;
}
@screen lg {
  .left-panel {
    max-width: 366px;
  }
}
</style>
