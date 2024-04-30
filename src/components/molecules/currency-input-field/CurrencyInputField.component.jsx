import FieldError from "@atoms/field-error";
import FieldLabel from "@atoms/field-label";
import React from "react";
import CurrencyInput from "react-currency-input-field";
import {
  CURRENCY_SYMBOL,
  PAYMENT_AMOUNT_PLACEHOLDER
} from "./CurrencyInputField.constants";

function CurrencyInputField({ errors = [], label, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      {label && <FieldLabel label={label} />}
      <CurrencyInput
        className="bg-bg-default border border-br-default-light rounded text-neutral-900 text-sm font-medium disabled:bg-bg-default-disabled block w-full px-4 py-3"
        placeholder={PAYMENT_AMOUNT_PLACEHOLDER}
        prefix={CURRENCY_SYMBOL}
        {...props}
      />
      {!!errors.length && (
        <div>
          {errors.map((error) => (
            <FieldError error={error} key={error} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CurrencyInputField;
