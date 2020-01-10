<template>
  <div class="ml-20 mt-10">
    <div class="md:flex">
      <div class="flex-1 mr-10">
        <div>
          <h1 class="text-xl font-semibold text-ideeza-black mb-3">Messages</h1>
          <hr class="max-w-sm mb-5">
        </div>
        <div class="max-w-sm bg-white shadow-md mb-3">
          <div class="p-5">
            <h1 class="text-ideeza-blue-gray">Recieves Messages to:</h1>
            <hr class="max-w-sm mt-2 mb-2">
            <check-box>Email</check-box>
            <check-box>Notifications To Mobile Devices</check-box>
            <check-box>Text Messages</check-box>
          </div>
        </div>
        <div>
          <h1 class="text-xl font-semibold text-ideeza-black mb-3">Remainders</h1>
          <hr class="max-w-sm mb-5">
        </div>
        <div class="max-w-sm bg-white shadow-md mb-3">
          <div class="p-5">
            <h1 class="text-ideeza-blue-gray">Recieve remainders,request to write a review.and other remainders related
              to your activities on ideeza.</h1>
            <hr class="max-w-sm mt-2 mb-2">
            <check-box>Email</check-box>
            <check-box>Notifications To Mobile Devices</check-box>
            <check-box>Text Messages</check-box>
          </div>
        </div>
        <div>
          <h1 class="text-xl font-semibold text-ideeza-black mb-3">Account Support</h1>
          <hr class="max-w-sm mb-5">
        </div>
        <div class="max-w-sm bg-white shadow-md">
          <div class="p-5">
            <h1 class="text-ideeza-blue-gray">We may need to send you messages regarding your account ,legal
              notifications,security and privacy matters and customer support request</h1>
            <hr class="max-w-sm mt-2 mb-2">
            <check-box>Email</check-box>
            <check-box>Notifications To Mobile Devices</check-box>
            <check-box>Text Messages</check-box>
          </div>
        </div>
      </div>
      <div class="flex-1 mr-10">
        <div>
          <h1 class="text-xl font-semibold text-ideeza-black mb-3">Contact Information</h1>
          <hr class="max-w-sm mb-5">
        </div>
        <div class="max-w-sm bg-white shadow-md mb-3">
          <div class="p-5">
            <h1 class="text-ideeza-blue-gray">This Information Can Be Edited From Your Profile Page
              <span class="text-ideeza">Edit Profile</span>
            </h1>
            <hr class="max-w-sm mt-2 mb-2">
            <div class="flex">
              <label class="w-1/2 text-ideeza-black font-semibold text-sm">Email:</label>
              <label class="text-gray-800 text-base">mirayman@gmail.com</label><br>
            </div>
            <div class="flex">
              <label class="w-1/2 text-ideeza-black font-semibold text-sm">Phone Number:</label>
              <label class="text-base text-gray-800">+123*****786</label>
            </div>
          </div>
        </div>
        <div>
          <h1 class="text-xl font-semibold text-ideeza-black mb-3">Text Messages</h1>
          <hr class="max-w-sm mb-5">
        </div>
        <div class="max-w-sm bg-white shadow-md mb-3">
          <div class="flex p-5">
            <h1 class="text-ideeza-blue-gray w-1/2">Recieve SMS notifications to:
            </h1>
            <select class="border">
              <option>+123*****786</option>
            </select>
          </div>
        </div>
        <div>
          <h1 class="text-xl font-semibold text-ideeza-black mb-3">Policy and Community</h1>
          <hr class="max-w-sm mb-5">
        </div>
        <div class="max-w-sm bg-white shadow-md">
          <div class="p-5">
            <h1 class="text-ideeza-blue-gray">Recieve updates on regulations and stay informed about advocacy efforts to
              create responsible laws on ideeza.
            </h1>
            <hr class="max-w-sm mt-2 mb-2">
            <check-box>Email</check-box>
            <check-box>Notifications To Mobile Devices</check-box>
            <check-box>Text Messages</check-box>
          </div>
        </div>
      </div>
      <div class="">
        &nbsp;
      </div>
    </div>
    <div class="flex justify-center mb-10">
      <button class="bg-ideeza p-3 rounded-full text-white lg:w-48 mr-20 md:w-48 w-24 font-semibold">Save</button>
    </div>
    <!-- <div class="md:flex">
      <div class="md:mr-10">
        <div>
          <h1 class="text-xl font-semibold text-ideeza-black mb-3">Messages</h1>
          <hr class="max-w-sm mb-5">
        </div>
        <div class="max-w-sm bg-white shadow-md">
          <div class="p-5">
            <h1 class="text-ideeza-blue-gray">Recieves Messages to:</h1>
            <hr class="max-w-sm mt-2 mb-2">
            <input type="checkbox" checked>
            <label class="text-ideeza-black font-semibold text-sm">Email</label><br>
            <input type="checkbox" checked>
            <label class="text-ideeza-black font-semibold text-sm">Notifications To Mobile Devices</label><br>
            <input type="checkbox" checked>
            <label class="text-ideeza-black font-semibold text-sm">Text Messages</label>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <div>
          <h1 class="text-xl font-semibold text-ideeza-black mb-3">Contact Information</h1>
          <hr class="max-w-sm mb-5">
        </div>
        <div class="max-w-sm bg-white shadow-md">
          <div class="p-5">
            <h1 class="text-ideeza-blue-gray">This Information Can Be Edited From Your Profile Page
              <span class="text-ideeza">Edit Profile</span>
            </h1>
            <hr class="max-w-sm mt-2 mb-2">
            <div class="flex">
              <label class="w-1/2 text-ideeza-black font-semibold text-sm">Email:</label>
              <label class="text-gray-800 text-base">mirayman@gmail.com</label><br>
            </div>
            <div class="flex">
              <label class="w-1/2 text-ideeza-black font-semibold text-sm">Phone Number:</label>
              <label class="text-base text-gray-800">+123*****786</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br><br>
    <div class="md:flex">
      <div class="md:mr-10">
        <div>
          <h1 class="text-xl font-semibold text-ideeza-black mb-3">Remainders</h1>
          <hr class="max-w-sm mb-5">
        </div>
        <div class="max-w-sm bg-white shadow-md">
          <div class="p-5">
            <h1 class="text-ideeza-blue-gray">Recieve remainders,request to write a review.and other remainders related
              to your activities on ideeza.</h1>
            <hr class="max-w-sm mt-2 mb-2">
            <input type="checkbox" checked>
            <label class="text-ideeza-black font-semibold text-sm">Email</label><br>
            <input type="checkbox" checked>
            <label class="text-ideeza-black font-semibold text-sm">Notifications To Mobile Devices</label><br>
            <input type="checkbox">
            <label class="text-ideeza-black font-semibold text-sm">Text Messages</label>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <div>
          <h1 class="text-xl font-semibold text-ideeza-black mb-3">Text Messages</h1>
          <hr class="max-w-sm mb-5">
        </div>
        <div class="max-w-sm bg-white shadow-md">
          <div class="flex p-5">
            <h1 class="text-ideeza-blue-gray w-1/2">Recieve SMS notifications to:
            </h1>
            <select class="border">
              <option>+123*****786</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <br><br>
    <div class="lg:flex md:flex">
      <div class="mx-5">
        <div>
          <h1 class="text-xl font-semibold text-ideeza-black mb-3">Account Support</h1>
          <hr class="max-w-sm mb-5">
        </div>
        <div class="max-w-sm bg-white shadow-md">
          <div class="p-5">
            <h1 class="text-ideeza-blue-gray">We may need to send you messages regarding your account ,legal
              notifications,security and privacy matters and customer support request</h1>
            <hr class="max-w-sm mt-2 mb-2">
            <input type="checkbox" checked>
            <label class="text-ideeza-black font-semibold text-sm">Email</label><br>
            <input type="checkbox" checked>
            <label class="text-ideeza-black font-semibold text-sm">Notifications To Mobile Devices</label><br>
            <input type="checkbox">
            <label class="text-ideeza-black font-semibold text-sm">Text Messages</label>
          </div>
        </div>
      </div>
      <br class="lg:hidden md:hidden">
      <div class="mx-5">
        <div>
          <h1 class="text-xl font-semibold text-ideeza-black mb-3">Policy and Community</h1>
          <hr class="max-w-sm mb-5">
        </div>
        <div class="max-w-sm bg-white shadow-md">
          <div class="p-5">
            <h1 class="text-ideeza-blue-gray">Recieve updates on regulations and stay informed about advocacy efforts to
              create responsible laws on ideeza.
            </h1>
            <hr class="max-w-sm mt-2 mb-2">
            <input type="checkbox" checked>
            <label class="text-ideeza-gray-500 font-semibold text-sm">Email</label><br>
            <input type="checkbox" checked>
            <label class="text-ideeza-black font-semibold text-sm">Notifications To Mobile Devices</label><br>
            <input type="checkbox">
            <label class="text-ideeza-black font-semibold text-sm">Text Messages</label>
          </div>
        </div>
      </div>
    </div>
    <br><br>
    <div class="flex justify-center">
      <button class="bg-ideeza p-3 rounded-full text-white lg:w-48 md:w-48 w-24 font-semibold">Save</button>
    </div>
    <br> -->
  </div>
</template>
<script>
import CheckBox from "~/components/form/checkbox-light.vue"
  export default {
    layout: 'service-provider',
    components: {
      CheckBox
    }
  }

</script>
