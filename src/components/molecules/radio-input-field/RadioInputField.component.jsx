import FieldError from "@atoms/field-error";
import FieldLabel from "@atoms/field-label";
import React from "react";

function RadioInputField({
  errors = [],
  label,
  name = "",
  options = [],
  checkedValue,
  ...props
}) {
  return (
    <div className="flex flex-col gap-5">
      <FieldLabel label={label} />
      <div className="flex gap-6">
        {options.map(({ label, value }) => (
          <label
            className="flex gap-2 items-center text-sm font-medium text-tx-default-subtle"
            key={value}
          >
            <input
              className="w-4 h-4"
              checked={checkedValue === value}
              name={name || `radio-input-${label}`}
              type="radio"
              value={value}
              {...props}
            />
            {label}
          </label>
        ))}
      </div>
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

export default RadioInputField;
