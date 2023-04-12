const jobDetailsLoader = async (jobId) => {
  const jobDetails = await fetch("../fakeData/jobs-features.json");
  const details = await jobDetails.json();
  let jobDetail = {};

  details.map((detail) => {
    for (const id in detail) {
      if (detail.id == jobId) {
        jobDetail = detail;
      }
    }
  });
  return jobDetail;
};

export default jobDetailsLoader;
