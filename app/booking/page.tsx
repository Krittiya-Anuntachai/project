'use client'

import React, { useEffect, useState } from 'react';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

type Room = {
  room_id: number;
  room_number: string;
  room_type: string;
  room_details: string;
  status: string;
};

export default function Booking() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch('http://localhost:3005/room');
        if (!response.ok) throw new Error('Failed to fetch room data');
        const data = await response.json();
        setRooms(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="bg-[#f2f4dd] min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-bold">Booking</h1>
        <p className="mt-4 text-gray-600">This is the booking page.</p>

        {loading && <p className="mt-4 text-blue-500">Loading rooms...</p>}
        {error && <p className="mt-4 text-red-500">Error: {error}</p>}

        {!loading && !error && (
          <div className="mt-6 w-full max-w-3xl">
            <table className="w-full border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-4 py-2">Room Number</th>
                  <th className="border px-4 py-2">Type</th>
                  <th className="border px-4 py-2">Details</th>
                  <th className="border px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map(room => (
                  <tr key={room.room_id}>
                    <td className="border px-4 py-2">{room.room_number}</td>
                    <td className="border px-4 py-2">{room.room_type}</td>
                    <td className="border px-4 py-2">{room.room_details}</td>
                    <td className="border px-4 py-2">{room.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}