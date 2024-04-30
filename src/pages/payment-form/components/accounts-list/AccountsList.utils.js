export const validate = {
  accountAmount: (amount, balance) => {
    const errors = [];
    if (!amount) {
      errors.push("Required");
    } else if (Number(amount) > balance) {
      errors.push("Amount should be less than account balance");
    }
    return errors;
  },
  sectionErrors: (paymentAmount, cumBalance, accountsList) => {
    const errors = [];

    if (!!paymentAmount) {
      const selectedAccounts = accountsList.filter((acc) => acc.selected);

      if (!!selectedAccounts.length) {
        const cumPayout = selectedAccounts.reduce(
          (sum, o) => sum + (o.value ? Number(o.value) : 0),
          0
        );
        if (!!cumPayout) {
          if (cumPayout > paymentAmount) {
            errors.push("Total payout should be less than payment amount");
          } else if (cumPayout > cumBalance) {
            errors.push("Total payout should be less than total balance");
          }
        } else {
          errors.push("Enter payout amount");
        }
      } else {
        errors.push("Select accounts for payout");
      }
    }

    return errors;
  }
};
