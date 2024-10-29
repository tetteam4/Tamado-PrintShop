import React, { useEffect, useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      name: 'کتاب',
      description: 'چاپ کتاب در 200 صفحه',
      category: 'Book',
      designer: 'Designer 1',
      status: 'در حال انجام'
    },
    {
      id: 2,
      name: 'بنر تبلیغاتی',
      description: 'بنر تبلیغاتی رنگی با کیفیت بالا',
      category: 'Banner',
      designer: 'Designer 2',
      status: 'تکمیل شده'
    },
    {
      id: 3,
      name: 'چاپ لیبل',
      description: 'چاپ لیبل برای محصولات',
      category: 'Label',
      designer: 'Designer 3',
      status: 'در انتظار'
    }
  ]);

  // Optionally, fetch orders data from an API or local storage
  useEffect(() => {
    // You can use setOrders with API response here
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">سفارشات</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border font-medium text-left">شناسه</th>
              <th className="py-2 px-4 border font-medium text-left">نام سفارش</th>
              <th className="py-2 px-4 border font-medium text-left">توضیحات</th>
              <th className="py-2 px-4 border font-medium text-left">دسته‌بندی</th>
              <th className="py-2 px-4 border font-medium text-left">طراح</th>
              <th className="py-2 px-4 border font-medium text-left">وضعیت</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="hover:bg-gray-100 ">
                <td className="py-2 px-4 border">{order.id}</td>
                <td className="py-2 px-4 border">{order.name}</td>
                <td className="py-2 px-4 border">{order.description}</td>
                <td className="py-2 px-4 border">{order.category}</td>
                <td className="py-2 px-4 border">{order.designer}</td>
                <td className="py-2 px-4 border">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
