import FieldError from "@atoms/field-error";
import SectionLabel from "@atoms/section-label";
import AccountListItem from "@organisms/account-list-item";
import { numToCurrencyString } from "@utils/number";
import React, { useEffect, useState } from "react";
import { ACCOUNTS } from "./AccountsList.constants";
import { validate } from "./AccountsList.utils";

function AccountsList({
  formState,
  formValidations,
  setFormState,
  setFormValidations
}) {
  const [accountsList, setAccountsList] = useState([]);
  const [sectionErrors, setSectionErrors] = useState([]);

  const { cumBalance, paymentAmount } = formState;

  // fetch accounts data & set defaults
  useEffect(() => {
    setAccountsList(
      ACCOUNTS.map((acc) => ({
        ...acc,
        selected: false,
        errors: [],
        value: ""
      }))
    );
  }, []);

  // update cumulative balance on account check
  useEffect(() => {
    const cumBalance = accountsList
      .filter((acc) => acc.selected)
      .reduce((sum, o) => sum + o.balance, 0);

    setFormState({ ...formState, cumBalance });
  }, [accountsList]);

  // update form validations
  useEffect(() => {
    const accountListErrors = accountsList.some((acc) => !!acc.errors.length);

    const sectionErrors = validate.sectionErrors(
      paymentAmount,
      cumBalance,
      accountsList
    );
    setSectionErrors(sectionErrors);

    setFormValidations({
      ...formValidations,
      accountsList: !accountListErrors && !sectionErrors.length
    });
  }, [paymentAmount, accountsList]);

  const onAccountToggle = (e, account) => {
    const selected = e.target.checked;

    setAccountsList(
      accountsList.map((acc) =>
        acc.id === account.id
          ? {
              ...acc,
              selected,
              value: selected ? acc.value : "",
              errors: selected ? acc.errors : []
            }
          : acc
      )
    );
  };

  const onAmountChange = (value, name, values, account) => {
    const errors = validate.accountAmount(values.float, account.balance);

    setAccountsList(
      accountsList.map((acc) =>
        acc.id === account.id ? { ...acc, value, errors } : acc
      )
    );
  };

  const selectedAccounts = accountsList.filter((acc) => acc.selected);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <SectionLabel label="Accounts List" />
          <SectionLabel
            textColorClass="text-tx-brand"
            label={`${selectedAccounts.length} Accounts Selected`}
          />
        </div>
        <div>
          <SectionLabel
            label={`Total Balance: ${numToCurrencyString(cumBalance)}`}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {accountsList.map((account) => (
          <AccountListItem
            key={account.id}
            accountInfo={account}
            onAccountToggle={(e) => onAccountToggle(e, account)}
            onAmountChange={(value, name, values) =>
              onAmountChange(value, name, values, account)
            }
          />
        ))}
      </div>
      <div>
        {sectionErrors.map((error) => (
          <FieldError key={error} error={error} />
        ))}
      </div>
    </div>
  );
}

export default AccountsList;
