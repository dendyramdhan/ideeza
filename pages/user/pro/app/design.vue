<template>
  <div>
    <div class="right-bar fixed bg-white shadow">
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
    <div class="py-5 flex">
        <div class="flex-1">
            <div class="inline-block px-5">Single screen view</div>
            <div class="inline-block px-5 text-ideeza">Multiple screens view</div>
        </div>
        <div class="flex-1 text-right">
            <button class="border bg-ideeza text-white py-2 px-10 text-xl">Design</button>
            <button class="border text-gray-600 py-2 px-10 text-xl ml-5">Code</button>
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

  .select-layout-btn [type="radio"]:checked+label,
  .select-layout-btn [type="radio"]:not(:checked)+label {
    position: relative;
    padding: 4px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
    border: 1px solid #fff;
  }

  .select-layout-btn [type="radio"]:not(:checked)+label:after {
    border: none;
  }

  .select-layout-btn [type="radio"]:checked+label {
    border: 1px solid #ff14c9;
  }

  .w-1-8 {
    width: 12.5%
  }

  .right-bar {
    width: 300px;
    top: 0;
    right: 0;
    z-index: 0;
    padding-top: 50px;
    height: 100vh;
  }

</style>
