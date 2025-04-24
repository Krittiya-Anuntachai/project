'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // เปลี่ยน URL เป็น /login เพื่อให้ตรงกับที่สร้างใน customer.controller
      const res = await fetch('http://localhost:3009/customers/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      // ตรวจสอบสถานะการตอบกลับ
      if (!res.ok) {
        throw new Error('เกิดข้อผิดพลาดจากเซิร์ฟเวอร์');
      }

      const data = await res.json();

      // ถ้าล็อกอินสำเร็จ
      if (data.success && data.user) {
        // ✅ เก็บข้อมูล user ไว้ใน localStorage
        localStorage.setItem('user', JSON.stringify(data.user));  // เก็บข้อมูลผู้ใช้ใน localStorage

        alert('เข้าสู่ระบบสำเร็จ');

        // ✅ ไปหน้า booking
        window.location.href = '/booking';  // ทำการเปลี่ยนหน้าไปยังหน้า booking
      } else {
        alert(data.message || 'เข้าสู่ระบบไม่สำเร็จ');
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f2f4dd]">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded-2xl px-8 py-10 w-full max-w-md"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="w-full p-3 mb-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="w-full p-3 mb-6 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition"
        >
          Sign In
        </button>
        <p className="text-center mt-6 text-sm text-gray-600">
          Don't have an account?{' '}
          <Link href="/register" className="text-blue-500 hover:underline">
            Sign up now
          </Link>
        </p>
      </form>
    </div>
  );
}
