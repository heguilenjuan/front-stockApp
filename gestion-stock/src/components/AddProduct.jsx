import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    stock: 0,
    price: 0,
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/products', product);
      alert('Producto agregado');
      setProduct({ name: '', stock: 0, price: 0, category: '' });
    } catch (error) {
      console.error('Error adding product', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Producto</h2>
      <label>
        Nombre:
        <input type="text" name="name" value={product.name} onChange={handleChange} />
      </label>
      <label>
        Stock:
        <input type="number" name="stock" value={product.stock} onChange={handleChange} />
      </label>
      <label>
        Precio:
        <input type="number" name="price" value={product.price} onChange={handleChange} />
      </label>
      <label>
        Categoría:
        <input type="text" name="category" value={product.category} onChange={handleChange} />
      </label>
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddProduct;
