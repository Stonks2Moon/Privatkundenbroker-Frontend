import Vue from 'vue'
import axios from 'axios'

export default ({ app, router, Vue }) => {
  const axiosClient = axios.create({
    baseURL: process.env.API_URL
  })

  Vue.prototype.$axios = axiosClient
}

