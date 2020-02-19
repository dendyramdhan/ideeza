export const strict = false;
export const state = () => ({
    selected_part: {
        nameFontSize: 0,
        legs: 2,
        hasValue: false,
        value: '',
        package: 'R0805',
        isClockwise: false,
        name: null,
        name2d: null,
        description: '',
        category: null,
        PinStartAt: 1,
        chart:{
            title: null,
            labelX: null,
            labelY: null,
            unitX: null,
            unitY: null,
            values: [
            ]
            //value
            // { x: 12, y: 123}
        },
        dimensions: {
            t_min_bandwidth: '0',
            t_max_bandwidth: '0.5',
            tw_min_bandwidth: '0',
            tw_max_bandwidth: '1.2',
            min_body_width_w: '0',
            max_body_width_w: '1.2',
            min_body_length_l: '0',
            max_body_length_l: '1',
            pin_location: '0',
            maximum_height: '0.5',
            minimum_height: '0.0',
            package_type: '0',
            chamfered_corner: null
        },
        silkscreen: {
            isCalculated: true, //
            LineWidth: 0.05, //
            r1: 7, //
            r2: 7 //
        }
    }
})

export const mutations = {
    selectPart(state, payload) {
        state.selected_part = {
            nameFontSize: 0,
            legs: payload.legs? payload.legs:0,
            hasValue: false,
            value: '',
            description: '',
            package: payload.package,
            isClockwise: false,
            name: payload.name,
            name2d: null,
            PinStartAt: 1,
            country: payload.country,
            datasheet: payload.datasheet,
            manufacturer: payload.manufacturer,
            snippet: payload.snippet,
            uid: payload.uid,
            dimensions: {
                t_min_bandwidth: '0',
                t_max_bandwidth: '0',
                tw_min_bandwidth: '0',
                tw_max_bandwidth: '0',
                min_body_width_w: '0',
                max_body_width_w: '0',
                min_body_length_l: '0',
                max_body_length_l: '0',
                pin_location: '0',
                maximum_height: '0',
                minimum_height: '0',
                package_type: '0',
                chamfered_corner: null
            },
            silkscreen: {
                isCalculated: true, //
                LineWidth: 0.05, //
                r1: 7, //
                r2: 7 //
            },
            legs: [

            ],
            prices:[

            ],
            chart:{
                title: null,
                labelX: null,
                labelY: null,
                unitX: null,
                unitY: null,
                values: [
                ]
                //value
                // { x: 12, y: 123}
            },
        }
    },
    saveLegs(state,payload) {
        state.selected_part.legs = payload
    },
    savePrices(state,payload){
        state.selected_part.prices = payload
    },
    savePart(state,payload) {
        console.log(payload)
        state.selected_part[payload.key] = payload.value
    },
    savePackageType(state,payload){
        state.selected_part.package = payload
    },
    savePartChart(state,payload){
        state.selected_part.chart[payload.key] = payload.value
    },
    saveChartValues(state,payload) {
        state.selected_part.chart.values = payload
    },
    saveDimension(state,payload) {
        state.selected_part.dimensions[payload.key] = payload.value
    }
}

// export const actions = {
//     add ({ commit }) {
//         commit('add') 
//     }
// }