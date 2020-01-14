<template>
  <div  class="" class="flex main-panel">
    <!--  Left Side Bar  -->
    <div class="flex-shrink flex flex-col justify-between p-10 bg-white h-full   left-side-bar">
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
             <div class="py-2 text-gray-600">App info</div>  
             <div class="py-2 text-ideeza">Tempale</div>  
             <div class="py-2 text-gray-600">User interface</div>  
             <div class="py-2 text-gray-600">Prototyping</div>  
             
          </div>
        </div>
      </div>
    </div>

    <!-- Main Contents -->
    <div class="flex-grow">
      <!--Panel Menu-->
      <div class="main-contents">
        
        <div class="flex justify-between flex-col lg:flex-row border-b border-gray-400 pl-5 pr-5 lg:pl-0 lg:pr-0 pb-3">
          <div class="text-xl font-bold m-3 lg:m-0 text-center lg:text-left">Templates</div>
          <div class="flex items-center justify-center content-center">
            <span class="panel-menu text-center" >
              <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'bolt']"/>Electronics</span>
            <span class="ml-5 panel-menu text-center">
              <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'code']"/>Code</span>
            <span class="ml-5 panel-menu text-center" >
              <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'cube']"/>Cover</span>
            <span class="ml-5 panel-menu text-center"  >
              <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'wrench']"/>General</span>
            <span class="ml-5 panel-menu text-center"  >
              <div class=" w-3 h-3 mr-3 bg-ideeza inline-block"></div> Network</span>
            <span class="ml-5 panel-menu text-center"  >
              <div class=" w-3 h-3 mr-3 bg-gray-700 inline-block"></div> App</span>
          </div>
        </div>

        <div class="flex">
          <div class="w-9/12">
         
        
        <div class="p-5 bg-white w-full shadow">
           
           <form action="#">
          <div class="flex flex-wrap text-center">
            <div class="select-layout-btn px-3 w-1/5 mb-5">
              <input type="radio" id="layout1" name="radio-group" checked>
              <label for="layout1">
                <img src="~/static/images/template-1.png" class="layout-display inline-block">
                <img src="~/static/images/template-2-selected.png" class="layout-selected inline-block">
                Template 1
              </label>
            </div>
            <div class="select-layout-btn px-3 w-1/5 mb-5">
              <input type="radio" id="layout2" name="radio-group">
              <label for="layout2">
                <img src="~/static/images/template-2.png" class="layout-display inline-block"> 
                <img src="~/static/images/template-2-selected.png" class="layout-selected inline-block">
                Template 1
              </label>
            </div>
            <div class="select-layout-btn px-3 w-1/5 mb-5">
              <input type="radio" id="layout3" name="radio-group">
              <label for="layout3">
                <img src="~/static/images/template-2.png" class="layout-display inline-block"> 
                <img src="~/static/images/template-2-selected.png" class="layout-selected inline-block">
                Template 1
              </label>
            </div>
            <div class="select-layout-btn px-3 w-1/5 mb-5">
              <input type="radio" id="layout4" name="radio-group">
              <label for="layout4">
                <img src="~/static/images/template-2.png" class="layout-display inline-block"> 
                <img src="~/static/images/template-2-selected.png" class="layout-selected inline-block">
                Template 1
              </label>
            </div>
            <div class="select-layout-btn px-3 w-1/5 mb-5">
              <input type="radio" id="layout5" name="radio-group">
              <label for="layout5">
                <img src="~/static/images/template-2.png" class="layout-display inline-block"> 
                <img src="~/static/images/template-2-selected.png" class="layout-selected inline-block">
                Template 1
              </label>
            </div>
            <div class="select-layout-btn px-3 w-1/5 mb-5">
              <input type="radio" id="layout6" name="radio-group">
              <label for="layout6">
                <img src="~/static/images/template-2.png" class="layout-display inline-block"> 
                <img src="~/static/images/template-2-selected.png" class="layout-selected inline-block">
                Template 1
              </label>
            </div>
            <div class="select-layout-btn px-3 w-1/5 mb-5">
              <input type="radio" id="layout7" name="radio-group">
              <label for="layout7">
                <img src="~/static/images/template-2.png" class="layout-display inline-block"> 
                <img src="~/static/images/template-2-selected.png" class="layout-selected inline-block">
                Template 1
              </label>
            </div>
            <div class="select-layout-btn px-3 w-1/5 mb-5">
              <input type="radio" id="layout8" name="radio-group">
              <label for="layout8">
                <img src="~/static/images/template-2.png" class="layout-display inline-block"> 
                <img src="~/static/images/template-2-selected.png" class="layout-selected inline-block">
                Template 1
              </label>
            </div>
            <div class="select-layout-btn px-3 w-1/5 mb-5">
              <input type="radio" id="layout9" name="radio-group">
              <label for="layout9">
                <img src="~/static/images/template-2.png" class="layout-display inline-block"> 
                <img src="~/static/images/template-2-selected.png" class="layout-selected inline-block">
                Template 1
              </label>
            </div>
            <div class="select-layout-btn px-3 w-1/5 mb-5">
              <input type="radio" id="layout10" name="radio-group">
              <label for="layout10">
                <img src="~/static/images/template-2.png" class="layout-display inline-block"> 
                <img src="~/static/images/template-2-selected.png" class="layout-selected inline-block">
                Template 1
              </label>
            </div>
            <div class="select-layout-btn px-3 w-1/5 mb-5">
              <input type="radio" id="layout11" name="radio-group">
              <label for="layout11">
                <img src="~/static/images/template-2.png" class="layout-display inline-block"> 
                <img src="~/static/images/template-2-selected.png" class="layout-selected inline-block">
                Template 1
              </label>
            </div>
            <div class="select-layout-btn px-3 w-1/5 mb-5">
              <input type="radio" id="layout12" name="radio-group">
              <label for="layout12">
                <img src="~/static/images/template-2.png" class="layout-display inline-block"> 
                <img src="~/static/images/template-2-selected.png" class="layout-selected inline-block">
                Template 1
              </label>
            </div>
            <div class="select-layout-btn px-3 w-1/5 mb-5">
              <input type="radio" id="layout13" name="radio-group">
              <label for="layout13">
                <img src="~/static/images/template-2.png" class="layout-display inline-block"> 
                <img src="~/static/images/template-2-selected.png" class="layout-selected inline-block">
                Template 1
              </label>
            </div>
            <div class="select-layout-btn px-3 w-1/5 mb-5">
              <input type="radio" id="layout14" name="radio-group">
              <label for="layout14">
                <img src="~/static/images/template-2.png" class="layout-display inline-block"> 
                <img src="~/static/images/template-2-selected.png" class="layout-selected inline-block">
                Template 1
              </label>
            </div>
            <div class="select-layout-btn px-3 w-1/5 mb-5">
              <input type="radio" id="layout15" name="radio-group">
              <label for="layout15">
                <img src="~/static/images/template-2.png" class="layout-display inline-block"> 
                <img src="~/static/images/template-2-selected.png" class="layout-selected inline-block">
                Template 1
              </label>
            </div>
            <div class="select-layout-btn px-3 w-1/5 mb-5">
              <input type="radio" id="layout16" name="radio-group">
              <label for="layout16">
                <img src="~/static/images/template-2.png" class="layout-display inline-block"> 
                <img src="~/static/images/template-2-selected.png" class="layout-selected inline-block">
                Template 1
              </label>
            </div> 
          </div>
           
          </form>

        </div>     
      </div>

      <div class="w-3/12 bg-white shadow px-3">
        <div class=" text-gray-900 py-5 text-xl text-center">Layers</div>
           <p>Here you should choose the
template for your phone
application.</p>
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
    font-size: 11px;
} 
.select-layout-btn [type="radio"]:checked + label:after {
    content: 'Selected';
    color: #ff00c7;
}
.select-layout-btn [type="radio"]:checked + label {
   color: #ff00c7;
}
.layout-selected{
  display: none;
}
.select-layout-btn [type="radio"]:checked + label img.layout-selected{
  display: inline-block; ;
}
.select-layout-btn [type="radio"]:checked + label img.layout-display{
  display: none ;
}
.w-1-8 {width: 12.5%}
</style>
