<template>
    <div :class="{'hide-left-bar':!leftMenu}" class="flex builder-panel main-panel">
        <!--  Left Side Bar  -->
        <LeftMenu />
        <!-- Main Contents -->
        <div class="flex-grow lg:p-10">
            <div class="lg:flex p-2 lg:p-5 xl:p-20 bg-white shadow-md">
                <div class="left-panel">
                    <img class="w-full" :src="avata_img_url + additional_contactinfos.avatar" alt />
                    <div class="mt-10 mb-5 semi-border relative">
                        <span class="font-semibold text-gray-500 pr-3 bg-white">SOCIAL MEDIA</span>
                    </div>
                    <div class>
                        <font-awesome-icon class="mr-2 h-6 text-gray-500 text-4xl hover:text-gray-800 cursor-pointer" :icon="['fab', 'facebook-square']" />
                        <font-awesome-icon class="mr-2 h-6 text-gray-500 text-4xl hover:text-gray-800 cursor-pointer" :icon="['fab', 'linkedin']" />
                        <font-awesome-icon class="mr-2 h-6 text-gray-500 text-4xl hover:text-gray-800 cursor-pointer" :icon="['fab', 'behance-square']" />
                        <font-awesome-icon class="mr-2 h-6 text-gray-500 text-4xl hover:text-gray-800 cursor-pointer" :icon="['fab', 'dribbble-square']" />
                    </div>
                    <div class="mt-10 mb-5 semi-border relative">
                        <span class="font-semibold text-gray-500 pr-3 bg-white">SKILLS</span>
                    </div>
                    <div class="mt-10">
                        <span class="font-semibold text-ideeza-dark block text-lg">Product Design</span>
                        <span class="font-semibold text-ideeza-dark block text-lg">Electronics</span>
                        <span class="font-semibold text-ideeza-dark block text-lg">3D Modeling</span>
                        <span class="font-semibold text-ideeza-dark block text-lg">Prototyping</span>
                        <span class="font-semibold text-ideeza-dark block text-lg">3D Max</span>
                        <span class="font-semibold text-ideeza-dark block text-lg">AutoCad</span>
                    </div>
                </div>
                <div class="lg:ml-16 flex-grow">
                    <div class="w-full flex justify-between items-top">
                        <div class="lg:flex items-top">
                            <div class="text-3xl font-semibold leading-none">
                                {{general_contactinfos.firstname + ' ' + general_contactinfos.lastname}}
                                <span class="block font-normal text-base text-ideeza-dark mt-3">{{additional_contactinfos.work}}</span>
                            </div>
                            <div class="lg:ml-10 text-gray-500">
                                <font-awesome-icon class="mr-1 h-6 align-middle" :icon="['fas', 'map-marker-alt']" /> {{general_contactinfos.address}}
                            </div>
                        </div>
                        <nuxt-link to="/user/settings/general">
                            <font-awesome-icon class="mr-1 h-4 text-sm inline-block cursor-pointer" :icon="['fas', 'cog']" />
                        </nuxt-link>
                    </div>
                    <div class="lg:mt-10">
                        <span class="text-gray-500 block">RATINGS</span>
                        <div class="flex items-center">
                            <span class="text-gray-800 font-semibold text-xl">{{general_contactinfos.rating}}</span>
                            <img class="rating-star" src="~/static/images/star.png" alt />
                            <img class="rating-star" src="~/static/images/star.png" alt />
                            <img class="rating-star" src="~/static/images/star.png" alt />
                            <img class="rating-star" src="~/static/images/star.png" alt />
                            <img class="rating-star" src="~/static/images/star.png" alt />
                        </div>
                    </div>
                    <!--Tabs-->
                    <div class="tabs-container z-10 relative flex lg:mt-20">
                        <div @click="tabItem='about'" class="tab-item" :class="{active: tabItem === 'about', 'border-bot': tabItem !== 'about'}">
                            <font-awesome-icon class="mr-3 h-5" :icon="['fas', 'user']" />About
                        </div>
                        <div @click="tabItem='projects'" class="tab-item" :class="{active: tabItem === 'projects', 'border-bot': tabItem !== 'projects'}">
                            <font-awesome-icon class="mr-3 h-5" :icon="['fas', 'lightbulb']" />Projects
                        </div>
                        <div @click="tabItem='reviews'" class="tab-item" :class="{active: tabItem === 'reviews', 'border-bot': tabItem !== 'reviews'}">
                            <font-awesome-icon class="mr-3 h-5" :icon="['fas', 'star']" />Reviews
                        </div>
                        <div @click="tabItem='friends'" class="tab-item" :class="{active: tabItem === 'friends', 'border-bot': tabItem !== 'friends'}">
                            <font-awesome-icon class="mr-3 h-5" :icon="['fas', 'users']" />Friends
                        </div>
                        <div @click="tabItem='activities'" class="tab-item" :class="{active: tabItem === 'activities', 'border-bot': tabItem !== 'activities'}">
                            <font-awesome-icon class="mr-3 h-5" :icon="['fas', 'users']" />Activities
                        </div>
                    </div>
                    <!--About-->
                    <div class="mt-5" v-if="tabItem === 'about'">
                        <div class="flex justify-between items-center">
                            <h1 class="text-gray-500 font-semibold txt-xl my-10">CONTACT INFORMATION</h1>
                            <nuxt-link to="/user/settings/general">
                                <button class="btn btn-normal btn-small px-2">Edit profile</button>
                            </nuxt-link>
                        </div>
                        <div class="flex mb-5 font-semibold text-lg">
                            <div class="heading-contact">Phone:</div>
                            <div class="text-ideeza-dark">{{general_contactinfos.phone}}</div>
                        </div>
                        <div class="flex mb-5 font-semibold text-lg">
                            <div class="heading-contact">Address:</div>
                            <div class>{{general_contactinfos.address}}</div>
                        </div>
                        <div class="flex mb-5 font-semibold text-lg">
                            <div class="heading-contact">Email:</div>
                            <div class="text-ideeza-dark">{{general_contactinfos.email}}</div>
                        </div>
                        <div class="flex mb-5 font-semibold text-lg">
                            <div class="heading-contact">Website:</div>
                            <div class="text-ideeza-dark">{{general_contactinfos.website}}</div>
                        </div>
                        <h1 class="text-gray-500 font-semibold txt-xl my-10">BASIC INFORMATION</h1>
                        <div class="flex mb-5 font-semibold text-lg">
                            <div class="heading-contact">Birthday:</div>
                            <div class>{{general_contactinfos.birthday}}</div>
                        </div>
                        <div class="flex mb-5 font-semibold text-lg">
                            <div class="heading-contact">Gender:</div>
                            <div class>{{general_contactinfos.sex}}</div>
                        </div>
                    </div>
                    <!--Projects-->
                    <div class="mt-5 flex flex-wrap" v-if="tabItem === 'projects'">
                        <!--Public & Private Projects-->
                        <div class="tabs-container z-10 relative flex lg:mt-10">
                            <div @click="tabChildItem='private'" class="tab-item" :class="{active: tabChildItem === 'private', 'border-bot': tabChildItem !== 'private'}">
                                Private
                            </div>
                            <div @click="tabChildItem='public'" class="tab-item" :class="{active: tabChildItem === 'public', 'border-bot': tabChildItem !== 'public'}">
                                Public
                            </div>
                        </div>
                        <div class="mt-8 flex flex-wrap" v-if="tabChildItem === 'public'">
                            <drop-down class="w-full mt-3" :value="1" :data="['Owner','Part of team']" />
                            <div class="flex" v-for="project in projects">
                                <div class="relative" v-for="product in project.products">
                                    <img class="project-image" :src="project_image_url + product.product_image" alt />
                                    <div class="absolute bottom-0 right-0 text-right px-3 py-3 text-md w-90">
                                        <div class="flex text-lg text-white text-sm">
                                            <div class="flex-1 flex items-center mr-2 tooltip">
                                                <div class="inline-block">
                                                    <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']" />
                                                </div>
                                                <div>211</div>
                                                <span class="tooltiptext">Views</span>
                                            </div>
                                            <div class="flex-1 flex items-center mr-2 tooltip">
                                                <img src="~/static/images/ideeza-play-icon.png" class="inline-block mr-2">
                                                <div>76</div>
                                                <span class="tooltiptext">Activities</span>
                                            </div>
                                            <div class="flex-1 items-center flex mr-2 tooltip">
                                                <img src="~/static/images/likeWhite.png" class="inline-block mr-2">
                                                <div>35</div>
                                                <span class="tooltiptext">Likes</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-8 flex flex-wrap" v-if="tabChildItem === 'private'">
                            <div class="flex" v-for="project in projects">
                                <div class="relative" v-for="product in project.products">
                                    <img class="project-image" :src="project_image_url + product.product_image" alt />
                                    <div class="absolute bottom-0 right-0 text-right px-3 py-3 text-md w-90">
                                        <div class="flex text-lg text-white text-sm">
                                            <div class="flex-1 flex items-center mr-2 tooltip">
                                                <div class="inline-block">
                                                    <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']" />
                                                </div>
                                                <div>211</div>
                                                <span class="tooltiptext">Views</span>
                                            </div>
                                            <div class="flex-1 flex items-center mr-2 tooltip">
                                                <img src="~/static/images/ideeza-play-icon.png" class="inline-block mr-2">
                                                <div>76</div>
                                                <span class="tooltiptext">Activities</span>
                                            </div>
                                            <div class="flex-1 items-center flex mr-2 tooltip">
                                                <img src="~/static/images/likeWhite.png" class="inline-block mr-2">
                                                <div>35</div>
                                                <span class="tooltiptext">Likes</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Reviews-->
                    <div class="mt-5" v-if="tabItem === 'reviews'" style="overflow: scroll; height: 600px">
                        <div class="mb-10 mt-5" v-for="review in reviews">
                            <div class="flex justify-between items-center w-full">
                                <div class="flex items-center">
                                    <img class="feed-avatar w-16 rounded-full mr-5" :src="review.avatar" alt />
                                    <div class>
                                        <span class="font-semibold text-ideeza-dark inline-block mr-5">{{review.name}}</span>
                                        <span class="font-sm text-gray-500">Reviewed {{new Date(review.created_at).getDate()}} days ago</span>
                                    </div>
                                </div>
                                <div class="flex items-center text-gray-500 text-sm hover:text-gray-800 cursor-pointer" @click="onReport">
                                    <font-awesome-icon class="mr-2 h-4" :icon="['fas', 'flag']" />Report
                                </div>
                            </div>
                            <div class="mt-5 border rounded-lg border-solid border-gray-500 p-5 text-sm">
                                <div class="flex justify-between">
                                    <div class="text-lg font-semibold">"{{review.title}}"</div>
                                    <div>
                                        <img class="rating-star" src="~/static/images/star.png" alt />
                                        <img class="rating-star" src="~/static/images/star.png" alt />
                                        <img class="rating-star" src="~/static/images/star.png" alt />
                                        <img class="rating-star" src="~/static/images/star.png" alt />
                                        <img class="rating-star" src="~/static/images/star.png" alt />
                                    </div>
                                </div>
                                <p class="font-sm my-5">{{review.description}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5" v-if="tabItem === 'friends'" style="overflow-y: auto; height: 600px">
                        <div class="flex flex-wrap friends">
                            <div class="mr-2 max-w-2xl">
                                <div class="border border-gray">
                                    <div class="bg-gray-200 h-32 w-full"></div>
                                    <img src="https://randomuser.me/api/portraits/men/17.jpg" class="-mt-20 mx-auto rounded-full mb-3">
                                    <div class="text-center mb-3">
                                        <font-awesome-icon class="h-6 text-gray-500 inline text-4xl hover:text-gray-800 cursor-pointer" :icon="['fas', 'network-wired']" />
                                        <span class="inline">25 mutual connections</span>
                                    </div>
                                    <div class="flex mb-3 mx-2">
                                        <div class="flex-1">
                                            <h3 class="font-bold text-xl">Jhon Doe</h3>
                                            <p>Technician</p>
                                        </div>
                                        <div class="flex-1">
                                            <button class="px-4 py-3 text-center text-ideeza border border-ideeza rounded bg-white w-full">
                                                Visit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mr-2 max-w-2xl">
                                <div class="border border-gray">
                                    <div class="bg-gray-200 h-32 w-full"></div>
                                    <img src="https://randomuser.me/api/portraits/men/17.jpg" class="-mt-20 mx-auto rounded-full mb-3">
                                    <div class="text-center mb-3">
                                        <font-awesome-icon class="h-6 text-gray-500 inline text-4xl hover:text-gray-800 cursor-pointer" :icon="['fas', 'network-wired']" />
                                        <span class="inline">25 mutual connections</span>
                                    </div>
                                    <div class="flex mb-3 mx-2">
                                        <div class="flex-1">
                                            <h3 class="font-bold text-xl">Jhon Doe</h3>
                                            <p>Technician</p>
                                        </div>
                                        <div class="flex-1">
                                            <button class="px-4 py-3 text-center text-ideeza border border-ideeza rounded bg-white w-full">
                                                Visit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mr-2 max-w-2xl">
                                <div class="border border-gray">
                                    <div class="bg-gray-200 h-32 w-full"></div>
                                    <img src="https://randomuser.me/api/portraits/men/17.jpg" class="-mt-20 mx-auto rounded-full mb-3">
                                    <div class="text-center mb-3">
                                        <font-awesome-icon class="h-6 text-gray-500 inline text-4xl hover:text-gray-800 cursor-pointer" :icon="['fas', 'network-wired']" />
                                        <span class="inline">25 mutual connections</span>
                                    </div>
                                    <div class="flex mb-3 mx-2">
                                        <div class="flex-1">
                                            <h3 class="font-bold text-xl">Jhon Doe</h3>
                                            <p>Technician</p>
                                        </div>
                                        <div class="flex-1">
                                            <button class="px-4 py-3 text-center text-ideeza border border-ideeza rounded bg-white w-full">
                                                Visit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mr-2 max-w-2xl">
                                <div class="border border-gray">
                                    <div class="bg-gray-200 h-32 w-full"></div>
                                    <img src="https://randomuser.me/api/portraits/men/17.jpg" class="-mt-20 mx-auto rounded-full mb-3">
                                    <div class="text-center mb-3">
                                        <font-awesome-icon class="h-6 text-gray-500 inline text-4xl hover:text-gray-800 cursor-pointer" :icon="['fas', 'network-wired']" />
                                        <span class="inline">25 mutual connections</span>
                                    </div>
                                    <div class="flex mb-3 mx-2">
                                        <div class="flex-1">
                                            <h3 class="font-bold text-xl">Jhon Doe</h3>
                                            <p>Technician</p>
                                        </div>
                                        <div class="flex-1">
                                            <button class="px-4 py-3 text-center text-ideeza border border-ideeza rounded bg-white w-full">
                                                Visit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import LeftMenu from "~/components/user/common-left-side-menu.vue";
    import contactinfos from "~/json/contactinfos";
    import apiServiceWithToken from "~/apiService/have_token.js";
    import dropDown from "~/components/form/dropdown-field";

    export default {
        middleware: "auth",
        layout: "user",
        name: "profile-index",
        components: {
            LeftMenu,
            dropDown
        },
        data: function() {
            return {
                tabItem: "about",
                tabChildItem: "public",
                focusMore: false,
                showComments: false,
                general_contactinfos: {},
                additional_contactinfos: {},
                reviews: [],
                projects: [],
                shared_projects: [],
                avata_img_url: process.env.avatar_base_url,
                project_image_url: process.env.project_image_url
            };
        },
        computed: {
            leftMenu() {
                return this.$store.state.usermenu.openLeftMenu;
            }
        },

        mounted() {
            let getallcontactsurl = "/api/user/get_profile";
            let getallcontactsData = {
                method: "get",
                url: getallcontactsurl,
                data: null
            };
            if (this.$route.query) {
                if (this.$route.query.tab) {
                    this.tabItem = this.$route.query.tab;
                }
            }
            console.log(this.$route.query)
            apiServiceWithToken(getallcontactsData, response => {
                if (response.data["success"] == true) {
                    this.general_contactinfos = response.data["data"].general_profile;
                    this.additional_contactinfos = response.data["data"].additional_profile;
                    console.log("contactinfos: ", this.general_contactinfos);
                }
            });

            let getallreviewsurl = "/api/user/reviews";
            let getallreviewsData = {
                method: "get",
                url: getallreviewsurl,
                data: null
            };

            apiServiceWithToken(getallreviewsData, response => {
                if (response.data["success"] == true) {
                    this.reviews = response.data["reviews"];
                    console.log("reviews: ", this.reviews);
                }
            });

            let getallmyprojectsurl = "/api/project/get_all";
            let getallmyprojectsData = {
                method: "get",
                url: getallmyprojectsurl,
                data: null
            };

            apiServiceWithToken(getallmyprojectsData, response => {
                if (response.data["success"] == true) {
                    this.projects = response.data["data"];
                    console.log("allmyprojects: ", this.projects);
                }
            });

            let getallmysharedprojectsurl = "/api/project/shared_project";
            let getallmysharedprojectsData = {
                method: "get",
                url: getallmysharedprojectsurl,
                data: null
            };

            apiServiceWithToken(getallmysharedprojectsData, response => {
                if (response.data["success"] == true) {
                    this.shared_projects = response.data["data"];
                    console.log("allmysharedprojects: ", this.shared_projects);
                }
            });
        },

        methods: {
            onClickOutside() {
                    this.focusMore = false;
                },
                onLike() {
                    alert();
                },
                onShare() {
                    alert();
                },
                onComment() {
                    alert();
                },
                onReport() {
                    alert();
                }
        }
    };
</script>
<style scoped>
    .profile-panel {
        width: 100%;
        max-width: 1533px;
    }

    .left-panel {
        width: 100%;
    }

    .semi-border {
        @apply z-10;
    }

    .semi-border:before {
        @apply border-t-4 border-solid border-gray-200;
        content: "";
        margin: 0 auto;
        /* this centers the line to the full width specified */
        position: absolute;
        /* positioning must be absolute here, and relative positioning must be applied to the parent */
        left: 0;
        right: 0;
        bottom: 4px;
        z-index: -1;
    }

    .rating-star {
        @apply inline ml-3;
        width: 20px;
        height: 20px;
    }

    .tab-item {
        @apply cursor-pointer z-50 bg-white px-5 py-5 font-semibold text-xl text-gray-500 flex items-center;
    }

    .tab-item.border-bot {
        border-bottom: 4px solid #edf2f7;
    }

    .tab-item.active {
        @apply border-t-4 border-l-4 border-r-4 border-solid border-gray-200 text-ideeza;
    }

    .tabs-container:before {
        @apply border-t-4 border-solid border-gray-200;
        content: "";
        margin: 0 auto;
        /* this centers the line to the full width specified */
        position: absolute;
        /* positioning must be absolute here, and relative positioning must be applied to the parent */
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

    .heading-contact {
        width: 150px;
    }

    .project-image {
        @apply mr-2 mb-2;
        max-width: 285px;
    }

    .feed-comment-avatar {
        width: 48px;
    }

    @screen lg {
        .left-panel {
            max-width: 366px;
        }
    }

    .friends>div {
        width: 32%;
        @apply mb-2;
    }
</style>
