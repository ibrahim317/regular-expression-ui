const remove = (id) => {
  return {
    type: "REMOVED",
    payload: id,
  };
};

export default remove;
