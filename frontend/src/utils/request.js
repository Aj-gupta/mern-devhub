const request = {
  async get(endpoint) {
    return fetch(endpoint).then(async response => {
      const data = await response.json()
      // console.log('request', data)
      // data = { ...data, status: response.status }
      if (response.ok) {
        return data
      }
      return Promise.reject(data)
    })
  },
  async post(endpoint, data) {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
    return window.fetch(endpoint, config).then(async response => {
      let res = await response.json()
      // console.log(data)
      res = { ...res, status: response.status }
      if (response.ok) {
        return res
      }
      return Promise.reject(res)
    })
  },
}
// export default async function request(url) {
//   try {
//     const response = await fetch(url)
//     const data = { ...response.json(), status: response.status }

//     if (response.ok) {
//       return data
//     }
//     return Promise.reject(data)
//     // return window.fetch(url).then(async response => {
//     //   let data = await response.json()
//     //   console.log(data)
//     //   data = { ...data, status: response.status }
//     //   if (response.ok) {
//     //     return data
//     //   }
//     //   return Promise.reject(data)
//     // })
//   } catch (error) {
//     console.log(error)
//     return Promise.reject(error)
//   }
// }

export default request
