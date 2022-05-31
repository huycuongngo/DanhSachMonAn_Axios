import axios from "axios"
import { BASE_URL } from "../configURL"


export let monAnService = {
  layDanhSach: () => {
    return axios({
      url: BASE_URL,
      method: "GET",
    })
  },

  // them mon an va post data len server api
  themMonAn: (sendData) => {
    return axios({
      url: BASE_URL,
      method: "POST",
      data: sendData,

    })
  },

  xoaMonAn: (idMonAn) => {

    return axios({
      url: `${BASE_URL}/${idMonAn}`,
      method:"DELETE",
    })
  },

  layThongTinMonAn: (idMonAn) => {

    return axios({
      url: `${BASE_URL}/${idMonAn}`,
      method: "GET",
    })
  },

  capNhatMonAn: (idMonAn) => {
    
    return axios({
      url: `${BASE_URL}/${idMonAn}`,
      method: "PUT",
    })
  },



}