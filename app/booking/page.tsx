'use client'

import React, { useEffect, useState } from 'react';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

type Room = {
  bookings: any;
  room_id: number;
  room_number: string;
  room_type: string;
  room_details: string;
  status: string;
};

type Customer = {
  [x: string]: any;
  customer_id: number;
  customer_name: string;
  email: string;
  token: string;
};

export default function Booking() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<Customer | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      alert('Please log in first');
      window.location.href = '/login';
      return;
    }
    setUser(JSON.parse(userData));

    const fetchRooms = async () => {
      try {
        const response = await fetch('http://localhost:3009/room');
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

  const handleBooking = async (room_id: number) => {
    if (!user) return;

    try {
      const response = await fetch('http://localhost:3009/booking/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_id: user.customer_id,
          room_id: room_id,
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert('Booking successful!');

        // ✅ Change the room status to 'booked' in state
        setRooms(prevRooms =>
          prevRooms.map(room =>
            room.room_id === room_id ? { ...room, status: 'booked' } : room
          )
        );
      } else {
        alert(data.message || 'Unable to book the room');
      }
    } catch (error) {
      alert('Error occurred while booking the room');
    }
  };

  const handleCancelBooking = async (room_id: number) => {
    if (!user) return;

    const room = rooms.find(room => room.room_id === room_id);
    if (!room) return;

    const booking = room.bookings.find((booking: { customer_id: number }) => booking.customer_id === user.customer_id);

    if (booking) {
      try {
        const response = await fetch(`http://localhost:3009/booking/cancel/${booking.booking_id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`,
          },
        });

        const data = await response.json();
        if (data.success) {
          alert('Booking cancelled successfully');

          // Update the room status to 'Available' in frontend
          setRooms(prevRooms =>
            prevRooms.map(room =>
              room.room_id === room_id ? { ...room, status: 'Available' } : room
            )
          );
        } else {
          alert(data.message || 'Unable to cancel the booking');
        }
      } catch (error) {
        alert('Error occurred while cancelling the booking');
      }
    } else {
      alert('You did not book this room');
    }
  };

  return (
    <div className="bg-[#f2f4dd] min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-10">
        <h1 className="text-3xl font-bold text-center text-gray-800">Booking</h1>
        {user && <p className="mt-2 text-xl text-gray-700">Welcome, {user.customer_name}</p>}
        <p className="mt-2 text-lg text-gray-600">Select the room you wish to book</p>

        {loading && <p className="mt-4 text-blue-500">Loading rooms...</p>}
        {error && <p className="mt-4 text-red-500">Error: {error}</p>}

        {!loading && !error && (
          <div className="mt-6 w-full max-w-5xl p-4 bg-white shadow-lg rounded-xl border border-gray-200">
            <table className="w-full border-collapse text-center">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">Room Number</th>
                  <th className="border px-4 py-2">Type</th>
                  <th className="border px-4 py-2">Details</th>
                  <th className="border px-4 py-2">Status</th>
                  <th className="border px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map(room => (
                  <tr key={room.room_id}>
                    <td className="border px-4 py-2">{room.room_number}</td>
                    <td className="border px-4 py-2">{room.room_type}</td>
                    <td className="border px-4 py-2">{room.room_details}</td>
                    <td className="border px-4 py-2">
                      <span
                        className={`px-2 py-1 rounded-lg ${
                          room.status.toLowerCase() === 'available'
                            ? 'bg-green-300 text-green-800'
                            : 'bg-gray-300 text-gray-700'
                        }`}
                      >
                        {room.status}
                      </span>
                    </td>
                    <td className="border px-4 py-2">
                      {room.status.toLowerCase() === 'available' ? (
                        <button
                          onClick={() => handleBooking(room.room_id)}
                          className="px-4 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700 transition duration-300"
                        >
                          Book
                        </button>
                      ) : (
                        <button
                          disabled
                          className="px-4 py-2 rounded-lg text-white bg-blue-500 cursor-not-allowed"
                        >
                          Already Booked
                        </button>
                      )}
                    </td>
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
