import React, { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'user1', firstName: 'Ali', lastName: 'Ahmadi', email: 'ali@example.com', phone: '09123456789', photo: 'link_to_photo' },
    { id: 2, username: 'user2', firstName: 'Sara', lastName: 'Mohammadi', email: 'sara@example.com', phone: '09123456788', photo: 'link_to_photo' },
  ]);

  const [newUser, setNewUser] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    photo: '',
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUserWithId = { ...newUser, id: Date.now() };
    const response =axios.get('http//8000:account/api/auth/users')
console.log((response))
     setUsers((prevUsers) => [...prevUsers, newUserWithId]);

    // Clear the form
    setNewUser({
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      photo: '',
    });
    setIsFormVisible(false); // Hide the form after submission
  };

  const handleEdit = (userId) => {
    console.log(`Edit user with ID: ${userId}`);
  };

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">مدیریت کاربران</h2>

      {/* Toggle Button for User Registration Form */}
      <button
        onClick={toggleFormVisibility}
        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mb-4"
      >
        <FaUserPlus className="mr-2" /> <span>ثبت کاربر جدید</span>
      </button>

      {/* User Registration Form */}
      {isFormVisible && (
        <form onSubmit={handleAddUser} className="mb-6 p-4 border border-gray-300 rounded bg-gray-50">
          <h3 className="text-xl font-semibold mb-4">ثبت کاربر جدید</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="username"
              value={newUser.username}
              onChange={handleInputChange}
              placeholder="نام کاربری"
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="firstName"
              value={newUser.firstName}
              onChange={handleInputChange}
              placeholder="نام"
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="lastName"
              value={newUser.lastName}
              onChange={handleInputChange}
              placeholder="تخلص"
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
              placeholder="ایمیل"
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              name="password"
              value={newUser.password}
              onChange={handleInputChange}
              placeholder="گذرواژه"
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="phone"
              value={newUser.phone}
              onChange={handleInputChange}
              placeholder="شماره تماس"
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="file"
              name="photo"
              value={newUser.photo}
              onChange={handleInputChange}
              placeholder=" عکس"
              className="p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            ثبت کاربر
          </button>
        </form>
      )}

      {/* Users Table */}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border">نام کاربری</th>
            <th className="py-2 px-4 border">نام</th>
            <th className="py-2 px-4 border">تخلص</th>
            <th className="py-2 px-4 border">ایمیل</th>
            <th className="py-2 px-4 border">شماره تماس</th>
            <th className="py-2 px-4 border">عکس</th>
            <th className="py-2 px-4 border">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.username}</td>
              <td className="py-2 px-4 border-b">{user.firstName}</td>
              <td className="py-2 px-4 border-b">{user.lastName}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.phone}</td>
              <td className="py-2 px-4 border-b">
                {user.photo && <img src={user.photo} alt="User" className="w-10 h-10 rounded-full" />}
              </td>
              <td className="py-2 px-4 border-b">
                <button onClick={() => handleEdit(user.id)} className="text-blue-600 mr-2">ویرایش</button>
                <button onClick={() => handleDelete(user.id)} className="text-red-600">حذف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
