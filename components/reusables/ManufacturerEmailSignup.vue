<template>
  <modal wide @close="$emit('close')">
    <template slot="header">
      <div class="text-right py-3 px-3">
        <button @click="$emit('close')">
          <font-awesome-icon class="text-xs text-black mt-2 mr-2" :icon="['fa', 'times']" />
        </button>
      </div>
    </template>
    <template slot="body">
      <div class="text-center pb-5">
        <div class="inline-block cursor-pointer" @click="formStep = 1">
          <div class="w-10 h-10 rounded-full inline-block mx-3" :class="[formStep === 1 ? 'bg-indigo-900': 'bg-gray-400']"></div>
          <p :class="[formStep === 1 ? 'text-indigo-900': 'text-gray-400']">Step 1</p>
        </div>
        <div class="inline-block cursor-pointer" @click="formStep = 2">
          <div class="w-10 h-10 rounded-full inline-block mx-3" :class="[formStep === 2 ? 'bg-indigo-900': 'bg-gray-400']"></div>
          <p :class="[formStep === 2 ? 'text-indigo-900': 'text-gray-400']">Step 2</p>
        </div>
      </div>
      <div class="mx-5" v-if="customFormStep === 1">
        <div class="text-center pb-3">
          Sign up with
          <span class="text-ideeza font-bold">Facebook</span> or
          <span class="text-ideeza font-bold">Google</span>
        </div>
        <div class="flex items-center justify-between mb-3">
          <hr class="flex-1 mt-1" />
          <span class="mx-1">or</span>
          <hr class="flex-1 mt-1" />
        </div>
        <div>
          <div class="text-left">
            <input type="email" class="block w-full border border-gray px-3 py-3 mb-3" placeholder="Email Address" v-model="email" />
            <input type="text" class="block w-full border border-gray px-3 py-3 mb-3" placeholder="First Name" v-model="firstname" />
            <input type="text" class="block w-full border border-gray px-3 py-3 mb-3" placeholder="Last Name" v-model="lastname" />
            <input type="password" class="block w-full border border-gray px-3 py-3 mb-3" placeholder="Create a Password" v-model="password" />
            <div class="font-bold text-lg text-black mb-2">Birthday</div>
            <div class="text-base mb-1">Other people won't see your birthday.</div>
            <div class="flex justify-between mb-3">
              <input
                class="border border-gray-400 rounded w-full h-12 px-2 pr-6 overflow-hidden"
                type="date"
              />
            </div>
            <label class="leading-normal flex text-sm mb-1">
              <input type="checkbox" class="mt-1 mr-2" />
              <span>i'd like to recieve marketing promotions, special offers, inspiration and policy updates from ideeza. You can opt out any time.</span>
            </label>
            <button class="rounded-full bg-ideeza text-white text-center w-full py-3 mb-1" @click="nextStep">Next</button>
          </div>
        </div>
        <div class="text-center mb-5">
          Already have an ideeza account?
          <a href="#" @click="$emit('login')" class="text-ideeza font-bold">Log in</a>
        </div>
      </div>
      <div class="mx-5" v-if="customFormStep === 2">
        <h2 class="text-4xl font-bold text-gray-800 py-5">Manufacturer information </h2>
        <form class="bg-white rounded pt-6 pb-8 mb-4">
          <div class="w-full">
            <div class="mb-4">
              <input class="border form-border-color appearance-none border rounded w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Company name">
            </div>
            <div class="mb-4">
              <input class="border form-border-color appearance-none border rounded w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Email address ">
            </div>
            <div class="mb-4">
              <input class="border form-border-color appearance-none border rounded w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Phone number ">
            </div>
            <div class="mb-4">
              <input class="border form-border-color appearance-none border rounded w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Website">
            </div>
            <div class="flex-1 mb-4">
              <div class="relative">
                <select class="block text-lg appearance-none w-full bg-white border border-gray-400 rounded px-4 py-3 pr-8 leading-tight focus:outline-none ">
                  <option>Preferred language </option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
            <div class="mb-4">
              <textarea class="border form-border-color appearance-none border rounded w-full h-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Describe your company "></textarea>
            </div>
            <div class="mb-4">
              <input class="border form-border-color appearance-none border rounded w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Number of employees  ">
            </div>
          </div>
          <h2 class="text-4xl font-bold text-gray-700">Business information </h2>
          <div class="flex-1 mb-4">
            <div class="relative">
              <select class="block text-lg appearance-none w-full bg-white border border-gray-400 rounded px-4 py-3 pr-8 leading-tight focus:outline-none ">
                <option>Line of business </option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
          <div class="flex-1 mb-4">
            <div class="relative">
              <select class="block text-lg appearance-none w-full bg-white border border-gray-400 rounded px-4 py-3 pr-8 leading-tight focus:outline-none ">
                <option>Expertise </option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
          <p class="py-5 text-gray-800">
            I'd like to receive marketing promotions, special offers, inspiration and policy updates from Ideeza. You can opt out any time.
          </p>
          <button class="bg-pink-CM  text-white font-bold py-4 px-12 rounded-lg shadow-lg mt-5 w-full">Register</button>
        </form>
      </div>
    </template>
  </modal>
</template>
<script>
import Modal from "~/components/reusables/Modal.vue";
import firebase from "firebase";
import apiService from "~/apiService";
export default {
  components: {
    Modal
  },
  data() {
    return {
      formStep: 1,
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      day: "",
      month: "",
      year: ""
    };
  },
  computed: {
    customFormStep() {
      return this.formStep;
    }
  },
  methods: {
    nextStep() {
      console.log('hello');
      this.formStep = 2;
    },
    async signup() {
      if (validate_email(this.email) && validatePassword(this.password)) {
        var registerurl = "/api/user/register";
        var birthday = this.day + "/" + this.month + "/" + this.year;

        var signupFormData = new FormData();
        signupFormData.set("email", this.email);
        signupFormData.set("password", this.password);
        signupFormData.set("firstname", this.firstname);
        signupFormData.set("lastname", this.lastname);
        signupFormData.set("birthday", birthday);

        let sendData = {
          method: "post",
          url: registerurl,
          data: signupFormData
        };

        apiService(sendData, response => {
          console.log(response.data);
          console.log(response.data.success);
          if (response.data.success == true) {
            let signinurl = "/api/user/login";

            let Data = {
              method: "post",
              url: signinurl,
              data: signupFormData
            };

            apiService(Data, response => {
              console.log(response.data);
              console.log(response.data.success);
              if (response.data.success == true) {
                var token = response.data["data"].token;
                var userdata = response.data["data"].userdata;
                var firstname = userdata.firstname;
                var lastname = userdata.lastname;
                var userid = userdata.id;

                window.$nuxt.$cookies.set("authToken", token);
                window.$nuxt.$cookies.set("firstname", firstname);
                window.$nuxt.$cookies.set("lastname", lastname);
                window.$nuxt.$cookies.set("userid", userid);
                console.log("Here: ", window.$nuxt.$cookies.get("authToken"));
                this.$router.push("/user/dashboard");
              }
            });
          }
        });
      } else {}
    }
  },
  mounted() {
    // this.signup();
  }
};

function validate_email(email) {
  if (email != "") {
    var apos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (apos < 1 || dotpos - apos < 2) {
      alert("Please Enter Your Email Correctly!");
      return false;
    } else {
      return true;
    }
  } else {
    alert("Please Enter Your Email");
    return false;
  }
}

function validatePassword(password) {
  var error = "";
  var illegalChars = /[\W_]/; // allow only letters and numbers

  if (password == "") {
    error = "You didn't enter a password.\n";
    alert(error);
    return false;
  } else if (password.length < 3 || password.length > 15) {
    error = "The password is the wrong length. \n";
    alert(error);
    return false;
  } else if (illegalChars.test(password)) {
    error = "The password contains illegal characters.\n";
    alert(error);
    return false;
  }
  // else if (
  //   password.search(/[a-zA-Z]+/) == -1 ||
  //   password.search(/[0-9]+/) == -1
  // ) {
  //   error = "The password must contain at least one numeral.\n";
  //   alert(error);
  //   return false;
  // }
  else {}
  return true;
}

</script>
<style scoped>
select {
  max-width: none;
}

input[type="date"] {
  display:block;
  position:relative;
  background:
    white
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='22' viewBox='0 0 20 22'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23688EBB' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' transform='translate(1 1)'%3E%3Crect width='18' height='18' y='2' rx='2'/%3E%3Cpath d='M13 0L13 4M5 0L5 4M0 8L18 8'/%3E%3C/g%3E%3C/svg%3E")
    right 1rem
    center
    no-repeat;
  
  cursor:pointer;
}
input[type="date"]:focus {
  outline:none;
   
  box-shadow:0 0 0 0.25rem rgba(0, 120, 250, 0.1);
}

::-webkit-datetime-edit {}
::-webkit-datetime-edit-fields-wrapper {}
::-webkit-datetime-edit-month-field:hover,
::-webkit-datetime-edit-day-field:hover,
::-webkit-datetime-edit-year-field:hover {
 }
::-webkit-datetime-edit-text {
  opacity:0;
}
::-webkit-clear-button,
::-webkit-inner-spin-button {
  display:none;
}
::-webkit-calendar-picker-indicator {
  position:absolute;
  width:2.5rem;
  height:100%;
  top:0;
  right:0;
  bottom:0;
  
  opacity:0;
  cursor:pointer;
  
  color:rgba(0, 120, 250, 1);
  background:rgba(0, 120, 250, 1);
 
}

input[type="date"]:hover::-webkit-calendar-picker-indicator { opacity:0.05; }
input[type="date"]:hover::-webkit-calendar-picker-indicator:hover { opacity:0.15; }

</style>

