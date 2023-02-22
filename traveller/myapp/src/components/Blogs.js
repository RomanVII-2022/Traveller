import React, {useState, useEffect} from "react";
import { Booking } from "./Booking";
import { Link } from "react-router-dom";
import { getCategories, getBlogs } from "../services/ApiServices";
import { useNavigate } from "react-router-dom";


export const Blogs = ({handleEditData}) => {

    const navigate = useNavigate()

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
        .then(res => {
            setCategories(res)
        })
    }, [])

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        getBlogs()
        .then(res => {
            setBlogs(res)
        })
    }, [])

    return (
        <div>
            <div className="container-fluid page-header">
                <div className="container">
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "400px"}}>
                        <h3 className="display-4 text-white text-uppercase">Blog</h3>
                        <div className="d-inline-flex text-white">
                            <p className="m-0 text-uppercase"><a className="text-white" href="">Home</a></p>
                            <i className="fa fa-angle-double-right pt-1 px-3"></i>
                            <p className="m-0 text-uppercase">Blog</p>
                        </div>
                    </div>
                </div>
            </div>
            <Booking />
            <div class="container-fluid py-5">
                <div class="container py-5">
                    <div class="row">
                        <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="col-md-2">
                            <button className="btn btn-primary btn-block" onClick={() => navigate('/add-blog')} style={{height: "47px", marginBottom: "4px"}}>Add Blog</button>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row pb-3">
                                {
                                    blogs.map((blog) => (
                                        <div className="col-md-6 mb-4 pb-2">
                                            <div className="blog-item">
                                                <div className="position-relative">
                                                    <img className="img-fluid w-100" src={blog.image1} style={{height:"200px", objectFit:"cover"}} alt="" />
                                                    <div className="blog-date">
                                                        <h6 className="font-weight-bold mb-n1">{new Date(blog.created_on).toDateString().split(' ')[2]}</h6>
                                                        <small className="text-white text-uppercase">{new Date(blog.created_on).toDateString().split(' ')[1]}</small>
                                                    </div>
                                                </div>
                                                <div className="bg-white p-4">
                                                    <div className="d-flex mb-2">
                                                        <a className="text-primary text-uppercase text-decoration-none" href="">{blog.author}</a>
                                                        <span className="text-primary px-2">|</span>
                                                        <a className="text-primary text-uppercase text-decoration-none" href="">{categories.filter(category => category.id === blog.category).map(category => (category.name))}</a>
                                                    </div>
                                                    <Link className="h5 m-0 text-decoration-none" to={`/blog-details/${blog.id}`}>{blog.title}</Link><br/>
                                                    <Link className="text-primary text-uppercase text-decoration-none" to="/edit-blog" onClick={() => handleEditData(blog)} >Edit</Link>
                                                </div>
                                            </div>
                                        </div>   
                                    )) 
                                }
                                <div className="col-12">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination pagination-lg justify-content-center bg-white mb-0" style={{padding: "30px"}}>
                                        <li className="page-item disabled">
                                            <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
            
                        <div className="col-lg-4 mt-5 mt-lg-0">

                            <div className="d-flex flex-column text-center bg-white mb-5 py-5 px-4">
                                <img src="img/user.jpg" className="img-fluid mx-auto mb-3" style={{width: "100px"}} />
                                <h3 className="text-primary mb-3">John Doe</h3>
                                <p>Conset elitr erat vero dolor ipsum et diam, eos dolor lorem, ipsum sit no ut est  ipsum erat kasd amet elitr</p>
                                <div className="d-flex justify-content-center">
                                    <a className="text-primary px-2" href="">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="text-primary px-2" href="">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="text-primary px-2" href="">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a className="text-primary px-2" href="">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a className="text-primary px-2" href="">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
            

                            <div className="mb-5">
                                <div className="bg-white" style={{padding: "30px"}}>
                                    <div className="input-group">
                                        <input type="text" className="form-control p-4" placeholder="Keyword" />
                                        <div className="input-group-append">
                                            <span className="input-group-text bg-primary border-primary text-white"><i
                                                    className="fa fa-search"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-5">
                                <h4 className="text-uppercase mb-4" style={{letterSpacing: "5px"}}>Categories</h4>
                                <div className="bg-white" style={{padding: "30px"}}>
                                    <ul className="list-inline m-0">
                                        {
                                            categories.map((category) => (
                                                <li className="mb-3 d-flex justify-content-between align-items-center">
                                                    <a className="text-dark" href="#"><i className="fa fa-angle-right text-primary mr-2"></i>{category.name}</a>
                                                    <span className="badge badge-primary badge-pill">150</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
            

                            <div className="mb-5">
                                <h4 className="text-uppercase mb-4" style={{letterSpacing: "5px"}}>Recent Post</h4>
                                <a className="d-flex align-items-center text-decoration-none bg-white mb-3" href="">
                                    <img className="img-fluid" src="img/blog-100x100.jpg" alt="" />
                                    <div className="pl-3">
                                        <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                                        <small>Jan 01, 2050</small>
                                    </div>
                                </a>
                                <a className="d-flex align-items-center text-decoration-none bg-white mb-3" href="">
                                    <img className="img-fluid" src="img/blog-100x100.jpg" alt="" />
                                    <div className="pl-3">
                                        <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                                        <small>Jan 01, 2050</small>
                                    </div>
                                </a>
                                <a className="d-flex align-items-center text-decoration-none bg-white mb-3" href="">
                                    <img className="img-fluid" src="img/blog-100x100.jpg" alt="" />
                                    <div className="pl-3">
                                        <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                                        <small>Jan 01, 2050</small>
                                    </div>
                                </a>
                            </div>
            

                            <div className="mb-5">
                                <h4 className="text-uppercase mb-4" style={{letterSpacing: "5px"}}>Tag Cloud</h4>
                                <div className="d-flex flex-wrap m-n1">
                                    <a href="" className="btn btn-light m-1">Design</a>
                                    <a href="" className="btn btn-light m-1">Development</a>
                                    <a href="" className="btn btn-light m-1">Marketing</a>
                                    <a href="" className="btn btn-light m-1">SEO</a>
                                    <a href="" className="btn btn-light m-1">Writing</a>
                                    <a href="" className="btn btn-light m-1">Consulting</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}