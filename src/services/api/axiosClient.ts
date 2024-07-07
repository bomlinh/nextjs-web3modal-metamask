// api/axiosClient.js

'use client'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode';
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-
let domain = process.env.NEXT_PUBLIC_API_URL_DEV

if (typeof window !== 'undefined') {
    if (process.env.NODE_ENV == 'production' && window.location.origin !== 'http://localhost:3001') {
        domain = process.env.NEXT_PUBLIC_API_URL
    }
}
const axiosClient = axios.create({
    baseURL: domain,
    timeout: 3000,
    headers: {
        'content-type': 'application/json',
    },
})
axiosClient.interceptors.request.use(async (config) => {
    let accessToken = localStorage.getItem('accessToken')
    // const refreshToken = localStorage.getItem('refreshToken')

    if (accessToken && accessToken != 'undefined') {
        const decodedToken: any = jwtDecode(accessToken)
        // if (decodedToken.exp * 1000 < new Date().getTime()) {
        //   accessToken = refreshToken
        //   localStorage.setItem('accessToken', accessToken as string)
        // }

        config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : ''
    }

    // Handle token here ...
    return config
})
axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data
        }
        return response
    },
    (error) => {
        // Handle errors
        throw error
    },
)
export default axiosClient
