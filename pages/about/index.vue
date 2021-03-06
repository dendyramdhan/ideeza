<template>
    <div class="">
        <div class="curve-bg-gradient clearfix">
            <div class="curve-bg-top-img clearfix pb-24">
                <top-header />
                <nuxt />
                <div class="container lg m-auto text-white">
                    <div class="pb-5 mb-5 px-5">
                        <h2 class="md:text-6xl sm:text-4xl mt-5 font-bold text-white">IoT for Everyone’s Idea
            </h2>
                        <div class="lg:w-4/5 sm:w-full">
                            <p class="text-lg py-4 pr-5">Ideeza is an end-to-end platform for the design, development and manufacturing of smart, connected products. Machine learning, design libraries and partner manufacturers enables makers to ideate and build IoT prototypes or finished products at a fraction of the time & cost normally required.</p>
                        </div>
                        <div class="border-t border-pink-CM lg:flex sm:block mt-5 pt-5 text-center lg:text-left">
                            <div class="lg:w-1/3 sm:w-full py-5 px-3 lg:flex sm:block">
                                <div class="lg:w-1/4 sm:w-full"><img src="~static/images/brain.png" class="inline-block"></div>
                                <div class="lg:w-2/3 sm:w-full text-white">
                                    <h3 class="text-3xl text-white">AI-Assisted</h3>
                                    <p class="text-lg">Ideeza’s intuitive user experience and machine learning algorithms seamlessly translate ideas into functional 3D models, circuit boards and code</p>
                                </div>
                            </div>
                            <div class="lg:w-1/3 sm:w-full py-5 px-3 lg:flex sm:block">
                                <div class="lg:w-1/4 sm:w-full"><img src="~static/images/intelligence.png" class="inline-block"></div>
                                <div class="lg:w-2/3 sm:w-full text-white">
                                    <h3 class="text-3xl text-white">Maker Community</h3>
                                    <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, eiusmod tempor incididunt ut labore et dolore magna </p>
                                </div>
                            </div>
                            <div class="lg:w-1/3 sm:w-full py-5 px-3 lg:flex sm:block">
                                <div class="lg:w-1/4 sm:w-full"><img src="~static/images/brain.png" class="inline-block"></div>
                                <div class="lg:w-2/3 sm:w-full text-white">
                                    <h3 class="text-3xl text-white">Manufacturer Network</h3>
                                    <p class="text-lg">Our partners worldwide lend their IoT-ready facilities to the Ideeza community at competitive prices</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container lg m-auto shadow-lg mt-20">
            <div class="text-2xl pt-5 mt-12">
                <a href="#" @click="activeTab = 1" :class="[ activeTab === 1 ? 'text-pink-600' : 'text-gray-900' ]" class="px-3">Company</a>
                <a href="#" @click="activeTab = 2" :class="[ activeTab === 2 ? 'text-pink-600' : 'text-gray-900' ]" class="px-3">Team</a>
                <a href="#" @click="activeTab = 3" :class="[ activeTab === 3 ? 'text-pink-600' : 'text-gray-900' ]" class="px-3">Career</a>
            </div>
            <div class="mt-5 md:w-3/5 sm:w-full m-auto text-center" v-if="activeTab === 1">
                <h2 class="text-gray-900 text-3xl font-bold border-b border-gray-300 py-5">We believe in Makers so much, we built our own</h2>
                <p class="text-gray-700 text-lg py-5">Digital? We got that one almost right. Innovation’s next frontier is physical, and the Internet of Things is the bridge that will get us there. </p>
            </div>
            <div class="mt-5 md:w-3/5 sm:w-full m-auto text-center" v-if="activeTab === 2">
                <h2 class="text-gray-900 text-3xl font-bold border-b border-gray-300 py-5">We believe in Makers so much, we built our own</h2>
                <p class="text-gray-700 text-lg py-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </div>
            <div class="mt-5 md:w-3/5 sm:w-full m-auto text-center" v-if="activeTab === 3">
                <h2 class="text-gray-900 text-3xl font-bold border-b border-gray-300 py-5">We believe in Makers so much, we built our own</h2>
                <p class="text-gray-700 text-lg py-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem? Cum accusamus molestiae est laudantium expedita voluptate perspiciatis error corporis alias facilis aliquid, tenetur dolore voluptatem quia, asperiores aspernatur! Quis. </p>
            </div>
            <div class="md:flex sm:block">
                <div class="md:w-2/5 sm:w-full">
                    <img src="~static/images/chain-icon.png">
                </div>
                <div class="md:w-3/5 sm:w-full px-3">
                    <p class="text-gray-700 text-lg py-5 ">Millions of makers worldwide are bursting with ideas on how to build that bridge, but those ideas too often never see the light of day. That’s because building a simple connected prototype can take months, thousands of dollars and familiarity with an ever-changing tech stack.</p>
                    <p class="text-gray-700 text-2xl font-bold py-5">IoT is hard. But it doesn’t have to be</p>
                </div>
            </div>
            <div class="w-full mt-5 py-5 shadow-inner">
                <div class="mt-5 w-3/4  m-auto">
                    <p class="text-gray-700 text-lg py-5">What if we removed the heavy lifting from these hurdles and brought them all under one roof? What if we could make an “aggregate maker” with scale, knowledge and resources rivalling the largest companies?</p>
                    <h3 class="text-gray-700 text-2xl font-bold py-5 border-b border-gray-300">We did this by:</h3>
                    <ul class="list-disc mt-5 pl-5 mt-5 text-gray-700 text-lg">
                        <li>Making design & development automated and self-correcting with machine learning</li>
                        <li>Sourcing best practices from the community</li>
                        <li>Promising manufacturers a steady stream of industry-standard designs to build in their unused capacity</li>
                    </ul>
                    <h3 class="text-black text-2xl font-bold py-5 text-center">The result is Ideeza, a smarter maker, powered by the knowledge and drive of thousands of makers’ ideas, successes, mistakes.</h3>
                    <p class="my-5 py-5 text-center">
                        <button @click="showSignupModal=true" class="bg-pink-CM hover:bg-pink-400 text-white font-bold py-2 px-4 btn-lg rounded-full">Join Now</button>
                    </p>
                </div>
            </div>
        </div>
        <div class="curve-bg-gradient clearfix">
            <div class="curve-bg-footer-bg-img pt-32 clearfix">
                <div class="container lg m-auto text-white">
                    <div class="mt-5 w-4/5  m-auto">
                        <h2 class="text-white md:text-6xl sm:text-5xl font-bold py-5">Create something amazing</h2>
                        <p class="text-white text-lg">Join free, launch project and start building your smart prototype.</p>
                        <button @click="showSignupModal=true" class="bg-pink-CM hover:bg-pink-400 text-white font-bold py-2 px-4 btn-lg rounded-full shadow-lg mt-5">Launch your Ideeza</button>
                    </div>
                </div>
                <div class="float-right"><img src="~static/images/bot-hand.png"></div>
            </div>
        </div>
        <div class="footer-bg bg-cover clearfix">
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
    </div>
</template>
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
                activeTab: 1,
            }
        }
    }
</script>
