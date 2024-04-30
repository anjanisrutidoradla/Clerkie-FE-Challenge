import CurrencyInputField from "@molecules/currency-input-field";
import { numToCurrencyString } from "@utils/number";
import React from "react";
import { BALANCE } from "./AccountListItem.constants";

function AccountListItem({
  accountInfo = {},
  onAccountToggle,
  onAmountChange
}) {
  const { id, balance = 0, name, selected, value, errors } = accountInfo;

  return (
    <div className="flex justify-between items-center py-[2px]">
      <label className="flex gap-5 items-center">
        <input
          className="w-4 h-4"
          checked={selected}
          onChange={onAccountToggle}
          type="checkbox"
          value={id}
        />
        <div className="flex flex-col gap-1">
          <p className="text-sm text-tx-default font-medium">{name}</p>
          <div>
            <p className="text-[10px] text-tx-default-subtler font-medium">
              {BALANCE}
            </p>
            <p className="text-xs text-tx-default-subtler font-medium">
              {numToCurrencyString(balance)}
            </p>
          </div>
        </div>
      </label>
      <div className="w-[35%]">
        <CurrencyInputField
          disabled={!selected}
          errors={errors}
          value={value}
          onValueChange={onAmountChange}
        />
      </div>
    </div>
  );
}

export default AccountListItem;
