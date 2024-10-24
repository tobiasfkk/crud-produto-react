import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get('http://localhost:8080/api/produtos/returnAllProdutos');
                setProducts(response.data);
                setMessage('');
            } catch (error) {
                setProducts([]);
                setMessage('Erro ao buscar produtos.');
                console.error('Erro ao buscar produtos:', error);
            }
        }
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Lista de produtos</h1>
            <ul>
                {products.map(product => (
                    <div key={product.id} className='product-card'>
                        <p><strong>ID:</strong>{product.id}</p>
                        <p><strong>Nome:</strong>{product.nome}</p>
                        <p><strong>Preço:</strong>{product.preco}</p>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;