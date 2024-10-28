import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("لطفاً تمامی فیلدها را پُر کنید.");
      return;
    }
    setError("");
    console.log("ورود با:", { email, password });
  };

  const handleForgotPassword = () => {
    console.log("فراموشی رمز عبور کلیک شد");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          ورود به حساب کاربری
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-right text-gray-600 mb-1">
              ایمیل:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-right text-gray-600 mb-1">
              رمز عبور:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="flex justify-end">
            <a
            dir="rtl"
              href="#"
              onClick={handleForgotPassword}
              className="text-sm text-blue-500 hover:underline"
            >
              رمز را فراموش کرده اید؟
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
