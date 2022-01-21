const DefaultState = {
  count: 0,
};

const calculateReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "ADDITION":
      return;
    case "SUBTRACTION":
      return;
    case "MULTIPLICATION":
      return;
    case "DIVISION":
      return;
    case "CLEAR":
      return;
    case "POSITIVE_OR_NEGATIVE":
      return;
    case "PERCENT":
      return;
    case "EQUAL":
      return;
  }
};

export default calculateReducer;
