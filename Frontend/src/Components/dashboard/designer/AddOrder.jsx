import React, { useEffect, useState } from "react";
import axios from "axios";

<<<<<<< HEAD
const Orders = () => {
  const [orders, setOrders] = useState([]);
=======
const AddOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    customerName: '', // New field for customer name
    description: '',
    category: '',
    designer: ''
  });
>>>>>>> bcb78ad23ff7f170251ad3db11cf02ed32221b4e

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
<<<<<<< HEAD
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
=======
    <div>
      <h2 className="text-3xl font-bold mb-4">افزودن سفارش</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Name Field */}
        <div>
          <label className="block text-lg font-medium">نام سفارش:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded p-2 mt-1"
            placeholder="نام سفارش را وارد کنید"
            required
          />
        </div>

        {/* Customer Name Field */}
        <div>
          <label className="block text-lg font-medium">نام مشتری:</label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            className="w-full border rounded p-2 mt-1"
            placeholder="نام مشتری را وارد کنید"
            required
          />
        </div>
        
        {/* Description Field */}
        <div>
          <label className="block text-lg font-medium">توضیحات:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded p-2 mt-1"
            placeholder="توضیحات سفارش را وارد کنید"
            required
          />
        </div>

        {/* Category Field */}
        <div>
          <label className="block text-lg font-medium">دسته‌بندی:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded p-2 mt-1"
            required
          >
            <option value="" disabled>انتخاب دسته‌بندی</option>
            <option value="book">کتاب</option>
            <option value="bill">بیل</option>
            <option value="banner">بنر</option>
            <option value="رقعه">رقعه</option>
            <option value="glass">گیلاس</option>
            <option value="blouse">بلوز</option>
            <option value="box">جعبه</option>
            <option value="cart">کارت</option>
          </select>
        </div>

        {/* Designer Field (Readonly) */}
        <div>
          <label className="block text-lg font-medium">طراح:</label>
          <input
            type="text"
            name="designer"
            value={formData.designer}
            className="w-full border rounded p-2 mt-1 bg-gray-100"
            readOnly
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          ثبت سفارش
        </button>
      </form>
>>>>>>> bcb78ad23ff7f170251ad3db11cf02ed32221b4e
    </div>
  );
};

export default Orders;
