<template>
    <div class="landingBanner-bg">
        <top-header />
        <nuxt />
        <div class="w-full pb-32">
            <div class="container lg m-auto text-white px-5 py-8">
                <div class="pb-5 mb-5 px-5 md:w-8/12 w-full">
                    <h2 class="md:text-3xl sm:text-2xl mt-5 font-bold text-gray-700">
            <span class="text-ideeza">You dream it</span> &
            <span class="text-purple-900">IDEEZA designs it.</span></h2>
                    <h2 class="md:text-3xl sm:text-2xl font-bold text-gray-900">Our Service providers executes it.</h2>
                    <div class="lg:w-4/5 sm:w-full">
                        <p class="text-lg text-gray-700 py-4 pr-5">IDEEZA is an end-to-end hardware product development platform. Enables anyone to generate a new product from a simple description for free and within minutes by using automatic and AI processes. </p>
                    </div>
                </div>
                <div class="bg-white rounded-sm overflow-hidden md:w-6/12 w-full flex shadow rounded-md border-2 border-purple-900">
                    <img src="~/static/images/ideeza-icon.png">
                    <input type="text" class="text-gray-700 py-3 px-3 flex-1 broder-l" placeholder="Start now – type your idea here...">
                    <button class=" px-5 text-center">
                        <img src="~static/images/search-purple.png" class="inline-block w-6">
                    </button>
                </div>
            </div>
        </div>
        <div class="video-sec">
            <div class="container lg m-auto mt-20">
                <div class="mt-5 w-full m-auto text-center">
                    <h3 class="text-purple-900 text-2xl font-bold">AI Maker for</h3>
                    <h2 class="text-gray-900 text-4xl font-extrabold">Connected Devices</h2>
                    <p class="text-gray-700 text-lg py-5">Building IoT prototypes used to need months, engineers, hair-ripping budgets and dev tools creep. Good times.</p>
                    <div class="m-auto video-screen">
                        <iframe width="100%" height="390" src="https://www.youtube.com/embed/PdlO0NRWdtI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full relative mt-20 py-6">
            <div class="container lg m-auto ">
                <div class="md:flex sm:block">
                    <div class="md:w-6/12 sm:w-full px-3">
                        <h3 class="text-purple-900 text-2xl font-bold">Empower your ideas</h3>
                        <h2 class="text-gray-900 text-4xl font-bold">BY YOURSELF!</h2>
                        <p class="text-gray-700 text-lg py-5 ">IDEEZA enables anyone, even without technology knowledge to take full ownership on their products development process, by using its powerful AI engine and an automated process to fulfill any dream!</p>
                        <p class="text-gray-700 text-2xl font-bold py-5 bg-i">
                            <div class="text-white py-2 btn-md bg-ideeza inline-block text-center text-lg rounded-full cursor-pointer" @click="showLoginModal=true">Try Free</div>
                        </p>
                    </div>
                    <img src="~/static/images/ref_img_1242.png" class="md:absolute static right-0 max-width-half">
                </div>
            </div>
        </div>
        <div class="w-full relative py-6 mt-20">
            <div class="container lg m-auto">
                <div class="md:flex sm:block justify-end">
                    <img src="~/static/images/ref_img_1243.png" class="md:absolute static left-0 max-width-half">
                    <div class="md:w-6/12 sm:w-full pt-10 ">
                        <h3 class="text-purple-900 text-2xl font-bold">Creating better technology,</h3>
                        <h2 class="text-gray-900 text-5xl font-bold">TOGETHER!</h2>
                        <p class="text-gray-700 text-lg py-5 ">We believe in collaboration and together with the power of Artificial Intelligence it leads to amazing results, empowering the full potential of the world! For the first time, you can use, contribute, and empower the community knowledge - by a click, thousands of brains will come together to provide the unique solution for your idea!</p>
                        <p class="text-gray-700 text-2xl font-bold py-5 bg-i">
                            <nuxt-link to="/collaboration/" class="text-white py-2 btn-md bg-ideeza inline-block text-center text-lg rounded-full">Read More</nuxt-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full relative py-6 mb-12 mt-20">
            <div class="container lg m-auto ">
                <div class="md:flex sm:block">
                    <div class="md:w-6/12 sm:w-full pt-10">
                        <h3 class="text-purple-900 text-2xl font-bold">Work your way,</h3>
                        <h2 class="text-gray-900 text-5xl font-bold">TODAY!</h2>
                        <p class="text-gray-700 text-lg py-5 ">You bring the skill. We'll make earning easy. With IDEEZA you have the freedom to work on any project that suits your exact ability, whether you are an open source engineer, designer, manufacturer, patent attorney or any other supplier. From our many and diverse projects you can easily find your way to success and rapid growth. </p>
                        <!-- <p class="text-gray-700 text-2xl font-bold py-5 bg-i">
              <div class="cursor-pointer text-white py-2 btn-md bg-ideeza inline-block text-center text-lg rounded-full" @click="showManufacturerEmailSignupModal=true">Connect Us</div>
            </p> -->
                        <p class="text-gray-700 text-2xl font-bold py-5 bg-i">
                            <nuxt-link class="cursor-pointer text-white py-2 btn-md bg-ideeza inline-block text-center text-lg rounded-full" to="/landing">Connect Us</nuxt-link>
                        </p>
                    </div>
                    <img src="~/static/images/ref_img_1244.png" class="md:absolute static right-0 max-width-half">
                </div>
            </div>
        </div>
        <div class="clearfix mt-20 idea-sec-bg-img bg-cover">
            <div class="curve-bg-footer-bg-img py-24 clearfix">
                <div class="container lg m-auto text-white">
                    <div class="mt-5 w-4/5  m-auto text-center">
                        <h2 class="text-white md:text-6xl sm:text-5xl font-bold py-5">Create something amazing</h2>
                        <p class="text-white text-lg">Join free, launch project and start building your smart prototype.</p>
                        <button @click="showLoginModal=true" class="bg-pink-CM hover:bg-pink-400 text-white font-bold py-2 px-4 btn-lg rounded-full shadow-lg mt-5">Launch your Ideeza</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container lg m-auto mt-20">
            <div class="mt-5 w-6/12  text-left">
                <h3 class="text-purple-900 text-2xl font-bold">Top notch public projects </h3>
                <h2 class="text-gray-900 text-4xl font-bold">made with IDEEZA</h2>
                <p class="text-gray-900 text-lg">Success Stories from Ideeza’s growing comunity</p>
            </div>
            <div class="md:flex sm:block mt-20">
                <div class="md:w-6/12 sm:w-full px-3">
                    <img src="~static/images/silder-placeholder.png" class="inline-block">
                </div>
                <div class="md:w-6/12 sm:w-full px-3">
                    <h2 class="text-gray-900 text-5xl font-bold">John Doe’s Dream</h2>
                    <p class="text-gray-700 text-lg py-5 ">If you're on the fence on whether you need a big company behind you to succeed, these individuals prove that having vision and the drive is more than enough.</p>
                    <p class="text-gray-700 text-2xl font-bold py-5 bg-i">
                        <nuxt-link to="/success_story/" class="text-white py-2 btn-md bg-ideeza inline-block text-center text-lg rounded-full">View Story</nuxt-link>
                    </p>
                </div>
            </div>
        </div>
        <div class="footer-bg bg-cover clearfix mt-24">
            <div class="curve-bg-gradient-new pt-8 clearfix">
                <div class="container lg m-auto text-white">
                    <div class="mt-5 w-4/5  m-auto text-center">
                        <h2 class="text-white md:text-3xl sm:text-3xl font-bold py-5 ">Join a growing maker community</h2>
                        <button @click="showSignupModal=true" class="bg-pink-CM hover:bg-pink-400 text-white font-bold py-2 px-4 w-64 rounded-full shadow-lg mt-5">Join Now</button>
                    </div>
                    <div class="w-full md:flex flex-wrap border-t-2 pb-10 mt-10 border-pink-600">
                        <div class="flex-1 text-center md:text-left pt-5 w-full">
                            <img src="~static/images/logo-2.png" class="inline-block">
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
        <login v-if="showLoginModal" @close="showLoginModal=false" @signup="showLoginModal=false;showSignupModal=true" @reset="showLoginModal=false;showResetModal=true;" />
        <signup v-if="showSignupModal" @close="showSignupModal=false" @login="showSignupModal=false;showLoginModal=true" @signup="showSignupModal=false;showEmailSignupModal=true;" />
        <reset-password v-if="showResetModal" @login="showLoginModal=true;showResetModal=false" @close="showResetModal=false" />
        <email-signup v-if="showEmailSignupModal" @close="showEmailSignupModal=false" @login="showLoginModal=true;showEmailSignupModal=false" />
        <ManufacturerEmailSignup v-if="showManufacturerEmailSignupModal" @close="showManufacturerEmailSignupModal=false" @login="showLoginModal=true;showManufacturerEmailSignupModal=false" />
    </div>
</template>
<script>
    import Login from "~/components/reusables/Login.vue";
    import Signup from "~/components/reusables/Signup.vue";
    import EmailSignup from "~/components/reusables/EmailSignup.vue";
    import ManufacturerEmailSignup from "~/components/reusables/ManufacturerEmailSignup.vue";
    import ResetPassword from "~/components/reusables/ResetPassword.vue";
    import TopHeader from '~/components/reusables/Header';
    export default {
        components: {
            Login,
            Signup,
            ResetPassword,
            EmailSignup,
            ManufacturerEmailSignup,
            TopHeader,
        },
        data() {
            return {
                showLoginModal: false,
                showSignupModal: false,
                showResetModal: false,
                showEmailSignupModal: false,
                showManufacturerEmailSignupModal: false,
            }
        }
    }
</script>
<style>
    .landing-bg-gradient {
        background: rgb(98, 18, 156);
        background: linear-gradient(86deg, rgba(242, 3, 210, 1) 0%, rgba(98, 18, 156, 1) 100%);
    }

    .landingBanner-bg {
        background: url('~static/images/newhomeBanner_bg1.png') no-repeat right top;
        background-size: 80%;
    }

    .bg-pattern {
        background: url('~static/images/bg-pattren.png') no-repeat;
    }

    .footer-bg {
        background: url('~static/images/footer-bg.png') no-repeat center center;
    }

    .max-width-half {
        max-width: 45%;
        max-height: 100%;
        top: 0;
        bottom: 0;
        margin: auto;
    }

    .curve-bg-gradient-new {
        background: rgb(98, 18, 156);
        background: linear-gradient(180deg, rgba(98, 18, 156, 0.8) 0%, rgba(242, 3, 210, 0.8) 100%);
    }

    .video-sec {
        background: url('~static/images/chip-bg.png') no-repeat center center;
        background-size: 100%;
    }

    .video-screen {
        background: url('~static/images/screen-img.png') no-repeat center center;
        width: 824px;
        height: 493px;
        background-size: 100% 100%;
        padding: 33px 97px 70px 105px;
        max-width: 100%;
    }

    .idea-sec-bg-img {
        background: url('~static/images/ref_bg_1232.png') no-repeat center center;
    }
    #__layout{
        overflow-y:auto; 
    }
    .landingBanner-bg.home-content {
        overflow: unset;
        height: auto;
    }
    @media(max-width:736px) {
        .max-width-half {
            max-width: 100%;
        }
    }
</style>
