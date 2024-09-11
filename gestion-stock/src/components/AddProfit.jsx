import React, { useState } from 'react';
import axios from 'axios';

const AddProfit = () => {
  const [profit, setProfit] = useState({
    amount: 0,
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfit({ ...profit, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/profits', profit);
      alert('Ganancia agregada');
      setProfit({ amount: 0, description: '' });
    } catch (error) {
      console.error('Error adding profit', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Ganancia</h2>
      <label>
        Monto:
        <input type="number" name="amount" value={profit.amount} onChange={handleChange} />
      </label>
      <label>
        Descripción:
        <input type="text" name="description" value={profit.description} onChange={handleChange} />
      </label>
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddProfit;
