import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProdutosList = {"id": 2,"nome": "Updated Product Name","preco": 99.99}

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/produtos/returnAllProdutos')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Lista de produtos</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        ID: {product.id} <br/> 
                        Nome: {product.nome} <br/>
                        Preço: R${product.preco} <br/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;