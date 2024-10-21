import React, { useState } from 'react';
import axios from 'axios';

function GetProductById() {
    const [id, setId] = useState('');
    const [product, setProduct] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/produtos/getProdutoById', {
                id: id
            });
            setProduct(response.data);
        } catch (error) {
            console.error('Erro ao buscar produto:', error);
        }
    };

    return (
        <div>
            <h2>Retorna produto pelo ID</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID:</label>
                    <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
                </div>
                <button type="submit">Buscar</button>
            </form>
            {product && (
                <div>
                    <h3>Produto encontrado:</h3>
                    <p>Nome: {product.nome}</p>
                    <p>Preço: {product.preco}</p>
                </div>
            )}
        </div>
    );
}

export default GetProductById;