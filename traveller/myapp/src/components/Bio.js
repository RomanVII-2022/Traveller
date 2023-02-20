import React from "react";


export const Bio = () => {
    return (
        <div>
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
        </div>
    );
}