import axios from 'axios';

export function getAll(resource) {
    return axios.get(`http://localhost:3002/${resource}`)
}

export function getById(resource,id) {
    return axios.get(`http://localhost:3002/${resource}/id/${id}`)
}

export function getByCategory(resource,category){
    return axios.get(`http://localhost:3002/${resource}/category/${category}`)
}

export function loginShop(resource,body) {
    return axios.post(`http://localhost:3002/${resource}/login` ,  body )
}

export function singUpShop(resource,body) {
    return axios.post(`http://localhost:3002/${resource}/singup` ,  body )
}

export function toSearch(resource,toFind) {
    return axios.get(`http://localhost:3002/${resource}/search/${toFind}`  )
}