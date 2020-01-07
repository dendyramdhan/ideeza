<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="main-contents">
        
        <div class="md:flex items-center">
          <div class="md:w-1/2 md:mr-3">
            <h1 class="text-4xl font-bold">Good Morning, Chan!</h1>
          </div>

          <div class="md:w-1/4 md:mr-3">
            <div class="border rounded border-gray-300 bg-white mb-3 shadow">
              <div class="flex p-3 items-center justify-around">
                <div>
                  <div class="text-sm text-gray-700">Reviews</div>
                  <div class="text-3xl font-extrabold text-gray-800">56</div>
                </div>
                <div>
                  <img class="inline-flex" src="~/static/images/customer-reviews.png">
                </div>
              </div>
            </div>
          </div>
         <div class="md:w-1/4 md:mr-3">
            <div class="border rounded border-gray-300 bg-white mb-3 shadow">
              <div class="flex p-3 items-center justify-around">
                <div>
                  <div class="text-sm text-gray-800">Money earned</div>
                  <div class="text-3xl font-extrabold text-gray-900">56</div>
                </div>
                <div>
                  <img class="inline-flex" src="~/static/images/money.png">
                </div>
              </div>
            </div>
          </div>
          <div class="md:w-1/4 md:mr-3">
            <div class="border rounded border-gray-300 bg-white mb-3 shadow">
              <div class="flex p-3 items-center justify-around">
                <div>
                  <div class="text-sm text-gray-800">Opened orders</div>
                  <div class="text-3xl font-extrabold text-gray-900">56</div>
                </div>
                <div>
                  <img class="inline-flex" src="~/static/images/box.png">
                </div>
              </div>
            </div>
          </div>
          <div class="md:w-1/4 md:mr-3">
            <div class="border rounded border-gray-300 bg-white mb-3 shadow">
              <div class="flex p-3 items-center justify-around">
                <div>
                  <div class="text-sm text-gray-800">Star</div>
                  <div class="text-3xl font-extrabold text-gray-900">56</div>
                </div>
                <div>
                  <img class="inline-flex" src="~/static/images/star-1.png">
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <h1 class="mt-10 mb-2 text-1xl font-bold">My Feed</h1>
        <div class="md:flex">
          <div class="md:w-2/3 md:mr-3">
          <div class="border rounded text-ideeza border-gray-300 bg-white mb-3">
        <table class="text-left w-full border-collapse">
		      <thead class="bg-white text-gray-600">
			        <tr class="">
                <th class="p-2 border-t border-b border-gray-300 text-ideeza w-1/2">Description</th>
                <th class="p-2 border-t border-b border-gray-300 text-ideeza">Domain</th>
                <th class="p-2 border-t border-b border-gray-300 text-ideeza">Due date</th>
                <th class="p-2 border-t border-b border-gray-300 text-ideeza">Posted before</th>
            </tr>
		      </thead>
          <tbody class="bg-grey-light overflow-y-auto text-gray-700 text-sm">
            <tr class="w-full mb-4" v-for="index in 4" :key="index">
                    <td class="p-2 text-sm border-b">
                      <span class="font-bold text-gray-700">Washing machine requirements</span>
                      <p class="text-gray-500 text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                    </td>
                    <td class="p-2 text-sm border-b">PCB & Assamble</td>
                    <td class="p-2 text-sm border-b">01.01.2020</td>
                    <td class="p-2 text-sm border-b">
                      <div class="flex items-center justify-between">
                        <p class="">10 mins</p>
                        <font-awesome-icon class="text-xl text-ideeza mr-5" :icon="['far', 'clock']" />
                      </div>
                    </td>
                  </tr>
                  
            </tbody>
	        </table>
          </div>
        </div>

        <div class="md:w-1/3">
          <div class="border rounded text-ideeza border-gray-300 bg-white mb-3">
              <div class="">
                <vc-calendar class="mx-auto" color="pink" is-expanded :theme="theme" />
              </div>
            </div>

        <div class="border rounded text-ideeza border-gray-300 bg-white">
          <div class="flex justify-center bg-ideeza p-5 items-center mb-3 border rounded border-ideeza">
              <h6 class="text-white font-bold text-sm flex-shrink">3rd March</h6>
          </div>
              <div class="">
                <div class="overflow-auto max-96-vw sales-table">

                <div>
                  <div class="flex">
                    
                  </div>
                </div>

                  <table class="text-left w-full">
                    <tbody class="bg-grey-light w-full text-ideeza-dark">
                      <tr class="w-full mb-3">
                        <td class="p-2 border-b font-bold text-xs text-ideeza-dark">Jim</td> 
                        <td class="p-2 border-b font-bold text-1xl text-ideeza-dark">$86000</td> 
                        <td class="p-2 border-b">
                          <div id="chart-spark3">
                            <apexchart type="area" height="30" :options="chartOptionsSpark3" :series="seriesSpark3"></apexchart>
                          </div>
                        </td>
                        <td class="p-2 border-b text-xs text-green-400 font-bold">+7%</td>
                        <td class="p-2 border-b">
                        <div class="bg-green-200 rounded-full h-10 w-10 flex items-center justify-center">
                          <font-awesome-icon class="text-xl text-gray-500" :icon="['fas', 'arrow-up']"/>
                        </div>
                        </td>
                      </tr>
                      <tr class="w-full mb-3">
                        <td class="p-2 border-b font-bold text-xs text-ideeza-dark">Jim</td> 
                        <td class="p-2 border-b font-bold text-1xl text-ideeza-dark">$86000</td> 
                        <td class="p-2 border-b">
                          <div id="chart-spark3">
                            <apexchart type="area" height="30" :options="chartOptionsSpark3" :series="seriesSpark3"></apexchart>
                          </div>
                        </td>
                        <td class="p-2 border-b text-xs text-green-400 font-bold">+7%</td>
                        <td class="p-2 border-b">
                        <div class="bg-green-200 rounded-full h-10 w-10 flex items-center justify-center">
                          <font-awesome-icon class="text-xl text-gray-500" :icon="['fas', 'arrow-up']"/>
                        </div>
                        </td>
                      </tr>
                      <tr class="w-full mb-3">
                        <td class="p-2 border-b font-bold text-xs text-ideeza-dark">Jim</td> 
                        <td class="p-2 border-b font-bold text-1xl text-ideeza-dark">$86000</td> 
                        <td class="p-2 border-b">
                          <div id="chart-spark3">
                            <apexchart type="area" height="30" :options="chartOptionsSpark3" :series="seriesSpark3"></apexchart>
                          </div>
                        </td>
                        <td class="p-2 border-b text-xs text-green-400 font-bold">+7%</td>
                        <td class="p-2 border-b">
                        <div class="bg-green-200 rounded-full h-10 w-10 flex items-center justify-center">
                          <font-awesome-icon class="text-xl text-gray-500" :icon="['fas', 'arrow-up']"/>
                        </div>
                        </td>
                      </tr>
                      <tr class="w-full mb-3">
                        <td class="p-2 border-b font-bold text-xs text-ideeza-dark">Jim</td> 
                        <td class="p-2 border-b font-bold text-1xl text-ideeza-dark">$86000</td> 
                        <td class="p-2 border-b">
                          <div id="chart-spark3">
                            <apexchart type="area" height="30" :options="chartOptionsSpark3" :series="seriesSpark3"></apexchart>
                          </div>
                        </td>
                        <td class="p-2 border-b text-xs text-green-400 font-bold">+7%</td>
                        <td class="p-2 border-b">
                        <div class="bg-green-200 rounded-full h-10 w-10 flex items-center justify-center">
                          <font-awesome-icon class="text-xl text-gray-500" :icon="['fas', 'arrow-up']"/>
                        </div>
                        </td>
                      </tr>
                      <tr class="w-full mb-3">
                        <td class="p-2 border-b font-bold text-xs text-ideeza-dark">Jim</td> 
                        <td class="p-2 border-b font-bold text-1xl text-ideeza-dark">$86000</td> 
                        <td class="p-2 border-b">
                          <div id="chart-spark3">
                            <apexchart type="area" height="30" :options="chartOptionsSpark3" :series="seriesSpark3"></apexchart>
                          </div>
                        </td>
                        <td class="p-2 border-b text-xs text-green-400 font-bold">+7%</td>
                        <td class="p-2 border-b">
                        <div class="bg-green-200 rounded-full h-10 w-10 flex items-center justify-center">
                          <font-awesome-icon class="text-xl text-gray-500" :icon="['fas', 'arrow-up']"/>
                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
    <MyIdeeza v-click-outside="onClickOutside" v-if="showMyIdeeza" />
  </div>
</template>
<script>
  import LeftMenu from '~/components/service-provider/common-left-side-menu.vue'
  import MyIdeeza from '~/components/user/my-ideeza/new-ideeza.vue'

  export default {
    layout: 'service-provider',
    components: {
      LeftMenu,
      MyIdeeza,
    },
    data: function () {
      return {
        showMyIdeeza: false,
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
            animations: {
              speed: 200
            },
            zoom: {
              enabled: false,
            },
          },
          colors: ["#C0FFCF"],
          stroke: {
            curve: 'smooth',
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thur']
          },
        },
          seriesSpark3: [{
            data: [47, 45, 54, 38, 56, 24, 65, 31, 37]
          }],
          chartOptionsSpark3: {
            chart: {
              type: 'area',
              height: 20,
              sparkline: {
                enabled: true
              },
            },
            colors: ["#C0FFCF"],
            stroke: {
              curve: 'smooth'
            },
            fill: {
              opacity: 0.3
            },
            xaxis: {
              crosshairs: {
                width: 1
              },
            },
            yaxis: {
              min: 0
            },
          },
        series: [{
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91]
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
</style>
