<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <div class="w-full px-4">
      <h2 class="text-3xl text-gray-700 py-6 border-b">Add new technican</h2>
      <div class="bg-white shadow mx-auto mt-5">
        <!--Form Container-->
        <div class="w-8/12 mx-auto my-5 p-5 bg-white shadow-md">
          <!--Form Fields-->
          <div class="py-2">
            <input
              class="border border-gray-400 rounded w-full h-12 px-2"
              type="text"
              placeholder="Email address"
              @change="changeemail"
            />
          </div>

          <div class="py-2">
            <input
              class="border border-gray-400 rounded w-full h-12 px-2"
              type="text"
              placeholder="First name"
              @change="changefirstname"
            />
          </div>

          <div class="py-2">
            <input
              class="border border-gray-400 rounded w-full h-12 px-2"
              type="text"
              placeholder="Last name"
              @change="changelastname"
            />
          </div>

          <div class="py-2">
            <input
              class="border border-gray-400 rounded w-full h-12 px-2"
              type="password"
              placeholder="Choose a password"
              @change="changepassword"
            />
          </div>

          <div class="py-2">
            <select class="border border-gray-400 rounded w-full h-12 px">
              <option value="blogger">Blogger</option>
              <option value="blogger">Code</option>
              <option value="blogger">Customer Service</option>
              <option value="blogger">Electric</option>
              <option value="blogger">Machanics</option>
              <option value="blogger">Project Manager</option>
              <option value="blogger">Super Technician</option>
              <option value="blogger">Tracker</option>
              <option value="blogger">Other</option>
            </select>
          </div>

          <h2 class="text-4xl font-bold text-gray-700">Birthday</h2>
          <p class="text-gray-700 py-3">Other people won't see your birthday.</p>

          <div class="flex py-2">
            <div class="flex-1 px-2">
              <input
                class="border border-gray-400 rounded w-full h-12 px-2 pr-6 overflow-hidden"
                type="date"
                placeholder="Month"
                @change="changemonth"
              />
            </div>
            <div class="flex-1 px-2">
              <input
                class="border border-gray-400 rounded w-full h-12 px-2 pr-6 overflow-hidden"
                type="text"
                placeholder="Day"
                @change="changeday"
              />
            </div>
             
            <div class="flex-1 px-2">
              <input
                class="border border-gray-400 rounded w-full h-12 px-2"
                type="text"
                placeholder="Year"
                @change="changeyear"
              />
            </div>
          </div>

          <div class="mt-8 mb-3 text-center">
            <button class="px-16 bg-ideeza rounded py-4 text-white text-xl" @click="addtech">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 <script>
import apiService from "~/apiService/have_token.js";

export default {
  name: "add-tech-index",

  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  data: function() {
    return {
      email: null,
      firstname: null,
      lastname: null,
      password: null,
      month: null,
      day: null,
      year: null,
      geturl: "/api/user/register",

    };
  },
  mounted() {},
  methods: {
    changeemail(evt) {
      this.email = evt.target.value;
    },
    changefirstname(evt) {
      this.firstname = evt.target.value;
    },
    changelastname(evt) {
      this.lastname = evt.target.value;
    },
    changepassword(evt) {
      this.password = evt.target.value;
    },
    changemonth(evt) {
      this.month = evt.target.value;
    },
    changeday(evt) {
      this.day = evt.target.value;
    },
    changeyear(evt) {
      this.year = evt.target.value;
    },
    addtech() {
      // alert(
      //   this.email +
      //     "_" +
      //     this.firstname +
      //     "_" +
      //     this.lastname +
      //     "_" +
      //     this.password +
      //     "_" +
      //     this.month +
      //     "_" +
      //     this.day +
      //     "_" +
      //     this.year +
      //     "_"
      // );
      let birthday=this.month+"/"+this.day+"/"+this.year
      const formData = new FormData();
      formData.set("email", this.email);
      formData.set("password", this.password);
      formData.set("firstname", this.firstname);
      formData.set("lastname", this.lastname);
      formData.set("birthday", birthday);
      let sendData = {
        method: "post",
        url: this.geturl,
        data: formData
      };

      apiService(sendData, response => {
        console.log(response);
      });
    }
  }
};
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
