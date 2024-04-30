import FieldError from "@atoms/field-error";
import FieldLabel from "@atoms/field-label";
import React from "react";

function TextInputField({ errors = [], label, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <FieldLabel label={label} />
      <input
        className="bg-bg-default border border-br-default-light rounded text-neutral-900 text-sm font-medium block w-full px-4 py-3"
        type="text"
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

export default TextInputField;
