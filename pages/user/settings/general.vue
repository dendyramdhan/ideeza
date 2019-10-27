<template>
  <div class="settings-general mx-auto">
    <!---->
    <!--Profile Information-->
    <!---->
    <div class="md:flex justify-between items-center pb-3 border-b border-solid border-gray-400 p-5 lg:p-0">
      <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Edit Profile Information</h1>
      <span class="text-gray-500 text-sm lg:text-2xl">* Required</span>
    </div>

    <!--Form Container-->
    <div class="my-5 p-5 bg-white shadow-md">

      <!--Form Fields-->
      <div class="form-field ">
        <div class="field-label" >First Name</div>
        <div class="field-input flex-grow">
          <input class="field h-10" name="first-name" />
        </div>
      </div>

      <div class="form-field ">
        <div class="field-label" >
          Last Name
          <font-awesome-icon class="ml-1 h-4 inline" :icon="['fas', 'lock']"/>
        </div>
        <div class="field-input flex-grow">
          <input class="field h-10"  />
        </div>
      </div>

      <div class="form-field ">
        <div class="field-label" >I Am</div>
        <div class="field-input flex-grow">
          <select class="field h-10" >
            <option value="male">Male</option>
            <option value="female">FeMale</option>
          </select>
        </div>
      </div>

      <div class="form-field ">
        <div class="field-label" >
          Birth Date
          <font-awesome-icon class="ml-1 h-4 inline" :icon="['fas', 'lock']"/>
        </div>
        <div class="field-input flex-grow">
          <input class="field h-10"  />
        </div>
      </div>

      <div class="form-field ">
        <div class="field-label" >Email Address <font-awesome-icon class="ml-1 h-4 inline" :icon="['fas', 'lock']"/></div>
        <div class="field-input flex-grow">
          <input class="field h-10"  />
        </div>
      </div>

      <div class="form-field ">
        <div class="field-label" >Phone Number <font-awesome-icon class="ml-1 h-4 inline" :icon="['fas', 'lock']"/></div>
        <div class="field-input flex-grow">
          <input class="field h-10" />
        </div>
      </div>

      <div class="form-field ">
        <div class="field-label" >Preferred Language</div>
        <div class="field-input flex-grow">
          <select class="field h-10" >
            <option value="male">English</option>
          </select>
        </div>
      </div>

      <div class="form-field ">
        <div class="field-label" >Address <font-awesome-icon class="ml-1 h-4 inline" :icon="['fas', 'lock']"/></div>
        <div class="field-input flex-grow">
          <input class="field h-10" />
        </div>
      </div>

      <div class="form-field ">
        <div class="field-label" >Website</div>
        <div class="field-input flex-grow">
          <input class="field h-10" />
        </div>
      </div>

      <div class="form-field ">
        <div class="field-label" >Skills</div>
        <div class="field-input flex-grow">
          <textarea class="field h-20"  ></textarea>
        </div>
      </div>

      <div class="form-field ">
        <div class="field-label" >Describe Yourself</div>
        <div class="field-input flex-grow">
          <textarea class="field h-40"  ></textarea>
        </div>
      </div>

    </div>



    <!---->
    <!--Additional Information-->
    <!---->
    <div class="md:flex justify-between items-center pb-3 mt-20 border-b border-solid border-gray-400 p-5 lg:p-0">
      <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Additional Information</h1>
      <span class="text-gray-500 text-sm lg:text-2xl">* Required</span>
    </div>

    <!--Form Container-->
    <div class="my-5 p-5 bg-white shadow-md">

      <!--Form Fields-->
      <div class="form-field ">
        <div class="field-label" >School</div>
        <div class="field-input flex-grow">
          <input class="field h-10"  />
        </div>
      </div>

      <div class="form-field ">
        <div class="field-label" >
          Work
        </div>
        <div class="field-input flex-grow">
          <input class="field h-10"  />
        </div>
      </div>

      <div class="form-field ">
        <div class="field-label" >Timezone</div>
        <div class="field-input flex-grow">
          <select class="field h-10" >
            <option value="male">GMT +01:00</option>
          </select>
        </div>
      </div>

      <div class="form-field ">
        <div class="field-label" >Languages</div>
        <div class="field-input flex-grow">
          <input class="field h-10" />
        </div>
      </div>



    </div>


    <!---->
    <!--Profile Phote-->
    <!---->
    <div class="md:flex justify-between items-center pb-3 mt-20 border-b border-solid border-gray-400 p-5 lg:p-0">
      <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Profile Photo</h1>
      <span class="text-gray-500 text-sm lg:text-2xl">* Required</span>
    </div>

    <!--Form Container-->
    <div class="my-5 p-5 bg-white shadow-md">

      <!--Photo Field-->
      <div class="md:flex ">
        <div class="w-full h-64 mb-5 md:mb-0 md:h-48 md:w-48 md:w-max-content md:mr-6 flex-shrink">
          <img class="object-cover object-center h-full mx-auto" src="https://randomuser.me/api/portraits/men/11.jpg">
        </div>
        <div class="flex-grow">
          <div class="text-gray-500 text-sm" >
            First impressions count, we all know this. And we only get one chance to make a good first impression. Perhaps in person, your charm and use of language can camouflage your faults, but in the online world. your first impression is made with your face – your profile picture.
          </div>
          <div class="mt-10">
            <button class="btn pill-button w-full">Upload a file from your computer</button>
          </div>
        </div>
      </div>
  </div>

    <!---->
    <!--Social Container-->
    <!---->
    <div class="md:flex justify-between items-center pb-3 mt-20 border-b border-solid border-gray-400 p-5 lg:p-0">
      <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Social Media Accounts</h1>
    </div>

    <!--Container-->
    <div class="my-5 p-5 bg-white shadow-md">

      <div class="mb-10">
        <h1 class="text-lg font-semibold text-gray-600 pb-3 border-b border-solid border-gray-400">Facebook</h1>
        <div class="lg:flex justify-between">
          <div class="text-lg  text-gray-500 mt-3 pr-0 lg:pr-28">
            Sign in with Facebook and discover your trusted
            connections to people all over the world.
          </div>
          <div class="self-center mt-3 lg:mt-0">
            <button class="btn px-2">Disconnect</button>
          </div>
        </div>
      </div>

      <div class="mb-10">
        <h1 class="text-lg font-semibold text-gray-600 pb-3 border-b border-solid border-gray-400">LinkedIn</h1>
        <div class="lg:flex justify-between">
          <div class="text-lg  text-gray-500 mt-3 pr-0 lg:pr-28">
            Sign in with Facebook and discover your trusted
            connections to people all over the world.
          </div>
          <div class="self-center mt-3 lg:mt-0">
            <button class="btn px-2">Disconnect</button>
          </div>
        </div>
      </div>

      <div class="mt-16 mb-3 text-center">
        <button class="btn pill-button px-10 lg:px-20">Add more social accounts</button>
      </div>
    </div>


    <div class="mt-16 mb-16 text-center">
      <button class="btn pill-button pill-button--ideeza px-20">Save</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index",
      data: function () {
        return {
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
        }
      }
    }
</script>

<style scoped>
  .settings-general{
    max-width: 700px;
  }
  .form-field{
    @apply py-4 border-b border-solid border-gray-300;
  }
  .form-field:last-child{
    @apply border-0;
  }
  .field-label{
    @apply w-56 text-gray-600 text-xl font-semibold
  }

  @screen md{
    .form-field{
      @apply flex;
    }
  }
</style>
