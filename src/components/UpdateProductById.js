import React, { useState } from 'react';
import axios from 'axios';

function UpdateProductById() {
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/produtos/updateProdutoById', {
                id: id,
                nome: nome,
                preco: preco
            });
            console.log('Produto atualizado:', response.data);
            setSuccessMessage('Produto atualizado com sucesso!'); // Define a mensagem de sucesso
            setErrorMessage(''); // Limpa a mensagem de erro
            setId(''); // Limpa o campo ID
            setNome(''); // Limpa o campo nome
            setPreco(''); // Limpa o campo preço
        } catch (error) {
            setErrorMessage('Erro ao atualizar produto.'); // Define a mensagem de erro
            setSuccessMessage(''); // Limpa a mensagem de sucesso
            console.error('Erro ao atualizar produto:', error);
        }
    };

    return (
        <div className = 'principal'>
            <h1>Altera Produto</h1>
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
            {successMessage && <p className="message success">{successMessage}</p>}
            {errorMessage && <p className="message error">{errorMessage}</p>}
        </div>
    );
}

export default UpdateProductById;