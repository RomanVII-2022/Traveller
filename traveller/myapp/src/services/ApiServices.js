import axios from 'axios';


export const getCategories = () => {
    return axios.get('http://localhost:8000/categories/')
    .then(res => {
        return res.data
    })
}


export const getBlogs = () => {
    return axios.get('http://localhost:8000/blogs/')
    .then(res => {
        return res.data
    })
}

export const getBlogDetails = (id) => {
    return axios.get('http://localhost:8000/blogs/'+id+'/')
    .then(res => {
        return res.data
    })
}