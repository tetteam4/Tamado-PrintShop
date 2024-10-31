import React, { useState } from 'react';
import { FaSun, FaMoon, FaPlusCircle, FaBars, FaUsers, FaClipboardList, FaChartBar } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import DashboardHome from './designer/Ddashboard';
import Orders from './designer/Orders';
import AddOrder from './designer/AddOrder';
import UserManagement from './Admin/UserManagement'; // Example Reception component
import OrderList from './Reception/ordersList';
const Dashboard = ({ role, userImage }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeComponent, setActiveComponent] = useState('DashboardHome');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const handleToggle = () => setDarkMode(!darkMode);
  const handleSidebarToggle = () => setIsSidebarExpanded(!isSidebarExpanded);

  // Define access control for each role
  const access = {
    Designer: ['Dashboard', 'Orders', 'Add Order'],
    Admin: ['Dashboard', 'User Management', 'Reports'],
    Reception: ['Dashboard', 'OrderList'], // Add access for Reception
    Printer: ['Dashboard', 'Printer Queue'], // Add access for Printer
  };

  const menuItems = {
    'OrderList': { component: 'OrderList', icon: <FaClipboardList />, label: 'لیست سفارشات' },
    'Add Order': { component: 'AddOrder', icon: <FaPlusCircle />, label: 'افزودن سفارش' },
    Orders: { component: 'Orders', icon: <FaClipboardList />, label: 'سفارشات' },
    Dashboard: { component: 'DashboardHome', icon: <MdDashboard />, label: 'داشبورد' },
    'User Management': { component: 'UserManagement', icon: <FaUsers />, label: 'مدیریت کاربران' },
    Reports: { component: 'Reports', icon: <FaChartBar />, label: 'گزارشات' },
    'Reception Orders': { component: 'ReceptionOrders', icon: <FaClipboardList />, label: 'سفارشات پذیرش' }, // Reception-specific
    'Printer Queue': { component: 'PrinterQueue', icon: <FaClipboardList />, label: 'صف چاپ' }, // Printer-specific
  };

  const filteredMenuItems = Object.keys(menuItems).filter(item => access[role].includes(item));

  const renderComponent = () => {
    switch (activeComponent) {
      case 'DashboardHome':
        return <DashboardHome />;
      case 'Orders':
        return <Orders />;
      case 'AddOrder':
        return <AddOrder />;
      case 'UserManagement':
        return <UserManagement />;
      case 'Reports':
        return <Reports />;
      case 'ReceptionOrders':
          return <ReceptionOrders />;
      case 'OrderList':
          return <OrderList />;
      case 'PrinterQueue':
        return <PrinterQueue />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} min-h-screen flex`}>
      {/* Sidebar */}
      <aside className={`${isSidebarExpanded ? 'w-64' : 'w-20'} bg-blue-600 text-white p-6 space-y-6 relative transition-width duration-300`}>
        <button onClick={handleSidebarToggle} className="absolute top-4 right-4 text-2xl focus:outline-none">
          <FaBars />
        </button>
        <div className={`${isSidebarExpanded ? 'text-2xl font-bold' : 'text-lg'}`}>
          {isSidebarExpanded ? 'پنل' : null}
        </div>
        <ul className="mt-8 space-y-4">
          {filteredMenuItems.map(item => (
            <li
              key={item}
              className={`flex items-center p-2 hover:bg-blue-500 rounded cursor-pointer ${
                activeComponent === menuItems[item].component ? 'bg-blue-700' : ''
              }`}
              onClick={() => setActiveComponent(menuItems[item].component)}
            >
              <span className="text-xl">{menuItems[item].icon}</span>
              {isSidebarExpanded && (
                <span className="ml-4 text-lg font-medium">{menuItems[item].label}</span>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        <nav className="flex justify-between items-center p-4 shadow-md bg-white">
          <button onClick={handleToggle} className="text-2xl">
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-600" />}
          </button>
          <h1 className="text-xl font-bold">{role}</h1>
          <img src={userImage} alt="User Avatar" className="w-10 h-10 rounded-full" />
        </nav>

        <div className="p-8">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
