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

export const addBlog = (blog) => {

    const formData = new FormData(blog)

    return axios.post('http://localhost:8000/blogs/', formData)
    .then(res => {
        return res.data
    }).catch(() => {
        alert("Something went wrong while adding blog")
    })
}

export const editBlog1 = (id, blog) => {
    return axios.put('http://localhost:8000/blogs/'+id+'/', blog)
    .then(res => {
        return res.data
    }).catch(() => {
        alert("Something went wrong while editing blog")
    })
}