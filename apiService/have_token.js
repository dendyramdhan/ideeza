import axios from 'axios'
export default (sendData, ctx)=>{
    let tokenStr =
        "eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjI0NDI3Nzk0MTcsImlhdCI6MTU3ODc3OTQxNywianRpIjoiN0gzaUw4Y1Q1V0oxNW15WWM4WnQ5dyIsIm5iZiI6MTU3ODc3OTQxNywidXNlcmlkIjoiZmU1MDVhNjEtNzQ3ZS00MzJhLWE5ODQtNjdhNTc2NDQxYzFjIn0.iHYQLULIJPPWWONbp37LEgD3YkttrhcyOYOGjmg4ZQekw1GBbqmEcdsREltrnXSzOZIlyqKn--BCBw8KFpHoPZJVzznFceo6w1MqZ2-YptdZ7lZnJuC_2u1IQJpDeFPqrAdUR4mBd7_vcMKnM9_IZSE5mhbLOUghX2ur8VrlEV1oSL_XMK9wGIdmMuSxoEpctpUZ6WfyAw83VcpbuQiVBfec-cPursvdJy5XFydh9dKpxAqGaSvqRzxo5GdoWGlDt6drMm1z0P32TIiprPOnDGafR0lUGOckh-WcA8fkCz63VmefjUS-jZB1apFGmaYxlfXYrYlH7pAXfGxAELw1bg";
     
    return axios({
        method: sendData.method,
        url: process.env.base_url + sendData.url,
        data: sendData.data,
        headers: { Authorization: `Bearer ${tokenStr}` }
      })
    .then(response => {

        ctx(response)

    })
    .catch((e) => {
        error({ statusCode: 404, message: 'Post not found' })
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