import React from "react";
import HelpModal from "./HelpModal";

const WebConfigurator = ({ webConfig, onConfigChange }) => {
  const handleIncrement = (field) => {
    onConfigChange(field, webConfig[field] + 1);
  };

  const handleDecrement = (field) => {
    if (webConfig[field] > 1) {
      onConfigChange(field, webConfig[field] - 1);
    }
  };

  return (
    <div className="web-configurator mt-3">
      <div className="mb-3 d-flex align-items-center justify-content-end">
        <i
          className="bi bi-info-circle fs-5 text-info"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#pagesHelpModal"
        ></i>
        <p className="mb-0 mx-1 mx-sm-3">Pages</p>
        <div>
          <i
            className="bi bi-dash-circle"
            type="button"
            onClick={() => handleDecrement("pages")}
          ></i>
          <span className="mx-2 border border-1 rounded px-3 fw-semibold">
            {webConfig.pages}
          </span>
          <i
            className="bi bi-plus-circle"
            type="button"
            onClick={() => handleIncrement("pages")}
          ></i>
        </div>
      </div>
      <div className="mb-3 d-flex align-items-center justify-content-end">
        <i
          className="bi bi-info-circle fs-5 text-info"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#languagesHelpModal"
        ></i>
        <p className="mb-0 mx-1 mx-sm-3">Languages</p>
        <div>
          <i
            className="bi bi-dash-circle"
            type="button"
            onClick={() => handleDecrement("languages")}
          ></i>
          <span className="mx-2 border border-1 rounded px-3 fw-semibold">
            {webConfig.languages}
          </span>
          <i
            className="bi bi-plus-circle"
            type="button"
            onClick={() => handleIncrement("languages")}
          ></i>
        </div>
      </div>

      {/* Import HelpModals */}
      <HelpModal id="pagesHelpModal" title="Number of Pages">
        <p>
          Specify the number of pages you want for your website. <br />
          The cost of each page is 30€.
        </p>
      </HelpModal>
      <HelpModal id="languagesHelpModal" title="Number of Languages">
        <p>
          Specify how many languages your website should support. <br />
          The cost of each language is 30€.
        </p>
      </HelpModal>
    </div>
  );
};

export default WebConfigurator;
