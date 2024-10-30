import React, { useState, useEffect } from 'react';

const AddOrder = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    orderName: '',
    description: '',
    category: '',
    designer: '',
  });

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
    <div>
      <h2 className="text-3xl font-bold mb-4">افزودن سفارش</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

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

        {/* Order Name Field */}
        <div>
          <label className="block text-lg font-medium">نام سفارش:</label>
          <input
            type="text"
            name="orderName"
            value={formData.orderName}
            onChange={handleChange}
            className="w-full border rounded p-2 mt-1"
            placeholder="نام سفارش را وارد کنید"
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
            <option value="کتاب">کتاب</option>
            <option value="بیل">بیل</option>
            <option value="بنر">بنر</option>
            <option value="رقعه">رقعه</option>
            <option value="گیلاس">گیلاس</option>
            <option value="بلوز">بلوز</option>
            <option value="جعبه">جعبه</option>
            <option value="کارت">کارت</option>
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
    </div>
  );
};

export default AddOrder;
