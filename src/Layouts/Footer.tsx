//Imports
import React from 'react';

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <p className="mb-0 text-muted">&copy; {new Date().getFullYear()} GWS - Todos os Direitos Reservados</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;