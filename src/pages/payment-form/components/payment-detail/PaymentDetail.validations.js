export const validate = {
  paymentAmount: (paymentAmount, cumBalance) => {
    const errors = [];
    if (!paymentAmount) {
      errors.push("Required");
    } else if (cumBalance > 0 && Number(paymentAmount) > cumBalance) {
      errors.push("Amount should be less than total balance");
    }
    return errors;
  }
};
