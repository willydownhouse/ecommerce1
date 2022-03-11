import React from "react";

type FormCheckBoxProps = {
  showShipping: boolean;
  setShowShipping: (val: boolean) => void;
};

function FormCheckBox({ showShipping, setShowShipping }: FormCheckBoxProps) {
  return (
    <div className="row mb-5">
      <div className="form-check ms-3">
        <input
          className="form-check-input"
          type="checkbox"
          onChange={() => setShowShipping(!showShipping)}
          checked={showShipping ? false : true}
        />
        <label className="form-check-label">
          Shipping address same as billing address
        </label>
      </div>
    </div>
  );
}

export default FormCheckBox;
