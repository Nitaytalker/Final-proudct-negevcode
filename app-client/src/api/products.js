import axios from 'axios';

const urlserver = 'serverfinalproudctnegevcode.herokuapp.com'
const urllocal = 'http://localhost:3002'

export function getAll(resource) {
    return axios.get(`${urllocal}/${resource}`)
}

export function getById(resource,id) {
    return axios.get(`${urllocal}/${resource}/id/${id}`)
}

export function getByCategory(resource,category){
    return axios.get(`${urllocal}/${resource}/category/${category}`)
}

export function loginShop(resource,body) {
    return axios.post(`${urllocal}/${resource}/login` ,  body )
}

export function singUpShop(resource,body) {
    return axios.post(`${urllocal}/${resource}/singup` ,  body )
}

export function toSearch(resource,toFind) {
    return axios.get(`${urllocal}/${resource}/search/${toFind}`  )
}

export function sendMail(resource,body,token){
    return axios.post(`${urllocal}/${resource}`,body,{  headers: {token} }   )
}

export function checkToken(resource,body,token){
    return axios.post(`${urllocal}/${resource}/checktoken`, body,{  headers: {token} }  )
}