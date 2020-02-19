<template>
  <div class="">
        <div class="flex">
            <div class="flex-1 pr-2">
              <button class="px-2 py-1 h-12 bg-white border border-gray text-ideeza block w-full" @click="addfileld">+ Add new Part</button>
            </div>
            <div class="flex-1 px-2">
            <select class="field field--border-light mr-1 h-12">
              <option>Category</option>
            </select>
          </div>
          <div class="flex-1 px-2">
            <select class="field field--border-light mr-1 h-12">
              <option>Subcategory</option>
            </select>
          </div>
          <div class="flex-1 px-2">
            <div class="flex bg-white border border-gray ">
              <button class="px-2 py-1 h-12 text-ideeza block w-16" @click="addfileld">
                <font-awesome-icon class="text-gray-400" :icon="['fas', 'search']"></font-awesome-icon>
              </button>
              <input type="text" name="" class="h-12 " placeholder="search...">
            </div>
         </div>
          </div>
    <div class="bg-white shadow-md p-5 w-full mt-5 overflow-x-auto">
       <table class="text-md" >
         <tr class="border-b border-gray-200">                                       
           <th class="px-2 py-2">Name</th>
           <th class="px-2 py-2">2D</th>
           <th class="px-2 py-2">3D</th>
           <th class="px-2 py-2">Manufacturer</th>
           <th class="px-2 py-2">Unit in Stock</th>
           <th class="px-2 py-2">Price</th>
           <th class="px-2 py-2">Package</th>
           <th class="px-2 py-2">Produc...</th>
           <th class="px-2 py-2">Availability</th>
           <th class="px-2 py-2">ROHS?</th>
           <th class="px-2 py-2">Category</th>
           <th class="px-2 py-2">Subcategory</th>
         </tr>
         <tr class="border-b border-gray-300 ">
           <td class="px-2 ">test 1</td>
           <td class="px-2 ">
              <button @click="$refs.upload2D.click()" class="trigger">Uploads</button>
              <input style="display: none;"  type="file" ref="upload2D"/>
           </td>
           <td class="px-2 ">
              <button @click="$refs.upload2D.click()" class="trigger">Uploads</button>
              <input style="display: none;"  type="file" ref="upload2D"/>
           </td>                 
           <td class="px-2 py-2">PCBWay</td>
           <td class="px-2 py-2"><input class="field h-10"  value="12" /></td>
           <td class="px-2 py-2"><input class="field h-10"  value="23"/></td>
           <td class="px-2 py-2"><input class="field h-10"  value="p1"/></td>
           <td class="px-2 py-2">2018</td>
           <td class="px-2 py-2">
             <div class="relative">
              <select class="block appearance-none w-full field border border-gray-500 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>Yes</option>
                <option>No</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
           </td>
           <td class="px-2 py-2">yes</td>
           <td class="px-2 py-2">Category</td>
           <td class="px-2 py-2">Subcategory</td>
         </tr>
       </table>
      
      <div class="mt-6 text-right">
      <button class="bg-ideeza py-2 px-16 text-white rounded-full">Update</button>
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