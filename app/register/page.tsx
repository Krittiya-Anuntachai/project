'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [form, setForm] = useState({ fullname: '', email: '', password: '', confirm: '' });

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert('รหัสผ่านไม่ตรงกัน');
      return;
    }

    const res = await fetch('http://localhost:3009/customers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customer_name: form.fullname,
        email: form.email,
        password: form.password,
      }),
    });

    const data = await res.json();
    alert(data.success ? 'สมัครสมาชิกสำเร็จ' : data.message);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f2f4dd] ">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-md rounded-2xl px-8 py-10 w-full max-w-md"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>

        <input
          type="text"
          placeholder="Fullname - Surname"
          value={form.fullname}
          onChange={(e) => setForm({ ...form, fullname: e.target.value })}
          required
          className="w-full p-3 mb-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="w-full p-3 mb-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          className="w-full p-3 mb-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={form.confirm}
          onChange={(e) => setForm({ ...form, confirm: e.target.value })}
          required
          className="w-full p-3 mb-6 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition"
        >
          Sign Up
        </button>

        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-500 hover:underline">
            Sign in now
          </Link>
        </p>
      </form>
    </div>
  );
}
