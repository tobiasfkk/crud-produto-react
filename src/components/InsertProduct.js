import React, { useState } from 'react';
import axios from 'axios';

function InsertProduct() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/produtos', {
                nome: nome,
                preco: preco
            });
            console.log('Produto inserido:', response.data);
        } catch (error) {
            console.error('Erro ao inserir produto:', error);
        }
    };

    return (
        <div>
            <h2>Inserir um novo produto</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div>
                    <label>Preço:</label>
                    <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} />
                </div>
                <button type="submit">Inserir</button>
            </form>
        </div>
    );
}

export default InsertProduct;