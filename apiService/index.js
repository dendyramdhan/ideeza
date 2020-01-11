import axios from 'axios'
export default (settingVal, ctx)=>{
    let base_url = process.env.base_url + '/api/user/get_list';
    return axios.get(base_url)
    .then((res) => {
      ctx(res)
    })
    .catch((e) => {
      error({ statusCode: 404, message: 'Post not found' })
      ctx(null)
    })
}