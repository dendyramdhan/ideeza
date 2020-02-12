import axios from 'axios'
export default (sendData, ctx) => {
  let preload = " <img src='~/assets/images/new.gif'  style='position:absolute;top:50%;left:50%' width='20%'/>";

  console.log("call loader flag : ", true)
  window.$nuxt.$cookies.set("loaderFlag", true)

  return axios({
      method: sendData.method,
      url: process.env.base_url + sendData.url,
      data: sendData.data
    })
    .then(response => {

      window.$nuxt.$cookies.set("loaderFlag", false)
      console.log("call loader flag : ", false)


      ctx(response);
      // setTimeout(function(){   }, 3000);


    })
    .catch((error) => {
      console.log('error: ', error);

      ctx(preload)
    })
}
