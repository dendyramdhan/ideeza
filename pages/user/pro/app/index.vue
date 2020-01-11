<template>
  <div  class="" class="flex main-panel">
    <!--  Left Side Bar  -->
    <div class="flex-shrink flex flex-col justify-between p-10 bg-white h-full shadow left-side-bar">
      <div class="flex-shrink">
        <!--Search-->
        <div class="flex bg-gray-200 border border-solid border-gray-500 rounded-sm">
          <div class="flex-shrink flex contents-center p-2 bg-gary-400">
            <img  src="https://img.icons8.com/ios-glyphs/22/a0aec0/search.png" >
          </div>
          <div class="flex-grow">
            <input type="text" class="w-full h-full border-0 outline-none bg-gray-200" placeholder="search">
          </div>
        </div>

        <!--Left Menu-->
        <div class="mt-10 ">
          <div class="menu-button-container" >

            <div class="mb-3 flex relative content-center font-semibold" >
              Electronics
            </div>
            <!--Sub Menu Items-->
               
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Button</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Checkbox</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Datepicker</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Image</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Label</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Listview</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Listpicker</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Notifier</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Passwordtextbox</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Slider</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Spinner</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Textbox</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Spinner</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Timepicker </check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Webviewer</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Layout</check-box>
             

            <div class="flex items-center font-semibold text-lg text-ideeza-black">
              <input class="mr-3" type="color" > BG Color  </div>

            <hr />

            <nuxt-link class="button" to="/technician/electronics/add-part">Add Part</nuxt-link>
            <nuxt-link class="button" to="technician/electronics/add-component">Add Component</nuxt-link>
            <nuxt-link class="button" to="technician/electronics/add-pcb">Add PCB</nuxt-link>
          </div>
        </div>
      </div>



    </div>

    <!-- Main Contents -->
    <div class="flex-grow">
      <!--Panel Menu-->
      <div class="main-contents">
        
        <div class="flex justify-between flex-col lg:flex-row border-b border-gray-400 pl-5 pr-5 lg:pl-0 lg:pr-0 pb-3">
          <div class="text-xl font-bold m-3 lg:m-0 text-center lg:text-left">Circuit Board</div>
          <div class="flex items-center justify-center content-center">
            <span class="panel-menu text-center" >
              <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'bolt']"/>Electronics</span>
            <span class="ml-5 panel-menu text-center">
              <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'code']"/>Code</span>
            <span class="ml-5 panel-menu text-center" >
              <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'cube']"/>Cover</span>
            <span class="ml-5 panel-menu text-center"  >
              <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'wrench']"/>General</span>
          </div>
        </div>

        <div class="flex">
          <div class="w-9/12">
        <div class="">
          <div class="py-5 flex">
            <div class="flex-1">
              <div class="inline-block px-5">Single screen view</div>
              <div class="inline-block px-5 text-ideeza">Multiple screens view</div>
            </div>
            <div class="flex-1">
              <button class="border bg-ideeza text-white py-2 px-10 text-xl">Design</button>
              <button class="border text-gray-600 py-2 px-10 text-xl ml-5">Code</button>
            </div>
          </div>
        </div>
        
        <div class="p-5 bg-white w-10/12 shadow">
          <div class="flex">
            <div class="flex-1">
              <h2 class="text-gray-900 text-2xl mb-5">Choose the layout</h2>
            </div>
            <div class="flex-1">
              <div class="flex bg-gray-200 border border-solid border-ideeza rounded-sm">
                <div class="flex-grow">
                  <input type="text" class="px-3 w-full h-full border-0 outline-none bg-gray-200" placeholder="iPhone 8+">
                </div>
                <div class="flex-shrink flex contents-center p-2 bg-gary-400">
                  <img  src="https://img.icons8.com/ios-glyphs/22/a0aec0/search.png" >
                </div>
              </div>
            </div> 

          </div>
           <form action="#">
          <div class="flex flex-wrap text-center">
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout1" name="radio-group" checked>
              <label for="layout1"><img src="~/static/images/layout-1.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout2" name="radio-group">
              <label for="layout2"><img src="~/static/images/layout-2.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout3" name="radio-group">
              <label for="layout3"><img src="~/static/images/layout-3.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout4" name="radio-group">
              <label for="layout4"><img src="~/static/images/layout-4.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout5" name="radio-group">
              <label for="layout5"><img src="~/static/images/layout-5.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout6" name="radio-group">
              <label for="layout6"><img src="~/static/images/layout-6.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout7" name="radio-group">
              <label for="layout7"><img src="~/static/images/layout-7.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout8" name="radio-group">
              <label for="layout8"><img src="~/static/images/layout-8.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout9" name="radio-group">
              <label for="layout9"><img src="~/static/images/layout-9.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout10" name="radio-group">
              <label for="layout10"><img src="~/static/images/layout-10.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout11" name="radio-group">
              <label for="layout11"><img src="~/static/images/layout-11.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout12" name="radio-group">
              <label for="layout12"><img src="~/static/images/layout-12.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout13" name="radio-group">
              <label for="layout13"><img src="~/static/images/layout-13.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout14" name="radio-group">
              <label for="layout14"><img src="~/static/images/layout-14.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout15" name="radio-group">
              <label for="layout15"><img src="~/static/images/layout-15.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout16" name="radio-group">
              <label for="layout16"><img src="~/static/images/layout-16.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout17" name="radio-group">
              <label for="layout17"><img src="~/static/images/layout-17.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout18" name="radio-group">
              <label for="layout18"><img src="~/static/images/layout-18.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout19" name="radio-group">
              <label for="layout19"><img src="~/static/images/layout-19.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout20" name="radio-group">
              <label for="layout20"><img src="~/static/images/layout-20.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout21" name="radio-group">
              <label for="layout21"><img src="~/static/images/layout-21.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout22" name="radio-group">
              <label for="layout22"><img src="~/static/images/layout-22.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout23" name="radio-group">
              <label for="layout23"><img src="~/static/images/layout-23.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout24" name="radio-group">
              <label for="layout24"><img src="~/static/images/layout-24.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout25" name="radio-group">
              <label for="layout25"><img src="~/static/images/layout-25.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout26" name="radio-group">
              <label for="layout26"><img src="~/static/images/layout-26.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout27" name="radio-group">
              <label for="layout27"><img src="~/static/images/layout-27.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout28" name="radio-group">
              <label for="layout28"><img src="~/static/images/layout-28.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout29" name="radio-group">
              <label for="layout29"><img src="~/static/images/layout-29.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout30" name="radio-group">
              <label for="layout30"><img src="~/static/images/layout-30.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn px-3 w-1-8 mb-5">
              <input type="radio" id="layout31" name="radio-group">
              <label for="layout31"><img src="~/static/images/layout-31.png" class="inline-block"></label>
            </div>
          </div>
          <div class=" mt-10">
            <button class="border bg-ideeza text-white py-2 px-10 text-xl">Save</button>
            <button class="border text-gray-600 py-2 px-10 text-xl ml-5">Discard</button>

          </div>
          </form>

        </div>     
      </div>

      <div class="w-3/12 bg-white shadow">
        <div class=" text-gray-900 py-5 text-xl text-center">Layers</div>
          <div class="flex px-5 text-left w-full">
            <div class="w-2/12"></div>
            <div class="w-9/12">Button</div>
            <div class="w-1/12 text-gray-900 font-bold text-xl text-center">-</div>
          </div>
          <div class="flex px-5 text-left w-full">
            <div class="w-2/12"></div>
            <div class="w-9/12">Properties</div>
            <div class="w-1/12 text-gray-900 font-bold text-xl text-center">-</div>
          </div>
          <div class="flex px-5 text-left w-full">
            <div class="w-2/12"></div>
            <div class="w-9/12">
              <div class=" w-5 h-5 mr-5 bg-ideeza inline-block"></div> Color
            </div>
          </div>
          <div class="flex px-5 text-left w-full">
            <div class="w-2/12"></div>
            <div class="w-9/12">
              10 Border radius
            </div>
          </div>
          <div class="flex px-5 text-left w-full">
            <div class="w-2/12"></div>
            <div class="w-9/12">
              120 Width(px)
            </div>
          </div>
          <div class="flex px-5 text-left w-full">
            <div class="w-2/12"></div>
            <div class="w-9/12">
              110 Height(px)
            </div>
          </div>
          <div class="flex px-5 text-left w-full">
              <div class="w-2/12"></div>
              <div class="w-9/12">Inside Layer</div>
              <div class="w-1/12 text-gray-900 font-bold text-xl text-center">-</div>
            </div>
      </div>
      </div>
    </div>
  </div>
</div>
</template>
 
<style scoped>

.select-layout-btn [type="radio"]:checked,
.select-layout-btn [type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
}
.select-layout-btn [type="radio"]:checked + label,
.select-layout-btn [type="radio"]:not(:checked) + label
{
    position: relative;
    padding:4px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
    border: 1px solid #fff;
} 
.select-layout-btn [type="radio"]:not(:checked) + label:after {
    border: none;
}
.select-layout-btn [type="radio"]:checked + label {
  border: 1px solid #ff14c9;  
}
.w-1-8 {width: 12.5%}
</style>
