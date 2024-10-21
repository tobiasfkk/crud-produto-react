import React, { useState } from 'react';
import axios from 'axios';

function UpdateProductById() {
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put('http://localhost:8080/api/produtos/updateProdutoById', {
                id: id,
                nome: nome,
                preco: preco
            });
            console.log('Produto atualizado:', response.data);
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
        }
    };

    return (
        <div>
            <h2>Update de um produto pelo ID</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID:</label>
                    <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
                </div>
                <div>
                    <label>Nome:</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div>
                    <label>Preço:</label>
                    <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} />
                </div>
                <button type="submit">Atualizar</button>
            </form>
        </div>
    );
}

export default UpdateProductById;