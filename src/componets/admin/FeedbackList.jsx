import React, { useEffect, useState } from 'react';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch('https://demo-deployment-latest-is22.onrender.com');
        const data = await response.json();
        setFeedbacks(data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="bg-gray-50 text-gray-700 p-8">
      <h2 className="text-2xl font-bold mb-6">User Feedbacks</h2>
      <div className="space-y-4">
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold">{feedback.name}</h3>
            <p className="text-sm text-gray-500">{feedback.email}</p>
            <p className="mt-2 text-gray-700">{feedback.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackList;
