<template>
  <div class="">
    <div class="curve-bg-gradient clearfix">
    <div class="curve-bg-top-img clearfix pb-0">
      <headercomponent>
      </headercomponent>
      <nuxt />
  
      <div class="container lg m-auto text-white bot-bg-CM pb-32 pt-12">
          <div class="pb-5 mt-12 mb-5 px-5">
            <h2 class="md:text-6xl text-4xl mt-5"><span class="font-bold">Talk</span> to a Human</h2>
            <div class="lg:w-1/2 sm:w-full">
              <p class="text-lg py-4 pr-5">Ideeza may be an AI maker assistant, but we’re certified flesh and blood. Reach out and touch base, ask for info, or simply say hello.</p>
            </div>
             
          </div>
        </div>
      </div>
    </div>
  <div class="container lg m-auto mt-20">
    <div class="md:w-3/4 w-full m-auto">
    <div class="text-2xl pt-5 mt-12">           
      <nuxt-link to="" class="text-pink-600 px-3">Contact Info</nuxt-link>
      <nuxt-link to="" class="text-gray-900 px-3">Write Us</nuxt-link>
    </div>

    <div class="text-2xl pt-5 mt-12 text-center flex flex-justify steps-cont-box steps-box-bg-bar"> 
      <div class="flex-1 text-center">          
        <nuxt-link to="" class="text-white contact-step-bg px-3 inline-block w-12 h-12 rounded-full pt-1">
          <img src="~static/images/check.png" class=" my-0 inline-block">
        </nuxt-link>
        <p class="text-gray-900">Question</p>
      </div>
      <div class="flex-1 text-center">          
        <nuxt-link to="" class="text-white contact-step-bg px-3 inline-block w-12 h-12 rounded-full pt-1">
          <img src="~static/images/check.png" class=" my-0 inline-block">
        </nuxt-link>
        <p class="text-gray-900">Email</p>
      </div>
      <div class="flex-1 text-center">          
        <nuxt-link to="" class="text-white contact-step-bg px-3 inline-block w-12 h-12 rounded-full pt-1">
          <img src="~static/images/check.png" class=" my-0 inline-block">
        </nuxt-link>
        <p class="text-gray-900">Complete</p>
      </div>
    </div>
    
    <div class="shadow-2xl p-5 py-24 text-center my-24">
      <div class="w-full">
        <img src="~static/images/email-sent.png" class=" my-8 inline-block">
        <h2 class="text-gray-900 text-6xl font-bold">Your email is sent!</h2>
        <p class="text-gray-900 text-4xl mt-5 ">We will be in touch as soon as possible.</p>
      </div>

         
         
  </div>
  </div> 
  </div>

  <div class="curve-bg-gradient clearfix">
    <div class="curve-bg-footer-bg-img2 pt-32 clearfix">
      <div class="container lg m-auto text-white"> 
        <div class="mt-5 w-4/5  m-auto text-center">
          <h2 class="text-white md:text-3xl sm:text-3xl font-bold py-5 ">Join a growing maker community</h2>
           
          <button class="bg-pink-CM hover:bg-pink-400 text-white font-bold py-2 px-4 btn-lg rounded-full shadow-lg mt-5">Join Now</button>
        </div>
        

      <div class="w-full md:flex flex-wrap border-t-2 pb-10 mt-10 border-pink-600">
        <div class="flex-1 text-center md:text-left pt-5 w-full">
          <img src="~static/images/logo.png" class="inline-block">
        </div>
        <div class="flex-1 text-center md:text-center w-full text-white pt-10">© 2016 Ideeza All rights reserved</div>
        <div class="flex-1 text-center md:text-right w-full text-white pt-10">
          <nuxt-link to="" class="text-white px-3">Privacy Policy</nuxt-link> |
          <nuxt-link to="" class="text-white px-3">Term & Condition</nuxt-link>

        </div>
      </div>
    </div>
  </div>
</div>
</div> 
</template>
<script>


import headercomponent from '~/layouts/headercomponent/';
export default {
   components:{
    headercomponent
   }
}
</script>
 