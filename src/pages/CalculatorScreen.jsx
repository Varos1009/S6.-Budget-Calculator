import React, { useState, useMemo } from "react";
import Card from "../components/Card";
import { data } from "../data/data";
import { useNavigate, useSearchParams } from "react-router-dom";
import Request from "../components/Request";
import Quotes from "../components/Quotes";
import SortButtons from "../components/SortButtons";

const CalculatorScreen = () => {

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [quotes, setQuotes] = useState([]);
  const [originalQuotes, setOriginalQuotes] = useState([]);
  const [searchName, setSearchName] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const discount = searchParams.get("discount") === "true";

  const selectedServices = searchParams.get("selectedServices")
    ? searchParams.get("selectedServices").split(",").map(Number)
    : [];
  const webConfig = searchParams.get("webConfig")
    ? JSON.parse(searchParams.get("webConfig"))
    : { pages: 1, languages: 1 };

  const onNameChange = (e) => setName(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPhoneChange = (e) => setPhone(e.target.value);



  const handleSortByName = (isAsc) => {
    if (!Array.isArray(quotes)) return;
    setQuotes((prevQuotes) =>
      [...prevQuotes].sort((a, b) => isAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
    );
    setSearchName("");
  };

  const filteredQuotes = useMemo(
    () => quotes.filter((quote) => quote.name.toLowerCase().includes(searchName.toLowerCase())),
    [quotes, searchName]
  );


  const handleOnFindByName = () => {
    if (!Array.isArray(originalQuotes)) return;
    setQuotes(filteredQuotes);
    setSearchName("");
  };

  const handleSortByDate = (isASC) => {
    setQuotes((prevQuotes) =>
      [...prevQuotes].sort((a, b) => isASC ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date))
    );
    setSearchName("");
  };

  const handleResetOrder = () => {
    if (!Array.isArray(originalQuotes)) return;
    setQuotes([...originalQuotes]);
    setSearchName("");
  };

  const handleDiscountToggle = () => {
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      discount: (!discount).toString(),
    });
  };

  const handleRequest = () => {

    if (!name || !email || !phone) {
      setErrorMessage("Please fill in all the required fields.");
      return;
    }

    setErrorMessage("");

    const newQuote = {
      name,
      email,
      phone,
      price: calculateTotal(),
      services: getSelectedServicesDetails(),
      date: new Date().toISOString(),
    };

    setQuotes((prevQuotes) => {
      const updatedQuotes = [...prevQuotes, newQuote];
      setOriginalQuotes(updatedQuotes);
      return updatedQuotes;
    });


    setName("");
    setEmail("");
    setPhone("");
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      discount: discount.toString(),
      selectedServices: "",
      webConfig: JSON.stringify({ pages: 1, languages: 1 }),
    });

  };

  const handleToggle = (id) => {
    const updatedServices = selectedServices.includes(id)
      ? selectedServices.filter((serviceId) => serviceId !== id)
      : [...selectedServices, id];

    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      selectedServices: updatedServices.join(","),
    });
  };


  const handleWebConfigChange = (field, value) => {
    const updatedConfig = { ...webConfig, [field]: value };
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      webConfig: JSON.stringify(updatedConfig),
    });
  };


  const calculateTotal = () => {
    const baseTotal = data
      .filter((service) => selectedServices.includes(service.id))
      .reduce((sum, service) => sum + (service.price || 0), 0);

    const webCost = selectedServices.includes(3) && webConfig.pages && webConfig.languages
      ? Math.max(0, (webConfig.pages + webConfig.languages - 2) * 30)
      : 0;

    const total = baseTotal + webCost;

    return discount ? total * 0.8 : total;
  };


  const getSelectedServicesDetails = () => {
    return data
      .filter((service) => selectedServices.includes(service.id))
      .map((service) => ({
        id: service.id,
        title: service.title,
        additionalInfo: service.id === 3 ? `Web (Pages: ${webConfig.pages}, Languages: ${webConfig.languages})` : undefined,
      }));
  };


  return (
    <div>
      <i
        className="bi bi-house fs-1 text-primary ms-2"
        type="button"
        onClick={() => navigate("/")}
      ></i>
      <div className="container-fluid d-flex flex-column align-items-center">
        <div className="container mt-3 w-75">
          <h2 className="text-center mb-5 fst-italic fw-bold text-success bg-opacity-75">
            Get the best quality services
          </h2>
          <div className="form-check form-switch p-0 mb-5 d-flex flex-md-row flex-column align-items-center justify-content-center">
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Monthly Payment
            </label>
            <input
              className="form-check-input discount mx-md-3 mx-0 shadow-none bg-success"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={handleDiscountToggle}
              checked={discount}
              aria-label="Toggle discount"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Yearly Payment
            </label>
          </div>
          <div className="row">
            {data.map((service) => (
              <Card
                data={service}
                key={service.id}
                isSelected={selectedServices.includes(service.id)}
                isOfferActive={discount}
                withDiscount={discount}
                onToggle={() => handleToggle(service.id)}
                isWebSelected={selectedServices.includes(3)}
                webConfig={webConfig}
                onConfigChange={handleWebConfigChange}
              />
            ))}
          </div>
          <div className="totalPrice text-center text-md-end mt-3">
            <h2>Total Price: {calculateTotal()} €</h2>
          </div>
        </div>
        <Request
          errorMessage={errorMessage}
          firstName={name}
          phone={phone}
          email={email}
          onFirstNameChange={onNameChange}
          onPhoneChange={onPhoneChange}
          onEmailChange={onEmailChange}
          onRequest={handleRequest}
        />


        <hr className="dots my-4 w-75" />

      </div>

      {quotes.length > 0 && (
        <div className="container my-5 m-auto w-75">
          <h2 className="text-md-start text-center">Quotes</h2>
          <div className="d-flex flex-md-row  flex-column justify-content-end align-items-center float-md-end ">
            <div className="input-group px-3 my-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-icon"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
              />
              <span className="input-group-text bg-white border-start-0" id="search-icon">
                {filteredQuotes.length === 0 && searchName ? (
                  <i className="bi bi-search text-muted"></i>
                ) : (
                  <i
                    className="bi bi-search"
                    type="button"
                    onClick={handleOnFindByName}
                  ></i>
                )}
              </span>
            </div>
            <SortButtons
              onFindByName={handleOnFindByName}
              onSortByName={handleSortByName}
              onSortByDate={handleSortByDate}
              onReset={handleResetOrder}
            />
          </div>
        </div>
      )}

      <div className="container-fluid d-flex flex-column align-items-center">
        {searchName && filteredQuotes.length === 0 ? (
          <>
            <p className="text-center text-danger mt-3">
              <i>No results found for "{searchName}".</i>
            </p>

          </>
        ) : (
          (filteredQuotes.length > 0 ? filteredQuotes : quotes).map((quote, index) => (
            <Quotes
              key={index}
              firstName={quote.name}
              email={quote.email}
              phone={quote.phone}
              price={quote.price}
              services={quote.services}
            />
          ))
        )}
      </div>


    </div>
  );
};

export default CalculatorScreen;
