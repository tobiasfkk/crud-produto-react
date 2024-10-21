import React, { useState } from 'react';
import axios from 'axios';

function InsertProduct() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [message, setMessage] = useState(''); // Estado para armazenar a mensagem

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (!nome || !preco) {
                setMessage('Nome e preço são obrigatórios!'); // Define a mensagem de erro
                return;
            }
            if (isNaN(preco)) {
                setMessage('Preço deve ser um número!'); // Define a mensagem de erro
                return;
            }
            const response = await axios.post('http://localhost:8080/api/produtos', {
                nome: nome,
                preco: preco
            });
            setMessage('Produto inserido com sucesso!'); // Define a mensagem de sucesso
            setNome(''); // Limpa o campo nome
            setPreco(''); // Limpa o campo preço
        } catch (error) {
            setMessage('Erro ao inserir produto.'); // Define a mensagem de erro
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
            {message && <p className="message">{message}</p>} {/* Exibe a mensagem condicionalmente */}
        </div>
    );
}

export default InsertProduct;