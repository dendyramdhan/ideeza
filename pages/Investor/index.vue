<template>
    <div class="">
        <div class="curve-bg-gradient clearfix">
            <div class="curve-bg-top-img clearfix">
                <TopHeader />
                <nuxt />
                <div class="relative justify-right flex flex-wrap w-full">
                    <div class="md:w-1/5 w-full">
                        <div class="static m-auto md:absolute bg-white p-10 rounded-sm succe_box-w md:ml-12 ml-0 shadow-lg">
                            <h2 class="text-3xl text-gray-900 font-bold">we make it easy for everyone to invest in Ideeza</h2>
                            <p class="text-lg mt-5">with ideeza we go together to invest in everythins. you receive a hugee amount of profit by investing in us by giving people the ability to make the things happen.</p>
                        </div>
                    </div>
                    <div class="md:w-4/5 w-full">
                        <iframe width="100%" height="800" src="https://www.youtube.com/embed/PdlO0NRWdtI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div class="container lg m-auto shadow-lg mt-20">
            <div class="mt-5 md:w-3/5 sm:w-full m-auto text-center">
                <h2 class="text-gray-900 text-4xl font-bold border-b border-gray-300 py-5">Our achivements</h2>
                <div class="w-2/4 m-auto">
                    <p class="text-gray-900 text-lg py-5">With Ideeza we go together to invest in everything. You receive a huge amount of profit by investing in us by giving people the ability to make the things happen.
                    </p>
                </div>
            </div>
            <carousel :navigationEnabled="true" :navigate-to="5" :paginationEnabled="false" :perPage="6">
                <slide class="text-center text-gray-900 font-bold border-b-2 border-pink-500">
                    August 2019
                </slide>
                <slide>
                    September 2019
                </slide>
                <slide>
                    October 2019
                </slide>
                <slide>
                    November 2019
                </slide>
                <slide>
                    December 2019
                </slide>
                <slide>
                    January 2020
                </slide>
                <slide>
                    February 2020
                </slide>
            </carousel>
            <div class="suggest-product2 inline-blockr text-center mt-10">
                <div class="inline-block h-10 w-10 rounded-full bg-pink-CM pt-1 text-center">
                    <img src="~static/images/arrow-left.png" class="inline-block">
                </div>
                <div class="inline-block px-5 text-gray-900 font-bold">
                    <nuxt-link to="">August 2019</nuxt-link>
                </div>
                <div class="inline-block px-5 py-3 text-gray-900 font-bold">
                    <nuxt-link to="">September 2019</nuxt-link>
                </div>
                <div class="inline-block px-5 py-3 text-gray-900 font-bold">
                    <nuxt-link to="">October 2019</nuxt-link>
                </div>
                <div class="inline-block px-5 py-3 text-gray-900 font-bold">
                    <nuxt-link to="">November 2019</nuxt-link>
                </div>
                <div class="inline-block px-5 py-3 text-gray-900 font-bold">
                    <nuxt-link to="">December 2019</nuxt-link>
                </div>
                <div class="inline-block px-5 py-3 border-b-2 border-pink-500 text-gray-900 font-bold">
                    <nuxt-link to="">January 2020</nuxt-link>
                </div>
                <div class="inline-block px-5 py-3 text-gray-900 font-bold">
                    <nuxt-link to="">February 2020</nuxt-link>
                </div>
                <div class="inline-block h-10 w-10 rounded-full bg-gray-300 pt-1 text-center">
                    <img src="~static/images/arrow-right.png" class="inline-block">
                </div>
            </div>
            <div class="flex flex-wrap mt-16 relative">
                <div class="md:w-1/3 sm:w-full px-8 mb-10">
                    <div class="text-center">
                        <img src="~static/images/arrow-down.png" class="inline-block">
                        <h3 class="text-2xl py-5 font-bold">Marketing</h3>
                    </div>
                    <div class="text-center investment-marketing-box">
                        <img src="~static/images/markering-icon.png">
                        <div class="investment-marketing-popup p-10 text-left rounded-lg shadow-xl">
                            <div class="relative">
                                <h3 class="text-2xl pb-5 font-bold">Marketing</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                                <div class="py-5">
                                    <img src="~static/images/invest-pop-banner.png" class="inline-block">
                                </div>
                                <img src="~static/images/tip-bg.png" class="absolute bottom-tip">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/3 sm:w-full px-8 mb-10">
                    <div class="text-center">
                        <img src="~static/images/invest-blog.png">
                    </div>
                    <h2 class="font-bold text-4xl text-gray-900 py-5">Free delivery</h2>
                    <p class="text-lg text-gray-900 py-5">Marketing is the crucial part of the Ideeza. We aim for making the marketplace even better than it is now for the whole world, so keep your eyes close.</p>
                    <div class="flex">
                        <div class="flex-1 text-gray-600 text-md">21 October, 2019</div>
                        <div class="flex-1">
                            <nuxt-link to="/blog" class="text-white px-5 py-3 rounded-lg bg-pink-CM inline-block">Read More</nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/3 sm:w-full px-8 mb-10">
                    <div class="text-center">
                        <img src="~static/images/invest-blog.png">
                    </div>
                    <h2 class="font-bold text-4xl text-gray-900 py-5">Free delivery</h2>
                    <p class="text-lg text-gray-900 py-5">Marketing is the crucial part of the Ideeza. We aim for making the marketplace even better than it is now for the whole world, so keep your eyes close.</p>
                    <div class="flex">
                        <div class="flex-1 text-gray-600 text-md">21 October, 2019</div>
                        <div class="flex-1">
                            <nuxt-link to="/blog" class="text-white px-5 py-3 rounded-lg bg-pink-CM inline-block">Read More</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-5 md:w-3/5 sm:w-full m-auto text-center">
                <h2 class="text-gray-900 text-4xl font-bold py-5">User traction</h2>
                <div class="w-2/4 m-auto">
                    <p class="text-gray-900 text-lg py-5">With Ideeza we go together to invest in everything. You receive a huge amount of profit.</p>
                </div>
            </div>
            <div class="flex flex-wrap mt-10 p-3">
                <div class="md:w-1/4 w-full">
                    <p class=" mb-5">Avg session duration</p>
                    <div class="text-3xl font-bold text-ideeza">03:02:01</div>
                    <img src="~static/images/graph.png" class="inline-block">
                </div>
                <div class="md:w-3/4 w-full relative">
                    <div class="text-xl text-gray-900 mb-5">Growth chart <span class="text-sm text-gray-500">This Month</span></div>
                    <img src="~static/images/graph2.png" class="inline-block">
                </div>
            </div>
            <div class="w-full mt-24 py-5">
                <div class="flex flex-wrap">
                    <div class="md:w-2/4 w-full">
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/fcu97dta2_E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="md:w-2/4 w-full relative">
                        <div class="md:absolute static bg-white p-10 rounded-sm  md:mr-12 mr-0 succe_box-w2 shadow-lg">
                            <h2 class="text-3xl text-gray-900 font-bold">Know more about us</h2>
                            <p class="text-lg">With Ideeza we go together to invest in everything. You receive a huge amount of profit by investing in us by giving people the ability to make the things happen.
                            </p>
                            <div class="flex text-center">
                                <div class="flex-1 mt-10"><img src="~static/images/download.png" class="inline-block">
                                    <a href="/static/files/ES-IDEZZA.pdf" download class="text-lg text-gray-900 font-bold">Download the<br /> pitchdeck</a>
                                </div>
                                <div class="flex-1 mt-10"><img src="~static/images/download.png" class="inline-block">
                                    <a href="/static/files/IDEEZA-Presentation.pdf" download class="text-lg text-gray-900 font-bold">Download <br />Executive summary</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-16 text-center">
                <h2 class="text-5xl font-bold">Want to work with us?</h2>
                <button @click="showSignupModal=true" class="text-white px-10 mt-10 py-4 rounded-lg btn-gradient-bg inline-block text-xl">Yes, Continue</button>
            </div>
        </div>
        <div class="curve-bg-gradient clearfix">
            <div class="curve-bg-footer-bg-img2 pt-32 clearfix">
                <div class="container lg m-auto text-white">
                    <div class="mt-5 w-4/5  m-auto text-center">
                        <h2 class="text-white md:text-3xl sm:text-3xl font-bold py-5 ">Join a growing maker community</h2>
                        <button @click="showSignupModal=true" class="bg-pink-CM hover:bg-pink-400 text-white font-bold py-2 px-4 btn-lg rounded-full shadow-lg mt-5">Join Now</button>
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
        <login v-if="showLoginModal" @close="showLoginModal=false" @signup="showLoginModal=false;showSignupModal=true" @reset="showLoginModal=false;showResetModal=true;" />
        <signup v-if="showSignupModal" @close="showSignupModal=false" @login="showSignupModal=false;showLoginModal=true" @signup="showSignupModal=false;showEmailSignupModal=true;" />
        <reset-password v-if="showResetModal" @login="showLoginModal=true;showResetModal=false" @close="showResetModal=false" />
        <email-signup v-if="showEmailSignupModal" @close="showEmailSignupModal=false" @login="showLoginModal=true;showEmailSignupModal=false" />
    </div>
</template>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js"></script>
<script>
    import TopHeader from '~/components/reusables/Header';
    import Login from "~/components/reusables/Login.vue";
    import Signup from "~/components/reusables/Signup.vue";
    import EmailSignup from "~/components/reusables/EmailSignup.vue";
    import ResetPassword from "~/components/reusables/ResetPassword.vue";
    export default {
        components: {
            TopHeader,
            Login,
            Signup,
            ResetPassword
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
