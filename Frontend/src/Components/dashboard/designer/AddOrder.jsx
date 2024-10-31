import React, { useState, useEffect } from 'react';

const AddOrder = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    orderName: '',
    description: '',
    category: '',
    designer: '',
  });

  const [categories, setCategories] = useState([
    'کتاب',
    'بیل',
    'بنر',
    'رقعه',
    'گیلاس',
    'بلوز',
    'جعبه',
    'کارت',
  ]);
  
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    const storedDesigner = localStorage.getItem('designerName');
    if (storedDesigner) {
      setFormData(prevState => ({ ...prevState, designer: storedDesigner }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));

    if (name === 'category' && value === 'addNew') {
      setIsAddingCategory(true);  // Show input for new category
    }
  };

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories(prevCategories => [...prevCategories, newCategory]);
      setFormData(prevState => ({ ...prevState, category: newCategory }));
      setNewCategory('');
    }
    setIsAddingCategory(false);  // Hide input after adding
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order details:', formData);
    // Form submission logic here
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">افزودن سفارش</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

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

        {/* Category Field with "Add New" Option */}
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
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
            <option value="addNew">+ افزودن دسته‌بندی جدید</option>
          </select>

          {/* New Category Input */}
          {isAddingCategory && (
            <div className="flex items-center mt-2">
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="border rounded p-2 mr-2 w-full"
                placeholder="دسته‌بندی جدید را وارد کنید"
              />
              <button
                type="button"
                onClick={handleAddCategory}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
              >
                افزودن
              </button>
            </div>
          )}
        </div>

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
