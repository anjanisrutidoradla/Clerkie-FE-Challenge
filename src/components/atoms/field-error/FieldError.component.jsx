import ExclamationCircle from "@assets/svgs/ExclamationCircle";
import React from "react";

function FieldError({ error }) {
  return (
    <div className="flex gap-2 text-red-500">
      <div className="w-[16px] h-[16px]">
        <ExclamationCircle />
      </div>
      <span className="text-xs">{error}</span>
    </div>
  );
}

export default FieldError;
