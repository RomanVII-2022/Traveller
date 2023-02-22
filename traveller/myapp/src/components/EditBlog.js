import React from 'react';


export const EditBlog = ({categories, handleEditBlogSubmit, editBlog}) => {

    return(
        <div className="container-fluid bg-registration py-5" style={{margin: "90px 0"}}>
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-8 mx-auto">
                        <div className="card border-0">
                            <div className="card-header bg-primary text-center p-4">
                                <h1 className="text-white m-0">Edit Blog</h1>
                            </div>
                            <div className="card-body rounded-bottom bg-white p-5">
                                <form onSubmit={(e)=> handleEditBlogSubmit(editBlog.id, e)}>
                                    <div className="form-group">
                                        <select className="custom-select px-4" name="category" style={{height: "47px"}} defaultValue={editBlog.category}>
                                            <option>Select Category</option>
                                            {
                                                categories.map((category) => (
                                                    <option value={category.id}>{category.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control p-4" name="title" placeholder="Enter title" defaultValue={editBlog.title} />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control p-4"  name="description" placeholder="Enter description" defaultValue={editBlog.description}></textarea>
                                    </div>
                                    {editBlog.image1?<p>Current image1: {editBlog.image1.split('/')[5]}</p>:''}
                                    <div className="form-group">
                                        <input type="file" className="form-control"  name="image1" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control p-4" name="subtitle" defaultValue={editBlog.subtitle} placeholder="Enter subtitle"  />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control p-4"  name="subdescription" defaultValue={editBlog.subdescription} placeholder="Enter subdescription"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="file" className="form-control" name="image2" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control p-4" defaultValue={editBlog.snippet} placeholder="Enter snippet" name="snippet"  />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control p-4" defaultValue={editBlog.slug} placeholder="Enter slug" name="slug"  />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control p-4" defaultValue={editBlog.tag} placeholder="Enter tag" name="tag"  />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control p-4" defaultValue={editBlog.author} placeholder="Enter author" name="author"  />
                                    </div>
                                    <div>
                                        <button className="btn btn-primary btn-block py-3" type="submit">Update Blog</button>
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