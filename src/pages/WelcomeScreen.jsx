import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="container welcome  d-flex flex-column align-items-center justify-content-center  vh-100 wh-100 text-center">
            <h1 className="mb-4 fw-bold text-uppercase text-light">Welcome!</h1>
            <p className="fs-4 fst-italic text-light">
                This app helps you estimate the cost of our services. <br />
                Select the services you need and
                customize your options!
            </p>
            <button
                className="btn btn-warning mt-4"
                onClick={() => navigate("/calculator")}
            >
                Calculator
            </button>
        </div>
    );
};

export default WelcomeScreen;
