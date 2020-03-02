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
      <div class="mx-5">
        <div class="text-center">
          Sign up with
          <span class="text-ideeza font-bold cursor-pointer" @click="facebookSignin">Facebook</span> or
          <span class="text-ideeza font-bold cursor-pointer" @click="googleSignin">Google</span>
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
            <input type="password" class="block w-full border border-gray px-3 py-3 mb-3" placeholder="Confirm Password" v-model="password1" />
            <div class="font-bold text-lg text-black mb-2">Birthday</div>
            <div class="text-base mb-1">Other people won't see your birthday.</div>
            <div class="flex justify-between mb-3">
              <input
                class="border border-gray-400 rounded w-full h-12 px-2 pr-6 overflow-hidden"
                type="date"/>
              <!-- <datepicker v-model="date_of_birth" class="border border-gray px-3 py-3 mr-1 w-1/3" format="yyyy-MM-dd" placeholder="Select Date"></datepicker>
              <input type="text" class="border border-gray px-3 py-3 mr-1 w-1/3" placeholder="Month" v-model="month" />
              <input type="text" class="border border-gray px-3 py-3 mr-1 w-1/3" placeholder="Day" v-model="day" />
              <input type="text" class="border border-gray px-3 py-3 mr-1 w-1/3" placeholder="Year" v-model="year" /> -->
            </div>
            <label class="leading-normal flex text-sm mb-1">
              <input type="checkbox" class="mt-1 mr-2" />
              <span>i'd like to recieve marketing promotions, special offers, inspiration and policy updates from ideeza. You can opt out any time.</span>
            </label>
            <button class="rounded-full bg-ideeza text-white text-center w-full py-3 mb-1" @click="signup">Sign up</button>
          </div>
        </div>
        <div class="text-center mb-5">
          Already have an ideeza account?
          <a href="#" @click="$emit('login')" class="text-ideeza font-bold">Log in</a>
        </div>
      </div>
    </template>
  </modal>
</template>
<script>
import Modal from "~/components/reusables/Modal.vue";
import firebase from "firebase";
import apiService from "~/apiService";
import apiService2 from "~/apiService/get_param.js";
import VueJwtDecode from 'vue-jwt-decode'
import moment from 'moment'
export default {
  components: {
    Modal,
  },
  data() {
    return {
      email: "",
      password: "",
      password1: "",
      firstname: "",
      lastname: "",
      date_of_birth: null,
    };
  },
  methods: {
    googleSignin() {
      // const provider = new firebase.auth.GoogleAuthProvider();
      var _this = this;
      this.provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(this.provider)
        .then(function(result) {
          // store the user ore wathever
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;

          var fullName = user.displayName.split(' ');
          var firstname = fullName[0];
          var lastname = fullName[fullName.length - 1];
          window.$nuxt.$cookies.set("authToken", token);
          window.$nuxt.$cookies.set("firstname", firstname);
          window.$nuxt.$cookies.set("lastname", lastname);
          window.$nuxt.$cookies.set("userid", user.uid);

          _this.$router.push("/user/dashboard");
        })
        .catch(function(e) {
          console.log(e);
        });
    },
    facebookSignin() {
      var provider = new firebase.auth.FacebookAuthProvider();
      var _this = this;
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // var fullName = user.displayName.split(' ');
          // var firstname = fullName[0];
          // var lastname = fullName[fullName.length - 1];
          // window.$nuxt.$cookies.set("authToken", token);
          // window.$nuxt.$cookies.set("firstname", firstname);
          // window.$nuxt.$cookies.set("lastname", lastname);
          // window.$nuxt.$cookies.set("userid", user.uid);
          // ...
        })
        .catch(function(e) {
          // Handle Errors here.
          var errorCode = e.code;
          var errorMessage = e.message;
          // The email of the user's account used.
          var email = e.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = e.credential;
          // ...
        });
    },
    async signup() {
      if (validate_email(this.email) && validatePassword(this.password) && validateConfirmPassword(this.password, this.password1)) {
        var registerurl = "/accounts/register/";
        var dob = moment(this.date_of_birth).format('YYYY-MM-DD');
        var birthday = new Date(dob).toISOString();
        var signupFormData = new FormData();
        signupFormData.set("email", this.email);
        signupFormData.set("password", this.password);
        signupFormData.set("password2", this.password);
        signupFormData.set("password1", this.password1);
        signupFormData.set("first_name", this.firstname);
        signupFormData.set("last_name", this.lastname);
        signupFormData.set("date_of_birth", birthday);

        let sendData = {
          method: "post",
          url: registerurl,
          data: signupFormData
        };

        apiService(sendData, response => {
          if (response.status == 200) {
            let signinurl = "/accounts/token/";

            let Data = {
              method: "post",
              url: signinurl,
              data: signupFormData
            };

            apiService(Data, response2 => {
              if (response2.status === 200) {
                var access = response2.data.access;
                var refresh = response2.data.refresh;
                var userdata = VueJwtDecode.decode(access)
                var userid = userdata.user_id;
                window.$nuxt.$cookies.set("authToken", access);
                window.$nuxt.$cookies.set("refreshToken", refresh);

                let getUserData = {
                  method: "get",
                  url: `/accounts/users/${userid}/`,
                };

                apiService2(getUserData, response3 => {
                  window.$nuxt.$cookies.set("firstname", response3.data.first_name);
                  window.$nuxt.$cookies.set("lastname", response3.data.last_name);
                  window.$nuxt.$cookies.set("userid", response3.data.id);
                  this.$router.push("/user/dashboard");
                });
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

function validateConfirmPassword(password, password1) {
  var error = "";
  var illegalChars = /[\W_]/; // allow only letters and numbers

  if (password == "" || password1 == "") {
    error = "You didn't enter a password.\n";
    alert(error);
    return false;
  } else if (password !== password1) {
    error = "Password didn't match with confirm password.\n";
    alert(error);
    return false;
  } else if ((password.length < 3 || password.length > 15) || (password1.length < 3 || password1.length > 15)) {
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
