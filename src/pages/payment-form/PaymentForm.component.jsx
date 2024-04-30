import PrimaryButton from "@atoms/primary-button";
import React, { useState } from "react";
import { isPaymentFormValid } from "./PaymentForm.utils";
import AccountsList from "./components/accounts-list";
import PaymentDetail from "./components/payment-detail";
import PaymentInfo from "./components/payment-info";

function PaymentForm() {
  const [formState, setFormState] = useState({
    accountNo: "",
    accountType: "",
    confirmAccountNo: "",
    paymentAmount: "",
    routingNo: "",
    cumBalance: 0
  });

  const [formValidations, setFormValidations] = useState({
    accountNo: false,
    accountType: false,
    confirmAccountNo: false,
    paymentAmount: false,
    routingNo: false,
    accountsList: false
  });

  return (
    <div className="flex flex-col gap-8 w-[600px] h-fit bg-bg-default border border-br-default rounded-lg p-9">
      <PaymentInfo
        formState={formState}
        formValidations={formValidations}
        setFormState={setFormState}
        setFormValidations={setFormValidations}
      />
      <PaymentDetail
        formState={formState}
        formValidations={formValidations}
        setFormState={setFormState}
        setFormValidations={setFormValidations}
      />
      <AccountsList
        formState={formState}
        formValidations={formValidations}
        setFormState={setFormState}
        setFormValidations={setFormValidations}
      />
      <PrimaryButton
        label="Submit"
        disabled={!isPaymentFormValid(formValidations)}
        onClick={() => alert("Form Submitted")}
      />
    </div>
  );
}

export default PaymentForm;
