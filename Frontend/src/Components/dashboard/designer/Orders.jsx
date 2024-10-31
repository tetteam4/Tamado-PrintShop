import React, { useEffect, useState } from 'react';

const OrderTable = () => {
  // Initial state with mock data
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: 'Ali',
      orderName: 'Order1',
      description: 'First order description',
      category: 'Book',
    },
  ]);

  // Fetch data from database (simulated here with useEffect)
  useEffect(() => {
    // Replace this with an actual API call
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders'); // Adjust API endpoint as needed
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">جدول سفارشات</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 border px-4">نام مشتری</th>
            <th className="py-2 border px-4">نام سفارش</th>
            <th className="py-2 border px-4">توضیحات</th>
            <th className="py-2 border px-4">دسته‌بندی</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="py-2 border px-4">{order.customerName}</td>
              <td className="py-2 border px-4">{order.orderName}</td>
              <td className="py-2 border px-4">{order.description}</td>
              <td className="py-2 border px-4">{order.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
