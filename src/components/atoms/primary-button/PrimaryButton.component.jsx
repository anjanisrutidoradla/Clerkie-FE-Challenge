import React from "react";

function PrimaryButton({ label, ...props }) {
  return (
    <button
      className="text-bg-default text-base text-center bg-bg-brand disabled:bg-bg-brand-subtler font-medium rounded w-full px-4 py-2.5"
      type="button"
      {...props}
    >
      {label}
    </button>
  );
}

export default PrimaryButton;
