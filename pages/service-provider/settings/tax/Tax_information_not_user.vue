<template>
  <div  >
    <div class="w-full px-4">
      <h2 class="text-3xl text-gray-700 py-6 font-bold">Tax information</h2>
      <div class="bg-white rounded p-5 text-xl relative mt-8">
        <h2 class="text-2xl text-gray-900 py-6 font-bold">W8BEN</h2>
        
        <p class="text-gray-900 py-3">To collect the right information, indicate if you are a<span class="text-ideeza">U.S. person</span>.</p>
        <form action="#">
          <p>
            <input type="radio" id="test1" name="radio-group" checked>
            <label for="test1">I'm not a U.S. person</label>
          </p>
          <p>
            <input type="radio" id="test2" name="radio-group">
            <label for="test2">I'm a U.S. person</label>
          </p>
        </form>
        <p class="text-gray-900 py-3 mt-5">Before withdrawing funds, all non-U.S. persons must provide W-8BEN tax information.</p>

        <p class="text-xl font-bold text-gray-900">Legal name of business</p>
        <input class="shadow appearance-none border border-ideeza rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mt-3" id="password" type="password" placeholder="********">
        <p class="text-gray-600 text-sm">Provide the same name as shown on your tax return.</p>

        <p class="text-xl font-bold text-gray-900 mt-8">Address <a href="" class="text-ideeza">Change</a></p>

        <p class="text-gray-600 text-lg mt-3">Nahal Tavor 5,
          <br/>Tel Aviv Region
          <br/>9064500
          <br/>Israel</p>
        <p class="text-gray-600 text-lg py-6"><input type="checkbox" name="vehicle1" value="Bike"> I certify, under penalties of perjury, that the representations in this Tax Certificate are true and correct.</p>

        <div class=" mt-5">
          <button class="bg-ideeza text-white text-xl py-4 px-16 rounded mr-4">Save</button>
          <button class="bg-white border border-ideeza text-ideeza text-xl py-4 px-16 rounded">Cancle</button>
        </div>

      </form>
      </div>

      </div>
 
       
    </div>
  </div>
</template>
 <script>
import apiService from "~/apiService/have_token.js";

export default {
  
};
</script>
<style scoped>
select {
  max-width: none;
}
[type="radio"]:checked,
[type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label
{
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #fff;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
    content: '';
    width: 12px;
    height: 12px;
    background: #F87DA9;
    position: absolute;
    top: 3px;
    left: 3px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
}
[type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}
</style>
