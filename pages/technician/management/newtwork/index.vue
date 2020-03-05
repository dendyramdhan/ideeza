<template>
  <div class="flex main-panel">
    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="main-contents">
        <h1 class="text-2xl border-b-4 border-solid border-ideeza pb-5 mt-8">Network </h1>
        <div class="mt-5 mb-10 ">
          <div class="flex">
            <div class="w-4/12">
              <div class="relative flex">
                <label class="pr-5 pt-2">Country</label>
                <select class="block appearance-none w-full text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white border border-gray-500" id="grid-state">
                  <option>Isreal</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
            <div class="w-8/12 pl-5">
              <table cellpadding="0" cellspacing="0" class="w-full">
                <tr>
                  <td class="w-16">Type</td>
                  <td>
                    <div class="relative w-1/2">
                      <select class="block appearance-none w-full text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white border border-gray-500" id="grid-state">
                        <option>Cellular, RF</option>
                        <option>Cellular, RF</option>
                        <option>Cellular, RF</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Cellular</td>
                  <td class="py-3">
                    <div class="p-5 border border-gray-500 flex bg-transparent">
                      <div class="w-1/3">
                        <div class="relative">
                          <select class="block appearance-none w-full text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white border border-gray-500" id="grid-state">
                            <option>CDMA</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                          </div>
                        </div>
                      </div>
                      <div class="w-2/3">
                        <div class="flex px-2 ">
                          <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="1 MHz">
                          <span class="px-2 text-gray-500 text-2xl">-</span>
                          <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="100 MHz">
                          <span class="px-2 text-gray-500 text-2xl">
                            <font-awesome-icon class="ml-1 text-ideeza" :icon="['fas', 'plus']" />
                          </span>
                        </div>
                        <div class="flex px-2 mt-3">
                          <input class="appearance-none block w-32 bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="1 MHz">
                          <span class="px-2 text-gray-500 text-2xl">
                            <font-awesome-icon class="ml-1 text-ideeza" :icon="['fas', 'plus']" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="px-2 text-gray-500 text-2xl">
                      <font-awesome-icon class="ml-1 text-ideeza" :icon="['fas', 'plus']" />
                    </span></td>
                </tr>
                <tr>
                  <td>RF</td>
                  <td class="py-3">
                    <div class="p-5 border border-gray-500 flex bg-transparent">
                      <div class="w-1/3">
                        <div class="relative">
                          <select class="block appearance-none w-full text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white border border-gray-500" id="grid-state">
                            <option>LORA</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                          </div>
                        </div>
                      </div>
                      <div class="w-2/3">
                        <div class="flex px-2 ">
                          <div class="w-1/3 px-2">Frequency allowed</div>
                          <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="100 MHz">
                        </div>
                        <div class="flex px-2 mt-3">
                          <div class="w-1/3 px-2">Max Power</div>
                          <input class="appearance-none block bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="10 MHz">
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="px-2 text-gray-500 text-2xl">
                      <font-awesome-icon class="ml-1 text-ideeza" :icon="['fas', 'plus']" />
                    </span></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DropDownField from "~/components/form/dropdown-field.vue";
import SearchField from "~/components/form/search.vue";
import AddNewProject from "~/components/technician/management/new-project.vue";

import Services from "~/data/TechnicianProjectApi.json";

import apiService from "~/apiService/have_token.js";

export default {};

</script>
<style scoped>
select {

  max-width: 100%;
}

</style>
