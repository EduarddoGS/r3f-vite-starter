// ReservaCard.jsx
import React from 'react';
import CanvasCard from './CanvasCard';

function formatTime(timeString) {
  const time = new Date(timeString);
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

function ReservaCard({ reserva }) {
  return (
    <>
    <div className="card-container" >
    <CanvasCard />
    <div className="reservaCard">
      <h2>Fecha de Reserva: {formatDate(reserva.fecha_reserva)}</h2>
      <h2>Hora de Inicio: {formatTime(reserva.hora_inicio)}</h2>
      <h2>Hora Final: {formatTime(reserva.hora_final)}</h2>
      <h2>Matrícula: {reserva.matricula}</h2>
    </div>
    </div>
    </>
    
  );
}

export default ReservaCard;

