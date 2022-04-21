const drop = (rule) => {
  return {
    type: "ADDED",
    payload: rule,
  };
};

export default drop;
