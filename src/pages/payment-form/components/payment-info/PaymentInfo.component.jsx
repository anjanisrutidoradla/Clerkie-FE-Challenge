import SectionLabel from "@atoms/section-label";
import RadioInputField from "@molecules/radio-input-field";
import TextInputField from "@molecules/text-input-field";
import React, { useState } from "react";
import {
  ACCOUNT_NUMBER,
  ACCOUNT_TYPE,
  ACCOUNT_TYPE_OPTIONS,
  CONFIRM_ACCOUNT_NUMBER,
  ROUTING_NUMBER
} from "./PaymentInfo.constants";
import { validate } from "./PaymentInfo.validations";

function PaymentInfo({
  formState,
  formValidations,
  setFormState,
  setFormValidations
}) {
  const [fieldErrors, setFieldErrors] = useState({
    accountNo: [],
    accountType: [],
    confirmAccountNo: [],
    routingNo: []
  });

  const { accountNo, accountType, confirmAccountNo, routingNo } = formState;

  const onChangeAccountNo = (e) => {
    const accountNo = e.target.value.replace(/[^0-9]/g, "");
    setFormState({ ...formState, accountNo });

    const accountNoErrors = validate.accountNo(accountNo);
    const confirmAccountNoErrors = validate.confirmAccountNo(
      confirmAccountNo,
      accountNo
    );
    setFieldErrors({
      ...fieldErrors,
      accountNo: accountNoErrors,
      confirmAccountNo: confirmAccountNoErrors
    });
    setFormValidations({
      ...formValidations,
      accountNo: !accountNoErrors.length,
      confirmAccountNo: !confirmAccountNoErrors.length
    });
  };

  const onChangeConfirmAccountNo = (e) => {
    const confirmAccountNo = e.target.value.replace(/[^0-9]/g, "");
    setFormState({ ...formState, confirmAccountNo });

    const errors = validate.confirmAccountNo(confirmAccountNo, accountNo);
    setFieldErrors({ ...fieldErrors, confirmAccountNo: errors });
    setFormValidations({
      ...formValidations,
      confirmAccountNo: !errors.length
    });
  };

  const onChangeRoutingNo = (e) => {
    const routingNo = e.target.value.replace(/[^0-9]/g, "");
    setFormState({ ...formState, routingNo });

    const errors = validate.routingNo(routingNo);
    setFieldErrors({ ...fieldErrors, routingNo: errors });
    setFormValidations({
      ...formValidations,
      routingNo: !errors.length
    });
  };

  const onChangeAccountType = (e) => {
    const accountType = e.target.value;
    setFormState({ ...formState, accountType });

    const errors = validate.accountType(accountType);
    setFieldErrors({ ...fieldErrors, accountType: errors });
    setFormValidations({
      ...formValidations,
      accountType: !errors.length
    });
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="col-span-2">
        <SectionLabel label="Payment Information" />
      </div>
      <TextInputField
        errors={fieldErrors.accountNo}
        label={ACCOUNT_NUMBER}
        onChange={onChangeAccountNo}
        placeholder={ACCOUNT_NUMBER}
        value={accountNo}
      />
      <TextInputField
        errors={fieldErrors.confirmAccountNo}
        label={CONFIRM_ACCOUNT_NUMBER}
        onChange={onChangeConfirmAccountNo}
        placeholder={ACCOUNT_NUMBER}
        value={confirmAccountNo}
      />
      <TextInputField
        errors={fieldErrors.routingNo}
        label={ROUTING_NUMBER}
        onChange={onChangeRoutingNo}
        placeholder={ROUTING_NUMBER}
        value={routingNo}
      />
      <RadioInputField
        label={ACCOUNT_TYPE}
        onChange={onChangeAccountType}
        options={ACCOUNT_TYPE_OPTIONS}
        checkedValue={accountType}
      />
    </div>
  );
}

export default PaymentInfo;
