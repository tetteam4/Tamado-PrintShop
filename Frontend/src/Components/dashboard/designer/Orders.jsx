import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/category/api/orders/"
        );
        console.log(response);
        // Update URL as needed
        setOrders(response.data);
      } catch (error) {
        console.error("There was an error fetching the orders!", error);
      }
    };

    fetchOrders();
  }, []);

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

export default Orders;


