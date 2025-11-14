import React, { useState } from 'react';
import { useAppSelector } from '../redux/hooks';
import { formatDateRange, formatDate } from '../utils/dateFormatter';
import { formatCurrency, formatPhone } from '../utils/formatters';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const menuItems: MenuItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export const Dashboard: React.FC = () => {
  const registrationData = useAppSelector((state) => state.registration.data);
  const [activeMenu, setActiveMenu] = useState<string>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Example date range
  const startDate = new Date('2025-05-01');
  const endDate = new Date('2025-06-15');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md bg-white shadow-md"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`
            fixed lg:static inset-y-0 left-0 z-40
            w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            lg:translate-x-0
          `}
        >
          <div className="h-full flex flex-col">
            <div className="p-6 border-b">
              <h1 className="text-2xl font-bold text-primary-600">Solar Site</h1>
            </div>
            <nav className="flex-1 p-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveMenu(item.id)}
                  className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                    ${
                      activeMenu === item.id
                        ? 'bg-primary-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 lg:ml-0">
          <div className="p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Dashboard
              </h2>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="text-sm text-gray-500 mb-1">Total Revenue</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {formatCurrency(125000)}
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="text-sm text-gray-500 mb-1">Active Users</div>
                  <div className="text-2xl font-bold text-gray-900">1,234</div>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="text-sm text-gray-500 mb-1">Orders</div>
                  <div className="text-2xl font-bold text-gray-900">567</div>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="text-sm text-gray-500 mb-1">Growth</div>
                  <div className="text-2xl font-bold text-green-600">+12.5%</div>
                </div>
              </div>

              {/* Registration Data Display */}
              {registrationData && Object.keys(registrationData).length > 0 && (
                <div className="bg-white rounded-lg shadow p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Registration Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {registrationData.name && (
                      <div>
                        <div className="text-sm text-gray-500">Name</div>
                        <div className="text-lg font-medium text-gray-900">
                          {registrationData.name}
                        </div>
                      </div>
                    )}
                    {registrationData.email && (
                      <div>
                        <div className="text-sm text-gray-500">Email</div>
                        <div className="text-lg font-medium text-gray-900">
                          {registrationData.email}
                        </div>
                      </div>
                    )}
                    {registrationData.phone && (
                      <div>
                        <div className="text-sm text-gray-500">Phone</div>
                        <div className="text-lg font-medium text-gray-900">
                          {formatPhone(registrationData.phone)}
                        </div>
                      </div>
                    )}
                    {registrationData.restaurantName && (
                      <div>
                        <div className="text-sm text-gray-500">Restaurant</div>
                        <div className="text-lg font-medium text-gray-900">
                          {registrationData.restaurantName}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Date Range Example */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Date Range Example
                </h3>
                <div className="space-y-2">
                  <div>
                    <div className="text-sm text-gray-500">Formatted Range</div>
                    <div className="text-lg font-medium text-gray-900">
                      {formatDateRange(startDate, endDate)}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Start Date</div>
                    <div className="text-lg font-medium text-gray-900">
                      {formatDate(startDate, 'long')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

