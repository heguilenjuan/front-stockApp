// src/components/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [productos, setProductos] = useState([]);
  const [ganancias, setGanancias] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productosRes = await axios.get('/api/productos');
        const gananciasRes = await axios.get('/api/asignaciones');
        setProductos(productosRes.data);
        setGanancias(gananciasRes.data);
        console.log('Productos:', productosRes.data);
        console.log('Ganancias:', gananciasRes.data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    fetchData();
  }, []);

  const data = {
    labels: productos.map(producto => producto.nombre),
    datasets: [
      {
        label: 'Stock Disponible',
        data: productos.map(producto => producto.stock),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Ganancias',
        data: ganancias.map(asignacion => asignacion.monto),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h2>Dashboard de Gestión</h2>
      <Bar data={data} />
    </div>
  );
};

export default Dashboard;
