import axios from 'axios'
export default (sendData, ctx)=>{
    let authToken = window.$nuxt.$cookies.get("authToken");
    // this.$store.commit("loaderStorage/loader_flag_change1");

    window.$nuxt.$cookies.set("loaderFlag",true)

    return axios({
        method: sendData.method,
        url: process.env.base_url + sendData.url,
        data: sendData.data,
        headers: { Authorization: `Bearer ${authToken}` }
      })
    .then(response => {
        
        window.$nuxt.$cookies.set("loaderFlag",false)

        ctx(response)


        // this.$store.commit("loaderStorage/loader_flag_change2");

    })
    .catch((error) => {
        console.log("api error : ", error)
        ctx(null)
    })


    // return axios.get(base_url)
    // .then((res) => {
    //   ctx(res)
    // })
    // .catch((e) => {
    //   error({ statusCode: 404, message: 'Post not found' })
    //   ctx(null)
    // })
}