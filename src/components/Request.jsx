import React from "react";


const Request = ({ firstName, phone, email, onFirstNameChange, onPhoneChange, onEmailChange, onRequest, errorMessage }) => {

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    return (
        <div className="container my-5 m-auto w-75 border border-1 shadow rounded-4 p-4 bg-white">
            <h3 className="mb-3">Request for a custom quote</h3>
            {errorMessage && (
                <p className="text-danger text-center mt-2">
                    {errorMessage}
                </p>
            )}
            <div className="row g-3 align-items-center">
                {/* First Name Input */}
                <div className="col-12 col-md-3">
                    <input
                        type="text"
                        className={`form-control ${firstName ? firstName.length < 3 ? "is-invalid" : "is-valid" : ""}`}
                        value={firstName}
                        onChange={onFirstNameChange}
                        placeholder="First name*"
                        aria-label="First name"
                    />
                </div>

                {/* Phone Input */}
                <div className="col-12 col-md-3">
                    <input
                        type="number"
                        className={`form-control ${phone && phone.length !== 9 ? "is-invalid" : phone ? "is-valid" : ""}`}
                        value={phone}
                        onChange={onPhoneChange}
                        placeholder="Phone*"
                        aria-label="Phone"
                    />
                </div>

                {/* Email Input */}
                <div className="col-12 col-md-3">
                    <input
                        type="email"
                        className={`form-control ${email && !isValidEmail(email) ? "is-invalid" : email ? "is-valid" : ""}`}
                        value={email}
                        onChange={onEmailChange}
                        placeholder="Email*"
                        aria-label="Email"
                        required
                    />
                </div>

                {/* Button */}
                <div className="col-12 col-md-3">
                    <button type="button" className="btn btn-success w-100" onClick={onRequest}>
                        Request
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Request;


