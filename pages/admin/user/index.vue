<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="main-contents">
        <div class="md:flex">
          <div class="md:w-1/3">
            <div class="border rounded p-20 h-64 text-ideeza border-ideeza text-center md:mr-3 my-3 bg-white">
              <h1 class="text-5xl font-bold text-ideeza">132</h1>
              <h4 class="text-gray-500 text-xl">Active Users</h4>
            </div>
            <div class="border rounded p-20 h-64 text-ideeza border-ideeza text-center md:mr-3 my-3 bg-white">
              <h1 class="text-5xl font-bold text-ideeza">$5,656</h1>
              <h4 class="text-gray-500 text-xl">Revenue</h4>
            </div>
          </div>
          <div class="md:w-1/3">
            <div class="border rounded p-20 h-64 text-ideeza border-ideeza text-center md:mr-3 my-3 bg-white">
              <h1 class="text-5xl font-bold text-ideeza">32</h1>
              <h4 class="text-gray-500 text-xl">Banned users</h4>
            </div>
            <div class="border rounded p-20 h-64 text-ideeza border-ideeza text-center md:mr-3 my-3 bg-white">
              <h1 class="text-5xl font-bold text-ideeza">112</h1>
              <h4 class="text-gray-500 text-xl">Registered today</h4>
            </div>
          </div>
          <div class="md:w-1/3">
            <div
              class="border rounded text-ideeza border-ideeza my-3 bg-white user-chart relative">
              <h4 class="text-ideeza-dark text-5xl pt-4 pl-4">151</h4>
              <h6 class="text-gray-500 text-2xl pl-4">New Users this Week</h6>
              <div class="absolute bottom-0 w-full">
                <apexchart width="100%" height="350" type="bar" :options="chartOptions" :series="series_bar"></apexchart>
              </div>
            </div>
          </div>
        </div>

      <div class="md:flex">
        <div class="md:w-2/3">
        <div class="border rounded text-ideeza border-ideeza bg-white mb-3  mr-3">
              <div class="flex justify-between pt-5 pl-5 pr-5 items-center mb-3">
            <h6 class="text-ideeza font-bold text-sm flex-shrink">Overview</h6>
            <div class="flex w-full justify-center items-center">
                
                <button class="bg-white border border-gray-300 rounded px-3 py-1 text-gray-500">
                    Users <font-awesome-icon class="text-sm" :icon="['fa', 'chevron-down']"/>
                </button>
                <div class="text-gray-500 text-xs mx-2">vs.</div>
                <button class="bg-white border border-gray-300 rounded px-3 py-1 text-gray-500">
                    Choose <font-awesome-icon class="text-sm" :icon="['fa', 'chevron-down']"/>
                </button>
            </div>
        </div>
              <div class="p-1">
                <apexchart height="300" type="line" :options="chartOptions_line" :series="series_line"></apexchart>
              </div>
            </div>
        </div>
        <div class="md:w-1/3">
        <div class="border rounded text-ideeza border-ideeza bg-white mb-3">
              <div class="flex justify-between pt-5 pl-5 pr-5 items-center mb-3">
            <h6 class="text-ideeza font-bold text-sm flex-shrink">Devices</h6>
            <div class="flex justify-between flex-none">
                <div v-if="searchbox" class="flex w-fit-content bg-white justify-center border border-ideeza rounded items-center mr-2 content-center">
                    <div class="h-12 relative w-10">
                        <font-awesome-icon class="ml-1 h-4 text-gray-400 absolute-center-h-v" :icon="['fas', 'search']"/>
                    </div>
                    <input placeholder="search users" class="bg-white outline-none h-12 text-gray-800 pr-3">
                </div>
                <button class="bg-white border border-ideeza rounded px-3 py-1 text-ideeza">
                    Today <font-awesome-icon class="text-sm" :icon="['fa', 'chevron-down']"/>
                </button>
            </div>
        </div>
              <div class="p-1">
                <apexchart height="300" type="line" :options="chartOptions_line" :series="series_line"></apexchart>
              </div>
            </div>
        </div>
      </div>

        <div class="md:flex">
          <div class="md:w-full">
        <simple-table @selectall="selectall" :fields="['Name','Email','Title','Date Modified','Role']">
          <tr class="flex w-full mb-4" v-for="(user,index) in users">
            <td class="p-2 w-1/5 text-sm" :class="{'border-b':users.length-1 != index}">
              <input type="checkbox" :id="user.id" v-model="user.selected" />
              <label :for="user.id">{{user.name}}</label>
            </td>
            <td class="p-2 w-1/5 text-sm" :class="{'border-b':users.length-1 != index}">{{user.email}}</td>
            <td class="p-2 w-1/5" :class="{'border-b':users.length-1 != index}" v-if="user.type == 1">
              <button class="px-4 py-2 text-ideeza-dark hover:bg-green-200 bg-green-300 w-full rounded text-xs">Regional Manager</button>
            </td>
            <td class="p-2 w-1/5" :class="{'border-b':users.length-1 != index}" v-if="user.type == 2">
              <button class="px-4 py-1 text-ideeza-dark hover:bg-blue-200 bg-blue-300 text-xs w-full rounded">Assitant to the Regional
                Manager</button>
            </td>
            <td class="p-2 w-1/5 text-sm" :class="{'border-b':users.length-1 != index}" v-if="user.type == 3">
              <button class="px-4 py-2 text-ideeza-dark hover:bg-blue-200 bg-blue-300 w-full rounded">Salesman</button>
            </td>
            <td class="p-2 w-1/5 text-sm" :class="{'border-b':users.length-1 != index}">{{user.date_modified}}</td>
            <td class="p-2 w-1/5 text-sm" :class="{'border-b':users.length-1 != index}">
              {{user.role==1?'User':'Service provider'}}
              <font-awesome-icon class="text-xl mt-2 ml-4 text-gray-500 float-right" :icon="['fa', 'grip-vertical']" />
            </td>
          </tr>
        </simple-table>
        </div>
        </div>
      </div>
    </div>
    <MyIdeeza v-click-outside="onClickOutside" v-if="showMyIdeeza" />
  </div>
</template>
<script>
  import LeftMenu from '~/components/admin/common-left-side-menu.vue'
  import MyIdeeza from '~/components/user/my-ideeza/new-ideeza.vue'
  import SimpleTable from '~/components/reusables/Table.vue'

  export default {
    layout: 'admin',
    components: {
      LeftMenu,
      MyIdeeza,
      SimpleTable,
    },
    data: function () {
      return {
        showMyIdeeza: false,
        users: [{
            id: 1,
            name: 'Michael Scott',
            email: 'marchas@gmail.com',
            type: 1,
            date_modified: '07/04/1927',
            role: 1
          },
          {
            id: 2,
            name: 'Michael Scott',
            email: 'marchas@gmail.com',
            type: 2,
            date_modified: '07/04/1927',
            role: 2
          },
          {
            id: 3,
            name: 'Michael Scott',
            email: 'marchas@gmail.com',
            type: 1,
            date_modified: '07/04/1927',
            role: 2
          },
          {
            id: 4,
            name: 'Michael Scott',
            email: 'marchas@gmail.com',
            type: 3,
            date_modified: '07/04/1927',
            role: 1
          },
          {
            id: 5,
            name: 'Michael Scott',
            email: 'marchas@gmail.com',
            type: 3,
            date_modified: '07/04/1927',
            role: 1
          },
          {
            id: 6,
            name: 'Michael Scott',
            email: 'marchas@gmail.com',
            type: 3,
            date_modified: '07/04/1927',
            role: 1
          },
        ],
        chartOptions: {
          chart: {
            animations: {
              speed: 200
            },
            zoom: {
              enabled: false,
            },
            foreColor: '#431184'
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thur']
          },
          fill: {
            colors: ['#ff00c7']
          }
        },
        chartOptions_line: {
        chart: {
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      },
      series_bar: [{
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }],
        series_line: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41]
        }]
      }
    },
    methods: {
      selectall(value) {
        if (value == true) {
          this.users.forEach(element => {
            element.selected = true
          });
        } else {
          this.users.forEach(element => {
            element.selected = false
          });
        }
        this.$forceUpdate()
      }
    },
    computed: {
      leftMenu() {
        return this.$store.state.usermenu.openLeftMenu;
      }
    },
  }

</script>
<style>
  .user-chart {
    height: calc(32rem + 0.75rem);
    width: 100%;
  }
.sales-table{
  height: calc(13rem + 0.29rem);
}
.simple-table tbody td {
  padding: 0.5rem;
}
.simple-table th {
  font-size: 0.85rem;
}
</style>
