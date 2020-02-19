<template>
  <div>
  <div class="bg-white shadow-md p-5 w-full">
    <div>
      <h2 class="text-2xl font-bold text-gray-700">Step 1</h2>
      <p class="text-lg py-3 text-gray-700"> In this step, please choose the process of your product</p>
      <div class="flex mt-5 border-b py-3 border-gray-300">
        <div class="w-1/3">Process</div>
        <div class="w-2/3">
          <div class="relative">
              <select class="block appearance-none w-full field border border-gray-500 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>3D printing - Additive</option>
                <option>CNC Machining - Subtractive</option>
                <option>Forming</option>
                <option>Cutting</option>
                <option>Molding</option>
                <option>Finishing</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
        </div>
      </div>
    </div>

    <div class="mt-5">
      <h2 class="text-2xl font-bold text-gray-700">Step 2</h2>
      <p class="text-lg py-3 text-gray-700">Please select the sub-process</p>

      <div class="flex">
        <div class="w-4/12">
          <div class="text-md border border-gray-300 px-2 py-2 mb-3 bg-gray-300">3D Printing - Additive</div>

          <div class="text-md border border-gray-300 px-2 py-2 mb-3 flex justify-between">Process 2 
            <font-awesome-icon class="text-green-700" :icon="['fas', 'check']"></font-awesome-icon>
          </div>
          <div class="text-md border border-gray-300 px-2 py-2 mb-3 flex justify-between">Process 3 
            <font-awesome-icon class="text-red-700" :icon="['fas', 'times']"></font-awesome-icon>
          </div>
        </div>
        <div class="w-8/12 px-4">
          <div class="flex border-b py-3 border-gray-300">
              <div class="w-1/3">Sub-process</div>
              <div class="w-2/3">
                <div class="relative">
                    <select class="block appearance-none w-full field border border-gray-500 text-gray-700 py-1 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option class="text-green-400">Binder jetting - BJ - added</option>
                      <option>Powder bed fusion - DMLS, SLS, SLM, MJF, EBM</option>
                      <option>Material extrusion - FDM</option>
                      <option>Photopolymerization - VAT, SLA, DLP, CDLP</option>
                      <option>Material jetting - MJ, NPJ, DOD</option>
                      <option>Select all</option>
                        
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
              </div>
            </div>

            <div class="py-3 ">
              <div class="relative inline-block custom-checkbox">
                <input type="checkbox" name="id-1" id="id-1" class="border">
                <label for="id-1" class="text-md border inline-block rounded-lg px-3 py-2">Binder jetting 
                  <span class="block text-sm text-center">BJ</span>
                </label>
                
              </div>

              <div class="relative inline-block custom-checkbox m-2">
                <input type="checkbox" name="id-2" id="id-2" class="border">
                <label for="id-2" class="text-md border inline-block rounded-lg px-3 py-2">Powder bed fusion
                  <span class="block text-sm text-center">DMLS, SLS, SLM, MJF, EBM</span></label>
                
              </div>

              <div class="relative inline-block custom-checkbox m-2">
                <input type="checkbox" name="id-3" id="id-3" class="border">
                  <label for="id-3" class="text-sm border inline-block rounded-lg px-3 py-2">Material extrusion
                    <span class="block text-sm text-center">FDM</span>
                  </label>
              </div>

              <div class="relative inline-block custom-checkbox m-2">
                <input type="checkbox" name="id-4" id="id-4" class="border">
                  <label for="id-4" class="text-sm border inline-block rounded-lg px-3 py-2">Photopolymerization 
                    <span class="block text-sm text-center">VAT, SLA, DLP, CDLP</span>
                  </label>
                
              </div>

              <div class="relative inline-block custom-checkbox m-2">
                <input type="checkbox" name="id-5" id="id-5" class="border">
                  <label for="id-5" class="text-sm border inline-block rounded-lg px-3 py-2">Material jetting 
                    <span class="block text-sm text-center">MJ, NPJ, DOD</span>
                  </label>
                
              </div>
            </div>

            <h2 class="mt-5 font-bold text-gray-700 py-3">Material type</h2>
            <div class="py-3 ">
              <div class="relative inline-block custom-checkbox2">
                <input type="checkbox" name="Cid-1" id="Cid-1" class="border">
                <label for="Cid-1" class="text-md font-bold border inline-block rounded-lg px-3 py-2">Plastic 
                </label>
              </div>

              <div class="relative inline-block custom-checkbox2">
                <input type="checkbox" name="Cid-2" id="Cid-2" class="border">
                <label for="Cid-2" class="text-md font-bold border inline-block rounded-lg px-3 py-2">Composite 
                </label>
              </div>

              <div class="relative inline-block custom-checkbox2">
                <input type="checkbox" name="Cid-3" id="Cid-3" class="border">
                <label for="Cid-3" class="text-md font-bold border inline-block rounded-lg px-3 py-2">Wax 
                </label>
              </div>

              <div class="relative inline-block custom-checkbox2">
                <input type="checkbox" name="Cid-4" id="Cid-4" class="border">
                <label for="Cid-4" class="text-md font-bold border inline-block rounded-lg px-3 py-2">Metal 
                </label>
              </div>

              <div class="relative inline-block custom-checkbox2">
                <input type="checkbox" name="Cid-5" id="Cid-5" class="border">
                <label for="Cid-5" class="text-md font-bold border inline-block rounded-lg px-3 py-2">Finish 
                </label>
              </div>

              <div class="relative inline-block custom-checkbox2">
                <input type="checkbox" name="Cid-6" id="Cid-6" class="border">
                <label for="Cid-6" class="text-md font-bold border inline-block rounded-lg px-3 py-2">Sand 
                </label>
              </div>

              <div class="relative inline-block custom-checkbox2">
                <input type="checkbox" name="Cid-7" id="Cid-7" class="border">
                <label for="Cid-7" class="text-md font-bold border inline-block rounded-lg px-3 py-2">Ceramic 
                </label>
              </div>

              <div class="relative inline-block custom-checkbox2">
                <input type="checkbox" name="Cid-8" id="Cid-8" class="border">
                <label for="Cid-8" class="text-md font-bold border inline-block rounded-lg px-3 py-2">Glass 
                </label>
              </div>
 
            </div>

        </div>
      </div>
    </div>


    <div>
      <h2 class="text-2xl font-bold text-gray-700">Step 3</h2>
      <p class="text-lg py-3 text-gray-700"> In this step, please choose the finishings</p>
      <div class="flex mt-5 border-b py-3 border-gray-300">
        <div class="w-1/3">Finishes</div>
        <div class="w-2/3">
          <div class="relative">
              <select class="block appearance-none w-full field border border-gray-500 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>Spraying</option>
                <option>Powder coating</option>
                <option>Dip coating</option>
                <option>Electroplating</option>
                <option>Plating</option>
                <option>Anodizing</option>
                <option>Electroless plating</option>
                <option>Dyeing</option>
                <option>Select all</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
        </div>
      </div>

      <div class="flex mt-5 border-b py-3 border-gray-300">
        <div class="w-1/3">Global tolerance (in mm)</div>
        <div class="w-2/3">
          <input class="block appearance-none w-full field border border-gray-500 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="" type="number" placeholder="0.2">
        </div>
      </div>
    </div>


  </div>
  <div class="mt-6 text-center">
    <button class="bg-ideeza py-2 px-16 text-white rounded-full">Save</button>
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
.custom-checkbox label {
    color:#999;
}
.custom-checkbox input {
    position: absolute;
    opacity: 0;
    -webkit-appearance: none;
}
.custom-checkbox input:checked + label{
  color:#333 !important;
}

.custom-checkbox2{
  width: 30%;
  margin: 5px;
}
.custom-checkbox2 label {
    border-color:#ccc;
    display: block;
    text-align: center;
}
.custom-checkbox2 input {
    position: absolute;
    opacity: 0;
    -webkit-appearance: none;
}
.custom-checkbox2 input:checked + label{
  border-color:#14c900 !important;
}
</style>