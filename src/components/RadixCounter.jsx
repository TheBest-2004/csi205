import { useState } from "react";

const RadixCounter = () => {
  const [value, setValue] = useState(159);

  const plusClicked = () => {
    setValue(prev => (prev >= 4095 ? 0 : prev + 1));
  };

  const minusClicked = () => {
    setValue(prev => (prev <= 0 ? 4095 : prev - 1));
  };

  const resetClicked = () => {
    setValue(0);
  };

  const formatNumber = (num, base, length) => {
    return num.toString(base).toUpperCase().padStart(length, "0");
  };

  return (
    <div
      className="border border-2 border-black rounded-3 p-3 m-auto mt-3"
      style={{ maxWidth: "420px", minWidth: "320px" }}
    >

      <div className="text-center fw-bold fs-4 mb-3">RADIX COUNTER</div>


      <div className="d-flex justify-content-between text-center mb-3 flex-wrap">
        <div className="mx-1">
          <div className="fw-bold">HEX</div>
          <div className="font-monospace">{formatNumber(value, 16, 3)}</div>
        </div>
        <div className="mx-1">
          <div className="fw-bold">DEC</div>
          <div className="font-monospace text-primary fw-bold">{formatNumber(value, 10, 4)}</div>
        </div>
        <div className="mx-1">
          <div className="fw-bold">OCT</div>
          <div className="font-monospace">{formatNumber(value, 8, 4)}</div>
        </div>
        <div className="mx-1">
          <div className="fw-bold">BIN</div>
          <div className="font-monospace">{formatNumber(value, 2, 12)}</div>
        </div>
      </div>

  
      <div className="d-flex justify-content-around flex-wrap gap-2">
        <button className="btn btn-danger px-4" onClick={minusClicked}>
          &minus;
        </button>
        <button className="btn btn-secondary px-5" onClick={resetClicked}>
          RESET
        </button>
        <button className="btn btn-success px-4" onClick={plusClicked}>
          +
        </button>
      </div>
    </div>
  );
};

export default RadixCounter;
