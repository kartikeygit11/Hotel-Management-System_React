import { useState, useEffect } from 'react';
import ViewRooms from '../rooms/ExistingRooms'; // Component to view existing rooms
import AddRoom from '../rooms/AddRoom';
import FeedbackList from './FeedbackList'; // Component to display feedback/messages

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('viewRooms'); // Set initial view to "View Rooms"
  const [hasNewMessages, setHasNewMessages] = useState(false); // Tracks if there are new messages

  useEffect(() => {
    // Simulating an API call to check for new messages
    const checkForNewMessages = async () => {
      try {
        const response = await fetch('https://demo-deployment-latest-is22.onrender.com'); // API endpoint to check for unread messages
        if (response.ok) {
          const data = await response.json();
          setHasNewMessages(data.unreadCount > 0); // Set to true if there are unread messages
        }
      } catch (error) {
        console.error('Error checking for new messages:', error);
      }
    };

    // Check for new messages every 10 seconds
    const interval = setInterval(checkForNewMessages, 10000);
    checkForNewMessages(); // Initial check when component mounts

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleMessagesClick = () => {
    setActiveTab('fetchFeedbacks');
    setHasNewMessages(false); // Mark messages as read when viewing the Messages tab
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white">
        <div className="p-4 font-bold text-xl">Paradise Grove Inn</div>
        <nav className="mt-4">
          <button
            onClick={() => setActiveTab('viewRooms')}
            className={`block w-full text-left p-4 ${
              activeTab === 'viewRooms' ? 'bg-gray-700' : 'hover:bg-gray-700'
            }`}
          >
            View Rooms
          </button>
          <button
            onClick={() => setActiveTab('addRoom')}
            className={`block w-full text-left p-4 ${
              activeTab === 'addRoom' ? 'bg-gray-700' : 'hover:bg-gray-700'
            }`}
          >
            Add Room
          </button>
          <button
            onClick={handleMessagesClick}
            className={`flex items-center justify-between block w-full text-left p-4 ${
              activeTab === 'fetchFeedbacks' ? 'bg-gray-700' : 'hover:bg-gray-700'
            }`}
          >
            Messages
            {hasNewMessages && <span className="w-2 h-2 bg-red-500 rounded-full ml-2"></span>}
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 bg-gray-100">
        {activeTab === 'viewRooms' && <ViewRooms />}
        {activeTab === 'addRoom' && <AddRoom />}
        {activeTab === 'fetchFeedbacks' && <FeedbackList />}
      </main>
    </div>
  );
}

export default AdminDashboard;
