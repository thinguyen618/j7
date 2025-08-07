import React from 'react';
import JobList from './components/JobList';
import EmailFetcher from './components/EmailFetcher';
import VideoSuggestions from './components/VideoSuggestions';
import CompanyInfo from './components/CompanyInfo';
import Subscribe from './components/Subscribe';
const App = () => {
  const sampleJob = { company: 'Google', title: 'Software Engineer' };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">JobGrokker</h1>
      <Subscribe />
      <EmailFetcher />
      <JobList />
      <VideoSuggestions jobTitle={sampleJob.title} />
      <CompanyInfo company={sampleJob.company} />
    </div>
  );
};
export default App;
