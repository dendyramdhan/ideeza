<template>
  <div class="settings-general md:mx-auto mx-2">
    <!---->
    <!--Profile Information-->
    <!---->
    <div v-for="infogeneral in Projectsgeneral">
      <div
        class="md:flex justify-between items-center pb-3 border-b border-solid border-gray-400 p-5 lg:p-0"
      >
        <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Edit Profile Information</h1>
        <span class="text-gray-500 text-sm lg:text-2xl">* Required</span>
      </div>

      <!--Form Container-->
      <div class="my-5 p-5 bg-white shadow-md">
        <!--Form Fields-->
        <div class="form-field">
          <div class="field-label">
            First Name
            <font-awesome-icon class="ml-1 h-4 inline" :icon="['fas', 'lock']" />
          </div>
          <div class="field-input flex-grow">
            <input class="field h-10" name="first-name" v-model="firstname" />
          </div>
        </div>

        <div class="form-field">
          <div class="field-label">
            Last Name
            <font-awesome-icon class="ml-1 h-4 inline" :icon="['fas', 'lock']" />
          </div>
          <div class="field-input flex-grow">
            <input class="field h-10" v-model="lastname" />
          </div>
        </div>

        <div class="form-field">
          <div class="field-label">I Am</div>
          <div class="field-input flex-grow">
            <select class="field h-10" v-model="sex">
              <option value="male">Male</option>
              <option value="female">FeMale</option>
            </select>
          </div>
        </div>

        <div class="form-field">
          <div class="field-label">
            Birth Date
            <font-awesome-icon class="ml-1 h-4 inline" :icon="['fas', 'lock']" />
          </div>
          <div class="field-input flex-grow">
            <input class="field h-10" v-model="birthday" />
          </div>
        </div>

        <div class="form-field">
          <div class="field-label">
            Email Address
            <font-awesome-icon class="ml-1 h-4 inline" :icon="['fas', 'lock']" />
          </div>
          <div class="field-input flex-grow">
            <input class="field h-10" v-model="emailaddress" />
          </div>
        </div>

        <div class="form-field">
          <div class="field-label">
            Phone Number
            <font-awesome-icon class="ml-1 h-4 inline" :icon="['fas', 'lock']" />
          </div>
          <div class="field-input flex-grow">
            <input class="field h-10" v-model="phonenumber" />
          </div>
        </div>

        <div class="form-field">
          <div class="field-label">Preferred Language</div>
          <div class="field-input flex-grow">
            <select class="field h-10" v-model="preferredlanguage">
              <option value="male" v-for="info in Projectslanguage">{{info.language}}</option>
            </select>
          </div>
        </div>

        <div class="form-field">
          <div class="field-label">
            Address
            <font-awesome-icon class="ml-1 h-4 inline" :icon="['fas', 'lock']" />
          </div>
          <div class="field-input flex-grow">
            <input class="field h-10" v-model="address" />
          </div>
        </div>

        <div class="form-field">
          <div class="field-label">Website</div>
          <div class="field-input flex-grow">
            <input class="field h-10" v-model="website" />
          </div>
        </div>

        <div class="form-field">
          <div class="field-label">Skills</div>
          <div class="field-input flex-grow">
            <textarea class="field h-20" v-model="skills"></textarea>
          </div>
        </div>

        <div class="form-field">
          <div class="field-label">Describe Yourself</div>
          <div class="field-input flex-grow">
            <textarea class="field h-40" v-model="descibe"></textarea>
          </div>
        </div>
      </div>

      <!---->
      <!--Additional Information-->
      <!---->
      <div
        class="md:flex justify-between items-center pb-3 mt-20 border-b border-solid border-gray-400 p-5 lg:p-0"
      >
        <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Additional Information</h1>
        <span class="text-gray-500 text-sm lg:text-2xl">* Required</span>
      </div>

      <!--Form Container-->
      <div class="my-5 p-5 bg-white shadow-md">
        <!--Form Fields-->
        <div class="form-field">
          <div class="field-label">School</div>
          <div class="field-input flex-grow">
            <input class="field h-10" v-model="additional_school" />
          </div>
        </div>

        <div class="form-field">
          <div class="field-label">Work</div>
          <div class="field-input flex-grow">
            <input class="field h-10" v-model="additional_work" />
          </div>
        </div>

        <div class="form-field">
          <div class="field-label">Timezone</div>
          <div class="field-input flex-grow">
            <select class="field h-10" v-model="additional_timezone">
              <option value="male" v-for="info in Projectstimezone">{{info.timezone}}</option>
            </select>
          </div>
        </div>

        <div class="form-field">
          <div class="field-label">Languages</div>
          <div class="field-input flex-grow">
            <input class="field h-10" v-model="additional_language" />
          </div>
        </div>
      </div>

      <!---->
      <!--Profile Phote-->
      <!---->
      <div
        class="md:flex justify-between items-center pb-3 mt-20 border-b border-solid border-gray-400 p-5 lg:p-0"
      >
        <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Profile Photo</h1>
        <span class="text-gray-500 text-sm lg:text-2xl">* Required</span>
      </div>

      <!--Form Container-->
      <div class="my-5 p-5 bg-white shadow-md">
        <!--Photo Field-->
        <div class="md:flex">
          <div
            class="w-full h-64 mb-5 md:mb-0 md:h-48 md:w-48 md:w-max-content md:mr-6 flex-shrink"
          >
            <img class="object-cover object-center h-full mx-auto" :src="infogeneral.profile_photo" />
          </div>
          <div class="flex-grow">
            <div class="text-gray-500 text-sm">{{infogeneral.profile_description}}</div>
            <div class="mt-10">
              <input id="file-input" type="file" name="name" style="display: none;" />
              <button
                class="btn pill-button w-full"
                onclick="document.getElementById('file-input').click();"
                @click="upload"
              >Upload a file from your computer</button>
            </div>
          </div>
        </div>
      </div>

      <!---->
      <!--Social Container-->
      <!---->
      <div
        class="md:flex justify-between items-center pb-3 mt-20 border-b border-solid border-gray-400 p-5 lg:p-0"
      >
        <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Social Media Accounts</h1>
      </div>

      <!--Container-->
      <div class="my-5 p-5 bg-white shadow-md">
        <div class="mb-10">
          <h1
            class="text-lg font-semibold text-gray-600 pb-3 border-b border-solid border-gray-400"
          >Facebook</h1>
          <div class="lg:flex justify-between">
            <div class="text-lg text-gray-500 mt-3 pr-0 lg:pr-28">
              Sign in with Facebook and discover your trusted
              connections to people all over the world.
            </div>
            <div class="self-center mt-3 lg:mt-0">
              <button class="btn px-2" @click="disconnectfacebook">Disconnect</button>
            </div>
          </div>
        </div>

        <div class="mb-10">
          <h1
            class="text-lg font-semibold text-gray-600 pb-3 border-b border-solid border-gray-400"
          >LinkedIn</h1>
          <div class="lg:flex justify-between">
            <div class="text-lg text-gray-500 mt-3 pr-0 lg:pr-28">
              Sign in with Facebook and discover your trusted
              connections to people all over the world.
            </div>
            <div class="self-center mt-3 lg:mt-0">
              <button class="btn px-2" @click="disconnectlinkedin">Disconnect</button>
            </div>
          </div>
        </div>

        <div class="mt-16 mb-3 text-center">
          <button
            class="btn pill-button px-10 lg:px-20"
            @click="addsocialaccount"
          >Add more social accounts</button>
        </div>
      </div>

      <div class="mt-16 mb-16 text-center">
        <button class="btn pill-button pill-button--ideeza px-20" @click="savegeneralsetting">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import Projects from "~/data/UserSettingApi.json";
export default {
  name: "index",
  data: function() {
    return {
      Projectslanguage: Projects.General_language,
      Projectstimezone: Projects.General_timezone,
      Projectsgeneral: Projects.Setting_general,
      firstname: Projects.Setting_general[0].firstname,
      lastname: Projects.Setting_general[0].lastname,
      sex: Projects.Setting_general[0].sex,
      birthday: Projects.Setting_general[0].birthday,
      emailaddress: Projects.Setting_general[0].emailaddress,
      phonenumber: Projects.Setting_general[0].phonenumber,
      preferredlanguage: Projects.Setting_general[0].preferredlanguage,
      address: Projects.Setting_general[0].address,
      website: Projects.Setting_general[0].website,
      skills: Projects.Setting_general[0].skills,
      descibe: Projects.Setting_general[0].descibe,
      additional_school: Projects.Setting_general[0].additional_school,
      additional_work: Projects.Setting_general[0].additional_work,
      additional_timezone: Projects.Setting_general[0].additional_timezone,
      additional_language: Projects.Setting_general[0].additional_language,
      form: {
        first_name: null,
        last_name: null,
        gender: null,
        d_o_b: null,
        email: null,
        phone: null,
        lanuage: null,
        address: null,
        website: null,
        skills: null,
        describe: null
      }
    };
  },
  methods: {
    upload() {
      // alert("upload image!!!");
    },
    disconnectfacebook() {
      alert("disconnect_Facebook!!!");
    },
    disconnectlinkedin() {
      alert("disconnect_Linkedin!!!");
    },
    addsocialaccount() {
      alert("add_Social_Account!!!");
    },
    savegeneralsetting() {
      alert("All Setting Saved!!!");
    }
  }
};
</script>

<style scoped>
.settings-general {
  max-width: 700px;
}
.form-field {
  @apply py-4 border-b border-solid border-gray-300;
}
.form-field:last-child {
  @apply border-0;
}
.field-label {
  @apply w-56 text-gray-600 text-xl font-semibold;
}

@screen md {
  .form-field {
    @apply flex;
  }
}
select.field {
  min-width: 100%;
  max-width: 100%;
}
</style>
