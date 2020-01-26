import axios from 'axios'
export default (sendData, ctx)=>{

    window.$nuxt.$cookies.set("loaderFlag",true)

     return axios({
        method: sendData.method,
        url: process.env.base_url + sendData.url,
        data: sendData.data,
      })
    .then(response => {
        window.$nuxt.$cookies.set("loaderFlag",false)

        ctx(response)

    })
    .catch((error) => {
        console.log('error: ', error);

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