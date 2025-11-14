import { useState } from "react";

// Value component
function Value({ name, value, setValue, step = 1 }) {
  const displayValue = typeof value === 'number' ? value.toFixed(2) : value;

  return (
    <div
      className="border border-black border-2 rounded-3 mx-auto p-2 mt-2 bg-secondary-subtle"
      style={{ width: "fit-content", minWidth: "160px" }} 
    >
      <div className="text-center fw-bold text-primary mb-1" style={{ fontSize: "1rem" }}>
        {name}
      </div>
      <div className="d-flex justify-content-between align-items-center gap-2">
        <button
          className="btn btn-danger px-3"
          style={{ fontSize: "1rem" }}
          onClick={() => setValue(Number(value) - step)}
        >
          &minus;
        </button>
        <span className="fs-5 fw-bold text-truncate" style={{ maxWidth: "100px", fontSize: "1rem" }}>
          {displayValue}
        </span>
        <button
          className="btn btn-success px-3"
          style={{ fontSize: "1rem" }}
          onClick={() => setValue(Number(value) + step)}
        >
          +
        </button>
      </div>
    </div>
  );
}


function Temperatures({ name, codename }) {
  const [celsius, setCelsius] = useState(25);

  const toFahrenheit = (c) => c * 9 / 5 + 32;
  const toKelvin = (c) => c + 273.15;

  const setFromCelsius = (c) => setCelsius(c);
  const setFromFahrenheit = (f) => setCelsius((f - 32) * 5 / 9);
  const setFromKelvin = (k) => setCelsius(k - 273.15);

  return (
    <div
      className="border border-black border-2 rounded-3 mx-auto p-3 mt-3"
      style={{ width: "fit-content", minWidth: "500px" }}
    >
      <div className="text-center fw-bold text-primary mb-3" style={{ fontSize: "1.2rem" }}>
        {name || "TEMPERATURES"} {codename ? `[${codename}]` : ""}
      </div>

      <div className="d-flex gap-3 justify-content-center flex-wrap">


        <div className="flex-fill text-center">
          <input
            type="text"
            className="form-control text-center fw-bold bg-primary text-white mb-2"
            style={{ width: "140px", fontSize: "1rem" }}
            value={`${celsius.toFixed(2)} °C`}
            readOnly
          />
          <Value
            name="CELSIUS"
            value={celsius}
            setValue={setFromCelsius}
            step={0.01}
          />
        </div>


        <div className="flex-fill text-center">
          <input
            type="text"
            className="form-control text-center fw-bold bg-primary text-white mb-2"
            style={{ width: "140px", fontSize: "1rem" }}
            value={`${toFahrenheit(celsius).toFixed(2)} °F`}
            readOnly
          />
          <Value
            name="FAHRENHEIT"
            value={toFahrenheit(celsius)}
            setValue={setFromFahrenheit}
            step={0.01}
          />
        </div>


        <div className="flex-fill text-center">
          <input
            type="text"
            className="form-control text-center fw-bold bg-primary text-white mb-2"
            style={{ width: "140px", fontSize: "1rem" }}
            value={`${toKelvin(celsius).toFixed(2)} K`}
            readOnly
          />
          <Value
            name="KELVIN"
            value={toKelvin(celsius)}
            setValue={setFromKelvin}
            step={0.01}
          />
        </div>

      </div>
    </div>
  );
}

export default Temperatures;
