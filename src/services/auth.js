import axios from 'axios'

const server = process.env.REACT_APP_URL_SERVER || 'https://demo-server-waku.herokuapp.com/';

export const getUser = async() =>{
    const response = await axios.get(`${server}/user/data`, {headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }})
    return response.data.data[0]

  }