import React, { useState } from 'react';
import axios from 'axios';
const EmailFetcher = () => {
  const [emails, setEmails] = useState([]);
  const fetchEmails = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/fetch-emails');
      setEmails(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="p-4">
      <button onClick={fetchEmails} className="bg-blue-500 text-white p-2 rounded">
        Fetch Job Emails
      </button>
      {emails.map((email, i) => (
        <div key={i} className="p-2 border my-2">
          {email.company} - {email.job_title} ({email.date})
        </div>
      ))}
    </div>
  );
};
export default EmailFetcher;
