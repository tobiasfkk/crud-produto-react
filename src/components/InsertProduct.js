import React, { useState } from 'react';
import axios from 'axios';

function InsertProduct() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [message, setMessage] = useState('');

    // Função tradicional para lidar com a submissão do formulário
    async function submitProductForm(event) {
        event.preventDefault();

        if (!nome || !preco) {
            setMessage('Nome e preço são obrigatórios!');
            return;
        }
        if (isNaN(preco)) {
            setMessage('Preço deve ser um número!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/produtos', {
                nome: nome,
                preco: preco
            });
            setMessage('Produto inserido com sucesso!');
            setNome('');
            setPreco('');
        } catch (error) {
            setMessage('Erro ao inserir produto.');
            console.error('Erro ao inserir produto:', error);
        }
    }

    return (
        <div className='principal'>
            <h1>Inserir Produto</h1>
            <form onSubmit={submitProductForm}>
                <div>
                    <label>Nome:</label>
                    <input type="text" value={nome} onChange={function(e) { setNome(e.target.value); }} />
                </div>
                <div>
                    <label>Preço:</label>
                    <input type="number" value={preco} onChange={function(e) { setPreco(e.target.value); }} />
                </div>
                <button type="submit">Inserir</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default InsertProduct;