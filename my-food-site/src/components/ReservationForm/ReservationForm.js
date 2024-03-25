import React, { useState } from 'react';
import './ReservationForm.css';
import reservationImage from './reservation.jpg';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    persons: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/backend/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful reservation
        console.log('Reservation submitted successfully');
        // You can add additional logic here, such as clearing the form or displaying a success message
      } else {
        // Handle error
        console.error('Error submitting reservation');
      }
    } catch (err) {
      console.error('Error submitting reservation:', err);
    }
  };



  return (
    <div className="reservation-container">
      <div className="reservation-image">
        <img src={reservationImage} alt="Reservation" />
      </div>
      <div className="form-container">
        <h2>Make a Reservation</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Enter Name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="persons">Number of Persons</label>
            <input
              type="number"
              id="persons"
              name="persons"
              placeholder='Enter Number Of Persons'
              value={formData.persons}
              onChange={handleChange}
              min="1"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Make Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;