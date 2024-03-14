// reservas.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import ReservaCard from './ReservaCard';
import "../index.css";

function formatTime(timeString) {
  const time = new Date(timeString);
  
  // Extraer horas y minutos
  const hours = time.getUTCHours().toString().padStart(2, '0');
  const minutes = time.getUTCMinutes().toString().padStart(2, '0');
  
  return `${hours}:${minutes}`;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const day = date.getUTCDate().toString().padStart(2, '0');
  return `${day}-${month}-${year}`;
}

function Reservas() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:3000/users/reserva/01583339`);
        setReservas(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
      <h1>Reservas</h1>
      <div className="reserva-container">
      
      {reservas.map((reserva, index) => (
          <ReservaCard key={index} reserva={reserva} />
        ))}
      </div>
      </div>
    </>
  );
}

export default Reservas;
