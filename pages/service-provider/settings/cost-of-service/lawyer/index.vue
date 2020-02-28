<template>
    <div class="container lg m-auto my-20 px-4">
      <div class="flex">
          <div class="w-4/5">
            
            
            <div class="flex mt-10 border-gray-300 border-b pb-10">
              <div class="flex-1 px-3">
                <button class="block bg-white text-xl font-bold border border-gray-300 text-gray-900 py-5 w-full">
                  <img src="~static/images/power.png" class="inline-block mx-3">
                Electronics</button>
              </div>
              <div class="flex-1 px-3 ">
                <button class="block bg-white text-xl font-bold border border-gray-300 text-gray-900 py-5 w-full">
                  <img src="~static/images/cover.png" class="inline-block mx-3">Cover</button>
              </div>
              <div class="flex-1 px-3 ">
                <button class="block bg-white text-xl font-bold border border-gray-300 text-gray-900 py-5 w-full">
                  <img src="~static/images/law.png" class="inline-block mx-3">Lawyer</button>
              </div>
            </div>

              <div class="bg-white shadow-lg p-5 mt-10">
                <div class="relative">
                  <select class="block appearance-none w-full bg-white hover:border-gray-500 px-4 py-3 pr-8  shadow leading-tight focus:outline-none ">
                      <option>Patent, Trademark</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
              </div>


              <div class="bg-white shadow-lg p-5 mt-10">
                <h2 class="text-2xl font-bold text-gray-700">Patent</h2>
                <table class="w-full text-gray-ideeza">
                   
                  <tbody>


                    <tr>
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Search</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="relative">
                          <input class="border border-gray-800 appearance-none border w-full py-3 pl-6 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="">
                          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 ">
                            <font-awesome-icon class="text-xl text-gray-500" :icon="['fas', 'dollar-sign']" />
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Provisional</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="relative">
                          <input class="border border-gray-800 appearance-none border w-full py-3 pl-6 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="">
                          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 ">
                            <font-awesome-icon class="text-xl text-gray-500" :icon="['fas', 'dollar-sign']" />
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Complete</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="relative">
                          <input class="border border-gray-800 appearance-none border w-full py-3 pl-6 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="">
                          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 ">
                            <font-awesome-icon class="text-xl text-gray-500" :icon="['fas', 'dollar-sign']" />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">PCT</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="relative">
                          <input class="border border-gray-800 appearance-none border w-full py-3 pl-6 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="">
                          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 ">
                            <font-awesome-icon class="text-xl text-gray-500" :icon="['fas', 'dollar-sign']" />
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Conventional application</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="relative">
                          <input class="border border-gray-800 appearance-none border w-full py-3 pl-6 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="">
                          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 ">
                            <font-awesome-icon class="text-xl text-gray-500" :icon="['fas', 'dollar-sign']" />
                          </div>
                        </div>
                      </td>
                    </tr>
                     
                     
                  </tbody>
                </table>

                 
         </div>
         <div class="bg-white shadow-lg p-5 mt-10">
          <h2 class="text-2xl font-bold text-gray-700">Patent</h2>
          <table>
            <tr>
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Trademark services</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="relative">
                          <input class="border border-gray-800 appearance-none border w-full py-3 pl-6 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="">
                          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 ">
                            <font-awesome-icon class="text-xl text-gray-500" :icon="['fas', 'dollar-sign']" />
                          </div>
                        </div>
                      </td>
                    </tr>
          </table>
         </div>

         <div class="text-center my-4">
            <button class="bg-ideeza text-xl border font-semibold text-white py-2 px-24 rounded-full rounded-full shadow-lg mt-5">Save</button>   
          </div>


      </div>
   </div>
  </div>
</template>
<script>


import headercomponent from '~/layouts/headercomponent/';
export default {
   components:{
    headercomponent
   }
};
</script>
<style>
body{
  background:#f5f5f5;
}
.form-text-color{
  color: #174a84;
}
.form-border-color{
  border-color: #174a84;  
}
.text-gray-ideeza{
  color:#666666;
}
.bg-gray-ideeza{
  background:#f2f2f2;
}
.toggle__dot {
  top: -.25rem;
  left: -.25rem;
  transition: all 0.3s ease-in-out;
}

input:checked ~ .toggle__dot {
  transform: translateX(100%);
  background-color: #ff00c7;
}
select{
  max-width: 100%;
  width: 100%;
}
</style>