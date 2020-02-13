import axios from 'axios'
export default (sendData, ctx) => {
  let preload = " <img src='~/assets/images/new.gif' style='position:absolute;top:50%;left:50%' width='20%'/>";

  window.$nuxt.$cookies.set("loaderFlag", true)

  return axios({
      method: sendData.method,
      url: process.env.base_url + sendData.url,
      data: sendData.data
    })
    .then(response => {

      window.$nuxt.$cookies.set("loaderFlag", false)

      ctx(response);

    })
    .catch((error) => {
      console.log('error: ', error);
      ctx(preload)
    })
}
