import React, { useState } from 'react';
import { FaSun, FaMoon, FaUserCog, FaClipboardList, FaPrint, FaUsers, FaPalette, FaClipboardCheck } from 'react-icons/fa';
import { MdDashboard, MdInventory, MdSettings } from 'react-icons/md';

const Dashboard = ({ role, userImage }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  // Define access per role
  const access = {
    Admin: ['Dashboard', 'Orders', 'Inventory', 'Users', 'Settings'],
    Designer: ['Dashboard', 'Designs', 'Orders'],
    Printer: ['Dashboard', 'Print Queue', 'Orders'],
    Reception: ['Dashboard', 'Orders', 'Customers']
  };

  // Define icons and labels for the menu items
  const menuItems = {
    Dashboard: { icon: <MdDashboard />, label: 'داشبورد' },
    Orders: { icon: <FaClipboardList />, label: 'سفارشات' },
    Inventory: { icon: <MdInventory />, label: 'موجودی' },
    Users: { icon: <FaUsers />, label: 'کاربران' },
    Settings: { icon: <MdSettings />, label: 'تنظیمات' },
    Designs: { icon: <FaPalette />, label: 'طرح‌ها' },
    'Print Queue': { icon: <FaPrint />, label: 'صف چاپ' },
    Customers: { icon: <FaClipboardCheck />, label: 'مشتریان' }
  };

  const filteredMenuItems = Object.keys(menuItems).filter(item => access[role].includes(item));

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} min-h-screen flex`}>
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold">پنل مدیریت</h2>
        <ul className="space-y-4">
          {filteredMenuItems.map(item => (
            <li key={item} className="flex items-center space-x-2 p-2 hover:bg-blue-500 rounded transition duration-150">
              <span className="text-xl">{menuItems[item].icon}</span>
              <span className="text-lg font-medium">{menuItems[item].label}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-4 shadow-md bg-white">
          {/* Light/Dark Mode Toggle */}
          <button onClick={handleToggle} className="text-2xl">
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-600" />}
          </button>
          {/* Role Title */}
          <h1 className="text-xl font-bold">{role}</h1>
          {/* User Image */}
          <img src={userImage} alt="User Avatar" className="w-10 h-10 rounded-full" />
        </nav>

        {/* Content Area */}
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4">خوش آمدید به {role} داشبورد</h2>
          {/* Placeholder for main content */}
          <p>این بخش شامل محتوای اصلی برای نقش {role} است.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
