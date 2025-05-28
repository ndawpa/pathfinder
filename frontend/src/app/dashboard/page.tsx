'use client';

import ProtectedRoute from '@/components/ProtectedRoute';

const DashboardPage = () => {
  return (
    <ProtectedRoute>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to Scout Platform</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">My Profile</h2>
            <p>View and manage your scout profile</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Upcoming Events</h2>
            <p>No upcoming events</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">My Badges</h2>
            <p>Start earning badges</p>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardPage;