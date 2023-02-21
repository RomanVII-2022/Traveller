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
    return axios.post('http://localhost:8000/blogs/', 
    {
        id:null,
        category:blog.category.value,
        title:blog.title.value,
        description:blog.description.value,
        subtitle:blog.subtitle.value,
        subdescription:blog.subdescription.value,
        snippet:blog.snippet.value,
        slug:blog.slug.value,
        tag:blog.tag.value,
        author:blog.author.value,
        
    })
    .then(res => {
        return res.data
    }).catch(() => {
        alert("Something went wrong while adding blog")
    })
}