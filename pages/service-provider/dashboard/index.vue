<template>
  <div>
    <div class="md:flex items-center justify-between">
      <h1 class="text-2xl font-bold mr-5">Good Morning Chan!</h1>
      <div class="md:flex justify-end">
        <div class="bg-white rounded border shadow md:mr-3 mb-3 md:mb-0 py-3 px-5 md:w-48 relative">
            <div class="flex items-center">
            <div>
                <div class="text-sm">Reviews</div>
                <div class="text-3xl font-bold">56</div>
            </div>
            <div class="absolute bottom-0 right-0 m-5">
                <img src="~/static/images/chat-icon.png" class="h-8" alt="chat-icon">
            </div>
            </div>
        </div>
        <div class="bg-white rounded border shadow md:mr-3 mb-3 md:mb-0 py-3 px-5 md:w-48 relative">
            <div class="flex items-center">
            <div>
                <div class="text-sm">Money earned</div>
                <div class="text-3xl font-bold">56</div>
            </div>
            <div class="absolute bottom-0 right-0 m-5">
                <img src="~/static/images/money.png" class="h-8" alt="chat-icon">
            </div>
            </div>
        </div>
        <div class="bg-white rounded border shadow md:mr-3 mb-3 md:mb-0 py-3 px-5 md:w-48 relative">
            <div class="flex items-center">
            <div>
                <div class="text-sm">Opened orders</div>
                <div class="text-3xl font-bold">56</div>
            </div>
            <div class="absolute bottom-0 right-0 m-5">
                <img src="~/static/images/order-box.png" class="h-8" alt="chat-icon">
            </div>
            </div>
        </div>
        <div class="bg-white rounded border shadow md:mr-3 mb-3 md:mb-0 py-3 px-5 md:w-48 relative">
            <div class="flex items-center">
            <div>
                <div class="text-sm">Stars</div>
                <div class="text-3xl font-bold">56</div>
            </div>
            <div class="absolute bottom-0 right-0 m-5">
                 <img src="~/static/images/star-icon.png" class="h-8" alt="chat-icon">
            </div>
            </div>
        </div>
      </div>
    </div>
    <div class="text-sm font-bold text-black md:ml-5 mb-3">My Feed</div>
    <div class="md:flex">
      <div class="md:w-9/12 mb-5 md:mb-0">
        <simple-table :header="false" :searchbox="true" title="Manage articles" border="border-gray">
          <template v-slot:th>
            <th class="border-t border-b border-blue-300 w-2/5 text-ideeza p-3">
              Description
            </th>
            <th class="border-t border-b border-blue-300 w-1/5 text-ideeza p-3">
              Domain
            </th>
            <th class="border-t border-b border-blue-300 w-1/5 text-ideeza p-3">
              Due Date
            </th>
            <th class="border-t border-b border-blue-300 w-1/5 text-ideeza p-3">
              Posted before
            </th>
          </template>
          <tr class="flex w-full mb-4" v-for="(project,index) in projects">
            <td class="w-2/5" :class="{'border-b':projects.length-1 != index}">
              <div class="font-bold text-black">
                {{project.description.title}}
              </div>
              <div class="text-sm">
                {{project.description.text}}
              </div>
            </td>
            <td class="w-1/5" :class="{'border-b':projects.length-1 != index}">{{project.domain}}</td>
            <td class="w-1/5" :class="{'border-b':projects.length-1 != index}">{{project.due_date}}</td>
            <td class="w-1/5" :class="{'border-b':projects.length-1 != index}">{{project.posted_before}}</td>
          </tr>
        </simple-table>
      </div>
      <div class="md:w-3/12 md:mx-3">
        <!-- <vc-calendar color="pink" is-expanded :theme="theme" /> -->
        <vc-calendar class="mx-auto bg-white box-shadow rounded mb-3" color="pink" is-expanded :theme="theme" />
        <div class="bg-white shadow rounded">
            <div class="py-3 px-5 bg-ideeza text-white text-center rounded">3rd March</div>
            <hr class="my-1">
            <ul class="shadow-lg">
                 <li class="flex justify-between hover:bg-ideeza-dark py-3 px-5 event">
                    <div>
                        <div class="text text-sm font-bold">Finish ELectronics Part</div>
                        <div class="text text-xs">Completed</div>
                    </div>
                    <div class="event-icons text-right">
                         <font-awesome-icon class="text text-xs text-gray-500 mr-2" :icon="['fa', 'pen']" />
                        <font-awesome-icon class="text text-sm text-gray-500" :icon="['fas', 'times']" />
                    </div>
                </li>
                <li class="flex justify-between hover:bg-ideeza-dark py-3 px-5 event">
                    <div>
                        <div class="text text-sm font-bold">Finish ELectronics Part</div>
                        <div class="text text-xs">Completed</div>
                    </div>
                    <div class="event-icons text-right">
                         <font-awesome-icon class="text text-xs text-gray-500 mr-2" :icon="['fa', 'pen']" />
                        <font-awesome-icon class="text text-sm text-gray-500" :icon="['fas', 'times']" />
                    </div>
                </li>
                <li class="flex justify-between hover:bg-ideeza-dark py-3 px-5 event">
                    <div>
                        <div class="text text-sm font-bold">Finish ELectronics Part</div>
                        <div class="text text-xs">Completed</div>
                    </div>
                    <div class="event-icons text-right">
                         <font-awesome-icon class="text text-xs text-gray-500 mr-2" :icon="['fa', 'pen']" />
                        <font-awesome-icon class="text text-sm text-gray-500" :icon="['fas', 'times']" />
                    </div>
                </li>
                <li class="flex justify-between hover:bg-ideeza-dark py-3 px-5 event">
                    <div>
                        <div class="text text-sm font-bold">Finish ELectronics Part</div>
                        <div class="text text-xs">Completed</div>
                    </div>
                    <div class="event-icons text-right">
                        <font-awesome-icon class="text text-xs text-gray-500 mr-2" :icon="['fa', 'pen']" />
                        <font-awesome-icon class="text text-sm text-gray-500" :icon="['fas', 'times']" />
                    </div>
                </li>
            </ul>
        </div>
        <!-- <div id="myCalendar" class="vanilla-calendar"></div> -->
      </div>
    </div>
  </div>
</template>
<script>
  import SimpleTable from '~/components/reusables/Table.vue'
  export default {
    layout: 'service-provider',
    components: {
      SimpleTable
    },
    mounted() {
      new VanillaCalendar({
        selector: "#myCalendar"
      })
    },
    data() {
      return {
        theme: {
          container: {
            light: 'ideeza-date-picker',
          },
          arrows: {
            light: 'ideeza-arrow',
          },
        },
        blogs: [{
            id: 1,
            name: 'How ideeza can make the world a better place',
            date: '10 jul, 2019',
          },
          {
            id: 2,
            name: 'How ideeza can make the world a better place',
            date: '10 jul, 2019',
          },
          {
            id: 3,
            name: 'How ideeza can make the world a better place',
            date: '10 jul, 2019',
          },
          {
            id: 4,
            name: 'How ideeza can make the world a better place',
            date: '10 jul, 2019',
          },
        ],
        projects: [{
            description: {
              title: 'Washing machine requirements',
              text: 'lorem asdsad asd asd asdas dasd asd asd asd asdasd asd asd qweqwe qwe wqe'
            },
            domain: 'PCB & Asamble',
            due_date: '01.01.2020',
            posted_before: '10 mins'
          },
          {
            description: {
              title: 'Washing machine requirements',
              text: 'lorem asdsad asd asd asdas dasd asd asd asd asdasd asd asd qweqwe qwe wqe'
            },
            domain: 'PCB & Asamble',
            due_date: '01.01.2020',
            posted_before: '10 mins'
          },
          {
            description: {
              title: 'Washing machine requirements',
              text: 'lorem asdsad asd asd asdas dasd asd asd asd asdasd asd asd qweqwe qwe wqe'
            },
            domain: 'PCB & Asamble',
            due_date: '01.01.2020',
            posted_before: '10 mins'
          },
          {
            description: {
              title: 'Washing machine requirements',
              text: 'lorem asdsad asd asd asdas dasd asd asd asd asdasd asd asd qweqwe qwe wqe'
            },
            domain: 'PCB & Asamble',
            due_date: '01.01.2020',
            posted_before: '10 mins'
          },
          {
            description: {
              title: 'Washing machine requirements',
              text: 'lorem asdsad asd asd asdas dasd asd asd asd asdasd asd asd qweqwe qwe wqe'
            },
            domain: 'PCB & Asamble',
            due_date: '01.01.2020',
            posted_before: '10 mins'
          }
        ]
      }
    }
  }

</script>
<style>
.event:hover .text{
    color: white;
}
</style>
