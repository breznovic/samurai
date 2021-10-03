import * as axios from "axios"



const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "95e9da52-3032-4fe8-a832-78a1bde22151"
    }

})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`) 
        .then(response => {
            return response.data
        })
    }
} 

//  export const getUsers2 = (currentPage = 1, pageSize = 10) => {
//      return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
//      }).then(response => {
//          return response.data
//      })
//  }
