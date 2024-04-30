import React from "react";

function SectionLabel({ label, textColorClass = "text-tx-default" }) {
  return <p className={`text-sm ${textColorClass} font-semibold`}>{label}</p>;
}

export default SectionLabel;
