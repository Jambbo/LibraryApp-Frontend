import { Link } from "react-router-dom";

interface LibraryServicesProps {
    isAuthenticated: boolean;
}

export const LibraryServices: React.FC<LibraryServicesProps> = ({ isAuthenticated }) => {
    return (
        <div className="container my-5">
            <div className="row p-4 align-items-center border shadow-lg">
                <div className="col-lg-7 p-3">
                    <h1 className="display-4 fw-bold">
                        Can't find what you are looking for?
                    </h1>
                    <p className="lead">
                        If you can't find what you are looking for,
                        send our library admin's a personal message!
                    </p>
                    {!isAuthenticated ? 
                        <div className="d-grid gap-2 justify-content-md-start mb-4 mb-lg-3">
                            <Link className="btn main-color btn-lg text-white" to="/signin">
                                Sign up
                            </Link>
                        </div>
                        :
                        <div className="d-grid gap-2 justify-content-md-start mb-4 mb-lg-3">
                        <Link className="btn main-color btn-lg text-white" to="#">
                            Library Services
                        </Link>
                    </div>
                    }
                </div>
                <div className="col-lg-4 offset-lg-1 shadow-lg lost-image">

                </div>
            </div>
        </div>
    );
}