import React, { Component } from 'react';
import './App.css';
import CriarCliente from './components/criar-cliente';
import ListarCliente from './components/listar-cliente';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import CriarVeiculo from './components/criar-veiculo';
import ListarVeiculo from './components/listar-veiculo';

class App extends Component {
  render() {
	  return (
		<BrowserRouter>
			<ul>
				<li><Link to="/cliente/cadastrar">Cadastrar Cliente</Link></li>
				<li><Link to="/cliente/listar">Listar Cliente</Link></li>
				<li><Link to="/veiculo/cadastrar">Cadastrar Veiculo</Link></li>
				<li><Link to="/veiculo/listar">Listar Veiculo</Link></li>
			</ul>
			<div>
				<link rel="stylesheet" type="text/css" href="./App.css" />
				<Route exact path="/cliente/cadastrar/:id?" component={CriarCliente} />
				<Route exact path="/cliente/listar" component={ListarCliente} />
				<Route exact path="/veiculo/cadastrar/:id?" component={CriarVeiculo} />
				<Route exact path="/veiculo/listar" component={ListarVeiculo} />
			</div>
		</BrowserRouter>
		/*<div>
			<CriarUsuario />
			<ListarUsuarios />
		</div>*/
	  );
  }
}

export default App;
