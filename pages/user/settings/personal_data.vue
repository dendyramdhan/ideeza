<template>
   <div class="p-4">
     <h2 class="text-4xl font-bold text-gray-800 mt-5">See and manage the data in your IDEEZA's account</h2>
     <p class="py-3 text-gray-700">Your data includes the things you do, like searches, and the things you create, like new products.</p>

     <div class="flex mt-5">
       <div class="w-2/12">
         <img src="https://randomuser.me/api/portraits/men/17.jpg">
       </div>
       <div class="pl-5 w-3/12">
         <h2 class="text-2xl font-bold text-gray-800">Thomas Hellies</h2>
         <p class="py-3 text-gray-700">thomashellies@gmail.com</p>
         <p class="py-3 text-gray-700">Last seen 20mins ago</p>
         <div class="flex">
           <div class="w-10 h-10 text-center rounded-full bg-gray-700 mr-3">
             <font-awesome-icon class="text-white text-4xl mt-2" :icon="['fab', 'facebook-f']"></font-awesome-icon>
           </div>
           <div class="w-12 h-12">
             <font-awesome-icon class="text-gray-700 text-4xl mt-2" :icon="['fab', 'linkedin-in']"></font-awesome-icon>
           </div>
         </div>
       </div>
       <div class=" pl-5 w-7/12">
         <div class="bg-white rounded shadow p-4">
           <h2 class="text-2xl font-bold text-gray-800">About me</h2>
         <p class="py-3 text-gray-700">Hi, I'm Thomas. I live in New York and my main job here is to help people in development software. I have 2 years of experience in this field, so in my opinion, I have the ability to help anyone in any situation when it comes to development</p>
         </div>
       </div>
     </div>

     <div class="flex mt-10">
      <div class="flex-1">
        <table>
          <tr>
            <td class="border-b py-2 px-2">Gender</td>
            <td class="border-b py-2 px-2">Male</td>
          </tr>
          <tr>
            <td class="border-b py-2 px-2">Birth date</td>
            <td class="border-b py-2 px-2">26th December, 2002</td>
          </tr>
          <tr>
            <td class="border-b py-2 px-2">Address</td>
            <td class="border-b py-2 px-2">Vazha-Pshavela avenue, block VII, 21</td>
          </tr>
          <tr>
            <td class="border-b py-2 px-2">Phone number</td>
            <td class="border-b py-2 px-2">+995 555 512 321</td>
          </tr>
          <tr>
            <td class="border-b py-2 px-2">Timezone</td>
            <td class="border-b py-2 px-2">GMT +4</td>
          </tr>
          <tr>
            <td class="border-b py-2 px-2">Languages</td>
            <td class="border-b py-2 px-2">English (UK) (preffered), Hebrew</td>
          </tr>
          <tr>
            <td class="border-b py-2 px-2">Preferred language</td>
            <td class="border-b py-2 px-2">English (UK)</td>
          </tr>
          <tr>
            <td class="border-b py-2 px-2">Website</td>
            <td class="border-b py-2 px-2">Something.com</td>
          </tr>
          <tr>
            <td class="border-b py-2 px-2">Skills</td>
            <td class="border-b py-2 px-2">Hiking, Web development, House cleaning</td>
          </tr>
          <tr>
            <td class="border-b py-2 px-2">School</td>
            <td class="border-b py-2 px-2">Main school #21</td>
          </tr>
          <tr>
            <td class="border-b py-2 px-2">Work</td>
            <td class="border-b py-2 px-2">Azry corp. - Senior developer</td>
          </tr>
          <tr>
            <td class="border-b py-2 px-2">Credit/Debit card</td>
            <td class="border-b py-2 px-2"><img src="~/static/images/cdbd.png" class="inline-block mr-3"> **** **** **** **** 2321</td>
          </tr>
          
        </table>
      </div>
      <div class="flex-1 pl-3">
        <table>
          <tr>
            <td class="border-b py-2 px-2">Paypal account</td>
            <td class="border-b py-2 px-2">thomashellies@gmail.com</td>
          </tr>
          <tr>
            <td class="border-b py-2 px-2">Ideeza account number</td>
            <td class="border-b py-2 px-2">#381203841</td>
          </tr>
          <tr>
            <td class="border-b py-2 px-2">Log in history</td>
            <td class="border-b py-2 px-2 text-ideeza">Show</td>
          </tr>
          <tr>
            <td class="border-b py-2 px-2">Reviews</td>
            <td class="border-b py-2 px-2 text-ideeza">Show</td>
          </tr>
          <tr>
            <td class="border-b py-2 px-2">Rating</td>
            <td class="border-b py-2 px-2">4.8/5</td>
          </tr>
          <tr>
            <td class="border-b py-2 px-2">Friends</td>
            <td class="border-b py-2 px-2 text-ideeza">Show</td>
          </tr>
          <tr>
            <td class="border-b py-2 px-2">Messages</td>
            <td class="border-b py-2 px-2 text-ideeza">Show shared files</td>
          </tr>
          <tr>
            <td class="border-b py-2 px-2">Blog articles</td>
            <td class="border-b py-2 px-2 text-ideeza">Show</td>
          </tr>
          <tr>
            <td class="border-b py-2 px-2">Product/project blueprint</td>
            <td class="border-b py-2 px-2 text-ideeza">Show</td>
          </tr>
          <tr>
            <td class="border-b py-2 px-2">Tasklist</td>
            <td class="border-b py-2 px-2 text-ideeza">Show</td>
          </tr>
          <tr>
            <td class="border-b py-2 px-2">Track order</td>
            <td class="border-b py-2 px-2 text-ideeza">2 active products</td>
          </tr>
           
        </table>
      </div>
     </div>
   </div>
</template>

<script>
import Projects from "~/data/TechnicianSettingApi.json";
import apiService from "~/apiService/have_token.js";

export default { 
};
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
    @apply w-56 text-gray-600 text-xl font-semibold;
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
