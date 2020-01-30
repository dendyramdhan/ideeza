<template>
   <div class="shadow-lg rounded-lg p-5 w-full md:w-9/12 m-auto border border-ideeza my-5">
    <div class="w-full">
      <div class="flex w-full">
        <div class="text-gray-900 text-3xl font-bold w-10/12">New deal</div>
        <div class="text-right w-2/12">
          <button class="text-lg text-gray-700">X</button>
        </div>
      </div>
        <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
          <div class="w-full">
            <div class="mb-4 flex mt-4">
              <div class="w-2/12 pt-3 pr-3">
                <label class="block text-md text-right  mb-2" for="username">
                  Your Name <span class="text-red-600 ">*</span>
                </label>
              </div>
              <div class="w-10/12">
                <input class="border  appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Deal name">
              </div>
            </div>

            <div class="mb-4 flex mt-4">
              <div class="w-2/12 pt-3 pr-3">
                <label class="block text-md text-right  mb-2" for="username">
                  Owner <span class="text-red-600 ">*</span>
                </label>
              </div>
              <div class="w-10/12">
                 <div class="relative">
                  <select class="block text-lg appearance-none w-full bg-white border border-gray-400 rounded px-4 py-3 pr-8 leading-tight focus:outline-none ">
                  <option>JP DIEL </option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-ideeza">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-4 flex mt-4">
              <div class="w-2/12 pt-3 pr-3">
                <label class="block text-md text-right  mb-2" for="username">
                  Value <span class="text-red-600 ">*</span>
                </label>
              </div>
              <div class="w-10/12">
                <input class="border  appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Deal value">
                <p class="text-gray-700 mt-3">You don't have any products currently. Configure them <a href="" class="text-ideeza">here</a>.</p>
              </div>
            </div>
            
            <div class="mb-4 flex mt-4">
              <div class="w-2/12 pt-3 pr-3">
                <label class="block text-md text-right  mb-2" for="username">
                  Probability <span class="text-red-600 ">*</span>
                </label>
              </div>
              <div class="w-10/12 relative">
                <input class="border  appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="20">
                <span class="absolute right-0 top-0 border-l w-12 h-12 text-center pt-3 rounded-sm">%</span>
              </div>
            </div>

            <div class="mb-4 flex mt-4">
              <div class="w-2/12 pt-3 pr-3">
                <label class="block text-md text-right  mb-2" for="username">
                  Milestone <span class="text-red-600 ">*</span>
                </label>
              </div>
              <div class="w-10/12">
                  <div class="relative">
                    <select class="block text-lg appearance-none w-full bg-white border border-gray-400 rounded px-4 py-3 pr-8 leading-tight focus:outline-none ">
                    <option>New </option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-ideeza">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-4 flex mt-4">
              <div class="w-2/12 pt-3 pr-3">
                <label class="block text-md text-right  mb-2" for="username">
                  Close date 
                </label>
              </div>
              <div class="w-10/12">
                <input class="border  appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="date" placeholder="Select...">
              </div>
            </div>

            <div class="mb-4 flex mt-4">
              <div class="w-2/12 pt-3 pr-3">
                <label class="block text-md text-right  mb-2" for="username">
                  Deal source <span class="text-red-600 ">*</span>
                </label>
              </div>
              <div class="w-10/12">
                <div class="relative">
                    <select class="block text-lg appearance-none w-full bg-white border border-gray-400 rounded px-4 py-3 pr-8 leading-tight focus:outline-none ">
                    <option>Select... </option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-ideeza">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-4 flex mt-4">
              <div class="w-2/12 pt-3 pr-3">
                <label class="block text-md text-right  mb-2" for="username">
                  Type <span class="text-red-600 ">*</span>
                </label>
              </div>
              <div class="w-10/12">
                 <span class="inline-block w-12 h-12 bg-pink-300 rounded-sm"></span>
                 <span class="inline-block w-12 h-12 bg-gray-400 rounded-sm"></span>
                 <span class="inline-block w-12 h-12 bg-indigo-300 rounded-sm"></span>
                 <span class="inline-block w-12 h-12 bg-green-200 rounded-sm"></span>
                 <span class="inline-block w-12 h-12 bg-yellow-200 rounded-sm"></span>
                 <span class="inline-block w-12 h-12 bg-orange-300 rounded-sm"></span>
                 <span class="inline-block w-12 h-12 bg-red-300 rounded-sm"></span>
                 <span class="inline-block w-12 h-12 bg-red-200  rounded-sm"></span>
                 <span class="inline-block w-12 h-12 bg-gray-500 rounded-sm"></span>
              </div>
            </div>

            <div class="mb-4 flex mt-4">
              <div class="w-2/12 pt-3 pr-3">
                <label class="block text-md text-right  mb-2" for="username">
                  Related to <span class="text-red-600 ">*</span>
                </label>
              </div>
              <div class="w-10/12">
                <input class="border  appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Contact name">
              </div>
            </div>

            <div class="mb-4 flex mt-4">
              <div class="w-2/12 pt-3 pr-3">
                <label class="block text-md text-right  mb-2" for="username">
                  Tags <span class="text-red-600 ">*</span>
                </label>
              </div>
              <div class="w-10/12">
                <input class="border  appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Separate tags with comma">
              </div>
            </div>

            <div class="mb-4 flex mt-4">
              <div class="w-2/12 pt-3 pr-3">
                <label class="block text-md text-right  mb-2" for="username">
                  Description <span class="text-red-600 ">*</span>
                </label>
              </div>
              <div class="w-10/12">
                <textarea class="border  appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="5" type="text" placeholder="Add description"></textarea>
              </div>
            </div>    
          </div>

          <div class="text-right">
            <button class="bg-pink-CM hover:bg-pink-400 text-white font-bold py-4 px-12 rounded-sm shadow-lg mt-5">Save</button> 
          </div>
      </form>
    </div>
</div>


</div>
</template>

<script>
 

 export default {
   
}
</script>
<style>
  select{
      max-width: none;
}
</style>