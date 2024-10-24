import React, { useState } from 'react';
import axios from 'axios';

function GetProductById() {
    const [id, setId] = useState('');
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(''); // Estado para armazenar a mensagem de erro

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8080/api/produtos/${id}`);
            setProduct(response.data);
            setError(''); // Limpa a mensagem de erro
        } catch (error) {
            setProduct(null); // Limpa o produto
            setError(`Erro: ${error.response.status} - ${error.response.data.message || 'Erro ao buscar produto.'}`);
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
            {error && <p className="message error">{error}</p>} {/* Exibe a mensagem de erro condicionalmente */}
            {product && (
                <div className="product-details">
                    <h3>Produto encontrado:</h3>
                    <p>Nome: {product.nome}</p>
                    <p>Preço: {product.preco}</p>
                </div>
            )}
        </div>
    );
}

export default GetProductById;