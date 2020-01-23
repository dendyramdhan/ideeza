import axios from 'axios'
export default (sendData, ctx)=>{
    let authToken = window.$nuxt.$cookies.get("authToken");
    return axios({
        method: sendData.method,
        url: process.env.base_url + sendData.url,
        data: sendData.data,
        headers: { Authorization: `Bearer ${authToken}` }
      })
    .then(response => {

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