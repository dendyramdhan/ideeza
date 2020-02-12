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
                class="border border-gray-400 rounded w-full h-12 px-2"
                type="text"
                placeholder="Month"
                @change="changemonth"
              />
            </div>
            <div class="flex-1 px-2">
              <input
                class="border border-gray-400 rounded w-full h-12 px-2"
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
</style>
