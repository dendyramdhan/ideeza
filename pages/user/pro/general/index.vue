<template>
  <div>
    <!-- <Electronics class="flex-1"/>
        <Cover  class="flex-1 cover"/> -->
        <div class="w-full relative">
	    <div class="w-1/3 m-auto absolute left-0 right-0">
			<div class="flex ">
				<div class="sub_tool_list flex items-center rounded-b relative">
					<!-- <img src="~/static/images/pcb-icon.png"> -->
          <div class="p-3 flex items-center rounded-b icon-main" @click="setting_menu=!setting_menu">
            <font-awesome-icon class="text-xl text-black" :icon="['fas', 'cog']"></font-awesome-icon>
          </div>
          <div class="p-3 flex items-center rounded-b icon-main">
            <font-awesome-icon class="text-xl text-black" :icon="['fas', 'door-open']"></font-awesome-icon>
          </div>
          <div class="p-3 flex items-center rounded-b icon-main">
            <font-awesome-icon class="text-xl text-black" :icon="['fas', 'list-alt']"></font-awesome-icon>
          </div>
          <div class="p-3 flex items-center rounded-b icon-main">
            <font-awesome-icon class="text-xl text-black" :icon="['fas', 'edit']"></font-awesome-icon>
          </div>
					<div class="w-1/3 m-auto absolute left-0 right-0 sub_tool_lavel2 rounded-sm" width="">
						<div class="flex text-3xl text-black">
              <!-- <div class="px-2 py-2 flex items-center rounded-b bg-transp">
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
							</div> -->
							<!-- <div class="px-2 py-2 flex items-center rounded-b bg-transp">
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
							</div> -->
							<!-- <div class="px-2 py-2 flex items-center  rounded-b bg-transp relative">
								<font-awesome-icon class="" :icon="['fas', 'eye']"></font-awesome-icon>
 
									<div class="w-1/3 m-auto absolute left-0 right-0 sub_tool_lavel2 rounded-sm" width=""> 
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
								 
							</div> -->
							<!-- <div class="px-2 py-2 flex items-center  rounded-b bg-transp">
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
							</div> -->
						</div>
					</div>
				</div>
				<!-- <div class="px-2 py-1 sub_tool_list flex items-center bg-white rounded-b">
					<img src="~/static/images/components-icon.png">
				</div>
				<div class="px-2 py-1 sub_tool_list flex items-center bg-white rounded-b">
					<img src="~/static/images/part-icon.png">
				</div>
				<div class="px-2 py-1 sub_tool_list flex items-center bg-white rounded-b">
					<img src="~/static/images/wire-icon.png"></div>
				<div class="px-2 py-1 sub_tool_list flex items-center bg-white rounded-b">
					<img src="~/static/images/gen-icon.png"></div>
				<div class="px-2 py-1 sub_tool_list flex items-center bg-white rounded-b">
					<img src="~/static/images/hole-icon.png"></div> -->
			</div>
		</div>
	</div>
    <client-only>
    <engine
      ref="engine"
      :init-data="initDataForEngine"
      @selectObject="selectedObject"
    />
    </client-only>
    <button @click="getData" class="p-3 text-black">get Data</button>
  </div>
</template>
<script>
import Engine from '@ideeza/vue3dengine'
export default {
  components: {
    'engine': Engine.gu
  },
  methods: {
    selectedObject(obj) {
        console.log(obj)
    },
    getData() {
      console.log(this.$refs['engine'].getData());
    }
  },
  data() {
    return {
      setting_menu: false,
      initDataForEngine: {
        // the entire object need to init the engine, it can be empty
        electronics: {
          nets: [],
          routing: [],
          assets: [
            {
              name: "Comp1",
              transform: {
                pos_sc: [1.4, -0.2, 0],
                pos_d: [0, 0, 0, 0]
              },
              nets: [
                {
                  name: "Net 0",
                  path: [
                    [
                      {
                        x: 5.349999904632568,
                        y: 0.009999999776482582,
                        z: 0
                      },
                      {
                        x: 2.1500000953674316,
                        y: 0.009999999776482582,
                        z: 0
                      },
                      {
                        x: 2.1500000953674316,
                        y: 0.009999999776482582,
                        z: -0.6000000238418579
                      }
                    ]
                  ],
                  pins: [
                    [-1, 1],
                    [0, 1]
                  ]
                },
                {
                  name: "Net 1",
                  path: [
                    [
                      {
                        x: 0.44999992847442627,
                        y: 0.009999999776482582,
                        z: -0.6000000238418579
                      },
                      {
                        x: 0.44999992847442627,
                        y: 0,
                        z: 0
                      },
                      {
                        x: -0.1,
                        y: 0,
                        z: 0
                      }
                    ],
                    [
                      {
                        x: -0.1,
                        y: 0,
                        z: 0
                      },
                      {
                        x: -0.1,
                        y: 0.009999999776482582,
                        z: -0.6000000238418579
                      },
                      {
                        x: -0.75,
                        y: 0.009999999776482582,
                        z: -0.6000000238418579
                      }
                    ]
                  ],
                  pins: [
                    [0, 2],
                    [1, 1]
                  ]
                },
                {
                  name: "Net 2",
                  path: [
                    [
                      {
                        x: -2.450000047683716,
                        y: 0.009999999776482582,
                        z: -0.6000000238418579
                      },
                      {
                        x: -2.450000047683716,
                        y: 0.009999999776482582,
                        z: 0
                      },
                      {
                        x: -5.650000095367432,
                        y: 0.009999999776482582,
                        z: 0
                      }
                    ]
                  ],
                  pins: [
                    [1, 2],
                    [-1, 2]
                  ]
                }
              ],
              routing_data: [],
              assets: [
                {
                  transform: {
                    best_p: [0, 0, 0, 0],
                    best_sc: [1.3, -0.6, 0],
                    rotation: [0, 0, 0],
                    pivot: [-1.05, -0.65],
                    position: [1.5, 0, 0],
                    mirror: false,
                    display: 0,
                    coverPos: [0, 0, 0],
                    coverRot: [0, 0, 0]
                  },
                  name: "cap0805",
                  name2d: "R",
                  url: "user-be5e1cc3a341462690fd8d8db0dac77e.babylon",
                  design: "user-3119100f41da4b3a8efc9e8a8cf85984.babylon",
                  schematic: "user-1bec78f99fcc41e7a2c36377b8943b4f.babylon"
                },
                {
                  transform: {
                    best_p: [0, 0, 0, 0],
                    best_sc: [-1.6, -0.6, 0],
                    rotation: [0, 0, 0],
                    pivot: [-1.05, -0.65],
                    position: [-1.5, 0, 0],
                    mirror: false,
                    display: 0,
                    coverPos: [0, 0, 0],
                    coverRot: [0, 0, 0]
                  },
                  name: "cap0805",
                  name2d: "R",
                  url: "user-be5e1cc3a341462690fd8d8db0dac77e.babylon",
                  design: "user-3119100f41da4b3a8efc9e8a8cf85984.babylon",
                  schematic: "user-1bec78f99fcc41e7a2c36377b8943b4f.babylon"
                }
              ],
              compSize: [8, 3],
              electData: {
                ComponentParts: ["cap0805", "R", "cap0805", "R"],
                ComponentToParts: [
                  [1, 0, 1],
                  [2, 1, 2]
                ],
                PartToPart: [
                  [0, 1],
                  [0, 2, 1, 1],
                  [1, 2]
                ],
                PartToPartNames: ["Net 0", "Net 1", "Net 2"],
                need: {
                  pin: ["1/vcc"],
                  vcc: false
                },
                pass: {
                  pin: ["2/gnd"],
                  gnd: false
                }
              }
            }
          ],
          compSize: [50, 50],
          electData: {
            PartToPart: [],
            PartToPart2: []
          }
        },
        cover: {
          engine: [
            [
              [
                {
                  transform: {
                    color: "#6d0253",
                    electronic: true,
                    rotation: [0, 0, 0],
                    scale: [50, 0.01, 50],
                    position: [0, -10, 0]
                  },
                  indexDBId: "add-cover-technician",
                  url: "user-6f7326715bc046f9a6aec22563a2fe4f.glb"
                }
              ],
              [
                {
                  transform: {
                    color: "#6d0253",
                    electronic: true,
                    rotation: [0, 0, 0],
                    scale: [50, 0.01, 50],
                    position: [0, 10, 0]
                  },
                  indexDBId: "add-cover-technician",
                  url: "user-6f7326715bc046f9a6aec22563a2fe4f.glb"
                }
              ],
              [
                {
                  transform: {
                    color: "#6d0253",
                    electronic: true,
                    rotation: [90, 90, 0],
                    scale: [50, 0.01, 20],
                    position: [-25, 0, 0]
                  },
                  indexDBId: "add-cover-technician",
                  url: "user-6f7326715bc046f9a6aec22563a2fe4f.glb"
                }
              ],
              [
                {
                  transform: {
                    color: "#6d0253",
                    electronic: true,
                    rotation: [90, 90, 0],
                    scale: [50, 0.01, 20],
                    position: [25, 0, 0]
                  },
                  indexDBId: "add-cover-technician",
                  url: "user-6f7326715bc046f9a6aec22563a2fe4f.glb"
                }
              ],
              [
                {
                  transform: {
                    color: "#6d0253",
                    electronic: true,
                    rotation: [0, 90, 90],
                    scale: [20, 0.01, 50],
                    position: [0, 0, -25]
                  },
                  indexDBId: "add-cover-technician",
                  url: "user-6f7326715bc046f9a6aec22563a2fe4f.glb"
                }
              ],
              [
                {
                  transform: {
                    color: "#6d0253",
                    electronic: true,
                    rotation: [0, 90, 90],
                    scale: [20, 0.01, 50],
                    position: [0, 0, 25]
                  },
                  indexDBId: "add-cover-technician",
                  url: "user-6f7326715bc046f9a6aec22563a2fe4f.glb"
                }
              ]
            ]
          ],
          transform: []
        },
        general: {
          position: [[0, 0, 0]],
          rotation: [[0, 0, 0]],
          scaling: [[1, 1, 1]],
          pilon: [[]],
          wires: [],
          coverHoles: [[], [], [], [], [], []],
          battery: [
            {
              link: "",
              position: [0, 0, 0],
              rotation: [0, 0, 0],
              scale: [1, 1, 1]
            }
          ]
        }
      }
    };
  }
};
</script>
<style scoped>
.cover{
    margin-top: 197px;
}
.sub_tool_list .sub_tool_lavel2 {
    left: 0;
       
    top: 121%;
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
.icon-main {
  background: white;
  margin-right: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
</style>
