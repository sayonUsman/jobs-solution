const addToDb = (id) => {
  let addAppliedJobId = [];
  const isExistJobId = localStorage.getItem("job-id");

  if (isExistJobId) {
    const appliedJobId = JSON.parse(isExistJobId);
    addAppliedJobId = [...appliedJobId, id];
  } else {
    addAppliedJobId = id;
  }

  localStorage.setItem("job-id", JSON.stringify(addAppliedJobId));
};

export { addToDb };
