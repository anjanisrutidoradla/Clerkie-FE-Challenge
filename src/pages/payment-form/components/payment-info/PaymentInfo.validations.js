const accountNoRegex = /^[0-9]{6,12}$/;
const routingNoRegex = /^[0-9]{9}$/;

export const validate = {
  accountNo: (accountNo) => {
    const errors = [];
    if (!accountNo) {
      errors.push("Required");
    } else if (!accountNoRegex.test(accountNo)) {
      errors.push("Account number should be 6-12 digits long");
    }
    return errors;
  },
  accountType: (accountType) => {
    const errors = [];
    if (!accountType) {
      errors.push("Required");
    }
    return errors;
  },
  confirmAccountNo: (confirmAccountNo, accountNo) => {
    const errors = [];
    if (!confirmAccountNo) {
      errors.push("Required");
    } else if (!accountNoRegex.test(confirmAccountNo)) {
      errors.push("Account number should be between 6-12 digits long");
    } else if (confirmAccountNo !== accountNo) {
      errors.push("Account numbers do not match");
    }
    return errors;
  },
  routingNo: (routingNo) => {
    const errors = [];
    if (!routingNo) {
      errors.push("Required");
    } else if (!routingNoRegex.test(routingNo)) {
      errors.push("Routing number should be 9 digits long");
    }
    return errors;
  }
};
