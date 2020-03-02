<template>
<div class="">
	<div class="flex mt-10 border-gray-300 border-b pb-10 justify-end">
      <div class="px-3">
          <font-awesome-icon class="" :icon="['fas', 'bolt']"></font-awesome-icon>
        <span class="ml-3 text-ideeza">Electronics</span>
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
    </div>
    <div class="w-full relative">
	    <div class="m-auto absolute left-0 right-0">
			<div class="flex justify-center">
				<div class="px-2 py-1 sub_tool_list flex items-center bg-white rounded-b relative have_sublist">
					<img src="~/static/images/pcb-icon.png">
					<div class="w-1/3 m-auto absolute left-0 right-0 sub_tool_lavel2 rounded-sm" width="">
						<div class="flex text-3xl text-black">
							<div class="px-2 py-2 flex items-center rounded-b bg-transp">
								<font-awesome-icon class="" :icon="['fas', 'plus-circle']"></font-awesome-icon>
							</div>
							<div class="px-2 py-2 flex items-center  rounded-b bg-transp">
								<font-awesome-icon class="" :icon="['fas', 'trash']"></font-awesome-icon>
							</div>
							<div class="px-2 py-2 flex items-center  rounded-b bg-transp">
								<font-awesome-icon class="" :icon="['fas', 'save']"></font-awesome-icon>
							</div>
							<div class="px-2 py-2 flex items-center  rounded-b bg-transp">
								<font-awesome-icon class="" :icon="['fas', 'object-ungroup']"></font-awesome-icon>
							</div>
							<div class="px-2 py-2 flex items-center  rounded-b bg-transp relative">
								<font-awesome-icon class="" :icon="['fas', 'eye']"></font-awesome-icon>
 
									<div class="w-1/3 m-auto absolute left-0 right-0 sub_tool_lavel3 rounded-sm" width=""> 
										<span class="arrow-tip"><font-awesome-icon class="" :icon="['fas', 'caret-up']"></font-awesome-icon></span>
										<div class="flex text-xl text-black">
											<div class="px-2 py-2 flex items-center rounded-b bg-transp">
												<font-awesome-icon class="" :icon="['fas', 'plus-circle']"></font-awesome-icon>
											</div>
											<div class="px-2 py-2 flex items-center  rounded-b bg-transp">
												<font-awesome-icon class="" :icon="['fas', 'trash']"></font-awesome-icon>
											</div>
											<div class="px-2 py-2 flex items-center  rounded-b bg-transp">
												<font-awesome-icon class="" :icon="['fas', 'save']"></font-awesome-icon>
											</div>
											  
										</div>
									</div>
								 
							</div>
							<div class="px-2 py-2 flex items-center  rounded-b bg-transp">
								<font-awesome-icon class="" :icon="['fas', 'file-alt']"></font-awesome-icon>
							</div>
							<div class="px-2 py-2 flex items-center  rounded-b bg-transp">
								<font-awesome-icon class="" :icon="['fas', 'clone']"></font-awesome-icon>
							</div>
							<div class="px-2 py-2 flex items-center  rounded-b bg-transp">
								<font-awesome-icon class="" :icon="['fas', 'copy']"></font-awesome-icon>
							</div>
							<div class="px-2 py-2 flex items-center  rounded-b bg-transp">
								<font-awesome-icon class="" :icon="['fas', 'paste']"></font-awesome-icon>
							</div>
						</div>
					</div>
				</div>
				<div class="px-2 py-1 sub_tool_list flex items-center bg-white rounded-b">
					<img src="~/static/images/components-icon.png">
				</div>
				<div class="px-2 py-1 sub_tool_list flex items-center bg-white rounded-b">
					<img src="~/static/images/part-icon.png">
				</div>
				<div class="px-2 py-1 sub_tool_list flex items-center bg-white rounded-b">
					<img src="~/static/images/wire-icon.png"></div>
				<div class="px-2 py-1 sub_tool_list flex items-center bg-white rounded-b">
					<img src="~/static/images/gen-icon.png"></div>
				<div class="px-2 py-1 sub_tool_list flex items-center bg-white rounded-b relative have_sublist">
					<img src="~/static/images/hole-icon.png">
					<div class="w-1/3 m-auto absolute left-0 right-0 sub_tool_lavel2 rounded-sm" width="">
						<div class="flex text-3xl text-black">
							<div class="px-2 py-2 flex items-center rounded-b bg-transp">
								<font-awesome-icon class="" :icon="['fas', 'plus-circle']"></font-awesome-icon>
							</div>
							<div class="px-2 py-2 flex items-center  rounded-b bg-transp">
								<font-awesome-icon class="" :icon="['fas', 'trash']"></font-awesome-icon>
							</div>
							<div class="px-2 py-2 flex items-center  rounded-b bg-transp">
								<font-awesome-icon class="" :icon="['fas', 'save']"></font-awesome-icon>
							</div>
							<div class="px-2 py-2 flex items-center  rounded-b bg-transp">
								<font-awesome-icon class="" :icon="['fas', 'object-ungroup']"></font-awesome-icon>
							</div>
							<div class="px-2 py-2 flex items-center  rounded-b bg-transp relative">
								<font-awesome-icon class="" :icon="['fas', 'eye']"></font-awesome-icon>
 
									<div class="w-1/3 m-auto absolute left-0 right-0 sub_tool_lavel3 rounded-sm" width=""> 
										<span class="arrow-tip"><font-awesome-icon class="" :icon="['fas', 'caret-up']"></font-awesome-icon></span>
										<div class="flex text-xl text-black">
											<div class="px-2 py-2 flex items-center rounded-b bg-transp">
												<font-awesome-icon class="" :icon="['fas', 'plus-circle']"></font-awesome-icon>
											</div>
											<div class="px-2 py-2 flex items-center  rounded-b bg-transp">
												<font-awesome-icon class="" :icon="['fas', 'trash']"></font-awesome-icon>
											</div>
											<div class="px-2 py-2 flex items-center  rounded-b bg-transp">
												<font-awesome-icon class="" :icon="['fas', 'save']"></font-awesome-icon>
											</div>
											  
										</div>
									</div>
								 
							</div>
							<div class="px-2 py-2 flex items-center  rounded-b bg-transp">
								<font-awesome-icon class="" :icon="['fas', 'file-alt']"></font-awesome-icon>
							</div>
							<div class="px-2 py-2 flex items-center  rounded-b bg-transp">
								<font-awesome-icon class="" :icon="['fas', 'clone']"></font-awesome-icon>
							</div>
							<div class="px-2 py-2 flex items-center  rounded-b bg-transp">
								<font-awesome-icon class="" :icon="['fas', 'copy']"></font-awesome-icon>
							</div>
							<div class="px-2 py-2 flex items-center  rounded-b bg-transp">
								<font-awesome-icon class="" :icon="['fas', 'paste']"></font-awesome-icon>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<img src="~/static/images/canva.png">
	</div>
   <!--  <div class="md:flex">
        <Electronics class="flex-1"/>
        <Cover class="flex-1 cover"/>
    </div> -->
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