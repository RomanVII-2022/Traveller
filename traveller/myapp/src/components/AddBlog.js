import React from 'react';


export const AddBlog = ({categories, handleAddBlogSubmit}) => {

    return(
        <div className="container-fluid bg-registration py-5" style={{margin: "90px 0"}}>
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-8 mx-auto">
                        <div className="card border-0">
                            <div className="card-header bg-primary text-center p-4">
                                <h1 className="text-white m-0">Add Blog</h1>
                            </div>
                            <div className="card-body rounded-bottom bg-white p-5">
                                <form onSubmit={handleAddBlogSubmit}>
                                    <div className="form-group">
                                        <select className="custom-select px-4" name="category" style={{height: "47px"}}>
                                            <option>Select Category</option>
                                            {
                                                categories.map((category) => (
                                                    <option value={category.id}>{category.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control p-4" name="title" placeholder="Enter title"  />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control p-4"  name="description" placeholder="Enter description"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="file" className="form-control"  name="image1" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control p-4" name="subtitle" placeholder="Enter subtitle"  />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control p-4"  name="subdescription" placeholder="Enter subdescription"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="file" className="form-control"  name="image2" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control p-4" placeholder="Enter snippet" name="snippet"  />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control p-4" placeholder="Enter slug" name="slug"  />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control p-4" placeholder="Enter tag" name="tag"  />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control p-4" placeholder="Enter author" name="author"  />
                                    </div>
                                    <div>
                                        <button className="btn btn-primary btn-block py-3" type="submit">Add Blog</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}