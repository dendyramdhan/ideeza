<template>
<div class="">
	<div class="flex">
		<div class="w-1/4 px-3">
			<div class="py-3">
			<button class="bg-ideeza py-2 px-6 text-white mr-3">Network</button>
			<button class="bg-white border border-gray-300 py-2 px-6 text-gray-700">Network</button>
		</div>
		<div class="flex bg-white justify-between border border-gray-300 mt-4">
            <div class="h-10 p-2 w-2/12 relative">
               <button><font-awesome-icon
                  class="ml-1  text-gray-400"
                  :icon="['fas', 'search']"
                /></button>
              </div>	
            <input
                placeholder="search Project..."
                class="bg-white w-10/12 outline-none h-8 text-gray-800 pr-3 h-10"/>
              
            </div>
		</div> 
		<div class="flex justify-end w-3/4">
			<div class="flex mt-10 border-gray-300 border-b pb-10 justify-end">
	      <div class="px-3">
	          <img src="~static/images/power.png" class="inline-block">
	        <span class="ml-3">Electronics</span>
	      </div>
	      <div class="px-3">
	          <font-awesome-icon class="" :icon="['fas', 'code']"></font-awesome-icon>
	          <span class="ml-3">Code</span>
	      </div>
	      <div class="px-3 ">
	          <img src="~static/images/cover.png" class="inline-block mx-3">
	          <span class="ml-3">Cover</span>
	      </div>
	      <div class="px-3 ">
	          <img src="~static/images/settings.png" class="inline-block mx-3">
	          <span class="ml-3">Genral</span>
	      </div>
	      <div class="px-3 ">
	          <img src="~static/images/settings.png" class="inline-block mx-3">
	          <span class="ml-3">Network</span>
	      </div>
	    </div>
		</div>
	</div>
<div class="flex">
	<div class="w-1/4 px-3"> 
        <div class="mt-4 text-center">
        	<img src="~/static/images/ref_img_1258.png" class="inline-block">
        </div>
        <div class="mt-4 text-center">
        	<img src="~/static/images/ref_img_1259.png" class="inline-block">
        </div>
        <div class="mt-4 text-center">
        	<img src="~/static/images/ref_img_1260.png" class="inline-block">
        </div>
	</div>
	<div class="w-2/4">
		
	    <div class="w-full relative text-center py-32">
		    
			<img src="~/static/images/glob.png" class="inline-block">
		</div>
		<div class="flex justify-center">
			<div class="px-6">
				<p>Master</p>
				<img src="~/static/images/ref_img_1258.png" class="inline-block">
			</div>
			<div class="px-6">
				<p>Slave</p>
				<img src="~/static/images/ref_img_1259.png" class="inline-block">
			</div>
		</div>
	</div>
	<div class="w-1/4 px-3">
		<h2 class="text-gray-700 text-center text-2xl">Network properties</h2> 
        
        <div class="mt-4">
        	<label class="font-bold py-2 inline-block">Topology</label>
        	<div class="relative">
             <select class="block appearance-none w-full text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white border border-gray-500" id="grid-state">
              <option>Master - slave</option>
              <option>Mesh</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div> 
          <div class="flex mt-3">
        		<label class="py-2 inline-block">Master</label>
        		<div class="relative ml-3">
		             <select class="block appearance-none w-full text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white border border-gray-500" id="grid-state">
		              <option>Car</option>
		              <option>Mesh</option>
		            </select>
		            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
		              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
		            </div>
		          </div>
        	</div>
        </div>


        <div class="mt-4">
        	<label class="font-bold py-2 inline-block">Network Frequency</label>
        	<div class="flex mt-3">
        		<label class="font-bold py-2 inline-block">Type</label>
        		<div class="relative w-full ml-3">
		             <select class="block appearance-none w-full text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white border border-gray-500" id="grid-state">
		              <option>WIFI</option>
		              <option>RF</option>
		              <option>Bluetooth</option>
		              <option>Cellular</option>
		            </select>
		            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
		              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
		            </div>
		          </div>
        	</div>

        	<div class="flex mt-3">
        		<label class="font-bold py-2 inline-block">Freq.</label>
        		<div class="relative w-full ml-3">
		             <select class="block appearance-none w-full text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white border border-gray-500" id="grid-state">
		              <option>433 MHz</option>
		              <option>433 MHz</option>
		            </select>
		            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
		              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
		            </div>
		          </div>
        	</div>

        </div>

        <div class="mt-4">
        	<label class="font-bold py-2 inline-block">Add repiter</label>
        	<div class="flex mt-3">
        		 
        		<div class="relative w-full ml-3">
		             <select class="block appearance-none w-full text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white border border-gray-500" id="grid-state">
		              <option>0</option>
		              <option>2</option>
		            </select>
		            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
		              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
		            </div>
		          </div>
        	</div>
        </div>


        <div class="mt-4">
        	<label class="font-bold py-2 inline-block">Cloud</label>
        	<div class="flex mt-3">
        		<label class="font-bold py-2 inline-block w-24">Type</label>
        		<div class="relative w-full ml-3">
		             <select class="block appearance-none w-full text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white border border-gray-500" id="grid-state">
		              <option>IDEEZA</option>
		              <option>2</option>
		            </select>
		            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
		              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
		            </div>
		          </div>
        	</div>

        	<div class="flex mt-3">
        		<label class="font-bold py-2 inline-block w-24">Name</label>
        		<div class="relative w-full ml-3">
		             <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""> 
		          </div>
        	</div>

        	<div class="flex mt-3">
        		<label class="font-bold py-2 inline-block w-24">Pass</label>
        		<div class="relative w-full ml-3">
		             <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="password" placeholder="*****"> 
		          </div>
        	</div>

        	<div class="flex mt-3">
        		<label class="font-bold py-2 inline-block w-24">Sensors</label>
        		<div class="relative w-full ml-3">
		             <select class="block appearance-none w-full text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white border border-gray-500" id="grid-state">
		              <option>Temperature</option>
		              <option>2</option>
		            </select>
		            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
		              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
		            </div>
		          </div>
        	</div>
        	<div class="flex mt-3 justify-between">
        		<label class="font-bold py-2 inline-block ">Cellular gateway</label>
        		<input type="checkbox" name="">
        	</div>
        	<div class="flex mt-3">
        		<label class="font-bold py-2 inline-block w-24">Freq.</label>
        		<div class="relative w-full ml-3">
		             <select class="block appearance-none w-full text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white border border-gray-500" id="grid-state">
		              <option>433 MHz</option>
		              <option>2</option>
		            </select>
		            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
		              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
		            </div>
		          </div>
        	</div>
        </div>


	</div>
   <!--  <div class="md:flex">
        <Electronics class="flex-1"/>
        <Cover class="flex-1 cover"/>
    </div> -->
</div>
</div>
</template>
<script>
import Electronics from '~/components/user/pro/pro-electronics.vue'
import Cover from '~/components/user/pro/pro-cover.vue'
export default {
    components: {
        Electronics,
        Cover
    }
}
</script>
<style scoped>
 select{

  max-width: 100%;
 }
</style>
