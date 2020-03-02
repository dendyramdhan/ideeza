<template>
  <div class="">
  <div class="bg-white shadow-md p-5 w-full">
    <div>
      <h2 class="text-2xl font-bold text-gray-700">Choose material type</h2>
      <div class="flex mt-5 border-b py-3 border-gray-300">
        <div class="w-1/3">Class</div>
        <div class="w-2/3">
          <div class="relative">
              <select class="block appearance-none w-full field border border-gray-500 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>All</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
        </div>
      </div>

      <div class="flex mt-5 border-b py-3 border-gray-300">
        <div class="w-1/3">Type</div>
        <div class="w-2/3">
          <div class="relative">
              <select class="block appearance-none w-full field border border-gray-500 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>All</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
        </div>
      </div>

      <div class="flex mt-5 border-b py-3 border-gray-300">
        <div class="w-1/3">Name</div>
        <div class="w-2/3">
          <div class="relative">
              <select class="block appearance-none w-full field border border-gray-500 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>All</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
        </div>
      </div>

      <div class="flex mt-5 border-b py-3 border-gray-300">
        <div class="w-1/3">Cost</div>
        <div class="w-2/3">

          <div class="relative">
              <input class="block appearance-none w-full field border border-gray-500 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="" type="number" placeholder="$12/G">
        </div>
      </div>
    </div>
 
  </div>
   
</div>
</div>
</template>
<script>
 export default { 
};
</script>
<style scoped>
select.field {
  min-width: 100%;
  max-width: 100%;
} 
 
</style>