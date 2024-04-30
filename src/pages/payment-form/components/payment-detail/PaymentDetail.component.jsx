import SectionLabel from "@atoms/section-label";
import CurrencyInputField from "@molecules/currency-input-field";
import React, { useEffect, useState } from "react";
import { PAYMENT_AMOUNT } from "./PaymentDetail.constants";
import { validate } from "./PaymentDetail.validations";

function PaymentDetail({
  formState,
  formValidations,
  setFormState,
  setFormValidations
}) {
  const [fieldErrors, setFieldErrors] = useState({ paymentAmount: [] });

  const { paymentAmount, cumBalance } = formState;

  useEffect(() => {
    if (paymentAmount) {
      const errors = validate.paymentAmount(paymentAmount, cumBalance);
      setFieldErrors({ ...fieldErrors, paymentAmount: errors });
    }
  }, [cumBalance]);

  const onChangePaymentAmount = (value, name, values) => {
    let paymentAmount = value;
    setFormState({ ...formState, paymentAmount: paymentAmount ?? "" });

    const paymentAmountErrors = validate.paymentAmount(
      values.float,
      cumBalance
    );
    setFieldErrors({
      ...fieldErrors,
      paymentAmount: paymentAmountErrors
    });
    setFormValidations({
      ...formValidations,
      paymentAmount: !paymentAmountErrors.length
    });
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="col-span-2">
        <SectionLabel label="Payment Detail" />
      </div>
      <CurrencyInputField
        errors={fieldErrors.paymentAmount}
        label={PAYMENT_AMOUNT}
        onValueChange={onChangePaymentAmount}
        value={paymentAmount}
      />
    </div>
  );
}

export default PaymentDetail;
