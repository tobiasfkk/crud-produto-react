import React, { useState } from 'react';
import axios from 'axios';

function UpdateProductById() {
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [message, setMessage] = useState(''); // Estado para armazenar a mensagem

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/produtos/updateProdutoById', {
                id: id,
                nome: nome,
                preco: preco
            });
            console.log('Produto atualizado:', response.data);
            setMessage('Produto atualizado com sucesso!'); // Define a mensagem de sucesso
            setId(''); // Limpa o campo ID
            setNome(''); // Limpa o campo nome
            setPreco(''); // Limpa o campo preço
        } catch (error) {
            setMessage('Erro ao atualizar produto.'); // Define a mensagem de erro
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
            {message && <p className="message">{message}</p>} {/* Exibe a mensagem condicionalmente */}
        </div>
    );
}

export default UpdateProductById;