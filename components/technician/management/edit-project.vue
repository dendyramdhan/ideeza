<template>
    <div @click.self="close" class="popup-overlay">
        <div class="popup-overlay--contents add-new-container" @click.stop>
            <!--Header-->
            <div class="flex justify-between border-b border-ideeza">
                <input type="text" class="outline-none border-0 text-ideeza text-2xl placeholder-ideeza lg:w-1/2" placeholder="Edit Project Name..." v-model="project.title" />
                <font-awesome-icon @click="close" class="mr-1 h-4 cursor-pointer text-gray-500 hover:text-gray-800" :icon="['fas', 'times']" />
            </div>

            <!--Contents-->
            <div class="mt-10 flex flex-wrap popup-body">
                <div class="lg:w-1/2">
                    <div class="flex justify-between items-center">
                        <h1 class="text-ideeza-dark text-lg font-semibold">Project Description</h1>
                        <div @click="project.edit=!project.edit;$forceUpdate()" class="flex items-center text-gray-500 hover:text-gray-800 cursor-pointer">
                            <span class="text-sm inline-block mr-1">Edit</span>
                            <font-awesome-icon class="mr-1 h-3" :icon="['fas', 'pen']" />
                        </div>
                    </div>
                    <div class="mt-5">
                        <textarea v-if="project.edit==true" placeholder="Edit project description here ...." v-model="project.description" style="width:100%;height:150px;"></textarea>
                        <div class="text-black" style="width:100%;height:150px;" v-else>
                            {{project.description}}
                        </div>
                        <!-- <TextAreaField rows="5" placeholder="Add project description here ...." @change="projectdescription" /> -->
                    </div>
                    <div class="mt-5 text-lg">
                        <div class="flex justify-between items-center">
                            <h4 class="text-ideeza-dark">Tasks</h4>
                            <div class="flex items-center text-gray-500 hover:text-gray-800 cursor-pointer">
                                <span class="text-sm inline-block mr-1">Edit</span>
                                <font-awesome-icon class="mr-1 h-3" :icon="['fas', 'pen']" />
                            </div>
                        </div>
                        <div class="mt-3">
                            <table>
                                <template v-for="(task,index) in tasks">
                                    <tr :class="{'bg-ideeza-100':index%2==0,'bg-ideeza-300':index%2!=0}">
                                        <td class="cursor-pointer" @click="taskdetailtrue(task.id)">
                                            <!-- @click.self="detailTask=true;window.$nuxt.$cookies.set('techniciantaskid', task.id)" -->
                                            <!-- <font-awesome-icon class="mr-1 text-lg text-ideeza" :icon="['fas', 'caret-up']" /> -->
                                            {{task.name}}
                                        </td>
                                        <td>
                                            <img v-for="image in task.assigned_user" :src="avata_img_url + image.avatar" class="avatar" />
                                        </td>
                                        <td class="text-center">
                                            {{new Date(parseInt(task.start)).getDate()+'.'+ new Date(parseInt(task.start)).getMonth()+'.'+ new Date(parseInt(task.start)).getFullYear() }}
                                        </td>
                                    </tr>
                                </template>
                            </table>
                            <div class="mt-4">
                                <button class="bg-ideeza-dark text-white p-2 font-semibold">Add New Tasks +</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:ml-20 flex-1 pr-20">
                    <div class="flex items-center">
                        <span class="text-black text-base inline-block font-semibold text-lg">Project Duration&nbsp;:&nbsp;</span>
                        <!--Calendar-->
                        <span class="text-ideeza font-semibold">
                {{new Date(parseInt(project.start,10)).getDate()+ ' '+ months[new Date(parseInt(project.start,10)).getMonth()]}} - {{new Date(parseInt(project.end,10)).getDate()+ ' '+ months[new Date(parseInt(project.end,10)).getMonth()]}}
            </span>
                        <vc-date-picker v-model="dateRange" color="pink" mode="range" :value="[new Date(parseInt(project.start,10)),new Date(parseInt(project.end,10))]" :popover="{ placement: 'bottom', visibility: 'click' }" @change="projectdeadline">
                            <font-awesome-icon class="ml-2 h-4 cursor-pointer text-gray-800" :icon="['fas', 'calendar-alt']" />
                        </vc-date-picker>
                    </div>

                    <div class="mt-5">
                        <span class="inline-block mb-2 text-black font-semibold text-lg">Status</span>
                        <select @change="projectstatus" styleHeight="mini" v-model="project.status">
                            <option v-for="options in markStatusData" :value="options">{{options}}</option>
                        </select>
                        <!-- <DropDownField :data="markStatusData" styleHeight="mini" @change="projectstatus" /> -->
                    </div>

                    <div class="mt-10 relative font-semibold text-lg">
                        Assigned members:
                        <button @click.self="showMembers = true" class="ml-5 btn btn-small btn--ideeza px-2 text-xs">Add +</button>
                        <div v-for="n in 5" class="mt-2 flex members justify-between items-center">
                            <div class="flex items-center">
                                <img src="https://picsum.photos/200" class="mr-2 rounded-full w-8">
                                <div class="text-black font-normal mr-2">She is someone, manager</div>
                            </div>
                            <div>
                                <font-awesome-icon @click="close" class="mr-1 h-4 cursor-pointer text-ideeza hover:text-gray-800" :icon="['fas', 'trash']" />
                            </div>
                        </div>
                    </div>
                    <div class="flex-grow mt-5">
                        <div class="text-2xl text-black">Attachments</div>
                        <div class="p-5 bg-white">
                            <span class="block text-xs">{{project.attach.length}} pics attached</span>
                            <div class="flex flex-wrap attached-images-wrapper mt-2">
                                <!-- <img src="https://picsum.photos/200" alt /> -->
                                <span v-for="image in project.attach">
                    <img :src="task_img_url + image.image" />
                  </span>
                                <img src="https://picsum.photos/200" alt />
                                <!-- <img v-for="image in info.attach" :src="project_img_url+image.image" alt />{{project_img_url}}{{image.image}} -->
                            </div>
                            <div class="text-xs mt-5">
                                link attached:
                                <a class="text-blue-500" href="https://google.com">https://google.com</a>
                            </div>
                        </div>
                    </div>
                    <div class="mt-10">
                        <span class="inline-block mb-2">Attach</span>
                        <img id="image" />
                        <form enctype="multipart/form-data">
                            <input type="file" @change="fileseleted" ref="file_upload" class="btn btn-normal btn--ideeza px-10 py-4 block lg: iinline-block" style="display:none" />
                        </form>
                        <div class="text-ideeza-dark cursor-pointer">
                            <font-awesome-icon @click="$refs.file_upload.click()" class="mr-1 text-xs" :icon="['fas', 'paperclip']" /> Add Attachments +
                        </div>
                        <!-- <FileField /> -->
                    </div>
                </div>
                <div class="mt-20 w-full">
                    <div class="gradient-bg px-8 py-5 text-white">Timeline</div>

                    <task-timeline />
                </div>
            </div>
        </div>
        <!-- {{articleArray}} -->
    </div>
</template>

<script>
    import TextAreaField from "~/components/form/text-area.vue";
    import DropDownField from "~/components/form/dropdown-field.vue";
    import SearchField from "~/components/form/search-mini.vue";
    import CheckBoxField from "~/components/form/checkbox-plus.vue";
    import FileField from "~/components/form/file-field.vue";

    import apiService from "~/apiService/have_token.js";
    import apiService2 from "~/apiService/get_param.js";
    import TaskTimeline from "~/components/technician/management/task-timeline.vue";
    export default {
        name: "edit-project",
        props: {
            project: {
                default: null,
                type: Object
            },
            tasks: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        data: function() {
            return {
                dateRange: new Date().toISOString().slice(0, 10),
                showMembers: false,
                markStatusData: ["Waiting", "Active", "Completed", "Over Due"],
                geturl: "/api/project/add_project",
                task_img_url: process.env.task_image_url,
                name: null,
                description: null,
                start: null,
                end: null,
                status: null,
                file: null,
                user: [],
                geturl2: "/api/user/get_list",
                articleArray: [],
                articleArrayaxios: [],
                articleArrayrout: [],
                randomNumber: [],
                projectidd: null,
                avata_img_url: process.env.avatar_base_url,
                months: [
                    "Jan", "Feb", "March", "April", "May", "June",
                    "July", "Aug", "Sep", "Oct", "Nov", "Dec"
                ],
                options: [
                    'Active',
                    'Inactive',
                    'Complete'
                ]
            };
        },
        mounted() {
            this.$store.commit("TechnicianProjectStore/viewflagchange2");
            let sendData = {
                method: "get",
                url: this.geturl2,
                data: null
            };

            apiService2(sendData, response => {
                console.log(response.data);
                // this.randomNumber = response.data;
                this.articleArrayaxios = Object.values(response.data.data);

                this.articleArrayaxios.map(item => {
                    this.articleArrayrout.push(item);
                    this.articleArray.push(item);
                });
            });
        },
        components: {
            TextAreaField,
            DropDownField,
            SearchField,
            CheckBoxField,
            FileField,
            TaskTimeline
        },
        methods: {
            uploadUserBlog() {
                    const formData = new FormData();
                    formData.set("user", this.articlena);
                    formData.set("user", this.articlena);
                    formData.set("name", this.name);
                    formData.set("description", this.description);
                    formData.set("start", this.start);
                    formData.set("end", this.end);
                    formData.set("status", this.status);
                    formData.append("attached", this.file);
                    let sendData = {
                        method: "post",
                        url: this.geturl,
                        data: formData
                    };

                    apiService(sendData, response => {
                        console.log(response);
                    });
                },
                fileseleted(evt) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        // get loaded data and render thumbnail.
                        document.getElementById("image").src = e.target.result;
                    };
                    // read the image file as a data URL.
                    reader.readAsDataURL(evt.target.files[0]);

                    // this.file = this.$refs.file.files[0];
                    console.log("file_upload:", evt);
                    this.file = evt.target.files[0];
                },
                projectname(event) {
                    this.name = event.target.value;
                },
                projectdescription(event) {
                    this.description = event.target.value;
                },
                projectdeadline(event) {
                    this.dateRange = event.target.value;
                    console.log("datapicker:", this.dateRange)
                },
                projectstatus(event) {
                    this.status = event.target.value;
                },
                projectuser(event) {
                    this.user.push(event)
                },
                send_add_request() {
                    this.start = new Date(this.dateRange.start).getTime()
                    this.end = new Date(this.dateRange.end).getTime()
                    if (this.start == null || this.end == null || this.user == null || this.name == null || this.description == null || this.status == null || this.file == null) {
                        alert("please input/select all data!!!")
                    } else {
                        const formData = new FormData();
                        this.user.map(item => {
                                console.log("only:", item)
                                formData.set("user", item);
                            })
                            // formData.set("user", this.articlena);
                            // formData.set("user", this.articlena);
                        formData.set("name", this.name);
                        formData.set("description", this.description);
                        formData.set("start", this.start);
                        formData.set("end", this.end);
                        formData.set("status", this.status);
                        formData.append("attached", this.file);
                        let sendData = {
                            method: "post",
                            url: this.geturl,
                            data: formData
                        };

                        apiService(sendData, response => {
                            console.log(response);
                            window.location.reload();

                        });

                        // alert("sending your add requset!!!"+this.name+this.description+this.status+new Date(this.dateRange.start).getTime() +"---------"+new Date(this.dateRange.end).getTime()+"ggg"+this.user);
                        //  this.user.map(item=>{
                        //   console.log("only:", item)
                        // })

                        console.log("timestart:", this.start)
                        console.log("timeend:", this.end)

                        this.$emit("onClose");
                    }

                },
                close() {
                    this.$emit("onClose");
                },
                hideMembers() {
                    this.showMembers = false;
                }
        },
        computed: {
            activityDate: {
                get() {
                        return new Date(this.dateRange);
                    },
                    set(val) {
                        console.log(val);
                        this.dateRange = val.toISOString().slice(0, 10);
                    },
            },
        }
    };
</script>

<style scoped>
    .add-new-container {
        @apply w-full h-full p-20;
        max-width: 1300px;
        max-height: 900px;
    }

    .members-container {
        height: 200px;
        overflow-y: auto;
    }

    .member-name {
        @apply text-gray-600 ml-2;
        font-size: 10px;
        font-weight: lighter;
    }

    .avatar {
        @apply w-4 rounded-full inline;
    }

    .popup-body {
        max-height: 100%;
        overflow-y: auto;
    }

    @screen lg {
        table {
            @apply mb-5 w-full table-fixed border-collapse text-gray-600;
        }
        thead tr {
            @apply bg-white px-6 pl-16;
        }
        thead th {
            @apply p-6;
        }
        thead th:first-child {
            @apply pl-16;
        }
        tbody td {
            @apply p-6 border-r border-solid border-gray-300;
        }
        tbody tr:even {
            @apply bg-white;
        }
        tbody td:first-child {
            @apply pl-2;
        }
        tbody td:last-child {
            @apply border-r-0;
        }
    }

    @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
        /* Force table to not be like tables anymore */
        table,
        thead,
        tbody,
        th,
        td,
        tr {
            display: block;
        }
        /* Hide table headers (but not display: none;, for accessibility) */
        thead tr {
            position: absolute;
            top: -9999px;
            left: -9999px;
        }
        tr {
            border: 1px solid #ccc;
            margin-bottom: 10px;
        }
        td {
            /* Behave  like a "row" */
            border: none;
            border-bottom: 1px solid #eee;
            position: relative;
            padding-left: 50%;
            margin-bottom: 2rem;
        }
        td:before {
            /* Now like a table header */
            position: absolute;
            /* Top/left values mimic padding */
            top: 6px;
            left: 6px;
            width: 45%;
            padding-right: 10px;
            white-space: nowrap;
            font-weight: 600;
        }
        /*
      Label the data
      */
        td:nth-of-type(1):before {
            content: "Tasks";
        }
        td:nth-of-type(2):before {
            content: "Domain";
        }
        td:nth-of-type(3):before {
            content: "Assigned to";
        }
        td:nth-of-type(4):before {
            content: "Due Date";
            text-align: left;
        }
        td:nth-of-type(5):before {
            content: "Task Status";
        }
        td:nth-of-type(6):before {
            content: "Notification";
        }
    }

    .due-date {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>
