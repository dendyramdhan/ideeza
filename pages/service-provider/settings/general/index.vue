<template>
    <div>
      <div class="md:m-8 lg:m-8 m-2">
        <div class="flex max-w-3xl">
          <h1 class="mr-auto text-xl font-semibold text-ideeza-black">Edit General Profile Informations</h1>
          <label class="font-semibold">*Required</label>
        </div>
        <hr class="max-w-3xl mt-2 mb-5">
        <div class="max-w-3xl bg-white shadow-lg">
          <div class="p-8">
            <div class="form-field">
              <div class="field-label">Company Name</div>
              <div class="field-input flex-grow">
                <input class="field p-1" name="name"  value="PCXL.L."/>
              </div>
            </div>
          <hr class="mb-2">
            <div class="form-field">
              <div class="field-label">Email Address</div>
              <div class="field-input flex-grow">
                <input class="field p-1" name="name"  value="john@example.com"/>
              </div>
            </div>
          <hr class="mb-2">
            <div class="form-field">
              <div class="field-label">Phone Number <font-awesome-icon class="ml-2 text-sm" :icon="['fas', 'lock']" /></div>
              <div class="field-input flex-grow">
                <input class="field p-1" name="name"  value="+123456789"/>
              </div>
            </div>
          <hr class="mb-2">
            <div class="form-field">
              <div class="field-label">Address <font-awesome-icon class="ml-2 text-sm" :icon="['fas', 'lock']" /></div>
              <div class="field-input flex-grow">
                <input class="field p-1" name="name"  value="abc 111 def .klm"/>
              </div>
            </div>
          <hr class="mb-2">
            <div class="form-field">
              <div class="field-label">Website</div>
              <div class="field-input flex-grow">
                <input class="field p-1" name="name"  value="www.pcbix.com"/>
              </div>
            </div>
          <hr class="mb-2">
          <div class="form-field">
            <div class="field-label">Preferred Language</div>
            <div class="field-input flex-grow">
              <select class="field h-10 w-full"  v-model="preferredlanguage" >
                <option value="male">English</option>
              </select>
            </div>
          </div>
          <hr class="mb-2">
          <div class="form-field textarea">
            <div class="field-label">Describe Your Company</div>
            <div class="field-input flex-grow">
              <textarea class="field h-40" value="">lorem adipisicing elit. Ea, eveniet molestias amet, voluptates nemo reprehenderit officiis, nostrum suscipit velit praesentium nam quos. Quisquam eos velit ipsa unde maiores tempore iure.</textarea>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div class="md:m-8 lg:m-8 m-2">
        <div class="flex max-w-3xl">
          <h1 class="mr-auto text-xl font-semibold text-ideeza-black">Business Information</h1>
          <label class="font-semibold">*Required</label>
        </div>
        <hr class="max-w-3xl my-2">
        <div class="max-w-3xl bg-white shadow-lg">
          <div class="p-8">
            <div class="form-field">
              <div class="field-label">Line of bussiness</div>
              <div class="field-input flex-grow">
                <select class="field h-10 w-full" >
                  <option>Electronics,Cover</option>
                </select>
              </div>
            </div>
          <hr class="mb-2">
          <div class="form-field">
              <div class="field-label">Expertise</div>
              <div class="field-input flex-grow">
                <select class="field h-10 w-full" >
                  <option>Fabrication,Assembly,Dealer,Tester,CNC Plastic</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="md:m-8 lg:m-8 m-2">
        <div class="flex max-w-3xl">
          <h1 class="mr-auto text-xl font-semibold text-ideeza-black">Profile Photo</h1>
          <label class="font-semibold">*Required</label>
        </div>
        <hr class="max-w-3xl my-2">
        <div class="max-w-3xl bg-white shadow-lg">
          <div class="p-8">
            <div class="lg:flex md:flex">
              <img src="https://i.pravatar.cc/400?img=13" alt="Image Here" class="lg:w-40 lg:h-40 md:w-40 md:h-40 mb-2">
              <div class="flex-col lg:ml-5 md:ml-5">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam hic placeat inventore quidem nihil qui quam non, reprehenderit nam, cupiditate ea amet voluptatum similique expedita, quae aut? Fuga, assumenda aperiam.</p>
                <button class="hidden lg:block md:block bg-gray-300 rounded-full lg:px-12 md:px-12 py-1 text-ideeza-gray border border-gray-400 mt-5 font-semibold text-sm">Upload a file from your computer</button>
                <div class="flex justify-center block lg:hidden md:hidden">
                  <button class="bg-gray-300 rounded-full lg:px-12 md:px-12 p-2 text-ideeza-gray border border-gray-400 mt-5 font-semibold text-sm">Upload a file from your computer</button>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>

        <div class="md:m-8 lg:m-8 m-2">
        <div class="flex max-w-3xl">
          <h1 class="mr-auto text-xl font-semibold text-ideeza-black">Social Media Accounts</h1>

        </div>
        <hr class="max-w-3xl my-2">
        <div class="max-w-3xl bg-white shadow-lg">
          <div class="p-8">
            <h1 class="font-semibold mt-2">Facebook</h1>
            <hr class="mb-2 mt-2">
            <div class="lg:flex md:flex">
                <div><p class="mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.reprehenderit nam, cupiditate ea amet voluptatum similique expedita, quae aut? Fuga, assumenda aperiam.</p>
                </div>
                <div class="flex justify-end lg:block md:block"><button class="ml-5 border border-gray-400 px-3 py-1 font-semibold text-gray-500 w-32">Disconnect</button></div>
            </div>

            <h1 class="font-semibold mt-2">Linkedin</h1>
            <hr class="mb-2 mt-2">
            <div class="lg:flex md:flex">
                <div><p class="mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.reprehenderit nam, cupiditate ea amet voluptatum similique expedita, quae aut? Fuga, assumenda aperiam.</p>
                </div>
                <div class="flex justify-end lg:block md:block"><button class="ml-5 border border-gray-400 px-3 py-1 font-semibold text-gray-500 w-32">Connect</button></div>

            </div>

            <h1 class="font-semibold mt-2">Google</h1>
            <hr class="mb-2 mt-2">
            <div class="lg:flex md:flex">
                <div><p class="mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.reprehenderit nam, cupiditate ea amet voluptatum similique expedita, quae aut? Fuga, assumenda aperiam.</p>
                </div>
                <div class="flex justify-end lg:block md:block"><button class="ml-5 border border-gray-400 px-3 py-1 font-semibold text-gray-500 w-32">Disconnect</button></div>
            </div>
            <div class="flex justify-center">
              <button class="rounded-full lg:px-12 md:px-12 p-2 text-ideeza-gray border border-gray-400 mt-5 font-semibold">Add more social accounts</button>
          </div>
          </div>
        </div>
      </div>
      <div class="md:m-8 lg:m-8 m-2 max-w-3xl">
        <div class="flex justify-center">
          <button class="bg-ideeza p-3 rounded-full text-white lg:w-48 md:w-48 w-24 font-semibold">Save</button>
        </div>
      </div>
</div>
</template>
<script>
export default {
  layout:'service-provider-setting'
}
</script>
<style scoped>
.form-field.textarea{
  @apply py-2 border-b border-solid border-gray-300 items-start;
}
.form-field{
    @apply py-2 border-b border-solid border-gray-300 items-center;
  }
  .form-field:last-child{
    @apply border-0;
  }
  .field-label{
    @apply w-56 text-gray-600 text-base font-semibold;
  }

  @screen md{
    .form-field{
      @apply flex;
    }
  }
  select.w-full{
    width: 100% !important;
    max-width: 100% !important;
  }
</style>
