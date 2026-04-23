import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage({ onLogout }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/login');
    };

    const stats = [
        { label: 'Total Items', value: '1,234', color: 'bg-blue-500' },
        { label: 'In Stock', value: '945', color: 'bg-green-500' },
        { label: 'Low Stock', value: '89', color: 'bg-yellow-500' }
    ];

    const actions = [
        { icon: '➕', label: 'Add Item', color: 'bg-blue-600' },
        { icon: '👁️', label: 'View Items', color: 'bg-green-600' },
        { icon: '📊', label: 'Reports', color: 'bg-purple-600' },
        { icon: '⚙️', label: 'Settings', color: 'bg-gray-600' }
    ];

    const recentActivity = [
        { id: 1, action: 'Item Updated', item: 'Laptop Battery', time: '2 hours ago' },
        { id: 2, action: 'Item Added', item: 'USB Cable', time: '4 hours ago' },
        { id: 3, action: 'Stock Adjusted', item: 'Mobile Phone', time: '1 day ago' },
        { id: 4, action: 'Item Removed', item: 'Damaged Monitor', time: '2 days ago' }
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-blue-600">Airtel IMS</h1>
                    <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition">Logout</button>
                </div>
            </nav>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Welcome to Dashboard</h2>
                    <p className="text-gray-600">Manage your inventory efficiently</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className={`${stat.color} text-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition`}>
                            <p className="text-sm font-semibold opacity-90 mb-2">{stat.label}</p>
                            <p className="text-3xl font-bold">{stat.value}</p>
                        </div>
                    ))}
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {actions.map((action, index) => (
                            <button key={index} className={`${action.color} hover:opacity-90 text-white py-6 rounded-lg transition transform hover:scale-105 flex flex-col items-center justify-center`}>
                                <span className="text-3xl mb-2">{action.icon}</span>
                                <span className="font-semibold">{action.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                        {recentActivity.map((activity) => (
                            <div key={activity.id} className="flex justify-between items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition">
                                <div>
                                    <p className="font-semibold text-gray-800">{activity.action}</p>
                                    <p className="text-sm text-gray-600">{activity.item}</p>
                                </div>
                                <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{activity.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;