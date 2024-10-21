import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import InsertProduct from './components/InsertProduct';
import GetProductById from './components/GetProductById';
import UpdateProductById from './components/UpdateProductById';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Consumo de API</h1>
                    <nav>
                        <ul>
                            <li><Link to="/insert">Inserir Produto</Link></li>
                            <li><Link to="/getById">Retornar Produto</Link></li>
                            <li><Link to="/updateById">Alterar Produto</Link></li>
                            <li><Link to="/all">Retornar Todos os Produtos</Link></li>
                        </ul>
                    </nav>
                </header>
                <div className="App-content">
                    <Routes>
                        <Route path="/insert" element={<InsertProduct />} />
                        <Route path="/getById" element={<GetProductById />} />
                        <Route path="/updateById" element={<UpdateProductById />} />
                        <Route path="/all" element={<ProductList />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;