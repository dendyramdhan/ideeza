<template>
  <div class="py-10 lg:px-20">
    <div class="w-full border-b border-gray-500 flex pb-3">
      <div class></div>
      <div class="tabs-container z-10 relative flex lg:mt-20">
        <span class="font-semibold text-xl text-gray-500 mr-2">Choose payment method</span>
        <div
          @click="onTabPayPal"
          class="tab-item"
          :class="{active: tabItem === 'paypal', 'border-bot': tabItem !== 'paypal'}"
        >
          <img
            class="lg:inline-block w-20 lg:w-auto mt-5 lg:mt-0 lg:mx-12"
            src="~/static/images/paypal-logo.png"
          />
        </div>
        <div
          @click="onTabStripe"
          class="tab-item"
          :class="{active: tabItem === 'stripe', 'border-bot': tabItem !== 'stripe'}"
        >
          <img
            class="lg:inline-block w-20 lg:w-auto mt-5 lg:mt-0"
            src="~/static/images/stripe-logo.png"
          />
        </div>
      </div>
    </div>

    <!--Shipping form-->
    <div class="mt-5 lg:flex flex-wrap" v-if="tabItem === 'stripe'">
      <!-- <div class="lg:w-1/2 lg:pr-5">
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
      </div>-->

      <div class="lg:w-1/4 lg:pr-5">
        <div class="field-container mt-10"></div>
      </div>
      <div class="lg:w-1/2 lg:pl-5">
        <div class="field-container mt-10 mx-auto">
          <div class="justify-center items-center">
            <p class="mt-5 text-center">Credit or debit card</p>
            <div id="card-element" class="input-container mt-5">
              <!-- a Stripe Element will be inserted here. -->
            </div>
            <!-- Used to display form errors -->
            <div id="card-errors" class="mt-5"></div>
          </div>
          <button
            @click="stripeSubmit"
            class="btn btn--ideeza py-2 mt-5 stripesubmit"
          >Submit Stripe Payment</button>
        </div>
      </div>
    </div>
    <div class="mt-10 lg:flex flex-wrap" v-if="tabItem === 'paypal'">
      <div class="lg:w-1/4 lg:pr-5">
        <div class="field-container mt-10"></div>
      </div>
      <div class="lg:w-1/2 lg:pl-5">
        <div class="field-container mt-10">
          <div class="field-container mt-5" id="paypal-button-container"></div>
        </div>
      </div>
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
import DropDown from "~/components/form/dropdown-field.vue";
import TextField from "~/components/form/text-field.vue";
import apiServiceWithToken from "~/apiService/have_token.js";
var stripeCard;
var transaction_success;
export default {
  middleware: "auth",
  name: "payment",
  data: function() {
    return {
      tabItem: "paypal",
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
      ],
      transaction_success: "false",
      manufacturers: [],
      products: [],
      p_prices: 0,
      m_prices: 0,
      t_prices: 0
    };
  },
  mounted() {
    this.$store.commit("cartstepper/set", { position: 4 });
    this.manufacturers = this.$store.state.cartstepper.manufacturers;
    this.products = this.$store.state.cartstepper.checkedproducts;

    this.products.map(p => {
      this.p_prices += p.price;
    });
    this.manufacturers.map(m => {
      this.m_prices += m.cost;
    });

    this.t_prices = this.p_prices + this.m_prices;

    console.log("this.products: ", this.products);
    console.log("this.manufacturers: ", this.manufacturers);
    console.log("total prices: ", this.t_prices);

    this.$store.commit("cartstepper/totalPrice", this.t_prices);
    setTimeout(() => {
      PayPal(this.t_prices);
    }, 100);
  },
  components: {
    "text-field": TextField,
    "drop-down": DropDown
  },
  methods: {
    moveBack() {
      this.$router.push("/user/cart/delivery");
    },
    moveNext() {
      this.$router.push("/user/cart/confirmation");
    },
    onTabPayPal() {
      this.tabItem = "paypal";
      if (this.tabItem == "paypal") {
        setTimeout(() => {
          PayPal(this.t_prices);
        }, 100);
      } else {
      }
    },
    onTabStripe() {
      this.tabItem = "stripe";
      if (this.tabItem == "stripe") {
        setTimeout(() => {
          console.log("Here: ", this.$stripe);
          const elements = this.$stripe.import().elements();
          const card = elements.create("card", {
            iconStyle: "solid",
            style: {
              base: {
                iconColor: "#000",
                color: "#000",
                fontWeight: 400,
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontSize: "16px",
                fontSmoothing: "antialiased",
                "::placeholder": {
                  color: "#BFAEF6"
                },
                ":-webkit-autofill": {
                  color: "#fce883"
                }
              },
              invalid: {
                iconColor: "#FFC7EE",
                color: "#FFC7EE"
              }
            }
          });
          stripeCard = card;
          // Add an instance of the card Element into the `card-element` <div>
          card.mount("#card-element");

          card.addEventListener("change", function(event) {
            const displayError = document.getElementById("card-errors");
            if (event.error) {
              displayError.textContent = event.error.message;
            } else {
              displayError.textContent = "";
            }
          });
        }, 100);
      } else {
      }
    },
    stripeSubmit() {
      const elements = this.$stripe.import().elements();
      // const cardNumber = elements.create("cardNumber");

      // console.log("Here: ", this.$stripe.import().createToken(cardNumber));
      // return;
      this.$stripe
        .import()
        .createToken(stripeCard)
        .then(function(result) {
          if (result.error) {
            // Inform the user if there was an error.
            const errorElement = document.getElementById("card-errors");
            errorElement.textContent = result.error.message;
          } else {
          }
        });
    }
  }
};

function PayPal(price) {
  paypal
    .Buttons({
      createOrder: function(data, actions) {
        // This function sets up the details of the transaction, including the amount and line item details.
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: price
              }
            }
          ]
        });
      },
      onError: function(err) {
        // that.toastService.show('Error with payment processing', 4000, 'red');
        console.log("payPal onError", err);
        return;
      },
      onCancel: function(data) {
        console.log("payPal onCancel", data);
        // that.toastService.show(
        //   "The transaction was interrupted",
        //   4000,
        //   "red"
        // );
        return;
      },
      onApprove: function(data, actions) {
        // This function captures the funds from the transaction.
        return actions.order.capture().then(function(details) {
          // This function shows a transaction success message to your buyer.
          // alert("Transaction completed by " + details.payer.name.given_name + ' ' + details);
          console.log("Transaction completed by ", details);
          let transactionsurl = "/api/transaction/add";
          let transactionsData = {
            method: "post",
            url: transactionsurl,
            data: details
          };

          apiServiceWithToken(transactionsData, response => {
            console.log("response", response.data.success);
            if (response.data.success == true) {
              transaction_success == true;
            }
          });
        });
      }
    })
    .render("#paypal-button-container");
}
</script>

<style scoped>
.stripesubmit {
  padding-left: 50px;
  padding-right: 50px;
  max-width: 500px;
  margin: auto;
  display: flex;
  align-items: center;
}
/* #card-element {
  border: solid 1px #3f3b3b;
} */
.input-container {
  @apply my-5;
}
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
