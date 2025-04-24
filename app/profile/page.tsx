'use client'

import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

interface User {
  customer_id: number;
  customer_name: string;
  email: string;
}

interface Room {
  room_number: string;
}

interface Booking {
  booking_id: number;
  room: Room;
}

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser: User = JSON.parse(storedUser);
      setUser(parsedUser);

      // Fetch data from API and log the result to check the response
      fetch(`http://localhost:3009/booking/customer/${parsedUser.customer_id}`)
        .then((res) => res.json())
        .then((data: Booking[]) => {
          console.log('Fetched bookings:', data); // Log the fetched data for debugging
          if (data && data.length > 0) {
            setBookings(data);
          }
        })
        .catch((err) => {
          console.error('Error fetching bookings:', err);
          alert('Error loading booking data');
        });
    }
  }, []);

  // Function to cancel booking
  const cancelBooking = (bookingId: number) => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser: User = JSON.parse(storedUser);

      // Log customer info and booking ID for debugging
      console.log('Cancel booking for customer:', parsedUser);
      console.log('Booking ID:', bookingId);

      fetch(`http://localhost:3009/booking/cancel/${bookingId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer_id: parsedUser.customer_id, // Send customer_id for cancellation
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('Cancel booking response:', data); // Log the response data for debugging
          if (data.success) {
            // If cancellation is successful, remove the booking from state
            setBookings(bookings.filter((booking) => booking.booking_id !== bookingId));
          } else {
            alert(data.message); // Show message if cancellation fails
          }
        })
        .catch((err) => {
          console.error('Error canceling booking:', err);
          alert('Error canceling booking');
        });
    }
  };

  return (
    <div className="bg-[#f2f4dd] min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold text-center text-black">Profile</h1>

        {user ? (
          <div className="mt-6 bg-white rounded-lg shadow-lg p-6 w-full max-w-lg text-left">
            <p className="text-xl font-semibold">User Information</p>
            <p><strong>Name:</strong> {user.customer_name}</p>
            <p><strong>Email:</strong> {user.email}</p>

            <div className="mt-6">
              <p className="text-xl font-semibold">Booked Rooms</p>
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <div key={booking.booking_id} className="flex justify-between items-center mb-4 bg-gray-50 p-4 rounded-lg shadow-sm">
                    <div className="flex flex-col">
                      <p><strong>Room:</strong> {booking.room.room_number || 'Room number not found'}</p>
                    </div>
                    <button
                      onClick={() => cancelBooking(booking.booking_id)}
                      className="mt-2 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none"
                    >
                      Cancel Booking
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No bookings yet</p>
              )}
            </div>
          </div>
        ) : (
          <p className="mt-4 text-gray-500">Please log in to view your information</p>
        )}
      </main>

      <Footer />
    </div>
  );
}
