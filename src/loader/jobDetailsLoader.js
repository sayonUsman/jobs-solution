const jobDetailsLoader = async (jobId) => {
  const jobDetails = await fetch("../fakeData/jobs-features.json");
  const details = await jobDetails.json();
  let jobDetail = {};

  details.map((detail) => {
    if (detail.id == jobId) {
      jobDetail = detail;
    }
  });

  return jobDetail;
};

export default jobDetailsLoader;
