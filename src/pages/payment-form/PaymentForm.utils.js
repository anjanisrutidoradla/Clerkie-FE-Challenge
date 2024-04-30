export const isPaymentFormValid = (formValidations) => {
  const {
    accountNo,
    accountType,
    confirmAccountNo,
    routingNo,
    paymentAmount,
    accountsList
  } = formValidations;
  return (
    accountNo &&
    accountType &&
    confirmAccountNo &&
    routingNo &&
    paymentAmount &&
    accountsList
  );
};
