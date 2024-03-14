import React from "react";
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Html } from "@react-three/drei";


const PopUp = ({ position, visible, onClose }) => {
  const [fecha, setFecha] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFinal, setHoraFinal] = useState('');
  const matricula = '01583339'; 
  const idSala = 2;
  
  const handleFechaChange = (event) => {
    setFecha(event.target.value);
    console.log("Fecha cambiada:", event.target.value);
  };

  const handleHoraInicioChange = (event) => {
    setHoraInicio(event.target.value);
    console.log("Hora de inicio cambiada:", event.target.value);
  };

  const handleHoraFinalChange = (event) => {
    setHoraFinal(event.target.value);
    console.log("Hora final cambiada:", event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/users/creareserva', {
        fecha: fecha,
        horaInicio: horaInicio,
        horaFinal: horaFinal,
        matricula: matricula,
        idSala: idSala

      });
      console.log('Reserva creada:', response.data);
      onClose(); // Cerrar el PopUp después de enviar la reserva
    } catch (error) {
      console.log(fecha);
      console.log(horaInicio);
      console.log(horaFinal);
      console.log(matricula);
      console.log(idSala);
      console.error('Error al crear la reserva:', error);
    }
  };




  return (
    <Html position={position} center>
      {visible && (
        <div  className="Container-popup" style={{  padding: "40px" }}>
          <h2>LEGO ROOM</h2>
          <form>
            <div className="fecha v-m">
              <label for="fecha">Fecha:</label>
              <input type="date" id="fecha" value={fecha} onChange={handleFechaChange} />
            </div>
            <div className="horas v-m">
              <div className="hora">
              <label for="hora">Hora Inicio:</label>
              <input type="time" id="hora" value={horaInicio} onChange={handleHoraInicioChange}/>
              </div>
              <div className="hora">
              <label for="hora">Hora Final:</label>
              <input type="time" id="hora" value={horaFinal} onChange={handleHoraFinalChange}/>
              </div>
            </div>
            <div className="gadgets v-m">
              <div className="Individual-gadget">
              <label for="cantidad">Macbook pro</label>
              <img src="./src/assets/Gadgets/macbook.png" />
              
              <input type="number" id="cantidad" v-model="cantidad" />
              </div>
              <div className="Individual-gadget">
              <label for="cantidad">Apple Vision pro</label>
              <img src="./src/assets/Gadgets/vision_pro.png" />
              <input type="number" id="cantidad" v-model="cantidad" />
              </div>
              <div className="Individual-gadget">
              <label for="cantidad">Xbox one</label>
              <img src="./src/assets/Gadgets/xbox.png" />
              <input type="number" id="cantidad" v-model="cantidad" />
              </div>
            </div>

          </form>
          <button onClick={onClose}>Cerrar</button>
          <button onClick={handleSubmit}>Reservar</button>
        </div>
      )}
    </Html>
  );
};

export default PopUp;

  