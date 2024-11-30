import React from 'react';

const Quotes = ({ firstName, email, phone, price, services }) => {
    return (
        <div className="container my-3 m-auto w-75 border border-1 shadow rounded-4 px-3 pt-3  bg-white">
            <div className="row g-4">
                {/* Client Information Section */}
                <div className="col-12 col-md-4 text-md-start text-center">
                    <h3 className="fw-bold mb-3">{firstName}</h3>
                    <p className="text-muted mb-1">{email}</p>
                    <p className="text-muted">{phone}</p>
                </div>

                {/* Services Section */}
                <div className="col-12 col-md-4 text-md-start text-center">
                    <h3 className="fw-bold  mb-3">Services</h3>
                    <ul className="list-unstyled ">
                        {services.map((service, index) => (
                            <li key={index} className="mb-2">
                                <p className="mb-1 ">{service.title}</p>
                                {service.additionalInfo && (
                                    <p>{service.additionalInfo}</p>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Price Section */}
                <div className="col-12 col-md-4 text-center">
                    <h3 className="fw-bold mb-3">Total Price</h3>
                    <h1 className="text-success fw-bold">{price} €</h1>
                </div>
            </div>
        </div>

    );
};

export default Quotes;
