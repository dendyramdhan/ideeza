<template>
<div class="">
	<div class="flex mt-10 border-gray-300 border-b pb-10 justify-end">
      <div class="px-3">
          <font-awesome-icon class="" :icon="['fas', 'bolt']"></font-awesome-icon>
        <span class="ml-3">Electronics</span>
      </div>
      <div class="px-3">
          <font-awesome-icon class="" :icon="['fas', 'code']"></font-awesome-icon>
          <span class="ml-3">Code</span>
      </div>
      <div class="px-3 ">
          <img src="~static/images/cover.png" class="inline-block mx-3">
          <span class="ml-3 text-ideeza">Cover</span>
      </div>
      <div class="px-3 ">
          <img src="~static/images/settings.png" class="inline-block mx-3">
          <span class="ml-3">Genral</span>
      </div>
    </div>
    <div class="w-full relative">
		<img src="~/static/images/img_ref_23337.png" class="w-full">
		<div class="absolute left-0 bottom-0 text-xl text-white pl-3 pb-3">
			30<span class="text-sm"> mm</span> x 60<span class="text-sm">mm</span> x 70<span class="text-sm">mm</span>
		</div>
		<div class="absolute right-0 bottom-0 text-xl text-white pr-5 pb-3">
			<button>
				<font-awesome-icon class=" text-white mt-0 ml-4 text-xl" :icon="['fas', 'question']"/>
			</button>
			<button>
				<font-awesome-icon class=" text-white mt-0 ml-4 text-xl" :icon="['fas', 'cog']"/>
			</button>
			<button>
				<font-awesome-icon class=" text-white mt-0 ml-4 text-xl" :icon="['fas', 'layer-group']"/>
			</button>
			<button>
				<font-awesome-icon class=" text-white mt-0 ml-4 text-xl" :icon="['fas', 'edit']"/>
			</button>
			<button>
				<font-awesome-icon class=" text-white mt-0 ml-4 text-xl" :icon="['fas', 'edit']"/>
			</button>
			<button class="transform rotate-45">
				<font-awesome-icon class=" text-white mt-0 ml-4 text-xl" :icon="['fas', 'arrows-alt-v']"/>
			</button>
		</div>
	</div>

	<div class="flex justify-between py-3">
		<button class="bg-ideeza py-2 px-6 text-white rounded font-bold">Share invention <font-awesome-icon class=" text-white mt-0 ml-4 text-xl" :icon="['fas', 'star']"/></button>
		<div class="flex">
			<button class="text-ideeza py-2 px-6 bg-white botder border-gray-600 rounded font-bold"> 
			<font-awesome-icon class=" text-ideeza mt-0 ml-4 text-xl" :icon="['fas', 'shopping-cart']"/>Buy now</button>
		<span class="py-3 mr-3"><font-awesome-icon class=" text-gray-400 mr-3 mt-0 ml-4 text-xl" :icon="['fas', 'eye']"/>2.5 k</span>
		<span class="px-3 py-2 border font-bold border-gray-600 text-gray-600">
			<font-awesome-icon class=" text-gray-600 mt-0text-xl" :icon="['fas', 'star']"/>
			39
		</span>
		</div>	

	</div>

	<div >
		<div class="mb-4">
        <label class="text-gray-800 font-bold pb-3 block">Description:</label>
        <textarea class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Type the description here..." rows="10"></textarea>
      </div>
      <div class="text-right">
      	<button class="bg-ideeza py-2 px-6 text-white rounded font-bold">Save</button>
      </div>
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
.cover{
    margin-top: 197px;
}
.sub_tool_list .sub_tool_lavel2 {
    left: 0;
    top: 100%;
    display:none;
}
.sub_tool_lavel3 {
	left: 0;
    top: 100%;
    display:none;
}
.bg-transp{
 background: rgba(255,255,255,0.6);
}
.arrow-tip{
	position: absolute;
    top: -20px;
    font-size: 21px;
    color: #ffffffab;
}
.have_sublist:hover .sub_tool_lavel2{
	display:block;
}
.sub_tool_lavel2:hover .sub_tool_lavel3{
	display:block;
}
</style>