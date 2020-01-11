import axios from 'axios'
export default (settingVal, ctx)=>{
    return axios.get(`http://192.168.1.162/api/user/get_list`)
    .then((res) => {
      ctx(res)
    })
    .catch((e) => {
      error({ statusCode: 404, message: 'Post not found' })
      ctx(null)
    })
}