import React, { useEffect, useState } from 'react';
import { ref, onValue, off } from 'firebase/database';
import { database } from '../../services/firebaseConfig'; // Certifique-se de que o caminho está correto
import { Header } from "../../components/header"; // Certifique-se de que o caminho está correto
import "./styles.css";

export function Acao() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dbRef = ref(database, 'Sensores/MPU');
    
    const handleData = (snapshot) => {
      const data = snapshot.val('Sensores/MPU');
      console.log(data); // Loga os dados para verificar a estrutura
      console.log(useEffect)
      setData(data);
    };

    onValue(dbRef, handleData);

    // Cleanup subscription on unmount
    return () => {
      off(dbRef, 'value', handleData);
    };
  }, []);

 

  return (
    <div>
      <Header />
      <div>
        <h1>Dados do Sensor MPU</h1>
        <p>Aceleração: {data?.Aceleração || 'N/A'}</p>
        <p>Rotação: {data?.Rotação || 'N/A'}</p>
        <p>Temperatura: {data?.Temperatura || 'N/A'}</p>
      </div>
    </div>
  );
}