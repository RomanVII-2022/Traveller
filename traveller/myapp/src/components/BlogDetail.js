import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Booking } from "./Booking";
import { getBlogDetails } from "../services/ApiServices";

export const BlogDetail = () => {

    const {blogID} = useParams()

    const [blog, setBlog] = useState([])

    useEffect(() => {
        getBlogDetails(blogID)
        .then(res => {
            setBlog(res)
        })
    }, [])

    return(
        <div>
            <div className="container-fluid page-header">
                <div className="container">
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "400px"}}>
                        <h3 className="display-4 text-white text-uppercase">Blog Detail</h3>
                        <div className="d-inline-flex text-white">
                            <p className="m-0 text-uppercase"><a className="text-white" href="">Home</a></p>
                            <i className="fa fa-angle-double-right pt-1 px-3"></i>
                            <p className="m-0 text-uppercase">Blog Detail</p>
                        </div>
                    </div>
                </div>
            </div>
            <Booking />
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="pb-3">
                                <div className="blog-item">
                                    <div className="position-relative">
                                        <img className="img-fluid w-100" src={blog.image1} alt="" />
                                        <div className="blog-date">
                                            <h6 className="font-weight-bold mb-n1">01</h6>
                                            <small className="text-white text-uppercase">Jan</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white mb-3" style={{padding: "30px"}}>
                                    <div className="d-flex mb-3">
                                        <a className="text-primary text-uppercase text-decoration-none" href="">{blog.author}</a>
                                        <span className="text-primary px-2">|</span>
                                        <a className="text-primary text-uppercase text-decoration-none" href="">{blog.category}</a>
                                    </div>
                                    <h2 className="mb-3">{blog.title}</h2>
                                    <p>{blog.description}</p>
                                    <h4 className="mb-3">{blog.subtitle}</h4>
                                    <img className="img-fluid w-50 float-right ml-4 mb-2" src={blog.image2} />
                                    <p>{blog.subdescription}</p>
                                </div>
                            </div>

                            <div className="bg-white" style={{padding: "30px", marginBottom: "30px"}}>
                                <h4 className="text-uppercase mb-4" style={{letterSpacing: "5px"}}>3 Comments</h4>
                                <div className="media mb-4">
                                    <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{width: "45px"}} />
                                    <div className="media-body">
                                        <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                        <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                            accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                                            Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                                            consetetur at sit.</p>
                                        <button className="btn btn-sm btn-outline-primary">Reply</button>
                                    </div>
                                </div>
                                <div className="media">
                                    <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{width: "45px"}} />
                                    <div className="media-body">
                                        <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                        <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                            accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                                            Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                                            consetetur at sit.</p>
                                        <button className="btn btn-sm btn-outline-primary">Reply</button>
                                        <div className="media mt-4">
                                            <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1"
                                                style={{width: "45px"}} />
                                            <div className="media-body">
                                                <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                                <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor
                                                    labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed
                                                    eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet
                                                    ipsum diam tempor consetetur at sit.</p>
                                                <button className="btn btn-sm btn-outline-primary">Reply</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white mb-3" style={{padding: "30px"}}>
                                <h4 className="text-uppercase mb-4" style={{letterSpaccing: "5px"}}>Leave a comment</h4>
                                <form>
                                    <div className="form-group">
                                        <label for="name">Name *</label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email *</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="website">Website</label>
                                        <input type="url" className="form-control" id="website" />
                                    </div>
            
                                    <div className="form-group">
                                        <label for="message">Message *</label>
                                        <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                                    </div>
                                    <div className="form-group mb-0">
                                        <input type="submit" value="Leave a comment"
                                            className="btn btn-primary font-weight-semi-bold py-2 px-3" />
                                    </div>
                                </form>
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
                                <h4 className="text-uppercase mb-4" style={{letterSpaccing: "5px"}}>Categories</h4>
                                <div className="bg-white" style={{padding: "30px"}}>
                                    <ul className="list-inline m-0">
                                        <li className="mb-3 d-flex justify-content-between align-items-center">
                                            <a className="text-dark" href="#"><i className="fa fa-angle-right text-primary mr-2"></i>Web
                                                Design</a>
                                            <span className="badge badge-primary badge-pill">150</span>
                                        </li>
                                        <li className="mb-3 d-flex justify-content-between align-items-center">
                                            <a className="text-dark" href="#"><i className="fa fa-angle-right text-primary mr-2"></i>Web
                                                Development</a>
                                            <span className="badge badge-primary badge-pill">131</span>
                                        </li>
                                        <li className="mb-3 d-flex justify-content-between align-items-center">
                                            <a className="text-dark" href="#"><i
                                                    className="fa fa-angle-right text-primary mr-2"></i>Online Marketing</a>
                                            <span className="badge badge-primary badge-pill">78</span>
                                        </li>
                                        <li className="mb-3 d-flex justify-content-between align-items-center">
                                            <a className="text-dark" href="#"><i
                                                    className="fa fa-angle-right text-primary mr-2"></i>Keyword Research</a>
                                            <span className="badge badge-primary badge-pill">56</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <a className="text-dark" href="#"><i
                                                    className="fa fa-angle-right text-primary mr-2"></i>Email Marketing</a>
                                            <span className="badge badge-primary badge-pill">98</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
            
                            <div className="mb-5">
                                <h4 className="text-uppercase mb-4" style={{letterSpaccing: "5px"}}>Recent Post</h4>
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
                                <h4 className="text-uppercase mb-4" style={{letterSpaccing: "5px"}}>Tag Cloud</h4>
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
    );
}