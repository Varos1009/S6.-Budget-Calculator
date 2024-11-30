import React from "react";
import WebConfigurator from "./WebConfig";

const Card = ({ data, isSelected, isOfferActive, withDiscount, onToggle, isWebSelected, webConfig, onConfigChange }) => {

    return (
        <div className={`card rounded-4 shadow mb-3 p-4 ${isSelected ? "border-success" : ""}`}>
            <div className="row g-3 align-items-center">
                {/* Text Content */}
                <div className="col-12 col-md-6">
                    <h4 className="card-title">{data.title}</h4>
                    <p className="card-text">{data.description}</p>
                </div>

                {/* Price */}
                <div className="col-6 col-md-3 text-md-end">
                    {isOfferActive ? (<p className="mb-0 text-danger">Save 20%</p>) : ""}
                    <h2 className="mb-0">{withDiscount ? data.price * 0.8 : data.price}€</h2>
                </div>

                {/* Checkbox with Text */}
                <div className="col-6 col-md-3">
                    <div className="d-flex align-items-center justify-content-end">
                        <input
                            className="form-check-input me-2 border-success"
                            type="checkbox"
                            checked={isSelected}
                            onChange={onToggle}
                            id={`data-${data.id}`}
                        />
                        <label className="form-check-label" htmlFor={`data-${data.id}`}>
                            {isSelected ? "Remove" : "Add"}
                        </label>
                    </div>
                </div>
            </div>

            {/* Web Configurator */}
            {isWebSelected && data.id === 3 && (
                <div className="row mt-3">
                    <div className="col-12 px-0 px-md-3">
                        <div className="web-configurator">
                            <WebConfigurator webConfig={webConfig} onConfigChange={onConfigChange} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
