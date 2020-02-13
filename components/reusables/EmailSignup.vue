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
              <datepicker v-model="date_of_birth" class="border border-gray px-3 py-3 mr-1 w-1/3" format="yyyy-MM-dd" placeholder="Select Date"></datepicker>
              <!-- <input type="text" class="border border-gray px-3 py-3 mr-1 w-1/3" placeholder="Month" v-model="month" />
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
