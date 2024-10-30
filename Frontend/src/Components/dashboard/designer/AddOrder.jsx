import React, { useState, useEffect } from 'react';

const AddOrder = () => {
  const [orders, setOrders] = useState([]);

  // Retrieve the designer name from local storage on component mount
  useEffect(() => {
    const storedDesigner = localStorage.getItem('designerName');
    if (storedDesigner) {
      setFormData(prevState => ({ ...prevState, designer: storedDesigner }));
    }
  }, []);

  // Handle changes to form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order details:', formData);
    // Add form submission logic here (e.g., send data to the backend or update state)
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">سفارشات</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border font-medium text-left">شناسه</th>
              <th className="py-2 px-4 border font-medium text-left">
                نام سفارش
              </th>
              <th className="py-2 px-4 border font-medium text-left">
                توضیحات
              </th>
              <th className="py-2 px-4 border font-medium text-left">
                دسته‌بندی
              </th>
              <th className="py-2 px-4 border font-medium text-left">کاربر</th>
              <th className="py-2 px-4 border font-medium text-left">
                زمان ایجاد
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-100 ">
                <td className="py-2 px-4 border">{order.id}</td>
                <td className="py-2 px-4 border">{order.Customer_name}</td>
                <td className="py-2 px-4 border">{order.description}</td>
                <td className="py-2 px-4 border">
                  {order.category.map((cat) => cat.name).join(", ")}
                </td>
                <td className="py-2 px-4 border">{order.user}</td>
                <td className="py-2 px-4 border">{order.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddOrder;
