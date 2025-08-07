import React, { useState, useEffect } from 'react';
import axios from 'axios';
const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const statusColors = {
    applied: 'bg-blue-200',
    interviewed: 'bg-orange-200',
    offer: 'bg-green-200',
    rejected: 'bg-gray-200',
  };
  useEffect(() => {
    axios.get('http://localhost:3001/jobs').then(res => setJobs(res.data));
  }, []);
  return (
    <div className="grid grid-cols-4 gap-4">
      {['applied', 'interviewed', 'offer', 'rejected'].map(status => (
        <div key={status} className="border p-2">
          <h2 className="text-lg font-bold">{status.toUpperCase()}</h2>
          {jobs
            .filter(job => job.status === status)
            .map(job => (
              <div key={job.id} className={`${statusColors[job.status]} p-2 mb-2 rounded`}>
                {job.company} - {job.title}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};
export default JobList;
