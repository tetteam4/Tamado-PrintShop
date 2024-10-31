// src/components/OrderList.js

import React, { useState } from 'react';

const OrderList = () => {
  // Initial data simulating database records
  const initialData = [
    {
      id: 1,
      customerName: 'John Doe',
      orderName: 'Business Card',
      description: '1000 business cards with matte finish',
      category: 'Print',
      designer: 'Ali',
    },
    {
      id: 2,
      customerName: 'Sarah Lee',
      orderName: 'Wedding Invitation',
      description: 'Elegant wedding invitations',
      category: 'Invitation',
      designer: 'Maryam',
    },
  ];

  const [orders, setOrders] = useState(initialData);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalData, setModalData] = useState({ price: '', deliveryDate: '' });
  const [showModal, setShowModal] = useState(false);

  // Function to open modal with selected order data
  const handleCheckClick = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  // Handle change in modal inputs
  const handleModalChange = (e) => {
    const { name, value } = e.target;
    setModalData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to handle modal submission
  const handleModalSubmit = () => {
    console.log('Price:', modalData.price, 'Delivery Date:', modalData.deliveryDate);
    setShowModal(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">لیست سفارشات</h2>

      <table className="w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">نام مشتری</th>
            <th className="border p-2">نام سفارش</th>
            <th className="border p-2">توضیحات</th>
            <th className="border p-2">دسته‌بندی</th>
            <th className="border p-2">طراح</th>
            <th className="border p-2">اقدامات</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border p-2">{order.customerName}</td>
              <td className="border p-2">{order.orderName}</td>
              <td className="border p-2">{order.description}</td>
              <td className="border p-2">{order.category}</td>
              <td className="border p-2">{order.designer}</td>
              <td className="border p-2 flex justify-center gap-2">
                <button
                  onClick={() => handleCheckClick(order)}
                  className="bg-green-500 text-white p-1 rounded hover:bg-green-600"
                >
                  ✔
                </button>
                <button
                  className="bg-red-500 text-white p-1 rounded hover:bg-red-600"
                >
                  ✖
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Price and Delivery Date */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">اضافه کردن قیمت و تاریخ تحویل</h3>
            
            <div className="mb-4">
              <label className="block mb-1 font-medium">قیمت:</label>
              <input
                type="number"
                name="price"
                value={modalData.price}
                onChange={handleModalChange}
                className="w-full border rounded p-2"
                placeholder="قیمت را وارد کنید"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">تاریخ تحویل:</label>
              <input
                type="date"
                name="deliveryDate"
                value={modalData.deliveryDate}
                onChange={handleModalChange}
                className="w-full border rounded p-2"
                required
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                انصراف
              </button>
              <button
                onClick={handleModalSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                تایید
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderList;
